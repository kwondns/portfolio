import { getProjectWithCache } from '@/libs/fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  try {
    const projectModalData = await getProjectWithCache(projectId);
    return NextResponse.json(projectModalData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (e) {
    return NextResponse.json({ error: 'Project Not Found' }, { status: 404 });
  }
}
