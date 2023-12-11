import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);
export default router
