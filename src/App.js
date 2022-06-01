import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import About from './pages/About';
// import Profile from './pages/Profile';
import HomeScreen from './pages/HomeScreen';
import Nav from './components/Nav';
import Help from './components/Help';
// import SignUp from './components/SignUp';
import MyCart from './pages/MyCart';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import TopDealsPage from './pages/TopDealsPage';
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
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/help' element={<Help/>}/>
        <Route exact path='/myCart' element={<MyCart/>}/>
        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/topDeals' element={<TopDealsPage/>}/>
      </Routes>
   
    </Router>


    // {/* </CartProvider> */}
  );
}

export default App;
