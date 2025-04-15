import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista de user agents móveis
const MOBILE_USER_AGENTS = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
  /Mobile/i,
]

// Função para detectar se é dispositivo móvel
function isMobile(userAgent: string) {
  return MOBILE_USER_AGENTS.some((regex) => regex.test(userAgent))
}

export function middleware(request: NextRequest) {
  // Pega o User-Agent do cabeçalho
  const userAgent = request.headers.get('user-agent') || ''
  
  // Verifica se é um dispositivo móvel
  const isMobileDevice = isMobile(userAgent)

  // URL atual
  const url = request.nextUrl.clone()
  
  // Se for mobile e não estiver no domínio mobile
  if (isMobileDevice && !url.hostname.startsWith('m.')) {
    // Cria nova URL para versão mobile
    const mobileUrl = new URL(url)
    mobileUrl.hostname = `m.${url.hostname}`
    
    // Retorna resposta com redirecionamento
    return NextResponse.redirect(mobileUrl)
  }

  // Se não for mobile e estiver no domínio mobile
  if (!isMobileDevice && url.hostname.startsWith('m.')) {
    // Cria nova URL para versão desktop
    const desktopUrl = new URL(url)
    desktopUrl.hostname = desktopUrl.hostname.replace('m.', '')
    
    // Retorna resposta com redirecionamento
    return NextResponse.redirect(desktopUrl)
  }

  // Se não precisar redirecionar, continua normalmente
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    '/((?!api|_next|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
} 