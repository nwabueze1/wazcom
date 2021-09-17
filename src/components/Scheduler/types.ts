export interface SchedulerProps {
    identifier?: string | number;
    data: { [key: string]: any }[];
    onChange: (data: { [key: string]: any }[]) => void;
    deleteItem?: (itemToDelete: string) => void;
}
export interface RowType {
    day: string;
    start_time: string;
    end_time: string;
}
