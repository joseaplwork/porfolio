import { verifyAccess, type ApiData } from '@vercel/flags';
import { getHypertuneData } from '@vercel/flags/providers/hypertune';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });

  const hypertuneData = await getHypertuneData({
    token: process.env.HYPERTUNE_ADMIN_TOKEN!,
  });


  return NextResponse.json<ApiData>(hypertuneData);
}
