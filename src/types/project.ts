export type ProjectType = {
  id: string;
  title: string;
  role: string;
  shorten_content: string;
  context: string;
  preview_image: string;
  images: string[];
  front_tag: string[];
  back_tag: string[];
  db: string;
  date: string;
  link: string;
  projectMoreDetail: string;
};

export type ProjectModalType = ProjectType & {
  modal_role: string;
  modal_content: string;
};
