

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Creat() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  // const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const navegate = useNavigate();

  const successMsg = () =>
    toast.success("Product successfully created", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  const handleSubmit = () => {
    console.log(name, price, category, image);

    if (name !== "" && price !== 0 && category !== "" && image !== "null") {
      // create product
      setLoading(true);
      axios.post("http://localhost:3001/product", {
        name: name,
        price: price,
        category: category,
        image: image

      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            successMsg();
            setTimeout(() => {
              navegate("/dashboard")
            }, 2000)
            setName("");
            setPrice("");
            setCategory("");
            setImage(null);
          }
        })
        .catch((er) => {
          console.log(er.message);
        })
        .finally(() => setLoading(false));
    } else {
      alert("Please Enter Data");
    }
  };

  return (
    <>
      <h2>Create Product</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-3">
          <label id="name">Product Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            value={name}
            placeholder="product name"
          />
        </div>
        <div className="mb-3">
          <label id="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="form-control"
            value={price}
            placeholder="product name"
          />
        </div>
        <div className="mb-3">
          <label id="category">category</label>
          <select onChange={(e) => {
            setCategory(e.target.value);
          }} className="form-control" value={category} id="category">
            <option value="Shirts">Shirts</option>
            <option value="Pents">Pents</option>
          </select>
        </div>

        <div className="mb-3">
          <label id="image" className="text-start d-block font-bold">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            className="form-control"
          />
          {/* {(errors.image) ? <div className="alert alert-danger py-1 mt-1"> {errors.image}</div> : null} */}
        </div>


        <button
          class="btn btn-warning"
          type="button"
          onClick={handleSubmit}
          disabled={loading === true ? true : ""}
        >
          {loading === true ? (
            <span
              class="spinner-grow spinner-grow-sm me-1"
              aria-hidden="true"
            ></span>
          ) : null}

          <span role="status">
            {loading === false ? "Create Product" : "Loading..."}
          </span>
        </button>
      </form>
    </>
  );
}

export default Creat;
