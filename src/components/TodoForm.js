import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        classname="todo-input"
        onChange={changeHandler}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
