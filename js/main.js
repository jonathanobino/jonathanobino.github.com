import React from 'react';
import { render } from 'react-dom';
import Navigator from './pages/navigator';
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import ErrHandler from './pages/errHandler';
import { Router, Route, Link, IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'


render(
	(<Router>
			<Route path="/" component={Navigator}>
				<IndexRoute component={Home}/>
				<Route path="blog" component={Blog}/>
			    <Route path="about" component={About}/>
			    <Route path="*" component={ErrHandler}/>
		    </Route>
		</Router>),document.getElementById('app'));

