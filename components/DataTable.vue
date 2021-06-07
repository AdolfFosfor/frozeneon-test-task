<template>
  <v-row>
    <v-col cols="12">
      <v-card class="pa-md-6" rounded="xl">
        <v-card-subtitle class="pb-0 text--primary">
          <span class="text-h3 text-md-h2">Packages Library</span>
          <v-spacer />
          <v-text-field
            v-model="search"
            class="rounded-lg pt-8"
            append-icon="mdi-magnify"
            label="Search"
            outlined
            single-line
            hide-details
          />
        </v-card-subtitle>
        <v-card-subtitle>
          <v-data-table
            :headers="headers"
            :items="packages"
            :search="search"
            :loading="loading"
            :disable-sort="$vuetify.breakpoint.smAndDown"
            :items-per-page="10"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
            loading-text="Loading Data... Please wait"
            item-key="name"
            single-select
            @click:row="openDialog"
          />
        </v-card-subtitle>
      </v-card>
    </v-col>
    <InfoModal :dialog="dialog" :modal-data="modalData" @closeDialog="closeDialogComponent" />
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
