<template>
  <v-row>
    <v-col cols="12">
      <v-card class="pa-6" rounded="xl">
        <v-card-title class="pb-6">
          <span class="text-h3 text-md-h2">Packages</span>
          <v-spacer />
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="packages"
          :search="search"
          :loading="loading"
          :items-per-page="10"
          loading-text="Loading Data... Please wait"
          item-key="name"
          single-select
          @click:row="openDialog"
        />
        <InfoModal :dialog="dialog" :modal-data="modalData" @closeDialog="closeDialogComponent" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import InfoModal from '@/components/InfoModal';

  export default {
    name: 'DataTable',
    components: {
      InfoModal,
    },
    data: () => ({
      search: '',
      dialog: false,
      loading: true,
      modalData: {},
      headers: [
        {
          text: 'Package Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Author', value: 'author' },
        { text: 'Last Version', value: 'lastversion' },
      ],
    }),
    async fetch() {
      try {
        await this.getPackages();
        this.loading = false;
      } catch (e) {}
    },
    computed: {
      ...mapGetters({
        packages: 'packages/packages',
      }),
    },
    methods: {
      ...mapActions({
        getPackages: 'packages/getPackages',
      }),
      openDialog(item) {
        this.modalData = item;
        this.dialog = true;
      },
      closeDialogComponent() {
        this.dialog = false;
      },
    },
  };
</script>
