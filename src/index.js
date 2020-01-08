import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

ReactDOM.render(
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Blog" exact component={Blog} />
        <Route path="/Contact" exact component={Contact} />
    </Router>, document.getElementById('root')
);

serviceWorker.unregister();
