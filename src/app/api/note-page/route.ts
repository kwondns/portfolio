import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';
import { query } from '../notion';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export async function AllNote() {
  const response = await notion.databases.query(query.all());
  const responseResult = response.results;
  return NextResponse.json(responseResult);
}

export async function NoteByTag(tag: string) {
  const response = await notion.databases.query(query.oneFilter({ property: 'Tags', multi_select: { contains: tag } }));
  const responseResult = response.results;
  return NextResponse.json(responseResult);
}

export async function NoteBySearch(search: string) {
  const response = await notion.databases.query(query.oneFilter({ property: 'Name', title: { contains: search } }));
  const responseResult = response.results;
  return NextResponse.json(responseResult);
}

export async function NoteByMulti(tag: string, search: string) {
  const response = await notion.databases.query(
    query.multiFilter([
      { property: 'Name', title: { contains: search } },
      { property: 'Tags', multi_select: { contains: tag } },
    ]),
  );
  const responseResult = response.results;
  return NextResponse.json(responseResult);
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  if (tag && search) return NoteByMulti(tag, search);
  if (tag) return NoteByTag(tag);
  if (search) return NoteBySearch(search);
  return AllNote();
}
