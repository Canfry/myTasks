import { useRef, useState } from "preact/hooks";
import { Todo } from "../interfaces/Todo.ts";

export default function Todos() {
  const [counter, setCounter] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTodo = (event: Event) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      const newTodo: Todo = {
        id: counter,
        title: inputRef.current.value,
      };
      setTodos((prevState) => {
        return [...prevState, newTodo];
      });
      setCounter((prevState) => ++prevState);
      inputRef.current.value = "";
    }
  };

  const removeTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((t) => t.id === id));
  };

  const editTodo = (todo: Todo) => {
    setTodos((prevState) =>
      prevState.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      })
    );
  };

  return (
    <>
      <div className="mt-10 mx-auto max-w-sm w-full">
        <form onSubmit={addTodo}>
          <input
            className="w-full rounded-md py-1.5 px-3.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            type="text"
            id="todo"
            name="todo"
            placeholder="Enter new todo..."
            ref={inputRef}
            required
          />
        </form>
      </div>
      {todos.length > 0
        ? (
          <div className="mt-10">
            {todos.map((todo) => <p>{todo.title}</p>)}
          </div>
        )
        : (
          <div className="mt-10 text-center">
            <div>
              <img
                src="/completed.svg"
                alt="Completed illustration"
              />
              <h2 className="text-2xl font-bold mb-5">
                All tasks are completed!!
              </h2>
              <p>Go have fun outside!</p>
            </div>
          </div>
        )}
    </>
  );
}
