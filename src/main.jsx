import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SingleCard from "./components/cards/singleCard.jsx";
import NotFound from "./components/NotFound.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/:cardId",
        element: <SingleCard />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);
