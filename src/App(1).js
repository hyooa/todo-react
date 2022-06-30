
// import './App.css';
// import { useState, useRef } from 'react';
// import TodoLists from './Components/TodoLists';
// import CreateTodo from './Components/CreateTodo';

// const initialState = {
//   inputs : {
    
//   }
// }

// function App() {
//   const name = "abc";
//   const [ list, setList ] = useState(""); // 빈문자열

//   const onChange = (e) => { // (이름) 이름은 상관 X
//     // 함수 만들기 ) input에 값을 입력할 때마다 (value 변경될 때)
//     // list 의 값 변경 (onChange 함수 실행)
//     // state인 list 값을 input의 value 값으로 업데이트

//     // (2)
//     const { value } = e.target; // e.target = input 이라는 객체의 value
//     setList( value );
//   }

//   // CreateTodo 컴포넌트에서 + 버튼을 클릭하면
//   // todos 배열에 할일객체가 추가됨
//   const onCreate = () => {
//     const listobj = {
//       id : nextId.current, // useRef 사용
//       list : list, // key이름(string) : 변수
//       isDone : false
//     }
//     setTodos([...todos, listobj]);
//     nextId.current += 1; // 호출 될 때마다 +1
//     setList(""); // setList ) input 값 관리함, 값 지우기
//   }

//   const [ todos, setTodos ] = useState([ // 상태(todos)는 set을 사용해서 변경
//     // 초기값 배열
//     // todos 만들기
//     {
//       id : 1,
//       list : "해야할 일",
//       isDone : false
//     },
//     {
//       id : 2,
//       list : "해야할 일 2",
//       isDone : false
//     },
//     {
//       id : 3,
//       list : "해야할 일 3",
//       isDone : false
//     }
//   ]);

//   const nextId = useRef(todos.length +1);

//   // 항목 삭제
//   // 삭제 클릭시 id 값을 인수로 받아서
//   // todos 배열에서 id 값이 다른 객체만 업데이트
//   // (filter : 조건에 맞는 것만 다시 새로운 배열에 반환)
//   const onDelete = (id) => {
//     setTodos(todos.filter(todo => id !== todo.id));
//   }

//   return (
//     <div className="App">
//       <CreateTodo
//       list={list}
//       onChange={onChange}
//       onCreate={onCreate}
//       />

//       {/* 배열자체 ) todos 를 넘겨받음 */}
//       <TodoLists  todos={todos} name={name} onDelete={onDelete} />
//     </div>
//   );
// }

// export default App;
