import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import IndexPage from './pages/Index'
import Login from './pages/Login'

import CoursePage from './pages/sub/Course'
import RecomCoursePage from './pages/sub/RecomCourse'
import SlidePage from './pages/sub/Slide'
import CollectionPage from './pages/sub/Collection'
import TeacherPage from './pages/sub/Teacher'
import CrawlerPage from './pages/sub/Crawler'
import ErrorPage from './pages/sub/Error'


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
                  <Route path="/crawler" component={CrawlerPage}></Route>
                  {/* React匹配路由是从上到下的，如果所有的路由都没有匹配到，那么会匹配最后一个没有path的路由，可以把这个路由用来做404*/}
                  <Route component={ErrorPage}></Route>
                </Switch>
              </IndexPage>
            )
          }></Route>
        </Switch>
      </Router>
    )
  }
}