import React, { useState } from 'react';

function Todos() {
    const [desc, setDesc] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, desc]);
    }

    return (
        <div>
            <input value={desc} onChange={e => setDesc(e.target.value)} />
            <button onClick={addTodo}> Add </button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) => <tr key={index}><td>{todo} </td></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todos;