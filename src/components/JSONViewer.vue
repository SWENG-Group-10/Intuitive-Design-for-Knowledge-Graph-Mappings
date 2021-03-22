<template>
<v-card flat tile outlined height="400">
    <!-- Wrap the JSON displayer in a read only Vue Container -->
    <!-- deals with large JSON Schema as well as small -->
    <v-container style="max-height: 399px" class="overflow-y-auto">
        <pre>{{file}}</pre>
    </v-container>
</v-card>
</template>

<script>
import Backend from "../Backend/Backend"
export default {
    props: {
        file: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data: () => ({

    }),
    created() {
        // delimits the JSON Schema into nicely displayed way
        this.file = Backend.jsonPrettifier(this.file)
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
    },
}
</script>
