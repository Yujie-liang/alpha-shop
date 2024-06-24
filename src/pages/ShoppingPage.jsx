import styles from './ShoppingPage.module.scss';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import Products from '../components/Products/Products';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

function ShoppingPage() {

  return (
    <div className="shop">
      <Header />
      <div className={`container ${styles.title}`}>
        <h1 className={styles.titleText}>Basic Clothes</h1>
      </div>
      <Filter />
      <Products />
      <div className={`container ${styles.pagination}`}>
        <p className={styles.page}>14/14</p>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default ShoppingPage;