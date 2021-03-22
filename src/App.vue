<template>
<v-app>

    <v-dialog v-model="show" persistent>
        <v-card width="100%" :loading="loading">
            <v-card-title class="justify-center">
                Upload Files
            </v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-container>
                <v-row>
                    <v-col class="text-center">
                        <div class="blue--text font-weight-medium title">
                            UPLOAD JSON FILE
                        </div>
                    </v-col>

                    <v-col class="text-center">
                        <div class="blue--text font-weight-medium title">
                            UPLOAD ONTOLOGY
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="text-center">
                        <v-btn color="black lighten-2" text>
                            Drag and Drop your file here
                        </v-btn>
                    </v-col>
                    <v-col class="text-center">
                        <v-btn color="black lighten-2" text>
                            Drag and Drop your file here
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="text-center">
                        <input id="1" ref="jsonfile" type="file" accept=".json" @change="jsonUpload()">
                    </v-col>
                    <v-col class="text-center">
                        <v-btn color="blue-grey" class="ma-2 white--text" @click="ontologyUpload()">
                            Browse Files
                            <v-icon right dark> mdi-cloud-upload </v-icon>
                        </v-btn>
                        <input id="2" ref="ontologyLoader" class="d-none" type="file" accept=".ttl" hidden @change="onTTLPicked">
                    </v-col>
                </v-row>

                <v-card-actions class="justify-center">
                    <v-btn color="red lighten-2" text @click="show = false">
                        Create Mapping
                    </v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title class="headline lighten-2">
                Are you sure?
            </v-card-title>
            <v-card-text>
                If you press 'Reset' you will delete your current mapping.<br>Press 'Cancel' to continue current mapping.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="grey" text @click="dialog = false">
                    Cancel
                </v-btn>
                <v-btn color="red" text @click="dialog = false; show = true">
                    Reset
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <div v-if="!show">
        <v-toolbar color="blue" dark>
            <v-btn icon @click="dialog = true">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Knowledge Graph Mapping Tool</v-toolbar-title>
        </v-toolbar>

        <v-row align-content="start" no-gutters>
            <v-col>
                <Mapping />
            </v-col>
            <v-col class="justify-start">
                <Ontology />
                <JSONViewer :file="text" />
            </v-col>
        </v-row>
    </div>

</v-app>
</template>

<script>
import JSONViewer from "./components/JSONViewer"
import Ontology from "./components/Ontology"
import Mapping from "./components/Mapping"
// import Backend from "./Backend/Backend"

export default {
    name: "App",

    components: {
        Mapping,
        Ontology,
        JSONViewer
    },

    data: () => ({
        loading: false,
        selection: 1,
        show: true,
        dialog: false,
        text: ""
    }),

    methods: {

        // handler for when a json button is pressed
        jsonUpload() {
            console.log("selected a file")
            console.log(this.$refs.jsonfile.files[0])

            let file = this.$refs.jsonfile.files[0]
            if(!file){
                return
            }
            let reader = new FileReader()
            reader.readAsText(file, "UTF-8")
            reader.onload = evt => {
                this.text = evt.target.result
            }
            reader.onerror = evt => {
                console.error(evt)
            }
        },
        //and handler for when ontology button is pressed
        ontologyUpload() {
            this.loading = true
            window.addEventListener('focus', () => {
                this.loading = false
            }, {
                once: true
            })

            this.$refs.ontologyLoader.click()

        },
        //handler for file change currently doesnt work for ontology selection
        onJSONPicked: function () {
            // let crawledJSON = Backend.jsonCrawler(document.getElementById("1").files[0])
        },

        onTTLPicked: function () {
            console.log(document.getElementById("2").files[0]);
        }
    },
};
</script>

<style>

</style>
