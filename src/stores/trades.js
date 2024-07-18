import { defineStore } from 'pinia'
import { generateTradeData } from '@/services/mock-trades'

export const useTradesStore = defineStore('trades', {
  persist: true,
  state: () => ({
    trades: [],
    tradeBook: []
  }),
  actions: {
    addTrade(trade) {
      this.trades.push(trade)
      if (this.trades.length > 5) {
        this.trades.shift()
      }
    },
    async getTradebook() {
      this.tradeBook = generateTradeData()
    }
  }
})
