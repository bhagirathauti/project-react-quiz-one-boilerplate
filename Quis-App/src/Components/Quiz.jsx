

import React, { Component } from 'react';
import '../Components/in.css';
import quizQuestions from '/resources/quizQuestion.json';

class QuizComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quesIndex: 0,
    };
  }

  handlePrevious = () => {
    const { quesIndex } = this.state;
    if (quesIndex > 0) {
      this.setState({ quesIndex: quesIndex - 1 });
    }
  };

  handleNext = () => {
    const { quesIndex } = this.state;
    if (quesIndex < quizQuestions.length - 1) {
      this.setState({ quesIndex: quesIndex + 1 });
    }
  }; 

  handleQuit = () => {
    window.confirm('Are you sure you want to Quit?');
  };

  render() {
    const { quesIndex } = this.state;

    return (
      <div>
        <div className="main">
          <div className="displayBox">
            <div className="heading">
              <h1>Questions</h1>
            </div>
            <div className="Numbers">
              <h4>{`${quesIndex + 1} of 15`}</h4>
            </div>
            <div className="Questions">
              <p>{quizQuestions[quesIndex].question}</p>
            </div>
            <div className="optionBox">
              <div className="opt">
                <h2>{quizQuestions[quesIndex].optionA}</h2>
              </div>
              <div className="opt">
                <h2>{quizQuestions[quesIndex].optionB}</h2>
              </div>
              <div className="opt">
                <h2>{quizQuestions[quesIndex].optionC}</h2>
              </div>
              <div className="opt">
                <h2>{quizQuestions[quesIndex].optionD}</h2>
              </div>
            </div>
            <div className="Btn">
              <button id="pre" onClick={this.handlePrevious} disabled={quesIndex === 0}>
                Previous
              </button>
              <button id="next" onClick={this.handleNext} disabled={quesIndex === quizQuestions.length - 1}>
                Next
              </button>
              <button id="quit" onClick={this.handleQuit}>
                Quit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;