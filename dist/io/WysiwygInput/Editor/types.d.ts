export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: () => void;
    handleEmbedUrl: (handleEmbed?: any) => string;
    embedUrl?: {
        url: string;
        type: string;
    } | undefined;
};
