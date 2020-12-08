/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import Title from './Title'
import { Helmet } from 'react-helmet'

export default function Shop () {
  return (
    <div className='Shop'>
      <header className='App-header'>
        <Helmet>
          <title>Goods4U | Shop</title>
        </Helmet>
        <Title heading='Shop' />
      </header>
    </div>
  )
}

// ReactDOM.render(<Shop />, document.getElementById('shop'))
