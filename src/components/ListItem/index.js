import React, { Component } from 'react'
import './index.css'
import { fetchTask, completeTask, deleteTask } from '../../action/todoListAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class ListItem extends Component {

  componentDidMount() {
    this.props.fetchTask()
  }
  completeTask(name) {
    this.props.completeTask(name)
  }
  deleteTask(name) {
    this.props.deleteTask(name)
  }
  render() {
    return (
      <ul className="itemList">
        {
          this.props.list.map(element => {
            return (
              <li className="listItem" key={element.name}>
                <input type="checkbox"
                  checked={element.status}
                  onChange={this.completeTask.bind(this, element.name)}/>
                <span style={{textDecorationLine: !element.status ? 'none' : 'line-through'}}>{element.name}</span>
                <button className="delete" onClick={this.deleteTask.bind(this, element.name)}>删除</button>
              </li>)
        })
      }
      </ul>
    )
  }
}
ListItem.propTypes = {
  list: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  list: state.todoListReducer.list
})

export default connect(mapStateToProps, {fetchTask, completeTask, deleteTask})(ListItem)