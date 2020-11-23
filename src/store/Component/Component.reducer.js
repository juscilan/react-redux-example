const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return action.payload
	default:
	  return state
  }
}

export default reducer 