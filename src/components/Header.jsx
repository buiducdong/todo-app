import React, { memo, useState } from 'react';
import styled from 'styled-components';

const Header = ({ addTodo }) => {
  const [textInput, setTextInput] = useState('');
  const onAddTodo = (e = {}) => {
    if (e.key === 'Enter' && textInput) {
      addTodo({
        id: new Date().valueOf(),
        text: textInput,
        isCompleted: false,
      });
      setTextInput('');
    }
  };
  return (
    <Container>
      <input
        onChange={(e) => setTextInput(e.target.value)}
        onKeyPress={(e) => onAddTodo(e)}
        type='text'
        placeholder='What needs to be done?'
        className='new-todo'
        value={textInput}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 0;

  h1 {
    align-items: center;
  }

  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
  }

  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
`;

export default memo(Header);
