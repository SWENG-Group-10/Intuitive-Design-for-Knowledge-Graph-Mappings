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
          <category name="Class" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
          </category>
          <category name="ID" colour="%{BKY_LOOPS_HUE}">
          </category>
          <category name="Relation" colour="%{BKY_MATH_HUE}">
          </category>
          <category name="Value" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Function" colour="%{BKY_LOOPS_HUE}">
          </category>
          <category name="Type" colour="%{BKY_LOOPS_HUE}">
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
