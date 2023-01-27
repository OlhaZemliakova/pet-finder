<template>
  <div class="text-center">
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            class="my-4"
            :length="mainStore.getPagination?.total_pages"
            :total-visible="7"
            :model-value="mainStore.getPagination?.current_page"
            @update:modelValue="selectPage($event)"
            rounded="circle"
            color="purple-darken-3"
            size="small"
            border
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "PaginationComponent",
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    selectPage(pageIndex) {
      this.mainStore.selectPage(pageIndex);
    },
  },
};
</script>