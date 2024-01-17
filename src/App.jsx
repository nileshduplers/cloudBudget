import { useState } from "react";
import "../src/index.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content_img from "./components/Content-img/Content-img";
import Features from "./components/Features/Features";
import Technology from "./components/Technology/Technology";
import Stayfocus from "./components/Stayfocus/Stayfocus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Content_img />
      <Features />
      <Technology />
      <Stayfocus />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
