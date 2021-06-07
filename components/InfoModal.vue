<template>
  <v-dialog v-model="dialogState" width="90%" max-width="500" @click:outside="close">
    <v-card>
      <v-app-bar flat color="primary">
        <v-card-title class="text-h5 font-weight-bold">{{ modalData.name }}</v-card-title>
        <v-card-title class="px-0 text-subtitle-2 font-weight-regular">v.{{ modalData.lastversion }}</v-card-title>
        <v-spacer />
        <v-card-actions>
          <v-btn icon small :href="modalData.homepage" target="_blank">
            <v-icon v-text="'mdi-web'" />
          </v-btn>
          <v-btn icon small :href="modalData.github" target="_blank">
            <v-icon v-text="'mdi-github'" />
          </v-btn>
        </v-card-actions>
      </v-app-bar>
      <v-card flat class="pa-md-4">
        <v-card-text class="pb-0">v.{{ modalData.description }}</v-card-text>
        <v-card-title class="py-0 d-flex justify-space-between">
          <v-chip small>
            {{ modalData.mainfile }}
          </v-chip>
          <v-card-title class="font-weight-regular">{{ modalData.author }}</v-card-title>
        </v-card-title>
        <v-card-text class="text-caption">old versions: {{ modalData.versions }}</v-card-text>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'InfoModal',
    props: {
      modalData: {
        type: Object,
        default: () => {},
      },
      dialog: Boolean,
    },
    data: () => ({
      dialogState: false,
    }),
    watch: {
      dialog() {
        this.dialogState = this.dialog;
      },
    },
    methods: {
      close() {
        this.$emit('closeDialog');
      },
    },
  };
</script>
