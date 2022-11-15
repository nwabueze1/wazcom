import { MbmcCommonProps } from '../../types';

export type TestimonialCardProps = MbmcCommonProps & {
    text?: string;
    name?: string;
    type?: string;
    parentKey?: string;
};

export type StylesProps = {
    isOpen?: boolean;
};
