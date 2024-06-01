import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); // Corrected state variable name

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo(''); // Clear the input field
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
const handleKeyPress=(e)=>{
    if (e.key==="Enter")
    addTodo()
}
  return (
    <>
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        label="Enter a task"
        variant="outlined"
        fullWidth
        margin="normal"
        onKeyDown={handleKeyPress}
      />
      <div className='flex justify-center mt-4'></div>
      <Button variant="contained" color="secondary" onClick={addTodo}>Add Todo</Button> {/* Corrected color prop */}
      <div className='w-10/12 mt-4'></div>
      <List className='shadow-lg rounded-md'>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Todo;
