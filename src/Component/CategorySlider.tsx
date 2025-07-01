import React from "react";

const CatergoryList = [
  {
    id: 1,
    title: "Best Sellers",
    src: "//www.boat-lifestyle.com/cdn/shop/files/best_seller.svg?v=1748341370",
  },
  {
    id: 2,
    title: "True Wireless Earbuds",
    src: "//www.boat-lifestyle.com/cdn/shop/files/tws_aa22d83e-8823-4d76-91e9-e75fd34fb51d.png?v=1748428298",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    src: "//www.boat-lifestyle.com/cdn/shop/files/WH_b225905d-9064-4f64-9772-07fbcc521f0f.png?v=1748428298",
  },
  {
    id: 4,
    title: "Neckbands",
    src: "//www.boat-lifestyle.com/cdn/shop/files/neckband_660318e8-a68d-4572-bf8f-359f22319765.png?v=1748428772",
  },
  {
    id: 5,
    title: "Smart Watches",
    src: "//www.boat-lifestyle.com/cdn/shop/files/smartwatch_4b47c9df-5ea9-4149-9cf8-ff5a9c8f5cc1.png?v=1748428298",
  },
  {
    id: 6,
    title: "Wireless Speakers",
    src: "//www.boat-lifestyle.com/cdn/shop/files/WS.png?v=1748428298",
  },
  {
    id: 7,
    title: "Soundbars",
    src: "//www.boat-lifestyle.com/cdn/shop/files/LA.png?v=1748428298",
  },
  {
    id: 8,
    title: "Party Speakers",
    src: "//www.boat-lifestyle.com/cdn/shop/files/PS.png?v=1748428298",
  },
  {
    id: 9,
    title: "Power Banks",
    src: "//www.boat-lifestyle.com/cdn/shop/files/Powerbank_978fc76c-bfa8-4923-93e4-a4a40f4269fb.png?v=1748428298",
  },
];

const CategorySlider = () => {
  return (
    <div className="category-container">
      <div className="category-inner">
        <div className="catergory-list">
          {CatergoryList.map((item) => (
            <div className="category-item-card" key={item.id}>
              <div className="category-image-container">
                <img
                  src={item.src}
                  alt=""
                />
                </div>
                <div className="title-container">
                    <span>{item.title}</span>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
