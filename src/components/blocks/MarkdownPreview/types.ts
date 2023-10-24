export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type PostDataType = {
  title: string;
  subtitle: string;
  content: string;
  categoryId: number;
  date: Date;
};
