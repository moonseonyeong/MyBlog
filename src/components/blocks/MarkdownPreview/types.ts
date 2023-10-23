export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type PostDataType = {
  title: string;
  subtitle: string;
  content: string;
  categoryId: number;
  date: Date;
};
