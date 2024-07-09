import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Result from "./components/Result";
import { data } from "./data";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswerClick = (selectOption: string) => {
    const rightAnswer = data[currentQuestion].answer
    if (selectOption === rightAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setQuizComplete(true)
    }
  }

  return <div className="App">
    {!quizComplete ? (
      <Questions 
        question={data[currentQuestion].question}
        options={data[currentQuestion].options}
        handleAnswerClick={handleAnswerClick}
      />
    ) : (
      <Result 
        score={score}
        totalQuestions={data.length}
      />
    )}
  </div>;
}

export default App;
