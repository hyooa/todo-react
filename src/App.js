
import './App.css';
import { useState, useRef, useReducer } from 'react';
import TodoLists from './Components/TodoLists';
import CreateTodo from './Components/CreateTodo';

const initialState = {
  todotext : "",
  todos :[
  {
    id :1,
    todotext : "리액트 공부",
    isDone : false
  },
  {
    id :2,
    todotext : "타입스크립트 공부",
    isDone : false
  },
  {
    id :3,
    todotext : "리덕스 공부",
    isDone : false
  },
  {
    id :4,
    todotext : " 공부",
    isDone : false
  }
]
}

// reducer 함수
function reducer(state, action) {
  switch(action.type) {
    case "CHANGE_INPUT" :
    return { // 상태관리해야바뀜, text 값 바꿔줘야됨
      ...state,
      todotext : action.todotext
    };

    case "CREATE_TODO" :
      console.log(action.todo);
      return {
        todotext : "", // 초기화
        todos : state.todos.concat(action.todo)
      }

    case "DELETE_TODO" :
    return { // id 일치하지 않는 것만 삭제
      ...state,
      todos : state.todos.filter(todo => todo.id !== action.id) // 해당조건
    }

    case "ISDONE_TODO" :
    return {
      ...state,
      todos : state.todos.map(todo =>
        todo.id === action.id ? {...todo, isDone : !todo.isDone} : todo) // 모든 todo(원본모두변경? 원본에서 하나만?)
    }

    default :
    return state;
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const { todos, todotext } = state;

  const onChange = (e) => { 
    const {  value } = e.target;
    dispatch ({
      type : "CHANGE_INPUT",
      todotext : value
    })
    console.log(value);
  }

  const onCreate = () => {
    dispatch ({
      type : "CREATE_TODO",
      todo : { // 추가할 객체
        id : nextId.current,
        todotext : todotext,
        isDone : false
      }
    })
    console.log(todos);
    nextId.current += 1;
  }
  const nextId = useRef(5);

  const onDelete = (id) => {
    dispatch ({
      type : "DELETE_TODO",
      id : id,
    })
  }

  const onToggle = (id) => {
    dispatch ({
      type : "ISDONE_TODO",
      id : id
    })
  }


  return (
    <div className="App">
      <CreateTodo todotext={todotext} onChange={onChange} onCreate={onCreate} />

      {/* 배열자체 ) todos 를 넘겨받음 */}
      <TodoLists  todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
