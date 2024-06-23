import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CheckoutPage.module.scss';
import StepProgress from '../components/StepProgressBar/StepProgressBar';
import Steps from '../components/Step/Steps';
import ProgressControl from '../components/ProgressControl/ProgressControl';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header'
import { CartProvider } from '../context/CartContext';
import { FormProvider } from '../context/FormContext';
import { useAuth } from '../context/AuthContext';

function Checkout() {
  const [step, setStep] = useState(1);
  function handleStep(e, direction) {
    if (direction === 'prev' && step > 1) {
      setStep(step - 1);
    }
    if (direction === 'next' && step <= 3) {
      setStep(step + 1);
    }
  }
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="checkout">
      <Header />
      <FormProvider>
        <CartProvider>
          <main className={styles.main}>
            <section className='register-container col col-6 col-sm-12'>
              <h2 className={`${styles.registerTitle} col`}>結帳</h2>
              <StepProgress currentStep={step} />
              <Steps step={step} />
              <ProgressControl step={step} handleStep={handleStep} />
            </section>
            <Cart />
          </main>
        </CartProvider>
      </FormProvider>
    </div>
  );
}

export default Checkout;