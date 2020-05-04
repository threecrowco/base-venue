// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'BASE - Venu',

    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
        },
        {
            use: '@zefman/gridsome-source-instagram',
            options: {
                username: 'instagram',
            },
        },
        {
            use: 'gridsome-plugin-svg',
        },
        {
            use: '@gridsome/source-contentful',
            options: {
                space: 'r88tobwk8bma',
                accessToken: 'Fdc-L8XET8c0t6t8frhiO6MNKntJVmIstngHUYN0S9c',
                typeName: 'Contentful',
            },
        },
    ],
    templates: {
        ContentfulEvent: '/event/:slug/',
    },
}
