import { StackByTech } from '@/organisms';

export default function StackTemplate() {
  const APIStack = [
    { name: 'Rest API', img: '/api.png' },
    { name: 'GraphQL', url: 'https://graphql.org', img: '/graphql.png' },
    { name: 'Apollo', url: 'https://www.apollographql.com/docs/', img: '/apollo.png' },
  ];
  const FrameworkStack = [
    { name: 'express.js', url: 'https://expressjs.com', img: '/express.png' },
    { name: 'mongoose', url: 'https://mongoosejs.com', img: '/mongoose.png' },
  ];

  return (
    <article id="stack">
      <StackByTech
        tech="back"
        stacksCategory={[
          { category: 'api', stacks: APIStack },
          { category: 'framework', stacks: FrameworkStack },
        ]}
      />
      <StackByTech
        tech="back"
        stacksCategory={[
          { category: 'api', stacks: APIStack },
          { category: 'framework', stacks: FrameworkStack },
        ]}
      />
      <StackByTech
        tech="back"
        stacksCategory={[
          { category: 'api', stacks: APIStack },
          { category: 'framework', stacks: FrameworkStack },
        ]}
      />
    </article>
  );
}
