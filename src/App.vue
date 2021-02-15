<template>
  <v-app>
    <Header/>
    <v-row align-content="start" no-gutters>
      <v-col>
        <Mapping/>
      </v-col>
      <v-col class="justify-start">
          <Ontology/>
          <JSONViewer/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import JSONViewer from "./components/JSONViewer"
import Ontology from "./components/Ontology"
import Mapping from "./components/Mapping"
import Header from "./components/Header"

export default {
  name: 'App',

  components: {
    Mapping,
    Ontology,
    JSONViewer,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
