import React from 'react'
import { useState } from 'react'
export default function ShoppingForm() {
    const [formData,setFormData]=useState({product:"",quantity:0});
    const handleChange=(e)=>{
          setFormData((currProduct)=>{
           return {
          ...currProduct,[e.target.name]:e.target.value
        }
   
})
    }
  return (
   <form >
   <h1>PRODUCT IS : {formData.product} and QUANTITY IS : {formData.quantity}</h1>
   <label htmlFor="product">Product Name </label>
   <input type="text" placeholder='pdoduct name' value={formData.product}  id="product" name="product" onChange={handleChange} />

   <label htmlFor="quantity">Quantity </label>
   <input type="text" placeholder='Quantity' value={formData.quantity}  id="quantity" name="quantity" onChange={handleChange} />
   </form>
  )
}
