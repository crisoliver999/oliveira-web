import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs";
import Feedback from "./components/Feedback/Feedback"
import Home from "./components/Home/Home"
import Portfolio from "./components/Portfolio/Portfolio"
import "./App.css"

function App() {
    return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
