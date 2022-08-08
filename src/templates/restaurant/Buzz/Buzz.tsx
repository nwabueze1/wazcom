import React, { useState } from "react";
import { Hero as BuzzHero } from "./Hero";
import { useBuzzStyles } from "./styles";
import { Nav as BuzzNav } from "./Nav";
import { Footer } from "templates";
import { Menus } from "./Menus/Menus";
import { restaurantdata } from "../data";
import { CartDialog } from "./CartDialog";

export const Buzz = () => {
  const classes = useBuzzStyles();
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const [cartChanged, setCartChanged] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<number>(0);

  return (
    <div className={classes.root}>
      <div className={classes.restaurant}>
        <BuzzHero />
        <BuzzNav className={classes.nav} />
        <Menus
          restaurant={restaurantdata}
          setSelectedItemId={setSelectedItemId}
          setDisplayDialog={setDisplayDialog}
          cartChanged={cartChanged}
        />
      </div>
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
      {/* <Footer name="Basit" /> */}
    </div>
  );
};
