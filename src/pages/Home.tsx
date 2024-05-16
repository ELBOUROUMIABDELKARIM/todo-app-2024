import { TodoList } from "../components/Todo/TodoList";

export default function Home({todos, setTodosHome }) {
  return (
    <>
      <TodoList setTodosHome={setTodosHome} todosHome={todos} />
    </>
  );
}
