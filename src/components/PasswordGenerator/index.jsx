import { useCallback, useState, useRef } from "react"

export default function PasswordGenerator(){

    const [length,setLength]=useState(8);
    const [password,setPassword]=useState("")

    const ref=useRef(0);
    console.log(ref)
    

    const handleChange=useCallback(()=>{

        const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let newStr="";

        for(let i=0;i<length;i++){
            let index=Math.floor(Math.random()*str.length)
            newStr+=str.charAt(index)
            


        }
        console.log(newStr)
        setPassword(newStr)


    },[length])




    return(
        <>

        <div > 
            <input  className="border border-black rounded-md" type="text" placeholder="generate password" value={password} readOnly/>
            <div></div>
            <input type="range" min={8} max={16} value={length}  onChange={(e)=>setLength(Number(e.target.value))}/>
            <div></div>
            <button className=" border border-black bg-pink-500" onClick={handleChange}>Generate password</button>
            

        </div>
        
        
        
        </>
    )
}