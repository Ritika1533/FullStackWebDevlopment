import { useState } from "react";
export default function EmojiClicker(){
    const [emoji,setEmoji]=useState(["🥶"]);
    //const [emoji,setEmoji]=useState(["🥶"]);
    function addEmoji(){
        /*
        const newEmoji=[...emoji,"🤑"];
        setEmoji(newEmoji);
        */
       setEmoji((oldEmoji)=>{
        return [...oldEmoji,"🤑"];
       })
    }
    return (
        <>
        {emoji.map((e)=>(
              <span  style={{fontSize:"4rem"}}>{e}</span>
        ))}
        <button onClick={addEmoji}>Add Emoji</button>
        </>
    )
}