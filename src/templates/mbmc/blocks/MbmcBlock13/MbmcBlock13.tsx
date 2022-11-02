import { useMbmcBlock13Styles } from "./styles";
import { FC } from "react";
import { MbmcBlock13Props } from "./types";
import { AiOutlineMenu } from "react-icons/ai";

const menus = ["About us", "Menu", "Contact us"];
export const MbmcBlock13: FC<MbmcBlock13Props> = () => {
    const classes = useMbmcBlock13Styles();

    return (
        <div className={classes.root}>
            <div className={classes.logoContainer}>
                <img
                    src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/chefLogo.svg"
                    alt=""
                    className={classes.logo}
                />{" "}
                <p>
                    mrbaker
                    <span className={classes.mrBarkers}>mrscook</span>
                </p>
            </div>
            <div className={classes.menuList}>
                {menus.map((menu, idx) => (
                    <p key={idx}>{menu}</p>
                ))}
            </div>
            <div className={classes.orderBtn}>Order now</div>
            <div className={classes.menuOptionMobile}>
                <AiOutlineMenu size={34} />
            </div>
        </div>
    );
};
