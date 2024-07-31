import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/routes/layout/Layout";
import Home from "@/routes/home/Home";
import Products from "@/routes/products/Products";
import AboutMe from "@/routes/about-me/AboutMe";
import "./App.css";
import "./fonts.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>my error page</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about-us",
        element: <AboutMe />,
      },
       {
        path: "contact-us",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
