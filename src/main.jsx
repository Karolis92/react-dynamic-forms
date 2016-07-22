var React = require("react");
var ReactDOM = require("react-dom");

var DynamicForm = require("./DynamicForm.jsx");
var FieldService = require("./FieldService.js");
var MyInput = require("./fields/MyInput.jsx");
var MySelect = require("./fields/MySelect.jsx");

var formDef = [{
  fieldType: "input",
  name: "field1",
  initValue: "testVal1",
  fieldProps: {
    label: "label1"
  }
},
{
  fieldType: "select",
  name: "field2",
  initValue: 3,
  fieldProps: {
    label: "label2",
    options: [
      { label: 'Chocolate', value: 1 },
      { label: 'Vanilla', value: 2 },
      { label: 'Strawberry', value: 3 }
    ]
  }
}];

var fieldService = new FieldService();

ReactDOM.render(
  <DynamicForm formDef={formDef} fieldTypeService={fieldService} />,
  document.getElementById("content")
);
