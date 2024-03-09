import { TodosType } from "../types/type";
import "./TodoItem.css";

interface TodoPropsType {
  todo: TodosType;
  onUpdate: (tarketId: number) => void;
}

function TodoItem({ todo, onUpdate }: TodoPropsType) {
  const { id, isDone, content, date } = todo;

  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button type="button">삭제</button>
    </div>
  );
}

export default TodoItem;
