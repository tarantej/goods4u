/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import Title from './Title'
import { Helmet } from 'react-helmet'

export default function About () {
  return (
    <div className='About'>
      <header className='App-header'>
        <Helmet>
          <title>Goods4U | About</title>
        </Helmet>
        <Title heading='About' />
      </header>
    </div>
  )
}
//  ReactDOM.render(title, document.getElementById('about'))
