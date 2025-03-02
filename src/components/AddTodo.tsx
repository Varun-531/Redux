import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { addTodo } from "@/features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <Input
          type="text"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default AddTodo;
