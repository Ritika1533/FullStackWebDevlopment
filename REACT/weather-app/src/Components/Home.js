import React from 'react'
import ChooseStateComponent from './ChooseState/ChooseStateComponent'

export default function Home() {
  return (
    <>
      <div className='homeWrap'>
          <div className='weatherSection'>
           // left components
              <div className='rightSide'>
                <ChooseStateComponent/> <br/>
                 2.weatherInfo  <br/>
                 3.Humidity     <br/>
              </div>
          </div>
      </div>
    </>
  )
}
