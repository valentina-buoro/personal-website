import React from 'react'
import './index.css'
import Home from './pages/Home';
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';

const theme = {
  colors: {
    header: 'red',
    body: 'black',
    footer: 'black'
  },
  mobile: '768'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
