import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

export const collectRoute = [
  {
    element: <Login />,
    path: "/login",
    name: "Login",
  },
  {
    element: <Home />,
    name: "Home",
    path: "/",
  },
  {
    element: <About />,
    path: "/about",
    name: "About",
  },
];
