import tv4 from 'tv4'
import stateSchema from './stateSchema'

export default ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //immediately pass action to reducer
    next(action)

    //validator works here
    if (!tv4.validate(getState(), stateSchema)) {
      console.warn('Invalid state schema detected')
    }
  }
