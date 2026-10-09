import { CoreCartFields } from "./models";

export const paymentImages: { [key: string]: string } = {
  flutterwave: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/flutterwave.svg",
  paystack: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/paystack.svg",
  fincra: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/fincra.svg",
  seerbit: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/seerbit.svg",
  stripe: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/stripe.svg",
  paypal: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/paypal.svg",
  adyen: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Mastercard+logo.png",
  mollie: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Mastercard+logo.png",
  noda: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Mastercard+logo.png",
  "hivedeck payment": "https://sytbuildr.s3.eu-west-2.amazonaws.com/_Payment+integration+logos.svg",
  "cash on delivery":
    "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/cash_on_delivery.svg",
  default: "https://sytbuildr.s3.eu-west-2.amazonaws.com/payment_icons/cash_on_delivery.svg",
};

export const calculateOptionsTotal = (options: any[], quantity: number) => {
  if (!options || options.length === 0) return 0;
  let additions: any = options
    .filter((option) => option.type !== "deselection")
    .map((option) => option.selectedChoices.map((choice: any) => Number(choice.amount)));
  let subtractions: any = options
    .filter((option) => option.type === "deselection")
    .map((option) => option.selectedChoices.map((choice: any) => Number(choice.amount)));
  additions = [].concat.apply([], additions);
  subtractions = [].concat.apply([], subtractions);
  additions = additions.reduce((sum: number, num: number) => sum + num, 0);
  subtractions = subtractions.reduce((sum: number, num: number) => sum - num, 0);
  return quantity * (additions + subtractions);
};

export const calculateCartSubTotal = (cart: CoreCartFields, uuid?: string) => {
  let cartItems = [...(cart?.cartItems ?? [])];

  if (uuid) cartItems = cartItems.filter((item) => item.uuid === uuid);

  let subTotal = 0;
  cartItems.forEach((item) => {
    const itemTotal = Number(item?.quantity) * item?.menuItem?.price;
    subTotal += itemTotal;
    if (item.options) {
      const optionsTotal = calculateOptionsTotal(
        JSON.parse(item.options) as any[],
        Number(item?.quantity),
      );
      subTotal += optionsTotal;
    }
  });
  return subTotal;
};

export const getTotalChargeAmount = (cart: CoreCartFields) => {
  const subTotal = calculateCartSubTotal(cart);
  const deliveryFee = !cart?.guest?.firstname
    ? Number(cart?.restaurant?.bank_info?.delivery_fee)
    : cart?.guest?.address?.uuid
    ? Number(cart?.restaurant?.bank_info?.delivery_fee)
    : 0;

  return subTotal + deliveryFee;
};
