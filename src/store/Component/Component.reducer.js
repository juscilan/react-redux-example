export default function (state = {}, action) {
	switch(action.type) {
		case 'SUM':
			return action.payload
		default:
			return state
	}
}