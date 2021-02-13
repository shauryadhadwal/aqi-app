import { createStore } from 'vuex'
import { HISTORY_LIMIT } from '../shared/constants'
import { DateTime } from 'luxon'

const getDefaultState = () => ({
  cities: {},
  cityHistories: {},
  selectedCity: null,
})

const createCityPayload = (payload) => ({
  name: payload.city,
  aqi: parseFloat(payload.aqi.toFixed(2)),
  updatedAt: new Date(),
})

const getUpdatedHistoriesList = (newEntry, histories) => {
  /**
   * newEntry => {aqi: Number, updatedAt: Date}
   */
  if (!histories) {
    return [newEntry]
  }
  if (histories.length >= HISTORY_LIMIT) {
    return (histories = [...histories.slice(1, histories.length), newEntry])
  }
  return [...histories, newEntry]
}

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
    cityHistory: (state) => (city) => {
      return state.cityHistories[city] || []
    },
    cityHistoryWithFormattedDateString: (state) => (city) => {
      if (!state.cityHistories[city]) {
        return []
      }
      return state.cityHistories[city].map((ele) => ({
        ...ele,
        updatedAt: DateTime.fromJSDate(ele.updatedAt).toFormat('HH:mm:ss'),
      }))
    },
  },
  mutations: {
    updateCity(state, payload) {
      state.cities[payload.name] = payload
    },
    updateCityHistory(state, payload) {
      state.cities[payload.city] = payload.data
    },
    updateCities(state, payload) {
      state.cities = { ...state.cities, ...payload }
    },
    updateCityHistories(state, payload) {
      state.cityHistories = { ...state.cityHistories, ...payload }
    },
    updateSelectedCity(state, payload) {
      state.selectedCity = payload
    },
  },
  actions: {
    updateCities({ state, commit }, cityList) {
      if (!Array.isArray(cityList)) {
        return
      }
      let updatedCityState = {}
      let updatedCityHistoriesState = {}
      for (let city of cityList) {
        const cityPayload = createCityPayload(city)
        updatedCityState[city.city] = cityPayload
        updatedCityHistoriesState[city.city] = getUpdatedHistoriesList(
          {
            aqi: cityPayload.aqi,
            updatedAt: cityPayload.updatedAt,
          },
          state.cityHistories[city.city]
        )
      }
      commit('updateCities', updatedCityState)
      commit('updateCityHistories', updatedCityHistoriesState)
    },
    updateSelectedCity({ commit }, city) {
      commit('updateSelectedCity', city)
    },
  },
  modules: {},
})
