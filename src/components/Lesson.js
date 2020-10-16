import React from 'react';
import { withRouter } from 'react-router-dom'
import './Lesson.css';

function Lesson(props) {

    const lesson = props.lesson

    function doneWatching() {
        props.history.push(`/courses/lesson/${lesson.id}/quiz`) // push to quiz page
    }

    return (
        <div className="lesson-container">
            <h1>{lesson.name}</h1>
            <iframe width="560" height="315" src={lesson.video_url} title={lesson.title}
                frameborder="0" className="lesson-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <button className="done-btn" onClick={doneWatching}>Done Watching</button> 
           
        </div>
    )
}

export default withRouter(Lesson)