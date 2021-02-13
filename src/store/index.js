import { createStore } from 'vuex'

const getDefaultState = () => ({
  cities: {},
})

const createCityPayload = (payload) => ({
  name: payload.city,
  aqi: parseFloat(payload.aqi.toFixed(2)),
  updatedAt: new Date(),
})

const sortCityAscending = (a, b) => {
  const aName = a.name.toUpperCase()
  const bName = b.name.toUpperCase()
  if (aName > bName) {
    return 1
  }
  if (aName < bName) {
    return -1
  }
  return 0
}

export default createStore({
  state: getDefaultState(),
  getters: {
    allCities(state) {
      return Object.values(state.cities)
    },
    // Default Ascending
    allCitiesSortedByName(state) {
      return Object.values(state.cities).sort(sortCityAscending)
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
