import React, { useState, useRef } from  'react';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function Todos() {
    const [todo, setTodo] = React.useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = React.useState([]);

    const addTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({desc:'', date:'', priority:''});
    }

    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const deleteTodo = () => {
        if(gridRef.current.getSelectedNodes().length > 0)
       setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
       else
       alert('Select Row First');
    }

    const columns = [
        {field: 'desc', sortable: true, filter: true, floatingFilter: true},
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'priority', sortable: true, filter: true, floatingFilter: true, 
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
    ]


    return (
        <div>
            <h2>Todo list</h2>
            <input placeholder = "Description" name="desc" value={todo.desc} onChange={inputChanged} />
            <input type="date" name="date" value={todo.date} onChange={inputChanged} />
            <input placeholder = "Priority" name="priority" value={todo.priority} onChange={inputChanged} />


            <button onClick={addTodo}>Add</button>
            {/* <button onClick={() => deleteTodo()}>Delete</button> */}
            <button onClick={deleteTodo}>Delete</button>

            <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
            <AgGridReact 
                onGridReady={params => gridRef.current = params.api}
                ref={gridRef}
                rowSelection="single"
                rowData={todos}
                columnDefs={columns}
                animateRows={true}
            />
            </div>
        </div>
    );
}


export default Todos;