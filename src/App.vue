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
        Upload() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },

};
</script>
