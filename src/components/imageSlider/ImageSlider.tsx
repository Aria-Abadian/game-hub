import React, { useEffect } from "react";
import "./ImageSlider.css";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";

const ImageSlider: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(
      ".carousel .list .item"
    );
    const thumbnails =
      document.querySelectorAll<HTMLElement>(".thumbnail .item");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const timeBar = document.querySelector<HTMLElement>(".carousel .time");

    let currentIndex = 0;

    const updateSlider = (index: number) => {
      items.forEach((item, i) => {
        item.style.zIndex = i === index ? "1" : "0";
        item.style.opacity = i === index ? "1" : "0";
      });
      thumbnails.forEach((thumbnail, i) => {
        thumbnail.style.opacity = i === index ? "1" : "0.5";
      });

      if (timeBar) {
        timeBar.style.animation = "none";
        setTimeout(() => {
          if (timeBar) {
            timeBar.style.animation = "";
          }
        }, 10);
      }
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlider(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateSlider(currentIndex);
    };

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);

    const autoSlide = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(autoSlide);
      nextBtn?.removeEventListener("click", nextSlide);
      prevBtn?.removeEventListener("click", prevSlide);
    };
  }, []);

  return (
   
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src={img1} alt="Image 1" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src={img2} alt="Image 2" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src={img3} alt="Image 3" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src={img4} alt="Image 4" />
            <div className="content"></div>
          </div>
          {/* Add other items similarly */}
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src={img1} alt="Image 1" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={img2} alt="Image 2" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={img3} alt="Image 3" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="Image 4" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          {/* Add other thumbnails similarly */}
        </div>

        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>

        <div className="time"></div>
      </div>
    
  );
};

export default ImageSlider;
