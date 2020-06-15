import React from 'react';
import Todo from './Todo.jsx';
import { List, Flex, Box, Text } from '@chakra-ui/core';

const TodoList = ({todos, onComplete}) => {
  const isThereTodos = todos.length > 0;
  let todoList;
  if (isThereTodos) {
    todoList = todos.map(t => <Todo key={t.id} todo={t} onComplete={onComplete} />);
  }
  return (
    <Flex justify="center">
      <Box
        p={4}
        borderWidth="1px"
        w="70%"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
      >
        <List spacing={3}>
          {isThereTodos ? todoList : <Text textAlign="center">No hay ninguna tarea 😀</Text>}
        </List>
      </Box>
    </Flex>
  )
}

export default TodoList;