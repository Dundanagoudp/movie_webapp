import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from "./Pages/Home";
import { MoviesCard } from "./components/MoviesCard";

export const App=()=>{

    const router = createBrowserRouter([
      {
            path:"/",
            element :<AppLayout/>,
            children:[
                  {
                        path:"/",
                        element :<Home/>
                  }, 
                  {
                        path:"/moviescard",
                        element :<MoviesCard/>
                  },                 
            ]
     },
      
]);
return <RouterProvider router={router}/>

};