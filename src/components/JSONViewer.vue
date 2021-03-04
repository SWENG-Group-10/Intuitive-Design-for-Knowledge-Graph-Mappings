<template>
    <v-card
    flat
    tile
    outlined
    height="400"
    >
    <!-- Wrap the JSON displayer in a read only Vue Container -->
    <!-- deals with large JSON Schema as well as small -->

    

    <input type='file' id="jsonUpload" @change="onFilePicked" accept=".json">


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
        json: {
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
    created(){
        // delimits the JSON Schema into nicely displayed way
        this.json = Backend.jsonPrettifier(this.json)
    },


    //json change handler to test the backend
    methods: {
        onFilePicked: function() {
                
                let crawledJSON = Backend.jsonCrawler(document.getElementById("jsonUpload").files[0])
                console.log(crawledJSON);
            }
    }
}
</script>

    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
    },
};
</script>
