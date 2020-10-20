import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function Question(props) {
    
    // render choices
    const question = props.question
    const choices = Object.entries(question.question_choices)
    const [selected, setSelected] = useState(choices[0][0])

    function handleChange(e) {
        setSelected(e.target.name)
    }

    function renderInputs() {
        return choices.map(arr => {
            return (
            <div>
                <label>
                    <input type="radio" name={arr[0]} value={arr[1]}
                        checked={selected === arr[0]} onChange={handleChange}/>
                        {arr[1]}
                </label>
            </div>
            )
        })
    }

    // check if choice matches correct_choice
    function handleSubmit(e) {
        e.preventDefault()

        if (selected === question.correct_choice) {
            // ** TO DO ** update piggy bank
            props.history.push("/courses") // redirect to courses
        } else {
            window.alert("Try again!") // show an error
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {question.question_text}
            </label>
            {renderInputs()}
            <input type="submit" />
        </form>
    )
}

export default withRouter(Question)