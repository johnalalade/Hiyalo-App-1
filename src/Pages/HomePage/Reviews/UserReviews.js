import React, { useState, useEffect } from 'react';

import './user-reviews.css';
// import userImg from '../../images/bg.jpg';
import reviewPattern from '../../../images/review-pattern.svg';
import ReviewBtnSlider from './ReviewBtnSlider';
import Reviews from './ReviewsData';

const UserReviews = () => {
    useEffect(()=>{
      const interval = setInterval(()=>{
          nextSlide();
      }, 5000);
      return () => clearInterval(interval);
  });



  const [slideIndex, setSlideIndex] = useState(1);



  const nextSlide = () => {
    if (slideIndex !== Reviews.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Reviews.length) {
      setSlideIndex(1);
    }

  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Reviews.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <section class="user-review-container">
      <header>
        <h2>User Reviews</h2>
        <p>Here are reviews from Agents and Tenants who use Hiyalo</p>
      </header>

      <main class="user-reviews">
        {Reviews.map((review, index) => {
          return (
            <div
              className={
                slideIndex === index + 1
                  ? 'user-review active-review'
                  : 'user-review'
              }
              key={review.id}
            >
              <div className="user-details">
                <img src={review.userImg} alt="" />
                <span className="user-name">
                  <p>{review.userFullname}</p>
                  <small>{review.userRole}</small>
                </span>
              </div>
              <article>
                <iconify-icon
                  class="quote-icon"
                  icon="fontisto:quote-left"
                ></iconify-icon>
                <p>{review.reviewComment} </p>
              </article>
            </div>
          );
        })}
      </main>
      <footer className="reviews-nav">
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>


        <div className="reviews-arrow">
          <ReviewBtnSlider moveSlide={prevSlide} direction={'prev-slide'} />

          <ReviewBtnSlider moveSlide={nextSlide} direction={'next-slide'} />

        </div>
      </footer>

      <aside>
        <img src={reviewPattern} alt="" />
      </aside>
    </section>
  );
};

export default UserReviews;
