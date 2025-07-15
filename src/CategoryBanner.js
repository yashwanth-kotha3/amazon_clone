import React from 'react';
import './CategoryBanner.css';

function CategoryBanner() {
  return (
    <div className="categoryBanner">
      <img
        className="categoryBanner__image"
        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/fe5b05cd-1d68-4a44-96e7-869c2e2c91d0.__CR0,0,970,300_PT0_SX970_V1___.jpg"
        alt="Promo Banner"
      />
      <div className="categoryBanner__content">
        <h2>Explore Top E-Books in Kindle Edition</h2>
        <p>Up to 50% Off | Fiction, Self Help, Academic</p>
        <a
          href="https://www.amazon.in/s?bbn=1378445031&rh=n%3A1378445031%2Cp_n_format_browse-bin%3A30678570031"
          target="_blank"
          rel="noreferrer"
          className="categoryBanner__link"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default CategoryBanner;
