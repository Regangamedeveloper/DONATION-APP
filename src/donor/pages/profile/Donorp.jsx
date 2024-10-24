import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './donorp.scss';
import DProfile from '../../components/dprofile/DProfile';

const Donorp = () => {
  return (
    <div className="donorp-page">
      <Navbar />
      <DProfile/>
    </div>
  );
};

export default Donorp;
