import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

function AllTodo() {
  const [input, setInput] = useState("");
  const addTodoHandler = {};
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

export default AllTodo;
