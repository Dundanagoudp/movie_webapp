import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from "./Pages/Home";
import { MoviesCard } from "./components/MoviesCard";
import { Footer } from "./Footer/Footer";
import { MovieCardDetails } from "./MovieDetails/MovieDetails";
import { Sports } from "./Pages/Sports";

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
                  {
                        path:"/moviecarddetails/:id",
                        element :<MovieCardDetails/>
                  },
                  {
                        path:"/sports",
                        element :<Sports/>
                  },    
                  {
                        path:"/footer",
                        element :<Footer/>
                  },                 
            ]
     },
      
]);
return <RouterProvider router={router}/>

};