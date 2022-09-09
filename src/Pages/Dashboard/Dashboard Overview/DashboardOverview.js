
import SideBar from '../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../components/Dashboard Navbar/TopBar';
import './dashboard-overview.css';

const DashboardOverview = () => {
  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <div className="page-title">
          <h4>Account Overview:</h4>
          <span class="overview-date">
            <button>June, 2022</button>
          </span>
        </div>

        <div class="overview-header">
          <div class="total-income">
            <header>Total Income Revenue</header>
            <span class="total-amount">&#8358;1,450,000</span>
            <span class="unpaid-stat">
              <p>% Unpaid</p>
              <p>85%</p>
            </span>
          </div>
          <div class="total-outstanding">
            <header>outstanding Payments</header>
            <span class="total-amount">&#8358;75,000</span>
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
              <p>24</p>
            </span>

            <span class="active-properties">
              <header>
                <h6>Total Properties</h6>
              </header>
              <p>24</p>
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
