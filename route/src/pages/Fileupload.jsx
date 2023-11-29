import React from "react";
import axios from "axios";
import { useState } from "react";

const Fileupload = () => {

    // use on button
    const [image,setImage]=useState("")

  const handleFileUpload = () => {
    // get the selected file from the input
    // const file = event.target.files[0];
    // create a new FormData object and append the file to it
    // const formData = new FormData();
    // formData.set("image", file);
    // formData.append("image", file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios.post("http://localhost:3001/uploading",  {
      image:image
  },{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
		// handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };
  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <div>
      <input type="file" onChange={(event)=>{setImage(event.target.files[0])}} />
      <button className="btn btn-primary" onClick={handleFileUpload} >Upload</button>
    </div>
  );
};
export default Fileupload;