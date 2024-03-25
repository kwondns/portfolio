export type ProjectType = {
  date: string;
  id: string;
  preview_image: string;
  shorten_content: string;
  title: string;
  front_tag: string[];
  back_tag: string[];
  db: string;
};

export type ProjectDetailType = ProjectType & {
  id: string;
  role: string;
  context: string;
  images: string[];
  link: string;
  projectMoreDetail: string;
};
