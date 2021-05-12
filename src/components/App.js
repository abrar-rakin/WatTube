import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import CS135 from "./CS135";
import CS136 from "./CS136";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/cs135search">
            <CS135 />
          </Route>
          <Route path="/cs136search">
            <CS136 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
