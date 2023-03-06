import { defineStore } from "pinia";
export const chatDataStore = defineStore("chatdatastore", {
  state: () => ({ messages: [] }),
  getters: {},
  actions: {},
});