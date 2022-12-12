import React, { useState, useEffect } from 'react';
import './user-reviews.css';
// import userImg from '../../images/bg.jpg';
import reviewPattern from '../../images/review-pattern.svg';
import reviewsData from './ReviewsData';

const UserReviews = () => {
  const [reviews] = useState(reviewsData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(1);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section class="user-review-container">
      <header>
        <h2>User Reviews</h2>
        <p>Here are reviews from Agents and Tenants who use Hiyalo</p>
      </header>

      <main class="user-reviews">
        {reviews.map((review, indexReviews) => {
          const { id, userImg, userFullname, userRole, reviewComment } = review;
          let position = 'user-review review-inactive-1';
          if (indexReviews === index) {
            position = 'user-review review-active';
          }
          if (
            indexReviews === index - 1 ||
            (index === 0 && indexReviews === reviews.length - 1)
          ) {
            position = 'user-review review-inactive-1';
          }

          return (
            <div className={position} key={id}>
              <div class="user-details">
                <img src={userImg} alt="" />
                <span class="user-name">
                  <p>{userFullname}</p>
                  <small>{userRole}</small>
                </span>
              </div>
              <article>
                <iconify-icon
                  class="quote-icon"
                  icon="fontisto:quote-left"
                ></iconify-icon>
                <p>{reviewComment} </p>
              </article>
            </div>
          );
        })}

        {/* <div class="user-review" id="review-inactive-1">
          <div class="user-details">
            <img src={userImg} alt="" />
            <span class="user-name">
              <p>Olakunbi Olabode</p>
              <small>Tenant</small>
            </span>
          </div>
          <article>
            <iconify-icon
              class="quote-icon"
              icon="fontisto:quote-left"
            ></iconify-icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
              sit amet luctus venenatis, lectus agna fringilla urna, porttitor
              rhoncus dolor purus non porttitor rhoncus dolor purus non enim
              lectus magna fringilla urna, porttitor rhoncus dolor purus non
              porttitor rhoncus dolor purus non enim
            </p>
          </article>
        </div>

        <div class="user-review">
          <div class="user-details">
            <img src={userImg} alt="" />
            <span class="user-name">
              <p>David Olateru</p>
              <small>Agent</small>
            </span>
          </div>
          <article>
            <iconify-icon
              class="quote-icon"
              icon="fontisto:quote-left"
            ></iconify-icon>
            <p>
              Hiyalo has helped take the load of searching for tenants off by providing a market place to list apartments. Providing fast and secure payment and ease of upload.
            </p>
          </article>
        </div>
        <div class="user-review" id="review-inactive-1">
          <div class="user-details">
            <img src={userImg} alt="" />
            <span class="user-name">
              <p>Olakunbi Olabode</p>
              <small>Tenant</small>
            </span>
          </div>
          <article>
            <iconify-icon
              class="quote-icon"
              icon="fontisto:quote-left"
            ></iconify-icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus agna fringilla
              urna, porttitor rhoncus dolor purus non porttitor rhoncus dolor
              purus non enim lectus magna fringilla urna, porttitor rhoncus
              dolor purus non porttitor rhoncus dolor purus non enim
            </p>
          </article>
        </div> */}
      </main>
      <footer className="reviews-nav">
        <div className="reviews-radio-btn">
          <iconify-icon icon="ci:radio"></iconify-icon>
          <iconify-icon icon="ci:radio-filled"></iconify-icon>
          <iconify-icon icon="ci:radio"></iconify-icon>
          {/* <iconify-icon icon="ci:radio"></iconify-icon> */}
        </div>

        <div className="reviews-arrow">
          <button onClick={() => setIndex(index - 1)}>
            <iconify-icon
              class="left-arrow"
              icon="bx:left-arrow-alt"
            ></iconify-icon>
          </button>
          <button onClick={() => setIndex(index + 1)}>
            <iconify-icon
              class="right-arrow"
              icon="bx:right-arrow-alt"
            ></iconify-icon>
          </button>
        </div>
      </footer>

      <aside>
        <img src={reviewPattern} alt="" />
      </aside>
    </section>
  );
};

export default UserReviews;
