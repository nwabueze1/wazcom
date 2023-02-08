export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: () => void;
    handleEmbedUrl: (handleEmbed: any) => void;
    embedUrl?: {
        url: string;
        type: string;
    } | undefined;
};
