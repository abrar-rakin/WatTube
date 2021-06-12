import React from "react";
import Signup from "./Signup";
// import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import SearchPage from "./SearchPage";
import CS135 from "./CS135";
import CS136 from "./CS136";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/search">
              <SearchPage />
            </PrivateRoute>
            <PrivateRoute path="/cs135search">
              <CS135 />
            </PrivateRoute>
            <PrivateRoute path="/cs136search">
              <CS136 />
            </PrivateRoute>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
