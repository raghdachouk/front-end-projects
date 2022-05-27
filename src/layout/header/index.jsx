import { useEffect, useState } from "react";
import LogoIcon from "../../components/atomes/icons/logo";
import MenuIcon from "../../components/atomes/icons/menu";
import { getUsers } from "../../services";
import { HeaderWrapper } from "./header.styles";

const Header = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUsers().then((res) => {
      setUser(`${res[0].firstName} ${res[0].lastName}`);
    });
  }, []);
  return (
    <HeaderWrapper>
      <div>
        <LogoIcon className="icon" />
        <MenuIcon className="icon" />
      </div>
      <div className="text-name">{user}</div>
    </HeaderWrapper>
  );
};
export default Header;
