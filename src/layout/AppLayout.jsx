import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../navbar/Header";
import { Footer } from "../Footer/Footer";

const AppLayout = () => {
  
  const navigation = useNavigation();
  
  console.log(navigation);

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;