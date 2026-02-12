import { useRouter } from 'next/router'

export default function Success() {
  const router = useRouter()
  const { user } = router.query

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-white">
      <div className="p-10 bg-glass rounded-xl text-center">
        <h1 className="text-3xl font-display">Authentication Successful</h1>
        {user ? (
          <p className="mt-4">Welcome, <strong>{user}</strong></p>
        ) : (
          <p className="mt-4">You have successfully authorized. You can close this tab.</p>
        )}
      </div>
    </div>
  )
}
