
export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: () => void;
    handleEmbedUrl: (handleEmbed: () => void) => void;
    embedUrl?: {
        url: string,
        type: string
    } | undefined;
}
