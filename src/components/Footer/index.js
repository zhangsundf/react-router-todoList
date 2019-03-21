import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux'
import { changeInput, clearInput } from '../../action/inputAction'
import { addTask } from '../../action/todoListAction'
import PropTypes from 'prop-types'

class Footer extends Component {
  handleChange(e) {
    this.props.changeInput(e.target.value)
  }
  addTask() {
    this.props.addTask(this.props.inputVal)
    this.props.clearInput()
  }
  render() {
    return (
      <footer>
        <input type="text" placeholder="添加todo"
          value={this.props.inputVal}
          onChange={this.handleChange.bind(this)}></input>
        <button className="addTodo" onClick={this.addTask.bind(this)}>添加</button>
      </footer>
    )
  }
}
Footer.propTypes = {
  inputVal: PropTypes.string.isRequired
}
const mapToStateProps = (state) =>({
  inputVal: state.inputReducer.inputVal
})
export default connect(mapToStateProps, { changeInput, addTask, clearInput })(Footer)