var React = require('react');
var Router = require('react-router');
var Home = require('../components/Home');
var Main = require('../components/Main');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route name="root" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);