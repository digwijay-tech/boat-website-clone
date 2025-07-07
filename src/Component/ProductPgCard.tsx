const ProductPgCard = () => {
  return (
    <div className="product-card-contianer">
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
      <div className="product-detail-container">
        <span className="rating-container">
            <div className="product-rating">
                
            </div>
        </span>
      </div>
    </div>
  );
};

export default ProductPgCard;
