import React from "react";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes } from "../router";
import Login from "../pages/Login";
import Event from "../pages/Event";

const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Routes>
       { isAuth
          ? privateRoutes.map(route => 
              <Route path={route.path} element={<Login/>} key={route.path}/>
            )
          : publicRoutes.map(route => 
              <Route path={route.path} element={<Event/>} key={route.path}/>
            )
        }
    </Routes>
  )
}

export default AppRouter;