import React, { useEffect, useState } from 'react'
import { useAccount, useSendTransaction } from 'wagmi'
import { useRouter } from '../utils/useRouter';
import { useState } from 'react';


const dashboard = () => {
    const [to, setTo] = useState("");
    const [value, setValue] = useState("");
    const {isConnected} = useAccount();
    const router = useRouter();
    const {SendTransaction} = useSendTransaction({
        request:{
            to,
            value:(value*1e18).toString(),
        },
        onSuccess: () => alert('Transaction created success' ),
    });


     useEffect(() => {
        if( !isConnected)
        router.replace("/");
}, [isConnected]);
  return (
    <div>
     <input text ="text" value={to} onChange={(e) => setTo(e.target.value)}></input>
     <div>Value:{""}
     <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
     </div>
     <button onClick={SendTransaction}>Send</button>
    </div>
  )
}

export default dashboard
