import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import brand_logo_01 from "../../assets/images/brand_logo_01.png";
import brand_logo_02 from "../../assets/images/brand_logo_02.png";
import brand_logo_03 from "../../assets/images/brand_logo_03.png";
import brand_logo_04 from "../../assets/images/brand_logo_04.png";
import brand_logo_05 from "../../assets/images/brand_logo_05.png";
import brand_logo_06 from "../../assets/images/brand_logo_06.png";
import brand_logo_07 from "../../assets/images/brand_logo_07.png";

const brandLogos = [
  brand_logo_01,
  brand_logo_02,
  brand_logo_03,
  brand_logo_04,
  brand_logo_05,
  brand_logo_06,
  brand_logo_07,
];

const PopularCompanies = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section gradient_item_area padding-top-60 padding-bottom-50">
      <div className="container">
      <div className="row">
      <div className="col-xl-12">
        <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
          <span>Popular Companies</span>
          <h3>Our Best Partners</h3>
          <div className="utf-headline-display-inner-item">Popular Companies</div>
          <p className="utf-slogan-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since an unknown printer took a galley.
          </p>
        </div>
        <div className="col-md-12">
         <div className="utf-logo-carousel-block" style={{display: 'block', width: "1150px"}}>
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="utf-carousel-logo-item">
              <Link to="/">
                <img src={logo} alt={`brand_logo_${index + 1}`} />
              </Link>
            </div>
          ))}
        </Slider>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
