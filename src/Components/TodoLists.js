import React from 'react';
import TodoList from './TodoList';

const TodoLists = ({todos, onDelete}) => { // 객체 구조 분해 할당
    // 이런 객체가 props에 들어옴
    // {
    //     todos : [{id:, list:""}]
    // }
    // console.log(props.todos);
    // console.log(todos);
    return (
        <div>
            {/* (1)
            <div>{todos[0].list}</div>
            <div>{todos[1].list}</div>
            <div>{todos[2].list}</div> */}
            {/* (2) 
            {todos.map(todo => <div>{todo.list}</div>)} */}
            
            {todos.map(todo => <TodoList todo={todo} key={todo.id} onDelete={onDelete}/>)}
        </div>
    );
};

export default TodoLists;