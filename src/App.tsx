import { useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { TodosType } from "./types/type";

interface TodoActionType {
  type: string;
  data?: TodosType;
  targetId?: number;
}

const mockData: TodosType[] = [];

function reducer(state: TodosType[] | undefined, action: TodoActionType) {
  switch (action.type) {
    case "CREATE":
      return [action.data as TodosType, ...(state || [])];

    case "UPDATE":
      return (state || []).map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );

    case "DELETE":
      return (state || []).filter((item) => item.id !== action.targetId);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef<number>(3);

  const onCreate = (content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId: number) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId: number) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
