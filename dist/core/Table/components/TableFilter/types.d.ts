/// <reference types="react" />
export declare type TableFilterProps = {
    showFilter: boolean;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    fields: {
        name: string;
        label: string;
    }[];
};
