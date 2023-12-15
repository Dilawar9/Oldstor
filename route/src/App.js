import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Details from "./pages/Details";
import axios from "axios";
import CardDetail from "./pages/CardDetail";
import Fileupload from "./pages/Fileupload"

//dashboard

import Dashboard from "./pages/dashboard/Dashboard";
import Edit from "./pages/dashboard/Edit";
import Produt from "./pages/dashboard/Produt";
import Creat from "./pages/dashboard/Creat";
import {checkLogin} from "./helper"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Singnup from "./pages/Signout";



function App() {
  const [posts, setPosts] = useState([]);
  const [card, setCard] = useState([]);
  const [login, setLogin] = useState(checkLogin());



  const notify = () => toast.success('Product Successfully Addedd', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  const notify1 = () => toast.success('Product Successfully Delete', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const getPosts = () => {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3001/product")
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data.products);
        }
      });
  };

  useEffect(() => {
    getPosts();
  }, []);


  const addcard = (element) => {

    if (card.find((item) => item._id === element._id)) {
      alert("your already enter")
    }
    else {
      const newitem = [...card, element];
      setCard(newitem);
      notify();

    }

  }

  const delete1 = (index) => {

    const new1 = [...card];
    new1.splice(index, 1)
    setCard(new1);
    notify1();

  }

  const reset = () => {
    setCard([]);

  }

  return (
    <div className="App">

      <Navbar card={card} login={login} />
    
      {/* <Link to="/">Home</Link>-<Link to="/about">About</Link> */}
      <Routes>
        <Route path="/" element={<Home posts={posts} addcard={addcard} />} />
        <Route path="/fileupload" element={<Fileupload />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/card" element={<CardDetail card={card} delete1={delete1} reset={reset} />} />
        <Route path="/signup" element={<Singnup setLogin={setLogin} />} />
        <Route path='/login' element={<Login setLogin={setLogin} />} />
        <Route path='/logout' element={<Logout setLogin={setLogin} />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Produt posts={posts} />} />
          <Route path="creat" element={<Creat />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
      <ToastContainer />
      <p>Footer </p>
    </div>
  );
}

export default App; 
