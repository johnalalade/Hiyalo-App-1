import React from 'react'
import './dashboard-apartment.css';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
// import apartmentImg from '../../images/bg.jpg';
import { useEffect, useState } from 'react';
import axios from '../../../../components/axios';
import PropertyDetails from './Apartment_Details';
import PageLoader from '../../../../components/Loader/PageLoader';

const ApartmentOverview = () => {
  const [houses, setHouses] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState('overview');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(false);
  const [agent, setAgent] = useState({})

  const navigate = useNavigate();

  const navigateToAddBasicInfo = () => {
    navigate('/apartments/add-new-apartment');
  };

  const filterOptions = [
    {
      filterType: 'All',
      availableApartment: houses.length,
    },
    {
      filterType: 'Occupied',
      availableApartment: houses.filter((h) => h.status === 'occupied').length,
    },
    {
      filterType: 'Vacant',
      availableApartment: houses.filter((h) => h.status === 'vacant').length,
    },
    {
      filterType: 'Pending Request',
      availableApartment: houses.filter((h) => h.status === 'pending').length,
    },
    {
      filterType: 'Draft',
      availableApartment: houses.filter((h) => h.status === 'draft').length,
    },
  ];

  // const tableData = [
  //   {
  //     apartmentID: '#120000',
  //     apartmentPictures: apartmentImg,
  //     apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
  //     apartmentPrice: '120,000',
  //     apartmentStatus: 'Occupied',
  //     apartmentDateAdded: '12th January, 2021',
  //     apartmentAction: 'menu',
  //   },
  //   {
  //     apartmentID: '#120000',
  //     apartmentPictures: apartmentImg,
  //     apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
  //     apartmentPrice: '120,000',
  //     apartmentStatus: 'Occupied',
  //     apartmentDateAdded: '12th January, 2021',
  //     apartmentAction: 'menu',
  //   },
  //   {
  //     apartmentID: '#120000',
  //     apartmentPictures: apartmentImg,
  //     apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
  //     apartmentPrice: '120,000',
  //     apartmentStatus: 'Occupied',
  //     apartmentDateAdded: '12th January, 2021',
  //     apartmentAction: 'menu',
  //   },
  //   {
  //     apartmentID: '#120000',
  //     apartmentPictures: apartmentImg,
  //     apartmentAddress: 'Obafemi Awolowo University, Ile=Ife',
  //     apartmentPrice: '120,000',
  //     apartmentStatus: 'Occupied',
  //     apartmentDateAdded: '12th January, 2021',
  //     apartmentAction: 'menu',
  //   },
  // ];

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        '/agents/agent-gateway/get-agent',
        { id: localStorage.getItem('id') }
      )
      .then((data) => {
        setName(data.data.agent.first_name)
        setAgent(data.data.agent)
      });

    axios
      .post(
        '/houses/house-gateway/get-agent-houses',
        { agent_id: localStorage.getItem('id') }
      )
      .then((data) => {
        console.log(data.data);
        setHouses(data.data.houses);
        setLoading(false);

      })
      .catch((err) => {
        setLoading(false);
        console.log({
          err,
        });
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <PageLoader color="#4733AC" />
      </div>
    );
  }

  return (
    <section className="dashboard-container">
      <SideBar verified={agent.verified} />

      {page === 'details' ? (
        <main className="dashboard-main">
          <TopBar name={name} />

          <header class="property-page-title">

            <h4 onClick={() => { setPage("overview") }}><iconify-icon className='add-new-property-cta' icon="eva:arrow-back-outline"></iconify-icon> Apartments</h4>


            <button onClick={navigateToAddBasicInfo} type="button">
              <iconify-icon
                className="add-new-property-cta"
                icon="akar-icons:plus"
              ></iconify-icon>
              <span> Add New Property</span>
            </button>
          </header>

          <PropertyDetails />
        </main>
      ) : (
        <main className="dashboard-main">
          <TopBar name={name} />

          <main className="properties-container">
            <header class="property-page-title">
              <h4>Apartments</h4>
              <button onClick={navigateToAddBasicInfo} type="button">
                <iconify-icon
                  className="add-new-property-cta"
                  icon="akar-icons:plus"
                ></iconify-icon>
                <span> Add New Property</span>
              </button>
            </header>

            <div className="properties-page-filter-options">
              {/* <div class="filter-option active-option">
              <p>All</p>
              <span>28</span>
            </div> */}

              {filterOptions.map((filteroption, idx) => {
                return (
                  <div
                    className={
                      filterStatus === filteroption.filterType.toLowerCase()
                        ? 'filter-option active-option'
                        : 'filter-option'
                    }
                    onClick={() =>
                      setFilterStatus(filteroption.filterType.toLowerCase())
                    }
                  >
                    <p>{filteroption.filterType}</p>
                    <span>{filteroption.availableApartment}</span>
                  </div>
                );
              })}
            </div>
          </main>

          <div class="apartment-list-container">

            {houses.length !== 0 ?
              <table class="apartments-list">
                <thead>
                  <tr>
                    <th>Apartment ID</th>
                    <th>Photos</th>
                    <th>Address</th>
                    <th>Price (&#8358;)</th>
                    <th>Status</th>
                    <th>Date Added</th>
                    <th>Action</th>
                  </tr>
                </thead>


                <tbody>
                  {houses.filter(h => filterStatus === "all" ? h : h.status === filterStatus).map((data, idx) => {
                    return (
                      <tr onClick={() => {
                        localStorage.setItem("house_id", data._id)
                        setPage("details")
                      }}>

                        <td className="apartment-id">{data._id}</td>
                        <td className="apartment-images-overview">
                          <img src={data.images[0]} alt={data.address} />
                          <img src={data.images[1]} alt={data.address} />
                          <img src={data.images[2]} alt={data.address} />
                          <span> + {data.images.length - 3}</span>
                        </td>


                        <td className="apartment-address">{data.address}</td>
                        <td className="apartment-price">
                          {Number(data.annual_fee)
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </td>
                        <td className="apartment-status">{data.status}</td>

                        <td>{data.createdAt}</td>
                        <td class="action-options">
                          <iconify-icon icon="carbon:overflow-menu-vertical"></iconify-icon>
                        </td>
                      </tr>
                    );
                  })}

                </tbody>

              </table>
              :
              <div class="property-page-add">
                <button onClick={navigateToAddBasicInfo} type="button">
                  <iconify-icon className='add-new-property-cta' icon="akar-icons:plus"></iconify-icon>
                  <span> Add New Property</span>
                </button>
              </div>
            }

          </div>
        </main>
      )}
    </section>
  );
};

export default ApartmentOverview;
