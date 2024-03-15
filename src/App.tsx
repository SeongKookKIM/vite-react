import { useReducer, useRef, useCallback, createContext, useMemo } from "react";
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

// Context APi
// export const TodoContext = createContext<any>(null);
export const TodoStateContext = createContext<TodosType[] | undefined>([]);
export const TodoDispatchContext = createContext<any>(null);

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef<number>(3);

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId: number) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId: number) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <h1>Todo</h1>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
