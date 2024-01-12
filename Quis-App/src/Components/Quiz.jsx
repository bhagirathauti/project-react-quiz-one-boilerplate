import React, { Component } from 'react'
import '../components/in.css'

export default class Quiz extends Component {
  render() {
    return (
      <div>
        <div className="main">
            <div className="displayBox">
                <div className='heading'>
                    <h1>Questions</h1>
                </div>
                <div className='Numbers'>
                    <h4>1 of 15</h4>
                </div>
                <div className='Questions'>
                    <p>Which is the only mammal that can jump?</p>
                </div>
                <div className='optionBox'>
                      <div className="opt"><h2>Dog</h2></div>
                      <div className="opt"><h2>Elephant</h2></div>
                      <div className="opt"><h2>Goat</h2></div>
                      <div className="opt"><h2>Lion</h2></div>
                </div>
                <div className="Btn">
                        <button id='pre'>Previous</button>
                        <button id='next'>Next</button>
                        <button id='quit'>Quit</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
