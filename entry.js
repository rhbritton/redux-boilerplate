require('./style.css')
var { reducer } = require('./reducer/reducer.js')

import { createStore } from 'redux'

// Create a Redux store holding the state of your app. 
// Its API is { subscribe, dispatch, getState }. 
let store = createStore(reducer)

// You can subscribe to the updates manually, or use bindings to your view layer. 
store.subscribe(() =>
	console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action. 
// The actions can be serialized, logged or stored and later replayed. 
store.dispatch({ type: 'INCREMENT' })
// 1 
store.dispatch({ type: 'INCREMENT' })
// 2 
store.dispatch({ type: 'DECREMENT' })
// 1