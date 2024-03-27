import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import GetStarted from "./pages/getStarted";
import Events from "./pages/Events.js";
import Event from "./pages/Event.js";
import StudyPlan from "./pages/studyPlan.js";

import ScrollToTop from "./components/ScrollToTop.js";
import Profile from "./pages/Profile.js";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/community" Component={Community} />
                <Route path="/contact" Component={Contact} />
                <Route path="/events" Component={Events} />
                <Route path="/login" Component={Login} />
                <Route path="/events/:eventTitle" Component={Event} />
                <Route path="/profile" Component={Profile} />
                <Route path="/getStarted" Component={GetStarted} />
                <Route path="/studyPlan" Component={StudyPlan} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
