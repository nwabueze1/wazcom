export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: () => void;
    embedUrl: EmbedProps;
};
type EmbedProps = {
    url: string;
    type: string;
};
export {};
