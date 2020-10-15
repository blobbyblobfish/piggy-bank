import React from 'react';

export default function Lesson(props) {

    const lesson = props.lesson

    console.log("HI THIS IS A TEST")
    console.log(lesson)

    return (
        <div>
            <h1>{lesson.name}</h1>
            <iframe width="560" height="315" src={lesson.video_url} title={lesson.title}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            {/* If done watching is clicked, navigate to quiz */}
            <button>Done Watching</button> 
        </div>
    )
}
