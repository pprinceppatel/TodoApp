import React, { PureComponent, createRef } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoFilter from "./components/todoFilter";
// import bgimg from "./assets/bgimag.jpg";

type Props = "";

export enum FilterType {
  all = "all",
  pending = "pending",
  completed = "completed",
}

export type TodoItemType = {
  id: number;
  text: string;
  isDone: boolean;
};

type State = {
  todoList: TodoItemType[];
  filterType: FilterType;
};

export default class App extends PureComponent<Props, State> {
  state = {
    todoList: [],
    filterType: FilterType.all,
  };

  inputRef = createRef<HTMLInputElement>();

  addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputEle = this.inputRef.current;
    if (inputEle) {
      this.setState(
        ({ todoList }: State) => {
          const todoText = inputEle.value;
          return {
            todoList: [
              ...todoList,
              { id: new Date().valueOf(), text: todoText, isDone: false },
            ],
          };
        },
        () => {
          inputEle.value = "";
        }
      );
    }
  };

  updateTodo = (x: TodoItemType) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === x.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !x.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (x: TodoItemType) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === x.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  chnageFilterType = (filterType: FilterType) => {
    this.setState({ filterType });
  };

  render() {
    const { todoList, filterType } = this.state;
    console.log("render app");

    return (
      <main className="flex flex-col h-screen">
        {/* <img src={bgimg} alt="bgimg" /> */}
        <h1 className="text-3xl font-sans text-center m-10">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          todoList={todoList}
          filterType={filterType}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter chnageFilterType={this.chnageFilterType} />
      </main>
    );
  }
}
