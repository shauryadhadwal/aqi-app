import { AIR_QUALITY_STANDARDS_HEX_CODES } from './constants'
import { DateTime } from 'luxon'

export const getCategoryFromAQI = (value) => {
  if (value >= 401) return 'SEVERE'
  if (value >= 301) return 'VERY_POOR'
  if (value >= 201) return 'POOR'
  if (value >= 101) return 'MODERATE'
  if (value >= 51) return 'SATISFACTORY'
  if (value >= 0) return 'GOOD'
  return null
}

export const getHexCodeFromAQI = (value) => {
  const res = getCategoryFromAQI(value)
  if (res === null) {
    return null
  }
  return AIR_QUALITY_STANDARDS_HEX_CODES[res]
}

export const getTimeInRelativeFormat = (current, previous) => {
  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365

  var elapsed = current - previous

  if (elapsed < msPerMinute) {
    return 'A few seconds ago'
  } else if (elapsed < msPerHour) {
    return 'A few minutes ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago'
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago'
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago'
  } else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago'
  }
}

export const FormatDate = {
  getTimeInHHmmss(date) {
    return DateTime.fromJSDate(date).toFormat('HH:mm:ss')
  },
}

export const SortCities = {
  byName(a, b) {
    const aName = a.name.toUpperCase()
    const bName = b.name.toUpperCase()
    if (aName > bName) {
      return 1
    }
    if (aName < bName) {
      return -1
    }
    return 0
  },

  byAqiValue(a, b) {
    if (a.aqi > b.aqi) {
      return 1
    }
    if (a.aqi < b.aqi) {
      return -1
    }
    return 0
  },
}

export const Sort = {
  byStrings(a, b) {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    return 0
  },
}
