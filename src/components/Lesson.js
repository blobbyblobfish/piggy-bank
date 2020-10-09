import React from 'react';

export default function Lesson(props) {

    //Uses the props.id to find the selected lesson from the global state object
    //If done watching is clicked, navigate to quiz

    return (
        <div>
            <h1>{props.title}</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JkCmIxraWlM"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <button>Done Watching</button>
        </div>
    )
}
