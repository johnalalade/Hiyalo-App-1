import './dashboard-apartment.css';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
// import apartmentImg from '../../images/bg.jpg';
import apartmentImg from '../../../../images/bg.jpg';

const ApartmentOverview = () => {
  const navigate = useNavigate();

  const navigateToAddBasicInfo = () => {
    navigate('/apartments/add-apartment-basic-info');
  };

  const filterOptions = [
    {
      filterType: 'Occupied',
      availableApartment: 28,
    },
    {
      filterType: 'Vacant',
      availableApartment: 28,
    },
    {
      filterType: 'Pending Request',
      availableApartment: 28,
    },
    {
      filterType: 'Draft',
      availableApartment: 28,
    },
  ];

  const tableData = [
    {
      apartmentID: '#120000',
      apartmentPictures: apartmentImg,
      apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
      apartmentPrice: '120,000',
      apartmentStatus: 'Occupied',
      apartmentDateAdded: '12th January, 2021',
      apartmentAction: 'menu',
    },
    {
      apartmentID: '#120000',
      apartmentPictures: apartmentImg,
      apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
      apartmentPrice: '120,000',
      apartmentStatus: 'Occupied',
      apartmentDateAdded: '12th January, 2021',
      apartmentAction: 'menu',
    },
    {
      apartmentID: '#120000',
      apartmentPictures: apartmentImg,
      apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
      apartmentPrice: '120,000',
      apartmentStatus: 'Occupied',
      apartmentDateAdded: '12th January, 2021',
      apartmentAction: 'menu',
    },
    {
      apartmentID: '#120000',
      apartmentPictures: apartmentImg,
      apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
      apartmentPrice: '120,000',
      apartmentStatus: 'Occupied',
      apartmentDateAdded: '12th January, 2021',
      apartmentAction: 'menu',
    },
  ];

  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <main className="properties-container">
          <header class="property-page-title">
            <h4>Apartments</h4>
            <button onClick={navigateToAddBasicInfo} type="button">
              Add New Property
            </button>
          </header>

          <div className="properties-page-filter-options">
            <div class="filter-option active-option">
              <p>All</p>
              <span>28</span>
            </div>

            {filterOptions.map((filteroption, idx) => {
              return (
                <div class="filter-option">
                  <p>{filteroption.filterType}</p>
                  <span>{filteroption.availableApartment}</span>
                </div>
              );
            })}
          </div>
        </main>

        <div class="apartment-list-container">
          <table class="apartments-list">
            <thead>
              <tr>
                <th>Apartment ID</th>
                <th>Photos</th>
                <th>Address</th>
                <th>Price</th>
                <th>Status</th>
                <th>Date Added</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((data, idx) => {
                return (
                  <tr>
                    <td className="apartment-id">{data.apartmentID}</td>
                    <td className="apartment-imges-overview">
                      {data.apartmentPictures}
                    </td>

                    <td className="apartment-address">
                      {data.apartmentAddress}
                    </td>
                    <td className="apartment-price">{data.apartmentPrice}</td>
                    <td>{data.apartmentStatus}</td>
                    <td>{data.apartmentDateAdded}</td>
                    <td class="action-options">
                      <iconify-icon icon="carbon:overflow-menu-vertical"></iconify-icon>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default ApartmentOverview;
