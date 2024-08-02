import { Link } from "react-router-dom";
import "./ButtonOutline.css";

interface ButtonOutlineProps {
  href?: string;
  children: string;
}
const ButtonOutline = ({ href = "/", children }: ButtonOutlineProps) => {
  return (
    <Link
      to={href}
      className="button-bg-outline px-10 py-3 rounded-sm font-semibold text-xl tracking-wider shadow-lg transition"
    >
      {children}
    </Link>
  );
};

export default ButtonOutline;
