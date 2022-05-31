import React, { memo, useState } from 'react';
import styled from 'styled-components';

const Todo = ({
  todo,
  onEditTodo,
  i,
  todoEditingId,
  getTodoEditingId,
  todoCompleted,
  removeTodo,
}) => {
  const [text, setText] = useState(todo.text);

  const isEditing = todoEditingId === todo.id;
  const editTodo = () => {
    onEditTodo({ ...todo, text }, i);
  };
  console.log(todo.isCompleted);
  return (
    <Item
      className={`${isEditing ? 'editing' : ''} ${todo.isCompleted ? 'completed' : ''}`}
    >
      {!isEditing ? (
        <>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            className='toggle'
            id={`toggle-${todo.id}`}
            onChange={() => todoCompleted(todo.id)}
          />

          <label className='lb' htmlFor={`toggle-${todo.id}`}>
            <i className='fas fa-check'></i>
            {todo.text}
          </label>
          <button className='destroy' onClick={() => removeTodo(todo.id)}></button>
          <button onClick={() => getTodoEditingId(todo.id)} className='editBtn'>
            Edit
          </button>
        </>
      ) : (
        <input
          type='text'
          className='edit'
          onBlur={editTodo}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              editTodo();
            }
          }}
        />
      )}
    </Item>
  );
};

export default memo(Todo);

const Item = styled.li`
  &.completed {
    .lb {
      text-decoration: line-through;
      color: #b4b3b3;
    }
  }
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  .toggle {
    height: 40px;
    background: none;
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
  }

  .lb {
    i {
      position: absolute;
      display: none;
      opacity: 0;
      left: 12px;
      color: #4336f8;
    }
  }

  input[type='checkbox'] {
    background-color: initial;
    cursor: default;
    -webkit-appearance: checkbox;
    box-sizing: border-box;
    margin-top: 22px;
    margin-left: 2px;
    opacity: 0;
    padding: initial;
    border: initial;
  }

  label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  .toggle:checked + .lb {
    i {
      position: absolute;
      display: block;
      opacity: 1;
    }
  }

  .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    border: none;
    cursor: pointer;
  }

  .editBtn {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 60px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 16px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    border: none;
  }

  .destroy:after {
    content: '×';
  }

  .editing:last-child {
    margin-bottom: -1px;
  }
  .editing {
    border-bottom: none;
  }
  .edit {
    font-size: 24px;
    display: block;
    width: 80%;
    padding: 12px 16px;
    margin: 0 0 0 10%;
  }
`;
