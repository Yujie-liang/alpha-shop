//import logo from './logo.svg';
//import './App.css';

import styles from './app.module.scss';
import StepProgress from './components/StepProgress/StepProgress.js';
import Steps from './components/Step/Steps.js';
import ProgressControl from './components/ProgressControl/ProgressControl.js';
import Cart from './components/Cart/Cart.js'
function App() {
  return (
    <div className="App">
      <main className={styles.main}>
        <section className='register-container col col-6 col-sm-12'>
          <h2 className={`${styles.registerTitle} col`}>結帳</h2>
          <StepProgress />
          <Steps />
          <ProgressControl />
          
        </section>
        <Cart />
      </main>

    </div>
  );
}

export default App;
