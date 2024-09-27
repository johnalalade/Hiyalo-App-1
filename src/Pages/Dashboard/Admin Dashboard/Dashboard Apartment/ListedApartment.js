import React from 'react';
import './admin-listed-apartment.css';
import AdminSideBar from '../../../../components/Admin Navbar/AdminSideBar';
import AdminTopBar from '../../../../components/Admin Navbar/AdminTopBar';
import apartmentImg from '../../../../images/bg.jpg';
const ListedApartment = () => {
  const apartmentInformation = [
    {
      apartmentId: 12221,
      propertyAddress: 'Ikeja, Lagos State',
      status: 'Vacant',
      price: '1,500,000',
      dateAdded: 'Today',
      //   time: '12:30pm',
    },
  ];
  return (
    <section className="dashboard-container">
      <AdminSideBar />

      <main className="dashboard-main">
        <AdminTopBar />

        <main className="properties-container">
          <header className="property-page-title transaction-title">
            <h4>Apartments:</h4>
          </header>

          <div className="properties-page-filter-options">
            <div className='filter-options-container'>
              <div className="filter-option active-option">
                <p>All</p>
                <span>20</span>
              </div>

              <div className="filter-option">
                <p>Occupied</p>
                <span>02</span>
              </div>

              <div className="filter-option">
                <p>Vacant</p>
                <span>03</span>
              </div>

              <div className="filter-option">
                <p>Flagged</p>
                <span>04</span>
              </div>
            </div>

            <button>
              <iconify-icon class="iconify" icon="bi:filter"></iconify-icon>
              <p>Sort</p>
            </button>
          </div>

          <div className="apartment-list-container">
            <table class="apartments-list payment-history">
              <thead>
                <tr>
                  <th>PaymentID</th>
                  <th>Photos</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {apartmentInformation.map((apartment, idx) => (
                  <tr>
                    <td class="apartment-id payment id">
                      <p>#{apartment.apartmentId}</p>
                    </td>
                    <td className="apartment-images-overview">
                      <img src={apartmentImg} />
                      <img src={apartmentImg} />
                      <img src={apartmentImg} />
                      <span> +3</span>
                    </td>
                    <td class="name">
                      <p>{apartment.propertyAddress}</p>
                    </td>

                    <td class="apartment-price">
                      <p> &#8358; {apartment.price}</p>
                    </td>

                    <td class="payment-status">
                      <p> {apartment.status}</p>
                    </td>

                    <td class="date-added">
                      <p>{apartment.dateAdded}</p>
                    </td>

                    <td class="action-options payment-actions">
                      <iconify-icon
                        class="action-icon"
                        icon="carbon:overflow-menu-vertical"
                      ></iconify-icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </main>
    </section>
  );
};

export default ListedApartment;
