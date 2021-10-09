import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';


function Todos() {
    // const [todo, setTodo] = React.useState({ desc: '', date: '', priority: '' });
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({ desc: '', date: '', priority: '' });
    }

    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0)
            setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
        else
            alert('Select Row First');
    }

    const columns = [
        { field: 'desc', sortable: true, filter: true, floatingFilter: true },
        { field: 'date', sortable: true, filter: true, floatingFilter: true },
        {
            field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ]


    return (
        <div style={{marginTop:20, marginBottom:20}}>
            <h2>Todo list</h2>
            <Stack direction="row" spacing={2} justifyContent="center">

                <TextField size="small" label="Description" name="desc" value={todo.desc} onChange={inputChanged} />
                <TextField size="small" label="Date" name="date" value={todo.date} onChange={inputChanged} />
                <TextField size="small" label="Priority" name="priority" value={todo.priority} onChange={inputChanged} />


                <Button 
                variant="outlined" 
                onClick={addTodo}
                startIcon={<AddIcon />} >
                    Add
                </Button>

                <Tooltip title="Select a row and the press Delete">
                     <Button 
                variant="outlined" 
                color="error" 
                startIcon={<DeleteIcon />} 
                onClick={deleteTodo}>
                    Delete
                </Button>
                </Tooltip>
               

            </Stack>

            <div className="ag-theme-material" style={{ height: 400, width: 600, margin: 'auto' }}>
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