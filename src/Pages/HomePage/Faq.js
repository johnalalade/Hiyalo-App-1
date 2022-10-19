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
      question: 'What does Hiyalo offer?',
      answer:
        'Soft life is your birth right 🤭⛱. Hiyalo makes your house hunting experience easy and scam-free, with flexible payment options that means no one is left out...',
    },
    {
      question: 'Who can use Hiyalo?',
      answer:
        "Anyone, Tenants, Agents and Landlords alike; The guy who is to busy to hunt a house, the one scared of being scammed, the one who can't afford the bulky fees, the Agent/Landlord in search of an occupant... The solutions to these problems are not magic, It's Hiyalo",
    },
    {
      question: 'How do I tour my house?',
      answer:
        'At Hiyalo we provide both virual and physical tours for our users allowing you to scout your property at ease.',
    },
    {
      question: 'How can put my house on Hiyalo?',
      answer:
        'Easy!, Register with us, Validate your account, and continue your journey to soft life',
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
