const tradingPhrases = [
  'Bought 50 CE 15000',
  'Sold 25 PE 14800',
  'Executed market order for 30 CE 15200',
  'Closed position in 40 PE 14900',
  'Adjusted position by selling 10 CE 15100',
  'Placed limit order for 20 PE 14700',
  'Partially filled order for 15 CE 15300',
  'Hedged position with 35 PE 14600',
  'Bought to close 60 CE 15050',
  'Sold to open 45 PE 14850'
]

export function generateTrade() {
  const timestamp = new Date()
  const trade = {
    timestamp: timestamp.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    text: tradingPhrases[Math.floor(Math.random() * tradingPhrases.length)],
    pnl: Math.random() * 200 - 100 // Random profit/loss for demonstration
  }
  return trade
}
