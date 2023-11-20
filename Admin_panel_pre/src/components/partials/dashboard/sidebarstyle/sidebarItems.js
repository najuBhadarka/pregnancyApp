import { ReactComponent as DashboardIcon } from "../../../../assets/images/icons/Dashboard-Icon.svg";
import { ReactComponent as UsersIcon } from "../../../../assets/images/icons/Users-Icon.svg";

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    roleTypes: ["Admin"],
    isMenu: false,
    path: "/Admin",
    eventKey: "dashboard",
  },
  {
    name: "Users",
    icon: UsersIcon,
    roleTypes: ["Admin", "user"],
    isMenu: false,
    eventKey: "users",
    path: "/user/list",
  }
];
