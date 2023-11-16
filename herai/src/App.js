import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Events from "./pages/Events.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/links" Component={Links} />
                <Route path="/contact" Component={Contact} />
                <Route path="/events" Component={Events} />
                <Route path="/login" Component={Login} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
