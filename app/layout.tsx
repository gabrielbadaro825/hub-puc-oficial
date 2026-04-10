import { ClerkProvider } from '@clerk/nextjs'
import './globals.css' // Opcional, se quiser usar CSS separado depois

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
