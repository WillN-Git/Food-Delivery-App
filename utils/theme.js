import { Dimensions } from 'react-native'

export const SIZES = {
    //Global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    //Font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    //App dimensions
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const COLORS = {
  //Base colors
  primary: '#212020',
  secondary: '#2d2d2d',
  tertiary: '#84d600',
  text: '#fff',

  //Colors
  orange: '#f49605',
  lightOrange: '#fa9b07',
  deepOrange: '#fe6201',
  white: '#ffffff',
  lightGray: "#64676D"
}


export default { COLORS, SIZES }