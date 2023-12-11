import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  const successMsg = () =>
    toast.success("login  seccessfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  const loging = () => {
    if (email !== "" && password !=="") {
      axios.post("http://localhost:3001/login", {
        email: email,
        password: password

      })
        .then((res) => {
         
          if (res.data.status =="success") {
            alert(res.data.message)
            localStorage.setItem("token", res.data.token);
            props.setLogin(true)
            navigator("/dashboard")
            return;
            // setTimeout(() => {
              // navegate("/home")
            // }, 2000)
           
            // successMsg(); 
            // setEmail("");
            // setPassword(0);
          }else if(res.data.status=="faild"){
            alert(res.data.message)
            // navigator("/signup")
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

  }


  return (


    <>
      <form className="border border-1 p-3 bg-info" onSubmit={ e => e.preventDefault() }>
        <h2> Login Form</h2>
        {/* <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input className="input-field mt-4" type="text" placeholder="Username" name="usrnm" />
        </div> */}
        <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input className="input-field mt-4 " type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input className="input-field mt-4" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <div><button type="submit" className="btn btn-primary mt-3" onClick={loging}>Login</button></div>
        {/* <div><Link to="/signup"><button type="submit" className="btn btn-primary mt-3">Signup</button></Link></div> */}
      </form>
    </>
  )
}

export default Login;