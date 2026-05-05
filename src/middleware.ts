import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // /admin 以下のパスのみBasic認証を適用
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // 環境変数から取得、なければデフォルト値
      const validUser = process.env.ADMIN_USER || 'admin';
      const validPwd = process.env.ADMIN_PASSWORD || 'ohisama2026';

      if (user === validUser && pwd === validPwd) {
        return NextResponse.next();
      }
    }

    url.pathname = '/api/auth';
    return new NextResponse('Auth Required.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

// 適用範囲を指定
export const config = {
  matcher: ['/admin/:path*'],
};
