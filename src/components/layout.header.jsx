import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <>
      <div id="header">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand ps-3" href="/">
            Students Dashboard
          </a>

          <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li>
              <Link to="admin">Admin</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
