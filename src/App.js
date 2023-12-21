import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Events from "./pages/Events.js";
import Event from "./pages/Event.js";

import ScrollToTop from "./components/ScrollToTop.js";

function App() {
    return (
        <Router basename="/">
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/HerAI_Web" exact Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/community" Component={Community} />
                <Route path="/contact" Component={Contact} />
                <Route path="/events" Component={Events} />
                <Route path="/login" Component={Login} />
                <Route path="/event/:eventTitle" Component={Event} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
