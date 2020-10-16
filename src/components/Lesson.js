import React from 'react';
import './Lesson.css';

export default function Lesson(props) {

    const lesson = props.lesson

    console.log("HI THIS IS A TEST")
    console.log(lesson)

    return (
        <div className="lesson-container">
            <h1>{lesson.name}</h1>
            <iframe width="560" height="315" src={lesson.video_url} title={lesson.title}
                frameborder="0" className="lesson-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <button className="done-btn">Done Watching</button> 
            {/* If done watching is clicked, navigate to quiz */}
           
        </div>
    )
}
