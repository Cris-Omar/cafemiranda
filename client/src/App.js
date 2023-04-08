import "./style/styles.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <Router >
      <div className="app">
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
