import React from 'react';
import axios from '../../../components/axios';
import { useEffect, useState } from 'react';
import SideBar from '../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../components/Dashboard Navbar/TopBar';
import PageLoader from '../../../components/Loader/PageLoader';
import './Dashboard_Payment.css';

const DashboardPayment = () => {

    const [name, setName] = useState("")
    const [agent, setAgent] = useState({})
    const [loading, setLoading] = useState(true)

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        axios.post('/agents/agent-gateway/get-agent', { id: localStorage.getItem("id") })
            .then(data => {
                setAgent(data.data.agent)
                setName(data.data.agent.first_name)
                setLoading(false)
            })

        axios.post("/agents/agent-gateway/get-agent-transactions", { agent_id: localStorage.getItem('id') })
            .then(data => {
                console.log(data.data)
                setTransactions(data.data.transactions)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log({
                    err
                })
            })

    }, [])

    if (loading) {
        return (
            <div className="spinner">
                <PageLoader />
            </div>
        )
    }

    return (

        <section className="dashboard-container">
            <SideBar verified={agent.verified} />

            <main className="dashboard-main">
                <TopBar name={name} />

                <div class="transaction-history-overview">
                    <header>
                        <h6>Payment History:</h6>
                        {/* <Link to="/payments">see all</Link> */}
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
                            {transactions.map(transaction =>
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
                                        <p> &#8358; {Number(transaction.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
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
                            )}


                        </tbody>
                    </table>
                </div>
            </main>
        </section>

    )

}

export default DashboardPayment