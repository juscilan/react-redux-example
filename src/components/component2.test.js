import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'

import Component2 from './component2'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Test for component2', () => {
	const initialState = { value: 'initial value' }
	const mockStore = configureStore()

  test('should charge a H1 tag with initial value from store', async () => {
		const store = mockStore(initialState)
		const { getByTestId } = render(<Provider store={store}><Component2 /></Provider>)
		
		const fieldNode = await waitFor(() => getByTestId('input-test'))
		fireEvent.change(fieldNode, { target: { value: 'teste'}})
		expect(fieldNode.value).toEqual('teste')

		const btnNode = await waitFor(() => getByTestId('btn-send-test'))
		fireEvent.click(btnNode)

		const tagNode = await waitFor(() => getByTestId('h1-test'))
		expect(tagNode.innerHTML).toEqual('Component 02 : initial value')

  })
})
