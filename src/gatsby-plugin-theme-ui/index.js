import { merge } from 'theme-ui'
import { tailwind } from '@theme-ui/presets'

const theme = merge(tailwind, {
  initialColorModeName: `dark`,
  useCustomProperties: true,
  colors: {
    primary: `#17043A`,
    primaryBlack: `#212121`,
    secondary: `#0F30F5`,
    text: tailwind.colors.white,
    heading: tailwind.colors.white,
    background: `#17043A`,
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
    listBg: `url(/bullet-circle.png)`,
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
      xs: `0.8125rem`,
      sm: `1rem`,
      md: `1.1875rem`,
      lg: `1.4375rem`,
      xl: `1.6875rem`,
      xxl: `2.0625rem`,
    },
    display: {
      xs: `0.625rem`,
      sm: `1rem`,
      md: `1.5625rem`,
      lg: `2.5625rem`,
      xl: `4.236rem`,
      xxl: `6.8125rem`,
    },
  },
  lineHeights: {
    sm: `1.22`,
    md: `1.287`,
    lg: `1.48`,
    body: `1.22`,
    h3: `1.22`,
    heading: [`1.22rem`, `1.22rem`, `1.22rem`, `1.22rem`, `1.22rem`, `7.8125rem`],
    subtitle: `41.89px`,
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1440px`, `1600px`],
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
      fontSize: [`12px`, `12px`, `12px`, `14px`, `16px`],
      lineHeight: `22px`,
      background: `linear-gradient(180deg, #020A55 0%, #17043A 100%)`,
      backgroundColor: `primary`,
    },
    a: {
      color: `brand.secondary.light`,
      textDecoration: `none`,
      transition: `all 0.3s ease-in-out`,
      '&:hover': {
        color: `primary`,
        textDecoration: `none`,
        cursor: `pointer`,
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
      fontSize: [`body.xxl`, `display.lg`, `display.xl`, `display.xl`, `display.xxl`],
      fontWeight: `heading`,
      lineHeight: [`1.22`, `1.22`, `1.22`, `1.22`, `7.8125rem`],
      mt: 2,
      mb: 3,
      letterSpacing: `normal`,
      color: `heading`,
    },
    h2: {
      fontSize: [`body.xl`, `body.xxl`, `display.lg`, `display.sm`, `display.xl`, `display.xl`],
      lineHeight: 1.22,
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [`body.lg`, `display.sm`, `display.md`, `display.md`, `display.lg`, `display.lg`],
      lineHeight: 1.22,
      mt: [4, 0],
      mb: [2, 3, 4],
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
    backgroundColor: `primary`,
    a: {
      color: `white`,
      fontWeight: `body`,
      '&:hover, &:visited': {
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
      maxWidth: [`5xl`],
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
        fontSize: [`body.xs`, `display.xs`, `body.md`, `display.xl`, `display.md`, `display.md`],
        pr: [0, 6],
      },
    },
    modalList: {
      listStyle: `none`,
      pl: 0,
      textAlign: `left`,
      li: {
        display: `inline-flex`,
        alignItems: `start`,
        justifyItems: `left`,
        pl: `44px`,
        backgroundImage: `listBg`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `0 20%`,
        backgroundSize: [`18px`, `24px`],
        fontSize: [`body.xs`, `display.xs`, `body.md`, `display.xl`, `display.xl`, `display.md`],
        pr: [0, 6],
        pb: [2, 3],
        "p": {
          my: 0
        },
        maxWidth: [`80%`, `unset`],
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
      '&:hover': {
        color: `brand.secondary.light`,
        borderColor: `brand.secondary.light`,
        cursor: `pointer`,
      },
      px: 3,
      py: 2,
      ml: 3,
    },
    primary: {
      background: `transparent`,
      border: `4px solid white`,
      borderRadius: `0`,
      color: `white`,
      fontSize: [`display.sm`, `display.sm`, `display.sm`, `display.md`],
      fontWeight: [`body`, `heading`, `heading`],
      px: [`30px`],
      py: [`10px`, `16px`],
      transition: `all 0.2s ease`,
      '&:hover': {
        color: `brand.secondary.light`,
        borderColor: `brand.secondary.light`,
        cursor: `pointer`,
      },
    },
  },
  links: {
    primary: {
      background: `transparent`,
      border: `4px solid white`,
      borderRadius: `0`,
      color: `white`,
      fontSize: [`display.sm`, `display.sm`, `display.sm`, `display.md`],
      fontWeight: [`body`, `heading`, `heading`],
      px: [`30px`],
      py: [`10px`, `16px`],
      transition: `all 0.2s ease`,
      "&:hover": {
        color: `brand.secondary.light`,
        borderColor: `brand.secondary.light`,
      },
      "&:visited": {
        color: `white`
      },
      '&:visited:hover': {
        color: `brand.secondary.light`,
      },
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
