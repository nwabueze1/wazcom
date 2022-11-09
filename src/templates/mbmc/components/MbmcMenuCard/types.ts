export type MbmcMenuCardProps = {
    onClick?: () => void;
    name?: string;
    description?: string;
    image_url?: string;
    price?: string | number;
    startPrice?: string | number;
};

export type StyleProps = {
    isOpen?: boolean;
};
