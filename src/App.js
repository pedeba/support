import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import {UserStorage} from "./UserContext";
import Home from "./pages/Home/Home";
import Ticket from "./pages/Ticket/Ticket"
import TicketCreate from "./pages/TicketCreate/TicketCreate"
function App() {
  return (
    <div className="App">
        <Router>
            <UserStorage>
                <main className='AppBody'>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/home/:type' element={<Home/>}/>
                        <Route path={'/ticket/:id'} element={<Ticket/>}/>
                        <Route path={'/ticket/create'} element={<TicketCreate/>}/>
                    </Routes>
                </main>
            </UserStorage>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
