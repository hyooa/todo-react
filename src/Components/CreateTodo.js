import React from 'react';

const CreateTodo = ({ onChange, todotext, onCreate }) => {
    return (
        <div>
            <h2>To Do List</h2>
            <div>
                <input
                type="text"
                name="newlist"
                value={todotext}

                // (2) value 바로 넘기기
                onChange={onChange}

                // (1) 이벤트 받기
                // onChange={(e) => { onChange(e.target.value) }}
                ></input>

                <button onClick={onCreate}>+</button>
            </div>
        </div>
    );
};

export default CreateTodo;