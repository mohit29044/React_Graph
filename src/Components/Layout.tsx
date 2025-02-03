import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
