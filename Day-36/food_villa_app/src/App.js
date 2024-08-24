import "./App.css";
import Body from "./components/BodyComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

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
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />,
  // },
]);

export default AppRouter;
