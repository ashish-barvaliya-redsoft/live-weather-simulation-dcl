//// VALUES TO CONFIGURE ////////

// fakeWeather CONTROLS WHAT WEATHER CONDITION TO SHOW IN THE SCENE
// TRY THE FOLLOWING VALUES:
// `snow`
// `thunder`
// `heavy rain`
// `light rain`
// `cloudy`
export const fakeWeather: string | null = 'heavy rain'

// LATITUDE AND LONGITUDE OF WEATHER CONDITIONS

const lat: string = '43.653225'
const lon: string = '-79.383186'

// WEATHER API ID & KEY

const appId: string = '9c36a2b2'
const APIkey: string = 'aa542b60667a9671760fea30b5d7cf29'

// FALLING SPEED OF RAIN AND SNOW

export const rainSpeed = 4
export const snowSpeed = 1

////////////////////////////////

// fully constructed URL for weather API
export const callUrl: string =
  'http://api.weatherunlocked.com/api/current/' +
  lat +
  ',%20' +
  lon +
  '?app_id=' +
  appId +
  '&app_key=' +
  APIkey
