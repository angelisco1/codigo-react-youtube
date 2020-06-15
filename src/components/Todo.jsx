import React from 'react'
import { ListItem, Box, IconButton } from '@chakra-ui/core'

const Todo = ({todo, onComplete}) => {
  const Styles = todo.done
  ?
    {color: 'green.400', variant: 'solid', textDecoration: 'line-through'}
  :
    {color: 'teal.600', variant: 'outline', textDecoration: ''}
  return (
    <ListItem my={2}>
      <IconButton
        icon="check-circle"
        isRound={true}
        mr="5"
        color={Styles.color}
        variant={Styles.variant}
        variantColor="green.400"
        onClick={() => onComplete(todo.id)}
      />
      <Box as="span" textDecoration={Styles.textDecoration}>
        {todo.name}
      </Box>
    </ListItem>
  )
}

export default Todo;