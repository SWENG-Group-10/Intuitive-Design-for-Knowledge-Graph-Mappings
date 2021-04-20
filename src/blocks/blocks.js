import * as Blockly from "blockly/core";

Blockly.Blocks["class_block"] = {
  init: function() {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField(new Blockly.FieldTextInput("Class"), "Class");
    this.appendStatementInput("Content");
    this.setColour(390);
    this.setOutput(true);
  },
};

Blockly.JavaScript["class_block"] = function(block) {
  var class_name = block.getFieldValue("Class");
  var content = Blockly.JavaScript.statementToCode(block, "Content");
  var code = `"${class_name}" = {\n${content}\n}`;
  return code;
};

Blockly.Blocks["id_block"] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("ID"), "id");
    this.setOutput(true);
    this.setColour(220);
  },
};

Blockly.JavaScript["id_block"] = function(block) {
  var id_name = block.getFieldValue("id");
  var code = `= "${id_name}",`;
  return code;
};

Blockly.Blocks["relation_block"] = {
  init: function() {
    this.appendValueInput("Val").appendField(
      new Blockly.FieldTextInput("Relation"),
      "relation"
    );
    this.setColour(700);
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  },
};

Blockly.JavaScript["relation_block"] = function(block) {
  var rel_name = block.getFieldValue("relation");
  var value = Blockly.JavaScript.valueToCode(
    block,
    "Val",
    Blockly.JavaScript.ORDER_ADDITION
  );

  var code = `\n"${rel_name}" : ${value}\n`;
  return code;
};

Blockly.Blocks["value_block"] = {
  init: function() {
    this.appendValueInput("Ty")
      .setCheck("String")
      .appendField(new Blockly.FieldTextInput("Value"), "value");
    this.setOutput(true);
    this.setColour(300);
  },
};

Blockly.JavaScript["value_block"] = function(block) {
  var val_name = block.getFieldValue("value");
  var type = Blockly.JavaScript.valueToCode(
    block,
    "Ty",
    Blockly.JavaScript.ORDER_ADDITION
  );
  var code = `"${val_name}" = {\n"type": "${type}"\n},\n}`;
  return code;
};

Blockly.Blocks["uc_block"] = {
  init: function() {
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField("UpperCase");
    this.setOutput(true, "Number");
    this.setColour(340);
  },
};

Blockly.Blocks["lc_block"] = {
  init: function() {
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField("LowerCase");
    this.setOutput(true, "Number");
    this.setColour(340);
  },
};

Blockly.Blocks["str_block"] = {
  init: function() {
    this.appendDummyInput().appendField("String");
    this.setOutput(true);
    this.setColour(202);
  },
};

Blockly.JavaScript["str_block"] = function() {
  var code = `"String,\n"`;
  return code;
};

Blockly.Blocks["num_block"] = {
  init: function() {
    this.appendDummyInput().appendField("Number");
    this.setOutput(true);
    this.setColour(202);
  },
};
