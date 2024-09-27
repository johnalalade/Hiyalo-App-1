import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './contact-us.css';

const ContactUsContainer = () => {
  return (
    <>
      <NavBar />
      <ContactDetails />

      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUsContainer;
