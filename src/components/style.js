// The file is copied from Morveus/GlobalLayout

const grey = 'rgb(228, 225, 225)';

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// Negative p is darker, positive is lighter
function shadeBlend(p, c0, c1) {
  var n = p < 0 ? p * -1 : p, u = Math.round, w = parseInt;
  if (c0.length > 7) {
    var f = c0.split(","), t = (c1 ? c1 : p < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","), R = w(f[0].slice(4)), G = w(f[1]), B = w(f[2]);
    return "rgb(" + (u((w(t[0].slice(4)) - R) * n) + R) + "," + (u((w(t[1]) - G) * n) + G) + "," + (u((w(t[2]) - B) * n) + B) + ")"
  } else {
    var f = w(c0.slice(1), 16), t = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16), R1 = f >> 16, G1 = f >> 8 & 0x00FF, B1 = f & 0x0000FF;
    return "#" + (0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1)
  }
}

module.exports = {
  Colors: {
    fullWhite: '#FFFFFF',
    white: '#EEEEEE',
    black: '#121212',

    grey,
    greyDarker: shadeBlend(-0.6, grey),
    greyDark: shadeBlend(-0.25, grey),
    greyMedium: grey,
    greyLight: shadeBlend(0.6, grey),
    greyLighter: shadeBlend(25, grey),

    background: shadeBlend(0.7, grey),
    companyGreen: '#8BC43F',


    cyan: '#02A69B', // Primary
    cyanLight: '#9AE6E1',
    blue: '#1880D9',
    pink: '#F06292',
    yellow: '#fffe91',

    headerDark: '#1A2F40',

    blueDark: '#0D47A1', // OK
    error: '#D92118', // Error
  },

  Messages: {
    width: 200,
    zIndex: 20
  },

  Header: {
    height: 52,
    zIndex: 10
  },

  PageNav: {
    openWidth: 200,
    closedWidth: 50,
    zIndex: 9
  },

  Footer: {
    height: 120,
    zIndex: 8
  },

  distance: {
    extraSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32
  },

  fontSize: {
    small: 12,
    medium: 15,
    large: 20,
    extraLarge: 32
  },

  fab: {
    height: 56
  },

  borderRadius: '2px',

  width: {
    quarter: '25%',
    oneThird: '33.33%',
    half: '50%',
    twoThirds: '66.67%',
    full: '100%'
  },

  fonts: {
    montserrat: '"Montserrat",sans-serif',
    opensans: '"Open Sans",sans-serif'
  }
};
