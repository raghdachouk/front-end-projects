import IconWrapper from "./iconWrapper";
import { ReactComponent as Logo } from "./assets/logo.svg";

const LogoIcon = ({ ...props }) => (
  <IconWrapper {...props}>
    <Logo />
  </IconWrapper>
);

export default LogoIcon;
