import { Login } from "./Login"
import { Browse } from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
export const Body=()=>{
    const Approuter = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",
                element:<Browse/>
            }
        ]
    )
    return(
        <div>
            <RouterProvider router={Approuter} />
        </div>
    )
}