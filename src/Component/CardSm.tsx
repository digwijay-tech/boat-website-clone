const CardSm = () => {
  return (
    <div className="card-container">
      <div className="cardsm-content">
        <div className="cardsm-image">
          <span className="feat-text">50hr Playback</span>
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
                4.6
              </div>
            </div>
          </div>
          <span className="card-top-badge">🎉 New Launch</span>
          <div className="card-image-content">
            <img className="product-item" loading="lazy" width="300" height="300"  alt=" Airdopes 311 PRO " src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848" ></img>
          </div>
        </div>
        <div className="cardsm-text-container">
            <span>
                <h1>boAt Airdopes 311 pro</h1>
            </span>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
