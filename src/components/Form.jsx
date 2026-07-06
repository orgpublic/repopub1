import { ACTIONS } from "./FormReducer";
import { useReducer } from "react";
import { formReducer, INITIAL_STATE } from "./FormReducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleInputChange = (e) => {
    dispatch({
      type: ACTIONS.INPUT_CHANGE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
  // console.log(state);
  return (
    <>
      <h3>useReducer Example</h3>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter your email"
        name="email"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter your age"
        name="age"
        onChange={handleInputChange}
      />
      <button onClick={() => dispatch({ type: ACTIONS.INCREASE_AGE })}>
        Increase Age
      </button>
      Age is: {state.age}
      <button onClick={() => dispatch({ type: ACTIONS.DECREASE_AGE })}>
        Decrease Age
      </button>
    </>
  );
};

export default Form;
