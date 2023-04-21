import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import Footer from './components/Footer'
import Error from './components/Error';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import PortFolio from './components/Portfolio'
import Wallet from './components/Wallet'

 const AppLayout = () => (
  <>
  <Navbar/>
  <Outlet/>
  
  
  
  </>
)

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
     children:[
      {
        path:"/",
        element:<Body/>,
       },
    {
    path:"/portfolio",
    element:<PortFolio/>,
   },
  {
    path:"/wallet",
    element:<Wallet/>,
    
  }
]
},

])




export default appRouter;
