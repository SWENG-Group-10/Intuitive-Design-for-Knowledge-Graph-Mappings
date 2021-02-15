<template>
    <v-card
    flat
    tile
    outlined
    height="400"
    >
        <v-container>
            <div class="body-1">{{jsonString(json)}}</div>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data: () => ({
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
    methods:{
        jsonString(json){
            return JSON.stringify(json, null, 2)
        }
    }
}
</script>

<style>

</style>