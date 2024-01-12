import React, { Component } from 'react'
import '../Components/in.css'

export default class Result extends Component {
  render() {
    return (
      <div className='main1'> 
        <h1>Result</h1>
        <div className="displayBox1">
            <div className="heading">
                <h3>You need more practice!!</h3>
            </div>
            <div className="Score">
                <h1>Your Score is 20%</h1>
            </div>

            <div className="opt1">
                <div className="result">
                    <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
            </div>

        </div>
            <div className='Btn'>
                <button className="PlayAgain">Play Again</button>
                <button className="BackHome">Back Home</button>
            </div>
      </div>
    )
  }
}


