
import { Outlet } from "react-router-dom";
import Sidbar from "../../component/Sidbar"
import { useNavigate } from 'react-router-dom'
import { checkLogin } from "../../helper";
import { useEffect } from "react";


function Dashboard() {
  const navigator = useNavigate();
  // {
  //   (checkLogin() === false?<li><a href="/logout">Log Out</a></li>:<li><a href="/login">Log In</a></li> ) 
  //      }


  useEffect(() => {
    if (checkLogin() === false) {
      navigator("/login")
    }
  }, [])
  if (checkLogin() === true) {
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

}

export default Dashboard;
