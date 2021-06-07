<template>
  <v-footer app>
    <v-row align="center">
      <v-col>
        <span class="text-subtitle-2">&copy; {{ new Date().getFullYear() }}</span>
      </v-col>
      <v-col cols="auto">
        <v-sheet class="d-flex align-center" rounded="xl">
          <v-card-subtitle>
            <span class="text-subtitle-2 px-2">Mamaevsky Yannis</span>
            <v-btn icon href="https://github.com/AdolfFosfor" target="_blank">
              <v-icon v-text="'mdi-github'" />
            </v-btn>
          </v-card-subtitle>
          <img class="rounded-xl" src="https://avatars.githubusercontent.com/u/37086262?v=4" width="64" alt="Author's Avatar" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>
