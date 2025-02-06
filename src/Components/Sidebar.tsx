import { NavLink } from "react-router-dom";
import sidebar from "../Pages/SideBar Page/SidebarIcons";
import settings from ".././assets/setting-icon.svg";
import hide from ".././assets/hide.png";
function Sidebar() {
  return (
    <>
      <div className="hidden lg:block bg-[#151718] w-56 text-white min-h-screen flex flex-col font-medium">
        <ul className="space-y-9 mt-6">
          {sidebar.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex gap-3 ml-5 items-center  ${
                  isActive ? "text-white font-bold" : "text-gray-400"
                }`
              }
            >
              <li className="flex items-center gap-5 ">
                <img src={item.icons} alt="" />
                <span>{item.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
        <hr className="border-gray-700 mt-8" />
        <div className="space-y-9 mt-9">
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              `flex gap-3 ml-5 items-center ${
                isActive ? "text-white font-bold" : "text-gray-400"
              }`
            }
          >
            <div className="flex items-center gap-5">
              <img src={settings} alt="" />
              <span>Settings</span>
            </div>
          </NavLink>
          <div className="flex gap-3 ml-5 items-center text-gray-400">
            <div className="flex items-center gap-5">
              <img src={hide} alt="" />
              <span>Hide</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
