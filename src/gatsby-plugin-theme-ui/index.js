export default {
  colors: {
    text: 'hsla(0, 0%, 100%, 1)',
    background: 'hsla(180, 4%, 21%, 1)',
    primary: 'hsla(187, 100%, 40%, 1)',
    secondary: 'hsla(316, 69%, 55%, 1)',
    accent: '',
    highlight: '',
    muted: 'hsla(180, 4%, 44%, 1)',
    modes: {
      light: {
        text: 'hsla(180, 4%, 21%, 1)',
        background: 'hsla(180, 4%, 95%, 1)',
        primary: 'hsla(198, 100%, 37%, 1)',
        secondary: 'hsla(316, 69%, 35%, 1)',
        accent: '',
        highlight: '',
        muted: 'hsla(180, 4%, 44%, 1)',
      },
      toxic: {
        text: 'hsla(336, 8%, 88%, 1)',
        background: 'hsla(206, 24%, 24%, 1)',
        primary: 'hsla(146, 63%, 63%, 1)',
        secondary: 'hsla(293, 49%, 50%, 1)',
        accent: '',
        highlight: '',
        muted: 'hsla(300, 2%, 68%, 1)',
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  breakpoints: ['40em', '56em', '64em'],
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    bottom: '0px 3px 10px 0px rgba(33,33,33,0.75)',
  },
  text: {
    default: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
    },
    caps: {
      variant: 'text.default',
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
    heading: {
      color: 'text',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  buttons: {
    primary: {},
  },
  links: {
    mono: {
      variant: 'styles.a',
      fontFamily: 'monospace',
    },
  },
  cards: {
    primary: {
      border: '1px solid transparent',
      borderRadius: 4,
      boxShadow: 'bottom',
      marginY: 4,
      marginX: 'auto',
      padding: 1,
      maxWidth: 280,
    },
    actionable: {
      variant: 'cards.primary',
      ':hover': {
        border: '1px solid',
        borderColor: 'secondary',
        padding: 1,
        cursor: 'pointer',
      },
    },
    list: {
      padding: 3,
      border: '1px dotted',
      borderColor: 'muted',
      boxShadow: 'bottom',
    },
  },
  styles: {
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    p: {
      variant: 'text.default',
    },
    heading: {
      variant: 'text.heading',
    },
  },
  markdown: {
    page: {
      '& p': {
        variant: 'styles.p',
      },
      '& h3': {
        variant: 'styles.heading',
      },
      '& a': {
        variant: 'styles.a',
      },
    },
    story: {
      '& > p': {
        variant: 'styles.p',
      },
    },
    references: {
      '& > p': {
        variant: 'styles.p',
      },
      '& > h3': {
        variant: 'styles.headingo',
        marginTop: 6,
        marginBottom: 5,
      },
      '& a': {
        variant: 'styles.a',
      },
    },
  },
};
