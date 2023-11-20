import React from "react";

//dashboard
import Admin from "../views/dashboard/admin";

// user
import UserProfile from "../views/user/user-profile";
import UserList from "../views/user/user-list";

import AuthNavigation from "./AuthNavigation";
import Error404 from "../views/errors/error404";

// auth
import SignIn from "../views/auth/sign-in";
import SignUp from "../views/auth/sign-up";
import SetPassword from "../views/auth/setpassword";

// errors
import Error500 from "../views/errors/error500";
import Maintenance from "../views/errors/maintenance";
import Default from "../layouts/dashboard/default";

const Routers = [
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/admin", element: <Admin /> },

      // User
      { path: "/user/profile", element: <UserProfile /> },
      { path: "/user/list", element: <UserList /> },

      { path: "/", element: <Admin /> },
      { path: "*", element: <Error404 /> },
    ],
  },
  {
    path: "auth",
    element: <AuthNavigation />,
    children: [
      // { path: "confirm-mail", element: <ConfirmMail /> },
      // { path: "recoverpw", element: <Recoverpw /> },
      { path: "set-password", element: <SetPassword /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "error404", element: <Error404 /> },
      { path: "error500", element: <Error500 /> },
      { path: "maintenance", element: <Maintenance /> },
    ],
  },
];

export default Routers;
