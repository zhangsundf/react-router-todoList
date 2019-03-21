import React, { Component } from 'react';
import './index.css';
import ListItem from './components/ListItem/index'
import Footer from './components/Footer/index'
import LinkHeader from './components/LinkHeader/index'
class TodoList extends Component {
  render() {
    return (
      <div className="reactTodoList">
        <LinkHeader></LinkHeader>
        <ListItem/>
        <Footer/>
      </div>
    )
  }
}
export default TodoList