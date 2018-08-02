import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import view from "./view";
import form from "./form";


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <div>
              <ul>
                <li>
              <Link to="/home">HOME</Link>
              </li>
              <li>
              <Link to="/viewd">ViewData</Link>
            </li>
            </ul>
            </div>

            <div>
              <Route path="/viewd" component={view} />
              <Route path="/home" component={form} />
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default App;
