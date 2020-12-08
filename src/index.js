import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './css/index.css'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Notfound from './pages/404'
import Header from './includes/Header'
import Footer from './includes/Footer'
import reportWebVitals from './reportWebVitals'

const Routing = (

  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(Routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
