//import logo from './logo.svg';
//import './App.css';

import styles from './app.module.scss';
import StepProgress from './components/StepProgress/StepProgress.js';
import Steps from './components/Step/Steps.js';
import ProgressControl from './components/ProgressControl/ProgressControl.js';
function App() {
  return (
    <div className="App">
      <main className={styles.main}>
        <h2 className={`${styles.registerTitle} col`}>結帳</h2>
        <StepProgress />
        <Steps />
        <ProgressControl />
      </main>
    </div>
  );
}

export default App;
