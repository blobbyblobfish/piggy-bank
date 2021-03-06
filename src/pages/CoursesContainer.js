import React from 'react';
import Course from '../components/Course.js'

export default function Courses(props) {

    //extracts courses in the App state object
    const courses = props.courses

    function renderCourses() {
        return courses.map(course => <Course key={course.id} course={course}/>)
    }

    return (
        <div className="coursesContainer">
            {/* <h1>Hi Test {} </h1> */}
            <h1>Your Piggy Bank: $50 </h1>
            {renderCourses()}
        </div>
    )
}