// rcc
import React, { Component } from 'react'

export default class MyCar extends Component {

   constructor(){
    super()
    this.state =  {
      carName: "Demo Car"
    }
   }

  render() {
    return (
      <div className='bg-warning p-5 rounded text-light' >
        <input onChange={e=>this.setState({...this.state,carName:e.target.value})} placeholder='input any car' type="text" className='form-control w-50' />
        <h3>user input car is : <span className='text-danger'> {this.state.carName}</span></h3>
      </div>
    )
  }
}
