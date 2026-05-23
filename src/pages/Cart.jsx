import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";

function Cart() {
  const { cartItems, setCartItems, cartCount, setCardCount } = useContext(cartContext);
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    fetch("/data/fooddata.json")
      .then((res) => res.json())
      .then((data) => {
        const allDishes = [
          ...data.signaturedishes.data,
          ...data.breckfast.data,
          ...data.lunch.data,
          ...data.dinner.data,
        ];
        setAllFoods(allDishes);
      });
  }, []);

  const itemsInCart = allFoods.filter((dish) => cartItems.includes(dish.id));

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter((itemId) => itemId !== id);
    setCartItems(updatedItems);
    setCardCount(updatedItems.length);
  };

  const handlePlaceOrder = () => {
    if (itemsInCart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // You could POST order data to backend here
    alert("Order placed successfully!");

    setCartItems([]);
    setCardCount(0);
  };

  const totalPrice = itemsInCart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="container py-4" style={{height:"100vh"}}>
      <h3>Your Cart</h3>
      <div className="row">
        {itemsInCart.length > 0 ? (
          itemsInCart.map((item) => (
            <div className="col-md-6 mb-3" key={item.id}>
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-start"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text text-danger fw-bold">
                        ${item.price}
                      </p>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png" alt="imgage"  style={{width:500, marginLeft:400,marginTop:150}}/>
        )}
      </div>

      {itemsInCart.length > 0 && (
        <div className="mt-4">
          <h5>Total Price: <span className="text-success">${totalPrice.toFixed(2)}</span></h5>
          <button className="btn btn-primary mt-2" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
