
import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

import {useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Singnup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navegate=useNavigate();


  const successMsg = () =>
    toast.success("Singup seccessfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  const register = () => {

    if (username !== "" && email !== "" && password !== "") {
      // alert("helo")
      axios.post("http://localhost:3001/signup", {
        username: username,
        email: email,
        password: password

      })
        .then((res) => {
          console.log(res);
          if (res.data.status === "failed") {
              alert(res.data.message);
              navegate("/dashboard")
              
            // setTimeout(() => {
            //   // navegate("/login")

            // }, 2000)
            // successMsg();
            // setUsername("");
            // setEmail("");
            // setPassword(0);
          } else if(res.data.status == "success") {
            alert(res.data.message);
            localStorage.setItem("token", res.data.token);
            props.setLogin(true)
            navegate("/dashboard");
            return;
          }
        })
        .catch((er) => {
           console.log(er.message);
        })
        .finally();
    } else {
      alert("Please Enter Data");
    }
  };

  return (
    <>
      <form className="border border-1 p-3 bg-info" onSubmit={ (e) => e.preventDefault() } >
        <h2> Singnup Form</h2>
        <div className="input-container">
          <i className="fa fa-user icon" id="name"></i>
          <input className="input-field mt-4" id="name" type="text" placeholder="name" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </div>
        <div className="input-container">
          <i className="fa fa-envelope icon" id="email"></i>
          <input className="input-field mt-4 " id="email" type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>

        <div className="input-container">
          <i className="fa fa-key icon" id="password"></i>
          <input className="input-field mt-4" id="password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>

       <button type="submit" className="btn btn-primary mt-3" onClick={register}>Register</button>
        {/* <div><Link to="/login"><button type="submit" className="btn btn-primary mt-3">Login</button></Link></div> */}
      </form>

      {/* <link><Login /></link> */}

    </>

  )
}

export default Singnup;