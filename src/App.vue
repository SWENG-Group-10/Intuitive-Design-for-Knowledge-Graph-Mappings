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

                <v-btn color="blue lighten-2" text @click="ontologyUpload">
                    Upload Ontology
                </v-btn>
            </v-card-actions>

            <v-card-actions>
                <v-btn color="blue lighten-2" text @click="jsonUpload">
                    Upload JSON file
                </v-btn>
            </v-card-actions>
            <v-card-actions>
                <v-btn color="red lighten-2" text @click="show = false">
                    Confirm
                </v-btn>
            </v-card-actions>
            <input
                id = "1"
                ref="jsonLoader"
                class="d-none"
                type="file"
                accept=".json"
                hidden    
                @change="onFilePicked"
            >
            <input
                id = "2"
                ref="ontologyLoader"
                class="d-none"
                type="file"
                accept=".json"
                hidden    
                @change="onFilePicked"
            >
        </v-card>

    </v-dialog>
    <Header />
    <v-row align-content="start" no-gutters>
        <v-col>
            <Mapping />
        </v-col>
        <v-col class="justify-start">
            <Ontology />
            <JSONViewer />
        </v-col>
    </v-row>
</v-app>
</template>

<script>
import JSONViewer from "./components/JSONViewer"
import Ontology from "./components/Ontology"
import Mapping from "./components/Mapping"
import Header from "./components/Header"
import Backend from "./Backend/Backend"


export default {
    name: 'App',

    components: {
        Mapping,
        Ontology,
        JSONViewer,
        Header
    },

    data: () => ({
        loading: false,
        selection: 1,
        show: true,
    }),

    methods: {

        // handler for when a json button is pressed
        jsonUpload() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
            this.isSelecting = false
        }, { once: true })

        this.$refs.jsonLoader.click()
    },
        //and handler for when ontology button is pressed
        ontologyUpload() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
            this.isSelecting = false
        }, { once: true })

        this.$refs.ontologyLoader.click()


        },
        //handler for file change currently doesnt work for ontology selection
        onFilePicked: function() {
                let crawledJSON = Backend.jsonCrawler(document.getElementById("1").files[0])
                console.log(crawledJSON); 
            }
    },

};
</script>
