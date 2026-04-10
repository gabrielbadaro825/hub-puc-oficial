import { ClerkProvider } from '@clerk/nextjs'
import './globals.css' // Se você tiver um css

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
