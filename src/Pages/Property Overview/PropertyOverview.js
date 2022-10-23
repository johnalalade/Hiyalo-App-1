import React from 'react';
import { useEffect, useState } from 'react';
import './property-overview.css';
import NavBar from '../../components/Navbar/Navbar';
import axios from '../../components/axios';
import Footer from '../../components/Footer/Footer';
import PageLoader from '../../components/Loader/PageLoader';
// import img1 from '../../images/bg.jpg';
// import img2 from '../../images/bg.jpg';
// import img3 from '../../images/bg.jpg';
import { PopupButton } from 'react-calendly';

const PropertyOverview = () => {
  // const PropertyImage1 = img1;
  // const PropertyImage2 = img2;
  // const PropertyImage3 = img3;

  const [toggleState, setToggleState] = useState(1);
  const [loading, setLoading] = useState(true);
  const [viewAll, setViewAll] = useState(false);
  const [map, setMap] = useState(
    'https://maps.google.com/maps?q=' +
      encodeURI('Omoalade Alafia Street') +
      '&t=&z=13&ie=UTF8&iwloc=&output=embed'
  );
  // "https://maps.google.com/maps?q=Omoalade%20Alafia,%20Street,%20Somolu,%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed")
  const [property, setProperty] = useState({});

  // const index = 0

  const [indexA, setIndexA] = useState(0);

  const fwd = () => {
    setIndexA(indexA + 1);
  };

  const back = () => {
    setIndexA(indexA - 1);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .post('/houses/house-gateway/get-house', {
        id: localStorage.getItem('house_id'),
      })
      .then((data) => {
        setProperty(data.data.house);
        setMap(
          'https://maps.google.com/maps?q=' +
            encodeURI(
              data.data.house.address +
                data.data.house.city +
                data.data.house.state
            ) +
            '&t=&z=13&ie=UTF8&iwloc=&output=embed'
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <PageLoader />
      </div>
    );
  }

  return (
    <>
      <div>
        <NavBar />

        <main className="product-overview-container">
          {/******** PROPERTY IMAGES ********/}

          <div className="product-images">
            <div className="image-1">
              <img
                src={property.address && property.images[0]}
                alt=""
                onClick={() => {
                  setViewAll(!viewAll);
                }}
              />
            </div>

            <div className="image-2-3">
              <img
                src={property.address && property.images[1]}
                alt=""
                onClick={() => {
                  setViewAll(!viewAll);
                }}
              />

              <img
                src={property.address && property.images[2]}
                alt=""
                onClick={() => {
                  setViewAll(!viewAll);
                }}
              />
              <span className="view-all-btn">
                <button
                  type="button"
                  onClick={() => {
                    setViewAll(!viewAll);
                  }}
                >
                  View all image
                </button>
              </span>
            </div>
          </div>

          {/******** PROPERTY DETAILS ********/}

          <main className="product-details-container ">
            <div className="product-details">
              <header>
                <ul>
                  <li>
                    <button
                      className={
                        toggleState === 1 ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(1)}
                    >
                      {' '}
                      Description
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        toggleState === 2 ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(2)}
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        toggleState === 3 ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(3)}
                    >
                      Location
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        toggleState === 4 ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(4)}
                    >
                      Price
                    </button>
                  </li>
                </ul>
              </header>
              <div className="product-details-overview">
                <div
                  className={
                    toggleState === 1
                      ? 'property-content  active-content'
                      : 'property-content'
                  }
                >
                  <p>
                    {property.description}

                    {/* %20 */}
                  </p>
                </div>

                <div
                  className={
                    toggleState === 2
                      ? 'property-content  active-content'
                      : 'property-content'
                  }
                >
                  <main id="property-amenities-details">
                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="fluent:bed-16-regular"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Bedroom</p>
                        <p className="amenity-value">
                          {property.ammenities.find((o) => o.name === 'Bedroom')
                            ? property.ammenities.find(
                                (o) => o.name === 'Bedroom'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>

                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="fe:kitchen-cooker"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Kitchen</p>
                        <p className="amenity-value">
                          {property.ammenities.find((o) => o.name === 'Kitchen')
                            ? property.ammenities.find(
                                (o) => o.name === 'Kitchen'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>

                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="material-symbols:dining-outline"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Dining Room</p>
                        <p className="amenity-value">
                          {property.ammenities.find(
                            (o) => o.name === 'Dining Room'
                          )
                            ? property.ammenities.find(
                                (o) => o.name === 'Dining Room'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>

                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="icon-park-outline:swimming-pool"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Swimming pool</p>
                        <p className="amenity-value">
                          {property.ammenities.find(
                            (o) => o.name === 'Swimming pool'
                          )
                            ? property.ammenities.find(
                                (o) => o.name === 'Swimming pool'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>

                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="bx:store"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Store room</p>
                        <p className="amenity-value">
                          {property.ammenities.find(
                            (o) => o.name === 'Store room'
                          )
                            ? property.ammenities.find(
                                (o) => o.name === 'Store room'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>

                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="cil:bathroom"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Bathroom</p>
                        <p className="amenity-value">
                          {property.ammenities.find(
                            (o) => o.name === 'Bathroom'
                          )
                            ? property.ammenities.find(
                                (o) => o.name === 'Bathroom'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>

                    <div className="product-amenity">
                      <span>
                        <iconify-icon
                          className="amenity-icons"
                          icon="maki:parking-garage"
                        ></iconify-icon>
                      </span>
                      <span>
                        <p className="amenity-title">Parking Space</p>
                        <p className="amenity-value">
                          {property.ammenities.find(
                            (o) => o.name === 'Parking Space'
                          )
                            ? property.ammenities.find(
                                (o) => o.name === 'Parking Space'
                              ).number
                            : '0'}
                        </p>
                      </span>
                    </div>
                  </main>
                </div>
                <div
                  className={
                    toggleState === 3
                      ? 'property-content  active-content'
                      : 'property-content'
                  }
                >
                  <div id="property-address-details">
                    <span>
                      <p className="address-title">Street Address</p>
                      <p className="address-p">{property.address}</p>
                    </span>

                    <span>
                      <p className="address-title">City</p>
                      <p className="address-p">{property.city}</p>
                    </span>

                    <span>
                      <p className="address-title">State</p>
                      <p className="address-p">{property.state} State</p>
                    </span>
                  </div>
                  <iframe
                    title="Map"
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src={map}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
                <div
                  className={
                    toggleState === 4
                      ? 'property-content  active-content'
                      : 'property-content'
                  }
                >
                  <div id="property-address-details">
                    <span>
                      <p className="address-title">Anual Rent Fee</p>
                      <p className="address-p">
                        &#8358;{' '}
                        {Number(property.annual_fee)
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
                      </p>
                    </span>

                    <span>
                      <p className="address-title">Agency & Agreement Fee</p>
                      <p className="address-p">
                        {' '}
                        &#8358;{' '}
                        {Number(property.agency_fee)
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </p>
                    </span>

                    <span>
                      <p className="address-title">Caution Fee</p>
                      <p className="address-p">
                        &#8358;{' '}
                        {Number(property.caution_fee)
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </p>
                    </span>

                    <span>
                      <p className="address-title">Stamp Duty</p>
                      <p className="address-p">
                        &#8358;{' '}
                        {Number(property.stamp_fee)
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              {/******** PROPERTY TOUR AND APPLICATION FORM ********/}

              <div className="physical-tour-info">
                <iconify-icon
                  class="info-icon"
                  icon="bi:info-circle"
                ></iconify-icon>
                <p>
                  <b>Inspection Fee:</b> Physical Tour Cost <b>N 10,000 </b>{' '}
                  that would cater for your transportation from your house to
                  where the apartment is located
                </p>
              </div>
            </div>

            <div class="payment-details-container">
              <header>
                <h4>
                  &#8358;{' '}
                  {Number(property.annual_fee)
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  <small>/year</small>
                </h4>
                <h4>
                  &#8358;{' '}
                  {Number(property.annual_fee / 12)
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  <small>/month</small>
                </h4>
              </header>
              <div class="tour-form-container">
                <h4>Request For Tour</h4>

                <form action="" class="tour-form">
                  {/* <div class="inspect-time-date">
                  <span>
                    <label for="date">Inspection Date *</label>
                    <input
                      type="date"
                      placeholder="dd/mm/yyyy"
                      value="2022-08-24"
                    />
                  </span>
                  <span>
                    <label for="time">Inspection Time *</label>
                    <input type="time" placeholder="00:00" />
                  </span>
                </div>
                <span class="add-note-input">
                  <label for="text">Add a note</label>
                  <input type="text" placeholder="add a note for agent" />
                </span> */}

                  <span class="tour-cta-btn">
                    {/* <button >Virtual Tour</button> */}
                    <PopupButton
                      url="https://calendly.com/hiyalo"
                      prefill={{
                        // email: 'johnalalade3@gmail.com',
                        // firstName: 'Jon',
                        // lastName: 'Snow',
                        // name: 'Jon Snow',
                        guests: [
                          property.agent_email
                            ? property.agent_email
                            : 'david@hiyalo.com',
                        ],
                        // customAnswers: {
                        //   a1: 'a1',
                        //   a2: 'a2',
                        //   a3: 'a3',
                        //   a4: 'a4',
                        //   a5: 'a5',
                        //   a6: 'a6',
                        //   a7: 'a7',
                        //   a8: 'a8',
                        //   a9: 'a9',
                        //   a10: 'a10'
                        // },
                        // date: new Date(Date.now() + 86400000)
                      }}
                      /*
                       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                       */
                      rootElement={document.getElementById('root')}
                      text="Request Tour"
                    />
                    {/* <button type="submit">Physical Tour</button> */}
                  </span>
                </form>
              </div>

              <div class="or-again">
                <h3>OR</h3>
              </div>

              <div class="apply-now-cta">
                <button>Apply Now</button>
              </div>
            </div>
          </main>

          <div class="mobile-product-cta">
            <PopupButton
              url="https://calendly.com/hiyalo"
              prefill={{
                // email: 'johnalalade3@gmail.com',
                // firstName: 'Jon',
                // lastName: 'Snow',
                // name: 'Jon Snow',
                guests: [
                  property.agent_email
                    ? property.agent_email
                    : 'david@hiyalo.com',
                ],
                // customAnswers: {
                //   a1: 'a1',
                //   a2: 'a2',
                //   a3: 'a3',
                //   a4: 'a4',
                //   a5: 'a5',
                //   a6: 'a6',
                //   a7: 'a7',
                //   a8: 'a8',
                //   a9: 'a9',
                //   a10: 'a10'
                // },
                // date: new Date(Date.now() + 86400000)
              }}
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById('root')}
              text="Request Tour"
            />
            <button>Apply Now</button>
          </div>
        </main>

        <Footer />
      </div>

      {viewAll && (
        <div className="view-all-div">
          <span
            onClick={() => {
              setViewAll(!viewAll);
              setIndexA(0);
            }}
            className="view-all-cancel"
          >
            <iconify-icon class='iconify-cancel' icon="iconoir:cancel"></iconify-icon>
          </span>

          <span>
            {indexA - 1 && (
              <span className="prev img-prev" onClick={() => back()}>
                <iconify-icon icon="eva:arrow-ios-back-outline"></iconify-icon>
              </span>
            )}
          </span>

          <img
            src={property.images[indexA]}
            alt="property"
            className="view-all-img"
          />

          <span>
            {indexA + 1 < property.images.length && (
              <span className="next img-next" onClick={() => fwd()}>
                <iconify-icon icon="eva:arrow-ios-forward-fill"></iconify-icon>
              </span>
            )}
          </span>
        </div>
      )}
    </>
  );
};

export default PropertyOverview;
