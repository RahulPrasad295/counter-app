import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { decrementAsync, incrementAsync } from '../store/counter-actions';

import classes from './Counter.module.css';

const Counter = () => {
  const { value, loading, fulfilled } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAsync());
  };
  const handleDecrement = () => {
    dispatch(decrementAsync());
  };
  return (
    <div className={classes.main}>
      {loading && <p>Please wait a sec</p>}
      {fulfilled && <p>Successfully Changed</p>}
      <div>{value}</div>
      <div>
        <Button
          className={classes.Button}
          onClick={handleIncrement}
          variant="outlined"
        >
          Increment
        </Button>
        <Button
          className={classes.Button}
          onClick={handleDecrement}
          variant="outlined"
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
