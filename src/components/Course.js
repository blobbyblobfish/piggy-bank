import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Course(props) {

    const course = props.course

    function renderLessons() {
        return course.lessons.map(lesson => <NavLink key={lesson.id} to={`/lessons/${lesson.id}`} > { lesson.name } </NavLink>)
    }

    return (
        <div className="course" key={course.id}>
            <h2 key={`${course.name} + ${course.id}`}>{course.name}</h2>
            {renderLessons()}
        </div>
    )
}