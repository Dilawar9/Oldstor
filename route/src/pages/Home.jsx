// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="hompage">
        <h1>All Products</h1>
        {/* <button onClick={getPosts}>Get Posts</button> */}
        <div className="container">
          <div className="row">
           
            {props.posts.map((element, index) => {
              return (
                <div className="col-md-3 mb-3" key={index}>
                  <div className="card">
                    <img className="img"
                      src={`http://127.0.0.1:3001/${element.image}`}
                      // className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <Link to={`/details/${element._id}`}>
                        <h5 className="card-title"> Name:{element.name}</h5>
                      </Link>

                      <h6>Price: {element.price}</h6>
                      <h6>Category: {element.category}</h6>
                      <button className="btn btn-primary" onClick={() => {
                          props.addcard(element);
                        }}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
