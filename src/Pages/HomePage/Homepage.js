import React from 'react';
import Heroe from './Heroe.js';
import Features from './Features';
import HomePageMarket from './HomePageMarket';
import About from './About';
import UserReviews from './Reviews/UserReviews.js';
import Faq from './FAQ/Faq.js';
import Footer from '../../components/Footer/Footer.js';
import { useEffect, useRef, useState } from 'react';
import axios from '../../components/axios';

function HomePage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .post('/houses/house-gateway/get-houses')
      .then((data) => {
        console.log(data.data.houses);
        setData(data.data.houses.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const setHouses = (d) => {
    setData(d);
  };

  const setSea = (d) => {
    setSearch(d);
  };

  return (
    <div>
      <Heroe
        executeScroll={executeScroll}
        setHouses={setHouses}
        setSearch={setSea}
      />
      <Features />
      <div ref={myRef}>
        <HomePageMarket data={data} search={search} />
      </div>
      <About />
      <UserReviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomePage;
