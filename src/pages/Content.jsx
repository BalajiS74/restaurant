import React from "react";

const Content = () => {
  return (
    <div className="content-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container my-5 py-4">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">
                Enjoy Your Healthy{" "}
                <span className="text-danger">Delicious Food</span>
              </h1>
              <p className="lead mb-4">
                Discover our carefully crafted menu featuring fresh ingredients
                and authentic flavors prepared by our master chefs.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-danger rounded-pill px-4 py-2">
                  Book a Table
                </button>
                <button className="btn btn-outline-danger rounded-pill px-4 py-2">
                  View Menu
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo="
                alt="Delicious food"
                className="img-fluid "
                width={450}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-danger text-white py-3 mb-5">
        <div className="container text-center">
          <h3 className="mb-0">
            Weekend Special! 20% Off All Pasta Dishes • Use Code:{" "}
            <strong>PASTA20</strong>
          </h3>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured-dishes mb-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Signature Dishes</h2>
          <div className="row g-4">
            {/* Dish Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141"
                  className="card-img-top"
                  alt="Signature Steak"
                />
                <div className="card-body">
                  <h5 className="card-title">Grilled Ribeye Steak</h5>
                  <p className="card-text text-muted">
                    Premium cut with our special seasoning, served with roasted
                    vegetables.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-danger">$28.99</span>
                    <button className="btn btn-sm btn-outline-danger">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dish Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
                  className="card-img-top"
                  alt="Seafood Pasta"
                />
                <div className="card-body">
                  <h5 className="card-title">Seafood Linguine</h5>
                  <p className="card-text text-muted">
                    Fresh seafood in a creamy white wine sauce with homemade
                    pasta.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-danger">$24.50</span>
                    <button className="btn btn-sm btn-outline-danger">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dish Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                  className="card-img-top"
                  alt="Vegetarian Salad"
                />
                <div className="card-body">
                  <h5 className="card-title">Garden Fresh Salad</h5>
                  <p className="card-text text-muted">
                    Organic greens with seasonal vegetables, nuts, and balsamic
                    dressing.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-danger">$16.75</span>
                    <button className="btn btn-sm btn-outline-danger">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="promotion-section mb-5 py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                alt="Happy Hour"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Happy Hour Special</h2>
              <p className="lead mb-4">
                Join us weekdays from 4-6pm for discounted drinks and
                appetizers!
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">🍹 Cocktails - $5 each</li>
                <li className="mb-2">🍷 House Wine - $4 per glass</li>
                <li className="mb-2">🍺 Draft Beer - $3</li>
                <li className="mb-2">🍤 Appetizers - 20% off</li>
              </ul>
              <button className="btn btn-danger mt-3">
                View Happy Hour Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials mb-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <p className="mb-4">
                  "The steak was cooked to perfection and the service was
                  exceptional. Will definitely be back!"
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Customer"
                    width="40"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">Michael Johnson</h6>
                    <small className="text-muted">Regular Customer</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <p className="mb-4">
                  "Best seafood pasta I've ever had! The atmosphere is lovely
                  too. Highly recommend!"
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Customer"
                    width="40"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">Sarah Williams</h6>
                    <small className="text-muted">First-time Visitor</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <p className="mb-4">
                  "Perfect spot for date night. The wine selection is excellent
                  and the staff is very knowledgeable."
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Customer"
                    width="40"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">David Chen</h6>
                    <small className="text-muted">Food Enthusiast</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="mb-3">Join Our Newsletter</h2>
          <p className="mb-4">
            Subscribe to receive updates, special offers, and dining tips.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
                <button className="btn btn-danger" type="button">
                  Subscribe
                </button>
              </div>
              <small className="text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
