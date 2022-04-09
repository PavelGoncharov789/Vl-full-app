import React from "react";
// import {Switch, Route, Redirect} from "react-router-dom"
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { LinksPage } from "./pages/LinksPage";
import { AuthPage } from "./pages/AuthPage";
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<LinksPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
};
