import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import About from "../Pages/Home/About/About";
import Skills from "../Pages/Home/Skills/Skills";
import Projects from "../Pages/Home/Projects/Projects";


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
                path: 'about',
                element: <About></About>
            },
            {
                path:'skills',
                element:<Skills></Skills>
            },
            {
                path:'projects',
                element:<Projects></Projects>
            }
        ]
    },
]);
export default router
