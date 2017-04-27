const css = require('browserify-css')
const stringify = require('stringify')

module.exports = {
    entry: 'src/index.js',
    output: {
        dir: 'dist',
        bundle: 'bundle.js'
    },

    packs: [
        function (b) {
            b.transform(css)
             .transform(stringify, {appliesTo: {
                includeExtensions: ['.md', '.txt']
             }})
        }
    ]
}
