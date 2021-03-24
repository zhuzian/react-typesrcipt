const CracoLessPlugin = require('craco-less')

const modifyVars = require('./lessVars')

module.exports = {
    // eslint: {
    //     enable: true /* (default value) */,
    //     mode: "extends" /* (default value) */ || "file",
    //     configure: { /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */ },
    //     configure: (eslintConfig, { env, paths }) => { return eslintConfig; },
    //     loaderOptions: { /* Any eslint-loader configuration options: https://github.com/webpack-contrib/eslint-loader. */ },
    //     loaderOptions: (eslintOptions, { env, paths }) => { return eslintOptions; }
    // },
    // babel: {
    //     presets: [],
    //     plugins: [],
    //     loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
    //     loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
    // },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: modifyVars,
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ]
}