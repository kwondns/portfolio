export type TagsType = {
  name: string;
  color: string;
};
export type NoteType = {
  created_time: string;
  cover: { file: { url: string } };
  properties: {
    Tags: { multi_select: TagsType[] };
    Name: {
      title: {
        text: {
          content: string;
        };
      }[];
    };
  };
  public_url: string;
};
