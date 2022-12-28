
import React from "react";
import "./user-reviews.css";
import leftArrow from "../../../images/arrow-left.svg";
import rightArrow from "../../../images/arrow-right.svg";

const ReviewBtnSlider = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next-slide" ? "btn-slide next-slide" : "btn-slide prev-slide"}
    >
      <img src={direction === "next-slide" ? rightArrow : leftArrow} />
    </button>
  );
}

export default ReviewBtnSlider;