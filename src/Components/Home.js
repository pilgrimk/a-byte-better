import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/Tower_1.jpg';
import image2 from '../img/Tower_2.jpg';
import image3 from '../img/pexels-pixabay-270360.jpg';

function Home() {
  return (
    <div className="myContent">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="Tower 1" />
        <img src={image2} className="sliderimg" alt="Tower 2" />
        <img src={image3} className="sliderimg" alt="Screen Code" />
      </AliceCarousel>
    </div>
  )
}

export default Home;