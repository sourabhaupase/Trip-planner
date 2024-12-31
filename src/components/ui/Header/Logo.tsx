import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  );
}
