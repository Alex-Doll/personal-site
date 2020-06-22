export default {
    colors: {
        text: "hsla(0, 0%, 100%, 1)",
        background: "hsla(180, 4%, 21%, 1)",
        primary: "hsla(187, 100%, 40%, 1)",
        secondary: "hsla(316, 69%, 55%, 1)",
        accent: "",
        highlight: "",
        muted: "hsla(180, 4%, 44%, 1)",
        modes: {
            light: {
                text: "hsla(180, 4%, 21%, 1)",
                background: "hsla(0, 0%, 100%, 1)",
                primary: "hsla(187, 100%, 40%, 1)",
                secondary: "hsla(316, 69%, 55%, 1)",
                accent: "",
                highlight: "",
                muted: "hsla(180, 4%, 44%, 1)",
            },
        },
    },
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64, 96,
    ],
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
    breakpoints: [
        '40em', '56em', '64em',
    ],
    space: [
        0, 2, 4, 8, 16, 32, 64, 128, 256, 512,
    ],
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
        primary: {
        },
    },
    links: {
        mono: {
            variant: 'styles.a',
            fontFamily: 'monospace',
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
    },
    markdown: {
        story: {
            '& > p': {
                variant: 'styles.p',
            },
        },
    },
};
