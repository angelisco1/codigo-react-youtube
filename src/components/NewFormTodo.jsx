import React, { useState } from 'react';
import { Box, Text, Flex, FormControl, FormLable, Input, FormLabel,  Checkbox, Button } from '@chakra-ui/core';
import { v4 as uuidV4 } from 'uuid';


const NewFormTodo = (props) => {

  const [name, setName] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { name: name, done: done, id: uuidV4()}
    props.onSaveTodo(newTodo);
  }

  return (
    <Flex justify="center">
      <Box
        borderWidth="1px"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        p={4}
        w="70%"
        rounded="lg"
        as="form"
        onSubmit={handleSubmit}
        >
        <Text fontSize="3xl">Añade una tarea</Text>
        <FormControl my={4}>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input type="text" id="name" name="name" placeholder="Tarea 1" variant="flushed" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <Flex align="center" justify="space-between">
          <FormControl>
            <FormLabel htmlFor="done" verticalAlign>Completada?</FormLabel>
            <Checkbox id="done" name="done" verticalAlign variantColor="green" isChecked={done} onChange={() => setDone(!done)} />
          </FormControl>
          <Button type="submit" variantColor="green">Guardar</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default NewFormTodo;