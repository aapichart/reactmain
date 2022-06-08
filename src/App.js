import './App.css';
import {
    BrowserRouter as Router,
    Routes, // react-router-dom v6 using Routes instead of Switch
    Route,
    useParams,
    Link,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import { Navbar, Nav, NavLink, NavDropdown, Button, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
            <div className="Navbar">
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" >
                                <Container>
                                    <Navbar.Brand href="/">ShareCoupon</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto" style={{textAlign:'right',fontSize:16}} >
                                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                            <Nav.Link as={Link} to="/signup">Sign-Up</Nav.Link>
                                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <br />
                            <div className="App-Contents">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                            </div>
                        </Router>
                        <footer style={{textAlign:'center'}}>
                            copyright &copy; by Essoft Co.,Ltd. 
                        </footer>
                    </div>
                </div>
            </div>
    </div>
  );
}
export default App;
