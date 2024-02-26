import React, { useState } from 'react';

export default function UserForm() {
  const [userName, setUserName] = useState('ritik');
  const updateUserName=(e)=>{
    console.log("changed");
    setUserName(e.target.value);
  
  }
  return (
    <div>
    <label htmlFor="username">Enter your name</label>
      <input type="text" placeholder='UserForm' value={userName} onChange={updateUserName} id='username'/>
      <button>submit</button>
    </div>
  );
}


