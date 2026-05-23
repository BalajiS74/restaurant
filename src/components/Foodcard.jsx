import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

function Foodcard({ data }) {
  const { cartItems, setCartItems, setCardCount } = useContext(cartContext);

  const handleAddToCart = (dish) => {
    if (!cartItems.includes(dish.id)) {
      setCartItems((prevItems) => [...prevItems, dish.id]);
      setCardCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      {data.map((dish) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={dish.id}>
          <div className="card shadow-sm h-100">
            <img
              src={dish.image}
              className="card-img-top"
              alt={dish.name}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{dish.name}</h5>
              <p className="card-text text-muted small">
                {dish.description.length > 60
                  ? dish.description.slice(0, 60) + "..."
                  : dish.description}
              </p>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className="fw-bold text-danger">${dish.price}</span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  disabled={cartItems.includes(dish.id)}
                  onClick={() => handleAddToCart(dish)}
                >
                  {cartItems.includes(dish.id) ? "Added" : "Add to order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Foodcard;
