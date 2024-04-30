import React, { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text, IconButton, useToast, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (input.trim() === "") {
      toast({
        title: "No content",
        description: "You can't add an empty todo!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <HStack>
          <Input placeholder="Add your new todo" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
        </HStack>
        <VStack spacing={2}>
          {todos.map((todo, index) => (
            <HStack key={index}>
              <Text>{todo}</Text>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
