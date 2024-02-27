import React from 'react'
import cities from '../../Data/in.json';
export default  function ChooseStateComponent() {
  return (
    <div className='stateWrap'>
       <select className='stateMenu'>
        {cities && cities.length>0 && cities.map((val)=>{
               return <option key={`${val.lat}${val.population}`}>{val.city}-{val.admin_name}</option>
        })}
       </select>
    </div>
  )
}

