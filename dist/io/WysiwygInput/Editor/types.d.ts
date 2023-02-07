export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: () => void;
    embedUrl?: {
        url: string;
        type: string;
    };
};
