import React, { memo } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = (props) => {
  const { listTodos, isCheckedAll, checkedAll } = props;
  return (
    <Container>
      <input className='toggle-all' type='checkbox' checked={isCheckedAll} />
      <label htmlFor='toggle-all' onClick={checkedAll}></label>
      <ul className='todo-list'>
        {listTodos.map((todo, index) => (
          <Todo key={index} todo={todo} i={index} {...props} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;

  .toggle-all,
  .todo-list li .toggle {
    background: none;
  }

  .toggle-all {
    text-align: center;
    border: none;
    display: none;
    position: absolute;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -65px;
    left: -5px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .todo-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    /* li {
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

      .toggle:checked + label {
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
        color: #d9d9d9;
        text-decoration: line-through;
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
    } */
  }
`;

export default memo(TodoList);
