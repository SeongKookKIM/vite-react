import { useReducer } from "react";

interface actionType {
  type: string;
  data: number;
}

function reducer(state: number, action: actionType) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

function Exam() {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button type="button" onClick={onClickPlus}>
        +
      </button>
      <button type="button" onClick={onClickMinus}>
        -
      </button>
    </div>
  );
}

export default Exam;
