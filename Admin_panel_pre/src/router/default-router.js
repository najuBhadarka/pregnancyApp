import React from "react";
import Index from "../views/dashboard/index";

import { Route, Routes } from "react-router-dom";

//dashboard
import Admin from "../views/dashboard/admin";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AuthNavigation from "./AuthNavigation";
import Error404 from "../views/dashboard/errors/error404";


const DefaultRouter = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadein" timeout={300}>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<AuthNavigation />}>
            <Route path="/admin" element={<Admin />} />

            {/* user */}

            <Route path="/" element={<Index />} />
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DefaultRouter;
