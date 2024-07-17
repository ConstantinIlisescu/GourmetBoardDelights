import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="space-x-4 hidden md:block w-full text-right pt-3">
      {routes.map((route, index) => (
        <Link
          key={`nav-link-${index}`}
          to={route.href}
          className="text-sm font-medium dark-font-text"
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
