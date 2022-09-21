import "../src/index.css"
import Navbar from "../src/components/Navbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Home from "../src/components/Home/Home"
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path = "/" component={Home}></Route>
      <Route exact path = "/header" component={Header}></Route>
      </Routes>
      <Header/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
