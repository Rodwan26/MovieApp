import { Link, NavLink } from "react-router-dom"; // استخدام react-router-dom

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <Link
            to="/watchList"
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Movie
          </Link>
          <NavLink
            to="/watched"
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Watched
          </NavLink>
          <NavLink
            to="/watchList"
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Watch List
          </NavLink>
          <NavLink
            to="/add"
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Add
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
