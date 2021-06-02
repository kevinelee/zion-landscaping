require("./src/css/style.css");
const React = require("react")
const { ParallaxProvider } = require("react-scroll-parallax")


// eslint-disable-next-line react/display-name
exports.wrapRootElement = ({ element }) => {
    return <ParallaxProvider>{element}</ParallaxProvider>
}