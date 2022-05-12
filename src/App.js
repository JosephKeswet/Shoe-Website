import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import About from './pages/About';
import Profile from './pages/Profile';
import HomeScreen from './pages/HomeScreen';
import Nav from './components/Nav';
import Test from './pages/Test';
import Help from './components/Help';


function App() {
  return (
    <Router>
      
        <Nav/>
     
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/help' element={<Help/>}/>
        
      
     

      </Routes>
    </Router>
  );
}

export default App;
