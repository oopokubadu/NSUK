import { Outlet } from "react-router-dom";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative">
      <NavHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
