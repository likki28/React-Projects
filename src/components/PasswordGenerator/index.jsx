import { useCallback, useState } from "react"

export default function PasswordGenerator(){

    const [length,setLength]=useState(8);
    const [password,setPassword]=useState("")
    

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

        <div>
            <input type="text" placeholder="generate password" value={password} readOnly/>
            <input type="range" min={8} max={16} value={length}  onChange={(e)=>setLength(Number(e.target.value))}/>
            <button onClick={handleChange}>Generate password</button>
            

        </div>
        
        
        
        </>
    )
}