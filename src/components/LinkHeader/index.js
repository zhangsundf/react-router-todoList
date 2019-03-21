import React, { Component } from 'react'
import './index.css'
import { changeFilter } from '../../action/headerAction'

class LinkHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1
    }
  }

  changeFilter(id) {
    this.setState({
      currentIndex: id
    })
    this.props.changeFilter(id)
  }
  render() {
    return (
      <ul className="LinkHeader">
        <li className="allTask"
          onClick={this.changeFilter.bind(this, 1)}
          style={{color: this.state.currentIndex === 1 ? '#e49866' : '#7ba866'}}>全部</li>
        <li className="completedTask"
          onClick={this.changeFilter.bind(this, 2)}
          style={{color: this.state.currentIndex === 2 ? '#e49866' : '#7ba866'}}>已完成</li>
        <li className="unompletedTask"
          onClick={this.changeFilter.bind(this, 3)}
          style={{color: this.state.currentIndex === 3 ? '#e49866' : '#7ba866'}}>未完成</li>
        <li className="deletedTask"
          onClick={this.changeFilter.bind(this, 4)}
          style={{color: this.state.currentIndex === 4 ? '#e49866' : '#7ba866'}}>已删除</li>
      </ul>
    )
  }
}

export default LinkHeader