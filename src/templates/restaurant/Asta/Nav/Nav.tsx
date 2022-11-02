import { FC, useState } from "react";
import { InputAdornment } from "@mui/material";
import { TextInput } from "../../../../io";
import { useNavStyles } from "./styles";
import { Search } from "@mui/icons-material";
import { NavProps } from "./types";
import { BsCart3 } from "react-icons/bs";
import clx from "classnames";
import { Cart } from "../Cart";

export const Nav: FC<NavProps> = ({ className }) => {
    const [displayCart, setDisplayCart] = useState<boolean>(false);
    const classes = useNavStyles();
    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.header}>
                <div className={classes.logoContainer}>
                    <img
                        className={classes.headerLogo}
                        src="https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/hivedecklogo.svg"
                    />
                </div>
                <div className={classes.mobileCartBtn}>
                    <div
                        className={classes.cartBtn}
                        onClick={() => setDisplayCart((prev) => !prev)}
                    >
                        <BsCart3 className={classes.cartIcon} />
                        Cart
                    </div>
                </div>
                <TextInput
                    className={classes.searchField}
                    type="text"
                    placeholder="Search menus, dishes etc"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
                <div className={classes.cartBtnContainer}>
                    <div
                        className={classes.cartBtn}
                        onClick={() => setDisplayCart((prev) => !prev)}
                    >
                        <BsCart3 className={classes.cartIcon} />
                        Cart
                    </div>
                    {displayCart && (
                        <div className={classes.cartPopup}>
                            <Cart
                                open={displayCart}
                                setOpen={() => {
                                    alert("opened");
                                }}
                            />
                        </div>
                    )}
                    {displayCart && (
                        <div
                            className={classes.cartPopupOverlay}
                            onClick={() => setDisplayCart(false)}
                        ></div>
                    )}
                </div>
            </div>
            {displayCart && (
                <div className={classes.cartPopupSm}>
                    <Cart open={displayCart} setOpen={setDisplayCart} />
                </div>
            )}
        </div>
    );
};
