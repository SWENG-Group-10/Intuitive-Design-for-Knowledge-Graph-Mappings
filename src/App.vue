<template>
<v-app>

    <!-- Arrival Page to Upload Files -->
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
                        <input id="2" ref="ttlfile" type="file" accept=".ttl" @change="ontologyUpload()">
                    </v-col>
                </v-row>

                <v-card-actions class="justify-center">
                    <v-btn color="blue" class="white--text" @click="show = false" :disabled="!chosen">
                        Create Mapping
                    </v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
    </v-dialog>

    <!-- Dialog Box to return to Arrival Page, appears when left arrow is clicked -->
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

    <!-- Header Portion of Page with Return Button, Title, Help, Information, GitHub -->
    <div v-if="!show">
        <v-toolbar color="blue" dark>
            <v-btn icon @click="dialog = true">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Knowledge Graph Mapping Tool</v-toolbar-title>

            <v-row class="text-right">
                <v-col>
                    <v-btn elevation="0" icon medium>
                        <v-icon> mdi-help </v-icon>

                    </v-btn>
                    <v-btn elevation="0" icon medium @click="info = true">
                        <v-icon> mdi-information </v-icon>

                    </v-btn>

                    <v-btn elevation="0" icon medium>
                        <v-icon> mdi-github </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <!-- Dialog Box for Information Page, appears after info button is clicked -->
        <v-dialog v-model="info" width="500">
            <v-card>
                <v-card-title class="headline lighten-2">
                    Information
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    Software Engineering Project to allow users to easily create, edit and visualise Knowledge Graphs from imported files.
                </v-card-text>
                <v-card-text>
                    Contributors: Daniel Grace, David Green, Sanil Gupta, Ailbhe Merriman, Nathan Doussot, Matthew Dowse
                </v-card-text>
                <v-card-text>
                    Clients: ADAPT Centre
                </v-card-text>
            </v-card>
        </v-dialog>

        <!-- Layout of Page with Mapping, Ontology, JSON Viewer-->
        <v-row align-content="start" no-gutters>
            <v-col>
                <Mapping />
            </v-col>
            <v-col class="justify-start">
                <Ontology />
                <JSONViewer :file="text" />
            </v-col>
        </v-row>

        <!-- Download Button, bottom of page -->
        <v-footer padless color="blue" dark height="100">
            <v-col class="text-center" cols="12">
                <v-btn color="green">
                    Download Mapping<br>
                    <v-icon>mdi-download</v-icon>
                </v-btn>
            </v-col>
        </v-footer>

    </div>
</v-app>
</template>

<script>
import JSONViewer from "./components/JSONViewer"
import Ontology from "./components/Ontology"
import Mapping from "./components/Mapping"
import Backend from "./Backend/Backend"

export default {
    name: "App",

    components: {
        Mapping,
        Ontology,
        JSONViewer
    },

    data: () => ({
        loading: false, //boolean for Loading Bar on Arrival Upload Page
        show: true,
        chosen: false,
        ttlChosen: false,
        jsonChosen: false,
        dialog: false, //boolean for return button dialog box
        info: false, //boolean for info icon dialog box
        text: "",
        ttl: ""
    }),

    methods: {

        // handler for when a json button is pressed
        jsonUpload() {
            let file = this.$refs.jsonfile.files[0]
            if (!file) {
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
            this.onJSONPicked()
            this.jsonChosen = true
            if (this.jsonChosen && this.ttlChosen) {
                this.chosen = true
            }
        },
        //and handler for when ontology button is pressed
        ontologyUpload() {
            let file = this.$refs.ttlfile.files[0]
            if (!file) {
                return
            }
            let reader = new FileReader()
            reader.readAsText(file, "UTF-8")
            reader.onload = evt => {
                this.ttl = evt.target.result
            }
            reader.onerror = evt => {
                console.error(evt)
            }
            this.onTTLPicked()
            this.ttlChosen = true
            if (this.jsonChosen && this.ttlChosen) {
                this.chosen = true
            }
        },
        //handler for file change currently doesnt work for ontology selection
        onJSONPicked: function () {
            let crawledJSON = Backend.jsonCrawler(document.getElementById("1").files[0])
            console.log(crawledJSON)
        },

        onTTLPicked: function () {
            console.log(this.ttl);
        }
    },
};
</script>

<style>

</style>
