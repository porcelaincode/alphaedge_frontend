export function formatDateTime(dateTime) {
  const date = new Date(dateTime)
  const hours = date.getHours()
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)
  const period = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12
  return `${formattedHours}:${minutes}:${seconds} ${period}`
}
