import React from "react";
import Login from "../views/pages/login/Login";
import FormRender from "../views/pages/Form/FormRender";
import Register from "../views/pages/register/Register";

const Routers = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/form",
        element: <FormRender />
    },
    {
        path: "/sign-up",
        element: <Register />
    },
];

export default Routers;
