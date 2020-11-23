import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPayloadAction } from '../store/Component/Camponent.actions'

export default function Componente2() {
	const result = useSelector(state => state.value)
	const dispath = useDispatch()

	const [valueText, setValueText] = useState() 

	function handleChange(e) {
			setValueText(e.target.value)
	}

	return (
		<>
				<h1>Componente 2 : { result }</h1>
				<input type="text" onChange={handleChange} />
				<button onClick={()=>{ dispath(setPayloadAction(valueText))	}}>Send</button>
		</>
	)
}