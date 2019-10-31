const colors = {
  white: '#ffffff',
  grey10: '#f3f4f8',
  grey20: '#e1e5eb',
  grey30: '#c2c6cc',
  grey40: '#9ea2a8',
  grey50: '#686c73',
  grey60: '#30363d'
}
const breakpoints = {
  sm:'37.50rem', 
  md: '47.94rem', 
  lg: '64.06rem'
}
const fontSizes = {
  size1: '1.0rem', 
  size2: '1.4rem', 
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