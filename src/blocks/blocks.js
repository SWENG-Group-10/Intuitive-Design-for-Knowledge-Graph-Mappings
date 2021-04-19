import * as Blockly from "blockly/core";

Blockly.Blocks["stock_buy_simple"] = {
  init: function() {
    this.appendValueInput("Number")
      .setCheck("Number")
      .appendField("Buy Stock ID")
      .appendField(new Blockly.FieldNumber(0), "ID")
      .appendField("For amount")
      .appendField(new Blockly.FieldNumber(0), "Amount")
      .appendField("At Price")
      .appendField(new Blockly.FieldNumber(0), "Price");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};
Blockly.Blocks["stock_buy_prog"] = {
  init: function() {
    this.appendValueInput("Number")
      .setCheck("Number")
      .appendField("Buy Stock ID");
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("For amount");
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("At Price");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

Blockly.Blocks["class_block"] = {
  init: function() {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField(new Blockly.FieldTextInput("Class"), "Class");
    this.setColour(390);
    this.setOutput(true);
    this.setNextStatement(true);
  },
};

Blockly.Blocks["id_block"] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("ID"), "id");
    this.setOutput(true);
    this.setColour(220);
  },
};

Blockly.Blocks["relation_block"] = {
  init: function() {
    this.appendValueInput("ID").appendField(
      new Blockly.FieldTextInput("Relation"),
      "relation"
    );
    this.setColour(700);
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  },
};

Blockly.Blocks["value_block"] = {
  init: function() {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField(new Blockly.FieldTextInput("Value"), "value");
    this.setOutput(true);
    this.setColour(300);
  },
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

Blockly.Blocks["num_block"] = {
  init: function() {
    this.appendDummyInput().appendField("Number");
    this.setOutput(true);
    this.setColour(202);
  },
};
