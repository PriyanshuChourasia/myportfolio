import { Outlet } from "react-router-dom";
import Header from "../../features/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
