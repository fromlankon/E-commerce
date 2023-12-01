import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./layouts/main/pages/Home";
import About from "./layouts/main/pages/About";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/login";
import Register from "./layouts/auth/pages/register";
import Details from "./layouts/main/pages/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: ":id",
                element: <Details />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "*",
                element: <h1> 404 Not Found </h1>
            }
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "",
                element: <Login />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]);

export const MainRouter = () => {
    return <RouterProvider router={router} />
}