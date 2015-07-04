var React = require('react');

var Notes = React.createClass({
  render: function() {
    return (
      <div>
        <div>Notes</div>
        <div>Username: {this.props.username}</div>
        <div>Notes: {this.props.notes}</div>
      </div>
    );
  }
});

module.exports = Notes;