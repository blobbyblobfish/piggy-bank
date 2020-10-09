import React from 'react';
import './LessonsContainer.css';

const lessons = [
  {
    id: 1,
    title: "Saving For Something Special",
    video_url: "https://www.youtube.com/embed/JkCmIxraWlM",
    question: {
      question_text: "What does SMART stand for?",
      question_choices: {
        a: "Specific, Measurable, Attainable, Relevant, Time-based",
        b: "Snakes, Mooses, Alligators, Rabbits, Turtles",
        c: "Sugar, Meatloaf, Applesauce, Raisins, Toast"
      },
      correct_choice: "a"
    }
  }
]

const LessonsContainer = () => {

  function renderLessonsList() {
    return lessons.map(lesson => {
      return <button key={lesson.id}>{lesson.title}</button>
    })
  }

  return (
    <div className="container">
      <strong>Lessons</strong>
      {/* Render a button for each lesson that navigates to the lesson page*/}
      {renderLessonsList()}
    </div>
  );
};

export default LessonsContainer;


