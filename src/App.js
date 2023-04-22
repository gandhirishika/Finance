import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import Footer from './components/Footer'
import Error from './components/Error';
import {createBrowserRouter, Outlet, } from 'react-router-dom'
import PortFolio from './components/Portfolio'
import Wallet from './components/Wallet'
import CardInfo from './components/CardInfo';
import React from "react";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import {publicProvider} from 'wagmi/providers/public';
import { polygonMumbai } from 'wagmi/chains'
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
 import {InjectedConnector} from '@wagmi/core'

const {chains,provider, webSocketProvider} = configureChains([polygonMumbai], [publicProvider()]);


const client = createClient({
  autoConnect:true,
  provider,
  webSocketProvider,
  connectors:[
  new  WalletConnectConnector({chains}),
   new CoinbaseWalletConnector({chains}),
   new MetaMaskConnector({chains}),
   new InjectedConnector({chains, options:{name:"Injected"}}),
 
  ],
  showQrModal: true,

});

 const AppLayout = () => (
  <>
  <WagmiConfig client={client}>
  <Navbar/>
  <Outlet/>
  
  <Footer/>
  
  </WagmiConfig>
  
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
    
  },
  {
  path:"/cardinfo",
  element:<CardInfo/>
  }
]
},

])




export default appRouter;
