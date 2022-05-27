import IconWrapper from "./iconWrapper";
import { ReactComponent as Dashboard } from "./assets/dashboard.svg";

const DashboardIcon = ({ ...props }) => (
  <IconWrapper {...props}>
    <Dashboard />
  </IconWrapper>
);

export default DashboardIcon;
