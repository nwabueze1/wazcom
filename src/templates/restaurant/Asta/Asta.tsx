import React, { useState } from "react";
import { Hero as AstaHero } from "./Hero";
import { useBuzzStyles } from "./styles";
import { Nav as AstaNav } from "./Nav";
import { Footer } from "templates";
import { Menus } from "./Menus/Menus";
import { restaurantdata } from "../data";
import { CartDialog } from "./CartDialog";
import { Cart } from "./Cart";

export const Asta = () => {
  const classes = useBuzzStyles();
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const [cartChanged, setCartChanged] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<number>(0);

  return (
    <div className={classes.root}>
      <AstaNav className={classes.nav} />
      <div className={classes.layout}>
        <div className={classes.mainContainer}>
          <div className={classes.restaurant}>
            <AstaHero />
          </div>
          <div className={classes.body}>
            <Menus
              restaurant={restaurantdata}
              setSelectedItemId={setSelectedItemId}
              setDisplayDialog={setDisplayDialog}
              cartChanged={cartChanged}
              cart={undefined}
            />
            <Footer name="vic" className={classes.footer} />
          </div>
        </div>
        <div className={classes.cartContainer}>
          <Cart />
        </div>
      </div>
      <div>
        <CartDialog
          display={displayDialog}
          close={() => {
            setDisplayDialog(false);
          }}
          reloadCart={() => {
            setCartChanged(cartChanged + 1);
          }}
          itemId={selectedItemId}
          cart={undefined}
          restaurant={restaurantdata}
          siteId={0}
        />
      </div>
    </div>
  );
};
