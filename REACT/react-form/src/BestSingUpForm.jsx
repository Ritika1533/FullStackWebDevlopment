import React from 'react';
import { useState } from 'react';

export default function BestSignUpForm() {
  const [formData, setFormData] = useState({ firstName: "", secondName: "" });

  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    console.log(changedField, newValue);
    setFormData((currValue) => {
      return {
        ...currValue,
        [changedField]: newValue,
      };
    });
  };

  return (
    <div>
      <label htmlFor="firstname">Enter your first name</label>
      <input type="text" placeholder="firstname" value={formData.firstName} onChange={handleChange} id="firstname" name="firstName" />
      <label htmlFor="secondname">Enter your second name</label>
      <input type="text" placeholder="secondname" value={formData.secondName} onChange={handleChange} id="secondname" name="secondName"/>
      <button>submit</button>
    </div>
  );
}

   

