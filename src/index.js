import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Team from './views/team'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/" />
        <Route exact component={Team} path="/team" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
