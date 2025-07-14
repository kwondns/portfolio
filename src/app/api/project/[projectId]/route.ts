import { get } from '@/libs/fetch';
import { NextRequest, NextResponse } from 'next/server';
import { ProjectModalType } from '@/types/project';

export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const data = await get<ProjectModalType>(`/port/project/${projectId}`);
  return NextResponse.json(data);
}
