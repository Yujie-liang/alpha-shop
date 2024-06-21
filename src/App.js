import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingPage, CheckoutPage, LoginPage, SignUpPage, HomePage } from './pages';
import { AuthProvider } from 'context/AuthContext';
const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="shop" element={<ShoppingPage />} />
            <Route path="checkout" element={<CheckoutPage/>} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
