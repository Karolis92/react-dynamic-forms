var MyInput = require("./fields/MyInput.jsx");
var MySelect = require("./fields/MySelect.jsx");

var DemoFieldService = class DemoFieldService {

  getFormFieldClass(fieldType) {
    switch(fieldType) {
      case "select":
        return MySelect;
      case "input":
        return MyInput;
      default:
        throw "no such field type!";
    }
  }
}

module.exports = DemoFieldService;
