import { NextResponse } from 'next/server';
import { notion, query } from '../notion';

export async function GET() {
  const response = await notion.databases.retrieve({
    database_id: query.database_id,
  });
  const responseProperties = response.properties.Tags;
  if (responseProperties.type === 'multi_select') {
    const tags = responseProperties.multi_select.options;
    return NextResponse.json(tags);
  }
  return new NextResponse('Empty', { status: 404 });
}
