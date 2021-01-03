<template>
  <v-app>
    <v-app-bar
      app
      color='primary'
      dark
    >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Arduly</v-toolbar-title>

    </v-app-bar>

    <v-main>
      <BlocklyComponent
        id='blockly'
        :options='options'
        ref='foo'
        @move='updateCode'
      ></BlocklyComponent>
      <p id='code'>
        <pre v-html='code'></pre>
      </p>
    </v-main>
    <v-footer padless>
    <v-col
      class='text-center'
      cols='12'
    >
      {{ new Date().getFullYear() }} — <strong>Arduly</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
import BlocklyJS from 'blockly/javascript';
import BlocklyComponent from './components/BlocklyComponent.vue';
import './blocks/stocks';
import './prompt';

export default {
  name: 'app',
  components: {
    BlocklyComponent,
  },
  data() {
    return {
      code: '',
      options: {
        media: 'media/',
        grid:
          {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true,
        },
        toolbox: {
          kind: 'categoryToolbox',
          contents: [
            {
              kind: 'category',
              name: 'Logic',
              colour: '%{BKY_LOGIC_HUE}',
              contents: [
                {
                  kind: 'block',
                  type: 'controls_if',
                },
                {
                  kind: 'block',
                  type: 'logic_compare',
                },
                {
                  kind: 'block',
                  type: 'logic_operation',
                },
                {
                  kind: 'block',
                  type: 'logic_negate',
                },
                {
                  kind: 'block',
                  type: 'logic_boolean',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Loops',
              colour: '%{BKY_MATH_HUE}',
              contents: [
                {
                  kind: 'block',
                  blockxml: "<block type='controls_repeat_ext'><value name='TIMES'><block type='math_number'><field name='NUM'>10</field></block></value></block>",
                },
                {
                  kind: 'block',
                  type: 'controls_whileUntil',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Math',
              colour: '%{BKY_MATH_HUE}',
              contents: [
                {
                  kind: 'block',
                  blockxml: "<block type='math_number'><field name='NUM'>123</field></block>",
                },
                {
                  kind: 'block',
                  type: 'math_arithmetic',
                },
                {
                  kind: 'block',
                  type: 'math_single',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Text',
              colour: '%{BKY_TEXTS_HUE}',
              contents: [
                {
                  kind: 'block',
                  type: 'text',
                },
                {
                  kind: 'block',
                  type: 'text_length',
                },
                {
                  kind: 'block',
                  type: 'text_print',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Variables',
              colour: '%{BKY_VARIABLES_HUE}',
              custom: 'VARIABLE',
            },
            {
              kind: 'category',
              name: 'Stocks',
              colour: '%{BKY_LOOPS_HUE}',
              contents: [
                {
                  kind: 'block',
                  type: 'stock_buy_simple',
                },
                {
                  kind: 'block',
                  type: 'stock_buy_prog',
                },
                {
                  kind: 'block',
                  type: 'stock_fetch_price',
                },
              ],
            },
          ],
        },
      },
    };
  },
  methods: {
    updateCode() {
      this.code = BlocklyJS.workspaceToCode(this.$refs.foo.workspace);
    },
  },
};
</script>

<style>
#code {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  margin: 0;
}

#blockly {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
}
</style>
