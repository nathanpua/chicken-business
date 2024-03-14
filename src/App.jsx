import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import home from './pages/home';
import Menu from './pages/Menu';
import about from './pages/about';
import contact from './pages/contact';
import Footer from './Components/Footer'
import {Cart} from './pages/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path='/' exact Component={home}/>
            <Route path='/Menu' exact Component={Menu}/>
            <Route path='/cart' exact Component={Cart}/>
            <Route path='/about' exact Component={about}/>
            <Route path='/contact' exact Component={contact}/>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
