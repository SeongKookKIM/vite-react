import "./List.css";
import TodoItem from "./TodoItem";
import { TodosType } from "../types/type";
import { ChangeEvent, useCallback, useState } from "react";

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

  return (
    <div className="List">
      <h4>Todo List🎆</h4>
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
