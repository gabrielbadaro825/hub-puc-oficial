import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Definimos que as páginas de login e cadastro são PÚBLICAS.
// Sem isso, o segurança barra quem tenta logar, criando o erro 500.
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    // 2. Protege todas as outras rotas
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Pula arquivos internos e estáticos (css, imagens, etc.)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Sempre executa para APIs
    '/(api|trpc)(.*)',
  ],
};
