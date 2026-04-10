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
    // 👇 COLOQUE SUA CHAVE PUBLICA AQUI DENTRO DAS ASPAS
    <ClerkProvider publishableKey="pk_test_Y2hhcm1pbmctaWd1YW5hLTE3LmNsZXJrLmFjY291bnRzLmRldiQ">
      <html lang="pt-br">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
