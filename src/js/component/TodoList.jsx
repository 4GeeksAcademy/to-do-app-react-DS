import React, { useState } from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("")

    const addTodos = () => {
        const newTodos = [...todos]
        newTodos.push(task)
        setTodos(newTodos)
        setTask("")
    }


    return (
        <>
            {/* Input para añadir notas */}

            <div className="container-input">
                <input className="input-To-Do" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button className='btn-To-Do btn btn-warning btn-sm' onClick={addTodos}>Add Task</button>
            </div>

            {/* contenedor notas */}
            <div className="notes">
                {
                    // notas
                    todos.length > 0 &&
                    todos.map((task) => {
                        return <div className='note'>{task}</div>
                    })
                }

            </div>
        </>
    )
}

export default TodoList;