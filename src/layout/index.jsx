import Header from "./header";
import { WrapperLayout } from "./layout.styles";
import SideBar from "./sideBar";

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />
      <div className="body-container">
        <SideBar />
        <main>{children}</main>
      </div>
    </WrapperLayout>
  );
};
export default Layout;
