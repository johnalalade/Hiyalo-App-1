
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideBar from '../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../components/Dashboard Navbar/TopBar';
import './dashboard-overview.css';

const DashboardOverview = () => {
  const [name, setName] = useState("")
  const [agent, setAgent] = useState({})
  const [houses, setHouses] = useState([])

  useEffect(() => {
    axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/get-agent', { id: localStorage.getItem("id") })
      .then(data => {
        setAgent(data.data.agent)
        setName(data.data.agent.full_name)
      })

      axios.post("https://hiyalo-backend.herokuapp.com/houses/house-gateway/get-agent-houses", {agent_id: localStorage.getItem('id')})
    .then(data => {
      console.log(data.data)
      setHouses(data.data.houses)
    })
    .catch(err => {
      console.log({
        err
      })
    })

  }, [])

  return (


    agent.full_name && <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar name={name} />

        <div className="page-title">
          <h4>Account Overview:</h4>
          <span class="overview-date">
            <button>September, 2022</button>
          </span>
        </div>

        <div class="overview-header">
          <div class="total-income">
            <header>Total Income Revenue</header>
            <span class="total-amount">&#8358; {Number(agent.balance).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
            <span class="unpaid-stat">
              <p>% Unpaid</p>
              <p>85%</p>
            </span>
          </div>
          <div class="total-outstanding">
            <header>outstanding Payments</header>
            <span class="total-amount">&#8358; {Number(agent.outstanding_payments).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
            <span class="total-outstanding-cta">
              <button>Messages</button>
              <button>Manage</button>
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
              <p>{houses[0] && houses.filter(h => h.status === "vacant").length}</p>
            </span>
          </div>
        </div>

        <div class="transaction-history-overview">
          <header>
            <h6>Payment History:</h6>
            <a href="payment.html">see all</a>
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

            <tbody>
              <tr>
                <td class="apartment-id payment id">
                  <p>#111111</p>
                </td>

                <td class="name">
                  <p>Olakunbi Olabode</p>
                </td>

                <td class="payment-status">
                  <p> Pending</p>
                </td>

                <td class="apartment-price">
                  <p> N1,000,000</p>
                </td>

                <td class="date-added">
                  <p>30th Jan, 2022</p>
                </td>

                <td class="type">
                  <p>Deposit</p>
                </td>

                <td class="action-options payment-actions">
                  <iconify-icon
                    class="action-icon"
                    icon="carbon:overflow-menu-vertical"
                  ></iconify-icon>
                </td>
              </tr>

              <tr>
                <td class="apartment-id payment id">
                  <p>#111111</p>
                </td>

                <td class="name">
                  <p>Olakunbi Olabode</p>
                </td>

                <td class="payment-status">
                  <p> Pending</p>
                </td>

                <td class="apartment-price">
                  <p> N1,000,000</p>
                </td>

                <td class="date-added">
                  <p>30th Jan, 2022</p>
                </td>

                <td class="type">
                  <p>Deposit</p>
                </td>

                <td class="action-options payment-actions">
                  <iconify-icon
                    class="action-icon"
                    icon="carbon:overflow-menu-vertical"
                  ></iconify-icon>
                </td>
              </tr>

              <tr>
                <td class="apartment-id payment id">
                  <p>#111111</p>
                </td>

                <td class="name">
                  <p>Olakunbi Olabode</p>
                </td>

                <td class="payment-status">
                  <p> Pending</p>
                </td>

                <td class="apartment-price">
                  <p> N1,000,000</p>
                </td>

                <td class="date-added">
                  <p>30th Jan, 2022</p>
                </td>

                <td class="type">
                  <p>Deposit</p>
                </td>

                <td class="action-options payment-actions">
                  <iconify-icon
                    class="action-icon"
                    icon="carbon:overflow-menu-vertical"
                  ></iconify-icon>
                </td>
              </tr>

              <tr>
                <td class="apartment-id payment id">
                  <p>#111111</p>
                </td>

                <td class="name">
                  <p>Olakunbi Olabode</p>
                </td>

                <td class="payment-status">
                  <p> Pending</p>
                </td>

                <td class="apartment-price">
                  <p> N1,000,000</p>
                </td>

                <td class="date-added">
                  <p>30th Jan, 2022</p>
                </td>

                <td class="type">
                  <p>Deposit</p>
                </td>

                <td class="action-options payment-actions">
                  <iconify-icon
                    class="action-icon"
                    icon="carbon:overflow-menu-vertical"
                  ></iconify-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>

  );
};

export default DashboardOverview;
