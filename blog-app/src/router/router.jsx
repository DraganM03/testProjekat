import { HomePage } from "../pages/Home"
import {Page1Page} from "../pages/Page1"
import {NavbarLayout} from "../layouts/navbar.jsx"


export const appRoutes = [

    {
        path:'',
        element:<NavbarLayout/>,
        children:[
            {
                path:'',
                element:<HomePage/>,
                index:true
            },
            {
                path:'page1',
                element:<Page1Page/>,
                index:true
            }
        ]

    }



]