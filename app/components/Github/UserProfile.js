var React = require('react');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div>
        <div>UserProfile</div>
        <div>Username: {this.props.username}</div>
        <div>Bio: {this.props.bio}</div>
      </div>
    );
  }
});

module.exports = UserProfile;