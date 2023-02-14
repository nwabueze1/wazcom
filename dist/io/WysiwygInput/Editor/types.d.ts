export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: (data?: string) => void;
    embedUrl?: {
        url?: string;
        type?: string;
    };
};
