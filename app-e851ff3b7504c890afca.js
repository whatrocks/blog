webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";function t(e,o,n){var t=a.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function s(e,o,n){return a.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=s;var a=[{plugin:n("./node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-59298979-1"}}]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---src-templates-blog-post-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-js!./src/templates/blog-post.js"),"component---src-pages-2015-10-26-pseudoclassical-star-wars-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-2015-10-26-pseudoclassical-star-wars-index-js!./src/pages/2015-10-26-pseudoclassical-star-wars/index.js"),"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"meet-von-count.json":n("./node_modules/gatsby-module-loader/index.js?name=path---meet-von-count!./.cache/json/meet-von-count.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["lendup-critters.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---lendup-critters!./.cache/json/lendup-critters.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["alcatraz-challenge-2016-review.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---alcatraz-challenge-2016-review!./.cache/json/alcatraz-challenge-2016-review.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["space-time-travel-with-wormie.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---space-time-travel-with-wormie!./.cache/json/space-time-travel-with-wormie.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["introducing-knerds.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---introducing-knerds!./.cache/json/introducing-knerds.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["terminal-man-live-in-nyc.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---terminal-man-live-in-nyc!./.cache/json/terminal-man-live-in-nyc.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["merlins-advice.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---merlins-advice!./.cache/json/merlins-advice.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["pseudoclassical-star-wars.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---pseudoclassical-star-wars!./.cache/json/pseudoclassical-star-wars.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["2015-10-26-pseudoclassical-star-wars.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---2015-10-26-pseudoclassical-star-wars!./.cache/json/2015-10-26-pseudoclassical-star-wars.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u=n("./node_modules/react/react.js"),c=t(u),i=n("./node_modules/prop-types/index.js"),d=t(i),m=n("./.cache/loader.js"),p=t(m),h=n("./.cache/emitter.js"),j=t(h),f=function(e){var o=e.children;return c.default.createElement("div",null,o())},g=function(e){function o(n){s(this,o);var t=a(this,e.call(this));return t.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},t}return r(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;j.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath)))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,u.createElement)(this.state.pageResources.component,l({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,u.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:f,l({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(c.default.Component);g.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},o.default=g,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),a=t(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=n.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---2015-10-26-pseudoclassical-star-wars!./.cache/json/2015-10-26-pseudoclassical-star-wars.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81166fec3a7b,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/2015-10-26-pseudoclassical-star-wars.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---alcatraz-challenge-2016-review!./.cache/json/alcatraz-challenge-2016-review.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(71460343345447,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/alcatraz-challenge-2016-review.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---introducing-knerds!./.cache/json/introducing-knerds.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xdbb8d03bf484,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/introducing-knerds.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---lendup-critters!./.cache/json/lendup-critters.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x97a6dbf29e4,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/lendup-critters.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---meet-von-count!./.cache/json/meet-von-count.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xfc76cd3e9ace,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/meet-von-count.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---merlins-advice!./.cache/json/merlins-advice.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xd8cb40101ba1,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/merlins-advice.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---pseudoclassical-star-wars!./.cache/json/pseudoclassical-star-wars.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(90852844111857,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/pseudoclassical-star-wars.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---space-time-travel-with-wormie!./.cache/json/space-time-travel-with-wormie.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x643f90e73eef,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/space-time-travel-with-wormie.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---terminal-man-live-in-nyc!./.cache/json/terminal-man-live-in-nyc.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(95064953821696,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/terminal-man-live-in-nyc.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ch/projects/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ch/projects/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ch/projects/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ch/projects/blog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ch/projects/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ch/projects/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/react/react.js"),a=(t(s),n("./.cache/find-page.js")),r=t(a),l=n("./.cache/emitter.js"),u=t(l),c=void 0,i={},d={},m={},p={},h={},j=[],f=[],g={},b=[],y={},x=function(e){return e&&e.default||e},_=void 0,v=!0;_=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(e){k(e,function(){b=b.filter(function(o){return o!==e}),_.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var w=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},R=function(e,o){return g[e]>g[o]?1:g[e]<g[o]?-1:0},k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var t="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];t(function(o,t){p[e]=t,n(o,t)})}},N=function(e,n){h[e]?o.nextTick(function(){n(null,h[e])}):k(e,function(o,t){if(o)n(o);else{var s=x(t());h[e]=s,n(o,s)}})},C=1,P={empty:function(){f=[],g={},y={},b=[],j=[]},addPagesArray:function(e){j=e;var o="";c=(0,r.default)(e,o)},addDevRequires:function(e){i=e},addProdRequires:function(e){d=e},dequeue:function(e){return f.pop()},enqueue:function(e){if(!j.some(function(o){return o.path===e}))return!1;var o=1/C;C+=1,g[e]?g[e]+=1:g[e]=1,P.has(e)||f.unshift(e),f.sort(R);var n=c(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,b.indexOf(n.jsonName)!==-1||p[n.jsonName]||b.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,b.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||b.unshift(n.componentChunkName)),b.sort(w),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:y}},getPages:function(){return{pathArray:f,pathCount:g}},getPage:function(e){return c(e)},has:function(e){return f.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var s;if(n){if(t>=o.length)break;s=o[t++]}else{if(t=o.next(),t.done)break;s=t.value}var a=s;a.unregister()}window.location.reload()})),v=!1;var t=c(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return o.nextTick(function(){n(m[e]),u.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];u.default.emit("onPreLoadPageResources",{path:e});var s=void 0,a=void 0,r=void 0,l=function(){if(s&&a&&(!t.layoutComponentChunkName||r)){m[e]={component:s,json:a,layout:r};var o={component:s,json:a,layout:r};n(o),u.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return N(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,l()}),N(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),a=o,l()}),void(t.layoutComponentChunkName&&N(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),r=o,l()}))},peek:function(e){return f.slice(-1)[0]},length:function(){return f.length},indexOf:function(e){return f.length-f.indexOf(e)-1}};e.exports=P}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"meet-von-count.json",path:"/meet-von-count"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lendup-critters.json",path:"/lendup-critters"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"alcatraz-challenge-2016-review.json",path:"/alcatraz-challenge-2016-review"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"space-time-travel-with-wormie.json",path:"/space-time-travel-with-wormie"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"introducing-knerds.json",path:"/introducing-knerds"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"terminal-man-live-in-nyc.json",path:"/terminal-man-live-in-nyc"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"merlins-advice.json",path:"/merlin's-advice"},{componentChunkName:"component---src-pages-2015-10-26-pseudoclassical-star-wars-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"pseudoclassical-star-wars.json",path:"/pseudoclassical-star-wars"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-2015-10-26-pseudoclassical-star-wars-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-10-26-pseudoclassical-star-wars.json",path:"/2015-10-26-pseudoclassical-star-wars/"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],a=function(){var e=o();e&&(s.push(e),n(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a=n("./.cache/api-runner-browser.js"),r=n("./node_modules/react/react.js"),l=t(r),u=n("./node_modules/react-dom/index.js"),c=t(u),i=n("./node_modules/react-router-dom/index.js"),d=n("./node_modules/react-router-scroll/lib/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=t(m),h=n("./node_modules/domready/ready.js"),j=t(h),f=n("./.cache/emitter.js"),g=t(f),b=n("./.cache/pages.json"),y=t(b),x=n("./.cache/component-renderer.js"),_=t(x),v=n("./.cache/async-requires.js"),w=t(v),R=n("./.cache/loader.js"),k=t(R);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=g.default,k.default.addPagesArray(y.default),k.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=k.default,window.matchPath=i.matchPath,(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,a.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===k.default.getPage(e).path&&(g.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){g.default.off("onPostLoadPageResources",o),g.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):g.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t;var u=(0,p.default)();(0,a.apiRunner)("onRouteUpdate",{location:u.location,action:u.action});var m=(0,a.apiRunner)("replaceRouterComponent",{history:u})[0],h=function(e){var o=e.children;return l.default.createElement(i.Router,{history:u},o)};k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,r.createElement)(m?m:h,null,(0,r.createElement)(d.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)((0,i.withRouter)(_.default),{layout:!0,children:function(o){return(0,r.createElement)(i.Route,{render:function(n){e(n.history);var t=o?o:n;return k.default.getPage(t.location.pathname)?(0,r.createElement)(_.default,s({page:!0},t)):(0,r.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,j.default)(function(){return c.default.render(l.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),a=t(s),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,s="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(s,e=function(){for(n.removeEventListener(s,e),a=1;e=o.shift();)e()}),function(e){a?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,a=n.s;n.e=function(t,r){var l=!1,u=!0,c=function(e){r&&(r(n,e),r=null)};return!a&&o&&o[t]?void c(!0):(s(t,function(){l||(l=!0,u?setTimeout(function(){c()}):c())}),void(l||(u=!1,e(function(){l||(l=!0,a?a[t]=void 0:(o||(o={}),o[t]=!0),c(!0))}))))}}t()},"./node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,o){"use strict";e.exports=function(e,o){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,t=e.target;t.parentNode;t=t.parentNode)if("A"===t.nodeName){n=t;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.target.hash)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var s=document.createElement("a");s.href=n.href;var a=document.createElement("a");return a.href=window.location.href,s.host!==a.host||(e.preventDefault(),o(n.getAttribute("href")),!1)})}},"./node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/gatsby-link/index.js"),a=n("./node_modules/gatsby-plugin-catch-links/catch-links.js"),r=t(a);(0,r.default)(window,function(e){(0,s.navigateTo)(e)})},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,o,n){"use strict";o.onRouteUpdate=function(e){var o=e.location;"function"==typeof ga&&(ga("set","page",(o||{}).pathname),ga("send","pageview"))}},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(i===setTimeout)return setTimeout(e,0);if((i===n||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(o){try{return i.call(null,e,0)}catch(o){return i.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(o){try{return d.call(null,e)}catch(o){return d.call(this,e)}}}function r(){j&&p&&(j=!1,p.length?h=p.concat(h):f=-1,h.length&&l())}function l(){if(!j){var e=s(r);j=!0;for(var o=h.length;o;){for(p=h,h=[];++f<o;)p&&p[f].run();f=-1,o=h.length}p=null,j=!1,a(e)}}function u(e,o){this.fun=e,this.array=o}function c(){}var i,d,m=e.exports={};!function(){try{i="function"==typeof setTimeout?setTimeout:n}catch(e){i=n}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var p,h=[],j=!1,f=-1;m.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];h.push(new u(e,o)),1!==h.length||j||s(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=c,m.addListener=c,m.once=c,m.off=c,m.removeListener=c,m.removeAllListeners=c,m.emit=c,m.prependListener=c,m.prependOnceListener=c,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-2015-10-26-pseudoclassical-star-wars-index-js!./src/pages/2015-10-26-pseudoclassical-star-wars/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9f9d6b8d5333,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ch/projects/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ch/projects/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ch/projects/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ch/projects/blog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ch/projects/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ch/projects/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/2015-10-26-pseudoclassical-star-wars/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ch/projects/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ch/projects/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ch/projects/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ch/projects/blog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ch/projects/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ch/projects/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js');
})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ch/projects/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ch/projects/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ch/projects/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ch/projects/blog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ch/projects/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ch/projects/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-js!./src/templates/blog-post.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x620f737b6699,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ch/projects/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ch/projects/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ch/projects/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ch/projects/blog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ch/projects/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ch/projects/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-post.js')})})}}});
//# sourceMappingURL=app-e851ff3b7504c890afca.js.map