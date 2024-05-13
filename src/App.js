import logo from './logo.svg';
import './App.css';
import StepProgress from './components/StepProgress/StepProgress.js';

function App() {
  return (
    <div className="App">
      <main>
        <h2 class="register-title col col-12">結帳</h2>
        <StepProgress />
      </main>
    </div>
  );
}

export default App;
