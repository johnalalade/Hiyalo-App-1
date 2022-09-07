import './features.css';
import flashIcon from '../../images/flash.svg';
import walletIcon from '../../images/empty-wallet-tick.svg';
import secureIcon from '../../images/shield-security.svg';

const Features = () => {
  const offers = [
    {
      title: 'Search',
      paragraph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit. Risus pharetra in aiscing sapien amet, malesuada bibendum amet tempor. Sagittis diam dapibus nec quis. Elit',
      icon: flashIcon,
    },
    {
      title: 'Search',
      paragraph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit. Risus pharetra in aiscing sapien amet, malesuada bibendum amet tempor. Sagittis diam dapibus nec quis. Elit',
      icon: walletIcon,
    },
    {
      title: 'Search',
      paragraph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit. Risus pharetra in aiscing sapien amet, malesuada bibendum amet tempor. Sagittis diam dapibus nec quis. Elit',
      icon: secureIcon,
    },
  ];

  return (
    <section class="why-hiyalo-container">
      <header>
        <span id="why">
          <p>Why Hiyalo</p>
        </span>
        <h2>Core Features On Hiyalo</h2>
      </header>

      <main class="offers">
        {offers.map((offer, idx) => {
          return (
            <div className="offer">
              <span>
                <img src={offer.icon} alt="" />
              </span>
              <h6>{offer.title}</h6>
              <p>{offer.paragraph}</p>
            </div>
          );
        })}
      </main>

      <div class="why-cta">
        <img src="./images/arrow.svg" alt="" />
      </div>
    </section>
  );
};

export default Features;
