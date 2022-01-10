import {CommonProps} from '../types';

export type MenuCardProps = CommonProps & {
    id: number;
    amount: number;
    title: string;
    description: string;
    status: boolean;
    image: {
        src: string;
        alt?: string;
    },
    handleEdit?: (id: number) => void;
    handleDelete?: (id: number) => void;
}

