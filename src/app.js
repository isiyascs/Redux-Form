import React from "react";

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
              <Link to="/home">HOME</Link>
              <br />
              <Link to="/viewd">ViewData</Link>
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
