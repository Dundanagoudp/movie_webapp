import { Outlet } from "react-router-dom";
import { Header } from "../navbar/Header";
import { Footer } from "../Footer/Footer";
import { useState } from "react";

const AppLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");  // Lifted state

  const handleSearch = (term) => {
    setSearchTerm(term);  // Update the search term
  };

  return (
    <>
      <Header onSearch={handleSearch} /> {/* Pass the function to Header */}
      <Outlet context={{ searchTerm }} /> {/* Pass searchTerm to Outlet */}
      <Footer />
    </>
  );
};

export default AppLayout;
