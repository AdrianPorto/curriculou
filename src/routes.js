import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Main from "./pages/main";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Main }  path="/"/>
       </BrowserRouter>   )
}

export default Routes;