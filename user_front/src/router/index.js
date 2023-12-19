import React from "react";
import Login from "../views/pages/login/Login";
import FormRender from "../views/pages/Form/FormRender";

const Routers = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/form",
        element: <FormRender />
    }
];

export default Routers;
