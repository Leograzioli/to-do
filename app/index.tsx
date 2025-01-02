import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Index() {

  const [isFocused, setIsFocused] = useState(false);
  const [todoInput, setTodoInput] = useState('')

  const [todoArray, setTodoArray] = useState([
    {
      id: 1,
      title: 'correre '
    },
    {
      id: 2,
      title: 'dormire'
    },
    {
      id: 3,
      title: 'studiare'
    },
  ])

  const deleteTodo = (id: number) => {
    
    //filter the todo array and return the array without the current id on click.    
    setTodoArray(
      todoArray.filter( todo => todo.id !== id)
    )
  }

  const addTodo = ()=> {
    if (todoInput.trim() === '') return;

    //create a new todoInput object. 
    const newTodo = {
      id: Date.now(),
      title: todoInput
    }

    //add new todo on the array
    setTodoArray([...todoArray, newTodo])

    //clear the input
    setTodoInput('')    
  }


  return (
    <View style={styles.container}>
      {
        todoArray.map((todo) => (
          <View key={todo.id} style={styles.todo}>
            <Text style={styles.title}>{todo.title}</Text>
            <Text
              style={styles.close}
              onPress={ () => deleteTodo(todo.id)}
            >
              X
            </Text>
          </View>

        ))
      }


      <TextInput
        style={[styles.textInput, isFocused && styles.focusedInput]}
        onFocus={() => setIsFocused(true)}
        placeholder="type a new todo"
        onChangeText={ todo => setTodoInput(todo)}
        defaultValue={todoInput}
      />

      <Text style={styles.button} onPress={() => addTodo()} > Add new todo</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'semibold',
  },

  button: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'green',
    color: "white",
  },

  close: {
    position: 'absolute',
    right: 10,
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textInput: {
    marginTop: 30,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 10,
  },

  focusedInput: {
    borderWidth: 2
  },

  todo: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c1c1',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    padding: 10,
    marginTop: 15
  }
})

