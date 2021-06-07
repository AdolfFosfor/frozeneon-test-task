<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Footer from '~/components/Layout/Footer';

  export default {
    components: {
      Footer,
    },
  };
</script>
