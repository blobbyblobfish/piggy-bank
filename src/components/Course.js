import React from 'react'
import { NavLink } from 'react-router-dom'
import './Course.css';
import Lesson from './Lesson.js'

export default function Course(props) {

    const course = props.course

    function renderLessons() {
        return course.lessons.map(lesson => <NavLink to={"/lessons/" + `${lesson.id}`} > { lesson.name } </NavLink>)
    }

    return (
        <div className="course">
            <h1>{course.name}</h1>
            {renderLessons()}
        </div>
    )
}