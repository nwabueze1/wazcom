export type CartItemProps = {
  onClick?: () => void;
  id: number;
  name?: string;
  description?: string;
  price?: number;
  image_url?: string;
  status?: boolean;
  condition?: boolean;
  currency: string;
  quantity:number
};

export type StyleProps = {
  isOpen?: boolean;
}
