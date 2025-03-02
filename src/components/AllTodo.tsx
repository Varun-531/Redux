import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "@/features/todo/todoSlice";
import { Button } from "./ui/button";
import { Todo } from "@/lib/type";

function AllTodo() {
  const todos = useSelector(
    (state: { todo: { todos: Todo[] } }) => state.todo.todos || []
  );

  const dispatch = useDispatch();

  return (
    <div>
      <div>My Todos</div>
      {todos.length > 0 ? (
        todos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.title}
            <Button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </Button>
          </li>
        ))
      ) : (
        <div>No todos available.</div>
      )}
    </div>
  );
}

export default AllTodo;
