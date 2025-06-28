import Discount from "./Discount";

const Navbar = () => {
  return (
    <header>
        <Discount/>
      <div className="nav-container">
        <nav>
          <button className="menu-btn ">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/hamburger-icon.png?v=1675762678"
              alt="hamburger-icon"
            />
          </button>

          <div className="menu-large">
            <ul>
                <li className="menu-list">Categories</li>
                <li className="menu-list">boAt Personalisation</li>
                <li className="menu-list">Corporate Orders</li>
                <li className="menu-list">Gifting Store</li>
                <li className="menu-list">More</li>
            </ul>
          </div>
        </nav>
        <a href="#" className="brand-logo-container">
          <img
            className="brand-logo"
            width="152"
            height="62"
            src="//www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339"
            alt=""
          ></img>
        </a>
        <div className="nav-icons-container">
          <div className="search-icon-btn">
            <img
              className="search-icon"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/search_558f3ad8-0ef9-4a9b-8576-a396b44aacd8.png?v=1680091847"
              width="20"
              height="20"
              alt="search-icon"
            />
          </div>
          <div className="nav-profile-icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="svgkp"
            >
              <path
                d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z"
                fill="#FEA203"
              ></path>
              <path
                id="svgkp-path"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-width="0.2"
                d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z"
                fill="currentColor"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <div className="navbar-cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22">
              <path
                fill-rule="evenodd"
                d="M14,6.1v1.2C14,7.6,14.4,8,14.7,8c0.4,0,0.7-0.3,0.7-0.7V6.1h1.4c0.6,0,1.1,0.4,1.2,1l1.4,12.2  c0.1,0.6-0.4,1.2-1,1.3c0,0-0.1,0-0.1,0H3.7c-0.6,0-1.2-0.5-1.2-1.2c0,0,0-0.1,0-0.1L4,7.1c0.1-0.6,0.6-1,1.2-1h1.4v1.2  C6.6,7.6,6.9,8,7.3,8S8,7.6,8,7.3V6.1H14z M15.4,4.7V4.4C15.4,2,13.5,0,11,0S6.6,2,6.6,4.4v0.2H5.2c-1.3,0-2.4,1-2.6,2.3L1.2,19.1  C1,20.5,2,21.8,3.4,22c0.1,0,0.2,0,0.3,0h14.5c1.4,0,2.6-1.2,2.6-2.6c0-0.1,0-0.2,0-0.3L19.4,7c-0.2-1.3-1.3-2.3-2.6-2.3H15.4z   M11,1.4c-1.7,0-3,1.4-3,3l0,0v0.2H14V4.4C14,2.8,12.7,1.4,11,1.4L11,1.4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
