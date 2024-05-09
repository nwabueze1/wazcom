export type PaymentOptionProps = {
  img?: string;
  title: string;
  value: string;
  name: string;
  handleChange: (paymentOption: string) => void;
  className?: any;
};

export type TPaymentCustomStyles = {
  colors?: { [key: string]: { [key: string]: string } };
  fonts?: { [key: string]: string };
};
