import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  let navigate = useNavigate();
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6">
          <h2 className="text-danger mb-4">Our Culinary Journey</h2>
          <p className="lead">
            Founded in 2010, our restaurant has been serving authentic,
            flavorful dishes that celebrate local ingredients and global
            inspiration.
          </p>
          <p>
            What began as a small family-owned bistro has grown into a beloved
            dining destination, thanks to our commitment to quality, creativity,
            and warm hospitality. Our chefs bring decades of combined experience
            from around the world to create memorable dining experiences.
          </p>
          <p>
            We take pride in sourcing ingredients from local farmers and
            producers, ensuring every dish tells a story of seasonality and
            sustainability. From our kitchen to your table, we pour our passion
            into every detail.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Our Restaurant Interior"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="mt-3">
            <button
              className="btn btn-outline-danger"
              onClick={() => navigate("/menu")}
            >
              View Our Menu
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h3 className="mb-4">What Makes Us Special</h3>
          <div className="d-flex justify-content-around flex-wrap">
            <div className="p-3" style={{ maxWidth: "200px" }}>
              <i className="bi bi-egg-fried display-5 text-danger mb-2"></i>
              <h5>Farm-to-Table</h5>
              <p className="text-muted">Fresh ingredients sourced daily</p>
            </div>
            <div className="p-3" style={{ maxWidth: "200px" }}>
              <i className="bi bi-cup-hot display-5 text-danger mb-2"></i>
              <h5>Handcrafted</h5>
              <p className="text-muted">Every dish made with care</p>
            </div>
            <div className="p-3" style={{ maxWidth: "200px" }}>
              <i className="bi bi-heart display-5 text-danger mb-2"></i>
              <h5>Family Recipes</h5>
              <p className="text-muted">Generations of flavor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
