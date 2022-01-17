import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/SearchedPapers';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route path='/SearchedPapers' element={<Search/>}/>
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));
