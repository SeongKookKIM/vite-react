import { TodosType } from "../types/type";
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

export default TodoItem;
