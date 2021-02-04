import { merge } from 'theme-ui'
import { tailwind } from '@theme-ui/presets'

const theme = merge(tailwind, {
  initialColorModeName: `dark`,
  useCustomProperties: true,
  colors: {
    primary: `#0F30F5`,
    primaryBlack: `#212121`,
    secondary: `#0F30F5`,
    text: tailwind.colors.white,
    heading: tailwind.colors.white,
    background: `#020A55`,
    navText: tailwind.colors.white,
    divider: tailwind.colors.gray[8],
    textMuted: tailwind.colors.gray[5],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],

    brand: {
      secondary: {
        light: `#2D71F4`,
        medium: `#061FAB`,
        dark: `background`,
      },
      accents: {
        light: `#86E5CC`,
        dark: `20DAF5`,
      },
    },
    // modes: {
    //   light: {
    //     text: tailwind.colors.gray[8],
    //     heading: tailwind.colors.black,
    //     primary: tailwind.colors.orange[7],
    //     background: `background`,
    //     text: tailwind.colors.white,
    //     divider: tailwind.colors.gray[2],
    //     textMuted: tailwind.colors.gray[6],
    //     icon_brightest: tailwind.colors.gray[2],
    //     icon_darker: tailwind.colors.gray[4],
    //     icon_darkest: tailwind.colors.gray[6],
    //   },
    // },
  },
  backgroundImage: {
    listBg: `url(./bullet-circle.png)`,
  },
  fonts: {
    body: '"Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    display: '"Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Helvetica Neue", Roboto',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: `400`,
    heading: `700`,
    bold: `700`,
  },
  fontSizes: {
    body: {
      xs: `0.0833em`,
      sm: `1em`,
      md: `1.2em`,
      lg: `1.44em`,
      xl: `1.728em`,
      xxl: `2.074em`,
    },
    display: {
      xs: `0.618em`,
      sm: `1em`,
      md: `1.618em`,
      lg: `2.618em`,
      xl: `4.2368em`,
      xxl: `6.854em`,
    },
  },
  lineHeights: {
    sm: `1.22`,
    md: `1.287`,
    lg: `1.48`,
    body: `1.22`,
    h3: `1.22`,
    heading: `1.22`,
    subtitle: `41.89px`,
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      fontSize: `16px`,
      lineHeight: `22px`,
      background: `linear-gradient(180deg, #020A55 0%, #17043A 100%)`,
      backgroundColor: `background`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        '&:hover': {
          color: `primary`,
          textDecoration: `none`,
          cursor: `pointer`,
        },
      },
    },
    p: {
      fontSize: [`body.xs`, `body.sm`, `body.sm`],
      fontweight: `body`,
      lineHeight: `body`,
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `400`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [`6.854em`, 7, `6.854em`],
      fontWeight: `heading`,
      mt: 2,
      mb: 3,
      letterSpacing: `normal`,
      lineHeight: `heading`,
      color: `heading`,
    },
    h2: {
      fontSize: [`display.sm`, `display.md`, `display.lg`],
      lineHeight: 1.22,
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [`display.sm`, `display.sm`, `display.md`],
      mt: 5,
      mb: 4,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
    button: {
      '&:hover': {
        cursor: `pointer`,
      },
    },
  },
  header: {
    a: {
      color: `white`,
      fontWeight: `body`,
      '&:hover': {
        color: `white`,
        textDecoration: `none`,
        cursor: `pointer`,
      },
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
    header: {
      maxWidth: `5xl`,
    },
  },
  lists: {
    bigList: {
      listStyle: `none`,
      pl: 0,
      li: {
        display: `inline-flex`,
        alignItems: `start`,
        justifyItems: `left`,
        pl: `44px`,
        backgroundImage: `listBg`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `0 20%`,
        backgroundSize: `24px`,
        // "::before": {
        //   content: `""`,
        //   display: `block`,
        //   flex: `0 0 25px`,
        //   width: `25px`,
        //   height: `25px`,
        //   border: `1px solid red`
        // }
      },
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
    primary: {
      background: `transparent`,
      border: `4px solid white`,
      borderRadius: `0`,
      color: `white`,
      px: `30px`,
      py: `16px`,
    },
  },
  links: {
    primary: {
      background: `transparent`,
      border: `4px solid white`,
      borderRadius: `0`,
      color: `white`,
      fontSize: `display.sm`,
      fontWeight: `heading`,
      px: `30px`,
      py: `16px`,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
})

export default theme
