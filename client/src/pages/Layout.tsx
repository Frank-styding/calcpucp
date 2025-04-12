import { Outlet } from "react-router";
import { Navbar } from "src/components/Navbar";

export const Layout = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[auto_80px]">
      <div className="w-full h-full ">
        <Outlet />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};
