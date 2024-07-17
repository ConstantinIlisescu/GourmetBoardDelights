import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="rounded-full w-14"
            src="./favicon.png"
            alt="gourmet logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
