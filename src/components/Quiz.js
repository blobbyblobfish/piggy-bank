// Quiz is a container for Questions

import React from 'react'
import Question from './Question.js'

export default function Quiz(props) {

    const questions = props.lesson.questions

    // render component for each question in the quiz
    function renderQuestions() {
        return questions.map(question => <Question key={question.id} question={question} />)
    }

    // in the future it would be nice to implement pagination for quiz questions...
    

    return (
        <div>
            <h1>Start Quiz</h1>
            {renderQuestions()}
        </div>
    )
}