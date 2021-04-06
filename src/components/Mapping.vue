<template>
<v-card flat tile height="800">
    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
</v-card>
</template>

<script>
import BlocklyComponent from "./BlocklyComponent"
import '../blocks/stocks'
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
                media: 'media/',
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: '#ccc',
                    snap: true
                },
                toolbox: `<xml>
          <category name="Class" colour="green">
          </category>
          <category name="ID" colour="blue">
          </category>
          <category name="Relation" colour="red">
          </category>
          <category name="Value" colour="black">
          <block type="math_number">
                <field name="NUM"></field>
            </block>
            <block type="text">
            </block>
            <block type="text_length"></block>
            <block type="text_print"></block>
            </category>
          <category name="Function" colour="purple">
          </category>
          <category name="Type" colour="yellow">
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
