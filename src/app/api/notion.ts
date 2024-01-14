import { Client } from '@notionhq/client';

export const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });
export const dbId = '513f7aa7-ac7f-4438-8276-3b5417f7f640';

type T = {
  property: string;
  title?: { contains: string };
  multi_select?: { contains: string };
};

type PropertyType = {
  [keys: string]:
    | {
        [keys: string]: string;
      }
    | string;
};

export const query = Object.create(null);
const defaultFilter = () =>
  Object.assign(Object.create(null), {
    filter: {
      and: [{ property: 'view', select: { equals: 'View' } }],
    },
  });
Object.assign(query, { database_id: dbId }, { sorts: [{ timestamp: 'created_time', direction: 'descending' }] });

query.all = () => Object.assign(query, defaultFilter());
query.oneFilter = (item: PropertyType) => {
  const filter = defaultFilter();
  filter.filter.and.push(item);
  return Object.assign(query, filter);
};

query.multiFilter = (items: T[]) => {
  const filter = defaultFilter();
  filter.filter.and.push(...items);
  return Object.assign(query, filter);
};
