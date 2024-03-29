
import { Link, NavLink } from "react-router-dom";


function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/signup">
                  Signup
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              {
                (props.login === false ?
                  <><li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/login">
                      Login
                    </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/signup">
                        Signup
                      </NavLink>
                    </li>
                  </>: <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/logout">
                        Logout
                      </NavLink>
                    </li>)
              }
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/dashboard">
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/fileupload">
                        Uploading
                      </NavLink>
                    </li>
                  </ul>
          </div>
          <Link to="/card">Cart: {props.card.length}</Link>
        </div>

        {/* <button onClick={() => props.reset()}>Reset</button> */}


      </nav>

    </>
  );
}

export default Navbar;
