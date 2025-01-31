import { NavLink } from "react-router-dom";
import Headertext from "../Pages/Header Page/Headertext";
import Profile from "../Pages/Header Page/Profile";
import Search from "../Pages/Header Page/Search";

function Header() {
  return (
    <div className="flex h-20 items-center justify-between p-6 bg-[#F4F4F5] drop-shadow-lg">
      <Profile description="ReactJs Dev" name="Mohit Prajapati" />
      <div className="flex gap-8">
        <NavLink
          to={"/foryou"}
          className={({ isActive }) =>
            isActive ? "text-black" : "text-gray-500"
          }
        >
          <Headertext text="For you" />
        </NavLink>
        <NavLink
          to={"/following"}
          className={({ isActive }) =>
            isActive ? "text-black" : "text-gray-500"
          }
        >
          <Headertext text="Following" />
        </NavLink>
        <NavLink
          to={"/popular"}
          className={({ isActive }) =>
            isActive ? "text-black" : "text-gray-500"
          }
        >
          <Headertext text="Popular" />
        </NavLink>
      </div>
      <Search />
    </div>
  );
}

export default Header;
