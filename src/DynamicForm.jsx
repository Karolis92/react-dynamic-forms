var React = require("react");

var DynamicForm = React.createClass({

  propTypes: {
    formDef: React.PropTypes.array.isRequired,
    fieldTypeService: React.PropTypes.any.isRequired
  },

  getInitialState: function() {
    // set initial field values in state
    var initState = {};

    function addToInitState(el) {
      initState[el.name] = el.initValue || "";
    }

    this.props.formDef.forEach(addToInitState);
    return initState;
  },

  /**
  * handles value changed callback form children
  */
  handleDataChange: function(e) {
    // set field value in state
    var changedState = {};
    changedState[e.target.name] = e.target.value;
    this.setState(changedState);
  },

  /**
  * creates field object by it's definition
  */
  _createField: function(el) {
    // joins props from definition with additional props
    var passProps = Object.assign({}, el.fieldProps, {
      // pass same name to field
      name: el.name,
      // add value from current state
      value: this.state[el.name],
      // add value change callback
      dataChanged: this.handleDataChange,
      // dynamic children should have keys - just use name
      key: el.name
    });

    var fieldClass = this.props.fieldTypeService.getFormFieldClass(el.fieldType);

    return React.createElement(fieldClass, passProps);
  },

  render: function() {
    var formFields = this.props.formDef.map(this._createField);
    return React.createElement("form", {}, formFields);
  }
});

module.exports = DynamicForm;
