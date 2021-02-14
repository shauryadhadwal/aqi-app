import { createStore } from 'vuex'
import { HISTORY_LIMIT } from '../shared/constants'
import { FormatDate, SortCities } from '../shared/utils'

const getDefaultState = () => ({
  cities: {},
  cityHistories: {},
  selectedCity: null,
  selectedCityLatestEntry: null,
  comparisonList: new Set(),
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

export default createStore({
  state: getDefaultState(),
  getters: {
    allCities(state) {
      return Object.values(state.cities)
    },
    allCityNames(state) {
      return Object.keys(state.cities)
    },
    allCitiesSortedByName(state) {
      return Object.values(state.cities).sort(SortCities.byAqiValue)
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
        updatedAtHHmmss: FormatDate.getTimeInHHmmss(ele.updatedAt),
        updatedAtEpoch: ele.updatedAt.valueOf(),
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
    updateSelectedCityLatestEntry(state, payload) {
      state.selectedCityLatestEntry = payload
    },
    addToComparisonList(state, city) {
      state.comparisonList.add(city)
    },
    clearComparisonList(state) {
      state.comparisonList.clear()
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
        if (state.selectedCity === city.city) {
          commit('updateSelectedCityLatestEntry', cityPayload)
        }
      }
      commit('updateCities', updatedCityState)
      commit('updateCityHistories', updatedCityHistoriesState)
    },
    updateSelectedCity({ commit }, city) {
      commit('updateSelectedCity', city)
    },
    addToComparisonList({ commit }, city) {
      commit('addToComparisonList', city)
    },
    clearComparisonList({ commit }) {
      commit('clearComparisonList')
    },
  },
})
