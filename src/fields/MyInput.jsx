var React = require("react");

var MyInput = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.label}:
        <input type="text" value={this.props.value} name={this.props.name} onChange={this.props.dataChanged}/>
        Live value: {this.props.value}
      </div>
    );
  }
});

module.exports = MyInput;
