export type NoteType = {
  created_time: string;
  cover: { file: { url: string } };
  properties: {
    Tags: {
      multi_select: {
        name: string;
        color: string;
      }[];
    };
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
