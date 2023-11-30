export const sidebarItems = [
  {
    name: "Dashboard",
    icon: '',
    roleTypes: ["Admin"],
    isMenu: false,
    path: "/Admin",
    eventKey: "dashboard",
  },
  {
    name: "Users",
    icon: "",
    roleTypes: ["Admin", "user"],
    isMenu: false,
    eventKey: "users",
    path: "/user/list",
  },
  {
    name: "Questioneries",
    icon: "",
    roleTypes: ["Admin", "user"],
    isMenu: false,
    eventKey: "questions",
    path: "/question/form",
  },
  {
    name: "Questioneries list",
    icon: "",
    roleTypes: ["Admin", "user"],
    isMenu: false,
    eventKey: "questionsList",
    path: "/question/list",
  }
];
