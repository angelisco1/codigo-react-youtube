import React, { useState } from 'react';
import FormTodo from './components/FormTodo.jsx';
import TodoList from './components/TodoList.jsx';
import { Box, Divider } from '@chakra-ui/core';
import NewFormTodo from './components/NewFormTodo.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);
  const handleComplete = (id) => {
    const todosUpdated = todos.map(t => {
      if (t.id === id) {
        return {...t, done: !t.done};
      }
      return t;
    })
    setTodos(todosUpdated)
  }
  return (
    <Box my={20}>
      <NewFormTodo onSaveTodo={(newTodo) => setTodos([...todos, newTodo])} />
      <FormTodo onSaveTodo={(newTodo) => setTodos([...todos, newTodo])} />
      <Divider my={5} />
      <TodoList todos={todos} onComplete={handleComplete} />
    </Box>
  );
}

export default App;
