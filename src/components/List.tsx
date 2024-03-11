import "./List.css";
import TodoItem from "./TodoItem";
import { TodosType } from "../types/type";
import { ChangeEvent, useContext, useMemo, useState } from "react";
import { TodoStateContext } from "../App";

function List() {
  const todos = useContext(TodoStateContext);

  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredTodos = useMemo(() => {
    if (search === "") return todos;

    return todos?.filter((todo: TodosType) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, todos]);

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("data 호출");
    const totalCount: number = todos?.length as number;
    const doneCount: number = todos?.filter((todo: TodosType) => todo.isDone)
      .length as number;

    const notDoneCount: number | undefined = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List🎆</h4>
      <div> total: {totalCount}</div>
      <div> done: {doneCount}</div>
      <div> notDone: {notDoneCount}</div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={search}
        onChange={onChangeSearch}
      />

      <div className="todos_wrapper">
        {filteredTodos && filteredTodos.length > 0 ? (
          <>
            {filteredTodos.map((todo: TodosType) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default List;
