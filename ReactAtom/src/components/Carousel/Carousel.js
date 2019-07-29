import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';

export default () => (
  <div >
    <Carousel autoPlay swipeable={true} >
      <div>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="cat" className="cat" />
      </div>

      <div>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg" alt="cat" />
      </div>

      <div>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="cat" />
      </div>

      <div>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" alt="cat" />
      </div>

      <div>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="cat" />

      </div>

      <div>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="cat" />

      </div>
    </Carousel>
  </div>
);
