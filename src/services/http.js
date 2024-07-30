import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_GATEWAY_BASE_URL,
  withCredentials: true
})

export async function fetchTradebook() {
  const { data: response } = await httpClient.get('/v1/trades')
  return response
}

export async function fetchCurrentPnl() {
  const { data: response } = await httpClient.get('/v1/positions')
  return response
}
