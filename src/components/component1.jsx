import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPayloadAction } from '../store/Component/Camponent.actions'

export default function Component1() {
  const result = useSelector(state => state.value)
  const dispath = useDispatch()

  const [valueText, setValueText] = useState() 

  function handleChange(e) {
    setValueText(e.target.value)
  }

  return (
    <>
      <h1 
        data-testid="h1-test">Component 01 : { result }</h1>
      
      <input 
        data-testid="input-test"
        type="text" 
        onChange={handleChange} />

      <button 
        data-testid="btn-send-test" 
        onClick={()=> dispath(setPayloadAction(valueText)) }>Send</button>
    </>
  )
}