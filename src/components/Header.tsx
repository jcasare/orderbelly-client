import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className="border-b-2 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="logo text-1xl" to="/">
          orderBelly
        </Link>
        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
