import "./List.css";
import TodoItem from "./TodoItem";
import { AnalysisResult, TodosType } from "../types/type";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

interface TodosPropsType {
  todos: TodosType[] | undefined;
  onUpdate: (tarketId: number) => void;
  onDelete: (tarketId: number) => void;
}

function List({ todos, onUpdate, onDelete }: TodosPropsType) {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = useCallback(() => {
    if (search === "") return todos;

    return todos?.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, todos]);

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("data 호출");
    const totalCount: number = todos?.length as number;
    const doneCount: number = todos?.filter((todo) => todo.isDone)
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
            {filteredTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
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
