<template>
    <v-card
    flat
    tile
    outlined
    height="400"
    >
    <!-- Wrap the JSON displayer in a read only Vue Container -->
    <!-- deals with large JSON Schema as well as small -->
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
        this.json = JSON.stringify(this.json, null, 2)
    }
}
</script>

<style>

</style>