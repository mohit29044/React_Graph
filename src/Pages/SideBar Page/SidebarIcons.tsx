import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FcStatistics } from "react-icons/fc";

interface SidebarItem {
  label: string;
  icons: IconType;
  path: string;
}

const sidebar: SidebarItem[] = [
  {
    label: "Home",
    icons: GoHome,
    path: "/home",
  },
  {
    label: "Subscribers",
    icons: CgProfile,
    path: "/subscribers",
  },
  {
    label: "Notifications",
    icons: IoIosNotifications,
    path: "/notifications",
  },
  {
    label: "Favorites",
    icons: MdOutlineFavoriteBorder,
    path: "/favorites",
  },
  {
    label: "Write",
    icons: TfiWrite,
    path: "/write",
  },
  {
    label: "Statistics",
    icons: FcStatistics,
    path: "/statistics",
  },
];
export default sidebar;
