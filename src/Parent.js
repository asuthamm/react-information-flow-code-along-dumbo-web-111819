import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  state = {
    color: getRandomColor(),
    childrenColor: '#FFF'
  }

  tickle = (e) => {
    // console.log(e.target)
    // console.log('Tee hee!')
    console.log(this.props)
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <button onClick={this.tickle}>Tickle me!</button>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
