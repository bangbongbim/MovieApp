import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import About from './routes/About'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Navigation from './components/Navigation'
const App = () => {
  return <BrowserRouter>
    <Navigation />
    <Route path='/' component={Home} exact/>
    <Route path="/about" component={About}  />
    <Route path="/movie/:id" component={Detail}/>
  </BrowserRouter>
}

export default App;