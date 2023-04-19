import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Link to="/">
            T<span>a</span>raheel
          </Link>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
}
