<template>
<v-app>

    <v-dialog v-model="show">
        <v-card width="100%" :loading="loading">
            <template slot="progress">
                <v-progress-linear color="blue" height="10" indeterminate></v-progress-linear>
            </template>

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
                        <v-btn color="black lighten-2" text @click="Upload">
                            Drag and Drop your file here
                        </v-btn>
                    </v-col>
                    <v-col class="text-center">
                        <v-btn color="black lighten-2" text @click="Upload">
                            Drag and Drop your file here
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="text-center">
                        <v-btn :loading="loading3" :disabled="loading3" color="blue-grey" class="ma-2 white--text" @click="loader = 'loading3'">
                            Browse Files
                            <v-icon right dark> mdi-cloud-upload </v-icon>
                        </v-btn>
                    </v-col>
                    <v-col class="text-center">
                        <v-btn :loading="loading3" :disabled="loading3" color="blue-grey" class="ma-2 white--text" @click="loader = 'loading3'">
                            Browse Files
                            <v-icon right dark> mdi-cloud-upload </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-card-actions class="justify-center">
                    <v-btn color="red lighten-2" text @click="show = false" :disabled="uploaded">
                        Create Mapping
                    </v-btn>
                </v-card-actions>
            </v-container>
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
import JSONViewer from "./components/JSONViewer";
import Ontology from "./components/Ontology";
import Mapping from "./components/Mapping";
import Header from "./components/Header";

export default {
    name: "App",

    components: {
        Mapping,
        Ontology,
        JSONViewer,
        Header,
    },

    data: () => ({
        loading: false,
        selection: 1,
        show: true,
        uploaded: true,
    }),

    methods: {
        Upload() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        },
    },
};
</script>
