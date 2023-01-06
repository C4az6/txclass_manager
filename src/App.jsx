import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import IndexPage from './pages/Index'
import Login from './pages/Login'

import CoursePage from './pages/sub/Course'
import RecomCoursePage from './pages/sub/RecomCourse'
import SlidePage from './pages/sub/Slide'
import CollectionPage from './pages/sub/Collection'
import TeacherPage from './pages/sub/Teacher'
import StudentPage from './pages/sub/Student'
import CrawlerPage from './pages/sub/Crawler'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" render={
            (props) => (
              <IndexPage history={props.history}>
                <Switch>
                  <Route path="/course" component={CoursePage}></Route>
                  <Route path="/recom_course" component={RecomCoursePage}></Route>
                  <Route path="/slide" component={SlidePage}></Route>
                  <Route path="/collection" component={CollectionPage}></Route>
                  <Route path="/teacher" component={TeacherPage}></Route>
                  <Route path="/student" component={StudentPage}></Route>
                  <Route path="/crawler" component={CrawlerPage}></Route>
                </Switch>
              </IndexPage>
            )
          }></Route>
        </Switch>
      </Router>
    )
  }
}