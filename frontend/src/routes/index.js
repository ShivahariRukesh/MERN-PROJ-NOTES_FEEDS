import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import { Profile } from "../pages/Profile";
export const collectRoute = [
  {
    element: <Login />,
    path: "/login",
    name: "Login",
  },
  {
    element: <Home />,
    name: "Home",
    path: "/home",
  },
  {
    element: <About />,
    path: "/about",
    name: "About",
  },
  {
    element: <Profile />,
    path: "/profile",
    name: "Profile",
  },
];
