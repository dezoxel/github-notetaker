var React = require('react');
var Router = require('react-router');
var Home = require('../components/Home');
var Main = require('../components/Main');
var Profile = require('../components/Profile');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route name="root" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
);