import { useMbmcBlock13Styles } from "./styles";
import { FC, useState } from "react";
import { MbmcBlock13Props } from "./types";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const menus = ["About us", "Menu", "Contact us"];
export const MbmcBlock13: FC<MbmcBlock13Props> = ({ logo, links, ctas }) => {
    const classes = useMbmcBlock13Styles();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <>
            {!openMenu && (
                <div className={classes.root}>
                    <div className={classes.logoContainer}>
                        <a href={logo?.url}>
                            <img src={logo?.desktopSrc} alt="" className={classes.logo} />
                            <img src={logo?.mobileSrc} alt="" className={classes.mobilelogo} />
                        </a>

                        {/* <p>
                            mrbaker
                            <span className={classes.mrBarkers}>mrscook</span>
                        </p> */}
                    </div>
                    <div className={classes.menuList}>
                        {links.map((navLink, idx) => (
                            <a key={idx} href={navLink.url}>
                                <p>{navLink.text}</p>
                            </a>
                        ))}
                    </div>

                    <div className={classes.orderBtn}>Order now</div>
                    <div className={classes.menuOptionMobile}>
                        <AiOutlineMenu size={34} onClick={handleOpenMenu} />
                    </div>
                </div>
            )}
            {openMenu && (
                <div className={classes.openNav}>
                    <div className={classes.expandedNav}>
                        <div className={classes.mobilelogoContainer}>
                            <a href={logo?.url}>
                                <img src={logo?.mobileSrc} alt="" className={classes.mobilelogo} />
                            </a>
                        </div>

                        <div className={classes.expandedMenuOptionMobile}>
                            <IoMdClose size={34} onClick={handleCloseMenu} />

                            <div className={classes.expandedNavContentRightSide}>
                                {links.map((navLink, idx) => (
                                    <div key={idx}>
                                        <a href={navLink.url}>
                                            <p className={classes.NavLinks}>{navLink.text}</p>
                                        </a>
                                    </div>
                                ))}
                                {/* <div className={classes.orderBtn}>Order now</div> */}
                                {/* <p className={classes.NavLinks}>About Us</p>
                            <p className={classes.NavLinks}>Menu</p>
                            <p className={classes.NavLinks}>Contact Us</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.expandedNavContent}>
                    <div className={classes.expandedNavContentLeftSide}></div>
                    <div className={classes.expandedNavContentRightSide}>
                        <p className={classes.NavLinks}>About Us</p>
                        <p className={classes.NavLinks}>Menu</p>
                        <p className={classes.NavLinks}>Contact Us</p>
                    </div>
                </div> */}
                </div>
            )}
        </>
    );
};
