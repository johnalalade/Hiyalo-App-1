// import  {AddNewApartment}  from './AddNewApartment';
import React from 'react';
import AddNewApartment from './AddNewApartment';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageLoader from '../../../../components/Loader/PageLoader';

export const AddNewApartmentContainer = () => {
  const [agent, setAgent] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/get-agent', { id: localStorage.getItem("id") })
      .then(data => {
        setAgent(data.data.agent)
        setLoading(false)
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
        <TopBar name={agent.first_name}/>

        <AddNewApartment />
      </main>
    </section>
  );
};


export default AddNewApartmentContainer;