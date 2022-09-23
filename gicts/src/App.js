import "../src/index.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Contact from "../src/components/Contact/Contact"
import Services from "../src/components/Services/Services"
import About from "../src/components/About/About"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/header" component={Header}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Routes>
        <Header />
        {/* <Head/> */}
        <About/>
        <Services/>
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
