import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingPage, CheckoutPage, LoginPage, SignUpPage, HomePage, FavoritePage } from './pages';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import { FavoritesProvider } from './context/FavoritesContext';


const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <ProductsProvider>
            <FavoritesProvider>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="shop" element={<ShoppingPage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            </FavoritesProvider>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
