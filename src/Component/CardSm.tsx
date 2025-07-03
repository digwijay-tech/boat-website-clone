import type { Product } from "../../public/model";

const CardSm = (product: Product) => {
  return (
    <div className="card-container" key={product.id}>
      <div className="cardsm-content">
        <div className="cardsm-image">
          <span className="feat-text">
            {product.playback_hours} Hours Playback
          </span>
          <div className="cardsm-rating">
            <div className="rating">
              <div className="rating-content">
                <span className="image-container">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/star-5.png?v=1722331088"
                    alt="star"
                    width="100"
                    height="100"
                    loading="lazy"
                  ></img>
                </span>
                {product.rating}
              </div>
            </div>
          </div>
          <span className="card-top-badge">{product.badges}</span>
          <div className="card-image-content">
            <img
              className="product-item"
              loading="lazy"
              width="300"
              height="300"
              alt=" Airdopes 311 PRO "
              src={product.src}
            ></img>
          </div>
        </div>
        <div className="cardsm-text-container">
          <div className="cardsm-text-inner">
            <span className="cardsm-heading ">{product.name}</span>
            <div className="dotted-line"></div>
            <div className="cardsm-price">
              <span className="price-outer">&#8377;{product.price.current}</span>
              <span className="grid-price">
                <span className="prev-price">₹{product.price.original}</span>
                <p className="off">{product.price.discount_percentage}% off</p>
              </span>
            </div>
            <div className="color-variant">
              <span className="color-circle"></span>
              <span className="color-circle color"></span>
              <span className="variant-extra">+2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
