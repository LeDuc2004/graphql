import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AuthLayout = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
        loader: async () => {
          const query = `query {
            folders {
              name
            }
          }
          `;
          const res = await fetch("http://localhost:4000", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              query,
            }),
          });
          return res;
        },
      },
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);
