<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-select
        label="Select breed or color your pet"
        :items="listOptions"
        item-title="name"
        item-value="id"
        :value="mainStore.getCurrentType"
        @update:modelValue="setType($event)"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "AgrigationTypeComponent",

  data() {
    return {
      listOptions: [
        {
          name: "Colors",
          id: "colors",
        },
        {
          name: "Breeds",
          id: "breeds",
        },
      ],
    };
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    setType(typeId) {
      this.mainStore.setType(typeId);
    },
  },
};
</script>