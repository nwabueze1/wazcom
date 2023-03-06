
export type EditorProps = {
   content: string;
   handleChange: (content: string) => void;
   embed?: { type: string, value: string };
}
