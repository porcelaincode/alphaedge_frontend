export function generateTradeData() {
  const data = []
  const today = new Date()
  const oneDay = 24 * 60 * 60 * 1000

  for (let i = 0; i < 10; i++) {
    const date = new Date(today.getTime() - i * oneDay)
    const dateString = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const numTrades = Math.floor(Math.random() * 5) + 1

    const trades = []
    let dailyPnl = 0

    for (let j = 0; j < numTrades; j++) {
      const trade = {
        date: dateString,
        symbol: `SYM${Math.floor(Math.random() * 1000)}`,
        tradeId: `TRADE${Math.floor(Math.random() * 10000)}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        price: (Math.random() * 1000).toFixed(2),
        executionDateTime: new Date(date.getTime() + Math.random() * oneDay),
        totalCost: 0, // You can calculate this based on quantity and price
        pl: (Math.random() * 1000).toFixed(2)
      }

      dailyPnl += Number(trade.pl)
      trades.push(trade)
    }

    data.push({ date: dateString, trades, pnl: dailyPnl })
  }

  return data
}
