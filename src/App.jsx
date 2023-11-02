import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Hero from './components/Hero';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Hero />
        <Form />
        <Content />
      </div>
    </div>
  )
}

export default App