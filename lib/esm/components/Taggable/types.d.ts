/// <reference types="react" />
export interface TaggableProps {
    name?: string;
    error?: boolean;
    label?: React.ReactNode;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<string | unknown>, tags: string[]) => void;
    tags: string[];
}
