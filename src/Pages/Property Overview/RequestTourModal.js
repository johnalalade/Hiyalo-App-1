import React from 'react';

const RequestTourModal = () => {
  return (
    <section className="apartment-added-modal-container">
      <div className="request-tour-modal">
        <header>
          <span>
            <h4>Request For Tour</h4>
            <button className="cl">
              <iconify-icon icon="material-symbols:close"></iconify-icon>
            </button>
          </span>
          <p>
            Let us know when you're available, and you would be contacted for
            your tour.
          </p>
        </header>

        <form className="personal-information-tour-form">
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
          <span>
            <label htmlFor="">Full Name *</label>
            <input type="text" placeholder="First and Last name" />
          </span>
          <span>
            <label htmlFor="">Email *</label>
            <input type="text" placeholder="Email" />
          </span>

          <span>
            <label htmlFor="">Phone Number *</label>
            <input type="phone" placeholder="Phone" />
          </span>

          <span class="add-note-input">
            <label for="text">Add a note</label>
            <input type="text" placeholder="Add a note for agent" />
          </span>
          <button> Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default RequestTourModal;
