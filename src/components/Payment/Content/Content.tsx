import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

export const Content = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <h2 className={classes.header}>
        Allow PayPal to connect your account with ZEUS
      </h2>
      <p>
        In order for PayPal to work properly on our site, you need to athorize
        ZEUS to:
      </p>
      <ul className={classes.list}>
        <li className={classes.item}>
          Automatically deduct their fee from each PayPal transaction prior to
          the remaining balance setting to your PayPal account. The amount of
          this fee, is subject to your agreement with ZEUS.
        </li>
        <li className={classes.item}>
          Hold and release funds on my behalf in accordance to ZEUS policy.
        </li>
        <li className={classes.item}>
          Use PayPal to process my customers{"'"} payments.
        </li>
        <li className={classes.item}>
          Search through and access corresponding transactions data.
        </li>
        <li className={classes.item}>
          Initiate steps to authorize and capture customers{"'"} payment
        </li>
        <li className={classes.item}>
          Access my email and location information for purposes of linking with
          my PayPal account for integration.
        </li>
      </ul>
      <p className={classes.permission}>
        You can revoke these permissions at any time from within your PayPal
        account{"'"}s tool section.
      </p>
    </Grid>
  );
};
