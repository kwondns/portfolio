import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export async function List() {
  const blockId = 'e63468ce-1ffa-4965-b208-fed303c3d255';
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 1000,
  });
  const responseResult = response.results as BlockObjectResponse[];
  const result = responseResult.filter((child) => child.type === 'child_page').map((page) => page.id);
  return NextResponse.json(result);
}

export async function Page(pageId: string | null) {
  if (pageId) {
    const response = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;
    return NextResponse.json(response.public_url);
  }
  return NextResponse.json('잘못된 요청입니다.', { status: 404 });
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  if (searchParams.has('pageId')) return Page(searchParams.get('pageId'));
  return List();
}
