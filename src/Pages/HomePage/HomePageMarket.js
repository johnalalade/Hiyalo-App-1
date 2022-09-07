import './home-page-market.css';
import apartmentImage from '../../images/bg.jpg' 
const HomePageMarket = () => {
  const apartments = [
    {
      apartmentImg: apartmentImage,
      apartmentLocation: 'Gbaga Express Lagos, Nigeria',
      amenityTitle1: '3(beds)',
      amenityTitle2: '3(beds)',
      yearlyPrice: '2.5M',
      monthlyPrice: '500k'
    },
    {
      apartmentImg: apartmentImage,
      apartmentLocation: 'Gbaga Express Lagos, Nigeria',
      amenityTitle1: '3(beds)',
      amenityTitle2: '3(beds)',
      yearlyPrice: '2.5M',
      monthlyPrice: '500k'
    },
    {
      apartmentImg: apartmentImage,
      apartmentLocation: 'Gbaga Express Lagos, Nigeria',
      amenityTitle1: '3(beds)',
      amenityTitle2: '3(beds)',
      yearlyPrice: '2.5M',
      monthlyPrice: '500k',
    },
    {
      apartmentImg: apartmentImage,
      apartmentLocation: 'Gbaga Express Lagos, Nigeria',
      amenityTitle1: '3(beds)',
      amenityTitle2: '3(beds)',
      yearlyPrice: '2.5M',
      monthlyPrice: '500k',
    },
    {
      apartmentImg: apartmentImage,
      apartmentLocation: 'Gbaga Express Lagos, Nigeria',
      amenityTitle1: '3(beds)',
      amenityTitle2: '3(beds)',
      yearlyPrice: '2.5M',
      monthlyPrice: '500k',
    },
    {
      apartmentImg: apartmentImage,
      apartmentLocation: 'Gbaga Express Lagos, Nigeria',
      amenityTitle1: '3(beds)',
      amenityTitle2: '3(beds)',
      yearlyPrice: '2.5M',
      monthlyPrice: '500k',
    }
  ];

  return (
    <section className="market-container">
      <header>
        <span id="market">
          <p>Market Place</p>
        </span>
        <h2>Explore The Market Place</h2>
      </header>

      <main className="apartments">
        {apartments.map((apartment, idx) => {
          return (
            <div className="apartment">
              <img src={apartment.apartmentImg} alt="" />
              <div className="apartment-location">
                <p>{apartment.apartmentLocation}</p>
              </div>
              <div className="core-ammenities">
                <span>
                  <iconify-icon
                    class="iconify"
                    icon="emojione-monotone:bed"
                  ></iconify-icon>
                  <p>{apartment.amenityTitle1}</p>
                </span>
                <span>
                  <iconify-icon
                    class="iconify"
                    icon="emojione-monotone:person-taking-bath"
                  ></iconify-icon>
                  <p>{apartment.amenityTitle2}</p>
                </span>
              </div>
              <div className="apartment-prices">
                <span>
                  <p>
                    &#8358;{apartment.yearlyPrice} <small>/year</small>{' '}
                  </p>
                  <p>
                    &#8358;{apartment.monthlyPrice} <small>/monthlyPrice</small>{' '}
                  </p>
                </span>
                <a href="www.google.com">
                  <iconify-icon icon="bx:right-arrow-alt"></iconify-icon>
                </a>
              </div>
            </div>
          );
        })}
      </main>
      <div class="explore-cta">
            {/* <!-- <button id="secure">
                Secure Rent Loan
            </button> --> */}
            <button type="submit">
               Explore
            </button>
        </div>
    </section>
  );
};

export default HomePageMarket;
