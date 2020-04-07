import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SignIn from './Pages/SignIn/SignIn.js'
import SignUp from './Pages/SignUp/SignUp.js'
import Room from './Pages/Room/Room.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/" component={Room}></Route>
      </Switch>



    </Router>
  )
}

export default App