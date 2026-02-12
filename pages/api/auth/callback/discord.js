export default async function handler(req, res) {
  const { code } = req.query
  if (!code) return res.status(400).send('Missing code')

  const clientId = process.env.DISCORD_CLIENT_ID
  const clientSecret = process.env.DISCORD_CLIENT_SECRET
  if (!clientId || !clientSecret) return res.status(500).send('OAuth client not configured')

  // Determine redirect_uri (must match the one used when initiating OAuth)
  const proto = req.headers['x-forwarded-proto'] || (req.headers.referer && req.headers.referer.split(':')[0]) || 'http'
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const base = process.env.NEXTAUTH_URL || (host ? `${proto}://${host}` : `http://localhost:3000`)
  const redirect_uri = `${base.replace(/\/$/, '')}/api/auth/callback/discord`

  const params = new URLSearchParams()
  params.append('client_id', clientId)
  params.append('client_secret', clientSecret)
  params.append('grant_type', 'authorization_code')
  params.append('code', code)
  params.append('redirect_uri', redirect_uri)

  try {
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    })

    if (!tokenRes.ok) {
      const body = await tokenRes.text()
      console.error('Token exchange failed', body)
      return res.status(502).send('Token exchange failed')
    }

    const tokenData = await tokenRes.json()
    const accessToken = tokenData.access_token
    if (!accessToken) return res.status(502).send('No access token returned')

    // Fetch user identity
    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    if (!userRes.ok) {
      const body = await userRes.text()
      console.error('User fetch failed', body)
      return res.status(502).send('Failed to fetch user')
    }
    const user = await userRes.json()
    const username = user.username ? `${user.username}#${user.discriminator}` : user.id || ''

    // Redirect to a friendly success page (do not expose tokens in URL)
    const redirectTo = `/auth/success?user=${encodeURIComponent(username)}`
    return res.redirect(302, redirectTo)
  } catch (err) {
    console.error(err)
    return res.status(500).send('OAuth callback error')
  }
}
