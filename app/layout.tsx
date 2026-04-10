import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Hub PUC Oficial',
  description: 'Sistema de Matérias',
}

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
