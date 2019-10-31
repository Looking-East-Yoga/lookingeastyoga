const colors = {
  orange: '#FDAD35',
  white:  '#F2F2F2',
  grey10: '#E5E5E5',
  grey20: '#CCCCCC',
  grey30: '#B2B2B2',
  grey40: '#999999',
  grey50: '#7F7F7F',
  grey60: '#666666',
  grey70: '#4C4C4C',
  grey80: '#3F3F3F',
  grey90: '#262626',
  black:  '#0C0C0C'
}
const breakpoints = {
  sm:'37.50rem', 
  md: '47.94rem', 
  lg: '64.06rem'
}
const fontSizes = {
  size1: '0.85rem', 
  size2: '1.0rem', 
  size3: '1.6rem', 
  size4: '1.8rem', 
  size5: '2.4rem', 
  size6: '2.8rem', 
  size7: '3.2rem', 
  size8: '4.0rem', 
  size9: '4.8rem', 
  size10: '6.4rem'
}
export const lightSimple = {
  breakpoints: breakpoints,
  fontSizes: fontSizes,
  colors: colors,
  body:{
    color:colors.grey60,
    background:colors.white
  },
  container:{
    background:colors.white
  },
  header:{
    color:colors.white,
    background:colors.grey60
  },
  main:{
    color:colors.grey60,
    background:colors.white
  },
  aside:{
    color:colors.grey60,
    background:colors.grey30
  },
  card:{
    color:colors.grey60,
    background:colors.grey30
  },
  footer:{
    color:colors.gery50,
    background:colors.grey10
  },
}

export const darkSimple = {
  header:{
    background:'green'
  },
  card:{
    color:colors.grey60,
    background:colors.white
  }
}