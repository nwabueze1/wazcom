import { FC, useContext } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useOrderDetailsStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
import { calculateCartSubTotal } from "../../helpers";
import { getCurrency } from "../../../../../../utilities";
import { CoreCartFields } from "../../../../models";
import { OrderDetailsProps } from "./types";

export const OrderDetails: FC<OrderDetailsProps> = ({ display, setDisplay }) => {
  const { cart } = useContext(RestaurantContext);
  const classes = useOrderDetailsStyles({ display });
  const subTotal = calculateCartSubTotal(cart as CoreCartFields);
  const deliveryFee =
    cart?.order?.order_type === "pickup"
      ? 0
      : (cart?.restaurant?.bank_info?.delivery_fee as number);
  const currency = getCurrency(cart?.restaurant?.bank_info?.currency ?? "");

  const getPaymentMethod = () => {
    switch (cart?.order?.payment_type?.toLowerCase()) {
      case "cash_on_delivery":
        return "Cash";
      case "bank_transfer":
        return "Bank Transfer";
      default:
        return cart?.order?.payment_type;
    }
  };

  return (
    <div className={classes.root}>
      <BsArrowLeft
        className={classes.detailsArrow}
        onClick={() => {
          setDisplay(false);
        }}
      />
      <p className={classes.detailsTitle}>Order Details</p>
      <div className={classes.detailsParent}>
        <div className={classes.details}>
          <p>Order ID</p>
          <p className={classes.detailsInfo}>{cart?.order?.uuid?.slice(0, 13)}</p>
        </div>
        <div className={classes.details}>
          <p>Total number of dishes</p>
          <p className={classes.detailsInfo}>{cart?.cartItems?.length}</p>
        </div>
        <div className={classes.details}>
          <p>Sub total</p>
          <p className={classes.detailsInfo}>
            {currency}
            {subTotal}
          </p>
        </div>
        <div className={classes.details}>
          <p>Delivery Fee</p>
          <p className={classes.detailsInfo}>
            {currency}
            {deliveryFee}
          </p>
        </div>
        <div className={classes.details}>
          <p className={classes.detailsInfo}>Total</p>
          <p className={classes.detailsInfo}>
            {currency}
            {subTotal + deliveryFee}
          </p>
        </div>
      </div>
      <div className={classes.detailsParent}>
        <div className={classes.details}>
          <p style={{ fontWeight: "bold" }}>Delivery Type</p>
          <p className={classes.detailsBadge}>
            {cart?.order?.order_type === "pickup" ? "Pickup" : "Dispatch"}
          </p>
        </div>
        <div className={classes.details}>
          <p>Contact Name</p>
          <p>{`${cart?.guest?.firstname} ${cart?.guest?.lastname}`}</p>
        </div>
        <div className={classes.details}>
          <p>Contact Phone</p>
          <p>{cart?.guest?.phone}</p>
        </div>
        {cart?.order?.order_type === "dispatch" && cart?.guest?.address && (
          <div className={classes.details}>
            <p>Address</p>
            <p>{cart?.guest?.address?.addressline1}</p>
          </div>
        )}
      </div>
      <div>
        <div className={classes.details}>
          <p style={{ fontWeight: "bold" }}>Payment Method</p>
          <p className={classes.detailsBadge}>{getPaymentMethod()}</p>
        </div>
        <div className={classes.detailsNotification}>
          <AiOutlineCheckCircle className="icon" />
          <p>Your order has been placed successfully</p>
        </div>
      </div>
    </div>
  );
};
