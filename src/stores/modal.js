import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    modal: null,
    resolver: null
  }),

  actions: {
    open(title, message) {
      this.modal = {
        title,
        message,
      }

      return new Promise((resolve) => {
        this.resolver = resolve
      })
    },

    close(ok) {
      this.resolver(ok ?? false)

      this.modal = null
      this.resolver = null
    },
  }
})