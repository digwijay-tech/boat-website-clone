const ProductPgCard = () => {
  return (
    <div className="product-card-container">
      <div className="product-image-container">
        <span className="product-feature">50 Hours Playback</span>
        <span className="product-label">🎉 New Launch</span>
        <div className="product-image">
          <img
            className="image-product"
            loading="lazy"
            width="300"
            height="300"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848"
            srcSet="
                https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848 200w,
                https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848 400w,
                https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848 600w"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          />
        </div>
      </div>
      <div className="product-content-container">
        <span className="rating-container">
            <div className="product-rating">
                <div className="rating-grid">
                  <span>
                    <img className="product-star-image" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/star-5.png?v=1722331088" alt="star" width="100" height="100" loading="lazy" />
                  </span>
                  4.6
                </div>
                <span className="product-rating-caption">
                  83

                  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152" style={{ width: 11, height: 11 }} alt="verified reviews" />
                </span>
            </div>
        </span>
        <div style={{position:"relative"}}>
          <span className="product-heading">boAt Airdopes 311 PRO</span>
          <div style={{paddingTop: '4px'}}>
            <div className="price-section-product">
              <span className="price">₹999</span>
              <div className="product-prev-price">₹4,990</div>
              <p className="off">80% off</p>
              <button className="product-variant">
                <span className="product-variant-circle"></span>
                <span className="product-variant-circle" style={{background:"#a6a5a6"}}></span>
                <span className="product-more-variant">+2</span>
              </button>
            </div>
            <div className="product-key-features">
              <span className="product-featured">ENx™ Tech</span>
              <span className="product-featured">ASAP™ Charge</span>
              <span className="product-featured">BEAST™ Mode</span>
            </div>
          </div>
          <div className="product-btn-container">
            <div className="product-btn">
              <button className="add-to-cart-btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPgCard;
