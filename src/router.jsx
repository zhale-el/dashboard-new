import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login/Login";
import Register from "./features/identity/components/register/Register";
import IdentityLayout from "./layouts/identity-layout";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
