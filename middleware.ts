import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL('/page-1/', request.url))
}

export const config = {
  matcher: ['/rewrite/:path*'],
}