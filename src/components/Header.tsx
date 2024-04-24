import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="logo text-1xl" to="/">
          orderBelly
        </Link>
      </div>
    </div>
  );
};

export default Header;
