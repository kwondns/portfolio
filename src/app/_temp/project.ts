import { ProjectPreviewType } from '@/types/projectType';

const newFront = (value: string) => {
  return { value, type: 'Front-End' } as const;
};
const newBack = (value: string) => {
  return { value, type: 'Back-End' } as const;
};

export const previewProject: ProjectPreviewType[] = [
  {
    id: 'test1',
    previewImage: '/images/khcpa/khcpa01.png',
    title: '한국힐링문화진흥협회',
    contents: '홈페이지 리뉴얼',
    date: '2023.01',
    frontTag: [newFront('React.JS'), newFront('Typescript'), newFront('Material-UI'), newFront('Styled-Components')],
    backTag: [
      newBack('Node.JS'),
      newBack('AWS Lambda'),
      newBack('AWS S3'),
      newBack('AWS CloudFront'),
      newBack('AWS API Gateway'),
      newBack('Mongo Atlas'),
    ],
    DBTag: 'MongoDB',
  },
  {
    id: 'test1',
    previewImage: '/images/multi/multi01.png',
    title: 'Multi Monitoring',
    contents: '다중 디바이스 모니터링',
    date: '2022.10',
    frontTag: [newFront('React.JS'), newFront('Next.JS'), newFront('Typescript')],
    backTag: [newBack('Next.JS'), newBack('Docker')],
    DBTag: 'MongoDB',
  },
  {
    id: 'test1',
    previewImage: '/images/haru/haru01.png',
    title: '하루세컷',
    contents: 'SNS형 일기',
    date: '2022.04',
    frontTag: [newFront('React.JS'), newFront('Typescript'), newFront('Mobx')],
    backTag: [newBack('Python'), newBack('FastAPI')],
    DBTag: 'MongoDB',
  },
  {
    id: 'test1',
    previewImage: '/images/kakao/kakao01.png',
    title: '카카오톡',
    contents: '카카오톡 클론코딩',
    date: '2022.02',
    frontTag: [
      newFront('React.JS'),
      newFront('Typescript'),
      newFront('Apollo'),
      newFront('Material-UI'),
      newFront('Mobx'),
    ],
    backTag: [newBack('Express.JS'), newBack('GraphQL'), newBack('Apollo')],
    DBTag: 'MongoDB',
  },
  {
    id: 'test1',
    previewImage: '/images/nano/nano01.png',
    title: 'Jetson Nano Monitoring',
    contents: 'Jetson Nano 자원 모니터링',
    date: '2022.01',
    frontTag: [newFront('React.JS'), newFront('Typescript'), newFront('Mobx')],
    backTag: [newBack('Express.JS'), newBack('Node.JS'), newBack('Docker')],
    DBTag: 'Redis',
  },
  {
    id: 'test1',
    previewImage: '/images/dupi/dupi01.png',
    title: 'Dupi.Dr (두피 상태 진단 프로젝트)',
    contents: '간편하게 할 수 있는 두피 상태 분석 서비스',
    date: '2021.07',
    frontTag: [newFront('React.JS'), newFront('Javascript'), newFront('Core-UI')],
    backTag: [newBack('Node.JS'), newBack('Python')],
    DBTag: 'MongoDB',
  },
];
