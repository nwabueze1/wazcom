export type EditorProps = {
<<<<<<< HEAD
   content: string;
   handleChange: (content: string) => void;
   embed?: { type: string, value: string };
}
=======
  handleContent: (content: string) => void;
  handleImageModalState: (data?: string) => void;
  embedUrl?: { url?: string; type?: string };
};
>>>>>>> develop
