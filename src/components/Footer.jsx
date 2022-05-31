import React, { memo } from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  const { setStatusFilter, status, numOfTodos, numOfTodosLeft, clearCompleted } = props;
  const FiltersBtn = [
    {
      title: 'All',
      link: '#/',
      isActived: status === 'ALL',
      onclick: () => setStatusFilter('ALL'),
    },
    {
      title: 'Active',
      link: '#/active',
      isActived: status === 'ACTIVE',
      onclick: () => setStatusFilter('ACTIVE'),
    },
    {
      title: 'Completed',
      link: '#/completed',
      isActived: status === 'COMPLETED',
      onclick: () => setStatusFilter('COMPLETED'),
    },
  ];
  return (
    <Footerr>
      <span className='todo-count'>
        <strong>{numOfTodosLeft} </strong>
        <span>{numOfTodosLeft <= 1 ? 'item' : 'items'} </span>
        <span>left </span>
      </span>
      <ul className='filters'>
        {FiltersBtn.map((ft, i) => (
          <FilterBtn key={i} ft={ft} isActived={status} />
        ))}
      </ul>
      {numOfTodos > numOfTodosLeft && (
        <button className='clear-completed' onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </Footerr>
  );
};

export default memo(Footer);

const FilterBtn = ({ ft }) => {
  return (
    <>
      <li>
        <a href={ft.link} className={ft.isActived ? 'selected' : ''} onClick={ft.onclick}>
          {ft.title}
        </a>
      </li>
    </>
  );
};

const Footerr = styled.footer`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  .todo-count {
    float: left;
    text-align: left;
  }

  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
  }

  li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
    background-color: #f78585;
  }
  .filters li a {
    cursor: pointer;
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid rgba(63, 61, 61, 0.2);
    border-radius: 3px;
  }

  .filters li {
    display: inline;
  }

  li.editing:last-child {
    margin-bottom: -1px;
  }
  li.editing {
    border-bottom: none;
    padding: 0;
  }
  li.editing .edit {
    display: block;
    width: 90%;
    padding: 12px 16px;
    margin: 0 0 0 10%;
  }

  li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .clear-completed,
  .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    padding: 4px 8px;
    border-radius: 4px;
    color: inherit;
    border: 1px solid rgba(63, 61, 61, 0.2);
  }
`;
