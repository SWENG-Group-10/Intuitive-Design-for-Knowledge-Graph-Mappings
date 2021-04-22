<template>
<v-app>

    <!-- Arrival Page to Upload Files -->
    <v-dialog v-model="show" persistent>
        <v-card width="100%" :loading="loading">
            <v-card-title class="justify-center">
                Welcome to our Knowledge Graph Mapping Tool
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
                        <v-text color="black lighten-2" text>
                            Click or Drag and Drop your file below
                        </v-text>
                    </v-col>
                    <v-col class="text-center">
                        <v-text color="black lighten-2" text>
                            Click or Drag and Drop your file below
                        </v-text>
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
        <v-card class="text-center">
            <h2 class="mb-2">Are You Sure?</h2>
            <v-card-text>
                If you press 'Reset' you will delete your current mapping.<br>Press 'Cancel' to continue current mapping.
            </v-card-text>
            <v-divider></v-divider>
                <v-btn color="blue" dark @click="dialog = false" class="mr-2 mb-2 mt-2">
                    Cancel
                </v-btn>
                <v-btn color="red" dark @click="dialog = false; show = true" class="mb-2 mt-2">
                    Reset
                </v-btn>
        </v-card>
    </v-dialog>

    <!-- Conditionally rendering the main page after file upload-->
    <div v-if="!show">
        <!-- Header Portion of Page with Return Button, Title, Help, Information, GitHub -->
        <v-toolbar color="blue" dark>
            <v-btn icon @click="dialog = true">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Knowledge Graph Mapping Tool</v-toolbar-title>

            <v-row class="text-right">
                <v-col>
                    <v-btn icon @click="help = true">
                        <v-icon> mdi-help </v-icon>

                    </v-btn>
                    <v-btn icon @click="info = true">
                        <v-icon> mdi-information </v-icon>

                    </v-btn>

                    <v-btn icon target="_blank" href="https://github.com/SWENG-Group-10/Intuitive-Design-for-Knowledge-Graph-Mappings">
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

        <!-- Dialog Box for Help Page, appears after help button is clicked -->
        <v-dialog v-model="help">
            <v-card>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">
                            Ontology Viewer
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">
                            JSON Viewer
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 3" step="3">
                            Mapping Creator
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 4" step="4">
                            Downloading Mappings
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="5">
                            Starting Over
                        </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1" class="text-center">
                            <v-card class="mb-2 text-center" color="white" flat>                   
                                <v-img src="./assets/ontology.png" max-width="1200" class="mx-auto"></v-img>
                            </v-card>
                            <h2 class="mb-12">The top right part of the page displays your ttl file on the WebVowl system.</h2>
                            <v-btn color="blue" dark @click="e1 = 2" class="mr-2">
                                Continue
                            </v-btn>

                            <v-btn text @click="help=false">
                                Cancel
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2" class="text-center">
                            
                            <v-card class="mb-2 text-center" color="white" flat>
                                <v-img src="./assets/jsonview.png" max-width="1200" class="mx-auto"></v-img>
                            </v-card>
                            <h2 class="mb-12">The bottom right part of the page displays your JSON file which you can scroll through.</h2>
                            <v-btn color="blue" @click="e1 = 3" class="mr-2" dark>
                                Next
                            </v-btn>

                            <v-btn text @click="e1 = 1">
                                Previous
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3" class="text-center">
                            
                            <v-card class="mb-2" color="white" flat>
                                <v-img src="./assets/mapping.png" max-width="1200" class="mx-auto"></v-img>
                            </v-card>
                            <h2 class="mb-12">On the left hand side you can find jigsaw pieces in each of the categories on the left and then use these pieces to create your mappings.</h2>
                            <v-btn color="blue" @click="e1 = 4" class="mr-2" dark>
                                Next
                            </v-btn>

                            <v-btn text @click="e1 = 2">
                                Previous
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="4" class="text-center">
                            
                            <v-card class="mb-2" color="white" flat>
                                <v-img src="./assets/button.png" max-width="1200" class="mx-auto"></v-img>
                            </v-card>
                            <h2 class="mb-12">To download your Mapping by pressing the "Download Mapping" button at the bottom of the page.</h2>
                            <v-btn color="blue" @click="e1 = 5" class="mr-2" dark>
                                Next
                            </v-btn>

                            <v-btn text @click="e1 = 3">
                                I Got It Thanks!
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="5" class="text-center">
                            
                            <v-card class="mb-2" color="white" flat>
                                <v-img src="./assets/reset.png" max-width="1200" class="mx-auto"></v-img>
                            </v-card>
                            <h2 class="mb-12">To upload new files please press the return button on the top left of the page which will bring you back to the original landing page.</h2>
                            <v-btn color="blue" @click="e1 = 1" class="mr-2" dark>
                                Start Again
                            </v-btn>

                            <v-btn text @click="help=false; e1 = 1">
                                I Got It Thanks!
                            </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
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
                <a href="https://www.adaptcentre.ie/" target="_blank"><v-img src="./assets/adapt.png" max-height="78" max-width="90" class="mx-auto"></v-img></a>
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
        e1: 1,
        dialog: false, //boolean for return button dialog box
        info: false, //boolean for info button dialog box
        help: false, //boolean for help button dialog box
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
                console.log = evt.target.result
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
            console.log("here")
            // let file = this.$refs.ttlfile.files[0]
            // Ontology.implement(file);
            

        }
    },
};
</script>
