import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='product'>
        <img src = {"./img/" + this.props.item.img} alt = 'images' />
        <h2> {this.props.item.title} </h2>
        <p> {this.props.item.desc} </p>
        <b> {this.props.item.price}$ </b>
        <div className = 'add-to-bin'>+</div>
      </div>
    )
  }
}

export default Item