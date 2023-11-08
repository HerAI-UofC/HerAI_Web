import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route path="/login" Component={Login} />
            </Routes>
        </Router>
    );
}

export default App;
