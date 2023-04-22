import React, { useEffect } from "react";
import { useRouter} from '../utils/useRouter'
import { useAccount, useConnect } from "wagmi";


const Wallet = () => {
  const {connectors, connect} = useConnect();
  const {isConnected} = useAccount();
  const router = useRouter();

  useEffect(()=> {
    if(isConnected) router.replace("/dashboard");
  } , [isConnected]);
  return( 
<div className="mt-56">

 {connectors.map(connector => <button className="bg-green-200 m-2 p-2" key = {connector.id} onClick={() => connect({connector})}>{connector.name}</button>)}
  </div>)
};

export default Wallet;
