import React from 'react';
import { PureComponent } from 'react/cjs/react.development';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

const isNotCheckedAll = (todos = []) => todos.find((todo) => !todo.isCompleted);
const filterTodos = (todos = [], status = '', id = '') => {
  switch (status) {
    case 'ACTIVE':
      return todos.filter((todo) => !todo.isCompleted);
    case 'COMPLETED':
      return todos.filter((todo) => todo.isCompleted);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== id);
    default:
      return todos;
  }
};
class App extends PureComponent {
  state = {
    listTodos: JSON.parse(localStorage.getItem('TODOS')) || [], //JSON.parse(localStorage.getItem('TODOS'))
    todoEditingId: '',
    isCheckedAll: false,
    status: 'ALL',
  };

  checkedAll = () => {
    const { isCheckedAll, listTodos } = this.state;
    console.log(this.state);
    const updatTodos = listTodos.map((todo) => ({ ...todo, isCompleted: !isCheckedAll }));
    this.setState((pre) => ({
      listTodos: updatTodos,
      isCheckedAll: !pre.isCheckedAll,
    }));
  };

  addTodo = (todo = {}) => {
    this.setState((preState) => ({
      listTodos: [...preState.listTodos, todo],
    }));
    localStorage.setItem('TODOS', JSON.stringify([...this.state.listTodos, todo]));
  };

  getTodoEditingId = (id = '') => {
    this.setState({ todoEditingId: id });
  };

  onEditTodo = (todo = {}, i = -1) => {
    if (i >= 0) {
      const { listTodos: list } = this.state;
      list.splice(i, 1, todo);
      localStorage.setItem('TODOS', JSON.stringify(list));
      this.setState({ todosList: list, todoEditingId: '' });
    }
  };

  todoCompleted = (id = '') => {
    const { listTodos } = this.state;
    const updateList = listTodos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    this.setState({ listTodos: updateList, isCheckedAll: !isNotCheckedAll(updateList) });
    localStorage.setItem('TODOS', JSON.stringify([...updateList]));
  };

  setStatusFilter = (status = '') => {
    this.setState({ status });
  };

  clearCompleted = () => {
    const { listTodos } = this.state;
    const newTodos = filterTodos(listTodos, 'ACTIVE');
    this.setState({ listTodos: filterTodos(listTodos, 'ACTIVE') });
    localStorage.setItem('TODOS', JSON.stringify([...newTodos]));
  };

  removeTodo = (id = '') => {
    const { listTodos } = this.state;
    const newTodos = filterTodos(listTodos, 'REMOVE', id);
    this.setState({ listTodos: filterTodos(listTodos, 'REMOVE', id) });
    localStorage.setItem('TODOS', JSON.stringify([...newTodos]));
  };

  render() {
    const { listTodos, todoEditingId, isCheckedAll, status } = this.state;
    console.log('app render', this.state);
    return (
      <Provider store={store}>
        <Main>
          <h1 style={{ fontSize: '80px', textAlign: 'center' }}>Todos</h1>
          <Container>
            <Header addTodo={this.addTodo} />
            <TodoList
              isCheckedAll={isCheckedAll}
              getTodoEditingId={this.getTodoEditingId}
              todoEditingId={todoEditingId}
              listTodos={filterTodos(listTodos, status)}
              onEditTodo={this.onEditTodo}
              todoCompleted={this.todoCompleted}
              checkedAll={this.checkedAll}
              removeTodo={this.removeTodo}
            />
            <Footer
              setStatusFilter={this.setStatusFilter}
              status={status}
              clearCompleted={this.clearCompleted}
              numOfTodosLeft={filterTodos(listTodos, 'ACTIVE').length}
              numOfTodos={listTodos.length}
            />
          </Container>
        </Main>
      </Provider>
    );
  }
}

const Main = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 4px 2px 4px 0 rgba(0, 0, 0, 0.2), 4px 25px 50px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  width: 600px;
`;

export default App;
