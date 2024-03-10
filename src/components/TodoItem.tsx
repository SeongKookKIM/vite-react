import { TodosType } from "../types/type";
import { memo } from "react";
import "./TodoItem.css";

interface TodoPropsType {
  todo: TodosType;
  onUpdate: (tarketId: number) => void;
  onDelete: (tarketId: number) => void;
}

function TodoItem({ todo, onUpdate, onDelete }: TodoPropsType) {
  const { id, isDone, content, date } = todo;

  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button type="button" onClick={onClickDeleteButton}>
        삭제
      </button>
    </div>
  );
}
// Memo시 현재 컴포넌트는 onUpade, onDelete값이 얕은비교로 인해 참조값이 변경된다 판단하여 리렌더링이 일어남
// 고차 컴포넌트 (HOC)
export default memo(
  TodoItem,
  (prevProps: TodoPropsType, nextProps: TodoPropsType): boolean => {
    // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
    // T -> Props가 바뀌지 않음, 리렌더링X
    // F -> Props가 바뀜, 리렌더링 O
    if (prevProps.todo.id !== nextProps.todo.id) return false;
    if (prevProps.todo.isDone !== nextProps.todo.isDone) return false;
    if (prevProps.todo.content !== nextProps.todo.content) return false;
    if (prevProps.todo.date !== nextProps.todo.date) return false;

    return true;
  }
);
