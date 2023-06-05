import React from "react";
import { useSelector } from "react-redux";
import { useCartItemCardStyles } from "./styles";
import { MdOutlineRoundedCorner as RemoveRoundedIcon, MdOutlineAdd as AddRoundedIcon, MdDelete as DeleteIcon} from "react-icons/md";
import { CoreCartFields, CoreCartFields_cartItems } from "../../../../models";
import { getCurrency } from "../../../../../../utilities";
import { useUpdateCartItemQuantity } from "../../hooks";
import { CircularProgress } from "@mui/material";
import { parseOptionString } from "./helpers";
import { TAppState } from "templates/types";

export const CartItemCard: React.FC<
  CoreCartFields_cartItems & {
    currency: string;
    amount: number;
  }
> = ({ uuid, amount, quantity, detail, options, menuItem, currency: currencyId }) => {
  const { loading, networkOperation, restaurant } = useSelector<TAppState, TAppState>(
    (state) => state,
  );
  const cart = restaurant?.cart as CoreCartFields;
  const classes = useCartItemCardStyles();
  const currency = getCurrency(currencyId);
  const updateCartItemQuantity = useUpdateCartItemQuantity();

  const handleQuantityChange = async (quantity: number) => {
    await updateCartItemQuantity({ uuid: uuid as string, quantity });
  };

  return (
    <div className={classes.root}>
      <div className={classes.topContent}>
        <img className={classes.cartItemImg} src={menuItem?.image_url ?? ""} alt={menuItem?.name} />
        <div className={classes.content}>
          <p className={classes.title}>{menuItem?.name}</p>
          {options && <p className={classes.options}>{parseOptionString(JSON.parse(options))}</p>}
          <p className={classes.description}>{detail}</p>
          <div className={classes.priceContainer}>
            <div className={classes.price}>
              <p>
                {currency}
                {amount}
              </p>
            </div>
            {cart?.order ? (
              <p className={classes.price}>QTY: {quantity}</p>
            ) : (
              <div className={classes.quantityCountContainer}>
                <div
                  className={classes.quantityButton}
                  onClick={() => {
                    handleQuantityChange(Number(quantity) - 1);
                  }}
                >
                  <RemoveRoundedIcon className={classes.operationIcon} />
                </div>
                <div>{quantity}</div>
                <div
                  className={classes.quantityButton}
                  onClick={() => {
                    handleQuantityChange(Number(quantity) + 1);
                  }}
                >
                  <AddRoundedIcon className={classes.operationIcon} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {!cart?.order && (
        <div className={classes.bottomContent}>
          <div
            className={classes.deleteButton}
            onClick={() => {
              handleQuantityChange(0);
            }}
          >
            <DeleteIcon className={classes.deleteIcon} />
          </div>
        </div>
      )}
      {loading && networkOperation === `update.cart-item.${uuid}` && (
        <CircularProgress color="success" size="15px" className={classes.spinner} />
      )}
    </div>
  );
};
