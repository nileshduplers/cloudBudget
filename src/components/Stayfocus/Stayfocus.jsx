import React, { Component } from "react";
import Slider from "react-slick";
import "../Stayfocus/Stayfocus.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const appicon = [
  {
    image: "/src/assets/img/ion-logo-google-playstore.svg",
    link: "#",
  },
  {
    image: "/src/assets/img/ion-logo-apple-appstore.svg",
    link: "#",
  },
  {
    image: "/src/assets/img/simple-icons_windows.svg",
    link: "#",
  },
];
function Stayfocus() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "12%",
  };
  return (
    <section className="stay-focus">
      <div className="container">
        <div className="d-flex">
          <div className="stay-focus-content">
            <h2>Stay focused on saving money</h2>
            <p>
              It is important to stay focused on saving money in any way you
              can. We help you monitor your spending habits so you can easily
              spot and cut any unnecessary expenses. Simply join today to get
              started!
            </p>{" "}
            <ul>
              {appicon.map(function (data) {
                return (
                  <li>
                    <a href={data.link} title="">
                      <img src={data.image} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="stay-focus-slider">
            <div>
              <Slider {...settings}>
                <div>
                  <img src="/src/assets/img/slide_bg.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/img/slide_bg.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/img/slide_bg.png" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stayfocus;
