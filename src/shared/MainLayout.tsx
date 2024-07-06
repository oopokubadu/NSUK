import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavHeader } from "../components/NavHeader";

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
