import { Link, NavLink } from "react-router-dom";
import sidebar from "../Pages/SideBar Page/SidebarIcons";
function Sidebar() {
  return (
    <>
      <div className="hidden lg:block bg-[#151718] max-w-56 text-white flex-1 h-screen flex-col font-medium ">
        <ul className="space-y-9 mt-6">
          {sidebar.map((item, index) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex gap-3 ml-5 items-center ${
                  isActive ? "text-white font-bold" : "text-gray-400"
                }`
              }
            >
              <li className="flex items-center gap-5">
                {<item.icons />}
                <span>{item.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
