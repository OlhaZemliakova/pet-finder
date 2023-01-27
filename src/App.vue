<template>
  <v-app>
    <v-app-bar class="bg-purple-darken-3">
      <div class="logo">
        <p>PetFinder</p>
        <v-icon icon="mdi-cat" />
      </div>
    </v-app-bar>
    <v-main class="bg-deep-purple-lighten-4">
      <v-container>
        <AgrigationTypeComponent />
        <TableComponent />
        <PaginationComponent />
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import AgrigationTypeComponent from "@/components/AgrigationTypeComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "app",
  components: {
    AgrigationTypeComponent,
    TableComponent,
    PaginationComponent,
    FooterComponent,
  },

  setup() {
    const mainStore = useMainStore();

    mainStore.loadData();
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  font-size: 30px;
  margin-left: 20px;
}
</style>