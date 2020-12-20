import { useState } from 'react'
import Questions from './data';
import './App.css';

function App() {

  function buttonClick(evt) {
    if (evt.target.attributes.iscorrect.value === 'true') {
      evt.target.classList.add('true');
    } else {
      evt.target.classList.add('false')
    }

    for (let i = 0; i <= 2; i++) {
      evt.target.parentNode.children[i].disabled = true
    }
  }

  return (
    <div className="App">
      <>
        <h1 className="app-name">iTest</h1>
        <ul className="question-list">

          {
            Questions.map((question, index) =>{
              return (
                <li className="question-item">
                  <h3 className="question-text">{question.id}. {question.question}</h3>
                  <div className="buttons-list" key={index}>
                    {
                      question.answers.map((answer, id) => (
                        <button className="answer-btn" iscorrect={String(answer.isTrue)} disabled={false} onClick={buttonClick} key={id} type="button">{answer.option}) {answer.answerText}</button> 
                      ))                          
                    }
                  </div>
                </li>
              )
            })
          }

        </ul>      
      </>
    </div>
  )
}

export default App;
