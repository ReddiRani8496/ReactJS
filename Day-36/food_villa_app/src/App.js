import "./App.css";
import Body from "./components/BodyComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileComponent";
import { lazy } from "react";

//import Instamart from "./components/Instamart";

// Lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

function App() {
  return (
    <div>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <AboutUs />,
        children: [{ path: "profile", element: <Profile name="Reddirani" /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      { path: "/instamart", element: <Instamart /> },
    ],
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />,
  // },
]);

export default AppRouter;
