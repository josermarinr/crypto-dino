module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        '@storybook/preset-scss',
        '@storybook/addon-controls',
        '@storybook/addon-actions',
        "@storybook/preset-create-react-app"
    ],
    /* webpackFinal: async (config, {
        configType
    }) => {
        config.module.rules = []
        config.module.rules.push({
            test: /\.(css|scss|sass)$/,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('node-sass'),
                    }
                }
            ],
            include: path.resolve(__dirname, '../')
        });

        config.module.rules.push({
            test: /\.(ttf|eot|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                },
            },
        }, {
            test: /\.(woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff',
                },
            },
        })
        return config;
    }
*/
}
