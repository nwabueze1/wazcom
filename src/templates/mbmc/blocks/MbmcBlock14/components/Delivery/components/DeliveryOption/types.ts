export type DeliveryOptionProps = {
  className?: string;
  image?: string;
  title: string;
  description?: string;
  value: string;
  name: string;
  handleChange?: (option: "pickup" | "dispatch") => void;
};
