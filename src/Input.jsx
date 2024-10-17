import { createRoot } from "react-dom/client";
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CountryDetail from "../components/CountryDetail";
import Home from "../components/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/:CountryDetail",
                element: <CountryDetail />
            }
        ]
    },
]);

createRoot(document.getElementById('root'))
    .render(<RouterProvider router={router} />)