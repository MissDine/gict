import "../src/index.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Contact from "../src/components/Contact/Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/header" component={Header}></Route>
        </Routes>
        <Header />
        {/* <Head/> */}
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
