import './property-overview.css'
import NavBar from "../../components/Navbar/Navbar"
import img1 from '../../images/bg.jpg'
import img2 from '../../images/bg.jpg'
import img3 from '../../images/bg.jpg'

const PropertyOverview = () => {
  const PropertyImage1 = img1
  const PropertyImage2 = img2
  const PropertyImage3 = img3
  return (
    <section>
      <NavBar />

    <main className='product-overview-container'>
    <div className="product-images">
            <div className="image-1">
                <img src={PropertyImage1} alt="" />
            </div>

            <div className="image-2-3">
                <img src={PropertyImage2} alt="" />

                <img src={PropertyImage3} alt="" />
                <span className="view-all-btn">
                    <button type="button">
                        View all image
                    </button>
                    
                </span>

            </div>
        </div>

        <main className="product-details-container ">
            <div className="product-details">
                <header>
                    <ul>
                        <li className="active-details">Overview</li>
                        <li>Description</li>
                        <li>Features</li>
                        <li>Location</li>
                        <li>Features</li>
                    </ul>
                </header>
                <article className="product-details-overview">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, pariatur fugiat. Ratione nostrum quisquam repellat fugiat voluptatum animi debitis reprehenderit maiores hic sapiente! Similique numquam explicabo, aliquid quod itaque temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, pariatur fugiat. Ratione nostrum quisquam repellat fugiat voluptatum animi debitis reprehenderit maiores hic sapiente! Similique numquam explicabo, aliquid quod itaque temporibus!</p>
                </article>

                <div className="physical-tour-info">
                    <iconify-icon class="info-icon" icon="bi:info-circle"></iconify-icon>
                    <p>
                        <b>Inspection Fee:</b> Physical Tour Cost <b>N 10,000 </b> that would cater for your transportation from your house to where the apartment is located
                    </p>
                </div>
            </div>


            <div class="payment-details-container">
                <header>
                    <h4>
                        &#8358; 1,200,000<small>/year</small>
                    </h4>
                    <h4>
                        &#8358; 1,200,000<small>/month</small>
                    </h4>
                </header>
                <div class="tour-form-container">
                    <h4>Request For Tour</h4>

                    <form action=""  class="tour-form">
                        <div class="inspect-time-date">
                            <span>
                                <label for="date">Inspection Date *</label>
                                <input type="date" placeholder="dd/mm/yyyy" value="2022-08-24" />
                            </span>
                            <span>
                                <label for="time">Inspection Time *</label>
                                <input type="time" placeholder="00:00" />
                            </span>
                        </div>
                        <span class="add-note-input">
                            <label for="text">Add a note</label>
                            <input type="text" placeholder="add a note for agent" />
                        </span>
                        <span class="tour-cta-btn">
                            <button type="submit">Virtual Tour</button>
                            <button type="submit">Physical Tour</button>
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
            <button>Request for Tour</button>
            <button>Apply Now</button>
        </div>
    </main>
    </section>
  )
}

export default PropertyOverview
