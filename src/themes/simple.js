const colors = {
  white: '#ffffff',
  grey10: '#f3f4f8',
  grey20: '#e1e5eb',
  grey30: '#c2c6cc',
  grey40: '#9ea2a8',
  grey50: '#686c73',
  grey60: '#30363d'
}
const breakpoints = ['31.25em', '43.75em', '46.875em'];
const fontSizes = {
  size1: '1.2rem', 
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
const space = ['0', '.4rem', '.8rem', '1.2rem', '1.6rem', '2.0rem', '3.2rem', '4.8rem', '6.4rem', '9.6rem'];
export const lightSimple = {
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