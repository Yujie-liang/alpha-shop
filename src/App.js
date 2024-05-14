//import logo from './logo.svg';
//import './App.css';
import main from './styles/main.scss';
import app from './app.scss';
import StepProgress from './components/StepProgress/StepProgress.js';
import Steps from './components/Step/Steps.js';
import ProgressControl from './components/ProgressControl/ProgressControl.js';
function App() {
  return (
    <div className="App">
      <main>
        <h2 className={`${app.registerTitle} ${main.col}`}>結帳</h2>
        <StepProgress />
        <Steps />
        <ProgressControl />
      </main>
    </div>
  );
}

export default App;
