import clsx from "clsx";
import { TodoItemType } from "../../App";
import { memo } from "react";

type Props = {
  todoItem: TodoItemType;
  updateTodo: (item: TodoItemType) => void;
  deleteTodo: (item: TodoItemType) => void;
};

const TodoItem = memo(({ todoItem, updateTodo, deleteTodo }: Props) => {
  console.log("todo item render");

  return (
    <div key={todoItem.id} className="flex items-center">
      <div>
        <label htmlFor="isCompleted" className="sr-only">
          Is Completed
        </label>
        <input
          type="checkbox"
          name="completed"
          id="isCompleted"
          checked={todoItem.isDone}
          onChange={() => updateTodo(todoItem)}
        />
      </div>
      <p
        className={clsx("flex-1 px-4", {
          "line-through": todoItem.isDone,
        })}
      >
        {todoItem.text}
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => deleteTodo(todoItem)}
      >
        Delete
      </button>
    </div>
  );
});

export default TodoItem;
