<template>
<v-app>
    <v-dialog v-model="show">
        <v-card :loading="loading" class="mx-auto my-12" max-width="500">
            <template slot="progress">
                <v-progress-linear color="blue" height="10" indeterminate></v-progress-linear>
            </template>

            <v-card-title>Intuitive Design for Knowledge Graph Mappings</v-card-title>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-btn color="blue lighten-2" text @click="Upload">
                    Upload Ontology
                </v-btn>
            </v-card-actions>

            <v-card-actions>
                <v-btn color="blue lighten-2" text @click="Upload">
                    Upload JSON file
                </v-btn>
            </v-card-actions>

            <v-card-actions>
                <v-btn color="red lighten-2" text @click="show = false">
                    Confirm
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>


    <v-card
     height="70"
    tile
    flat
    color="blue"
    >
    <h3>HEADER</h3>

    <v-card-actions>
      
      <v-btn 
        color="red"
        width=180
      >
        Subject
      </v-btn>

      <v-btn
        color="lime"
        width=180
      >
        Predicate
      </v-btn>

      <v-btn
        color="blue lighten-3"
        width=180
      >
        Object
      </v-btn>

      <v-btn
        color="yellow lighten-3"
        width=180
      >
        Literal
      </v-btn>
      
      <v-btn
        color="orange lighten-3"
        width=180
      >
        Type
      </v-btn>

    </v-card-actions>

  </v-card>

    <v-row align-content="start" no-gutters>
        <v-col>
            <Mapping />
        </v-col>
        <v-col class="justify-start">
            <Ontology />
            <JSONViewer :file="file"/>
        </v-col>
    </v-row>
</v-app>
</template>

<script>
import JSONViewer from "./components/JSONViewer"
import Ontology from "./components/Ontology"
import Mapping from "./components/Mapping"

export default {
    name: 'App',

    components: {
        Mapping,
        Ontology,
        JSONViewer    
    },

    data: () => ({
        loading: false,
        selection: 1,
        show: true,
        file: {
            id: 1,
            name: "A green door",
            price: 12.5,
            tags: ["home", "green"],
            test: "test fdgajkhfsdjghadkjghadfkjghbadfkjhgadfg",
            still: "testing woop",
            Wow: "yup the pup",
            Dogs: "I like dogs",

        },
    }),

    methods: {
        Upload() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },

};
</script>
