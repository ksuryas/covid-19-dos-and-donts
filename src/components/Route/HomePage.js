import React from 'react';
import '../../index.css';
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';
import Symptoms from '../Symptoms/Symptoms';

const HomePage = () => (
    <div className="Text">
      <NavBar />
      <Symptoms />
     <Footer />
   </div>
);

export default HomePage;