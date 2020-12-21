import { useState } from 'react';
import Questions from './data';
import './App.css'


function App() {
  const resultArray = []
  const [result, setResult] = useState(0)

  function buttonClick(evt) {
    if (evt.target.attributes.iscorrect.value === 'true') {
      evt.target.classList.add('true');
      resultArray.push(evt.target.value)
    } else {
      evt.target.classList.add('false')
    }

    for (let i = 0; i <= 2; i++) {
      evt.target.parentNode.children[i].disabled = true
    }
  }

  function resultFun() {
    setResult((100 * resultArray.length) / Questions.length)
  }

  return (
    <div className="App">
      <div className="container">
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
                        <button className="answer-btn" iscorrect={String(answer.isTrue)} disabled={false} onClick={buttonClick} key={id} type="button">{answer.key}) {answer.answerText}</button> 
                      ))                          
                    }
                  </div>
                </li>
              )
            })
          }

        </ul>
        <div className="result-wrapper">
          <button className="submit-btn" type="button" onClick={resultFun}>Submit</button>
          <p className="result-text">{result}%</p>  
        </div>
      </div>
    </div>
  )
}

export default App;
