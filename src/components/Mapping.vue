<template>
<v-card flat tile height="800">
    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
</v-card>
</template>

<script>
import BlocklyComponent from "./BlocklyComponent"
import '../blocks/stocks'
import '../blocks/blocks'
import '../prompt'
import BlocklyJS from 'blockly/javascript';
export default {
    name: 'app',
    components: {
        BlocklyComponent
    },
    data() {
        return {
            code: '',
            options: {
                trashcan:true,
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: '#ccc',
                    snap: true
                },
                toolbox: `<xml>
          <category name="Class" colour="green">
          <block type="class_block"></block>
          </category>
          <category name="ID" colour="blue">
          <block type="id_block"></block>
          </category>
          <category name="Relation" colour="red">
          <block type="relation_block"></block>
          </category>
          <category name="Value" colour="black">
                <block type="value_block"></block>
            </category>
          <category name="Function" colour="purple">
          <block type="uc_block"></block>
          <block type="lc_block"></block>
          </category>
          <category name="Type" colour="yellow">
          <block type="str_block"></block>
          <block type="num_block"></block>
          </category>
        </xml>`
            }
        }
    },
    methods: {
        showCode() {
            this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
        }

    }
}
</script>

<style>
#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
