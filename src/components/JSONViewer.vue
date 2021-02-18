<template>
<v-card flat tile outlined height="400">
    <v-container>
        <v-textarea auto-grow readonly v-model="json"></v-textarea>
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
    created() {
        this.json = JSON.stringify(this.json, null, 2)
    }
}
</script>

<style>

</style>
