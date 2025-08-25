import React from 'react';
import Timers from '../Timers/index';
import Header from '../Header/index';
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
