import { Outlet } from "react-router-dom";
import { Header } from "../navbar/Header";
import { Footer } from "../Footer/Footer";

const AppLayout = () => {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;