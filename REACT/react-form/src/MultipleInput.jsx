import React from 'react'
import { useState } from 'react'
export default function MultipleInput() {
    const [firstname, setfirstname] = useState('');
    const updatefirstname=(e)=>{
      console.log("changed");
      setfirstname(e.target.value);
    }
    const [secondname, setsecondname] = useState('');
    const updatesecondname=(e)=>{
      console.log("changed");
      setsecondname(e.target.value);
    }
    return (
      <div>
        <label htmlFor="firstname">Enter your first name</label>
        <input type="text" placeholder='firstname' value={firstname} onChange={updatefirstname} id='firstname'/>
        <label htmlFor="secondname">Enter your second name</label>
        <input type="text" placeholder='secondname' value={secondname} onChange={updatesecondname} id='secondname'/>
        <button>submit</button>
      </div>
    );
  }
  