import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import About from './pages/About';
import Profile from './pages/Profile';
import HomeScreen from './pages/HomeScreen';
import Nav from './components/Nav';
import Help from './components/Help';
import SignUp from './pages/SignUp';
import MyCart from './pages/MyCart';
// import {CartProvider} from './CartContext'


function App() {
  return (
    // <CartProvider>
    
    <Router>
      <div className="nav__top">
        <Nav/>
        </div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/account' element={<SignUp/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/myCart' element={<MyCart/>}/>
      </Routes>
   
    </Router>


    // {/* </CartProvider> */}
  );
}

export default App;
