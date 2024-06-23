import { useEffect } from 'react';
import styles from './ShoppingPage.module.scss';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import Goods from '../components/Goods/Goods';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function FavoritePage() {

  return (
    <div className="shop">
      <Header />
      <div className={`container ${styles.title}`}>
        <h1 className={styles.titleText}>Your Favorite Clothes</h1>
      </div>
      <Goods />
      <div className={`container ${styles.pagination}`}>
        <p className={styles.page}>14/14</p>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default FavoritePage;