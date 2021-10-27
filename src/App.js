import React, { useState } from 'react';
import Element from './element';
import './style.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEditting, setEditting] = useState(false);

  const add = (event) => {
    if (event.key === 'Enter') {
      if (todo !== '') {
        if (!isEditting) {
          if (todoList.includes(todo)) {
            alert('Element is already exist');
          } else {
            setTodoList([...todoList, todo]);
          }
        } else {
          setEditting(false);
          todoList[selectedIndex] = todo;
        }
        setTodo('');
      } else {
        alert('Please input element');
      }
    }
  };

  const remove = (elementToRemove) => {
    setTodoList(todoList.filter((element) => element !== elementToRemove.text));
  };

  const edit = (elementToEdit) => {
    setEditting(true);
    setSelectedIndex(
      todoList.findIndex((element) => element === elementToEdit.text)
    );
    setTodo(elementToEdit.text);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        className='padding'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Please input element'
        onKeyDown={add}
      />

      {todoList.map((element, index) => (
        <Element
          element={{ text: element, index: index }}
          onRemove={remove}
          onEdit={edit}
        />
      ))}
    </div>
  );
}

export default App;
