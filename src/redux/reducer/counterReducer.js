import { INCREMENT, DECREMENT, DEFULTIMGE } from '../action/types'
// this is initlaization state
export const conterReducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      if (state.count >= 1) {
        return { count: state.count - action.value }
      } else if (state.count < 1) {
        return state
      }
      break
    default:
      return state
  }
}
