import { FC, useState } from "react";
import { useMbmcBlock13Styles } from "./styles";
import { useSelector } from "react-redux";
import { MbmcBlock13Props } from "./types";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { renderNavLink, renderNavLogo } from "../../../../templates/Navs/helpers";
import clx from "classnames";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "../../components";
import { renderCtas } from "../../utilities";
import { TAppState } from "../../../types";

export const MbmcBlock13: FC<MbmcBlock13Props> = ({
  mode = "view",
  activeElement = "",
  index,
  logo,
  links,
  handleClick,
  ctas,
}) => {
  const classes = useMbmcBlock13Styles();
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const cartItemCount = restaurant?.cart
    ? restaurant?.cart?.cartItems?.length as number
    : restaurant?.cartItemCount !== undefined
    ? restaurant?.cartItemCount
    : 0;

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleElementClick = (element: string) => {
    handleClick?.(element);
  };

  const displayLinks = () => {
    return links.map((link, linkIndex) =>
      renderNavLink(
        link,
        mode,
        linkIndex,
        classes,
        activeElement,
        handleElementClick,
        !index && index !== 0 ? undefined : `${String(index)}.links.`,
      ),
    );
  };

  const CartLink = () => (
    <Link
      className={clx(classes.icon, classes.link)}
      target="_self"
      href={mode === "edit" ? "#" : "/cart"}
    >
      <FiShoppingCart className={classes.cartIcon} fontSize={20} />
      {cartItemCount > 0 && <span className={classes.badgeIcon}>{cartItemCount}</span>}
    </Link>
  );

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          {renderNavLogo(
            mode,
            classes,
            activeElement,
            handleElementClick,
            logo,
            !index && index !== 0 ? undefined : `${String(index)}.logo`,
          )}
          <div className={classes.menuList}>
            {displayLinks()}
            <CartLink />
            {renderCtas(
              ctas ?? [],
              mode,
              !index && index !== 0 ? "nav" : `${String(index)}`,
              handleClick,
              activeElement,
              classes.ctaDesktop,
            )}
          </div>

          <div className={classes.menuOptionMobile}>
            <CartLink />
            <AiOutlineMenu size={34} onClick={handleOpenMenu} />
          </div>
        </div>
      </div>
      <div className={clx(classes.openNav, { [classes.showMenu]: openMenu })}>
        <div className={classes.expandedMenuOptionMobile}>
          <IoMdClose size={34} onClick={handleCloseMenu} />

          <div className={classes.expandedNavContentRightSide}>
            {displayLinks()}
            {renderCtas(
              ctas ?? [],
              mode,
              !index && index !== 0 ? "nav" : `${String(index)}`,
              handleClick,
              activeElement,
              classes.ctaMobile,
            )}
          </div>
        </div>
      </div>
      <div
        className={clx(classes.overlay, { [classes.showOverlay]: openMenu })}
        onClick={handleCloseMenu}
      />
    </>
  );
};
