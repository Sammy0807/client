import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `https://musicapps.azurewebsites.net`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
