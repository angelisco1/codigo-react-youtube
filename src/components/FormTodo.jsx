import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Flex, Text, Input, Box, FormControl, FormLabel, Checkbox, Button } from '@chakra-ui/core';

class FormTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      done: false
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDone = this.handleChangeDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeDone(e) {
    this.setState({
      done: !this.state.done
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, done } = this.state;
    this.props.onSaveTodo({name: name, done: done, id: uuidv4()});
    this.setState({
      name: '',
      done: false
    })
  }

  render() {
    const { name, done } = this.state;
    return (
      <Flex justify="center">
        <Box
          as="form"
          p={4}
          borderWidth="1px"
          w="70%"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          onSubmit={this.handleSubmit}
        >
          <Text fontSize="3xl">Añade una tarea</Text>
          <FormControl my={4}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input type="text" name="name" variant="flushed" placeholder="Tarea 1" onChange={this.handleChangeName} value={name} />
          </FormControl>
          <Flex justify="space-between" align="center">
            <FormControl my={4}>
              <FormLabel verticalAlign htmlFor="email">
                Completada?
              </FormLabel>
              <Checkbox verticalAlign variantColor="green" name="done" isChecked={done} onChange={this.handleChangeDone} />
            </FormControl>
            <Button type="submit" variantColor="green">Guardar</Button>
          </Flex>
        </Box>
      </Flex>
    )
  }

}

export default FormTodo
