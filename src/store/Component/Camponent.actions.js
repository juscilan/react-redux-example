
export function setPayloadAction(payload = '') {
  return {
    type: 'CHANGE_INPUT',
    payload
  }
}