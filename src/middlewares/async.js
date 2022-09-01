export default ({ dispatch }) =>
  (next) =>
  (action) => {
    //Check to see if the action has a promise on it's paylod property
    //if it does, then wait for it to resolve
    //if it doesn't then send the action on to the next middleware
    if (!action.payload || !action.payload.then) {
      return next(action)
    }
    //we want to wait for the promise to resolve
    //then create a new action with that data and dispatch it
    action.payload.then(function (response) {
      const newAction = { ...action, payload: response }
      dispatch(newAction)
    })
  }
