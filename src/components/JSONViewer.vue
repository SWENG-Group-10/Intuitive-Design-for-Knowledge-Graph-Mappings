<template>
  <v-card flat tile outlined height="400">
    <div class="text-center">
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Upload
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
    </div>

    <v-container>
      <v-textarea auto-grow readonly v-model="json"></v-textarea>
    </v-container>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    json: {
      id: 1,
      name: "A green door",
      price: 12.5,
      tags: ["home", "green"],
    },
  }),
  created() {
    this.json = JSON.stringify(this.json, null, 2);
  },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  };
    
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
