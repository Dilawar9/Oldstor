
import { Outlet } from "react-router-dom";
import Sidbar from "../../component/Sidbar"

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidbar />
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
