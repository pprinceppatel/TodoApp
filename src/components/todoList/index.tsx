import { memo } from "react";
import { FilterType, TodoItemType } from "../../App";
import TodoItem from "../todoItem";

type Props = {
  updateTodo: (item: TodoItemType) => void;
  deleteTodo: (item: TodoItemType) => void;
  filterType: FilterType;
  todoList: TodoItemType[];
};

const TodoList = memo(
  ({ todoList, filterType, updateTodo, deleteTodo }: Props) => {
    console.log("render TodoList");

    return (
      <section id="todoList" className="flex flex-1 flex-col m-4 my-10 gap-4">
        {todoList.map((x: TodoItemType) => {
          if (
            filterType === FilterType.all ||
            (filterType === FilterType.pending && !x.isDone) ||
            (filterType === FilterType.completed && x.isDone)
          ) {
            return (
              <TodoItem
                key={x.id}
                todoItem={x}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            );
          }
          return null;
        })}
      </section>
    );
  }
);

export default TodoList;
