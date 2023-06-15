/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [plugins.provide({ process: "process/browser" })],
    resolve: {
      // fallback: {
      //   assert: false,
      //   http: false,
      //   os: false,
      //   https: false,
      //   url: false,
      //   util: false,
      //   domain: false,
      //   path: false,
      //   fs: false,
      //   stream: false,
      //   timers: false,
      // },
      fallback: {
        fs: false,
        timers: path.resolve("./node_modules/timers-browserify"),
        stream: path.resolve("./node_modules/stream-browserify"),
        assert: path.resolve("./node_modules/assert/"),
        util: path.resolve("./node_modules/util/"),
        http: path.resolve("./node_modules/stream-http"),
        https: path.resolve("./node_modules/https-browserify"),
        os: path.resolve("./node_modules/os-browserify/browser"),
        buffer: path.resolve("./node_modules/buffer/"),
        url: false,
        domain: false,
        path: false,
      },
    },
  })
}
