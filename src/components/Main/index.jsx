import React from 'react';
import Timers from '../Timers';
import Header from '../Header';
import Footer from '../Footer';
import './index.scss';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Timers />
      <Footer />
    </div>
  );
};

export default Main;
