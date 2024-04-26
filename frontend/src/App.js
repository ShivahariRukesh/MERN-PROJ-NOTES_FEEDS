import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import { collectRoute } from "./routes/index";
import Public from "./pages/Public";
import DashLayout from "./components/DashLayout.js";
import Login from "./pages/Login";
import Welcome from "./features/auth/Welcome.js";
import { UserLists } from "./features/users/UserLists.js";
import NotesList from "./features/notes/NotesList.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Welcome />} />
              <Route path="users" element={<UserLists />} />
              <Route path="notes" element={<NotesList />} />
            </Route>
          </Route>

          {/* {collectRoute.map((route) => (
            <Route key={route.name} element={route.element} path={route.path} />
          ))} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
