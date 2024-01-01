import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export async function GET() {
  const dbId = '513f7aa7-ac7f-4438-8276-3b5417f7f640';
  const response = await notion.databases.query({
    database_id: dbId,
    sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    filter: {
      property: 'view',
      select: { equals: 'View' },
    },
  });
  const responseResult = response.results;
  return NextResponse.json(responseResult);
}
