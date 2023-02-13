
export type EditorProps = {
    handleContent: (content: string) => void;
    handleImageModalState: () => void;
    handleEmbedUrl?: (data?: string) => string;
    embedUrl?: string ;
}
