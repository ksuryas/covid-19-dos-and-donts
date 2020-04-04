import React from 'react';
import '../../index.css';
import NavBar from '../NavBar';
import PrecautionGuide from '../Precautions/PrecautionGuide/PrecautionGuide';
import Footer from '../Footer/Footer';

const PrecGuide = () => (
    <div className="Text">
      <NavBar />
      <PrecautionGuide />
     <Footer />
   </div>
);

export default PrecGuide;