import React from 'react';
import axios from '../../../../components/axios';
import { useEffect, useState } from 'react';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import './dashboard-overview.css';
import { Link } from 'react-router-dom';
import PageLoader from '../../../../components/Loader/PageLoader';
import DashboardModal from './DashboardModal';

import CardImg from '../../../../images/empty-list.png';

const DashboardOverview = () => {
  const [name, setName] = useState('');
  const [agent, setAgent] = useState({});
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .post('/agents/agent-gateway/get-agent', {
        id: localStorage.getItem('id'),
      })
      .then((data) => {
        setAgent(data.data.agent);
        setName(data.data.agent.first_name);
      });

    axios
      .post('/houses/house-gateway/get-agent-houses', {
        agent_id: localStorage.getItem('id'),
      })
      .then((data) => {
        console.log(data.data);
        setHouses(data.data.houses);
        setLoading(false);
        if (data.data.houses.length === 0) {
          setModal(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log({
          err,
        });
      });

    axios
      .post('/agents/agent-gateway/get-agent-transactions', {
        agent_id: localStorage.getItem('id'),
      })
      .then((data) => {
        console.log(data.data);
        setTransactions(data.data.transactions);
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
        <PageLoader />
      </div>
    );
  }

  // if(houses.length === 0) {
  //   setModal(true)
  // }

  return (
    agent.first_name && (
      <section className="dashboard-container">
        <SideBar verified={agent.verified} />

        {modal ? (
          <DashboardModal setModal={setModal} />
        ) : (
          <main className="dashboard-main">
            <TopBar name={name} />

            <div className="page-title">
              <h4>Account Overview:</h4>
              {/* <span class="overview-date">
              <button>September, 2022</button>
            </span> */}
            </div>

            <div class="overview-header">
              <div class="total-income">
                <header>Available Balance</header>
                <span class="total-amount">
                  &#8358;{' '}
                  {Number(agent.outstanding_payments)
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </span>
                <span class="total-outstanding-cta">
                  <button>Messages</button>
                  <button>Withdraw</button>
                </span>
              </div>
              <div class="total-outstanding">
                <header>Total Income Revenue</header>
                <span class="total-amount">
                  &#8358;{' '}
                  {Number(agent.balance)
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </span>
                <span class="unpaid-stat">
                  {/* <p>% Unpaid</p>
              <p>85%</p> */}
                </span>
              </div>

              <div class="properties-amount">
                <span class="total-properties">
                  <header>
                    <h6>Total Properties</h6>
                  </header>
                  <p>{houses[0] && houses.length}</p>
                </span>

                <span class="active-properties">
                  <header>
                    <h6>Vacant Properties</h6>
                  </header>
                  <p>
                    {houses[0] &&
                      houses.filter((h) => h.status === 'vacant').length}
                  </p>
                </span>
              </div>
            </div>

            <div class="transaction-history-overview">
              <header>
                <h6>Payment History:</h6>
                <Link to="/payments">see all</Link>
              </header>
              <table className="apartments-list payment-history">
                <thead>
                  <tr>
                    <th>PaymentID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {transactions.length !== 0 && (
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr>
                        <td class="apartment-id payment id">
                          <p>{transaction._id}</p>
                        </td>

                        <td class="name">
                          <p>{transaction.name}</p>
                        </td>

                        <td class="payment-status">
                          <p> {transaction.status}</p>
                        </td>

                        <td class="apartment-price">
                          <p>
                            {' '}
                            &#8358;{' '}
                            {Number(transaction.amount)
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                          </p>
                        </td>

                        <td class="date-added">
                          <p>{transaction.createdAt}</p>
                        </td>

                        <td class="type">
                          <p>{transaction.type}</p>
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
                )}
              </table>

              {/* {transactions.length === 0 && (
                <div className="trans-img">
                  <img src={CardImg} alt="no transactions yet" />
                  <p>
                    No transactions yet... upload a house to start seeing money
                    roll in <span role="img" aria-label='lol'>😉</span>
                  </p>
                </div>
              )}

              <div class="properties-amount">
                <span class="total-properties">
                  <header>
                    <h6>Total Properties</h6>
                  </header>
                  <p>{houses[0] && houses.length}</p>
                </span>

                <span class="active-properties">
                  <header>
                    <h6>Vacant Properties</h6>
                  </header>
                  <p>
                    {houses[0] &&
                      houses.filter((h) => h.status === 'vacant').length}
                  </p>
                </span>
              </div>
            </div>

            <div class="transaction-history-overview">
              <header>
                <h6>Payment History:</h6>
                <Link to="/payments">see all</Link>
              </header>
              <table class="apartments-list payment-history">
                <thead>
                  <tr>
                    <th>PaymentID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {transactions.length !== 0 && (
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr>
                        <td class="apartment-id payment id">
                          <p>{transaction._id}</p>
                        </td>

                        <td class="name">
                          <p>{transaction.name}</p>
                        </td>

                        <td class="payment-status">
                          <p> {transaction.status}</p>
                        </td>

                        <td class="apartment-price">
                          <p>
                            {' '}
                            &#8358;{' '}
                            {Number(transaction.amount)
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                          </p>
                        </td>

                        <td class="date-added">
                          <p>{transaction.createdAt}</p>
                        </td>

                        <td class="type">
                          <p>{transaction.type}</p>
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
                )}
              </table> */}

              {transactions.length === 0 && (
                <div className="trans-img">
                  <img src={CardImg} alt="no transactions yet" />
                  <p>
                    No transactions yet... upload a house to start seeing money
                    roll in{' '}
                    <span role="img" aria-label="lol">
                      😉
                    </span>
                  </p>
                </div>
              )}
            </div>
          </main>
        )}
      </section>
    )
  );
};

export default DashboardOverview;
