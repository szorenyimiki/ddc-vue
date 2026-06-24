import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: []
  }),

  actions: {
    add(message, type = 'success') {
      const id = Date.now() + Math.random()

      this.toasts.push({
        id,
        message,
        type
      })

      setTimeout(() => {
        this.remove(id)
      }, 3000)
    },

    remove(id) {
      this.toasts = this.toasts.filter(t => t.id !== id)
    },

    success(msg) {
      this.add(msg, 'success')
    },

    error(msg) {
      this.add(msg, 'error')
    }
  }
})