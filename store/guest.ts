import { defineStore } from 'pinia'

export const useGuest = defineStore({
  id: 'guest',

  state: () => ({
    name: 'Default guest'
  }),

  getters: {
    nameWithText: state => `Value is ${state.name}`
  },

  actions: {
    setNewGuest (newValue: string) {
      this.name = newValue
    }
  }
})
