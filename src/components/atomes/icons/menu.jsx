import IconWrapper from "./iconWrapper";
import { ReactComponent as Menu } from "./assets/menu.svg";

const MenuIcon = ({ ...props }) => (
  <IconWrapper {...props}>
    <Menu />
  </IconWrapper>
);

export default MenuIcon;
