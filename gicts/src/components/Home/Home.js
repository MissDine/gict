import React from "react";
import Navbar from "../Navbar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "../Home/Head";

function Home() {
  return (
    <div className="col-sm-12">
      <Navbar />
      <Header />
      <Head/>
      <Footer />
    </div>
  );
}

export default Home;
