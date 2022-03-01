/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <script async src="https://cdn.volument.com/v1/volument.js" onload="volument('e42a09f725')"></script>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('assets/js/plugins.js')}/>
            <script src={withPrefix('assets/js/main.js')}/>
            
        </React.Fragment>
    ]);

};
