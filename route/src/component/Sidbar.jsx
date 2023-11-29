

import { NavLink } from "react-router-dom";

function Sidbar() {
  return (
    <>
      <ul className="sidebar">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/creat">Creat Product</NavLink>
        </li>
        {/* <li>
          <NavLink to="/dashboard/edit">Edit Product</NavLink>
        </li> */}
      </ul>
    </>
  );
}

export default Sidbar;
