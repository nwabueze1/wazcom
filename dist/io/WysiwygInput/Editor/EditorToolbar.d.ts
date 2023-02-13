declare function undoChange(): void;
declare function redoChange(): void;
export declare const modules: {
    toolbar: {
        container: string;
        handlers: {
            undo: typeof undoChange;
            redo: typeof redoChange;
        };
    };
    history: {
        delay: number;
        maxStack: number;
        userOnly: boolean;
    };
};
export declare const formats: string[];
export declare const EditorToolbar: () => JSX.Element;
export {};
