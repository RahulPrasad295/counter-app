import { counterActions } from './counter-slice';

export const LOADING = 'counter/loading';
export const FULFILLED = 'counter/fulfilled';
export const REJECTED = 'counter/rejected';

export const incrementAsync = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      await setTimeout(() => {
        dispatch(counterActions.increment());
        dispatch({ type: FULFILLED });
      }, 1000);
    } catch (err) {
      dispatch({ type: REJECTED });
    }
  };
};

export const decrementAsync = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      await setTimeout(() => {
        dispatch(counterActions.decrement());
        dispatch({ type: FULFILLED });
      }, 1000);
    } catch (err) {
      dispatch({ type: REJECTED });
    }
  };
};
