import { createStore } from 'vuex'

const getDefaultState = () => ({
  cities: {},
})

const createCityPayload = (payload) => ({
  name: payload.city,
  aqi: payload.aqi,
  updatedAt: new Date(),
})

export default createStore({
  state: getDefaultState(),
  getters: {
    allCities(state) {
      return Object.values(state.cities)
    },
  },
  mutations: {
    updateCity(state, payload) {
      state.cities[payload.name] = payload
    },
    updateCitiesState(state, payload) {
      state.cities = { ...state.cities, ...payload }
    },
  },
  actions: {
    updateCities({ commit }, cityList) {
      if (!Array.isArray(cityList)) {
        return
      }
      let newCitiesState = {}
      for (let city of cityList) {
        newCitiesState[city.city] = createCityPayload(city)
      }
      commit('updateCitiesState', newCitiesState)
    },
  },
  modules: {},
})
