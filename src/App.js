import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SignIn from './Pages/SignIn/SignIn.js'
import SignUp from './Pages/SignUp/SignUp.js'
import Room from './Pages/Room/Room.js'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path='/' component={Room} />
          <Route path="/login" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/" component={Room}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App