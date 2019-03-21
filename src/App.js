import React, { Component } from 'react';
import './index.css';
import ListItem from './components/ListItem';
import { connect } from 'react-redux'
import { changeInput, clearInput } from './action/inputAction'
import { addTask } from './action/todoListAction'
import PropTypes from 'prop-types'
class TodoList extends Component {
  handleChange(e) {
    this.props.changeInput(e.target.value)
  }
  addTask() {
    this.props.addTask(this.props.inputVal)
    this.props.clearInput()
  }
  render() {
    return (
        <div className="reactTodoList">
        <header className="header">React todo list</header>
        <ListItem/>
        <footer>
          <input type="text" placeholder="添加todo"
            value={this.props.inputVal}
            onChange={this.handleChange.bind(this)}></input>
          <button className="addTodo" onClick={this.addTask.bind(this)}>添加</button>
        </footer>
      </div>
    )
  }
}
TodoList.propTypes = {
  inputVal: PropTypes.string.isRequired
}
const mapToStateProps = (state) =>({
  inputVal: state.inputReducer.inputVal
})
export default connect(mapToStateProps, { changeInput, addTask, clearInput })(TodoList)