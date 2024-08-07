import { Login } from "./Login"
import { Browse } from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { useDispatch } from "react-redux"
import { addUser,removeUser } from "../utils/UserSlice"
export const Body=()=>{
    const dispatch=useDispatch();
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
    useEffect(()=>
        {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const {uid,email,displayName}=user;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                 
                } else {
                  dispatch(removeUser());
                }
              });
        },
    [])
    return(
        <div>
            <RouterProvider router={Approuter} />
        </div>
    )
}