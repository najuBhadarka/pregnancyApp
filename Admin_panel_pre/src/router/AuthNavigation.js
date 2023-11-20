import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthNavigation = () => {
  const token = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1];

  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default AuthNavigation;
