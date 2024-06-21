import { useState } from 'react';
import styles from './CheckoutPage.module.scss';
import Header from '../components/Header/Header';
// import Filter from '../components/Filter/Filter';
// import Goods from '../components/Goods/Goods';
// import Banner from '../components/Banner/Banner';
// import Footer from '../components//Footer/Footer';

import { CartProvider } from '../context/CartContext';
import { FormProvider } from '../context/FormContext'

function Checkout() {
  
  
  return (
    <div className="shop">
      <Header></Header>
      <div class="container title">
        <h1 class="title-text">Basic T-shirts</h1>
      </div>
      {/* <Filter></Filter>
      <Goods></Goods>
      <Banner></Banner>
      <Footer></Footer> */}
    </div>
  );
}

export default Checkout;