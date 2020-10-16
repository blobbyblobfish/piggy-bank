import React from 'react';
import { withRouter } from 'react-router-dom'
import './Lesson.css';

function Lesson(props) {

    const lesson = props.lesson

    function doneWatching() {
        props.history.push(`/lesson/${lesson.id}/quiz`) //push to quiz page
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

// export default class Lesson extends React.component {

//     render() {
//         const lesson = this.props.lesson

//         console.log(this.props.history)
        
//         function doneWatching() {
//             this.props.history.push(`/lesson/${lesson.id}/quiz`)
//         }

//     return (
//         <div className="lesson-container">
//             <h1>{lesson.name}</h1>
//             <iframe width="560" height="315" src={lesson.video_url} title={lesson.title}
//                 frameborder="0" className="lesson-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
//                 gyroscope; picture-in-picture"
//                 allowfullscreen>
//             </iframe>
//             {/* If done watching is clicked, navigate to quiz */}
//             <button className="done-btn" onClick={doneWatching}>Done Watching</button> 
           
//         </div>
//     )
//     }
// }