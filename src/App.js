
import {useState} from 'react';
import styles from './app.module.scss';
import StepProgress from './components/StepProgress/StepProgress.js';
import Steps from './components/Step/Steps.js';
import ProgressControl from './components/ProgressControl/ProgressControl.js';
import Cart from './components/Cart/Cart.js'
function App() {
  const [step, setStep] = useState(1);
  function handleStep(e, direction) {
    if (direction === 'prev' && step > 1){
      setStep(step - 1);
    }
    if (direction === 'next' && step <3){
      setStep(step + 1);
      console.log(step);
    }
  }
  return (
    <div className="App">
      <main className={styles.main}>
        <section className='register-container col col-6 col-sm-12'>
          <h2 className={`${styles.registerTitle} col`}>結帳</h2>
          <StepProgress currentStep={step}/>
          <Steps step={step} />
          <ProgressControl step={step} handleStep={handleStep}/>
          
        </section>
        <Cart />
      </main>

    </div>
  );
}

export default App;
