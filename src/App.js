import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import {HomePage} from "./pages/Home";
import {AddPost} from "./pages/AddPost";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/posts/add",
            element: <AddPost/>,
        }
    ])

    return (
        <div className="App">
            <ChakraProvider>
                <RouterProvider router={router}/>
            </ChakraProvider>
        </div>
    );
}

export default App;
