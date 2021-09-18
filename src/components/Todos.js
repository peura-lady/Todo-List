import React, { useState } from 'react';

function Todos() {
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, desc]);
    }

    return (
        <div>
            Description: <input value={desc} onChange={e => setDesc(e.target.value)} />
            Date: <input value={date} onChange={e => setDate(e.target.value)} />
            <button onClick={addTodo}> Add </button>
            <table>
            <br />
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo}</td>
                                <td>{date}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todos;