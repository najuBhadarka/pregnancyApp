import React from "react";
import SignIn from "../views/sign-in";
import FormRender from "../views/FormRender";

const Routers = [
    {
        path: "/",
        element: <SignIn />
    }, {
        path: "/form-test",
        element: <FormRender />
    }
];

export default Routers;