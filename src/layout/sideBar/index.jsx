import ChartIcon from "../../components/atomes/icons/chart";
import DashboardIcon from "../../components/atomes/icons/dashbord";
import LogOutIcon from "../../components/atomes/icons/logout";
import { SideBarWrapper } from "./sidebar.styles";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <DashboardIcon className="icon-wrapper" />
      <ChartIcon className="icon-wrapper" />
      <LogOutIcon className="icon-wrapper" />
    </SideBarWrapper>
  );
};
export default SideBar;
