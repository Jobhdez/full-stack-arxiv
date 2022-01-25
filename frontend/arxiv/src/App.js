import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './pages/SearchedPapers';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;