import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './faq.css';
import FaqData from './FaqData';


function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </header>

      <main className="faqs">
        {FaqData.map((faq, i) => {
          return (
            <div className="faq">
              <header className="title" onClick={() => toggle(i)}>
                <h6>{faq.question}</h6>
                <span>
                  {selected === i ? (
                    <iconify-icon
                      style={{
                        color: '#D63434',
                        transition: 'all 0.5s ease-in-out;',
                      }}
                      icon="ant-design:minus-outlined"
                    ></iconify-icon>
                  ) : (
                    <iconify-icon
                      style={{ color: '#4733AC' }}
                      className="open-icon"
                      icon="ant-design:plus-outlined"
                    ></iconify-icon>
                  )}
                </span>
              </header>
              <article
                className={selected === i ? 'faq-content shows' : 'faq-content'}
              >
                <p>{faq.answer}</p>
              </article>
            </div>
          );
        })}
      </main>
      <div class="contact-us">
        <h4>Still Got Questions?</h4>
        <p>
          Can’t find the answer you are looking for? You can can get in touch
          with our friendly team thank you!
        </p>
        <Link to="/contact-us">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Faq;
