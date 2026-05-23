// src/pages/Menu.jsx
import React, { useEffect, useState } from "react";
import Foodcard from "../components/Foodcard";

function Menu() {
  const [category, setCategory] = useState("breakfast");
  const [foodData, setFoodData] = useState({
    signature: [],
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  useEffect(() => {
    fetch("/data/fooddata.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodData({
          signature: data.signaturedishes.data,
          breakfast: data.breckfast.data,
          lunch: data.lunch.data,
          dinner: data.dinner.data,
        });
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const renderTitle = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCurrentData = () => {
    return foodData[category] || [];
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Menu</h2>

      <div className="text-center mb-4">
        <button
          className={`btn mx-2 ${
            category === "breakfast" ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setCategory("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={`btn mx-2 ${
            category === "lunch" ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setCategory("lunch")}
        >
          Lunch
        </button>
        <button
          className={`btn mx-2 ${
            category === "dinner" ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setCategory("dinner")}
        >
          Dinner
        </button>
      </div>

      <h4 className="text-center mb-3">{renderTitle()} Dishes</h4>
      <div className="row g-4 justify-content-center">
        <Foodcard data={getCurrentData()} />
      </div>
    </div>
  );
}

export default Menu;
