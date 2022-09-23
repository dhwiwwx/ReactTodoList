import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
flex: 1;
padding: 20px 32px;
padding-bottom: 48px;
overflow-x: auto;
background:gray;
`;

function TodoList(){
    return <TodoListBlock>Todolist</TodoListBlock>
}

export default TodoList;

