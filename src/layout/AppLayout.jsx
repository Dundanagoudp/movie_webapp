import { Outlet } from "react-router-dom";
import { Header } from "../navbar/Header";
import { Footer } from "../Footer/Footer";
import { useState } from "react";

const AppLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");  

  const handleSearch = (term) => {
    setSearchTerm(term);  
  };

  return (
    <>
      <Header onSearch={handleSearch} /> 
      <Outlet context={{ searchTerm }} /> 
      <Footer />
    </>
  );
};

export default AppLayout;
