import statistics from "../../assets/diagram-icon.svg";
import favourites from "../../assets/heart-icon.svg";
import write from "../../assets/write.svg";
import home from "../../assets/home-icon.svg";
import profile from "../../assets/subscriber-icon.svg";
import notification from "../../assets/noti-icon.svg";

interface SidebarItem {
  label: string;
  icons: string;
  path: string;
}

const sidebar: SidebarItem[] = [
  {
    label: "Home",
    icons: home,
    path: "/home",
  },
  {
    label: "Subscribers",
    icons: profile,
    path: "/subscribers",
  },
  {
    label: "Notifications",
    icons: notification,
    path: "/notifications",
  },
  {
    label: "Favorites",
    icons: favourites,
    path: "/favorites",
  },
  {
    label: "Write",
    icons: write,
    path: "/write",
  },
  {
    label: "Statistics",
    icons: statistics,
    path: "/statistics",
  },
];
export default sidebar;
