import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Hero />
        <Form />
      </div>
    </div>
  )
}

export default App
