import React, { Component } from "react";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/users" exact>
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/courses",
                  }}
                >
                  Courses
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/users" exact component={Users} />
          <Route path="/courses" component={Courses} />
          <Route path="/course" exact component={Course} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
