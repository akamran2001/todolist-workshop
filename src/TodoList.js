import React from "react";
function TodoList({todos, deleteTodo}){
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default TodoList;