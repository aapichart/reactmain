import './App.css';
import NavbarBST from './components/NavbarBST'
import {
    BrowserRouter as Router,
    Routes, // react-router-dom v6 using Routes instead of Switch
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import DataContext from './data/DataContext';

function App() {
  const state = {
      outMsg1: 'test1fromAppjs',
      outMsg2: 'test2fromAppjs'
  };
  return (
   <DataContext.Provider value={
       {
           isLoggedIn: false,
           loginId: null,
           uuid: null
       }
   }>
    <div className="App">
        <Router>
            <NavbarBST /> 
            <div className="App-Contents">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard {...state} />} /> 
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
            <footer className='Footer' style={{textAlign:'center'}}>
                copyright&copy; by Essoft Co.,Ltd. 
            </footer>
        </Router>
    </div>
   </DataContext.Provider>
  );
}
export default App;
