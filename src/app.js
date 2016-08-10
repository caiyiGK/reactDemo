import React from 'react';
import Router from 'react-router';  //, Route, browserHistory, hashHistory, Link, IndexRoute 

import NotFound from './js/common/NotFound'
import Home from './js/home/index'
import Detail from './js/detail/index'


var Route         = Router.Route;
var RouteHandler  = Router.RouteHandler;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

window.serverDoamin  = 'http://120.76.204.135';

let App = React.createClass({ render() { return ( <RouteHandler/> ); } });

var routes = (
  <Route path="/" handler={App}>

    <Route path="/category/:id" handler={Home}/>

    <Route path="/detail/:id" handler={Detail}/>
    
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('App'));
});