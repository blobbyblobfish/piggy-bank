import React, { useState } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route, Link, match, RouteComponentProps } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './components/login';
import SignUp from './components/signup';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import CoursesContainer from './pages/CoursesContainer.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Theme variables */
import './theme/variables.css';
import { State } from 'ionicons/dist/types/stencil-public-runtime';

const App: React.FC = () => { 
  
  const [courses, setCourses] = useState([
      {
        id: 1,
        name: "Savings",
        lessons: [{
          id: 1,
          name: "Saving For Something Special",
          video_url: "https://www.youtube.com/embed/JkCmIxraWlM",
          questions: [
            {
              id: 1,
              question_text: "What does SMART stand for?",
              question_choices: {
                a: "Specific, Measurable, Attainable, Relevant, Time-based",
                b: "Snakes, Mooses, Alligators, Rabbits, Turtles",
                c: "Sugar, Meatloaf, Applesauce, Raisins, Toast"
              },
              correct_choice: "a"
            }
          ]
        }
      ]}, 
      {
        id: 2,
        name: "Taxes",
        lessons: [{
          id: 2,
          name: "Your Taxes Explained",
          video_url: "https://www.youtube.com/watch?v=RVkUUPu0VXA&ab_channel=richardcranium90210",
          questions: [
            {
              id: 2,
              question_text: "Lorem ipsum"
            }
          ]
        }]
      },
      {
        id: 3,
        name: "Investments",
        lessons: [{
          id: 3,
          name: "Learn about stock",
          video_url: "https://www.youtube.com/watch?v=RVkUUPu0VXA&ab_channel=richardcranium90210",
          questions: [
            {
              id: 3,
              question_text: "Lorem ipsum"
            }
          ]
        }]
      }
    ]
  )

  const [lessons, setLessons] = useState([
    {
      id: 1,
      course_id: 1, //this might be an easier way to find associations
      name: "Saving For Something Special",
      video_url: "https://www.youtube.com/embed/JkCmIxraWlM",
      questions: [
        {
          question_text: "What does SMART stand for?",
          question_choices: {
            a: "Specific, Measurable, Attainable, Relevant, Time-based",
            b: "Snakes, Mooses, Alligators, Rabbits, Turtles",
            c: "Sugar, Meatloaf, Applesauce, Raisins, Toast"
          },
          correct_choice: "a"
        }
      ]
    },
    {},
    {}
  ])

  function renderCourses() {
    return <CoursesContainer courses={courses} />
  }

  type Props = {id: string}

  function renderLesson( { match }: RouteComponentProps<Props>) {
    return <Lesson key={match.params.id} lesson={lessons.find(lesson => lesson.id === parseInt(match.params.id))} />
  }

  function renderQuiz({ match }: RouteComponentProps<Props>) {
    return <Quiz key={match.params.id + "quiz"} lesson={lessons.find(lesson => lesson.id === parseInt(match.params.id))} />
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/signup" component={SignUp} exact={true} />
          <Route path="/courses" render={renderCourses} exact={true} />
          <Route path="/courses/lesson/:id" render={renderLesson} exact={true} />
          <Route path="/courses/lesson/:id/quiz" render={renderQuiz} exact={true} />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App
