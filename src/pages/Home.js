/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import Title from './Title'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <div className='Home'>
      <header className='App-header'>
        <Helmet>
          <title>Goods4U | Home</title>
        </Helmet>
        <Title heading='Home Page' />
      </header>
    </div>
  )
}

//  ReactDOM.render(title, document.getElementById('home'))
