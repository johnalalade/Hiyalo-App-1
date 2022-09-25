import React from 'react';
import './faq.css';
import { useState } from 'react';

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData = [
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
  ];
  return (
    <div className="faq-container">
      <header className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </header>

      <main className="faqs">
        {faqData.map((faq, i) => {
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
                      icon="fe:close"
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
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Faq;
