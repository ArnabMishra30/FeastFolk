import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Gericht, where flavor meets passion. Our cozy eatery offers a delightful fusion of culinary traditions, crafted with care to tantalize your taste buds. With locally sourced ingredients and a commitment to excellence, we invite you to savor every bite and make cherished memories with us.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Discover the rich heritage behind our restaurant. Founded in 2021, we've been serving delectable dishes inspired by generations of family recipes. From humble beginnings to becoming a beloved culinary destination, our story is one of passion, flavor, and tradition. Join us to taste a piece of history.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;