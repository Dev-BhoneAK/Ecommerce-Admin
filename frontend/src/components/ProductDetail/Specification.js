import React from "react";

const Specification = () => {
  return (
    <div className="col-lg-4">
      <div className="product-right product-description-box">
        <div className="product-count">
          <ul>
            <li>
              <img
                src="/assets/images/fire.gif"
                className="img-fluid"
                alt="burning fire"
              />
              <span className="p-counter">37</span>
              <span className="lang">orders in last 24 hours</span>
            </li>
            <li>
              <img
                src="/assets/images/person.gif"
                className="img-fluid user_img"
                alt="person"
              />
              <span className="p-counter">44</span>
              <span className="lang">active view this</span>
            </li>
          </ul>
        </div>
        <h2>Women Pink Shirt</h2>
        <div className="border-product">
          <h6 className="product-title">product details</h6>
          <p>
            The Model is wearing a white blouse from our stylist's collection,
            see the image for a mock-up of what the actual blouse would look
            like.
          </p>
        </div>
        <div className="single-product-tables border-product detail-section">
          <table>
            <tbody>
              <tr>
                <td>Febric:</td>
                <td>Chiffon</td>
              </tr>
              <tr>
                <td>Color:</td>
                <td>Red</td>
              </tr>
              <tr>
                <td>Material:</td>
                <td>Crepe printed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-product">
          <h6 className="product-title">share it</h6>
          <div className="product-icon">
            <ul className="product-social">
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-vk" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;
