import { AuthBootstrap } from '@/components/auth-bootstrap'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthBootstrap>
      {children}
    </AuthBootstrap>
  )
}