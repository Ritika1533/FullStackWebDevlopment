import { useState } from "react";
import {v4 as uuidv4} from "uuid";
export default function DeleteArrayEle(){
    const [emoji,setEmoji]=useState([{id: uuidv4(),emoji : "🤑"}]);
    //const [emoji,setEmoji]=useState(["🤑"]);
    function addEmoji(){
        /*
        const newEmoji=[...emoji,"🥶"];
        setEmoji(newEmoji);
        */
       setEmoji((oldEmoji)=>{
        return [...oldEmoji,{id: uuidv4(),emoji : "🥶"}];
       })
    }
    //delete emoji
    function deleteEmoji(id){
    
        setEmoji((prevEmoji) => prevEmoji.filter(e => e.id !== id));
    }
    return (
        <>
        {emoji.map((e)=>(
              <span key={e.id} onClick={()=>deleteEmoji(e.id)} style={{fontSize:"4rem"}}>{e.emoji}</span>
        ))}
        <button onClick={addEmoji}>Add Emoji</button>
        </>
    )
}