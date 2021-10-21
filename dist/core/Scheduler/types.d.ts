export interface SchedulerProps {
    data?: {
        [key: string]: any;
    }[];
    onChange?: (data: {
        [key: string]: any;
    }[]) => void;
    identifier?: string | number;
    deleteItem?: (itemToDelete: string) => void;
}
export interface RowType {
    day: string;
    start_time: string;
    end_time: string;
}
