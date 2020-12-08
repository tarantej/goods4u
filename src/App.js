import logo from './logo.png'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/App.css'
import Title from './pages/Title'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { Helmet } from 'react-helmet'

export default function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Helmet>
          <title>Goods4U | Home</title>
        </Helmet>
        <Title heading='Main App' />
        <img src={logo} alt='logo' />
      </header>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
