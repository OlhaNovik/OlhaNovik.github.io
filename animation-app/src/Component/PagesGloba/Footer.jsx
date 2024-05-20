import "../../Style/StyleGobal/Footer.scss"
import imgFooter from "../../img/footer_img.png"
import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';


const Footer = () => {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    anime({
      targets: imageRef.current,
    //   translateX: 250,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutQuart'
    });
  };

  const handleMouseLeave = () => {
    anime({
      targets: imageRef.current,
      translateX: 0,
      rotate: '0turn',
      duration: 2000,
      easing: 'easeInOutQuart'
    });
  };

  return (
    <div className="footer_box">
    <img
      ref={imageRef}
      src={imgFooter}
      alt="Animated"
      style={{ width: '970px', height: '960px', transition: 'transform 0.2s' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
    </div>
  );
};

export default Footer;
