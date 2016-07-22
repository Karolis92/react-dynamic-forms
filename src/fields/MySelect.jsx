var React = require("react");

var MySelect = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.label}:
        <select value={this.props.value} name={this.props.name} onChange={this.props.dataChanged}>
          {this.props.options.map(function(op) {
            return <option key={op.value} value={op.value}>{op.label}</option>;
          })}
        </select>
        Live value: {this.props.value}
      </div>
    );
  }
});

module.exports = MySelect;
