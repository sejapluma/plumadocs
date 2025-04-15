import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
  const url = request.nextUrl.clone();
  const isMobilePath = url.pathname.includes('/mobile');

  // Se for dispositivo móvel e não estiver na versão mobile
  if (isMobile && !isMobilePath && url.pathname === '/') {
    url.pathname = '/mobile';
    return NextResponse.redirect(url);
  }

  // Se não for dispositivo móvel e estiver na versão mobile
  if (!isMobile && isMobilePath) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/mobile'],
} 