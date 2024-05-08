import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>;
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment by amount
        </button>
        <button onClick={() => dispatch(incrementAsync(1))}>Increment after 1 second</button>
      </div>
    </div>
  );
};
export default Counter;
