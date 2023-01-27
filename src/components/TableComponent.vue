<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-table
        fixed-header
        hover
        height="400px"
        class="bg-deep-purple-lighten-5 ma-2"
      >
        <thead>
          <tr>
            <th>{{ mainStore.getCurrentType }}</th>
            <th>Count</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in mainStore.getListData" :key="item.agregatedValue">
            <td>
              {{
                item.agregatedValue === "null" ? "other" : item.agregatedValue
              }}
            </td>
            <td>{{ item.count }}</td>
            <td>{{ item.percent }} %</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "TableComponent",

  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
};
</script>