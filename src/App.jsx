import React, { useState } from "react";
import { addTodo, removeTodo } from "./slices/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [todoText, setTodoText] = useState("");  // State for input text
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ text: todoText }));
      setTodoText("");  // Clear input after adding todo
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Todo App</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <input
          style={{
            height: "34px",
            width: "30vw",
            padding: "5px",
            outline: "none",
            fontSize: "15px",
            color: "red",
          }}
          type="text"
          placeholder="Enter Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          style={{
            color: "white",
            fontWeight: "700",
            backgroundColor: "gray",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      {/* Displaying the todos */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {todo}
              {/* Add a remove button for each todo */}
              <button
                style={{
                  marginLeft: "10px",
                  color: "red",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
                onClick={() => dispatch(removeTodo({ id: index }))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
