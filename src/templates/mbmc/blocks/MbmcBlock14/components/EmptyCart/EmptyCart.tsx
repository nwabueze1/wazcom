import { useEmptyCartStyles } from "./styles";

export const EmptyCart = () => {
  const classes = useEmptyCartStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Cart+empty%403x.webp"
        alt="Empty Cart"
        className={classes.emptyCartImage}
      />
      <div className={classes.emptyCartMessage}>
        <p className={classes.emptyCartHeading}>Your Cart Is Empty</p>
        <p className={classes.emptyCartText}>
          You are are yet to add any item to cart, check out our awesome menu and place your order
          now.
        </p>
      </div>
    </div>
  );
};
