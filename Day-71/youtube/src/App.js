import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Watchpage from "./Components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/watch",
        element: <Watchpage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
