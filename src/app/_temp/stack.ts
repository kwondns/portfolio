import { TagType } from '@/types/tagType';

export type StackType = { [key: string]: TagType[] };

export const frontStack: StackType = {
  Framework: [
    { value: 'React.JS', link: 'https://ko.legacy.reactjs.org' },
    { value: 'Next.JS', link: 'https://nextjs.org' },
  ],
  'State Management': [
    { value: 'MobX', link: 'https://ko.mobx.js.org/README.html' },
    { value: 'React.useContext', link: 'https://ko.legacy.reactjs.org/docs/hooks-reference.html#usecontext' },
  ],
  Design: [
    { value: 'Styled Components', link: 'https://styled-components.com' },
    { value: 'Material-UI', link: 'https://mui.com' },
  ],
};
export const backStack: StackType = {
  Framework: [{ value: 'Express.JS', link: 'https://expressjs.com' }],
  API: [
    { value: 'Rest API', link: '/stack' },
    { value: 'GraphQL', link: 'https://graphql.org' },
    { value: 'Apollo', link: 'https://www.apollographql.com/docs/' },
  ],
};

export const etcStack: StackType = {
  Language: [
    { value: 'TypeScript', link: 'https://www.typescriptlang.org' },
    { value: 'Python', link: 'https://www.python.org' },
  ],
  DB: [
    { value: 'MongoDB', link: 'https://www.mongodb.com/ko-kr' },
    { value: 'Redis', link: 'https://redis.io/docs/' },
  ],
  'Server Infra': [
    { value: 'AWS Lambda', link: 'https://aws.amazon.com/ko/pm/lambda' },
    { value: 'AWS S3', link: 'https://aws.amazon.com/ko/s3' },
    { value: 'Docker', link: 'https://www.docker.com' },
    { value: 'Kubernetes', link: 'https://kubernetes.io' },
  ],
};
