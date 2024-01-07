import React from "react";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Header/>
      <Footer/>
       
      </>
    )
  }
  
  export default Layout