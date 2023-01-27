import { defineStore } from "pinia";
import api from "@/helper/api";

export const useMainStore = defineStore("MainStore", {
  state: () => ({
    type: "colors",
    currentPage: 1,
    data: {},
  }),
  actions: {
    loadData() {
      api.getData(this.currentPage).then((results) => {
        this.data = results;
      });
    },
    setType(typeId) {
      this.type = typeId;
    },
    selectPage(pageIndex) {
      this.currentPage = pageIndex;
      this.loadData();
    },
  },
  getters: {
    getCurrentType() {
      return this.type;
    },
    getListData() {
      if (!this.data.animals) {
        return [];
      }

      const counter = {};
      this.data?.animals.forEach((item) => {
        let agregationValue;

        if (this.type === "breeds") {
          agregationValue = item.breeds.primary;
        } else {
          agregationValue = item.colors.primary;
        }

        if (counter[agregationValue]) {
          counter[agregationValue]++;
        } else {
          counter[agregationValue] = 1;
        }
      });

      const results = Object.keys(counter).map((item) => {
        return {
          agregatedValue: item,
          count: counter[item],
          percent: ((counter[item] / this.data.animals.length) * 100).toFixed(
            1
          ),
        };
      });

      return results;
    },
    getPagination() {
      return this.data.pagination;
    },
  },
});
