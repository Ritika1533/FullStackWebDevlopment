import { useState } from "react";
import React from 'react'
import ShoppingForm from "./ShoppingForm";

export default function ShoppingList({addItem}) {
  const [item,setItem]=useState([
    {id:1,product:"banana",quantity:6},
    {id:2,product:"apple",quantity:10},
    {id:3,product:"oranges",quantity:20},
  ])
const addItem=()=>{
  setItem(item=>{
    return [...item,{...item,id:4}]
  })
}
return (
   <div>
        <h1>Shopping List</h1>
        <ul>
          {item.map((val)=>{
           return  <li key={val.id}>{val.product}--{val.quantity}</li>
          })}
        </ul>
        <ShoppingForm addItem={addItem}/>
   </div>
  )
}

 