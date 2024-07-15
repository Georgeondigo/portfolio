import React from 'react';
import "./pricing.css";
import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-3.svg';

const pricing = () => {
  return (
    
  <section className="pricing container section">
    <h2 className="section__title">Type of plans</h2>

    <div className="pricing__container grid">
      <div className="pricing__item">
        <img src={Image1} alt="" className="pricing__img" />
        <h3 className="pricing__plan">Basic</h3>
        <p className="pricing__title">A simple yet powerful option for managing your business website, featuring essential tools and email support.</p>
        <p className="pricing__support">Email support</p>
        <h3 className="price">
          <em></em><span></span>
        </h3>
        <a href="" className="btn">Get started</a>
      </div>

      <div className="pricing__item best">
        <span className="badge">Recommended</span>
        <img src={Image2} alt="" className="pricing__img" />
        <h3 className="pricing__plan">Premium</h3>
        <p className="pricing__title">Ideal for websites requiring unlimited product listings, advanced app integration, and comprehensive support on weekdays.</p>
        <p className="pricing__support">Mon-Fri support</p>
        <h3 className="price">
          <em></em> <span></span>
        </h3>
        <a href="" className="btn">Get started</a>
      </div>

      <div className="pricing__item">
        <img src={Image3} alt="" className="pricing__img" />
        <h3 className="pricing__plan">Ultimate</h3>
        <p className="pricing__title">Designed for large companies and individuals needing extensive website support, featuring 24/7 assistance and advanced features.</p>
        <p className="pricing__support">24/7 support</p>
        <h3 className="price">
          <em></em> <span></span>
        </h3>
        <a href="" className="btn">Get started</a>
      </div>
    </div>
  </section>
  )
}

export default pricing