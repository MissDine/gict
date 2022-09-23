import React from "react";
import Navbar from "../Navbar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "../Home/Head";
import Services from "../Services/Services";
import About from "../About/About"

function Home() {
  return (
    <div className="col-sm-12">
      <Navbar />
      <Header />
      <About/>
      <Head/>
      <Services/>
      <Footer />
    </div>
  );
}

export default Home;
