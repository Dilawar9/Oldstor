import { Link } from "react-router-dom";


function CartDetail(props) {
  let total = 0;

  return (
    <>
      <div className="container" >
        {props.card.map((element, index) => {
          total += +element.price;
          
          return (
            <div className="card mb-3" key={index}>
             
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://127.0.0.1:3001/${element.image}`}
                    className="img-fluid rounded-start w-100"
                    alt="..."
                    style={{ width: "80px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5>{element.name}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                       Price:{element.price}
                      </small>
                    </p>

                    <Link to="/dashboard">  <button className="btn btn-primary" onClick={() => {
                      props.delete1(index);
                    }}>Delete</button></Link>

                  </div>

                </div>
                {/* <div className="col-md-2">Price: {element.price}</div> */}
              </div>
          
            </div>
          )
        })}
        <button className="btn btn-warning" onClick={() => props.reset()}>Reset</button>
      <div>Grand Total: {total}</div>
    </div >
    </>
  );
}

export default CartDetail;
