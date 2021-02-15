<template>
  <v-app>
    
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
