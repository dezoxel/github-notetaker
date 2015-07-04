var React = require('react');

var Repos = React.createClass({
  render: function() {
    return (
      <div>
        <div>Repos</div>
        <div>Username: {this.props.username}</div>
        <div>Repos: {this.props.repos}</div>
      </div>
    );
  }
});

module.exports = Repos;