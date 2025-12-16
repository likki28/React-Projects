import "./style.css";
import data from "./data"
import { useState } from "react";
export default function Accordian(){

    const [selected, setSelected]=useState(null)
    const [multiSelect, setMultiSelect]=useState(false)
    const [multi,setMulti]=useState([])

    function handleSelect(id){
        setSelected(selected===id?null: id)


    }

    function handleMultiSelect(id){
        let cpymulti=[...multi]
        const findCurrentIndexId=cpymulti.indexOf(id)
        if(findCurrentIndexId===-1){
            cpymulti.push(id)
        }else{
            cpymulti.splice(findCurrentIndexId,1)
        }

        setMulti(cpymulti);
    }


    return(

        <>

        <div>
            <button onClick={()=>setMultiSelect(!multiSelect)}>Enable MultiSelect</button>
            {data.map((dataItem)=>{
                return(
                    
                    <div key={dataItem.id}>   
                        <p onClick={multiSelect?()=>handleMultiSelect(dataItem.id):()=>handleSelect(dataItem.id)}>{dataItem.question}</p>

                        {multiSelect?  multi.map((selectId)=>{
                            if(selectId===dataItem.id)
                            return(
                                <p>{dataItem.answer}</p>
                                
                            )
                        })   :dataItem.id===selected?<p>{dataItem.answer}</p>:""}
                        

                     
                        </div>

                )
            })}
        </div>
        
        
        
        </>



    )
}