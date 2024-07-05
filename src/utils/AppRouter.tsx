import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
  );
};

export default AppRouter;
