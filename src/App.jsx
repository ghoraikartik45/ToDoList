import { useState } from 'react'
import './App.css'
import InputContainer from './Component/InputContainer'
import TodoContainer from './Component/TodoContainer'
function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, settodos] = useState([])
  function writeToDo(e) {
    setInputVal(e.target.value);
  }
  function addToDo() {
    if (inputVal != '') {
      settodos((prevTodos) => [...prevTodos, inputVal])
      setInputVal('');
    }
  }

  function deleteTodo(todoIndex) {
    settodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex
    }))
  }

  return (
    <>
      <main>
        <h1>To Do List</h1>
        <InputContainer inputVal={inputVal} writeToDo={writeToDo} addToDo={addToDo} />
        <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
      </main>
    </>
  )
}

export default App
