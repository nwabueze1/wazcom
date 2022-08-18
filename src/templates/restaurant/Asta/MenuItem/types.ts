export type MenuItemProps = {
  onClick?: () => void;
  id: number;
  name?: string;
  description?: string;
  price?: number;
  image_url?: string;
  status?: boolean;
  condition?: boolean;
  currency: string;
};

export type StyleProps = {
  isOpen?: boolean;
}
