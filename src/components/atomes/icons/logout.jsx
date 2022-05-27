import IconWrapper from "./iconWrapper";
import { ReactComponent as LogOut } from "./assets/logout.svg";

const LogOutIcon = ({ ...props }) => (
  <IconWrapper {...props}>
    <LogOut />
  </IconWrapper>
);

export default LogOutIcon;
