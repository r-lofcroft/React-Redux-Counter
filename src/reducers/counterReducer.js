const intiialState = 0

const counterReducer = (state = intiialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload
    default:
      return state
  }
}

export default counterReducer;