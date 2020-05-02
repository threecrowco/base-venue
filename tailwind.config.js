const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        container: {
            padding: {
                default: '2rem'
            }
        },

        aspectRatio: {
            // defaults to {}
            none: 0,
            square: [1, 1],
            land: [5, 4],
            port: [4, 5],
            letterbox: [16, 9],
            cinema: [21, 9]
        },

        extend: {
            colors: {
                // 'brand-drab': '#a39e72',
                // 'brand-olive': '#c7a054',
                // 'brand-gold': '#e4ab6c',
                // 'brand-red': '#d16f54',
                // black: '#5b3538',
                // white: '#f5e9d0'
            },

            fontFamily: {
                sans: ['Graphik', ...defaultTheme.fontFamily.sans]
            },

            letterSpacing: {
                super: '0.35em'
            },

            fontSize: {
                xxs: '0.5rem'
            },

            zIndex: {
                '0': 0,
                '10': 10,
                '20': 20,
                '30': 30,
                '40': 40,
                '50': 50,
                '25': 25,
                '50': 50,
                '60': 60,
                '70': 70,
                '75': 75,
                '80': 80,
                '90': 90,
                '100': 100,
                '110': 110,
                '120': 120,
                auto: 'auto'
            },

            inset: {
                '4': '1rem',
                '8': '2rem',
                '16': '4rem',
                '32': '8rem',
                '48': '12rem',
                '64': '16rem',
                '1/2': '50%',
                '2/3': '66.6%',
                '3/4': '75%',
                '1/12': '8.333333%'
            },
            minHeight: {
                '64': '16rem',
                '96': '24rem',
                '128': '32rem',
                '256': '64rem',
                '512': '128rem',
                '60p': '3.75rem',
                '80p': '5rem'
            },
            maxHeight: {
                '64': '16rem',
                '96': '24rem',
                '60p': '3.75rem',
                '80p': '5rem'
            },
            spacing: {
                '72': '18rem',
                '80': '20rem',
                '96': '24rem',
                '128': '32rem',
                '192': '48rem',
                '256': '64rem',
                '512': '128rem',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                'full-96': 'calc(100% - 24rem)',
                'full-64': 'calc(100% - 16rem)',
                'full-32': 'calc(100% - 8rem)',
                'full-16': 'calc(100% - 4rem)'
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
        boxShadow: ['responsive', 'hover', 'focus', 'group-hover'],
        fontWeight: ['responsive', 'hover', 'focus'],
        inset: ['responsive', 'hover', 'group-hover'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive', 'hover', 'focus', 'group-hover'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive', 'hover', 'focus', 'group-hover'],
        placeholderColor: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive', 'hover', 'focus', 'group-hover'],
        resize: ['responsive'],
        space: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
        width: ['responsive', 'hover', 'focus', 'group-hover'],
        transform: ['responsive', 'hover', 'focus', 'group-hover'],
        transformOrigin: ['responsive', 'hover', 'focus', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
        rotate: ['responsive', 'hover', 'focus', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        skew: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionDelay: ['responsive', 'hover', 'focus', 'group-hover']
    },
    // prettier-ignore
    plugins: [
        require('@benface/tailwindcss-reset'),
        require('tailwindcss-aspect-ratio'),
    ]
};
