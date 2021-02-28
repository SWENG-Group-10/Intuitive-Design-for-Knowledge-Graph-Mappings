<template>
    <v-card
    flat
    tile
    outlined
    height="400"
    >
    <!-- Wrap the JSON displayer in a read only Vue Container -->
    <!-- deals with large JSON Schema as well as small -->

    

    <input type='file' @change="onFilePicked(event)">


        <v-container>
            <v-textarea
            auto-grow 
            readonly
            v-model = "json"
            ></v-textarea>
        </v-container>
    </v-card>
</template>

<script>
import Backend from "../Backend/Backend"
export default {
    data: () => ({
        // Sample JSON for testing purposes
        // Will add upload functionality later
        json: {
            "id": 1,
            "name": "A green door",
            "price": 12.5,
            "tags": [
                "home",
                "green"
            ]
        }
    }),
    created(){
        // delimits the JSON Schema into nicely displayed way
        this.json = Backend.jsonPrettifier(this.json)
    },


    //json change handler to test the backend
    //gives error saying event is undefined but might still run anyway? not sure
    methods: {
        onFilePicked: function(event) {
                var jsonIN = event.target;  
                var inputFile = jsonIN.files[0];
                console.log(inputFile.name);

                var example = Backend.jsonCrawler(inputFile);
                console.log(example);
            }
    }
}
</script>

<style>

</style>