import { useMbmcBlock13Styles } from "./styles";
import { FC, useState } from "react";
import { MbmcBlock13Props } from "./types";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { renderNavLink } from "../../../../templates/Navs/helpers";
import clx from "classnames";
import { FiShoppingCart } from "react-icons/fi";

export const MbmcBlock13: FC<MbmcBlock13Props> = ({
    mode = "view",
    logo,
    links,
    handleClick,
    ctas,
    icons,
}) => {
    const classes = useMbmcBlock13Styles();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [activeElement, setActiveElement] = useState("");

    const handleNavClick = () => {
        if (mode === "edit") {
            setActiveElement("nav");
            handleClick?.("nav");
        }
    };

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    const handleElementClick = (element: string) => {
        setActiveElement(element);
    };

    const displayLinks = () => {
        return links.map((link, index) =>
            renderNavLink(link, mode, index, classes, activeElement, handleElementClick),
        );
    };

    return (
        <>
            {!openMenu && (
                <div
                    className={clx(
                        classes.root,
                        activeElement.toLowerCase() === "nav" &&
                            mode === "edit" &&
                            classes.activeElement,
                    )}
                    onClick={handleNavClick}
                >
                    <div className={classes.logoContainer}>
                        <a href={logo?.url}>
                            <img src={logo?.src?.desktop} alt="" className={classes.logo} />
                            <img src={logo?.src?.mobile} alt="" className={classes.mobilelogo} />
                        </a>
                    </div>
                    <div className={classes.menuList}>{displayLinks()}</div>
                    <div className={classes.desktopIcons}>
                        {icons?.map((item, idx) => {
                            return (
                                <a href={item.url} className={classes.icon} key={idx}>
                                    <FiShoppingCart className={classes.cartIcon} fontSize={20} />
                                    <div className={classes.badgeIcon}>{item.badgeCount}</div>
                                </a>
                            );
                        })}
                    </div>

                    {ctas?.map((item, idx) => {
                        return (
                            <div key={idx} onClick={item.handleClick} className={classes.orderBtn}>
                                {item.text}
                            </div>
                        );
                    })}

                    <div className={classes.menuOptionMobile}>
                        <div className={classes.mobileIcons}>
                            {icons?.map((item, idx) => {
                                return (
                                    <a href={item.url} className={classes.icon} key={idx}>
                                        <FiShoppingCart
                                            className={classes.cartIcon}
                                            fontSize={20}
                                        />

                                        <div className={classes.badgeIcon}>{item.badgeCount}</div>
                                    </a>
                                );
                            })}
                        </div>
                        <AiOutlineMenu size={34} onClick={handleOpenMenu} />
                    </div>
                </div>
            )}
            {openMenu && (
                <div className={classes.openNav}>
                    <div className={classes.expandedNav}>
                        <div className={classes.mobilelogoContainer}>
                            <a href={logo?.url}>
                                <img
                                    src={logo?.src?.mobile}
                                    alt=""
                                    className={classes.mobilelogo}
                                />
                            </a>
                        </div>

                        <div className={classes.expandedMenuOptionMobile}>
                            <IoMdClose size={34} onClick={handleCloseMenu} />

                            <div className={classes.expandedNavContentRightSide}>
                                {displayLinks()}
                                {ctas?.map((item, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            onClick={item.handleClick}
                                            className={classes.mobileOrderBtn}
                                        >
                                            {item.text}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
