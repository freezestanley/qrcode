(window.webpackJsonpother=window.webpackJsonpother||[]).push([["vendor"],{
/***/"17x9":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){var r=n(/*! react-is */"TOwV");
// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
e.exports=n(/*! ./factoryWithTypeCheckers */"sHIV")(r.isElement,!0)},
/***/"2mql":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";var r=n(/*! react-is */"TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */function getStatics(e){return r.isMemo(e)?i:l[e.$$typeof]||o}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,s=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function hoistNonReactStatics(e,t,n){if("string"!==typeof t){
// don't hoist over string (html) components
if(f){var r=p(t);r&&r!==f&&hoistNonReactStatics(e,r,n)}var o=s(t);c&&(o=o.concat(c(t)));for(var i=getStatics(e),l=getStatics(t),m=0;m<o.length;++m){var h=o[m];if(!a[h]&&(!n||!n[h])&&(!l||!l[h])&&(!i||!i[h])){var v=d(t,h);try{
// Avoid failures from read-only properties
u(e,h,v)}catch(g){}}}}return e}},
/***/"55Ip":
/*!****************************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js + 10 modules ***!
  \****************************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, NavLink, MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/inheritsLoose.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/gud/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-is/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/node_modules/path-to-regexp/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/function(e,t,n){"use strict";
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}
// EXTERNAL MODULE: ./node_modules/react/index.js
n.r(t);var r=n("q1tI"),o=/* */n.n(r),a=n("17x9"),i=/* */n.n(a);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(e){return"/"===e.charAt(0)}
// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}
// This implementation is based heavily on node's url.parse
/* harmony default export */var l=function resolvePathname(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],a=e&&isAbsolute(e),i=t&&isAbsolute(t),l=a||i;if(e&&isAbsolute(e)?
// to is absolute
o=r:r.length&&(
// to is relative, drop the filename
o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var s=0,c=o.length;c>=0;c--){var d=o[c];"."===d?spliceOne(o,c):".."===d?(spliceOne(o,c),s++):s&&(spliceOne(o,c),s--)}if(!l)for(;s--;s)o.unshift("..");!l||""===o[0]||o[0]&&isAbsolute(o[0])||o.unshift("");var p=o.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p};
// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}
/* harmony default export */var u=function valueEqual(e,t){
// Test for strict equality first.
if(e===t)return!0;
// Otherwise, if either of them == null they are not equal.
if(null==e||null==t)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every((function(e,n){return valueEqual(e,t[n])}));if("object"===typeof e||"object"===typeof t){var n=value_equal_valueOf(e),r=value_equal_valueOf(t);return n!==e||r!==t?valueEqual(n,r):Object.keys(Object.assign({},e,t)).every((function(n){return valueEqual(e[n],t[n])}))}return!1},s=!1;
// CONCATENATED MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
/* harmony default export */var c=function warning(e,t){if(!s){if(e)return;var n="Warning: "+t;"undefined"!==typeof console&&console.warn(n);try{throw Error(n)}catch(r){}}},d=!1,p="Invariant failed";
// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
/* harmony default export */var f=function invariant(e,t){if(!e)throw d?new Error(p):new Error(p+": "+(t||""))};
// CONCATENATED MODULE: ./node_modules/history/esm/history.js
function addLeadingSlash(e){return"/"===e.charAt(0)?e:"/"+e}function stripLeadingSlash(e){return"/"===e.charAt(0)?e.substr(1):e}function hasBasename(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}function stripBasename(e,t){return hasBasename(e,t)?e.substr(t.length):e}function stripTrailingSlash(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function createPath(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function createLocation(e,t,n,r){var o;"string"===typeof e?(
// Two-arg form: push(path, state)
o=function parsePath(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(
// One-arg form: push(location)
void 0===(o=_extends({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(a){throw a instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):a}return n&&(o.key=n),r?
// Resolve incomplete/relative pathname relative to current location.
o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=l(o.pathname,r.pathname)):o.pathname=r.pathname:
// When there is no prior location and pathname is empty, set it to /
o.pathname||(o.pathname="/"),o}function createTransitionManager(){var e=null;var t=[];return{setPrompt:function setPrompt(t){return c(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function confirmTransitionTo(t,n,r,o){
// TODO: If another transition starts while we're still confirming
// the previous one, we may end up in a weird state. Figure out the
// best way to handle this.
if(null!=e){var a="function"===typeof e?e(t,n):e;"string"===typeof a?"function"===typeof r?r(a,o):(c(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):
// Return false from a transition hook to cancel the transition.
o(!1!==a)}else o(!0)},appendListener:function appendListener(e){var n=!0;function listener(){n&&e.apply(void 0,arguments)}return t.push(listener),function(){n=!1,t=t.filter((function(e){return e!==listener}))}},notifyListeners:function notifyListeners(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function getConfirmation(e,t){t(window.confirm(e));// eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */var h="popstate",v="hashchange";function getHistoryState(){try{return window.history.state||{}}catch(e){
// IE 11 sometimes throws when accessing window.history.state
// See https://github.com/ReactTraining/history/pull/289
return{}}}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */function createBrowserHistory(e){void 0===e&&(e={}),m||f(!1,"Browser history needs a DOM");var t=window.history,n=function supportsHistory(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */(),r=!function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident")}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */(),o=e,a=o.forceRefresh,i=void 0!==a&&a,l=o.getUserConfirmation,u=void 0===l?getConfirmation:l,s=o.keyLength,d=void 0===s?6:s,p=e.basename?stripTrailingSlash(addLeadingSlash(e.basename)):"";function getDOMLocation(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return c(!p||hasBasename(a,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+p+'".'),p&&(a=stripBasename(a,p)),createLocation(a,r,n)}function createKey(){return Math.random().toString(36).substr(2,d)}var g=createTransitionManager();function setState(e){_extends(w,e),w.length=t.length,g.notifyListeners(w.location,w.action)}function handlePopState(e){
// Ignore extraneous popstate events in WebKit.
(
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
function isExtraneousPopstateEvent(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||handlePop(getDOMLocation(e.state))}function handleHashChange(){handlePop(getDOMLocation(getHistoryState()))}var y=!1;function handlePop(e){if(y)y=!1,setState();else{g.confirmTransitionTo(e,"POP",u,(function(t){t?setState({action:"POP",location:e}):function revertPop(e){var t=w.location,n=C.indexOf(t.key);// TODO: We could probably make this more reliable by
// keeping a list of keys we've seen in sessionStorage.
// Instead, we just default to 0 for keys we don't know.
-1===n&&(n=0);var r=C.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(y=!0,go(o))}(e)}))}}var b=getDOMLocation(getHistoryState()),C=[b.key];// Public interface
function createHref(e){return p+createPath(e)}function go(e){t.go(e)}var T=0;function checkDOMListeners(e){1===(T+=e)&&1===e?(window.addEventListener(h,handlePopState),r&&window.addEventListener(v,handleHashChange)):0===T&&(window.removeEventListener(h,handlePopState),r&&window.removeEventListener(v,handleHashChange))}var k=!1;var w={length:t.length,action:"POP",location:b,createHref:createHref,push:function push(e,r){c(!("object"===typeof e&&void 0!==e.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var o=createLocation(e,r,createKey(),w.location);g.confirmTransitionTo(o,"PUSH",u,(function(e){if(e){var r=createHref(o),a=o.key,l=o.state;if(n)if(t.pushState({key:a,state:l},null,r),i)window.location.href=r;else{var u=C.indexOf(w.location.key),s=C.slice(0,u+1);s.push(o.key),C=s,setState({action:"PUSH",location:o})}else c(void 0===l,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}}))},replace:function replace(e,r){c(!("object"===typeof e&&void 0!==e.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var o=createLocation(e,r,createKey(),w.location);g.confirmTransitionTo(o,"REPLACE",u,(function(e){if(e){var r=createHref(o),a=o.key,l=o.state;if(n)if(t.replaceState({key:a,state:l},null,r),i)window.location.replace(r);else{var u=C.indexOf(w.location.key);-1!==u&&(C[u]=o.key),setState({action:"REPLACE",location:o})}else c(void 0===l,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}}))},go:go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},block:function block(e){void 0===e&&(e=!1);var t=g.setPrompt(e);return k||(checkDOMListeners(1),k=!0),function(){return k&&(k=!1,checkDOMListeners(-1)),t()}},listen:function listen(e){var t=g.appendListener(e);return checkDOMListeners(1),function(){checkDOMListeners(-1),t()}}};return w}var g="hashchange",y={hashbang:{encodePath:function encodePath(e){return"!"===e.charAt(0)?e:"!/"+stripLeadingSlash(e)},decodePath:function decodePath(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function getHashPath(){
// We can't use window.location.hash here because it's not
// consistent across browsers - Firefox will pre-decode it!
var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function replaceHashPath(e){window.location.replace(stripHash(window.location.href)+"#"+e)}function createHashHistory(e){void 0===e&&(e={}),m||f(!1,"Hash history needs a DOM");var t=window.history,n=function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox")}(),r=e,o=r.getUserConfirmation,a=void 0===o?getConfirmation:o,i=r.hashType,l=void 0===i?"slash":i,u=e.basename?stripTrailingSlash(addLeadingSlash(e.basename)):"",s=y[l],d=s.encodePath,p=s.decodePath;function getDOMLocation(){var e=p(getHashPath());return c(!u||hasBasename(e,u),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+u+'".'),u&&(e=stripBasename(e,u)),createLocation(e)}var h=createTransitionManager();function setState(e){_extends(x,e),x.length=t.length,h.notifyListeners(x.location,x.action)}var v=!1,b=null;function handleHashChange(){var e=getHashPath(),t=d(e);if(e!==t)
// Ensure we always have a properly-encoded hash.
replaceHashPath(t);else{var n=getDOMLocation(),r=x.location;if(!v&&function locationsAreEqual$$1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash}(r,n))return;// A hashchange doesn't always == location change.
if(b===createPath(n))return;// Ignore this change; we already setState in push/replace.
b=null,function handlePop(e){if(v)v=!1,setState();else{h.confirmTransitionTo(e,"POP",a,(function(t){t?setState({action:"POP",location:e}):function revertPop(e){var t=x.location,n=w.lastIndexOf(createPath(t));// TODO: We could probably make this more reliable by
// keeping a list of paths we've seen in sessionStorage.
// Instead, we just default to 0 for paths we don't know.
-1===n&&(n=0);var r=w.lastIndexOf(createPath(e));-1===r&&(r=0);var o=n-r;o&&(v=!0,go(o))}// Ensure the hash is encoded properly before doing anything else.
(e)}))}}(n)}}var C=getHashPath(),T=d(C);C!==T&&replaceHashPath(T);var k=getDOMLocation(),w=[createPath(k)];function go(e){c(n,"Hash history go(n) causes a full page reload in this browser"),t.go(e)}var S=0;function checkDOMListeners(e){1===(S+=e)&&1===e?window.addEventListener(g,handleHashChange):0===S&&window.removeEventListener(g,handleHashChange)}var E=!1;var x={length:t.length,action:"POP",location:k,createHref:// Public interface
function createHref(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=stripHash(window.location.href)),n+"#"+d(u+createPath(e))},push:function push(e,t){c(void 0===t,"Hash history cannot push state; it is ignored");var n=createLocation(e,void 0,void 0,x.location);h.confirmTransitionTo(n,"PUSH",a,(function(e){if(e){var t=createPath(n),r=d(u+t);if(getHashPath()!==r){
// We cannot tell if a hashchange was caused by a PUSH, so we'd
// rather setState here and ignore the hashchange. The caveat here
// is that other hash histories in the page will consider it a POP.
b=t,function pushHashPath(e){window.location.hash=e}(r);var o=w.lastIndexOf(createPath(x.location)),a=w.slice(0,o+1);a.push(t),w=a,setState({action:"PUSH",location:n})}else c(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),setState()}}))},replace:function replace(e,t){c(void 0===t,"Hash history cannot replace state; it is ignored");var n=createLocation(e,void 0,void 0,x.location);h.confirmTransitionTo(n,"REPLACE",a,(function(e){if(e){var t=createPath(n),r=d(u+t);getHashPath()!==r&&(
// We cannot tell if a hashchange was caused by a REPLACE, so we'd
// rather setState here and ignore the hashchange. The caveat here
// is that other hash histories in the page will consider it a POP.
b=t,replaceHashPath(r));var o=w.indexOf(createPath(x.location));-1!==o&&(w[o]=t),setState({action:"REPLACE",location:n})}}))},go:go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},block:function block(e){void 0===e&&(e=!1);var t=h.setPrompt(e);return E||(checkDOMListeners(1),E=!0),function(){return E&&(E=!1,checkDOMListeners(-1)),t()}},listen:function listen(e){var t=h.appendListener(e);return checkDOMListeners(1),function(){checkDOMListeners(-1),t()}}};return x}function clamp(e,t,n){return Math.min(Math.max(e,t),n)}
/**
 * Creates a history object that stores locations in memory.
 */
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var b=n("VbXa"),T=/* */n.n(b),k=n("fZtv"),w=/* */n.n(k),S=1073741823;var E=o.a.createContext||function createReactContext(e,t){var n,o,a="__create-react-context-"+w()()+"__",l=
/* */
function(e){function Provider(){var t;return(t=e.apply(this,arguments)||this).emitter=function createEventEmitter(e){var t=[];return{on:function on(e){t.push(e)},off:function off(e){t=t.filter((function(t){return t!==e}))},get:function get(){return e},set:function set(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}(t.props.value),t}T()(Provider,e);var n=Provider.prototype;return n.getChildContext=function getChildContext(){var e;return(e={})[a]=this.emitter,e},n.componentWillReceiveProps=function componentWillReceiveProps(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;!function objectIs(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}(r,o)?(n="function"===typeof t?t(r,o):S,c((n&S)===n,"calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: "+n),0!==(n|=0)&&this.emitter.set(e.value,n)):n=0}},n.render=function render(){return this.props.children},Provider}(r.Component);l.childContextTypes=((n={})[a]=i.a.object.isRequired,n);var u=
/* */
function(t){function Consumer(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!==((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}T()(Consumer,t);var n=Consumer.prototype;return n.componentWillReceiveProps=function componentWillReceiveProps(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?S:t},n.componentDidMount=function componentDidMount(){this.context[a]&&this.context[a].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?S:e},n.componentWillUnmount=function componentWillUnmount(){this.context[a]&&this.context[a].off(this.onUpdate)},n.getValue=function getValue(){return this.context[a]?this.context[a].get():e},n.render=function render(){return function onlyChild(e){return Array.isArray(e)?e[0]:e}(this.props.children)(this.state.value)},Consumer}(r.Component);return u.contextTypes=((o={})[a]=i.a.object,o),{Provider:l,Consumer:u}},x=n("8tgM"),P=/* */n.n(x),R=n("TOwV");
/* harmony default export */
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var I=n("2mql"),D=/* */n.n(I),F=
/* */
function createNamedContext(e){var t=E();return t.displayName=e,t}("Router"),O=
/* */
function(e){function Router(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},// This is a bit of a hack. We have to start listening for location
// changes here in the constructor in case there are any <Redirect>s
// on the initial render. If there are, they will replace/push when
// they mount and since cDM fires in children before parents, we may
// get a new location before the <Router> is mounted.
n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}_inheritsLoose(Router,e),Router.computeRootMatch=function computeRootMatch(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var t=Router.prototype;return t.componentDidMount=function componentDidMount(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},t.componentWillUnmount=function componentWillUnmount(){this.unlisten&&this.unlisten()},t.render=function render(){return o.a.createElement(F.Provider,{children:this.props.children||null,value:{history:this.props.history,location:this.state.location,match:Router.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}})},Router}(o.a.Component);O.propTypes={children:i.a.node,history:i.a.object.isRequired,staticContext:i.a.object},O.prototype.componentDidUpdate=function(e){c(e.history===this.props.history,"You cannot change <Router history>")};
/**
 * The public API for a <Router> that stores location in memory.
 */
var N=
/* */
function(e){function MemoryRouter(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=function createMemoryHistory(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,a=t.initialIndex,i=void 0===a?0:a,l=t.keyLength,u=void 0===l?6:l,s=createTransitionManager();function setState(e){_extends(m,e),m.length=m.entries.length,s.notifyListeners(m.location,m.action)}function createKey(){return Math.random().toString(36).substr(2,u)}var d=clamp(i,0,o.length-1),p=o.map((function(e){return createLocation(e,void 0,"string"===typeof e?createKey():e.key||createKey())})),f=createPath;function go(e){var t=clamp(m.index+e,0,m.entries.length-1),r=m.entries[t];s.confirmTransitionTo(r,"POP",n,(function(e){e?setState({action:"POP",location:r,index:t}):
// Mimic the behavior of DOM histories by
// causing a render after a cancelled POP.
setState()}))}var m={length:p.length,action:"POP",location:p[d],index:d,entries:p,createHref:f,push:function push(e,t){c(!("object"===typeof e&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r=createLocation(e,t,createKey(),m.location);s.confirmTransitionTo(r,"PUSH",n,(function(e){if(e){var t=m.index+1,n=m.entries.slice(0);n.length>t?n.splice(t,n.length-t,r):n.push(r),setState({action:"PUSH",location:r,index:t,entries:n})}}))},replace:function replace(e,t){c(!("object"===typeof e&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r=createLocation(e,t,createKey(),m.location);s.confirmTransitionTo(r,"REPLACE",n,(function(e){e&&(m.entries[m.index]=r,setState({action:"REPLACE",location:r}))}))},go:go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},canGo:function canGo(e){var t=m.index+e;return t>=0&&t<m.entries.length},block:function block(e){return void 0===e&&(e=!1),s.setPrompt(e)},listen:function listen(e){return s.appendListener(e)}};return m}(t.props),t}return _inheritsLoose(MemoryRouter,e),MemoryRouter.prototype.render=function render(){return o.a.createElement(O,{history:this.history,children:this.props.children})},MemoryRouter}(o.a.Component);N.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node},N.prototype.componentDidMount=function(){c(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")};var _=
/* */
function(e){function Lifecycle(){return e.apply(this,arguments)||this}_inheritsLoose(Lifecycle,e);var t=Lifecycle.prototype;return t.componentDidMount=function componentDidMount(){this.props.onMount&&this.props.onMount.call(this,this)},t.componentDidUpdate=function componentDidUpdate(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},t.componentWillUnmount=function componentWillUnmount(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},t.render=function render(){return null},Lifecycle}(o.a.Component);
/**
 * The public API for prompting the user before navigating away from a screen.
 */function Prompt(e){var t=e.message,n=e.when,r=void 0===n||n;return o.a.createElement(F.Consumer,null,(function(e){if(e||f(!1,"You should not use <Prompt> outside a <Router>"),!r||e.staticContext)return null;var n=e.history.block;return o.a.createElement(_,{onMount:function onMount(e){e.release=n(t)},onUpdate:function onUpdate(e,r){r.message!==t&&(e.release(),e.release=n(t))},onUnmount:function onUnmount(e){e.release()},message:t})}))}var L=i.a.oneOfType([i.a.func,i.a.string]);Prompt.propTypes={when:i.a.bool,message:L.isRequired};var M={},U=1e4,A=0;
/**
 * Public API for generating a URL pathname from a path and parameters.
 */
function generatePath(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function compilePath(e){if(M[e])return M[e];var t=P.a.compile(e);return A<U&&(M[e]=t,A++),t}(e)(t,{pretty:!0})}
/**
 * The public API for navigating programmatically with a component.
 */function Redirect(e){var t=e.computedMatch,n=e.to,r=e.push,a=void 0!==r&&r;return o.a.createElement(F.Consumer,null,(function(e){e||f(!1,"You should not use <Redirect> outside a <Router>");var r=e.history,i=e.staticContext,l=a?r.push:r.replace,s=createLocation(t?"string"===typeof n?generatePath(n,t.params):_extends({},n,{pathname:generatePath(n.pathname,t.params)}):n);// When rendering in a static context,
// set the new location immediately.
return i?(l(s),null):o.a.createElement(_,{onMount:function onMount(){l(s)},onUpdate:function onUpdate(e,t){var n=createLocation(t.to);(function locationsAreEqual(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&u(e.state,t.state)})(n,_extends({},s,{key:n.key}))||l(s)},to:n})}))}Redirect.propTypes={push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired};var H={},W=1e4,z=0;
/**
 * Public API for matching a URL pathname to a path.
 */
function matchPath(e,t){void 0===t&&(t={}),("string"===typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,l=void 0!==i&&i,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function compilePath$1(e,t){var n=""+t.end+t.strict+t.sensitive,r=H[n]||(H[n]={});if(r[e])return r[e];var o=[],a={regexp:P()(e,o,t),keys:o};return z<W&&(r[e]=a,z++),a}(n,{end:a,strict:l,sensitive:s}),o=r.regexp,i=r.keys,u=o.exec(e);if(!u)return null;var c=u[0],d=u.slice(1),p=e===c;return a&&!p?null:{path:n,
// the path used to match
url:"/"===n&&""===c?"/":c,
// the matched portion of the URL
isExact:p,
// whether or not we matched exactly
params:i.reduce((function(e,t,n){return e[t.name]=d[n],e}),{})}}),null)}function isEmptyChildren(e){return 0===o.a.Children.count(e)}function evalChildrenDev(e,t,n){var r=e(t);return c(void 0!==r,"You returned `undefined` from the `children` function of <Route"+(n?' path="'+n+'"':"")+">, but you should have returned a React element or `null`"),r||null}
/**
 * The public API for matching a single path and rendering.
 */var j=
/* */
function(e){function Route(){return e.apply(this,arguments)||this}return _inheritsLoose(Route,e),Route.prototype.render=function render(){var e=this;return o.a.createElement(F.Consumer,null,(function(t){t||f(!1,"You should not use <Route> outside a <Router>");var n=e.props.location||t.location,r=_extends({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?matchPath(n.pathname,e.props):t.match}),a=e.props,i=a.children,l=a.component,u=a.render;// Preact uses an empty array as children by
// default, so use null if that's the case.
return Array.isArray(i)&&0===i.length&&(i=null),o.a.createElement(F.Provider,{value:r},r.match?i?"function"===typeof i?evalChildrenDev(i,r,e.props.path):i:l?o.a.createElement(l,r):u?u(r):null:"function"===typeof i?evalChildrenDev(i,r,e.props.path):null)}))},Route}(o.a.Component);function react_router_addLeadingSlash(e){return"/"===e.charAt(0)?e:"/"+e}function react_router_stripBasename(e,t){if(!e)return t;var n=react_router_addLeadingSlash(e);return 0!==t.pathname.indexOf(n)?t:_extends({},t,{pathname:t.pathname.substr(n.length)})}function createURL(e){return"string"===typeof e?e:createPath(e)}function staticHandler(e){return function(){f(!1,"You cannot %s with <StaticRouter>",e)}}function noop(){}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */j.propTypes={children:i.a.oneOfType([i.a.func,i.a.node]),component:function component(e,t){if(e[t]&&!Object(R.isValidElementType)(e[t]))return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component")},exact:i.a.bool,location:i.a.object,path:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),render:i.a.func,sensitive:i.a.bool,strict:i.a.bool},j.prototype.componentDidMount=function(){c(!(this.props.children&&!isEmptyChildren(this.props.children)&&this.props.component),"You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored"),c(!(this.props.children&&!isEmptyChildren(this.props.children)&&this.props.render),"You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored"),c(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored")},j.prototype.componentDidUpdate=function(e){c(!(this.props.location&&!e.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),c(!(!this.props.location&&e.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')};var B=
/* */
function(e){function StaticRouter(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handlePush=function(e){return t.navigateTo(e,"PUSH")},t.handleReplace=function(e){return t.navigateTo(e,"REPLACE")},t.handleListen=function(){return noop},t.handleBlock=function(){return noop},t}_inheritsLoose(StaticRouter,e);var t=StaticRouter.prototype;return t.navigateTo=function navigateTo(e,t){var n=this.props,r=n.basename,o=void 0===r?"":r,a=n.context,i=void 0===a?{}:a;i.action=t,i.location=function addBasename(e,t){return e?_extends({},t,{pathname:react_router_addLeadingSlash(e)+t.pathname}):t}(o,createLocation(e)),i.url=createURL(i.location)},t.render=function render(){var e=this.props,t=e.basename,n=void 0===t?"":t,r=e.context,a=void 0===r?{}:r,i=e.location,l=void 0===i?"/":i,u=_objectWithoutPropertiesLoose(e,["basename","context","location"]),s={createHref:function createHref(e){return react_router_addLeadingSlash(n+createURL(e))},action:"POP",location:react_router_stripBasename(n,createLocation(l)),push:this.handlePush,replace:this.handleReplace,go:staticHandler("go"),goBack:staticHandler("goBack"),goForward:staticHandler("goForward"),listen:this.handleListen,block:this.handleBlock};return o.a.createElement(O,_extends({},u,{history:s,staticContext:a}))},StaticRouter}(o.a.Component);B.propTypes={basename:i.a.string,context:i.a.object,location:i.a.oneOfType([i.a.string,i.a.object])},B.prototype.componentDidMount=function(){c(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")};
/**
 * The public API for rendering the first <Route> that matches.
 */
var V=
/* */
function(e){function Switch(){return e.apply(this,arguments)||this}return _inheritsLoose(Switch,e),Switch.prototype.render=function render(){var e=this;return o.a.createElement(F.Consumer,null,(function(t){t||f(!1,"You should not use <Switch> outside a <Router>");var n,r,a=e.props.location||t.location;// We use React.Children.forEach instead of React.Children.toArray().find()
// here because toArray adds keys to all child elements and we do not want
// to trigger an unmount/remount for two <Route>s that render the same
// component at different URLs.
return o.a.Children.forEach(e.props.children,(function(e){if(null==r&&o.a.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?matchPath(a.pathname,_extends({},e.props,{path:i})):t.match}})),r?o.a.cloneElement(n,{location:a,computedMatch:r}):null}))},Switch}(o.a.Component);
/**
 * A public higher-order component to access the imperative API
 */
function withRouter(e){var t="withRouter("+(e.displayName||e.name)+")",n=function C(n){var r=n.wrappedComponentRef,a=_objectWithoutPropertiesLoose(n,["wrappedComponentRef"]);return o.a.createElement(F.Consumer,null,(function(n){return n||f(!1,"You should not use <"+t+" /> outside a <Router>"),o.a.createElement(e,_extends({},a,n,{ref:r}))}))};return n.displayName=t,n.WrappedComponent=e,n.propTypes={wrappedComponentRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object])},D()(n,e)}V.propTypes={children:i.a.node,location:i.a.object},V.prototype.componentDidUpdate=function(e){c(!(this.props.location&&!e.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),c(!(!this.props.location&&e.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')};var $=o.a.useContext;function useHistory(){return"function"!==typeof $&&f(!1,"You must use React >= 16.8 in order to use useHistory()"),$(F).history}function useLocation(){return"function"!==typeof $&&f(!1,"You must use React >= 16.8 in order to use useLocation()"),$(F).location}function useParams(){"function"!==typeof $&&f(!1,"You must use React >= 16.8 in order to use useParams()");var e=$(F).match;return e?e.params:{}}function useRouteMatch(e){return"function"!==typeof $&&f(!1,"You must use React >= 16.8 in order to use useRouteMatch()"),e?matchPath(useLocation().pathname,e):$(F).match}if("undefined"!==typeof window){var q=window,Q={cjs:"CommonJS",esm:"ES modules",umd:"UMD"};if(q.__react_router_build__&&"esm"!==q.__react_router_build__){var Y=Q[q.__react_router_build__];// TODO: Add link to article that explains in detail how to avoid
// loading 2 different builds.
throw new Error("You are loading the "+Q.esm+" build of React Router on a page that is already running the "+Y+" build, so things won't work right.")}q.__react_router_build__="esm"}
//# sourceMappingURL=react-router.js.map
// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
/* harmony export (binding) */n.d(t,"BrowserRouter",(function(){return K})),
/* harmony export (binding) */n.d(t,"HashRouter",(function(){return G})),
/* harmony export (binding) */n.d(t,"Link",(function(){return ne})),
/* harmony export (binding) */n.d(t,"NavLink",(function(){return le})),
/* concated harmony reexport MemoryRouter */n.d(t,"MemoryRouter",(function(){return N})),
/* concated harmony reexport Prompt */n.d(t,"Prompt",(function(){return Prompt})),
/* concated harmony reexport Redirect */n.d(t,"Redirect",(function(){return Redirect})),
/* concated harmony reexport Route */n.d(t,"Route",(function(){return j})),
/* concated harmony reexport Router */n.d(t,"Router",(function(){return O})),
/* concated harmony reexport StaticRouter */n.d(t,"StaticRouter",(function(){return B})),
/* concated harmony reexport Switch */n.d(t,"Switch",(function(){return V})),
/* concated harmony reexport __RouterContext */n.d(t,"__RouterContext",(function(){return F})),
/* concated harmony reexport generatePath */n.d(t,"generatePath",(function(){return generatePath})),
/* concated harmony reexport matchPath */n.d(t,"matchPath",(function(){return matchPath})),
/* concated harmony reexport useHistory */n.d(t,"useHistory",(function(){return useHistory})),
/* concated harmony reexport useLocation */n.d(t,"useLocation",(function(){return useLocation})),
/* concated harmony reexport useParams */n.d(t,"useParams",(function(){return useParams})),
/* concated harmony reexport useRouteMatch */n.d(t,"useRouteMatch",(function(){return useRouteMatch})),
/* concated harmony reexport withRouter */n.d(t,"withRouter",(function(){return withRouter}));
/**
 * The public API for a <Router> that uses HTML5 history.
 */
var K=
/* */
function(e){function BrowserRouter(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=createBrowserHistory(t.props),t}return _inheritsLoose(BrowserRouter,e),BrowserRouter.prototype.render=function render(){return o.a.createElement(O,{history:this.history,children:this.props.children})},BrowserRouter}(o.a.Component);K.propTypes={basename:i.a.string,children:i.a.node,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number},K.prototype.componentDidMount=function(){c(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")};
/**
 * The public API for a <Router> that uses window.location.hash.
 */
var G=
/* */
function(e){function HashRouter(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=createHashHistory(t.props),t}return _inheritsLoose(HashRouter,e),HashRouter.prototype.render=function render(){return o.a.createElement(O,{history:this.history,children:this.props.children})},HashRouter}(o.a.Component);G.propTypes={basename:i.a.string,children:i.a.node,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"])},G.prototype.componentDidMount=function(){c(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")};var X=function resolveToLocation(e,t){return"function"===typeof e?e(t):e},J=function normalizeToLocation(e,t){return"string"===typeof e?createLocation(e,null,null,t):e},Z=function forwardRefShim(e){return e},ee=o.a.forwardRef;"undefined"===typeof ee&&(ee=Z);var te=ee((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=_objectWithoutPropertiesLoose(e,["innerRef","navigate","onClick"]),l=i.target,u=_extends({},i,{onClick:function onClick(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||// onClick prevented default
0!==e.button||// ignore everything but left clicks
l&&"_self"!==l||function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});// React 15 compat
return u.ref=Z!==ee&&t||n,o.a.createElement("a",u)}));te.displayName="LinkAnchor";
/**
 * The public API for rendering a history-aware <a>.
 */
var ne=ee((function(e,t){var n=e.component,r=void 0===n?te:n,a=e.replace,i=e.to,l=e.innerRef,u=_objectWithoutPropertiesLoose(e,["component","replace","to","innerRef"]);return o.a.createElement(F.Consumer,null,(function(e){e||f(!1,"You should not use <Link> outside a <Router>");var n=e.history,s=J(X(i,e.location),e.location),c=s?n.createHref(s):"",d=_extends({},u,{href:c,navigate:function navigate(){var t=X(i,e.location);(a?n.replace:n.push)(t)}});// React 15 compat
return Z!==ee?d.ref=t||l:d.innerRef=l,o.a.createElement(r,d)}))})),re=i.a.oneOfType([i.a.string,i.a.object,i.a.func]),oe=i.a.oneOfType([i.a.string,i.a.func,i.a.shape({current:i.a.any})]);ne.displayName="Link",ne.propTypes={innerRef:oe,onClick:i.a.func,replace:i.a.bool,target:i.a.string,to:re.isRequired};var ae=function forwardRefShim(e){return e},ie=o.a.forwardRef;"undefined"===typeof ie&&(ie=ae);
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var le=ie((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,a=e.activeClassName,i=void 0===a?"active":a,l=e.activeStyle,u=e.className,s=e.exact,c=e.isActive,d=e.location,p=e.strict,m=e.style,h=e.to,v=e.innerRef,g=_objectWithoutPropertiesLoose(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return o.a.createElement(F.Consumer,null,(function(e){e||f(!1,"You should not use <NavLink> outside a <Router>");var n=d||e.location,a=J(X(h,n),n),y=a.pathname,b=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=b?matchPath(n.pathname,{path:b,exact:s,strict:p}):null,T=!!(c?c(C,n):C),k=T?function joinClassnames(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(u,i):u,w=T?_extends({},m,{},l):m,S=_extends({"aria-current":T&&r||null,className:k,style:w,to:a},g);// React 15 compat
return ae!==ie?S.ref=t||v:S.innerRef=v,o.a.createElement(ne,S)}))}));le.displayName="NavLink";var ue=i.a.oneOf(["page","step","location","date","time","true"]);le.propTypes=_extends({},ne.propTypes,{"aria-current":ue,activeClassName:i.a.string,activeStyle:i.a.object,className:i.a.string,exact:i.a.bool,isActive:i.a.func,location:i.a.object,strict:i.a.bool,style:i.a.object})},
/***/"7Qc+":
/*!*****************************************************************!*\
  !*** ./node_modules/react-router/node_modules/isarray/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};
/***/},
/***/"8tgM":
/*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){var r=n(/*! isarray */"7Qc+")
/**
 * Expose `pathToRegexp`.
 */;e.exports=pathToRegexp,e.exports.parse=parse,e.exports.compile=
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(e,t){return tokensToFunction(parse(e,t),t)}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */,e.exports.tokensToFunction=tokensToFunction,e.exports.tokensToRegExp=tokensToRegExp
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */;var o=new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
"(\\\\.)",
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
"([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */;function parse(e,t){for(var n,r=[],a=0,i=0,l="",u=t&&t.delimiter||"/";null!=(n=o.exec(e));){var s=n[0],c=n[1],d=n.index;
// Ignore already escaped sequences.
if(l+=e.slice(i,d),i=d+s.length,c)l+=c[1];else{var p=e[i],f=n[2],m=n[3],h=n[4],v=n[5],g=n[6],y=n[7];
// Push the current path onto the tokens.
l&&(r.push(l),l="");var b=null!=f&&null!=p&&p!==f,C="+"===g||"*"===g,T="?"===g||"*"===g,k=n[2]||u,w=h||v;r.push({name:m||a++,prefix:f||"",delimiter:k,optional:T,repeat:C,partial:b,asterisk:!!y,pattern:w?escapeGroup(w):y?".*":"[^"+escapeString(k)+"]+?"})}}
// Match any characters still remaining.
return i<e.length&&(l+=e.substr(i)),
// If the path exists, push it onto the end.
l&&r.push(l),r}function encodeURIComponentPretty(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(e,t){
// Compile all the patterns before compilation.
for(
// Compile all the tokens into regexps.
var n=new Array(e.length),o=0;o<e.length;o++)"object"===typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",flags(t)));return function(t,o){for(var a="",i=t||{},l=(o||{}).pretty?encodeURIComponentPretty:encodeURIComponent,u=0;u<e.length;u++){var s=e[u];if("string"!==typeof s){var c,d=i[s.name];if(null==d){if(s.optional){
// Prepend partial segment prefixes.
s.partial&&(a+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(d)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(c=l(d[p]),!n[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");a+=(0===p?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?encodeURI(d).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):l(d),!n[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');a+=s.prefix+c}}else a+=s}return a}}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */function escapeGroup(e){return e.replace(/([=!:$\/()])/g,"\\$1")}
/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */function attachKeys(e,t){return e.keys=t,e}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */function flags(e){return e&&e.sensitive?"":"i"}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(e,t,n){r(t)||(n=/** @type {!Object} */t||n,t=[]);
// Iterate over the tokens and create our regexp string.
for(var o=(n=n||{}).strict,a=!1!==n.end,i="",l=0;l<e.length;l++){var u=e[l];if("string"===typeof u)i+=escapeString(u);else{var s=escapeString(u.prefix),c="(?:"+u.pattern+")";t.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var d=escapeString(n.delimiter||"/"),p=i.slice(-d.length)===d;
// In non-strict mode we allow a slash at the end of match. If the path to
// match already ends with a slash, we remove it for consistency. The slash
// is valid at the end of a path match, not in the middle. This is important
// in non-ending mode, where "/test/" shouldn't match "/test//route".
return o||(i=(p?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),i+=a?"$":o&&p?"":"(?="+d+"|$)",attachKeys(new RegExp("^"+i,flags(n)),t)}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */function pathToRegexp(e,t,n){return r(t)||(n=/** @type {!Object} */t||n,t=[]),n=n||{},e instanceof RegExp?function regexpToRegexp(e,t){
// Use a negative lookahead to match only capturing groups.
var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(e,t)}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */(e,/** @type {!Array} */t):r(e)?function arrayToRegexp(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(pathToRegexp(e[o],t,n).source);return attachKeys(new RegExp("(?:"+r.join("|")+")",flags(n)),t)}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */(/** @type {!Array} */e,/** @type {!Array} */t,n):function stringToRegexp(e,t,n){return tokensToRegExp(parse(e,n),t,n)}(/** @type {string} */e,/** @type {!Array} */t,n)}
/***/},
/***/GXno:
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/** @license React v0.18.0
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){Object.defineProperty(t,"__esModule",{value:!0});
// Helps identify side effects in render-phase lifecycle hooks and setState
// reducers by double invoking them in Strict Mode.
// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
// Gather advanced timing metrics for Profiler subtrees.
// Trace which interactions trigger each commit.
var e=!0,n=0,r=0,o=0;// SSR experiments
// Only used in www builds.
// Only used in www builds.
// Disable javascript: URL strings in href for XSS protection.
// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties
// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
// Experimental React Flare event system and event components support.
// Experimental Host Component support.
// Experimental Scope support.
// New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
// We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a legacy mode compatible version
// For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.
// Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.
// Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md
// Flag to turn event.target and event.currentTarget in ReactNative from a reactTag to a component instance
// Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
t.__interactionsRef=null,// Listener(s) to notify when interactions begin and end.
t.__subscriberRef=null,e&&(t.__interactionsRef={current:new Set},t.__subscriberRef={current:null});var a=null;function onInteractionTraced(e){var t=!1,n=null;if(a.forEach((function(r){try{r.onInteractionTraced(e)}catch(o){t||(t=!0,n=o)}})),t)throw n}function onInteractionScheduledWorkCompleted(e){var t=!1,n=null;if(a.forEach((function(r){try{r.onInteractionScheduledWorkCompleted(e)}catch(o){t||(t=!0,n=o)}})),t)throw n}function onWorkScheduled(e,t){var n=!1,r=null;if(a.forEach((function(o){try{o.onWorkScheduled(e,t)}catch(a){n||(n=!0,r=a)}})),n)throw r}function onWorkStarted(e,t){var n=!1,r=null;if(a.forEach((function(o){try{o.onWorkStarted(e,t)}catch(a){n||(n=!0,r=a)}})),n)throw r}function onWorkStopped(e,t){var n=!1,r=null;if(a.forEach((function(o){try{o.onWorkStopped(e,t)}catch(a){n||(n=!0,r=a)}})),n)throw r}function onWorkCanceled(e,t){var n=!1,r=null;if(a.forEach((function(o){try{o.onWorkCanceled(e,t)}catch(a){n||(n=!0,r=a)}})),n)throw r}e&&(a=new Set),t.unstable_clear=function unstable_clear(n){if(!e)return n();var r=t.__interactionsRef.current;t.__interactionsRef.current=new Set;try{return n()}finally{t.__interactionsRef.current=r}},t.unstable_getCurrent=function unstable_getCurrent(){return e?t.__interactionsRef.current:null},t.unstable_getThreadID=function unstable_getThreadID(){return++o},t.unstable_trace=function unstable_trace(o,a,i){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(!e)return i();var u={__count:1,id:r++,name:o,timestamp:a},s=t.__interactionsRef.current,c=new Set(s);c.add(u),t.__interactionsRef.current=c;var d,p=t.__subscriberRef.current;try{null!==p&&p.onInteractionTraced(u)}finally{try{null!==p&&p.onWorkStarted(c,l)}finally{try{d=i()}finally{t.__interactionsRef.current=s;try{null!==p&&p.onWorkStopped(c,l)}finally{u.__count--,// If no async work was scheduled for this interaction,
// Notify subscribers that it's completed.
null!==p&&0===u.__count&&p.onInteractionScheduledWorkCompleted(u)}}}}return d},t.unstable_wrap=function unstable_wrap(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;if(!e)return r;var a=t.__interactionsRef.current,i=t.__subscriberRef.current;null!==i&&i.onWorkScheduled(a,o),// Update the pending async work count for the current interactions.
// Update after calling subscribers in case of error.
a.forEach((function(e){e.__count++}));var l=!1;function wrapped(){var e=t.__interactionsRef.current;t.__interactionsRef.current=a,i=t.__subscriberRef.current;try{var n;try{null!==i&&i.onWorkStarted(a,o)}finally{try{n=r.apply(void 0,arguments)}finally{t.__interactionsRef.current=e,null!==i&&i.onWorkStopped(a,o)}}return n}finally{l||(
// We only expect a wrapped function to be executed once,
// But in the event that it's executed more than once–
// Only decrement the outstanding interaction counts once.
l=!0,// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
a.forEach((function(e){e.__count--,null!==i&&0===e.__count&&i.onInteractionScheduledWorkCompleted(e)})))}}return wrapped.cancel=function cancel(){i=t.__subscriberRef.current;try{null!==i&&i.onWorkCanceled(a,o)}finally{
// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
a.forEach((function(e){e.__count--,i&&0===e.__count&&i.onInteractionScheduledWorkCompleted(e)}))}},wrapped},t.unstable_subscribe=function unstable_subscribe(n){e&&(a.add(n),1===a.size&&(t.__subscriberRef.current={onInteractionScheduledWorkCompleted:onInteractionScheduledWorkCompleted,onInteractionTraced:onInteractionTraced,onWorkCanceled:onWorkCanceled,onWorkScheduled:onWorkScheduled,onWorkStarted:onWorkStarted,onWorkStopped:onWorkStopped}))},t.unstable_unsubscribe=function unstable_unsubscribe(n){e&&(a.delete(n),0===a.size&&(t.__subscriberRef.current=null))}})()},
/***/J4zp:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){var r=n(/*! ./arrayWithHoles */"wTVA"),o=n(/*! ./iterableToArrayLimit */"m0LI"),a=n(/*! ./nonIterableRest */"wkBT");e.exports=function _slicedToArray(e,t){return r(e)||o(e,t)||a()}},
/***/MGln:
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/** @license React v0.18.0
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){Object.defineProperty(t,"__esModule",{value:!0});var e,n,r,o,a,i=!1,l=!0;if(// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
"undefined"===typeof window||// Check if MessageChannel is supported, too.
"function"!==typeof MessageChannel){
// If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
// fallback to a naive implementation.
var u=null,s=null,_flushCallback=function(){if(null!==u)try{var e=t.unstable_now();u(!0,e),u=null}catch(n){throw setTimeout(_flushCallback,0),n}},c=Date.now();t.unstable_now=function(){return Date.now()-c},e=function(t){null!==u?
// Protect against re-entrancy.
setTimeout(e,0,t):(u=t,setTimeout(_flushCallback,0))},n=function(e,t){s=setTimeout(e,t)},r=function(){clearTimeout(s)},o=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{
// Capture local references to native APIs, in case a polyfill overrides them.
var d=window.performance,p=window.Date,f=window.setTimeout,m=window.clearTimeout;if("undefined"!==typeof console){
// TODO: Scheduler no longer requires these methods to be polyfilled. But
// maybe we want to continue warning if they don't exist, to preserve the
// option to rely on it in the future?
var h=window.requestAnimationFrame,v=window.cancelAnimationFrame;// TODO: Remove fb.me link
"function"!==typeof h&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof v&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===typeof d&&"function"===typeof d.now)t.unstable_now=function(){return d.now()};else{var g=p.now();t.unstable_now=function(){return p.now()-g}}var y=!1,b=null,C=-1,T=5,k=0;
// `isInputPending` is not available. Since we have no way of knowing if
// there's pending input, always yield at the end of the frame.
o=function(){return t.unstable_now()>=k},// Since we yield every frame regardless, `requestPaint` has no effect.
a=function(){},t.unstable_forceFrameRate=function(e){e<0||e>125?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):T=e>0?Math.floor(1e3/e):5};var w=new MessageChannel,S=w.port2;w.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();// Yield after `yieldInterval` ms, regardless of where we are in the vsync
// cycle. This means there's always time remaining at the beginning of
// the message event.
k=e+T;try{b(!0,e)?
// If there's more work, schedule the next message event at the end
// of the preceding one.
S.postMessage(null):(y=!1,b=null)}catch(n){
// If a scheduler task throws, exit the current browser task so the
// error can be observed.
throw S.postMessage(null),n}}else y=!1;// Yielding to the browser will give it a chance to paint, so we can
// reset this.
!1},e=function(e){b=e,y||(y=!0,S.postMessage(null))},n=function(e,n){C=f((function(){e(t.unstable_now())}),n)},r=function(){m(C),C=-1}}function push(e,t){var n=e.length;e.push(t),function siftUp(e,t,n){var r=n;for(;;){var o=Math.floor((r-1)/2),a=e[o];if(!(void 0!==a&&compare(a,t)>0))
// The parent is smaller. Exit.
return;
// The parent is larger. Swap positions.
e[o]=t,e[r]=a,r=o}}(e,t,n)}function peek(e){var t=e[0];return void 0===t?null:t}function pop(e){var t=e[0];if(void 0!==t){var n=e.pop();return n!==t&&(e[0]=n,function siftDown(e,t,n){var r=n,o=e.length;for(;r<o;){var a=2*(r+1)-1,i=e[a],l=a+1,u=e[l];// If the left or right node is smaller, swap with the smaller of those.
if(void 0!==i&&compare(i,t)<0)void 0!==u&&compare(u,i)<0?(e[r]=u,e[l]=t,r=l):(e[r]=i,e[a]=t,r=a);else{if(!(void 0!==u&&compare(u,t)<0))
// Neither child is smaller. Exit.
return;e[r]=u,e[l]=t,r=l}}}(e,n,0)),t}return null}function compare(e,t){
// Compare sort index first, then task id.
var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}
// TODO: Use symbols?
var E=0,x=1,P=2,R=3,I=4,D=5,F=0,O=0,N=l?// $FlowFixMe Flow doesn't know about SharedArrayBuffer
"function"===typeof SharedArrayBuffer?new SharedArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):// $FlowFixMe Flow doesn't know about ArrayBuffer
"function"===typeof ArrayBuffer?new ArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):null:null,_=l&&null!==N?new Int32Array(N):[],L=0,M=1,U=2,A=3;l&&(_[L]=E,// This is maintained with a counter, because the size of the priority queue
// array might include canceled tasks.
_[A]=0,_[M]=0);// Bytes per element is 4
var H=131072,W=524288,z=0,j=null,B=null,V=0,$=1,q=2,Q=3,Y=4,K=5,G=6,X=7,J=8;function logEvent(e){if(null!==B){var t=V;if((V+=e.length)+1>z){if((z*=2)>W)return console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."),void stopLoggingProfilingEvents();var n=new Int32Array(4*z);n.set(B),j=n.buffer,B=n}B.set(e,t)}}function stopLoggingProfilingEvents(){var e=j;return z=0,j=null,B=null,V=0,e}function markTaskStart(e,t){l&&(_[A]++,null!==B&&
// performance.now returns a float, representing milliseconds. When the
// event is logged, it's coerced to an int. Convert to microseconds to
// maintain extra degrees of precision.
logEvent([$,1e3*t,e.id,e.priorityLevel]))}function markTaskCompleted(e,t){l&&(_[L]=E,_[M]=0,_[A]--,null!==B&&logEvent([q,1e3*t,e.id]))}function markTaskYield(e,t){l&&(_[L]=E,_[M]=0,_[U]=0,null!==B&&logEvent([G,1e3*t,e.id,F]))}
/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var Z=-1,ee=250,te=5e3,ne=1e4,re=1073741823,oe=[],ae=[],ie=1,le=!1,ue=null,se=R,ce=!1,de=!1,pe=!1;// Times out immediately
function advanceTimers(e){for(
// Check for tasks that are no longer delayed and add them to the queue.
var t=peek(ae);null!==t;){if(null===t.callback)
// Timer was cancelled.
pop(ae);else{if(!(t.startTime<=e))
// Remaining timers are pending.
return;
// Timer fired. Transfer to the task queue.
pop(ae),t.sortIndex=t.expirationTime,push(oe,t),l&&(markTaskStart(t,e),t.isQueued=!0)}t=peek(ae)}}function handleTimeout(t){if(pe=!1,advanceTimers(t),!de)if(null!==peek(oe))de=!0,e(flushWork);else{var r=peek(ae);null!==r&&n(handleTimeout,r.startTime-t)}}function flushWork(e,n){l&&function markSchedulerUnsuspended(e){l&&null!==B&&logEvent([J,1e3*e,O])}(n),// We'll need a host callback the next time work is scheduled.
de=!1,pe&&(
// We scheduled a timeout but it's no longer needed. Cancel it.
pe=!1,r()),ce=!0;var o=se;try{if(!l)
// No catch in prod codepath.
return workLoop(e,n);try{return workLoop(e,n)}catch(i){if(null!==ue){var a=t.unstable_now();!function markTaskErrored(e,t){l&&(_[L]=E,_[M]=0,_[A]--,null!==B&&logEvent([Q,1e3*t,e.id]))}(ue,a),ue.isQueued=!1}throw i}}finally{if(ue=null,se=o,ce=!1,l)!function markSchedulerSuspended(e){l&&(O++,null!==B&&logEvent([X,1e3*e,O]))}(t.unstable_now())}}function workLoop(e,r){var a,u,s=r;for(advanceTimers(s),ue=peek(oe);null!==ue&&(!i||!le)&&(!(ue.expirationTime>s)||e&&!o());){var c=ue.callback;if(null!==c){ue.callback=null,se=ue.priorityLevel;var d=ue.expirationTime<=s;a=ue,u=s,l&&(F++,_[L]=a.priorityLevel,_[M]=a.id,_[U]=F,null!==B&&logEvent([K,1e3*u,a.id,F]));var p=c(d);s=t.unstable_now(),"function"===typeof p?(ue.callback=p,markTaskYield(ue,s)):(l&&(markTaskCompleted(ue,s),ue.isQueued=!1),ue===peek(oe)&&pop(oe)),advanceTimers(s)}else pop(oe);ue=peek(oe)}// Return whether there's additional work
if(null!==ue)return!0;var f=peek(ae);return null!==f&&n(handleTimeout,f.startTime-s),!1}function timeoutForPriorityLevel(e){switch(e){case x:return Z;case P:return ee;case D:return re;case I:return ne;case R:default:return te}}var fe=a,me=l?{startLoggingProfilingEvents:function startLoggingProfilingEvents(){z=H,j=new ArrayBuffer(4*z),B=new Int32Array(j),V=0},stopLoggingProfilingEvents:stopLoggingProfilingEvents,sharedProfilingBuffer:N}:null;t.unstable_ImmediatePriority=x,t.unstable_UserBlockingPriority=P,t.unstable_NormalPriority=R,t.unstable_IdlePriority=D,t.unstable_LowPriority=I,t.unstable_runWithPriority=function unstable_runWithPriority(e,t){switch(e){case x:case P:case R:case I:case D:break;default:e=R}var n=se;se=e;try{return t()}finally{se=n}},t.unstable_next=function unstable_next(e){var t;switch(se){case x:case P:case R:
// Shift down to normal priority
t=R;break;default:
// Anything lower than normal priority should remain at the current level.
t=se}var n=se;se=t;try{return e()}finally{se=n}},t.unstable_scheduleCallback=function unstable_scheduleCallback(o,a,i){var u,s,c=t.unstable_now();if("object"===typeof i&&null!==i){var d=i.delay;u="number"===typeof d&&d>0?c+d:c,s="number"===typeof i.timeout?i.timeout:timeoutForPriorityLevel(o)}else s=timeoutForPriorityLevel(o),u=c;var p=u+s,f={id:ie++,callback:a,priorityLevel:o,startTime:u,expirationTime:p,sortIndex:-1};return l&&(f.isQueued=!1),u>c?(
// This is a delayed task.
f.sortIndex=u,push(ae,f),null===peek(oe)&&f===peek(ae)&&(
// All tasks are delayed, and this is the task with the earliest delay.
pe?
// Cancel an existing timeout.
r():pe=!0,// Schedule a timeout.
n(handleTimeout,u-c))):(f.sortIndex=p,push(oe,f),l&&(markTaskStart(f,c),f.isQueued=!0),// Schedule a host callback, if needed. If we're already performing work,
// wait until the next time we yield.
de||ce||(de=!0,e(flushWork))),f},t.unstable_cancelCallback=function unstable_cancelCallback(e){l&&e.isQueued&&(!function markTaskCanceled(e,t){l&&(_[A]--,null!==B&&logEvent([Y,1e3*t,e.id]))}(e,t.unstable_now()),e.isQueued=!1),// Null out the callback to indicate the task has been canceled. (Can't
// remove from the queue because you can't remove arbitrary nodes from an
// array based heap, only the first one.)
e.callback=null},t.unstable_wrapCallback=function unstable_wrapCallback(e){var t=se;return function(){
// This is a fork of runWithPriority, inlined for performance.
var n=se;se=t;try{return e.apply(this,arguments)}finally{se=n}}},t.unstable_getCurrentPriorityLevel=function unstable_getCurrentPriorityLevel(){return se},t.unstable_shouldYield=function unstable_shouldYield(){var e=t.unstable_now();advanceTimers(e);var n=peek(oe);return n!==ue&&null!==ue&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<ue.expirationTime||o()},t.unstable_requestPaint=fe,t.unstable_continueExecution=function unstable_continueExecution(){le=!1,de||ce||(de=!0,e(flushWork))},t.unstable_pauseExecution=function unstable_pauseExecution(){le=!0},t.unstable_getFirstCallbackNode=function unstable_getFirstCallbackNode(){return peek(oe)},t.unstable_Profiling=me})()},
/***/MgzW:
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function toObject(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function shouldUseNative(){try{if(!Object.assign)return!1;
// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");// eslint-disable-line no-new-wrappers
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e,t){for(var n,i,l=toObject(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var c=0;c<i.length;c++)a.call(n,i[c])&&(l[i[c]]=n[i[c]])}}return l}},
/***/QCnb:
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";e.exports=n(/*! ./cjs/scheduler.development.js */"MGln")},
/***/TOwV:
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";e.exports=n(/*! ./cjs/react-is.development.js */"qPUD")},
/***/VbXa:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t){e.exports=function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},
/***/WbBG:
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},
/***/Ybsr:
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/** @license React v16.12.0
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var t=n(/*! react */"q1tI"),r=n(/*! object-assign */"MgzW"),o=n(/*! scheduler */"QCnb"),a=n(/*! prop-types/checkPropTypes */"oVyQ"),i=n(/*! scheduler/tracing */"bwe0");
// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
if(!t)throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
/**
 * Injectable ordering of event plugins.
 */var l=null,u={};
/**
 * Injectable mapping from names to event plugin modules.
 */
/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering(){if(l)for(var e in u){var t=u[e],n=l.indexOf(e);if(!(n>-1))throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `"+e+"`.");if(!s[n]){if(!t.extractEvents)throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `"+e+"` does not.");s[n]=t;var r=t.eventTypes;for(var o in r)if(!publishEventForPlugin(r[o],t,o))throw Error("EventPluginRegistry: Failed to publish event `"+o+"` for plugin `"+e+"`.")}}}
/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(e,t,n){if(c.hasOwnProperty(n))throw Error("EventPluginHub: More than one plugin attempted to publish the same event name, `"+n+"`.");c[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r){if(r.hasOwnProperty(o))publishRegistrationName(r[o],t,n)}return!0}return!!e.registrationName&&(publishRegistrationName(e.registrationName,t,n),!0)}
/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(e,t,n){if(d[e])throw Error("EventPluginHub: More than one plugin attempted to publish the same registration name, `"+e+"`.");d[e]=t,p[e]=t.eventTypes[n].dependencies;var r=e.toLowerCase();f[r]=e,"onDoubleClick"===e&&(f.ondblclick=e)}
/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
/**
 * Ordered list of injected plugins.
 */var s=[],c={},d={},p={},f={};
/**
 * Mapping from event name to dispatch config
 */var invokeGuardedCallbackImpl=function(e,t,n,r,o,a,i,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}};
// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if("undefined"!==typeof window&&"function"===typeof window.dispatchEvent&&"undefined"!==typeof document&&"function"===typeof document.createEvent){var m=document.createElement("react");invokeGuardedCallbackImpl=function(e,t,n,r,o,a,i,l,u){
// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebookincubator/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if("undefined"===typeof document)throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var s,c=document.createEvent("Event"),d=!0,p=window.event,f=Object.getOwnPropertyDescriptor(window,"event"),h=Array.prototype.slice.call(arguments,3);// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
function callCallback(){
// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
m.removeEventListener(y,callCallback,!1),// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
"undefined"!==typeof window.event&&window.hasOwnProperty("event")&&(window.event=p),t.apply(n,h),d=!1}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
// Use this to track whether the error event is ever called.
var v=!1,g=!1;function handleWindowError(e){if(s=e.error,v=!0,null===s&&0===e.colno&&0===e.lineno&&(g=!0),e.defaultPrevented&&null!=s&&"object"===typeof s)try{s._suppressLogging=!0}catch(t){// Ignore.
}}// Create a fake event type.
var y="react-"+(e||"invokeguardedcallback");// Attach our event handlers
window.addEventListener("error",handleWindowError),m.addEventListener(y,callCallback,!1),// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
c.initEvent(y,!1,!1),m.dispatchEvent(c),f&&Object.defineProperty(window,"event",f),d&&(v?g&&(s=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")):
// The callback errored, but the error event never fired.
s=new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),this.onError(s)),// Remove our event listeners
window.removeEventListener("error",handleWindowError)}}var h=invokeGuardedCallbackImpl,v=!1,g=null,y=!1,b=null,C={onError:function(e){v=!0,g=e}};
/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */
function invokeGuardedCallback(e,t,n,r,o,a,i,l,u){v=!1,g=null,h.apply(C,arguments)}
/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function invokeGuardedCallbackAndCatchFirstError(e,t,n,r,o,a,i,l,u){if(invokeGuardedCallback.apply(this,arguments),v){var s=clearCaughtError();y||(y=!0,b=s)}}
/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */function hasCaughtError(){return v}function clearCaughtError(){if(v){var e=g;return v=!1,g=null,e}throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var T,warningWithoutStack$1=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(r.length>8)
// Check before the condition to catch violations early.
throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!==typeof console){var a=r.map((function(e){return""+e}));a.unshift("Warning: "+t),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
Function.prototype.apply.call(console.error,console,a)}try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var i=0,l="Warning: "+t.replace(/%s/g,(function(){return r[i++]}));throw new Error(l)}catch(u){}}},k=null,w=null,S=null;
/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function executeDispatch(e,t,n){var r=e.type||"unknown-event";e.currentTarget=S(n),invokeGuardedCallbackAndCatchFirstError(r,t,void 0,e),e.currentTarget=null}
/**
 * Standard/simple iteration through an event's collected dispatches.
 */
/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */
function accumulateInto(e,t){if(null==t)throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");return null==e?t:// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}
/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */function forEachAccumulated(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}
/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */T=function(e){var t=e._dispatchListeners,n=e._dispatchInstances,r=Array.isArray(t),o=r?t.length:t?1:0,a=Array.isArray(n),i=a?n.length:n?1:0;(a!==r||i!==o)&&warningWithoutStack$1(!1,"EventPluginUtils: Invalid `event`.")};var E=null,executeDispatchesAndRelease=function(e){e&&(!function executeDispatchesInOrder(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(T(e),Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)// Listeners and Instances are two parallel arrays that are always in sync.
executeDispatch(e,t[r],n[r]);else t&&executeDispatch(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null}(e),e.isPersistent()||e.constructor.release(e))},executeDispatchesAndReleaseTopLevel=function(e){return executeDispatchesAndRelease(e)};
/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @private
 */function runEventsInBatch(e){null!==e&&(E=accumulateInto(E,e));// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var t=E;if(E=null,t){if(forEachAccumulated(t,executeDispatchesAndReleaseTopLevel),E)throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");// This would be a good time to rethrow if any of the event handlers threw.
!function rethrowCaughtError(){if(y){var e=b;throw y=!1,b=null,e}}()}}
/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
/**
 * Methods for injecting dependencies.
 */
var x={
/**
   * @param {array} InjectedEventPluginOrder
   * @public
   */
injectEventPluginOrder:// Trust the developer to only use possibleRegistrationNames in true
/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */
function injectEventPluginOrder(e){if(l)throw Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.");// Clone the ordering so it cannot be dynamically mutated.
l=Array.prototype.slice.call(e),recomputePluginOrdering()}
/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */,
/**
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   */
injectEventPluginsByName:function injectEventPluginsByName(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!u.hasOwnProperty(n)||u[n]!==r){if(u[n])throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `"+n+"`.");u[n]=r,t=!0}}t&&recomputePluginOrdering()}};
/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */function getListener(e,t){var n,r=e.stateNode;// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
// live here; needs to be moved to a better place soon
if(!r)
// Work in progress (ex: onload events in incremental mode).
return null;var o=k(r);if(!o)
// Work in progress.
return null;if(n=o[t],function shouldPreventMouseEvent(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":return!(!n.disabled||!function isInteractive(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}(t));default:return!1}}(t,e.type,o))return null;if(n&&"function"!==typeof n)throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof n+"` type.");return n}
/**
 * Allows registered plugins an opportunity to extract events from top-level
 * native browser events.
 *
 * @return {*} An accumulation of synthetic events.
 * @internal
 */function runExtractedPluginEventsInBatch(e,t,n,r,o){runEventsInBatch(function extractPluginEvents(e,t,n,r,o){for(var a=null,i=0;i<s.length;i++){
// Not every plugin in the ordering may be loaded at runtime.
var l=s[i];if(l){var u=l.extractEvents(e,t,n,r,o);u&&(a=accumulateInto(a,u))}}return a}(e,t,n,r,o))}var P=0,R=1,I=2,D=3,F=4,O=5,N=6,_=7,L=8,M=9,U=10,A=11,H=12,W=13,z=14,j=15,B=16,V=17,$=18,q=19,Q=20,Y=21,K=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
K.hasOwnProperty("ReactCurrentDispatcher")||(K.ReactCurrentDispatcher={current:null}),K.hasOwnProperty("ReactCurrentBatchConfig")||(K.ReactCurrentBatchConfig={suspense:null});var G=/^(.*)[\\\/]/,describeComponentFrame=function(e,t,n){var r="";if(t){var o=t.fileName,a=o.replace(G,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(a)){var i=o.match(G);if(i){var l=i[1];if(l)a=l.replace(G,"")+"/"+a}}r=" (at "+a+":"+t.lineNumber+")"}else n&&(r=" (created by "+n+")");return"\n    in "+(e||"Unknown")+r},X="function"===typeof Symbol&&Symbol.for,J=X?Symbol.for("react.element"):60103,Z=X?Symbol.for("react.portal"):60106,ee=X?Symbol.for("react.fragment"):60107,te=X?Symbol.for("react.strict_mode"):60108,ne=X?Symbol.for("react.profiler"):60114,re=X?Symbol.for("react.provider"):60109,oe=X?Symbol.for("react.context"):60110,ae=X?Symbol.for("react.concurrent_mode"):60111,ie=X?Symbol.for("react.forward_ref"):60112,le=X?Symbol.for("react.suspense"):60113,ue=X?Symbol.for("react.suspense_list"):60120,se=X?Symbol.for("react.memo"):60115,ce=X?Symbol.for("react.lazy"):60116,de=X?Symbol.for("react.fundamental"):60117,pe=X?Symbol.for("react.responder"):60118,fe=X?Symbol.for("react.scope"):60119,me="function"===typeof Symbol&&Symbol.iterator,he="@@iterator";function getIteratorFn(e){if(null===e||"object"!==typeof e)return null;var t=me&&e[me]||e[he];return"function"===typeof t?t:null}
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning$1=function(e,t){if(!e){// eslint-disable-next-line react-internal/warning-and-invariant-args
for(var n=K.ReactDebugCurrentFrame,r=n.getStackAddendum(),o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];warningWithoutStack$1.apply(void 0,[!1,t+"%s"].concat(a,[r]))}},ve=-1,ge=0,ye=1,be=2;function refineResolvedLazyComponent(e){return e._status===ye?e._result:null}function getComponentName(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"===typeof e.tag&&warningWithoutStack$1(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case ee:return"Fragment";case Z:return"Portal";case ne:return"Profiler";case te:return"StrictMode";case le:return"Suspense";case ue:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case oe:return"Context.Consumer";case re:return"Context.Provider";case ie:return function getWrappedName(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}(e,e.render,"ForwardRef");case se:return getComponentName(e.type);case ce:var t=refineResolvedLazyComponent(e);if(t)return getComponentName(t)}return null}var Ce=K.ReactDebugCurrentFrame;function describeFiber(e){switch(e.tag){case D:case F:case N:case _:case U:case M:return"";default:var t=e._debugOwner,n=e._debugSource,r=getComponentName(e.type),o=null;return t&&(o=getComponentName(t.type)),describeComponentFrame(r,n,o)}}function getStackByFiberInDevAndProd(e){var t="",n=e;do{t+=describeFiber(n),n=n.return}while(n);return t}var Te=null,ke=null;function getCurrentFiberOwnerNameInDevOrNull(){if(null===Te)return null;var e=Te._debugOwner;return null!==e&&"undefined"!==typeof e?getComponentName(e.type):null}function getCurrentFiberStackInDev(){return null===Te?"":getStackByFiberInDevAndProd(Te);// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
}function resetCurrentFiber(){Ce.getCurrentStack=null,Te=null,ke=null}function setCurrentFiber(e){Ce.getCurrentStack=getCurrentFiberStackInDev,Te=e,ke=null}function setCurrentPhase(e){ke=e}var we=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);function endsWith(e,t){var n=e.length;return e.substring(n-t.length,n)===t}var Se=1,Ee=2,xe=4,Pe=8,Re=16,Ie=32,De=null,Fe=null,Oe=null;function restoreStateOfTarget(e){
// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var t=w(e);if(t){if("function"!==typeof De)throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=k(t.stateNode);De(t.stateNode,t.type,n)}}function enqueueStateRestore(e){Fe?Oe?Oe.push(e):Oe=[e]:Fe=e}function restoreStateIfNeeded(){if(Fe){var e=Fe,t=Oe;if(Fe=null,Oe=null,restoreStateOfTarget(e),t)for(var n=0;n<t.length;n++)restoreStateOfTarget(t[n])}}var Ne=!0,_e=!0,Le=!0,Me=!0,Ue=!0,Ae=!1,He=!1,We=!1,ze=!1,je=!1,Be=!1,Ve=!1,$e=!1,qe=!1,Qe=!0,Ye=!1,Ke=!1,Ge=!1,Xe=!1,Je=!1,Ze=!1,batchedUpdatesImpl=function(e,t){return e(t)},discreteUpdatesImpl=function(e,t,n,r){return e(t,n,r)},flushDiscreteUpdatesImpl=function(){},et=batchedUpdatesImpl,tt=!1,nt=!1;// Helps identify side effects in render-phase lifecycle hooks and setState
// reducers by double invoking them in Strict Mode.
function finishEventHandler(){(function needsStateRestore(){return null!==Fe||null!==Oe})()&&(
// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
flushDiscreteUpdatesImpl(),restoreStateIfNeeded())}function batchedEventUpdates(e,t,n){if(nt)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return e(t,n);nt=!0;try{return et(e,t,n)}finally{nt=!1,finishEventHandler()}}// This is for the React Flare event system
function executeUserEventHandler(e,t){var n=tt;try{tt=!0,invokeGuardedCallbackAndCatchFirstError("object"===typeof t&&null!==t?t.type:"",e,void 0,t)}finally{tt=n}}function discreteUpdates(e,t,n,r){var o=tt;tt=!0;try{return discreteUpdatesImpl(e,t,n,r)}finally{(tt=o)||finishEventHandler()}}var rt=0;function flushDiscreteUpdatesIfNeeded(e){
// event.timeStamp isn't overly reliable due to inconsistencies in
// how different browsers have historically provided the time stamp.
// Some browsers provide high-resolution time stamps for all events,
// some provide low-resolution time stamps for all events. FF < 52
// even mixes both time stamps together. Some browsers even report
// negative time stamps or time stamps that are 0 (iOS9) in some cases.
// Given we are only comparing two time stamps with equality (!==),
// we are safe from the resolution differences. If the time stamp is 0
// we bail-out of preventing the flush, which can affect semantics,
// such as if an earlier flush removes or adds event listeners that
// are fired in the subsequent flush. However, this is the same
// behaviour as we had before this change, so the risks are low.
tt||Be&&0!==e&&rt===e||(rt=e,flushDiscreteUpdatesImpl())}var ot,at=0,it=1,lt=2,ut=o.unstable_UserBlockingPriority,st=o.unstable_runWithPriority;var ct=new Map,dt=0,pt=1,ft=0,mt=null,ht=null,vt=dt,gt={dispatchEvent:function(e,t,n){switch(validateResponderContext(),function validateEventValue(e){if("object"===typeof e&&null!==e){var t=e.target,n=e.type,r=e.timeStamp;if(null==t||null==n||null==r)throw new Error('context.dispatchEvent: "target", "timeStamp", and "type" fields on event object are required.');var showWarning=function(e){warning$1(!1,'%s is not available on event objects created from event responder modules (React Flare). Try wrapping in a conditional, i.e. `if (event.type !== "press") { event.%s }`',e,e)};e.isDefaultPrevented=function(){showWarning("isDefaultPrevented()")},e.isPropagationStopped=function(){showWarning("isPropagationStopped()")},// $FlowFixMe: we don't need value, Flow thinks we do
Object.defineProperty(e,"nativeEvent",{get:function(){showWarning("nativeEvent")}})}}(e),n){case at:flushDiscreteUpdatesIfNeeded(ft),discreteUpdates((function(){return executeUserEventHandler(t,e)}));break;case it:st(ut,(function(){return executeUserEventHandler(t,e)}));break;case lt:executeUserEventHandler(t,e)}},isTargetWithinResponder:function(e){if(validateResponderContext(),null!=e)for(var t=getClosestInstanceFromNode(e),n=mt.fiber;null!==t;){if(t===n||t.alternate===n)return!0;t=t.return}return!1},isTargetWithinResponderScope:function(e){validateResponderContext();var t=mt.responder;if(null!=e)for(var n=getClosestInstanceFromNode(e),r=mt.fiber;null!==n;){if(n===r||n.alternate===r)return!0;if(doesFiberHaveResponder(n,t))return!1;n=n.return}return!1},isTargetWithinNode:function(e,t){validateResponderContext();var n=getClosestInstanceFromNode(e),r=getClosestInstanceFromNode(t);if(null!=n&&null!=r){for(var o=r.alternate,a=n;null!==a;){if(a===r||a===o)return!0;a=a.return}return!1}// Fallback to DOM APIs
return t.contains(e)},addRootEventTypes:function(e){validateResponderContext(),ot(e,ht);for(var t=0;t<e.length;t++){registerRootEventType(e[t],mt)}},removeRootEventTypes:function(e){validateResponderContext();for(var t=0;t<e.length;t++){var n=e[t],r=ct.get(n),o=mt.rootEventTypes;null!==o&&o.delete(n),void 0!==r&&r.delete(mt)}},getActiveDocument:function getActiveDocument(){return ht},objectAssign:r,getTimeStamp:function(){return validateResponderContext(),ft},isTargetWithinHostComponent:function(e,t){validateResponderContext();for(var n=getClosestInstanceFromNode(e);null!==n;){if(n.tag===O&&n.type===t)return!0;n=n.return}return!1},continuePropagation:function(){vt=pt},enqueueStateRestore:enqueueStateRestore,getResponderNode:function(){validateResponderContext();var e=mt.fiber;return e.tag===Y?null:e.stateNode}};function doesFiberHaveResponder(e,t){var n=e.tag;if(n===O||n===Y){var r=e.dependencies;if(null!==r){var o=r.responders;if(null!==o&&o.has(t))return!0}}return!1}function validateResponderTargetEventTypes(e,t){var n=t.targetEventTypes;// Validate the target event type exists on the responder
return null!==n&&function responderEventTypesContainType(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return!0;return!1}(n,e)}function validateResponderContext(){if(null===mt)throw Error("An event responder context was used outside of an event cycle.")}function dispatchEventForResponderEventSystem(e,t,n,r,o){if(Be){var a=mt,i=ft,l=ht,u=vt;vt=dt,// nodeType 9 is DOCUMENT_NODE
ht=9===r.nodeType?r:r.ownerDocument,// We might want to control timeStamp another way here
ft=n.timeStamp;try{batchedEventUpdates((function(){!function traverseAndHandleEventResponderInstances(e,t,n,r,o){for(var a=0!==(o&xe),i=0===(o&Re),l=a||!i?e:e+"_active",u=new Set,s=function createDOMResponderEvent(e,t,n,r,o){var a=t,i=a.buttons,l=a.pointerType,u="";return void 0!==l?u=l:void 0!==t.key?u="keyboard":void 0!==i?u="mouse":void 0!==t.changedTouches&&(u="touch"),{nativeEvent:t,passive:r,passiveSupported:o,pointerType:u,target:n,type:e}}(e,n,r,a,i),c=t,d=!1;null!==c;){var p=c,f=p.dependencies,m=p.tag;if(m===F)d=!0;else if((m===O||m===Y)&&null!==f){var h=f.responders;if(null!==h)for(var v=Array.from(h.values()),g=0,y=v.length;g<y;g++){var b=v[g],C=b.props,T=b.responder,k=b.state;if(!u.has(T)&&validateResponderTargetEventTypes(l,T)&&(!d||T.targetPortalPropagation)){u.add(T);var w=T.onEvent;null!==w&&(mt=b,w(s,gt,C,k),vt===pt&&(u.delete(T),vt=dt))}}}c=c.return}// Root phase
var S=ct.get(l);if(void 0!==S)for(var E=Array.from(S),x=0;x<E.length;x++){var P=E[x],R=(C=P.props,T=P.responder,k=P.state,T.onRootEvent);null!==R&&(mt=P,R(s,gt,C,k))}}(e,t,n,r,o)}))}finally{mt=a,ft=i,ht=l,vt=u}}}function registerRootEventType(e,t){var n=ct.get(e);void 0===n&&(n=new Set,ct.set(e,n));var r=t.rootEventTypes;if(null===r&&(r=t.rootEventTypes=new Set),r.has(e))throw Error('addRootEventTypes() found a duplicate root event type of "'+e+'". This might be because the event type exists in the event responder "rootEventTypes" array or because of a previous addRootEventTypes() using this root event type.');r.add(e),n.add(t)}
// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var yt=0,bt=2,Ct=3,Tt=4,kt=5,wt=6,St=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Et=St+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",xt="data-reactroot",Pt=new RegExp("^["+St+"]["+Et+"]*$"),Rt=Object.prototype.hasOwnProperty,It={},Dt={};// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
function isAttributeNameSafe(e){return!!Rt.call(Dt,e)||!Rt.call(It,e)&&(Pt.test(e)?(Dt[e]=!0,!0):(It[e]=!0,warning$1(!1,"Invalid attribute name: `%s`",e),!1))}function shouldIgnoreAttribute(e,t,n){return null!==t?t.type===yt:!n&&(e.length>2&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))}function shouldRemoveAttributeWithWarning(e,t,n,r){if(null!==n&&n.type===yt)return!1;switch(typeof t){case"function":// $FlowIssue symbol is perfectly valid here
case"symbol":
// eslint-disable-line
return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;var o=e.toLowerCase().slice(0,5);return"data-"!==o&&"aria-"!==o;default:return!1}}function shouldRemoveAttribute(e,t,n,r){if(null===t||"undefined"===typeof t)return!0;if(shouldRemoveAttributeWithWarning(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case Ct:return!t;case Tt:return!1===t;case kt:return isNaN(t);case wt:return isNaN(t)||t<1}return!1}function getPropertyInfo(e){return Ft.hasOwnProperty(e)?Ft[e]:null}function PropertyInfoRecord(e,t,n,r,o,a){this.acceptsBooleans=t===bt||t===Ct||t===Tt,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var Ft={};// These props are reserved by React. They shouldn't be written to the DOM.
["children","dangerouslySetInnerHTML",// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,yt,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1)})),// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0],n=e[1];Ft[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1)})),// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
["contentEditable","draggable","spellCheck","value"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,bt,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1)})),// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,bt,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1)})),// These are HTML boolean attributes.
["allowFullScreen","async",// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless",// Microdata
"itemScope"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,Ct,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1)})),// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
["checked",// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,Ct,!0,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1)})),// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
["capture","download"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,Tt,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1)})),// These are HTML attributes that must be positive numbers.
["cols","rows","size","span"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,wt,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1)})),// These are HTML attributes that must be numbers.
["rowSpan","start"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,kt,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1)}));var Ot=/[\-\:]([a-z])/g,capitalize=function(e){return e[1].toUpperCase()};// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((function(e){var t=e.replace(Ot,capitalize);Ft[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
e,null,// attributeNamespace
!1)})),// String SVG attributes with the xlink namespace.
["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((function(e){var t=e.replace(Ot,capitalize);Ft[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
e,"http://www.w3.org/1999/xlink",!1)})),// String SVG attributes with the xml namespace.
["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(Ot,capitalize);Ft[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
e,"http://www.w3.org/XML/1998/namespace",!1)})),// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
["tabIndex","crossOrigin"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,1,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1)}));Ft.xlinkHref=new PropertyInfoRecord("xlinkHref",1,!1,// mustUseProperty
"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){Ft[e]=new PropertyInfoRecord(e,1,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!0)}));var Nt=null;Nt=K.ReactDebugCurrentFrame;// A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */
var _t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,Lt=!1;function sanitizeURL(e){if(We){if(_t.test(e))throw Error("React has blocked a javascript: URL as a security precaution."+Nt.getStackAddendum())}else!Lt&&_t.test(e)&&(Lt=!0,warning$1(!1,"A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}
// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(e){return""+e}function getToStringValue(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:
// function, symbol are assigned as empty strings
return""}}
/** Trusted value is a wrapper for "safe" values which can be assigned to DOM execution sinks. */
/**
 * We allow passing objects with toString method as element attributes or in dangerouslySetInnerHTML
 * and we do validations that the value is safe. Once we do validation we want to use the validated
 * value instead of the object (because object.toString may return something else on next call).
 *
 * If application uses Trusted Types we don't stringify trusted values, but preserve them as objects.
 */var Mt=toString;
/**
 * Set attribute for a node. The attribute value can be either string or
 * Trusted value (if application uses Trusted Types).
 */
function setAttribute(e,t,n){e.setAttribute(t,n)}
/**
 * Set attribute with namespace for a node. The attribute value can be either string or
 * Trusted value (if application uses Trusted Types).
 */
/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */
function getValueForProperty(e,t,n,r){if(r.mustUseProperty)return e[r.propertyName];!We&&r.sanitizeURL&&
// If we haven't fully disabled javascript: URLs, and if
// the hydration is successful of a javascript: URL, we
// still want to warn on the client.
sanitizeURL(""+n);var o=r.attributeName,a=null;if(r.type===Tt){if(e.hasAttribute(o)){var i=e.getAttribute(o);return""===i||(shouldRemoveAttribute(t,n,r,!1)?i:i===""+n?n:i)}}else if(e.hasAttribute(o)){if(shouldRemoveAttribute(t,n,r,!1))
// We had an attribute but shouldn't have had one, so read it
// for the error message.
return e.getAttribute(o);if(r.type===Ct)
// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return n;// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
a=e.getAttribute(o)}return shouldRemoveAttribute(t,n,r,!1)?null===a?n:a:a===""+n?n:a}
/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */function getValueForAttribute(e,t,n){if(isAttributeNameSafe(t)){if(!e.hasAttribute(t))return void 0===n?void 0:null;var r=e.getAttribute(t);return r===""+n?n:r}}
/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */function setValueForProperty(e,t,n,r){var o=getPropertyInfo(t);if(!shouldIgnoreAttribute(t,o,r))// If the prop isn't in the special list, treat it as a simple attribute.
if(shouldRemoveAttribute(t,n,o,r)&&(n=null),r||null===o){if(isAttributeNameSafe(t)){var a=t;null===n?e.removeAttribute(a):setAttribute(e,a,Mt(n))}}else if(o.mustUseProperty){var i=o.propertyName;if(null===n){var l=o.type;e[i]=l!==Ct&&""}else
// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[i]=n}// The rest are treated as attributes with special cases.
else{var u=o.attributeName,s=o.attributeNamespace;if(null===n)e.removeAttribute(u);else{var c,d=o.type;d===Ct||d===Tt&&!0===n?
// If attribute type is boolean, we know for sure it won't be an execution sink
// and we won't require Trusted Type here.
c="":(
// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
c=Mt(n),o.sanitizeURL&&sanitizeURL(c.toString())),s?function setAttributeNS(e,t,n,r){e.setAttributeNS(t,n,r)}(e,s,u,c):setAttribute(e,u,c)}}}Ze&&"undefined"!==typeof trustedTypes&&(Mt=function(e){return"object"===typeof e&&(trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e)||
/* TrustedURLs are deprecated and will be removed soon: https://github.com/WICG/trusted-types/pull/204 */
trustedTypes.isURL&&trustedTypes.isURL(e))?e:toString(e)});var Ut,At={checkPropTypes:null};Ut=K.ReactDebugCurrentFrame;var Ht={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},Wt={value:function(e,t,n){return Ht[e.type]||e.onChange||e.readOnly||e.disabled||null==e[t]||Be&&e.listeners?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return e.onChange||e.readOnly||e.disabled||null==e[t]||Be&&e.listeners?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}};function isCheckable(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function getTracker(e){return e._valueTracker}function track(e){getTracker(e)||(// TODO: Once it's just Fiber we can move this to node._wrapperState
e._valueTracker=function trackValueOnNode(e){var t=isCheckable(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),// We could've passed this the first time
// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){!function detachTracker(e){e._valueTracker=null}(e),delete e[t]}}}}(e))}function updateValueIfChanged(e){if(!e)return!1;var t=getTracker(e);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!t)return!0;var n=t.getValue(),r=function getValueFromNode(e){var t="";return e?t=isCheckable(e)?e.checked?"true":"false":e.value:t}(e);return r!==n&&(t.setValue(r),!0)}
// TODO: direct imports like some-package/src/* are bad. Fix me.
/**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
At.checkPropTypes=function(e,t){a(Wt,t,"prop",e,Ut.getStackAddendum)};var zt=!1,jt=!1,Bt=!1,Vt=!1;function isControlled(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}
/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */function getHostProps(e,t){var n=e,o=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=o?o:n._wrapperState.initialChecked})}function initWrapperState(e,t){At.checkPropTypes("input",t),void 0===t.checked||void 0===t.defaultChecked||jt||(warning$1(!1,"%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component",t.type),jt=!0),void 0===t.value||void 0===t.defaultValue||zt||(warning$1(!1,"%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component",t.type),zt=!0);var n=e,r=null==t.defaultValue?"":t.defaultValue;n._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:getToStringValue(null!=t.value?t.value:r),controlled:isControlled(t)}}function updateChecked(e,t){var n=e,r=t.checked;null!=r&&setValueForProperty(n,"checked",r,!1)}function updateWrapper(e,t){var n=e,r=isControlled(t);n._wrapperState.controlled||!r||Vt||(warning$1(!1,"A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",t.type),Vt=!0),!n._wrapperState.controlled||r||Bt||(warning$1(!1,"A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",t.type),Bt=!0),updateChecked(e,t);var o=getToStringValue(t.value),a=t.type;if(null!=o)"number"===a?(0===o&&""===n.value||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
n.value!=o)&&(n.value=toString(o)):n.value!==toString(o)&&(n.value=toString(o));else if("submit"===a||"reset"===a)
// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
return void n.removeAttribute("value");ze?
// When not syncing the value attribute, React only assigns a new value
// whenever the defaultValue React prop has changed. When not present,
// React does nothing
t.hasOwnProperty("defaultValue")&&setDefaultValue(n,t.type,getToStringValue(t.defaultValue)):
// When syncing the value attribute, the value comes from a cascade of
// properties:
//  1. The value React property
//  2. The defaultValue React property
//  3. Otherwise there should be no change
t.hasOwnProperty("value")?setDefaultValue(n,t.type,o):t.hasOwnProperty("defaultValue")&&setDefaultValue(n,t.type,getToStringValue(t.defaultValue)),ze?
// When not syncing the checked attribute, the attribute is directly
// controllable from the defaultValue React property. It needs to be
// updated as new props come in.
null==t.defaultChecked?n.removeAttribute("checked"):n.defaultChecked=!!t.defaultChecked:
// When syncing the checked attribute, it only changes when it needs
// to be removed, such as transitioning from a checkbox into a text input
null==t.checked&&null!=t.defaultChecked&&(n.defaultChecked=!!t.defaultChecked)}function postMountWrapper(e,t,n){var r=e;// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type,a="submit"===o||"reset"===o;// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(a&&(void 0===t.value||null===t.value))return;var i=toString(r._wrapperState.initialValue);// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(!n)if(ze){var l=getToStringValue(t.value);// When not syncing the value attribute, the value property points
// directly to the React prop. Only assign it if it exists.
null!=l&&(a||l!==r.value)&&(r.value=toString(l))}else
// When syncing the value attribute, the value property should use
// the wrapperState._initialValue property. This uses:
//
//   1. The value React property when present
//   2. The defaultValue React property when present
//   3. An empty string
i!==r.value&&(r.value=i);if(ze){
// When not syncing the value attribute, assign the value attribute
// directly from the defaultValue React property (when present)
var u=getToStringValue(t.defaultValue);null!=u&&(r.defaultValue=toString(u))}else
// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
r.defaultValue=i}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var s=r.name;""!==s&&(r.name=""),ze?(
// When not syncing the checked attribute, the checked property
// never gets assigned. It must be manually set. We don't want
// to do this when hydrating so that existing user input isn't
// modified
n||updateChecked(e,t),// Only assign the checked attribute if it is defined. This saves
// a DOM write when controlling the checked attribute isn't needed
// (text inputs, submit/reset)
t.hasOwnProperty("defaultChecked")&&(r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!t.defaultChecked)):(
// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked),""!==s&&(r.name=s)}function restoreControlledState$1(e,t){var n=e;updateWrapper(n,t),function updateNamedCousins(e,t){var n=t.name;if("radio"===t.type&&null!=n){for(var r=e;r.parentNode;)r=r.parentNode;// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),a=0;a<o.length;a++){var i=o[a];if(i!==e&&i.form===e.form){// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var l=getFiberCurrentPropsFromNode$1(i);if(!l)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
updateValueIfChanged(i),// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
updateWrapper(i,l)}}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
(n,t)}function setDefaultValue(e,t,n){// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=toString(e._wrapperState.initialValue):e.defaultValue!==toString(n)&&(e.defaultValue=toString(n)))}var $t,qt=!1,Qt=!1;
/**
 * Implements an <option> host component that warns when `selected` is set.
 */
function validateProps(e,n){
// This mirrors the codepath above, but runs for hydration too.
// Warn about invalid children here so that client and hydration are consistent.
// TODO: this seems like it could cause a DEV-only throw for hydration
// if children contains a non-element object. We should try to avoid that.
"object"===typeof n.children&&null!==n.children&&t.Children.forEach(n.children,(function(e){null!=e&&"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&(Qt||(Qt=!0,warning$1(!1,"Only strings and numbers are supported as <option> children.")))})),// TODO: Remove support for `selected` in <option>.
null==n.selected||qt||(warning$1(!1,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),qt=!0)}function getHostProps$1(e,n){var o=r({children:void 0},n),a=function flattenChildren(e){var n="";// Flatten children. We'll warn if they are invalid
// during validateProps() which runs for hydration too.
// Note that this would throw on non-element objects.
// Elements are stringified (which is normally irrelevant
// but matters for <fbt>).
return t.Children.forEach(e,(function(e){null!=e&&(n+=e)})),n}(n.children);return a&&(o.children=a),o}
// TODO: direct imports like some-package/src/* are bad. Fix me.
function getDeclarationErrorAddendum(){var e=getCurrentFiberOwnerNameInDevOrNull();return e?"\n\nCheck the render method of `"+e+"`.":""}$t=!1;var Yt=["value","defaultValue"];
/**
 * Validation function for `value` and `defaultValue`.
 */function updateOptions(e,t,n,r){var o=e.options;if(t){for(var a=n,i={},l=0;l<a.length;l++)
// Prefix to avoid chaos with special keys.
i["$"+a[l]]=!0;for(var u=0;u<o.length;u++){var s=i.hasOwnProperty("$"+o[u].value);o[u].selected!==s&&(o[u].selected=s),s&&r&&(o[u].defaultSelected=!0)}}else{for(
// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var c=toString(getToStringValue(n)),d=null,p=0;p<o.length;p++){if(o[p].value===c)return o[p].selected=!0,void(r&&(o[p].defaultSelected=!0));null!==d||o[p].disabled||(d=o[p])}null!==d&&(d.selected=!0)}}
/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */function getHostProps$2(e,t){return r({},t,{value:void 0})}function initWrapperState$1(e,t){var n=e;!function checkSelectPropTypes(e){At.checkPropTypes("select",e);for(var t=0;t<Yt.length;t++){var n=Yt[t];if(null!=e[n]){var r=Array.isArray(e[n]);e.multiple&&!r?warning$1(!1,"The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,getDeclarationErrorAddendum()):!e.multiple&&r&&warning$1(!1,"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,getDeclarationErrorAddendum())}}}(t),n._wrapperState={wasMultiple:!!t.multiple},void 0===t.value||void 0===t.defaultValue||$t||(warning$1(!1,"Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),$t=!0)}var Kt=!1;
/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */function getHostProps$3(e,t){var n=e;if(null!=t.dangerouslySetInnerHTML)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
return r({},t,{value:void 0,defaultValue:void 0,children:toString(n._wrapperState.initialValue)})}function initWrapperState$2(e,t){var n=e;At.checkPropTypes("textarea",t),void 0===t.value||void 0===t.defaultValue||Kt||(warning$1(!1,"%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component"),Kt=!0);var r=t.value;// Only bother fetching default value if we're going to use it
if(null==r){var o=t.defaultValue,a=t.children;// TODO (yungsters): Remove support for children content in <textarea>.
if(null!=a){if(warning$1(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=o)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Array.isArray(a)){if(!(a.length<=1))throw Error("<textarea> can only have at most one child.");a=a[0]}o=a}null==o&&(o=""),r=o}n._wrapperState={initialValue:getToStringValue(r)}}function updateWrapper$1(e,t){var n=e,r=getToStringValue(t.value),o=getToStringValue(t.defaultValue);if(null!=r){
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var a=toString(r);// To avoid side effects (such as losing text selection), only set value if changed
a!==n.value&&(n.value=a),null==t.defaultValue&&n.defaultValue!==a&&(n.defaultValue=a)}null!=o&&(n.defaultValue=toString(o))}function postMountWrapper$3(e,t){var n=e,r=n.textContent;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
r===n._wrapperState.initialValue&&""!==r&&null!==r&&(n.value=r)}var Gt="http://www.w3.org/1999/xhtml",Xt="http://www.w3.org/1998/Math/MathML",Jt="http://www.w3.org/2000/svg",Zt={html:Gt,mathml:Xt,svg:Jt};// Assumes there is no parent namespace.
function getIntrinsicNamespace(e){switch(e){case"svg":return Jt;case"math":return Xt;default:return Gt}}function getChildNamespace(e,t){return null==e||e===Gt?getIntrinsicNamespace(t):e===Jt&&"foreignObject"===t?Gt:e}
/* globals MSApp */
/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var en,tn,nn=(tn=function(e,t){if(e.namespaceURI!==Zt.svg||(Ze&&"undefined"!==typeof trustedTypes&&warning$1(!1,"Using 'dangerouslySetInnerHTML' in an svg element with Trusted Types enabled in an Internet Explorer will cause the trusted value to be converted to string. Assigning string to 'innerHTML' will throw an error if Trusted Types are enforced. You can try to wrap your svg element inside a div and use 'dangerouslySetInnerHTML' on the enclosing div instead."),"innerHTML"in e))e.innerHTML=t;else{(
// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
en=en||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=en.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return tn(e,t,n,r)}))}:tn),rn=1,on=3,an=8,ln=9,un=11,setTextContent=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===on)return void(n.nodeValue=t)}e.textContent=t};
// Do not use the below two methods directly!
// Instead use constants exported from DOMTopLevelEventTypes in ReactDOM.
// (It is the only module that is allowed to access these methods.)
function unsafeCastStringToDOMTopLevelType(e){return e}function unsafeCastDOMTopLevelTypeToString(e){return e}
/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}
/**
 * A list of event names to a configurable list of vendor prefixes.
 */var sn={animationend:makePrefixMap("Animation","AnimationEnd"),animationiteration:makePrefixMap("Animation","AnimationIteration"),animationstart:makePrefixMap("Animation","AnimationStart"),transitionend:makePrefixMap("Transition","TransitionEnd")},cn={},dn={};
/**
 * Event names that have already been detected and prefixed (if applicable).
 */
/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function getVendorPrefixedEventName(e){if(cn[e])return cn[e];if(!sn[e])return e;var t=sn[e];for(var n in t)if(t.hasOwnProperty(n)&&n in dn)return cn[e]=t[n];return e}
/**
 * To identify top level events in ReactDOM, we use constants defined by this
 * module. This is the only module that uses the unsafe* methods to express
 * that the constants actually correspond to the browser event names. This lets
 * us save some bundle size by avoiding a top level type -> event name map.
 * The rest of ReactDOM code should import top level types from this file.
 */
/**
 * Bootstrap if a DOM exists.
 */
we&&(dn=document.createElement("div").style,// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),// Same as above
"TransitionEvent"in window||delete sn.transitionend.transition);var pn=unsafeCastStringToDOMTopLevelType("abort"),fn=unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("animationend")),mn=unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("animationiteration")),hn=unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("animationstart")),vn=unsafeCastStringToDOMTopLevelType("blur"),gn=unsafeCastStringToDOMTopLevelType("canplay"),yn=unsafeCastStringToDOMTopLevelType("canplaythrough"),bn=unsafeCastStringToDOMTopLevelType("cancel"),Cn=unsafeCastStringToDOMTopLevelType("change"),Tn=unsafeCastStringToDOMTopLevelType("click"),kn=unsafeCastStringToDOMTopLevelType("close"),wn=unsafeCastStringToDOMTopLevelType("compositionend"),Sn=unsafeCastStringToDOMTopLevelType("compositionstart"),En=unsafeCastStringToDOMTopLevelType("compositionupdate"),xn=unsafeCastStringToDOMTopLevelType("contextmenu"),Pn=unsafeCastStringToDOMTopLevelType("copy"),Rn=unsafeCastStringToDOMTopLevelType("cut"),In=unsafeCastStringToDOMTopLevelType("dblclick"),Dn=unsafeCastStringToDOMTopLevelType("auxclick"),Fn=unsafeCastStringToDOMTopLevelType("drag"),On=unsafeCastStringToDOMTopLevelType("dragend"),Nn=unsafeCastStringToDOMTopLevelType("dragenter"),_n=unsafeCastStringToDOMTopLevelType("dragexit"),Ln=unsafeCastStringToDOMTopLevelType("dragleave"),Mn=unsafeCastStringToDOMTopLevelType("dragover"),Un=unsafeCastStringToDOMTopLevelType("dragstart"),An=unsafeCastStringToDOMTopLevelType("drop"),Hn=unsafeCastStringToDOMTopLevelType("durationchange"),Wn=unsafeCastStringToDOMTopLevelType("emptied"),zn=unsafeCastStringToDOMTopLevelType("encrypted"),jn=unsafeCastStringToDOMTopLevelType("ended"),Bn=unsafeCastStringToDOMTopLevelType("error"),Vn=unsafeCastStringToDOMTopLevelType("focus"),$n=unsafeCastStringToDOMTopLevelType("gotpointercapture"),qn=unsafeCastStringToDOMTopLevelType("input"),Qn=unsafeCastStringToDOMTopLevelType("invalid"),Yn=unsafeCastStringToDOMTopLevelType("keydown"),Kn=unsafeCastStringToDOMTopLevelType("keypress"),Gn=unsafeCastStringToDOMTopLevelType("keyup"),Xn=unsafeCastStringToDOMTopLevelType("load"),Jn=unsafeCastStringToDOMTopLevelType("loadstart"),Zn=unsafeCastStringToDOMTopLevelType("loadeddata"),er=unsafeCastStringToDOMTopLevelType("loadedmetadata"),tr=unsafeCastStringToDOMTopLevelType("lostpointercapture"),nr=unsafeCastStringToDOMTopLevelType("mousedown"),rr=unsafeCastStringToDOMTopLevelType("mousemove"),or=unsafeCastStringToDOMTopLevelType("mouseout"),ar=unsafeCastStringToDOMTopLevelType("mouseover"),ir=unsafeCastStringToDOMTopLevelType("mouseup"),lr=unsafeCastStringToDOMTopLevelType("paste"),ur=unsafeCastStringToDOMTopLevelType("pause"),sr=unsafeCastStringToDOMTopLevelType("play"),cr=unsafeCastStringToDOMTopLevelType("playing"),dr=unsafeCastStringToDOMTopLevelType("pointercancel"),pr=unsafeCastStringToDOMTopLevelType("pointerdown"),fr=unsafeCastStringToDOMTopLevelType("pointermove"),mr=unsafeCastStringToDOMTopLevelType("pointerout"),hr=unsafeCastStringToDOMTopLevelType("pointerover"),vr=unsafeCastStringToDOMTopLevelType("pointerup"),gr=unsafeCastStringToDOMTopLevelType("progress"),yr=unsafeCastStringToDOMTopLevelType("ratechange"),br=unsafeCastStringToDOMTopLevelType("reset"),Cr=unsafeCastStringToDOMTopLevelType("scroll"),Tr=unsafeCastStringToDOMTopLevelType("seeked"),kr=unsafeCastStringToDOMTopLevelType("seeking"),wr=unsafeCastStringToDOMTopLevelType("selectionchange"),Sr=unsafeCastStringToDOMTopLevelType("stalled"),Er=unsafeCastStringToDOMTopLevelType("submit"),xr=unsafeCastStringToDOMTopLevelType("suspend"),Pr=unsafeCastStringToDOMTopLevelType("textInput"),Rr=unsafeCastStringToDOMTopLevelType("timeupdate"),Ir=unsafeCastStringToDOMTopLevelType("toggle"),Dr=unsafeCastStringToDOMTopLevelType("touchcancel"),Fr=unsafeCastStringToDOMTopLevelType("touchend"),Or=unsafeCastStringToDOMTopLevelType("touchmove"),Nr=unsafeCastStringToDOMTopLevelType("touchstart"),_r=unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("transitionend")),Lr=unsafeCastStringToDOMTopLevelType("volumechange"),Mr=unsafeCastStringToDOMTopLevelType("waiting"),Ur=unsafeCastStringToDOMTopLevelType("wheel"),Ar=[pn,gn,yn,Hn,Wn,zn,jn,Bn,Zn,er,Jn,ur,sr,cr,gr,yr,Tr,kr,Sr,xr,Rr,Lr,Mr];function getRawEventName(e){return unsafeCastDOMTopLevelTypeToString(e)}
/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */
/**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */function get(e){return e._reactInternalFiber}
// Don't change these two values. They're used by React Dev Tools.
var Hr,Wr,zr,jr,Br=
/*              */
0,Vr=
/*         */
1,$r=
/*             */
2,qr=
/*                */
4,Qr=
/*    */
6,Yr=
/*              */
8,Kr=
/*          */
16,Gr=
/*              */
32,Xr=
/*            */
64,Jr=
/*                   */
128,Zr=
/*              */
256,eo=
/*               */
512,to=
/*             */
1024,no=
/*    */
1028,ro=
/*   */
932,oo=
/*        */
2047,ao=
/*            */
2048,io=
/*         */
4096,lo=K.ReactCurrentOwner;function getNearestMountedFiber(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{
// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var r=t;do{((t=r).effectTag&($r|to))!==Br&&(
// This is an insertion or in-progress hydration. The nearest possible
// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
n=t.return),r=t.return}while(r)}return t.tag===D?n:null;// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
}function getSuspenseInstanceFromFiber(e){if(e.tag===W){var t=e.memoizedState;if(null===t){var n=e.alternate;null!==n&&(t=n.memoizedState)}if(null!==t)return t.dehydrated}return null}function getContainerFromFiber(e){return e.tag===D?e.stateNode.containerInfo:null}function assertIsMounted(e){if(getNearestMountedFiber(e)!==e)throw Error("Unable to find node on an unmounted component.")}function findCurrentFiberUsingSlowPath(e){var t=e.alternate;if(!t){
// If there is no alternate, then we only need to check if it is mounted.
var n=getNearestMountedFiber(e);if(null===n)throw Error("Unable to find node on an unmounted component.");return n!==e?null:e}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
for(var r=e,o=t;;){var a=r.return;if(null===a)
// We're at the root.
break;var i=a.alternate;if(null===i){
// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var l=a.return;if(null!==l){r=o=l;continue}// If there's no parent, we're at the root.
break}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(a.child===i.child){for(var u=a.child;u;){if(u===r)
// We've determined that A is the current branch.
return assertIsMounted(a),e;if(u===o)
// We've determined that B is the current branch.
return assertIsMounted(a),t;u=u.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw Error("Unable to find node on an unmounted component.")}if(r.return!==o.return)
// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
r=a,o=i;else{for(
// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var s=!1,c=a.child;c;){if(c===r){s=!0,r=a,o=i;break}if(c===o){s=!0,o=a,r=i;break}c=c.sibling}if(!s){for(
// Search parent B's child set
c=i.child;c;){if(c===r){s=!0,r=i,o=a;break}if(c===o){s=!0,o=i,r=a;break}c=c.sibling}if(!s)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==o)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(r.tag!==D)throw Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t;// Otherwise B has to be current branch.
}function findCurrentHostFiber(e){var t=findCurrentFiberUsingSlowPath(e);if(!t)return null;// Next we'll drill down this component to find the first HostComponent/Text.
for(var n=t;;){if(n.tag===O||n.tag===N)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}// TODO: Upgrade this definition once we're on a newer version of Flow that
// has this definition built-in.
var uo=!1,so=[],co=null,po=null,fo=null,mo=new Map,ho=new Map,vo=[];// The queue of discrete events to be replayed.
var go=[nr,ir,Dr,Fr,Nr,Dn,In,dr,pr,vr,On,Un,An,wn,Sn,Yn,Kn,Gn,qn,Pr,kn,bn,Pn,Rn,lr,Tn,Cn,xn,br,Er],yo=[Vn,vn,Nn,Ln,ar,or,hr,mr,$n,tr];function isReplayableDiscreteEvent(e){return go.indexOf(e)>-1}function trapReplayableEvent(e,t,n){if(listenToTopLevel(e,t,n),Be){
// Trap events for the responder system.
var r=unsafeCastDOMTopLevelTypeToString(e)+"_passive";n.has(r)||(trapEventForResponderEventSystem(t,e,!0),n.add(r));// TODO: This listens to all events as active which might have
// undesirable effects. It's also unnecessary to have both
// passive and active listeners. Instead, we could start with
// a passive and upgrade it to an active one if needed.
// For replaying purposes the active is never needed since we
// currently don't preventDefault.
var o=unsafeCastDOMTopLevelTypeToString(e)+"_active";n.has(o)||(trapEventForResponderEventSystem(t,e,!1),n.add(o))}}function createQueuedReplayableEvent(e,t,n,r){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|Ie,nativeEvent:r}}function queueDiscreteEvent(e,t,n,r){var o=createQueuedReplayableEvent(e,t,n,r);if(so.push(o),He&&1===so.length)
// If this was the first discrete event, we might be able to
// synchronously unblock it so that preventDefault still works.
for(;null!==o.blockedOn;){var a=getInstanceFromNode$1(o.blockedOn);if(null===a)break;if(Hr(a),null!==o.blockedOn)
// We're still blocked from hydation, we have to give up
// and replay later.
break;
// We got unblocked by hydration. Let's try again.
replayUnblockedEvents()}}// Resets the replaying for this type of continuous event to no event.
function clearIfContinuousEvent(e,t){switch(e){case Vn:case vn:co=null;break;case Nn:case Ln:po=null;break;case ar:case or:fo=null;break;case hr:case mr:var n=t.pointerId;mo.delete(n);break;case $n:case tr:var r=t.pointerId;ho.delete(r)}}function accumulateOrCreateContinuousQueuedReplayableEvent(e,t,n,r,o){if(null===e||e.nativeEvent!==o){var a=createQueuedReplayableEvent(t,n,r,o);if(null!==t){var i=getInstanceFromNode$1(t);null!==i&&
// Attempt to increase the priority of this target.
zr(i)}return a}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags and store a single event to be
// replayed.
return e.eventSystemFlags|=r,e}// Check if this target is unblocked. Returns true if it's unblocked.
function attemptExplicitHydrationTarget(e){
// TODO: This function shares a lot of logic with attemptToDispatchEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var t=getClosestInstanceFromNode(e.target);if(null!==t){var n=getNearestMountedFiber(t);if(null!==n){var r=n.tag;if(r===W){var a=getSuspenseInstanceFromFiber(n);if(null!==a)
// We're blocked on hydrating this boundary.
// Increase its priority.
return e.blockedOn=a,void o.unstable_runWithPriority(e.priority,(function(){jr(n)}))}else if(r===D){if(n.stateNode.hydrate)// We don't currently have a way to increase the priority of
// a root other than sync.
return void(e.blockedOn=getContainerFromFiber(n))}}}e.blockedOn=null}function attemptReplayContinuousQueuedEvent(e){if(null!==e.blockedOn)return!1;var t=attemptToDispatchEvent(e.topLevelType,e.eventSystemFlags,e.nativeEvent);if(null!==t){
// We're still blocked. Try again later.
var n=getInstanceFromNode$1(t);return null!==n&&zr(n),e.blockedOn=t,!1}return!0}function attemptReplayContinuousQueuedEventInMap(e,t,n){attemptReplayContinuousQueuedEvent(e)&&n.delete(t)}function replayUnblockedEvents(){// First replay discrete events.
for(uo=!1;so.length>0;){var e=so[0];if(null!==e.blockedOn){
// We're still blocked.
// Increase the priority of this boundary to unblock
// the next discrete event.
var t=getInstanceFromNode$1(e.blockedOn);null!==t&&Wr(t);break}var n=attemptToDispatchEvent(e.topLevelType,e.eventSystemFlags,e.nativeEvent);null!==n?
// We're still blocked. Try again later.
e.blockedOn=n:
// We've successfully replayed the first event. Let's try the next one.
so.shift()}// Next replay any continuous events.
null!==co&&attemptReplayContinuousQueuedEvent(co)&&(co=null),null!==po&&attemptReplayContinuousQueuedEvent(po)&&(po=null),null!==fo&&attemptReplayContinuousQueuedEvent(fo)&&(fo=null),mo.forEach(attemptReplayContinuousQueuedEventInMap),ho.forEach(attemptReplayContinuousQueuedEventInMap)}function scheduleCallbackIfUnblocked(e,t){e.blockedOn===t&&(e.blockedOn=null,uo||(uo=!0,// Schedule a callback to attempt replaying as many events as are
// now unblocked. This first might not actually be unblocked yet.
// We could check it early to avoid scheduling an unnecessary callback.
o.unstable_scheduleCallback(o.unstable_NormalPriority,replayUnblockedEvents)))}function retryIfBlockedOn(e){
// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if(so.length>0){scheduleCallbackIfUnblocked(so[0],e);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var t=1;t<so.length;t++){var n=so[t];n.blockedOn===e&&(n.blockedOn=null)}}null!==co&&scheduleCallbackIfUnblocked(co,e),null!==po&&scheduleCallbackIfUnblocked(po,e),null!==fo&&scheduleCallbackIfUnblocked(fo,e);var unblock=function(t){return scheduleCallbackIfUnblocked(t,e)};mo.forEach(unblock),ho.forEach(unblock);for(var r=0;r<vo.length;r++){var o=vo[r];o.blockedOn===e&&(o.blockedOn=null)}for(;vo.length>0;){var a=vo[0];if(null!==a.blockedOn)
// We're still blocked.
break;attemptExplicitHydrationTarget(a),null===a.blockedOn&&
// We're unblocked.
vo.shift()}}function addEventCaptureListener(e,t,n){e.addEventListener(t,n,!0)}
/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(e){
// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var t=e.target||e.srcElement||window;// Normalize SVG <use> element events #4963
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===on?t.parentNode:t}function getParent(e){do{e=e.return;// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(e&&e.tag!==O);return e||null}
/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function traverseEnterLeave(e,t,n,r,o){for(var a=e&&t?function getLowestCommonAncestor(e,t){for(var n=0,r=e;r;r=getParent(r))n++;for(var o=0,a=t;a;a=getParent(a))o++;// If A is deeper, crawl up.
for(;n-o>0;)e=getParent(e),n--;// If B is deeper, crawl up.
for(;o-n>0;)t=getParent(t),o--;// Walk in lockstep until we find a match.
for(var i=n;i--;){if(e===t||e===t.alternate)return e;e=getParent(e),t=getParent(t)}return null}
/**
 * Return if A is an ancestor of B.
 */
/**
 * Return the parent instance of the passed-in instance.
 */
/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */(e,t):null,i=[];e&&e!==a;){var l=e.alternate;if(null!==l&&l===a)break;i.push(e),e=getParent(e)}for(var u=[];t&&t!==a;){var s=t.alternate;if(null!==s&&s===a)break;u.push(t),t=getParent(t)}for(var c=0;c<i.length;c++)n(i[c],"bubbled",r);for(var d=u.length;d-- >0;)n(u[d],"captured",o)}
/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 */
/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(e,t,n){e||warningWithoutStack$1(!1,"Dispatching inst must not be null");var r=function listenerAtPhase(e,t,n){return getListener(e,t.dispatchConfig.phasedRegistrationNames[n])}(e,n,t);r&&(n._dispatchListeners=accumulateInto(n._dispatchListeners,r),n._dispatchInstances=accumulateInto(n._dispatchInstances,e))}
/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(e){e&&e.dispatchConfig.phasedRegistrationNames&&function traverseTwoPhase(e,t,n){for(var r,o=[];e;)o.push(e),e=getParent(e);for(r=o.length;r-- >0;)t(o[r],"captured",n);for(r=0;r<o.length;r++)t(o[r],"bubbled",n)}(e._targetInst,accumulateDirectionalDispatches,e)}
/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(e,t,n){if(e&&n&&n.dispatchConfig.registrationName){var r=getListener(e,n.dispatchConfig.registrationName);r&&(n._dispatchListeners=accumulateInto(n._dispatchListeners,r),n._dispatchInstances=accumulateInto(n._dispatchInstances,e))}}
/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(e){e&&e.dispatchConfig.registrationName&&accumulateDispatches(e._targetInst,0,e)}function accumulateTwoPhaseDispatches(e){forEachAccumulated(e,accumulateTwoPhaseDispatchesSingle)}
/* eslint valid-typeof: 0 */
var bo=10,Co={type:null,target:null,
// currentTarget is set when dispatching; no use in copying it here
currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */function functionThatReturnsTrue(){return!0}function functionThatReturnsFalse(){return!1}
/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */function SyntheticEvent(e,t,n,r){
// these have a getter/setter for warnings
delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation,delete this.isDefaultPrevented,delete this.isPropagationStopped,this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var a in o)if(o.hasOwnProperty(a)){delete this[a];var i=o[a];i?this[a]=i(n):"target"===a?this.target=r:this[a]=n[a]}var l=null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue;return this.isDefaultPrevented=l?functionThatReturnsTrue:functionThatReturnsFalse,this.isPropagationStopped=functionThatReturnsFalse,this}
/**
 * Helper to nullify syntheticEvent instance properties when destructing
 *
 * @param {String} propName
 * @param {?object} getVal
 * @return {object} defineProperty object
 */
function getPooledWarningPropertyDefinition(e,t){var n="function"===typeof t;return{configurable:!0,set:function set(e){return warn(n?"setting the method":"setting the property","This is effectively a no-op"),e},get:function get(){return warn(n?"accessing the method":"accessing the property",n?"This is a no-op function":"This is set to null"),t}};function warn(t,n){warningWithoutStack$1(!1,"This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",t,e,n)}}function getPooledEvent(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function releasePooledEvent(e){if(!(e instanceof this))throw Error("Trying to release an event instance into a pool of a different type.");e.destructor(),this.eventPool.length<bo&&this.eventPool.push(e)}function addEventPoolingTo(e){e.eventPool=[],e.getPooled=getPooledEvent,e.release=releasePooledEvent}
/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */r(SyntheticEvent.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=functionThatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
e.cancelBubble=!0),this.isPropagationStopped=functionThatReturnsTrue)},
/**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
persist:function(){this.isPersistent=functionThatReturnsTrue},
/**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
isPersistent:functionThatReturnsFalse,
/**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
destructor:function(){var e=this.constructor.Interface;for(var t in e)Object.defineProperty(this,t,getPooledWarningPropertyDefinition(t,e[t]));this.dispatchConfig=null,this._targetInst=null,this.nativeEvent=null,this.isDefaultPrevented=functionThatReturnsFalse,this.isPropagationStopped=functionThatReturnsFalse,this._dispatchListeners=null,this._dispatchInstances=null,Object.defineProperty(this,"nativeEvent",getPooledWarningPropertyDefinition("nativeEvent",null)),Object.defineProperty(this,"isDefaultPrevented",getPooledWarningPropertyDefinition("isDefaultPrevented",functionThatReturnsFalse)),Object.defineProperty(this,"isPropagationStopped",getPooledWarningPropertyDefinition("isPropagationStopped",functionThatReturnsFalse)),Object.defineProperty(this,"preventDefault",getPooledWarningPropertyDefinition("preventDefault",(function(){}))),Object.defineProperty(this,"stopPropagation",getPooledWarningPropertyDefinition("stopPropagation",(function(){})))}}),SyntheticEvent.Interface=Co,
/**
 * Helper to reduce boilerplate when creating subclasses.
 */
SyntheticEvent.extend=function(e){var t=this,E=function(){};E.prototype=t.prototype;var n=new E;function Class(){return t.apply(this,arguments)}return r(n,Class.prototype),Class.prototype=n,Class.prototype.constructor=Class,Class.Interface=r({},t.Interface,e),Class.extend=t.extend,addEventPoolingTo(Class),Class},addEventPoolingTo(SyntheticEvent);var To=SyntheticEvent.extend({animationName:null,elapsedTime:null,pseudoElement:null}),ko=SyntheticEvent.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wo=SyntheticEvent.extend({view:null,detail:null}),So=wo.extend({relatedTarget:null});
/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function getEventCharCode(e){var t,n=e.keyCode;// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in e?// FF does not set `charCode` for the Enter-key, check against `keyCode`.
0===(t=e.charCode)&&13===n&&(t=13):
// IE8 does not implement `charCode`, but `keyCode` has the correct value.
t=n,// IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
// report Enter as charCode 10 when ctrl is pressed.
10===t&&(t=13),t>=32||13===t?t:0}
/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var Eo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};
/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */
var Po={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};// Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function modifierStateGetter(e){var t=this.nativeEvent;if(t.getModifierState)return t.getModifierState(e);var n=Po[e];return!!n&&!!t[n]}function getEventModifierState(e){return modifierStateGetter}
/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */for(var Ro=wo.extend({key:
/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(e){if(e.key){
// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var t=Eo[e.key]||e.key;if("Unidentified"!==t)return t}// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=getEventCharCode(e);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?xo[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState,
// Legacy Interface
charCode:function(e){
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===e.type?getEventCharCode(e):0},keyCode:function(e){
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===e.type?getEventCharCode(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Io=0,Do=0,Fo=!1,Oo=!1,No=wo.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Io;return Io=e.screenX,Fo?"mousemove"===e.type?e.screenX-t:0:(Fo=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Do;return Do=e.screenY,Oo?"mousemove"===e.type?e.screenY-t:0:(Oo=!0,0)}}),_o=No.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Lo=No.extend({dataTransfer:null}),Mo=wo.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState}),Uo=SyntheticEvent.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ao=No.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
"wheelDeltaY"in e?-e.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,
// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null}),Ho=[// Discrete events
[vn,"blur",at],[bn,"cancel",at],[Tn,"click",at],[kn,"close",at],[xn,"contextMenu",at],[Pn,"copy",at],[Rn,"cut",at],[Dn,"auxClick",at],[In,"doubleClick",at],[On,"dragEnd",at],[Un,"dragStart",at],[An,"drop",at],[Vn,"focus",at],[qn,"input",at],[Qn,"invalid",at],[Yn,"keyDown",at],[Kn,"keyPress",at],[Gn,"keyUp",at],[nr,"mouseDown",at],[ir,"mouseUp",at],[lr,"paste",at],[ur,"pause",at],[sr,"play",at],[dr,"pointerCancel",at],[pr,"pointerDown",at],[vr,"pointerUp",at],[yr,"rateChange",at],[br,"reset",at],[Tr,"seeked",at],[Er,"submit",at],[Dr,"touchCancel",at],[Fr,"touchEnd",at],[Nr,"touchStart",at],[Lr,"volumeChange",at],// User-blocking events
[Fn,"drag",it],[Nn,"dragEnter",it],[_n,"dragExit",it],[Ln,"dragLeave",it],[Mn,"dragOver",it],[rr,"mouseMove",it],[or,"mouseOut",it],[ar,"mouseOver",it],[fr,"pointerMove",it],[mr,"pointerOut",it],[hr,"pointerOver",it],[Cr,"scroll",it],[Ir,"toggle",it],[Or,"touchMove",it],[Ur,"wheel",it],// Continuous events
[pn,"abort",lt],[fn,"animationEnd",lt],[mn,"animationIteration",lt],[hn,"animationStart",lt],[gn,"canPlay",lt],[yn,"canPlayThrough",lt],[Hn,"durationChange",lt],[Wn,"emptied",lt],[zn,"encrypted",lt],[jn,"ended",lt],[Bn,"error",lt],[$n,"gotPointerCapture",lt],[Xn,"load",lt],[Zn,"loadedData",lt],[er,"loadedMetadata",lt],[Jn,"loadStart",lt],[tr,"lostPointerCapture",lt],[cr,"playing",lt],[gr,"progress",lt],[kr,"seeking",lt],[Sr,"stalled",lt],[xr,"suspend",lt],[Rr,"timeUpdate",lt],[_r,"transitionEnd",lt],[Mr,"waiting",lt]],Wo={},zo={},jo=0;jo<Ho.length;jo++){var Bo=Ho[jo],Vo=Bo[0],$o=Bo[1],qo=Bo[2],Qo="on"+($o[0].toUpperCase()+$o.slice(1)),Yo={phasedRegistrationNames:{bubbled:Qo,captured:Qo+"Capture"},dependencies:[Vo],eventPriority:qo};Wo[$o]=Yo,zo[Vo]=Yo}// Only used in DEV for exhaustiveness validation.
var Ko=[pn,bn,gn,yn,kn,Hn,Wn,zn,jn,Bn,qn,Qn,Xn,Zn,er,Jn,ur,sr,cr,gr,yr,br,Tr,kr,Sr,Er,xr,Rr,Ir,Lr,Mr],Go={eventTypes:Wo,getEventPriority:function(e){var t=zo[e];return void 0!==t?t.eventPriority:lt},extractEvents:function(e,t,n,r,o){var a,i=zo[e];if(!i)return null;switch(e){case Kn:
// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===getEventCharCode(n))return null;
/* falls through */case Yn:case Gn:a=Ro;break;case vn:case Vn:a=So;break;case Tn:
// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===n.button)return null;
/* falls through */case Dn:case In:case nr:case rr:case ir:// TODO: Disabled elements should not respond to mouse events
/* falls through */case or:case ar:case xn:a=No;break;case Fn:case On:case Nn:case _n:case Ln:case Mn:case Un:case An:a=Lo;break;case Dr:case Fr:case Or:case Nr:a=Mo;break;case fn:case mn:case hn:a=To;break;case _r:a=Uo;break;case Cr:a=wo;break;case Ur:a=Ao;break;case Pn:case Rn:case lr:a=ko;break;case $n:case tr:case dr:case pr:case fr:case mr:case hr:case vr:a=_o;break;default:-1===Ko.indexOf(e)&&warningWithoutStack$1(!1,"SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.",e),// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
a=SyntheticEvent}var l=a.getPooled(i,t,n,r);return accumulateTwoPhaseDispatches(l),l}},Xo=!1;// Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
if(Be&&we)try{var Jo={};// $FlowFixMe: Ignore Flow complaining about needing a value
Object.defineProperty(Jo,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch(kp){Xo=!1}
// Intentionally not named imports because Rollup would use dynamic dispatch for
// CommonJS interop named imports.
var Zo=o.unstable_UserBlockingPriority,ea=o.unstable_runWithPriority,ta=Go.getEventPriority,na=10,ra=[];
/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function findRootContainerNode(e){if(e.tag===D)return e.stateNode.containerInfo;// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
for(;e.return;)e=e.return;return e.tag!==D?null:e.stateNode.containerInfo}// Used to store ancestor hierarchy in top level callback
function handleTopLevel(e){var t=e.targetInst,n=t;// Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
do{if(!n){e.ancestors.push(n);break}var r=findRootContainerNode(n);if(!r)break;var o=n.tag;o!==O&&o!==N||e.ancestors.push(n),n=getClosestInstanceFromNode(r)}while(n);for(var a=0;a<e.ancestors.length;a++){t=e.ancestors[a];var i=getEventTarget(e.nativeEvent);runExtractedPluginEventsInBatch(e.topLevelType,t,e.nativeEvent,i,e.eventSystemFlags)}}// TODO: can we stop exporting these?
var oa=!0;function setEnabled(e){oa=!!e}function trapBubbledEvent(e,t){trapEventForPluginEventSystem(t,e,!1)}function trapCapturedEvent(e,t){trapEventForPluginEventSystem(t,e,!0)}function trapEventForResponderEventSystem(e,t,n){if(Be){var r=getRawEventName(t),o=Ee;// If passive option is not supported, then the event will be
// active and not passive, but we flag it as using not being
// supported too. This way the responder event plugins know,
// and can provide polyfills if needed.
n?Xo?o|=xe:(o|=Pe,o|=Re,n=!1):o|=Pe;// Check if interactive and wrap in discreteUpdates
var a=dispatchEvent.bind(null,t,o);Xo?function addEventCaptureListenerWithPassiveFlag(e,t,n,r){e.addEventListener(t,n,{capture:!0,passive:r})}(e,r,a,n):addEventCaptureListener(e,r,a)}}function trapEventForPluginEventSystem(e,t,n){var r;switch(ta(t)){case at:r=dispatchDiscreteEvent.bind(null,t,Se);break;case it:r=dispatchUserBlockingUpdate.bind(null,t,Se);break;case lt:default:r=dispatchEvent.bind(null,t,Se)}var o=getRawEventName(t);n?addEventCaptureListener(e,o,r):function addEventBubbleListener(e,t,n){e.addEventListener(t,n,!1)}(e,o,r)}function dispatchDiscreteEvent(e,t,n){flushDiscreteUpdatesIfNeeded(n.timeStamp),discreteUpdates(dispatchEvent,e,t,n)}function dispatchUserBlockingUpdate(e,t,n){ea(Zo,dispatchEvent.bind(null,e,t,n))}function dispatchEventForPluginEventSystem(e,t,n,r){var o=function getTopLevelCallbackBookKeeping(e,t,n,r){if(ra.length){var o=ra.pop();return o.topLevelType=e,o.eventSystemFlags=r,o.nativeEvent=t,o.targetInst=n,o}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}(e,n,r,t);try{
// Event queue being processed in the same cycle allows
// `preventDefault`.
batchedEventUpdates(handleTopLevel,o)}finally{!function releaseTopLevelCallbackBookKeeping(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,ra.length<na&&ra.push(e)}(o)}}function dispatchEvent(e,t,n){if(oa)if(function hasQueuedDiscreteEvents(){return so.length>0}()&&isReplayableDiscreteEvent(e))
// If we already have a queue of discrete events, and this is another discrete
// event, then we can't dispatch it regardless of its target, since they
// need to dispatch in order.
queueDiscreteEvent(null,// Flags that we're not actually blocked on anything as far as we know.
e,t,n);else{var r=attemptToDispatchEvent(e,t,n);null!==r?isReplayableDiscreteEvent(e)?
// This this to be replayed later once the target is available.
queueDiscreteEvent(r,e,t,n):function queueIfContinuousEvent(e,t,n,r){
// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(t){case Vn:return co=accumulateOrCreateContinuousQueuedReplayableEvent(co,e,t,n,r),!0;case Nn:return po=accumulateOrCreateContinuousQueuedReplayableEvent(po,e,t,n,r),!0;case ar:return fo=accumulateOrCreateContinuousQueuedReplayableEvent(fo,e,t,n,r),!0;case hr:var o=r,a=o.pointerId;return mo.set(a,accumulateOrCreateContinuousQueuedReplayableEvent(mo.get(a)||null,e,t,n,o)),!0;case $n:var i=r,l=i.pointerId;return ho.set(l,accumulateOrCreateContinuousQueuedReplayableEvent(ho.get(l)||null,e,t,n,i)),!0}return!1}(r,e,t,n)||(// We need to clear only if we didn't queue because
// queueing is accummulative.
clearIfContinuousEvent(e,n),// This is not replayable so we'll invoke it but without a target,
// in case the event system needs to trace it.
Be?(t&Se&&dispatchEventForPluginEventSystem(e,t,n,null),t&Ee&&
// React Flare event system
dispatchEventForResponderEventSystem(e,null,n,getEventTarget(n),t)):dispatchEventForPluginEventSystem(e,t,n,null)):
// We successfully dispatched this event.
clearIfContinuousEvent(e,n)}}// Attempt dispatching an event. Returns a SuspenseInstance or Container if it's blocked.
function attemptToDispatchEvent(e,t,n){
// TODO: Warn if _enabled is false.
var r=getEventTarget(n),o=getClosestInstanceFromNode(r);if(null!==o){var a=getNearestMountedFiber(o);if(null===a)
// This tree has been unmounted already. Dispatch without a target.
o=null;else{var i=a.tag;if(i===W){var l=getSuspenseInstanceFromFiber(a);if(null!==l)
// Queue the event to be replayed later. Abort dispatching since we
// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return l;// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
o=null}else if(i===D){if(a.stateNode.hydrate)
// If this happens during a replay something went wrong and it might block
// the whole system.
return getContainerFromFiber(a);o=null}else a!==o&&(
// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
o=null)}}// We're not blocked on anything.
return Be?(t&Se&&dispatchEventForPluginEventSystem(e,t,n,o),t&Ee&&
// React Flare event system
dispatchEventForResponderEventSystem(e,o,n,r,t)):dispatchEventForPluginEventSystem(e,t,n,o),null}
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(e){if(!we)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n="function"===typeof r[t]}return n}
/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactDOMEventListener, which is injected and can therefore support
 *    pluggable event sources. This is the only work that occurs in the main
 *    thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var aa=new("function"===typeof WeakMap?WeakMap:Map);function getListeningSetForElement(e){var t=aa.get(e);return void 0===t&&(t=new Set,aa.set(e,t)),t}
/**
 * We listen for bubbled touch events on the document object.
 *
 * Firefox v8.01 (and possibly others) exhibited strange behavior when
 * mounting `onmousemove` events at some node that was not the document
 * element. The symptoms were that if your mouse is not moving over something
 * contained within that mount point (for example on the background) the
 * top-level listeners for `onmousemove` won't be called. However, if you
 * register the `mousemove` on the document object, then it will of course
 * catch all `mousemove`s. This along with iOS quirks, justifies restricting
 * top-level listeners to the document object only, at least for these
 * movement types of events and possibly all events.
 *
 * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
 *
 * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
 * they bubble to document.
 *
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @param {object} mountAt Container where to mount the listener
 */function listenToTopLevel(e,t,n){if(!n.has(e)){switch(e){case Cr:trapCapturedEvent(Cr,t);break;case Vn:case vn:trapCapturedEvent(Vn,t),trapCapturedEvent(vn,t),// We set the flag for a single dependency later in this function,
// but this ensures we mark both as attached rather than just one.
n.add(vn),n.add(Vn);break;case bn:case kn:isEventSupported(getRawEventName(e))&&trapCapturedEvent(e,t);break;case Qn:case Er:case br:
// We listen to them on the target DOM elements.
// Some of them bubble so we don't want them to fire twice.
break;default:-1!==Ar.indexOf(e)||trapBubbledEvent(e,t)}n.add(e)}}
// List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
var ia={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},la={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};
/**
 * CSS properties which accept numbers but are not in units of "px".
 */
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var ua=["Webkit","ms","Moz","O"];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||la.hasOwnProperty(e)&&la[e]?(""+t).trim():t+"px"}Object.keys(la).forEach((function(e){ua.forEach((function(t){la[
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=la[e]}))}));var sa=/([A-Z])/g,ca=/^ms-/;var da=/^(?:webkit|moz|o)[A-Z]/,pa=/^-ms-/,fa=/-(.)/g,ma=/;\s*$/,ha={},va={},ga=!1,ya=!1,warnHyphenatedStyleName=function(e){ha.hasOwnProperty(e)&&ha[e]||(ha[e]=!0,warning$1(!1,"Unsupported style property %s. Did you mean %s?",e,e.replace(pa,"ms-").replace(fa,(function(e,t){return t.toUpperCase()}))))},warnValidStyle$1=function(e,t){e.indexOf("-")>-1?warnHyphenatedStyleName(e):da.test(e)?function(e){ha.hasOwnProperty(e)&&ha[e]||(ha[e]=!0,warning$1(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))}(e):ma.test(t)&&function(e,t){va.hasOwnProperty(t)&&va[t]||(va[t]=!0,warning$1(!1,'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',e,t.replace(ma,"")))}(e,t),"number"===typeof t&&(isNaN(t)?function(e,t){ga||(ga=!0,warning$1(!1,"`NaN` is an invalid value for the `%s` css style property.",e))}(e):isFinite(t)||function(e,t){ya||(ya=!0,warning$1(!1,"`Infinity` is an invalid value for the `%s` css style property.",e))}(e))};
/**
 * Operations for dealing with CSS properties.
 */
/**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */
function createDangerousStringForStyles(e){var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(null!=o){var a=0===r.indexOf("--");t+=n+(a?r:r.replace(sa,"-$1").toLowerCase().replace(ca,"-ms-"))+":",t+=dangerousStyleValue(r,o,a),n=";"}}return t||null}
/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */function setValueForStyles(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=0===r.indexOf("--");o||warnValidStyle$1(r,t[r]);var a=dangerousStyleValue(r,t[r],o);"float"===r&&(r="cssFloat"),o?n.setProperty(r,a):n[r]=a}}
/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that each was derived from.
 */
function expandShorthandMap(e){var t={};for(var n in e)for(var r=ia[n]||[n],o=0;o<r.length;o++)t[r[o]]=n;return t}
/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .style.fontVariant = ''
 */
// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var ba=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),Ca="__html",Ta=null;
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
function assertValidProps(e,t){if(t){// Note the use of `==` which checks for null or undefined.
if(ba[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."+Ta.getStackAddendum());if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(!("object"===typeof t.dangerouslySetInnerHTML&&Ca in t.dangerouslySetInnerHTML))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&null!=t.children&&warning$1(!1,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=t.style&&"object"!==typeof t.style)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."+Ta.getStackAddendum())}}function isCustomComponent(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){
// These are reserved SVG and MathML elements.
// We don't mind this whitelist too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}
// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
Ta=K.ReactDebugCurrentFrame;var ka={
// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",
// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},wa={"aria-current":0,
// state
"aria-details":0,"aria-disabled":0,
// state
"aria-hidden":0,
// state
"aria-invalid":0,
// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,
// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,
// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,
// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,
// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Sa={},Ea=new RegExp("^(aria)-["+Et+"]*$"),xa=new RegExp("^(aria)[A-Z]["+Et+"]*$"),Pa=Object.prototype.hasOwnProperty;function validateProperty(e,t){if(Pa.call(Sa,t)&&Sa[t])return!0;if(xa.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=wa.hasOwnProperty(n)?n:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return warning$1(!1,"Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Sa[t]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return warning$1(!1,"Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),Sa[t]=!0,!0}if(Ea.test(t)){var o=t.toLowerCase(),a=wa.hasOwnProperty(o)?o:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==a)return Sa[t]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==a)return warning$1(!1,"Unknown ARIA attribute `%s`. Did you mean `%s`?",t,a),Sa[t]=!0,!0}return!0}function validateProperties(e,t){isCustomComponent(e,t)||function warnInvalidARIAProps(e,t){var n=[];for(var r in t){validateProperty(0,r)||n.push(r)}var o=n.map((function(e){return"`"+e+"`"})).join(", ");1===n.length?warning$1(!1,"Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",o,e):n.length>1&&warning$1(!1,"Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",o,e)}(e,t)}var Ra=!1;var Ia,Da={},Fa=Object.prototype.hasOwnProperty,Oa=/^on./,Na=/^on[^A-Z]/,_a=new RegExp("^(aria)-["+Et+"]*$"),La=new RegExp("^(aria)[A-Z]["+Et+"]*$");Ia=function(e,t,n,r){if(Fa.call(Da,t)&&Da[t])return!0;var o=t.toLowerCase();if("onfocusin"===o||"onfocusout"===o)return warning$1(!1,"React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Da[t]=!0,!0;// We can't rely on the event system being injected on the server.
if(r){if(d.hasOwnProperty(t))return!0;var a=f.hasOwnProperty(o)?f[o]:null;if(null!=a)return warning$1(!1,"Invalid event handler property `%s`. Did you mean `%s`?",t,a),Da[t]=!0,!0;if(Oa.test(t))return warning$1(!1,"Unknown event handler property `%s`. It will be ignored.",t),Da[t]=!0,!0}else if(Oa.test(t))
// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
return Na.test(t)&&warning$1(!1,"Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),Da[t]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(_a.test(t)||La.test(t))return!0;if("innerhtml"===o)return warning$1(!1,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Da[t]=!0,!0;if("aria"===o)return warning$1(!1,"The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Da[t]=!0,!0;if("is"===o&&null!==n&&void 0!==n&&"string"!==typeof n)return warning$1(!1,"Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),Da[t]=!0,!0;if("number"===typeof n&&isNaN(n))return warning$1(!1,"Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),Da[t]=!0,!0;var i=getPropertyInfo(t),l=null!==i&&i.type===yt;// Known attributes should match the casing specified in the property config.
if(ka.hasOwnProperty(o)){var u=ka[o];if(u!==t)return warning$1(!1,"Invalid DOM property `%s`. Did you mean `%s`?",t,u),Da[t]=!0,!0}else if(!l&&t!==o)
// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
return warning$1(!1,"React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,o),Da[t]=!0,!0;return"boolean"===typeof n&&shouldRemoveAttributeWithWarning(t,n,i,!1)?(n?warning$1(!1,'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):warning$1(!1,'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),Da[t]=!0,!0):// Now that we've validated casing, do not validate
// data types for reserved props
!!l||(// Warn when a known attribute is a bad type
shouldRemoveAttributeWithWarning(t,n,i,!1)?(Da[t]=!0,!1):// Warn when passing the strings 'false' or 'true' into a boolean prop
"false"!==n&&"true"!==n||null===i||i.type!==Ct||(warning$1(!1,"Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,"false"===n?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),Da[t]=!0,!0))};var warnUnknownProperties=function(e,t,n){var r=[];for(var o in t){Ia(0,o,t[o],n)||r.push(o)}var a=r.map((function(e){return"`"+e+"`"})).join(", ");1===r.length?warning$1(!1,"Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior",a,e):r.length>1&&warning$1(!1,"Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior",a,e)};
// TODO: direct imports like some-package/src/* are bad. Fix me.
var Ma,Ua,Aa,Ha,Wa,za,ja,Ba,Va,$a,qa=!1,Qa=!1,Ya=!1,Ka="dangerouslySetInnerHTML",Ga="suppressContentEditableWarning",Xa="suppressHydrationWarning",Ja="autoFocus",Za="children",ei="style",ti="__html",ni="listeners",ri=Zt.html;Ma={
// Chrome is the only major browser not shipping <time>. But as of July
// 2017 it intends to ship it due to widespread usage. We intentionally
// *don't* warn for <time> even if it's unrecognized by Chrome because
// it soon will be, and many apps have been using it anyway.
time:!0,
// There are working polyfills for <dialog>. Let people use it.
dialog:!0,
// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:!0},Aa=function(e,t){validateProperties(e,t),function validateProperties$1(e,t){"input"!==e&&"textarea"!==e&&"select"!==e||null==t||null!==t.value||Ra||(Ra=!0,"select"===e&&t.multiple?warning$1(!1,"`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):warning$1(!1,"`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}(e,t),function validateProperties$2(e,t,n){isCustomComponent(e,t)||warnUnknownProperties(e,t,n)}(e,t,
/* canUseEventSystem */
!0)},// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
Ba=we&&!document.documentMode;// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var oi=/\r\n?/g,ai=/\u0000|\uFFFD/g;function ensureListeningTo(e,t){!function listenTo(e,t){for(var n=getListeningSetForElement(t),r=p[e],o=0;o<r.length;o++){listenToTopLevel(r[o],t,n)}}(t,e.nodeType===ln||e.nodeType===un?e:e.ownerDocument)}function getOwnerDocumentFromRootContainer(e){return e.nodeType===ln?e:e.ownerDocument}function noop(){}function trapClickOnNonInteractiveElement(e){
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
e.onclick=noop}function setInitialProperties(e,t,n,r){var o,a=isCustomComponent(t,n);switch(Aa(t,n),a&&!Qa&&e.shadyRoot&&(warning$1(!1,"%s is using shady DOM. Using shady DOM with React can cause things to break subtly.",getCurrentFiberOwnerNameInDevOrNull()||"A component"),Qa=!0),t){case"iframe":case"object":case"embed":trapBubbledEvent(Xn,e),o=n;break;case"video":case"audio":
// Create listener for each media event
for(var i=0;i<Ar.length;i++)trapBubbledEvent(Ar[i],e);o=n;break;case"source":trapBubbledEvent(Bn,e),o=n;break;case"img":case"image":case"link":trapBubbledEvent(Bn,e),trapBubbledEvent(Xn,e),o=n;break;case"form":trapBubbledEvent(br,e),trapBubbledEvent(Er,e),o=n;break;case"details":trapBubbledEvent(Ir,e),o=n;break;case"input":initWrapperState(e,n),o=getHostProps(e,n),trapBubbledEvent(Qn,e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(r,"onChange");break;case"option":validateProps(0,n),o=getHostProps$1(0,n);break;case"select":initWrapperState$1(e,n),o=getHostProps$2(0,n),trapBubbledEvent(Qn,e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(r,"onChange");break;case"textarea":initWrapperState$2(e,n),o=getHostProps$3(e,n),trapBubbledEvent(Qn,e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(r,"onChange");break;default:o=n}switch(assertValidProps(t,o),function setInitialDOMProperties(e,t,n,r,o){for(var a in r)if(r.hasOwnProperty(a)){var i=r[a];if(a===ei)i&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(i),// Relies on `updateStylesByID` not mutating `styleUpdates`.
setValueForStyles(t,i);else if(a===Ka){var l=i?i[ti]:void 0;null!=l&&nn(t,l)}else if(a===Za){if("string"===typeof i)("textarea"!==e||""!==i)&&setTextContent(t,i);else"number"===typeof i&&setTextContent(t,""+i)}else Be&&a===ni||a===Ga||a===Xa||a===Ja||(d.hasOwnProperty(a)?null!=i&&("function"!==typeof i&&ja(a,i),ensureListeningTo(n,a)):null!=i&&setValueForProperty(t,a,i,o))}}(t,e,r,o,a),t){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper(e,n,!1);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper$3(e);break;case"option":!function postMountWrapper$1(e,t){
// value="" should make a value attribute (#6219)
null!=t.value&&e.setAttribute("value",toString(getToStringValue(t.value)))}(e,n);break;case"select":!function postMountWrapper$2(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;null!=r?updateOptions(n,!!t.multiple,r,!1):null!=t.defaultValue&&updateOptions(n,!!t.multiple,t.defaultValue,!0)}(e,n);break;default:"function"===typeof o.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(e)}}// Calculate the diff between the two objects.
function diffProperties(e,t,n,r,o){Aa(t,r);var a,i,l,u,s=null;switch(t){case"input":a=getHostProps(e,n),i=getHostProps(e,r),s=[];break;case"option":a=getHostProps$1(0,n),i=getHostProps$1(0,r),s=[];break;case"select":a=getHostProps$2(0,n),i=getHostProps$2(0,r),s=[];break;case"textarea":a=getHostProps$3(e,n),i=getHostProps$3(e,r),s=[];break;default:i=r,"function"!==typeof(a=n).onClick&&"function"===typeof i.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(e)}assertValidProps(t,i);var c=null;for(l in a)if(!i.hasOwnProperty(l)&&a.hasOwnProperty(l)&&null!=a[l])if(l===ei){var p=a[l];for(u in p)p.hasOwnProperty(u)&&(c||(c={}),c[u]="")}else l===Ka||l===Za||Be&&l===ni||l===Ga||l===Xa||l===Ja||(d.hasOwnProperty(l)?
// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
s||(s=[]):
// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
(s=s||[]).push(l,null));for(l in i){var f=i[l],m=null!=a?a[l]:void 0;if(i.hasOwnProperty(l)&&f!==m&&(null!=f||null!=m))if(l===ei)if(f&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(f),m){
// Unset styles on `lastProp` but not on `nextProp`.
for(u in m)!m.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(c||(c={}),c[u]="");// Update styles that changed since `lastProp`.
for(u in f)f.hasOwnProperty(u)&&m[u]!==f[u]&&(c||(c={}),c[u]=f[u])}else
// Relies on `updateStylesByID` not mutating `styleUpdates`.
c||(s||(s=[]),s.push(l,c)),c=f;else if(l===Ka){var h=f?f[ti]:void 0,v=m?m[ti]:void 0;null!=h&&v!==h&&(s=s||[]).push(l,Mt(h))}else l===Za?m===f||"string"!==typeof f&&"number"!==typeof f||(s=s||[]).push(l,""+f):Be&&l===ni||l===Ga||l===Xa||(d.hasOwnProperty(l)?(null!=f&&(
// We eagerly listen to this even though we haven't committed yet.
"function"!==typeof f&&ja(l,f),ensureListeningTo(o,l)),s||m===f||(
// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
s=[])):
// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
(s=s||[]).push(l,f))}return c&&(!function validateShorthandPropertyCollisionInDev(e,t){if(je&&t){var n,r=expandShorthandMap(e),o=expandShorthandMap(t),a={};for(var i in r){var l=r[i],u=o[i];if(u&&l!==u){var s=l+","+u;if(a[s])continue;a[s]=!0,warning$1(!1,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",null==(n=e[l])||"boolean"===typeof n||""===n?"Removing":"Updating",l,u)}}}}(c,i[ei]),(s=s||[]).push(ei,c)),s}// Apply the diff.
function updateProperties(e,t,n,r,o){
// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
"input"===n&&"radio"===o.type&&null!=o.name&&updateChecked(e,o);isCustomComponent(n,r);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(// Apply the diff.
function updateDOMProperties(e,t,n,r){
// TODO: Handle wasCustomComponentTag
for(var o=0;o<t.length;o+=2){var a=t[o],i=t[o+1];a===ei?setValueForStyles(e,i):a===Ka?nn(e,i):a===Za?setTextContent(e,i):setValueForProperty(e,a,i,r)}}(e,t,0,isCustomComponent(n,o)),n){case"input":
// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
updateWrapper(e,o);break;case"textarea":updateWrapper$1(e,o);break;case"select":
// <select> value update needs to occur after <option> children
// reconciliation
!function postUpdateWrapper(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;null!=o?updateOptions(n,!!t.multiple,o,!1):r!==!!t.multiple&&(
// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=t.defaultValue?updateOptions(n,!!t.multiple,t.defaultValue,!0):
// Revert the select back to its default unselected state.
updateOptions(n,!!t.multiple,t.multiple?[]:"",!1))}(e,o)}}function getPossibleStandardName(e){var t=e.toLowerCase();return ka.hasOwnProperty(t)&&ka[t]||null}function warnForUnmatchedText(e,t){Ha(e.nodeValue,t)}function warnForDeletedHydratableElement(e,t){qa||(qa=!0,warningWithoutStack$1(!1,"Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase()))}function warnForDeletedHydratableText(e,t){qa||(qa=!0,warningWithoutStack$1(!1,'Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase()))}function warnForInsertedHydratedElement(e,t,n){qa||(qa=!0,warningWithoutStack$1(!1,"Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase()))}function warnForInsertedHydratedText(e,t){""!==t&&(qa||(qa=!0,warningWithoutStack$1(!1,'Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())))}function listenToEventResponderEventTypes(e,t){if(Be)// Go through each target event type of the event responder
for(
// Get the listening Set for this element. We use this to track
// what events we're listening to.
var n=getListeningSetForElement(t),r=0,o=e.length;r<o;++r){var a=e[r],i=!endsWith(a,"_active"),l=i?a+"_passive":a,u=i?a:a.substring(0,a.length-7);n.has(l)||(trapEventForResponderEventSystem(t,u,i),n.add(l))}}// We can remove this once the event API is stable and out of a flag
function getActiveElement(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(kp){return e.body}}
/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(e){for(;e&&e.firstChild;)e=e.firstChild;return e}
/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}
/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(e,t){for(var n=getLeafNode(e),r=0,o=0;n;){if(n.nodeType===on){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=getLeafNode(getSiblingNode(n))}}
/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */function getOffsets(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||0===r.rangeCount)return null;var o=r.anchorNode,a=r.anchorOffset,i=r.focusNode,l=r.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{
/* eslint-disable no-unused-expressions */
o.nodeType,i.nodeType}catch(kp){return null}return
/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */
function getModernOffsetsFromPoints(e,t,n,r,o){var a=0,i=-1,l=-1,u=0,s=0,c=e,d=null;e:for(;;){for(var p=null;c!==t||0!==n&&c.nodeType!==on||(i=a+n),c!==r||0!==o&&c.nodeType!==on||(l=a+o),c.nodeType===on&&(a+=c.nodeValue.length),null!==(p=c.firstChild);)// Moving from `node` to its first child `next`.
d=c,c=p;for(;;){if(c===e)
// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break e;if(d===t&&++u===n&&(i=a),d===r&&++s===o&&(l=a),null!==(p=c.nextSibling))break;d=(c=d).parentNode}// Moving from `node` to its next sibling `next`.
c=p}if(-1===i||-1===l)
// This should never happen. (Would happen if the anchor/focus nodes aren't
// actually inside the passed-in node.)
return null;return{start:i,end:l}}
/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */(e,o,a,i,l)}function isTextNode(e){return e&&e.nodeType===on}function isInDocument(e){return e&&e.ownerDocument&&function containsNode(e,t){return!(!e||!t)&&(e===t||!isTextNode(e)&&(isTextNode(t)?containsNode(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}(e.ownerDocument.documentElement,e)}function isSameOriginFrame(e){try{
// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return"string"===typeof e.contentWindow.location.href}catch(t){return!1}}function getActiveElementDeep(){for(var e=window,t=getActiveElement();t instanceof e.HTMLIFrameElement;){if(!isSameOriginFrame(t))return t;t=getActiveElement((e=t.contentWindow).document)}return t}
/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
/**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */function hasSelectionCapabilities(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}
/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */
function restoreSelection(e){var t=getActiveElementDeep(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&isInDocument(n)){null!==r&&hasSelectionCapabilities(n)&&
/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */
function setSelection(e,t){var n=t.start,r=t.end;void 0===r&&(r=n);"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):function setOffsets(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(r.getSelection){var o=r.getSelection(),a=e.textContent.length,i=Math.min(t.start,a),l=void 0===t.end?i:Math.min(t.end,a);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!o.extend&&i>l){var u=l;l=i,i=u}var s=getNodeForCharacterOffset(e,i),c=getNodeForCharacterOffset(e,l);if(s&&c){if(1===o.rangeCount&&o.anchorNode===s.node&&o.anchorOffset===s.offset&&o.focusNode===c.node&&o.focusOffset===c.offset)return;var d=n.createRange();d.setStart(s.node,s.offset),o.removeAllRanges(),i>l?(o.addRange(d),o.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),o.addRange(d))}}}(e,t)}(n,r);// Focusing a node can change the scroll position, which is undesirable
for(var o=[],a=n;a=a.parentNode;)a.nodeType===rn&&o.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof n.focus&&n.focus();for(var i=0;i<o.length;i++){var l=o[i];l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}}
/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */function getSelection(e){return("selectionStart"in e?{start:e.selectionStart,end:e.selectionEnd}:getOffsets(e))||{start:0,end:0}}Va=function(e){return("string"===typeof e?e:""+e).replace(oi,"\n").replace(ai,"")},Ha=function(e,t){if(!qa){var n=Va(t),r=Va(e);r!==n&&(qa=!0,warningWithoutStack$1(!1,'Text content did not match. Server: "%s" Client: "%s"',r,n))}},Wa=function(e,t,n){if(!qa){var r=Va(n),o=Va(t);o!==r&&(qa=!0,warningWithoutStack$1(!1,"Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},za=function(e){if(!qa){qa=!0;var t=[];e.forEach((function(e){t.push(e)})),warningWithoutStack$1(!1,"Extra attributes from the server: %s",t)}},ja=function(e,t){!1===t?warning$1(!1,"Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):warning$1(!1,"Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
$a=function(e,t){
// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var n=e.namespaceURI===ri?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML},Be&&function setListenToResponderEventTypes(e){ot=e}(listenToEventResponderEventTypes);var validateDOMNesting=function(){},updatedAncestorInfo=function(){},ii=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],li=["applet","caption","html","table","td","th","marquee","object","template",// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],ui=li.concat(["button"]),si=["dd","dt","li","option","optgroup","p","rp","rt"],ci={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};updatedAncestorInfo=function(e,t){var n=r({},e||ci),o={tag:t};return-1!==li.indexOf(t)&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),-1!==ui.indexOf(t)&&(n.pTagInButtonScope=null),// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
-1!==ii.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=o,"form"===t&&(n.formTag=o),"a"===t&&(n.aTagInScope=o),"button"===t&&(n.buttonTagInScope=o),"nobr"===t&&(n.nobrTagInScope=o),"p"===t&&(n.pTagInButtonScope=o),"li"===t&&(n.listItemTagAutoclosing=o),"dd"!==t&&"dt"!==t||(n.dlItemTagAutoclosing=o),n};
/**
   * Returns whether
   */
var di={};
/**
   * Returns whether
   */
// can re-export everything from this module.
function shim(){throw Error("The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.")}// Persistence (when unsupported)
validateDOMNesting=function(e,t,n){var r=(n=n||ci).current,o=r&&r.tag;null!=t&&(null!=e&&warningWithoutStack$1(!1,"validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var a=function(e,t){
// First, let's check if we're in an unusual parsing mode...
switch(t){
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case"select":return"option"===e||"optgroup"===e||"#text"===e;case"optgroup":return"option"===e||"#text"===e;
// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case"option":return"#text"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case"tr":return"th"===e||"td"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case"tbody":case"thead":case"tfoot":return"tr"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case"colgroup":return"col"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case"table":return"caption"===e||"colgroup"===e||"tbody"===e||"tfoot"===e||"thead"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case"head":return"base"===e||"basefont"===e||"bgsound"===e||"link"===e||"meta"===e||"title"===e||"noscript"===e||"noframes"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case"html":return"head"===e||"body"===e||"frameset"===e;case"frameset":return"frame"===e;case"#document":return"html"===e}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return-1===si.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":
// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0}(e,o)?null:r,i=a?null:function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":
// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null}(e,n),l=a||i;if(l){var u=l.tag,s=getCurrentFiberStackInDev(),c=!!a+"|"+e+"|"+u+"|"+s;if(!di[c]){di[c]=!0;var d=e,p="";if("#text"===e?/\S/.test(t)?d="Text nodes":(d="Whitespace text nodes",p=" Make sure you don't have any extra whitespace between tags on each line of your source code."):d="<"+e+">",a){var f="";"table"===u&&"tr"===e&&(f+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),warningWithoutStack$1(!1,"validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s",d,u,p,f,s)}else warningWithoutStack$1(!1,"validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s",d,u,s)}}};var pi,fi=!1,mi=shim,hi=shim,vi=shim,gi=shim,yi=shim,bi=shim,Ci=shim,Ti=shim;pi="suppressHydrationWarning";var ki="$",wi="/$",Si="$?",Ei="$!",xi="style",Pi=null,Ri=null;function shouldAutoFocusHostComponent(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function getPublicInstance(e){return e}function prepareForCommit(e){Pi=function isEnabled(){return oa}(),Ri=function getSelectionInformation(){var e=getActiveElementDeep();return{focusedElem:e,selectionRange:hasSelectionCapabilities(e)?getSelection(e):null}}(),setEnabled(!1)}function createInstance(e,t,n,r,o){var a=r;if(validateDOMNesting(e,null,a.ancestorInfo),"string"===typeof t.children||"number"===typeof t.children){var i=""+t.children,l=updatedAncestorInfo(a.ancestorInfo,e);validateDOMNesting(null,i,l)}var u=function createElement(e,t,n,r){var o,a,i=getOwnerDocumentFromRootContainer(n),l=r;// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
if(l===ri&&(l=getIntrinsicNamespace(e)),l===ri){if(// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
(o=isCustomComponent(e,t))||e===e.toLowerCase()||warning$1(!1,"<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),"script"===e){
// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var u=i.createElement("div");Ze&&!Ya&&(warning$1(!1,"Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)."),Ya=!0),u.innerHTML="<script><\/script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var s=u.firstChild;a=u.removeChild(s)}else if("string"===typeof t.is)
// $FlowIssue `createElement` should be updated for Web Components
a=i.createElement(e,{is:t.is});else// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
// attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(
// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
a=i.createElement(e),"select"===e){var c=a;t.multiple?c.multiple=!0:t.size&&(
// Setting a size greater than 1 causes a select to behave like `multiple=true`, where
// it is possible that no option is selected.
//
// This is only necessary when a select in "single selection mode".
c.size=t.size)}}else a=i.createElementNS(l,e);return l===ri&&(o||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(Ma,e)||(Ma[e]=!0,warning$1(!1,"The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e))),a}(e,t,n,a.namespace);return precacheFiberNode(o,u),updateFiberProps(u,t),u}function appendInitialChild(e,t){e.appendChild(t)}function finalizeInitialChildren(e,t,n,r,o){return setInitialProperties(e,t,n,r),shouldAutoFocusHostComponent(t,n)}function prepareUpdate(e,t,n,r,o,a){var i=a;if(typeof r.children!==typeof n.children&&("string"===typeof r.children||"number"===typeof r.children)){var l=""+r.children,u=updatedAncestorInfo(i.ancestorInfo,t);validateDOMNesting(null,l,u)}return diffProperties(e,t,n,r,o)}function shouldSetTextContent(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function shouldDeprioritizeSubtree(e,t){return!!t.hidden}function createTextInstance(e,t,n,r){validateDOMNesting(null,e,n.ancestorInfo);var o=function createTextNode(e,t){return getOwnerDocumentFromRootContainer(t).createTextNode(e)}(e,t);return precacheFiberNode(r,o),o}var Ii=!0,Di=!0,Fi="function"===typeof setTimeout?setTimeout:void 0,Oi="function"===typeof clearTimeout?clearTimeout:void 0,Ni=-1,_i=!0;function resetTextContent(e){setTextContent(e,"")}function appendChild(e,t){e.appendChild(t)}function appendChildToContainer(e,t){var n;e.nodeType===an?(n=e.parentNode).insertBefore(t,e):(n=e).appendChild(t);// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var r=e._reactRootContainer;null!==r&&void 0!==r||null!==n.onclick||
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(n)}function insertBefore(e,t,n){e.insertBefore(t,n)}// This is a specific event for the React Flare
// event system, so event responders can act
// accordingly to a DOM node being unmounted that
// previously had active document focus.
function dispatchDetachedVisibleNodeEvent(e){Be&&Ri&&e===Ri.focusedElem&&// Simlulate a blur event to the React Flare responder system.
dispatchEventForResponderEventSystem("detachedvisiblenode",getClosestInstanceFromNode(e),{target:e,timeStamp:Date.now()},e,Ee|xe)}function removeChild(e,t){dispatchDetachedVisibleNodeEvent(t),e.removeChild(t)}function removeChildFromContainer(e,t){e.nodeType===an?e.parentNode.removeChild(t):(dispatchDetachedVisibleNodeEvent(t),e.removeChild(t))}function clearSuspenseBoundary(e,t){var n=t,r=0;// Delete all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===an){var a=o.data;if(a===wi){if(0===r)return e.removeChild(o),void// Retry if any event replaying was blocked on this.
retryIfBlockedOn(t);r--}else a!==ki&&a!==Si&&a!==Ei||r++}n=o}while(n);// TODO: Warn, we didn't find the end comment boundary.
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(t)}function hideInstance(e){var t=(
// TODO: Does this work for all element types? What about MathML? Should we
// pass host context to this method?
e=e).style;"function"===typeof t.setProperty?t.setProperty("display","none","important"):t.display="none"}function unhideInstance(e,t){e=e;var n=t[xi],r=void 0!==n&&null!==n&&n.hasOwnProperty("display")?n.display:null;e.style.display=dangerousStyleValue("display",r)}function unhideTextInstance(e,t){e.nodeValue=t}// -------------------
//     Hydration
// -------------------
var Li=!0;function isSuspenseInstancePending(e){return e.data===Si}function isSuspenseInstanceFallback(e){return e.data===Ei}function getNextHydratable(e){
// Skip non-hydratable nodes.
for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(t===rn||t===on)break;if(Ae&&t===an){var n=e.data;if(n===ki||n===Ei||n===Si)break}}return e}function getNextHydratableSibling(e){return getNextHydratable(e.nextSibling)}function getFirstHydratableChild(e){return getNextHydratable(e.firstChild)}function hydrateInstance(e,t,n,r,o,a){return precacheFiberNode(a,e),// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(e,n),function diffHydratedProperties(e,t,n,r,o){var a,i;// TODO: Make sure that we check isMounted before firing any of these events.
switch(Ua=!0===n[Xa],a=isCustomComponent(t,n),Aa(t,n),a&&!Qa&&e.shadyRoot&&(warning$1(!1,"%s is using shady DOM. Using shady DOM with React can cause things to break subtly.",getCurrentFiberOwnerNameInDevOrNull()||"A component"),Qa=!0),t){case"iframe":case"object":case"embed":trapBubbledEvent(Xn,e);break;case"video":case"audio":
// Create listener for each media event
for(var l=0;l<Ar.length;l++)trapBubbledEvent(Ar[l],e);break;case"source":trapBubbledEvent(Bn,e);break;case"img":case"image":case"link":trapBubbledEvent(Bn,e),trapBubbledEvent(Xn,e);break;case"form":trapBubbledEvent(br,e),trapBubbledEvent(Er,e);break;case"details":trapBubbledEvent(Ir,e);break;case"input":initWrapperState(e,n),trapBubbledEvent(Qn,e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(o,"onChange");break;case"option":validateProps(0,n);break;case"select":initWrapperState$1(e,n),trapBubbledEvent(Qn,e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(o,"onChange");break;case"textarea":initWrapperState$2(e,n),trapBubbledEvent(Qn,e),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(o,"onChange")}assertValidProps(t,n),i=new Set;for(var u=e.attributes,s=0;s<u.length;s++){switch(u[s].name.toLowerCase()){
// Built-in SSR attribute is whitelisted
case"data-reactroot":
// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":case"checked":case"selected":break;default:
// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
i.add(u[s].name)}}var c=null;for(var p in n)if(n.hasOwnProperty(p)){var f=n[p];if(p===Za)
// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
"string"===typeof f?e.textContent!==f&&(Ua||Ha(e.textContent,f),c=[Za,f]):"number"===typeof f&&e.textContent!==""+f&&(Ua||Ha(e.textContent,f),c=[Za,""+f]);else if(d.hasOwnProperty(p))null!=f&&("function"!==typeof f&&ja(p,f),ensureListeningTo(o,p));else if(// Convince Flow we've calculated it (it's DEV-only in this method.)
"boolean"===typeof a){
// Validate that the properties correspond to their expected values.
var m=void 0,h=getPropertyInfo(p);if(Ua);else if(Be&&p===ni||p===Ga||p===Xa||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===p||"checked"===p||"selected"===p);else if(p===Ka){var v=e.innerHTML,g=f?f[ti]:void 0,y=$a(e,null!=g?g:"");y!==v&&Wa(p,v,y)}else if(p===ei){if(
// $FlowFixMe - Should be inferred as not undefined.
i.delete(p),Ba){var b=createDangerousStringForStyles(f);b!==(m=e.getAttribute("style"))&&Wa(p,m,b)}}else if(a)
// $FlowFixMe - Should be inferred as not undefined.
i.delete(p.toLowerCase()),f!==(m=getValueForAttribute(e,p,f))&&Wa(p,m,f);else if(!shouldIgnoreAttribute(p,h,a)&&!shouldRemoveAttribute(p,f,h,a)){var C=!1;if(null!==h)
// $FlowFixMe - Should be inferred as not undefined.
i.delete(h.attributeName),m=getValueForProperty(e,p,f,h);else{var T=r;if(T===ri&&(T=getIntrinsicNamespace(t)),T===ri)
// $FlowFixMe - Should be inferred as not undefined.
i.delete(p.toLowerCase());else{var k=getPossibleStandardName(p);null!==k&&k!==p&&(
// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
C=!0,// $FlowFixMe - Should be inferred as not undefined.
i.delete(k)),// $FlowFixMe - Should be inferred as not undefined.
i.delete(p)}m=getValueForAttribute(e,p,f)}f===m||C||Wa(p,m,f)}}}switch(
// $FlowFixMe - Should be inferred as not undefined.
i.size>0&&!Ua&&
// $FlowFixMe - Should be inferred as not undefined.
za(i),t){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper(e,n,!0);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper$3(e);break;case"select":case"option":
// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:"function"===typeof n.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(e)}return c}(e,t,n,o.namespace,r)}// Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function getParentSuspenseInstance(e){for(var t=e.previousSibling,n=0// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
;t;){if(t.nodeType===an){var r=t.data;if(r===ki||r===Ei||r===Si){if(0===n)return t;n--}else r===wi&&n++}t=t.previousSibling}return null}function commitHydratedContainer(e){
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(e)}function mountResponderInstance(e,t,n,r,o){
// Listen to events
var a=o.ownerDocument,i=e,l=i.rootEventTypes,u=i.targetEventTypes;return null!==u&&listenToEventResponderEventTypes(u,a),null!==l&&(!function addRootEventTypesForResponderInstance(e,t){for(var n=0;n<t.length;n++){registerRootEventType(t[n],e)}}(t,l),listenToEventResponderEventTypes(l,a)),function mountEventResponder(e,t,n,r){var o=e.onMount;if(null!==o){var a=mt;mt=t;try{batchedEventUpdates((function(){o(gt,n,r)}))}finally{mt=a}}}(e,t,n,r),t}function unmountResponderInstance(e){Be&&
// TODO stop listening to targetEventTypes
function unmountEventResponder(e){var t=e.responder.onUnmount;if(null!==t){var n=e.props,r=e.state,o=mt;mt=e;try{batchedEventUpdates((function(){t(gt,n,r)}))}finally{mt=o}}var a=e.rootEventTypes;if(null!==a)for(var i=Array.from(a),l=0;l<i.length;l++){var u=i[l],s=ct.get(u);void 0!==s&&s.delete(e)}}(e)}var Mi=Math.random().toString(36).slice(2),Ui="__reactInternalInstance$"+Mi,Ai="__reactEventHandlers$"+Mi,Hi="__reactContainere$"+Mi;function precacheFiberNode(e,t){t[Ui]=e}function unmarkContainerAsRoot(e){e[Hi]=null}function isContainerMarkedAsRoot(e){return!!e[Hi]}// Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function getClosestInstanceFromNode(e){var t=e[Ui];if(t)
// Don't return HostRoot or SuspenseComponent here.
return t;// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
for(var n=e.parentNode;n;){if(
// We'll check if this is a container root that could include
// React nodes in the future. We need to check this first because
// if we're a child of a dehydrated container, we need to first
// find that inner container before moving on to finding the parent
// instance. Note that we don't check this field on  the targetNode
// itself because the fibers are conceptually between the container
// node and the first child. It isn't surrounding the container node.
// If it's not a container, we check if it's an instance.
t=n[Hi]||n[Ui]){
// Since this wasn't the direct target of the event, we might have
// stepped past dehydrated DOM nodes to get here. However they could
// also have been non-React nodes. We need to answer which one.
// If we the instance doesn't have any children, then there can't be
// a nested suspense boundary within it. So we can use this as a fast
// bailout. Most of the time, when people add non-React children to
// the tree, it is using a ref to a child-less DOM node.
// Normally we'd only need to check one of the fibers because if it
// has ever gone from having children to deleting them or vice versa
// it would have deleted the dehydrated boundary nested inside already.
// However, since the HostRoot starts out with an alternate it might
// have one on the alternate so we need to check in case this was a
// root.
var r=t.alternate;if(null!==t.child||null!==r&&null!==r.child)for(
// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
var o=getParentSuspenseInstance(e);null!==o;){
// We found a suspense instance. That means that we haven't
// hydrated it yet. Even though we leave the comments in the
// DOM after hydrating, and there are boundaries in the DOM
// that could already be hydrated, we wouldn't have found them
// through this pass since if the target is hydrated it would
// have had an internalInstanceKey on it.
// Let's get the fiber associated with the SuspenseComponent
// as the deepest instance.
var a=o[Ui];if(a)return a;// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
o=getParentSuspenseInstance(o)}return t}n=(e=n).parentNode}return null}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode$1(e){var t=e[Ui]||e[Hi];return t&&(t.tag===O||t.tag===N||t.tag===W||t.tag===D)?t:null}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance$1(e){if(e.tag===O||e.tag===N)
// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return e.stateNode;// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
throw Error("getNodeFromInstance: Invalid argument.")}function getFiberCurrentPropsFromNode$1(e){return e[Ai]||null}function updateFiberProps(e,t){e[Ai]=t}
/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */var Wi=null,zi=null,ji=null;function getData(){if(ji)return ji;var e,t,n=zi,r=n.length,o=getText(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);var l=t>1?1-t:void 0;return ji=o.slice(e,l)}function getText(){return"value"in Wi?Wi.value:Wi.textContent}
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var Bi=SyntheticEvent.extend({data:null}),Vi=SyntheticEvent.extend({data:null}),$i=[9,13,27,32],qi=229,Qi=we&&"CompositionEvent"in window,Yi=null;
/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */we&&"documentMode"in document&&(Yi=document.documentMode);// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var Ki=we&&"TextEvent"in window&&!Yi,Gi=we&&(!Qi||Yi&&Yi>8&&Yi<=11),Xi=32,Ji=String.fromCharCode(Xi),Zi={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:[wn,Kn,Pr,lr]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:[vn,wn,Yn,Kn,Gn,nr]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:[vn,Sn,Yn,Kn,Gn,nr]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:[vn,En,Yn,Kn,Gn,nr]}},el=!1;// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionEnd(e,t){switch(e){case Gn:
// Command keys insert or clear IME input.
return-1!==$i.indexOf(t.keyCode);case Yn:
// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return t.keyCode!==qi;case Kn:case nr:case vn:
// Events are not possible without cancelling IME.
return!0;default:return!1}}
/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(e){var t=e.detail;return"object"===typeof t&&"data"in t?t.data:null}
/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEvent
 * @return {boolean}
 */function isUsingKoreanIME(e){return"ko"===e.locale}// Track the current IME composition status, if any.
var tl=!1;
/**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(e,t,n,r){var o,a;if(Qi?o=
/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(e){switch(e){case Sn:return Zi.compositionStart;case wn:return Zi.compositionEnd;case En:return Zi.compositionUpdate}}
/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */(e):tl?isFallbackCompositionEnd(e,n)&&(o=Zi.compositionEnd):function isFallbackCompositionStart(e,t){return e===Yn&&t.keyCode===qi}(e,n)&&(o=Zi.compositionStart),!o)return null;Gi&&!isUsingKoreanIME(n)&&(
// The current composition is stored statically and must not be
// overwritten while composition continues.
tl||o!==Zi.compositionStart?o===Zi.compositionEnd&&tl&&(a=getData()):tl=function initialize(e){return Wi=e,zi=getText(),!0}(r));var i=Bi.getPooled(o,t,n,r);if(a)
// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
i.data=a;else{var l=getDataFromCustomEvent(n);null!==l&&(i.data=l)}return accumulateTwoPhaseDispatches(i),i}
/**
 * @param {TopLevelType} topLevelType Number from `TopLevelType`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function getFallbackBeforeInputChars(e,t){
// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(tl){if(e===wn||!Qi&&isFallbackCompositionEnd(e,t)){var n=getData();return function reset(){Wi=null,zi=null,ji=null}(),tl=!1,n}return null}switch(e){case lr:
// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case Kn:
/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
if(!
/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(e){return(e.ctrlKey||e.altKey||e.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(e.ctrlKey&&e.altKey)}(t)){
// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case wn:return Gi&&!isUsingKoreanIME(t)?null:t.data;default:return null}}
/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(e,t,n,r){var o;// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(o=Ki?function getNativeBeforeInputChars(e,t){switch(e){case wn:return getDataFromCustomEvent(t);case Kn:return t.which!==Xi?null:(el=!0,Ji);case Pr:
// Record the characters to be added to the DOM.
var n=t.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
return n===Ji&&el?null:n;default:
// For other native event types, do nothing.
return null}}(e,n):getFallbackBeforeInputChars(e,n)))return null;var a=Vi.getPooled(Zi.beforeInput,t,n,r);return a.data=o,accumulateTwoPhaseDispatches(a),a}
/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var nl={eventTypes:Zi,extractEvents:function(e,t,n,r,o){var a=extractCompositionEvent(e,t,n,r),i=extractBeforeInputEvent(e,t,n,r);return null===a?i:null===i?a:[a,i]}},rl={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};
/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */function isTextInputElement(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rl[e.type]:"textarea"===t}var ol={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:[vn,Cn,Tn,Vn,qn,Yn,Gn,wr]}};function createAndAccumulateChangeEvent(e,t,n){var r=SyntheticEvent.getPooled(ol.change,e,t,n);return r.type="change",// Flag this event loop as needing state restore.
enqueueStateRestore(n),accumulateTwoPhaseDispatches(r),r}
/**
 * For IE shims
 */var al=null,il=null;function manualDispatchChangeEvent(e){// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
!function batchedUpdates(e,t){if(tt)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return e(t);tt=!0;try{return batchedUpdatesImpl(e,t)}finally{tt=!1,finishEventHandler()}}(runEventInBatch,createAndAccumulateChangeEvent(il,e,getEventTarget(e)))}function runEventInBatch(e){runEventsInBatch(e)}function getInstIfValueChanged(e){if(updateValueIfChanged(getNodeFromInstance$1(e)))return e}function getTargetInstForChangeEvent(e,t){if(e===Cn)return t}
/**
 * SECTION: handle `input` event
 */var ll=!1;
/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange(){al&&(al.detachEvent("onpropertychange",handlePropertyChange),al=null,il=null)}
/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(e){"value"===e.propertyName&&getInstIfValueChanged(il)&&manualDispatchChangeEvent(e)}function handleEventsForInputEventPolyfill(e,t,n){e===Vn?(
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange(),
/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(e,t){il=t,(al=e).attachEvent("onpropertychange",handlePropertyChange)}(t,n)):e===vn&&stopWatchingForValueChange()}// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(e,t){if(e===wr||e===Gn||e===Yn)
// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return getInstIfValueChanged(il)}
/**
 * SECTION: handle `click` event
 */function getTargetInstForClickEvent(e,t){if(e===Tn)return getInstIfValueChanged(t)}function getTargetInstForInputOrChangeEvent(e,t){if(e===qn||e===Cn)return getInstIfValueChanged(t)}we&&(
// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
ll=isEventSupported("input")&&(!document.documentMode||document.documentMode>9));
/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ul,sl={eventTypes:ol,_isInputEventSupported:ll,extractEvents:function(e,t,n,r,o){var a,i,l=t?getNodeFromInstance$1(t):window;if(!
/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}(l)?isTextInputElement(l)?ll?a=getTargetInstForInputOrChangeEvent:(a=getTargetInstForInputEventPolyfill,i=handleEventsForInputEventPolyfill):function shouldUseClickEvent(e){
// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}(l)&&(a=getTargetInstForClickEvent):a=getTargetInstForChangeEvent,a){var u=a(e,t);if(u)return createAndAccumulateChangeEvent(u,n,r)}i&&i(e,l,t),// When blurring, set the value attribute for number inputs
e===vn&&function handleControlledInputBlur(e){var t=e._wrapperState;t&&t.controlled&&"number"===e.type&&(ze||
// If controlled, assign the value attribute to the current value on blur
setDefaultValue(e,"number",e.value))}(l)}},cl={mouseEnter:{registrationName:"onMouseEnter",dependencies:[or,ar]},mouseLeave:{registrationName:"onMouseLeave",dependencies:[or,ar]},pointerEnter:{registrationName:"onPointerEnter",dependencies:[mr,hr]},pointerLeave:{registrationName:"onPointerLeave",dependencies:[mr,hr]}},dl={eventTypes:cl,
/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
extractEvents:function(e,t,n,r,o){var a,i,l,u,s,c,d,p=e===ar||e===hr,f=e===or||e===mr;if(p&&0===(o&Ie)&&(n.relatedTarget||n.fromElement))
// If this is an over event with a target, then we've already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
return null;if(!f&&!p)
// Must not be a mouse or pointer in or out - ignoring.
return null;if(r.window===r)
// `nativeEventTarget` is probably a window object.
a=r;else{
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var m=r.ownerDocument;a=m?m.defaultView||m.parentWindow:window}if(f){i=t;var h=n.relatedTarget||n.toElement;if(null!==(l=h?getClosestInstanceFromNode(h):null))(l!==getNearestMountedFiber(l)||l.tag!==O&&l.tag!==N)&&(l=null)}else
// Moving to a node from outside the window.
i=null,l=t;if(i===l)
// Nothing pertains to our managed components.
return null;e===or||e===ar?(u=No,s=cl.mouseLeave,c=cl.mouseEnter,d="mouse"):e!==mr&&e!==hr||(u=_o,s=cl.pointerLeave,c=cl.pointerEnter,d="pointer");var v=null==i?a:getNodeFromInstance$1(i),g=null==l?a:getNodeFromInstance$1(l),y=u.getPooled(s,i,n,r);y.type=d+"leave",y.target=v,y.relatedTarget=g;var b=u.getPooled(c,l,n,r);return b.type=d+"enter",b.target=g,b.relatedTarget=v,function accumulateEnterLeaveDispatches(e,t,n,r){traverseEnterLeave(n,r,accumulateDispatches,e,t)}(y,b,i,l),n===ul?(ul=null,[y]):(ul=n,[y,b])}};
/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var pl="function"===typeof Object.is?Object.is:
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},fl=Object.prototype.hasOwnProperty;
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(e,t){if(pl(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;// Test for A's keys different from B.
for(var o=0;o<n.length;o++)if(!fl.call(t,n[o])||!pl(e[n[o]],t[n[o]]))return!1;return!0}var ml=we&&"documentMode"in document&&document.documentMode<=11,hl={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:[vn,xn,On,Vn,Yn,Gn,nr,ir,wr]}},vl=null,gl=null,yl=null,bl=!1;
/**
 * Get document associated with the event target.
 *
 * @param {object} nativeEventTarget
 * @return {Document}
 */
function getEventTargetDocument(e){return e.window===e?e.document:e.nodeType===ln?e:e.ownerDocument}
/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @return {?SyntheticEvent}
 */function constructSelectEvent(e,t){
// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var n=getEventTargetDocument(t);if(bl||null==vl||vl!==getActiveElement(n))return null;// Only fire when selection has actually changed.
var r=
/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getSelection$1(e){if("selectionStart"in e&&hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};var t=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}(vl);if(!yl||!shallowEqual(yl,r)){yl=r;var o=SyntheticEvent.getPooled(hl.select,gl,e,t);return o.type="select",o.target=vl,accumulateTwoPhaseDispatches(o),o}return null}
/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var Cl={eventTypes:hl,extractEvents:function(e,t,n,r,o){var a=getEventTargetDocument(r);// Track whether all listeners exists for this plugin. If none exist, we do
// not extract events. See #3639.
if(!a||!function isListeningToAllDependencies(e,t){for(var n=getListeningSetForElement(t),r=p[e],o=0;o<r.length;o++){var a=r[o];if(!n.has(a))return!1}return!0}("onSelect",a))return null;var i=t?getNodeFromInstance$1(t):window;switch(e){
// Track the input node that has focus.
case Vn:(isTextInputElement(i)||"true"===i.contentEditable)&&(vl=i,gl=t,yl=null);break;case vn:vl=null,gl=null,yl=null;break;
// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case nr:bl=!0;break;case xn:case ir:case On:return bl=!1,constructSelectEvent(n,r);
// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case wr:if(ml)break;
// falls through
case Yn:case Gn:return constructSelectEvent(n,r)}return null}};
/**
 * Inject modules for resolving DOM hierarchy and plugin ordering.
 */x.injectEventPluginOrder(["ResponderEventPlugin","SimpleEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"]),function setComponentTree(e,t,n){k=e,w=t,(S=n)&&w||warningWithoutStack$1(!1,"EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")}(getFiberCurrentPropsFromNode$1,getInstanceFromNode$1,getNodeFromInstance$1),
/**
 * Some important event plugins included by default (without having to require
 * them).
 */
x.injectEventPluginsByName({SimpleEventPlugin:Go,EnterLeaveEventPlugin:dl,ChangeEventPlugin:sl,SelectEventPlugin:Cl,BeforeInputEventPlugin:nl});
// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var Tl="undefined"!==typeof performance&&"function"===typeof performance.mark&&"function"===typeof performance.clearMarks&&"function"===typeof performance.measure&&"function"===typeof performance.clearMeasures,kl=null,wl=null,Sl=null,El=!1,xl=!1,Pl=!1,Rl=0,Il=0,Dl=new Set,formatMarkName=function(e){return"\u269b "+e},beginMark=function(e){performance.mark(formatMarkName(e))},endMark=function(e,t,n){var r=formatMarkName(t),o=function(e,t){return""+(t?"\u26d4 ":"\u269b ")+e+(t?" Warning: "+t:"")}(e,n);try{performance.measure(o,r)}catch(a){}// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(r),performance.clearMeasures(o)},getFiberMarkName=function(e,t){return e+" (#"+t+")"},getFiberLabel=function(e,t,n){return null===n?e+" ["+(t?"update":"mount")+"]":e+"."+n},beginFiberMark=function(e,t){var n=getComponentName(e.type)||"Unknown",r=e._debugID,o=null!==e.alternate,a=getFiberLabel(n,o,t);if(El&&Dl.has(a))
// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return!1;Dl.add(a);var i=getFiberMarkName(a,r);return beginMark(i),!0},clearFiberMark=function(e,t){var n=getComponentName(e.type)||"Unknown",r=e._debugID,o=null!==e.alternate,a=getFiberLabel(n,o,t);!function(e){performance.clearMarks(formatMarkName(e))}(getFiberMarkName(a,r))},endFiberMark=function(e,t,n){var r=getComponentName(e.type)||"Unknown",o=e._debugID,a=null!==e.alternate,i=getFiberLabel(r,a,t),l=getFiberMarkName(i,o);endMark(i,l,n)},shouldIgnoreFiber=function(e){
// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(e.tag){case D:case O:case N:case F:case _:case U:case M:case L:return!0;default:return!1}},clearPendingPhaseMeasurement=function(){null!==wl&&null!==Sl&&clearFiberMark(Sl,wl),Sl=null,wl=null,Pl=!1},pauseTimers=function(){for(
// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var e=kl;e;)e._debugIsCurrentlyTiming&&endFiberMark(e,null,null),e=e.return},resumeTimersRecursively=function(e){null!==e.return&&resumeTimersRecursively(e.return),e._debugIsCurrentlyTiming&&beginFiberMark(e,null)},resumeTimers=function(){
// Resumes all measurements that were active during the last deferred loop.
null!==kl&&resumeTimersRecursively(kl)};function recordEffect(){Ne&&Il++}function startWorkTimer(e){if(Ne){if(!Tl||shouldIgnoreFiber(e))return;// If we pause, this is the fiber to unwind from.
if(kl=e,!beginFiberMark(e,null))return;e._debugIsCurrentlyTiming=!0}}function cancelWorkTimer(e){if(Ne){if(!Tl||shouldIgnoreFiber(e))return;// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
e._debugIsCurrentlyTiming=!1,clearFiberMark(e,null)}}function stopWorkTimer(e){if(Ne){if(!Tl||shouldIgnoreFiber(e))return;// If we pause, its parent is the fiber to unwind from.
if(kl=e.return,!e._debugIsCurrentlyTiming)return;e._debugIsCurrentlyTiming=!1,endFiberMark(e,null,null)}}function stopFailedWorkTimer(e){if(Ne){if(!Tl||shouldIgnoreFiber(e))return;// If we pause, its parent is the fiber to unwind from.
if(kl=e.return,!e._debugIsCurrentlyTiming)return;e._debugIsCurrentlyTiming=!1;var t=e.tag===W?"Rendering was suspended":"An error was thrown inside this error boundary";endFiberMark(e,null,t)}}function startPhaseTimer(e,t){if(Ne){if(!Tl)return;if(clearPendingPhaseMeasurement(),!beginFiberMark(e,t))return;Sl=e,wl=t}}function stopPhaseTimer(){if(Ne){if(!Tl)return;if(null!==wl&&null!==Sl)endFiberMark(Sl,wl,Pl?"Scheduled a cascading update":null);wl=null,Sl=null}}function startWorkLoopTimer(e){if(Ne){if(kl=e,!Tl)return;Rl=0,// This is top level call.
// Any other measurements are performed within.
beginMark("(React Tree Reconciliation)"),// Resume any measurements that were in progress during the last loop.
resumeTimers()}}function stopWorkLoopTimer(e,t){if(Ne){if(!Tl)return;var n=null;if(null!==e)if(e.tag===D)n="A top-level update interrupted the previous render";else n="An update to "+(getComponentName(e.type)||"Unknown")+" interrupted the previous render";else Rl>1&&(n="There were cascading updates");Rl=0;var r=t?"(React Tree Reconciliation: Completed Root)":"(React Tree Reconciliation: Yielded)";// Pause any measurements until the next loop.
pauseTimers(),endMark(r,"(React Tree Reconciliation)",n)}}function startCommitSnapshotEffectsTimer(){if(Ne){if(!Tl)return;Il=0,beginMark("(Committing Snapshot Effects)")}}function stopCommitSnapshotEffectsTimer(){if(Ne){if(!Tl)return;var e=Il;Il=0,endMark("(Committing Snapshot Effects: "+e+" Total)","(Committing Snapshot Effects)",null)}}function startCommitHostEffectsTimer(){if(Ne){if(!Tl)return;Il=0,beginMark("(Committing Host Effects)")}}function stopCommitHostEffectsTimer(){if(Ne){if(!Tl)return;var e=Il;Il=0,endMark("(Committing Host Effects: "+e+" Total)","(Committing Host Effects)",null)}}function startCommitLifeCyclesTimer(){if(Ne){if(!Tl)return;Il=0,beginMark("(Calling Lifecycle Methods)")}}function stopCommitLifeCyclesTimer(){if(Ne){if(!Tl)return;var e=Il;Il=0,endMark("(Calling Lifecycle Methods: "+e+" Total)","(Calling Lifecycle Methods)",null)}}var Fl,Ol=[];Fl=[];var Nl,_l=-1;function createCursor(e){return{current:e}}function pop(e,t){_l<0?warningWithoutStack$1(!1,"Unexpected pop."):(t!==Fl[_l]&&warningWithoutStack$1(!1,"Unexpected Fiber popped."),e.current=Ol[_l],Ol[_l]=null,Fl[_l]=null,_l--)}function push(e,t,n){_l++,Ol[_l]=e.current,Fl[_l]=n,e.current=t}Nl={};var Ll={};Object.freeze(Ll);// A cursor to the current merged context object on the stack.
var Ml=createCursor(Ll),Ul=createCursor(!1),Al=Ll;// A cursor to a boolean indicating whether the context has changed.
function getUnmaskedContext(e,t,n){return Xe?Ll:n&&isContextProvider(t)?Al:Ml.current}function cacheContext(e,t,n){if(!Xe){var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}}function getMaskedContext(e,t){if(Xe)return Ll;var n=e.type,r=n.contextTypes;if(!r)return Ll;// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={};for(var l in r)i[l]=t[l];var u=getComponentName(n)||"Unknown";return a(r,i,"context",u,getCurrentFiberStackInDev),// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
o&&cacheContext(e,t,i),i}function hasContextChanged(){return!Xe&&Ul.current}function isContextProvider(e){if(Xe)return!1;var t=e.childContextTypes;return null!==t&&void 0!==t}function popContext(e){Xe||(pop(Ul,e),pop(Ml,e))}function popTopLevelContextObject(e){Xe||(pop(Ul,e),pop(Ml,e))}function pushTopLevelContextObject(e,t,n){if(!Xe){if(Ml.current!==Ll)throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");push(Ml,t,e),push(Ul,n,e)}}function processChildContext(e,t,n){if(Xe)return n;var o,i=e.stateNode,l=t.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!==typeof i.getChildContext){var u=getComponentName(t)||"Unknown";return Nl[u]||(Nl[u]=!0,warningWithoutStack$1(!1,"%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",u,u)),n}for(var s in setCurrentPhase("getChildContext"),startPhaseTimer(e,"getChildContext"),o=i.getChildContext(),stopPhaseTimer(),setCurrentPhase(null),o)if(!(s in l))throw Error((getComponentName(t)||"Unknown")+'.getChildContext(): key "'+s+'" is not defined in childContextTypes.');var c=getComponentName(t)||"Unknown";return a(l,o,"child context",c,// In practice, there is one case in which we won't get a stack. It's when
// somebody calls unstable_renderSubtreeIntoContainer() and we process
// context from the parent component instance. The stack will be missing
// because it's outside of the reconciliation, and so the pointer has not
// been set. This is rare and doesn't matter. We'll also remove that API.
getCurrentFiberStackInDev),r({},n,{},o)}function pushContextProvider(e){if(Xe)return!1;var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||Ll;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
return Al=Ml.current,push(Ml,n,e),push(Ul,Ul.current,e),!0}function invalidateContextProvider(e,t,n){if(!Xe){var r=e.stateNode;if(!r)throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){
// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var o=processChildContext(e,t,Al);r.__reactInternalMemoizedMergedChildContext=o,// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(Ul,e),pop(Ml,e),// Now push the new context and mark that it has changed.
push(Ml,o,e),push(Ul,n,e)}else pop(Ul,e),push(Ul,n,e)}}function findCurrentUnmaskedContext(e){if(Xe)return Ll;
// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!function isFiberMounted(e){return getNearestMountedFiber(e)===e}(e)||e.tag!==R)throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case D:return t.stateNode.context;case R:if(isContextProvider(t.type))return t.stateNode.__reactInternalMemoizedMergedChildContext}t=t.return}while(null!==t);throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}var Hl=0,Wl=1,zl=2,jl=o.unstable_runWithPriority,Bl=o.unstable_scheduleCallback,Vl=o.unstable_cancelCallback,$l=o.unstable_shouldYield,ql=o.unstable_requestPaint,Ql=o.unstable_now,Yl=o.unstable_getCurrentPriorityLevel,Kl=o.unstable_ImmediatePriority,Gl=o.unstable_UserBlockingPriority,Xl=o.unstable_NormalPriority,Jl=o.unstable_LowPriority,Zl=o.unstable_IdlePriority;if(Ue&&(null==i.__interactionsRef||null==i.__interactionsRef.current))throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");var eu={},tu=99,nu=98,ru=97,ou=96,au=95,iu=90,lu=$l,uu=// Fall back gracefully if we're running an older version of Scheduler.
void 0!==ql?ql:function(){},su=null,cu=null,du=!1,pu=Ql(),fu=pu<1e4?Ql:function(){return Ql()-pu};// Except for NoPriority, these correspond to Scheduler priorities. We use
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
function getCurrentPriorityLevel(){switch(Yl()){case Kl:return tu;case Gl:return nu;case Xl:return ru;case Jl:return ou;case Zl:return au;default:throw Error("Unknown priority level.")}}function reactPriorityToSchedulerPriority(e){switch(e){case tu:return Kl;case nu:return Gl;case ru:return Xl;case ou:return Jl;case au:return Zl;default:throw Error("Unknown priority level.")}}function runWithPriority$2(e,t){var n=reactPriorityToSchedulerPriority(e);return jl(n,t)}function scheduleCallback(e,t,n){var r=reactPriorityToSchedulerPriority(e);return Bl(r,t,n)}function scheduleSyncCallback(e){
// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
return null===su?(su=[e],// Flush the queue in the next tick, at the earliest.
cu=Bl(Kl,flushSyncCallbackQueueImpl)):
// Push onto existing queue. Don't need to schedule a callback because
// we already scheduled one when we created the queue.
su.push(e),eu}function flushSyncCallbackQueue(){if(null!==cu){var e=cu;cu=null,Vl(e)}flushSyncCallbackQueueImpl()}function flushSyncCallbackQueueImpl(){if(!du&&null!==su){
// Prevent re-entrancy.
du=!0;var e=0;try{var t=su;runWithPriority$2(tu,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),su=null}catch(n){
// If something throws, leave the remaining callbacks on the queue.
throw null!==su&&(su=su.slice(e+1)),// Resume flushing in the next tick
Bl(Kl,flushSyncCallbackQueue),n}finally{du=!1}}}var mu=0,hu=1,vu=2,gu=4,yu=8,bu=1073741823,Cu=0,Tu=1,ku=2,wu=3,Su=bu,Eu=Su-1,xu=10,Pu=Eu-1;// 1 unit of expiration time represents 10ms.
function msToExpirationTime(e){
// Always add an offset so that we don't clash with the magic number for NoWork.
return Pu-(e/xu|0)}function expirationTimeToMs(e){return(Pu-e)*xu}function computeExpirationBucket(e,t,n){return Pu-function ceiling(e,t){return(1+(e/t|0))*t}(Pu-e+t/xu,n/xu)}// TODO: This corresponds to Scheduler's NormalPriority, not LowPriority. Update
// the names to reflect.
var Ru=5e3,Iu=250;function computeAsyncExpiration(e){return computeExpirationBucket(e,Ru,Iu)}// We intentionally set a higher expiration time for interactive updates in
// dev than in production.
//
// If the main thread is being blocked so long that you hit the expiration,
// it's a problem that could be solved with better scheduling.
//
// People will be more likely to notice this and fix it with the long
// expiration time in development.
//
// In production we opt for better UX at the risk of masking scheduling
// problems, by expiring fast.
var Du=500,Fu=100;function computeInteractiveExpiration(e){return computeExpirationBucket(e,Du,Fu)}function inferPriorityFromExpirationTime(e,t){if(t===Su)return tu;if(t===Tu||t===ku)return au;var n=expirationTimeToMs(t)-expirationTimeToMs(e);return n<=0?tu:n<=Du+Fu?nu:n<=Ru+Iu?ru:au}
/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var printWarning=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.warn(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(i){}},lowPriorityWarningWithoutStack$1=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];printWarning.apply(void 0,[t].concat(r))}},Ou={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},setToSortedString=function(e){var t=[];return e.forEach((function(e){t.push(e)})),t.sort().join(", ")},Nu=[],_u=[],Lu=[],Mu=[],Uu=[],Au=[],Hu=new Set;Ou.recordUnsafeLifecycleWarnings=function(e,t){
// Dedup strategy: Warn once per component.
Hu.has(e.type)||("function"===typeof t.componentWillMount&&// Don't warn about react-lifecycles-compat polyfilled components.
!0!==t.componentWillMount.__suppressDeprecationWarning&&Nu.push(e),e.mode&hu&&"function"===typeof t.UNSAFE_componentWillMount&&_u.push(e),"function"===typeof t.componentWillReceiveProps&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&Lu.push(e),e.mode&hu&&"function"===typeof t.UNSAFE_componentWillReceiveProps&&Mu.push(e),"function"===typeof t.componentWillUpdate&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&Uu.push(e),e.mode&hu&&"function"===typeof t.UNSAFE_componentWillUpdate&&Au.push(e))},Ou.flushPendingUnsafeLifecycleWarnings=function(){
// We do an initial pass to gather component names
var e=new Set;Nu.length>0&&(Nu.forEach((function(t){e.add(getComponentName(t.type)||"Component"),Hu.add(t.type)})),Nu=[]);var t=new Set;_u.length>0&&(_u.forEach((function(e){t.add(getComponentName(e.type)||"Component"),Hu.add(e.type)})),_u=[]);var n=new Set;Lu.length>0&&(Lu.forEach((function(e){n.add(getComponentName(e.type)||"Component"),Hu.add(e.type)})),Lu=[]);var r=new Set;Mu.length>0&&(Mu.forEach((function(e){r.add(getComponentName(e.type)||"Component"),Hu.add(e.type)})),Mu=[]);var o=new Set;Uu.length>0&&(Uu.forEach((function(e){o.add(getComponentName(e.type)||"Component"),Hu.add(e.type)})),Uu=[]);var a=new Set;// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
if(Au.length>0&&(Au.forEach((function(e){a.add(getComponentName(e.type)||"Component"),Hu.add(e.type)})),Au=[]),t.size>0){var i=setToSortedString(t);warningWithoutStack$1(!1,"Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",i)}if(r.size>0){var l=setToSortedString(r);warningWithoutStack$1(!1,"Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n\nPlease update the following components: %s",l)}if(a.size>0){var u=setToSortedString(a);warningWithoutStack$1(!1,"Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",u)}if(e.size>0){var s=setToSortedString(e);lowPriorityWarningWithoutStack$1(!1,"componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",s)}if(n.size>0){var c=setToSortedString(n);lowPriorityWarningWithoutStack$1(!1,"componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",c)}if(o.size>0){var d=setToSortedString(o);lowPriorityWarningWithoutStack$1(!1,"componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",d)}};var Wu=new Map,zu=new Set;// Tracks components we have already warned about.
Ou.recordLegacyContextWarning=function(e,t){var n=function(e){for(var t=null,n=e;null!==n;)n.mode&hu&&(t=n),n=n.return;return t}(e);if(null!==n){// Dedup strategy: Warn once per component.
if(!zu.has(e.type)){var r=Wu.get(n);(null!=e.type.contextTypes||null!=e.type.childContextTypes||null!==t&&"function"===typeof t.getChildContext)&&(void 0===r&&(r=[],Wu.set(n,r)),r.push(e))}}else warningWithoutStack$1(!1,"Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.")},Ou.flushLegacyContextWarning=function(){Wu.forEach((function(e,t){var n=new Set;e.forEach((function(e){n.add(getComponentName(e.type)||"Component"),zu.add(e.type)}));var r=setToSortedString(n),o=getStackByFiberInDevAndProd(t);warningWithoutStack$1(!1,"Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://fb.me/react-legacy-context%s",r,o)}))},Ou.discardPendingWarnings=function(){Nu=[],_u=[],Lu=[],Mu=[],Uu=[],Au=[],Wu=new Map};var ju=null,Bu=null,setRefreshHandler=function(e){ju=e};// $FlowFixMe Flow gets confused by a WeakSet feature check below.
function resolveFunctionForHotReloading(e){if(null===ju)
// Hot reloading is disabled.
return e;var t=ju(e);return void 0===t?e:t.current;// Use the latest known implementation.
}function resolveClassForHotReloading(e){
// No implementation differences.
return resolveFunctionForHotReloading(e)}function resolveForwardRefForHotReloading(e){if(null===ju)
// Hot reloading is disabled.
return e;var t=ju(e);if(void 0===t){
// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(null!==e&&void 0!==e&&"function"===typeof e.render){
// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var n=resolveFunctionForHotReloading(e.render);if(e.render!==n){var r={$$typeof:ie,render:n};return void 0!==e.displayName&&(r.displayName=e.displayName),r}}return e}// Use the latest known implementation.
return t.current}function isCompatibleFamilyForHotReloading(e,t){if(null===ju)
// Hot reloading is disabled.
return!1;var n=e.elementType,r=t.type,o=!1,a="object"===typeof r&&null!==r?r.$$typeof:null;switch(e.tag){case R:"function"===typeof r&&(o=!0);break;case P:"function"===typeof r?o=!0:a===ce&&(
// We don't know the inner type yet.
// We're going to assume that the lazy inner type is stable,
// and so it is sufficient to avoid reconciling it away.
// We're not going to unwrap or actually use the new lazy type.
o=!0);break;case A:a===ie?o=!0:a===ce&&(o=!0);break;case z:case j:a===se?
// TODO: if it was but can no longer be simple,
// we shouldn't set this.
o=!0:a===ce&&(o=!0);break;default:return!1}// Check if both types have a family and it's the same one.
if(o){
// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var i=ju(n);if(void 0!==i&&i===ju(r))return!0}return!1}function markFailedErrorBoundaryForHotReloading(e){null!==ju&&"function"===typeof WeakSet&&(null===Bu&&(Bu=new WeakSet),Bu.add(e))}var scheduleRefresh=function(e,t){if(null!==ju){var n=t.staleFamilies,r=t.updatedFamilies;flushPassiveEffects(),flushSync((function(){!function scheduleFibersWithFamiliesRecursively(e,t,n){var r=e.alternate,o=e.child,a=e.sibling,i=e.tag,l=e.type,u=null;switch(i){case P:case j:case R:u=l;break;case A:u=l.render}if(null===ju)throw new Error("Expected resolveFamily to be set during hot reload.");var s=!1,c=!1;if(null!==u){var d=ju(u);void 0!==d&&(n.has(d)?c=!0:t.has(d)&&(i===R?c=!0:s=!0))}null!==Bu&&(Bu.has(e)||null!==r&&Bu.has(r))&&(c=!0);c&&(e._debugNeedsRemount=!0);(c||s)&&zd(e,Su);null===o||c||scheduleFibersWithFamiliesRecursively(o,t,n);null!==a&&scheduleFibersWithFamiliesRecursively(a,t,n)}(e.current,r,n)}))}},scheduleRoot=function(e,t){e.context===Ll&&(flushPassiveEffects(),function syncUpdates(e,t,n,r){return runWithPriority$2(tu,e.bind(null,t,n,r))}((function(){updateContainer(t,e,null,null)})))};var findHostInstancesForRefresh=function(e,t){var n=new Set,r=new Set(t.map((function(e){return e.current})));return function findHostInstancesForMatchingFibersRecursively(e,t,n){var r=e.child,o=e.sibling,a=e.tag,i=e.type,l=null;switch(a){case P:case j:case R:l=i;break;case A:l=i.render}var u=!1;null!==l&&t.has(l)&&(u=!0);u?
// We have a match. This only drills down to the closest host components.
// There's no need to search deeper because for the purpose of giving
// visual feedback, "flashing" outermost parent rectangles is sufficient.
function findHostInstancesForFiberShallowly(e,t){if(function findChildHostInstancesForFiberShallowly(e,t){var n=e,r=!1;for(;;){if(n.tag===O)
// We got a match.
r=!0,t.add(n.stateNode);else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;null===n.sibling;){if(null===n.return||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}(e,t))return;// If we didn't find any host children, fallback to closest host parent.
var n=e;for(;;){switch(n.tag){case O:return void t.add(n.stateNode);case F:case D:return void t.add(n.stateNode.containerInfo)}if(null===n.return)throw new Error("Expected to reach root first.");n=n.return}}(e,n):
// If there's no match, maybe there will be one further down in the child tree.
null!==r&&findHostInstancesForMatchingFibersRecursively(r,t,n);null!==o&&findHostInstancesForMatchingFibersRecursively(o,t,n)}(e.current,r,n),n};function resolveDefaultProps(e,t){if(e&&e.defaultProps){
// Resolve default props. Taken from ReactElement
var n=r({},t),o=e.defaultProps;for(var a in o)void 0===n[a]&&(n[a]=o[a]);return n}return t}function readLazyComponentType(e){if(function initializeLazyComponentType(e){if(e._status===ve){e._status=ge;var t=(0,e._ctor)();e._result=t,t.then((function(t){if(e._status===ge){var n=t.default;void 0===n&&warning$1(!1,"lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t),e._status=ye,e._result=n}}),(function(t){e._status===ge&&(e._status=be,e._result=t)}))}}(e),e._status!==ye)throw e._result;return e._result}var Vu,$u=createCursor(null);
// Use this to detect multiple renderers using the same context
Vu={};var qu=null,Qu=null,Yu=null,Ku=!1;function resetContextDependencies(){
// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
qu=null,Qu=null,Yu=null,Ku=!1}function enterDisallowedContextReadInDEV(){Ku=!0}function exitDisallowedContextReadInDEV(){Ku=!1}function pushProvider(e,t){var n=e.type._context;Ii?(push($u,n._currentValue,e),n._currentValue=t,void 0!==n._currentRenderer&&null!==n._currentRenderer&&n._currentRenderer!==Vu&&warningWithoutStack$1(!1,"Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer=Vu):(push($u,n._currentValue2,e),n._currentValue2=t,void 0!==n._currentRenderer2&&null!==n._currentRenderer2&&n._currentRenderer2!==Vu&&warningWithoutStack$1(!1,"Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer2=Vu)}function popProvider(e){var t=$u.current;pop($u,e);var n=e.type._context;Ii?n._currentValue=t:n._currentValue2=t}function scheduleWorkOnParentPath(e,t){for(
// Update the child expiration time of all the ancestors, including
// the alternates.
var n=e;null!==n;){var r=n.alternate;if(n.childExpirationTime<t)n.childExpirationTime=t,null!==r&&r.childExpirationTime<t&&(r.childExpirationTime=t);else{if(!(null!==r&&r.childExpirationTime<t))
// Neither alternate was updated, which means the rest of the
// ancestor path already has sufficient priority.
break;r.childExpirationTime=t}n=n.return}}function prepareToReadContext(e,t){qu=e,Qu=null,Yu=null;var n=e.dependencies;null!==n&&(null!==n.firstContext&&(n.expirationTime>=t&&
// Context list has a pending update. Mark that this fiber performed work.
markWorkInProgressReceivedUpdate(),// Reset the work-in-progress list
n.firstContext=null))}function readContext(e,t){if(
// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
Ku&&warning$1(!1,"Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),Yu===e);else if(!1===t||0===t);else{var n;// Avoid deopting on observable arguments or heterogeneous types.
"number"!==typeof t||t===bu?(
// Observe all updates.
Yu=e,n=bu):n=t;var r={context:e,observedBits:n,next:null};if(null===Qu){if(null===qu)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");// This is the first dependency for this component. Create a new list.
Qu=r,qu.dependencies={expirationTime:Cu,firstContext:r,responders:null}}else
// Append a new context item.
Qu=Qu.next=r}return Ii?e._currentValue:e._currentValue2}
// UpdateQueue is a linked list of prioritized updates.
//
// Like fibers, update queues come in pairs: a current queue, which represents
// the visible state of the screen, and a work-in-progress queue, which can be
// mutated and processed asynchronously before it is committed — a form of
// double buffering. If a work-in-progress render is discarded before finishing,
// we create a new work-in-progress by cloning the current queue.
//
// Both queues share a persistent, singly-linked list structure. To schedule an
// update, we append it to the end of both queues. Each queue maintains a
// pointer to first update in the persistent list that hasn't been processed.
// The work-in-progress pointer always has a position equal to or greater than
// the current queue, since we always work on that one. The current queue's
// pointer is only updated during the commit phase, when we swap in the
// work-in-progress.
//
// For example:
//
//   Current pointer:           A - B - C - D - E - F
//   Work-in-progress pointer:              D - E - F
//                                          ^
//                                          The work-in-progress queue has
//                                          processed more updates than current.
//
// The reason we append to both queues is because otherwise we might drop
// updates without ever processing them. For example, if we only add updates to
// the work-in-progress queue, some updates could be lost whenever a work-in
// -progress render restarts by cloning from current. Similarly, if we only add
// updates to the current queue, the updates will be lost whenever an already
// in-progress queue commits and swaps with the current queue. However, by
// adding to both queues, we guarantee that the update will be part of the next
// work-in-progress. (And because the work-in-progress queue becomes the
// current queue once it commits, there's no danger of applying the same
// update twice.)
//
// Prioritization
// --------------
//
// Updates are not sorted by priority, but by insertion; new updates are always
// appended to the end of the list.
//
// The priority is still important, though. When processing the update queue
// during the render phase, only the updates with sufficient priority are
// included in the result. If we skip an update because it has insufficient
// priority, it remains in the queue to be processed later, during a lower
// priority render. Crucially, all updates subsequent to a skipped update also
// remain in the queue *regardless of their priority*. That means high priority
// updates are sometimes processed twice, at two separate priorities. We also
// keep track of a base state, that represents the state before the first
// update in the queue is applied.
//
// For example:
//
//   Given a base state of '', and the following queue of updates
//
//     A1 - B2 - C1 - D2
//
//   where the number indicates the priority, and the update is applied to the
//   previous state by appending a letter, React will process these updates as
//   two separate renders, one per distinct priority level:
//
//   First render, at priority 1:
//     Base state: ''
//     Updates: [A1, C1]
//     Result state: 'AC'
//
//   Second render, at priority 2:
//     Base state: 'A'            <-  The base state does not include C1,
//                                    because B2 was skipped.
//     Updates: [B2, C1, D2]      <-  C1 was rebased on top of B2
//     Result state: 'ABCD'
//
// Because we process updates in insertion order, and rebase high priority
// updates when preceding updates are skipped, the final result is deterministic
// regardless of priority. Intermediate state may vary according to system
// resources, but the final state is always the same.
var Gu,Xu,Ju=0,Zu=1,es=2,ts=3,ns=!1;function createUpdateQueue(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cloneUpdateQueue(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,
// TODO: With resuming, if we bail out and resuse the child tree, we should
// keep these effects.
firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function createUpdate(e,t){var n={expirationTime:e,suspenseConfig:t,tag:Ju,payload:null,callback:null,next:null,nextEffect:null};return n.priority=getCurrentPriorityLevel(),n}function appendUpdateToQueue(e,t){
// Append the update to the end of the list.
null===e.lastUpdate?
// Queue is empty
e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function enqueueUpdate(e,t){
// Update queues are created lazily.
var n,r,o=e.alternate;null===o?(
// There's only one fiber.
r=null,null===(n=e.updateQueue)&&(n=e.updateQueue=createUpdateQueue(e.memoizedState))):(
// There are two owners.
n=e.updateQueue,r=o.updateQueue,null===n?null===r?(
// Neither fiber has an update queue. Create new ones.
n=e.updateQueue=createUpdateQueue(e.memoizedState),r=o.updateQueue=createUpdateQueue(o.memoizedState)):
// Only one fiber has an update queue. Clone to create a new one.
n=e.updateQueue=cloneUpdateQueue(r):null===r&&(
// Only one fiber has an update queue. Clone to create a new one.
r=o.updateQueue=cloneUpdateQueue(n))),null===r||n===r?
// There's only a single queue.
appendUpdateToQueue(n,t):
// There are two queues. We need to append the update to both queues,
// while accounting for the persistent structure of the list — we don't
// want the same update to be added multiple times.
null===n.lastUpdate||null===r.lastUpdate?(
// One of the queues is not empty. We must add the update to both queues.
appendUpdateToQueue(n,t),appendUpdateToQueue(r,t)):(
// Both queues are non-empty. The last update is the same in both lists,
// because of structural sharing. So, only append to one of the lists.
appendUpdateToQueue(n,t),// But we still need to update the `lastUpdate` pointer of queue2.
r.lastUpdate=t),e.tag!==R||Xu!==n&&(null===r||Xu!==r)||Gu||(warningWithoutStack$1(!1,"An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),Gu=!0)}function enqueueCapturedUpdate(e,t){
// Captured updates go into a separate list, and only on the work-in-
// progress queue.
var n=e.updateQueue;// Append the update to the end of the list.
null===(n=null===n?e.updateQueue=createUpdateQueue(e.memoizedState):ensureWorkInProgressQueueIsAClone(e,n)).lastCapturedUpdate?
// This is the first render phase update
n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function ensureWorkInProgressQueueIsAClone(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=cloneUpdateQueue(t)),t}function getStateFromUpdate(e,t,n,o,a,i){switch(n.tag){case Zu:var l=n.payload;if("function"===typeof l){enterDisallowedContextReadInDEV(),_e&&e.mode&hu&&l.call(i,o,a);var u=l.call(i,o,a);return exitDisallowedContextReadInDEV(),u}// State object
return l;case ts:e.effectTag=e.effectTag&~io|Xr;
// Intentional fallthrough
case Ju:var s,c=n.payload;return"function"===typeof c?(enterDisallowedContextReadInDEV(),_e&&e.mode&hu&&c.call(i,o,a),s=c.call(i,o,a),exitDisallowedContextReadInDEV()):
// Partial state object
s=c,null===s||void 0===s?o:r({},o,s);// Merge the partial state and the previous state.
case es:return ns=!0,o}return o}function processUpdateQueue(e,t,n,r,o){ns=!1,t=ensureWorkInProgressQueueIsAClone(e,t),Xu=t;for(// These values may change as we process the queue.
var a=t.baseState,i=null,l=Cu,u=t.firstUpdate,s=a;null!==u;){var c=u.expirationTime;if(c<o)
// This update does not have sufficient priority. Skip it.
null===i&&(
// This is the first skipped update. It will be the first update in
// the new list.
i=u,// Since this is the first update that was skipped, the current result
// is the new base state.
a=s),// Since this update will remain in the list, update the remaining
// expiration time.
l<c&&(l=c);else
// This update does have sufficient priority.
// Mark the event time of this update as relevant to this render pass.
// TODO: This should ideally use the true event time of this update rather than
// its priority which is a derived and not reverseable value.
// TODO: We should skip this update if it was already committed but currently
// we have no way of detecting the difference between a committed and suspended
// update here.
markRenderEventTimeAndConfig(c,u.suspenseConfig),// Process it and compute a new result.
s=getStateFromUpdate(e,0,u,s,n,r),null!==u.callback&&(e.effectTag|=Gr,// Set this to null, in case it was mutated during an aborted render.
u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u));// Continue to the next update.
u=u.next}// Separately, iterate though the list of captured updates.
var d=null;for(u=t.firstCapturedUpdate;null!==u;){var p=u.expirationTime;if(p<o)
// This update does not have sufficient priority. Skip it.
null===d&&(
// This is the first skipped captured update. It will be the first
// update in the new list.
d=u,// If this is the first update that was skipped, the current result is
// the new base state.
null===i&&(a=s)),// Since this update will remain in the list, update the remaining
// expiration time.
l<p&&(l=p);else
// This update does have sufficient priority. Process it and compute
// a new result.
s=getStateFromUpdate(e,0,u,s,n,r),null!==u.callback&&(e.effectTag|=Gr,// Set this to null, in case it was mutated during an aborted render.
u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u));u=u.next}null===i&&(t.lastUpdate=null),null===d?t.lastCapturedUpdate=null:e.effectTag|=Gr,null===i&&null===d&&(
// We processed every update, without skipping. That means the new base
// state is the same as the result state.
a=s),t.baseState=a,t.firstUpdate=i,t.firstCapturedUpdate=d,// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
markUnprocessedUpdateTime(l),e.expirationTime=l,e.memoizedState=s,Xu=null}function callCallback(e,t){if("function"!==typeof e)throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(t)}function resetHasForceUpdateBeforeProcessing(){ns=!1}function checkHasForceUpdateAfterProcessing(){return ns}function commitUpdateQueue(e,t,n,r){
// If the finished render included captured updates, and there are still
// lower priority updates left over, we need to keep the captured updates
// in the queue so that they are rebased and not dropped once we process the
// queue again at the lower priority.
null!==t.firstCapturedUpdate&&(
// Join the captured update list to the end of the normal list.
null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),// Clear the list of captured updates.
t.firstCapturedUpdate=t.lastCapturedUpdate=null),// Commit the effects
commitUpdateEffects(t.firstEffect,n),t.firstEffect=t.lastEffect=null,commitUpdateEffects(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function commitUpdateEffects(e,t){for(;null!==e;){var n=e.callback;null!==n&&(e.callback=null,callCallback(n,t)),e=e.nextEffect}}Gu=!1,Xu=null;var rs=K.ReactCurrentBatchConfig;function requestCurrentSuspenseConfig(){return rs.suspense}var os,as,ls,us,ss,cs,ds,ps,fs,ms,hs={},vs=Array.isArray,gs=(new t.Component).refs;os=new Set,as=new Set,ls=new Set,us=new Set,ps=new Set,ss=new Set,fs=new Set,ms=new Set;var ys=new Set;function applyDerivedStateFromProps(e,t,n,o){var a=e.memoizedState;_e&&e.mode&hu&&
// Invoke the function an extra time to help detect side-effects.
n(o,a);var i=n(o,a);cs(t,i);// Merge the partial state and the previous state.
var l=null===i||void 0===i?a:r({},a,i);e.memoizedState=l;// Once the update queue is empty, persist the derived state onto the
// base state.
var u=e.updateQueue;null!==u&&e.expirationTime===Cu&&(u.baseState=l)}ds=function(e,t){if(null!==e&&"function"!==typeof e){var n=t+"_"+e;ys.has(n)||(ys.add(n),warningWithoutStack$1(!1,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},cs=function(e,t){if(void 0===t){var n=getComponentName(e)||"Component";ss.has(n)||(ss.add(n),warningWithoutStack$1(!1,"%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(hs,"_processChildContext",{enumerable:!1,value:function(){throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(hs);var bs,Cs,Ts,ks,ws,Ss={isMounted:function isMounted(e){var t=lo.current;if(null!==t&&t.tag===R){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||warningWithoutStack$1(!1,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",getComponentName(n.type)||"A component"),r._warnedAboutRefsInRender=!0}var o=get(e);return!!o&&getNearestMountedFiber(o)===o},enqueueSetState:function(e,t,n){var r=get(e),o=requestCurrentTimeForUpdate(),a=requestCurrentSuspenseConfig(),i=computeExpirationForFiber(o,r,a),l=createUpdate(i,a);l.payload=t,void 0!==n&&null!==n&&(ds(n,"setState"),l.callback=n),enqueueUpdate(r,l),zd(r,i)},enqueueReplaceState:function(e,t,n){var r=get(e),o=requestCurrentTimeForUpdate(),a=requestCurrentSuspenseConfig(),i=computeExpirationForFiber(o,r,a),l=createUpdate(i,a);l.tag=Zu,l.payload=t,void 0!==n&&null!==n&&(ds(n,"replaceState"),l.callback=n),enqueueUpdate(r,l),zd(r,i)},enqueueForceUpdate:function(e,t){var n=get(e),r=requestCurrentTimeForUpdate(),o=requestCurrentSuspenseConfig(),a=computeExpirationForFiber(r,n,o),i=createUpdate(a,o);i.tag=es,void 0!==t&&null!==t&&(ds(t,"forceUpdate"),i.callback=t),enqueueUpdate(n,i),zd(n,a)}};function checkShouldComponentUpdate(e,t,n,r,o,a,i){var l=e.stateNode;if("function"===typeof l.shouldComponentUpdate){startPhaseTimer(e,"shouldComponentUpdate");var u=l.shouldComponentUpdate(r,a,i);return stopPhaseTimer(),void 0===u&&warningWithoutStack$1(!1,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",getComponentName(t)||"Component"),u}return!t.prototype||!t.prototype.isPureReactComponent||(!shallowEqual(n,r)||!shallowEqual(o,a))}function adoptClassInstance(e,t){t.updater=Ss,e.stateNode=t,// The instance needs access to the fiber so that it can schedule updates
function set(e,t){e._reactInternalFiber=t}(t,e),t._reactInternalInstance=hs}function constructClassInstance(e,t,n,r){var o=!1,a=Ll,i=Ll,l=t.contextType;if("contextType"in t&&(!(// Allow null for conditional declaration
null===l||void 0!==l&&l.$$typeof===oe&&void 0===l._context)&&!ms.has(t))){ms.add(t);var u="";u=void 0===l?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"!==typeof l?" However, it is set to a "+typeof l+".":l.$$typeof===re?" Did you accidentally pass the Context.Provider instead?":void 0!==l._context?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(l).join(", ")+"}.",warningWithoutStack$1(!1,"%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",getComponentName(t)||"Component",u)}if("object"===typeof l&&null!==l)i=readContext(l);else if(!Xe){a=getUnmaskedContext(0,t,!0);var s=t.contextTypes;i=(o=null!==s&&void 0!==s)?getMaskedContext(e,a):Ll}// Instantiate twice to help detect side-effects.
_e&&e.mode&hu&&new t(n,i);var c=new t(n,i),d=e.memoizedState=null!==c.state&&void 0!==c.state?c.state:null;if(adoptClassInstance(e,c),"function"===typeof t.getDerivedStateFromProps&&null===d){var p=getComponentName(t)||"Component";as.has(p)||(as.add(p),warningWithoutStack$1(!1,"`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",p,null===c.state?"null":"undefined",p))}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if("function"===typeof t.getDerivedStateFromProps||"function"===typeof c.getSnapshotBeforeUpdate){var f=null,m=null,h=null;if("function"===typeof c.componentWillMount&&!0!==c.componentWillMount.__suppressDeprecationWarning?f="componentWillMount":"function"===typeof c.UNSAFE_componentWillMount&&(f="UNSAFE_componentWillMount"),"function"===typeof c.componentWillReceiveProps&&!0!==c.componentWillReceiveProps.__suppressDeprecationWarning?m="componentWillReceiveProps":"function"===typeof c.UNSAFE_componentWillReceiveProps&&(m="UNSAFE_componentWillReceiveProps"),"function"===typeof c.componentWillUpdate&&!0!==c.componentWillUpdate.__suppressDeprecationWarning?h="componentWillUpdate":"function"===typeof c.UNSAFE_componentWillUpdate&&(h="UNSAFE_componentWillUpdate"),null!==f||null!==m||null!==h){var v=getComponentName(t)||"Component",g="function"===typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";us.has(v)||(us.add(v),warningWithoutStack$1(!1,"Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-unsafe-component-lifecycles",v,g,null!==f?"\n  "+f:"",null!==m?"\n  "+m:"",null!==h?"\n  "+h:""))}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
return o&&cacheContext(e,a,i),c}function callComponentWillReceiveProps(e,t,n,r){var o=t.state;if(startPhaseTimer(e,"componentWillReceiveProps"),"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),stopPhaseTimer(),t.state!==o){var a=getComponentName(e.type)||"Component";os.has(a)||(os.add(a),warningWithoutStack$1(!1,"%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",a)),Ss.enqueueReplaceState(t,t.state,null)}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(e,t,n,r){!function checkClassInstance(e,t,n){var r=e.stateNode,o=getComponentName(t)||"Component";r.render||(t.prototype&&"function"===typeof t.prototype.render?warningWithoutStack$1(!1,"%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):warningWithoutStack$1(!1,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),!r.getInitialState||r.getInitialState.isReactClassApproved||r.state||warningWithoutStack$1(!1,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),!r.getDefaultProps||r.getDefaultProps.isReactClassApproved||warningWithoutStack$1(!1,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),!r.propTypes||warningWithoutStack$1(!1,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),!r.contextType||warningWithoutStack$1(!1,"contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),Xe?(t.childContextTypes&&warningWithoutStack$1(!1,"%s uses the legacy childContextTypes API which is no longer supported. Use React.createContext() instead.",o),t.contextTypes&&warningWithoutStack$1(!1,"%s uses the legacy contextTypes API which is no longer supported. Use React.createContext() with static contextType instead.",o)):(!r.contextTypes||warningWithoutStack$1(!1,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!fs.has(t)&&(fs.add(t),warningWithoutStack$1(!1,"%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o))),"function"!==typeof r.componentShouldUpdate||warningWithoutStack$1(!1,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&"undefined"!==typeof r.shouldComponentUpdate&&warningWithoutStack$1(!1,"%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",getComponentName(t)||"A pure component"),"function"!==typeof r.componentDidUnmount||warningWithoutStack$1(!1,"%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),"function"!==typeof r.componentDidReceiveProps||warningWithoutStack$1(!1,"%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),"function"!==typeof r.componentWillRecieveProps||warningWithoutStack$1(!1,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),"function"!==typeof r.UNSAFE_componentWillRecieveProps||warningWithoutStack$1(!1,"%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o);var a=r.props!==n;void 0!==r.props&&a&&warningWithoutStack$1(!1,"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),!r.defaultProps||warningWithoutStack$1(!1,"Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),"function"!==typeof r.getSnapshotBeforeUpdate||"function"===typeof r.componentDidUpdate||ls.has(t)||(ls.add(t),warningWithoutStack$1(!1,"%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",getComponentName(t))),"function"!==typeof r.getDerivedStateFromProps||warningWithoutStack$1(!1,"%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"!==typeof r.getDerivedStateFromError||warningWithoutStack$1(!1,"%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"!==typeof t.getSnapshotBeforeUpdate||warningWithoutStack$1(!1,"%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o);var i=r.state;i&&("object"!==typeof i||vs(i))&&warningWithoutStack$1(!1,"%s.state: must be set to an object or null",o),"function"===typeof r.getChildContext&&"object"!==typeof t.childContextTypes&&warningWithoutStack$1(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o)}(e,t,n);var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=gs;var a=t.contextType;if("object"===typeof a&&null!==a)o.context=readContext(a);else if(Xe)o.context=Ll;else{var i=getUnmaskedContext(0,t,!0);o.context=getMaskedContext(e,i)}if(o.state===n){var l=getComponentName(t)||"Component";ps.has(l)||(ps.add(l),warningWithoutStack$1(!1,"%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",l))}e.mode&hu&&Ou.recordLegacyContextWarning(e,o),Le&&Ou.recordUnsafeLifecycleWarnings(e,o);var u=e.updateQueue;null!==u&&(processUpdateQueue(e,u,n,o,r),o.state=e.memoizedState);var s=t.getDerivedStateFromProps;"function"===typeof s&&(applyDerivedStateFromProps(e,t,s,n),o.state=e.memoizedState),// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(!function callComponentWillMount(e,t){startPhaseTimer(e,"componentWillMount");var n=t.state;"function"===typeof t.componentWillMount&&t.componentWillMount(),"function"===typeof t.UNSAFE_componentWillMount&&t.UNSAFE_componentWillMount(),stopPhaseTimer(),n!==t.state&&(warningWithoutStack$1(!1,"%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",getComponentName(e.type)||"Component"),Ss.enqueueReplaceState(t,t.state,null))}(e,o),null!==(// If we had additional state updates during this life-cycle, let's
// process them now.
u=e.updateQueue)&&(processUpdateQueue(e,u,n,o,r),o.state=e.memoizedState)),"function"===typeof o.componentDidMount&&(e.effectTag|=qr)}var warnForMissingKey=function(e){};bs=!1,Cs=!1,Ts={},
/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
ks={},ws={},warnForMissingKey=function(e){if(null!==e&&"object"===typeof e&&e._store&&!e._store.validated&&null==e.key){if("object"!==typeof e._store)throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var t='Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'+getCurrentFiberStackInDev();ks[t]||(ks[t]=!0,warning$1(!1,'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'))}};var Es=Array.isArray;function coerceRef(e,t,n){var r=n.ref;if(null!==r&&"function"!==typeof r&&"object"!==typeof r){
// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if(e.mode&hu||Ge){var o=getComponentName(e.type)||"Component";Ts[o]||(Ge?warningWithoutStack$1(!1,'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s',o,r,getStackByFiberInDevAndProd(e)):warningWithoutStack$1(!1,'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s',r,getStackByFiberInDevAndProd(e)),Ts[o]=!0)}if(n._owner){var a,i=n._owner;if(i){var l=i;if(l.tag!==R)throw Error("Function components cannot have refs. Did you mean to use React.forwardRef()?");a=l.stateNode}if(!a)throw Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");var u=""+r;// Check if previous string ref matches new string ref
if(null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===u)return t.ref;var ref=function(e){var t=a.refs;t===gs&&(
// This is a lazy pooled frozen object, so we need to initialize.
t=a.refs={}),null===e?delete t[u]:t[u]=e};return ref._stringRef=u,ref}if("string"!==typeof r)throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw Error("Element ref was specified as a string ("+r+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.")}return r}function throwOnInvalidObjectType(e,t){if("textarea"!==e.type){var n;throw n=" If you meant to render a collection of children, use an array instead."+getCurrentFiberStackInDev(),Error("Objects are not valid as a React child (found: "+("[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t)+")."+n)}}function warnOnFunctionType(){var e="Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."+getCurrentFiberStackInDev();ws[e]||(ws[e]=!0,warning$1(!1,"Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."))}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(e){function deleteChild(t,n){if(e){// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=Yr}}function deleteRemainingChildren(t,n){if(!e)
// Noop.
return null;// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
for(var r=n;null!==r;)deleteChild(t,r),r=r.sibling;return null}function mapRemainingChildren(e,t){for(
// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var n=new Map,r=t;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling;return n}function useFiber(e,t,n){
// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var r=createWorkInProgress(e,t,n);return r.index=0,r.sibling=null,r}function placeChild(t,n,r){if(t.index=r,!e)
// Noop.
return n;var o=t.alternate;if(null!==o){var a=o.index;return a<n?(
// This is a move.
t.effectTag=$r,n):a}
// This is an insertion.
return t.effectTag=$r,n}function placeSingleChild(t){
// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
return e&&null===t.alternate&&(t.effectTag=$r),t}function updateTextNode(e,t,n,r){if(null===t||t.tag!==N){
// Insert
var o=createFiberFromText(n,e.mode,r);return o.return=e,o}
// Update
var a=useFiber(t,n,r);return a.return=e,a}function updateElement(e,t,n,r){if(null===t||t.elementType!==n.type&&// Keep this check inline so it only runs on the false path:
!isCompatibleFamilyForHotReloading(t,n)){
// Insert
var o=createFiberFromElement(n,e.mode,r);return o.ref=coerceRef(e,t,n),o.return=e,o}
// Move based on index
var a=useFiber(t,n.props,r);return a.ref=coerceRef(e,t,n),a.return=e,a._debugSource=n._source,a._debugOwner=n._owner,a}function updatePortal(e,t,n,r){if(null===t||t.tag!==F||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation){
// Insert
var o=createFiberFromPortal(n,e.mode,r);return o.return=e,o}
// Update
var a=useFiber(t,n.children||[],r);return a.return=e,a}function updateFragment(e,t,n,r,o){if(null===t||t.tag!==_){
// Insert
var a=createFiberFromFragment(n,e.mode,r,o);return a.return=e,a}
// Update
var i=useFiber(t,n,r);return i.return=e,i}function createChild(e,t,n){if("string"===typeof t||"number"===typeof t){
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var r=createFiberFromText(""+t,e.mode,n);return r.return=e,r}if("object"===typeof t&&null!==t){switch(t.$$typeof){case J:var o=createFiberFromElement(t,e.mode,n);return o.ref=coerceRef(e,null,t),o.return=e,o;case Z:var a=createFiberFromPortal(t,e.mode,n);return a.return=e,a}if(Es(t)||getIteratorFn(t)){var i=createFiberFromFragment(t,e.mode,n,null);return i.return=e,i}throwOnInvalidObjectType(e,t)}return"function"===typeof t&&warnOnFunctionType(),null}function updateSlot(e,t,n,r){
// Update the fiber if the keys match, otherwise return null.
var o=null!==t?t.key:null;if("string"===typeof n||"number"===typeof n)
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
return null!==o?null:updateTextNode(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case J:return n.key===o?n.type===ee?updateFragment(e,t,n.props.children,r,o):updateElement(e,t,n,r):null;case Z:return n.key===o?updatePortal(e,t,n,r):null}if(Es(n)||getIteratorFn(n))return null!==o?null:updateFragment(e,t,n,r,null);throwOnInvalidObjectType(e,n)}return"function"===typeof n&&warnOnFunctionType(),null}function updateFromMap(e,t,n,r,o){if("string"===typeof r||"number"===typeof r)return updateTextNode(t,e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case J:var a=e.get(null===r.key?n:r.key)||null;return r.type===ee?updateFragment(t,a,r.props.children,o,r.key):updateElement(t,a,r,o);case Z:return updatePortal(t,e.get(null===r.key?n:r.key)||null,r,o)}if(Es(r)||getIteratorFn(r))return updateFragment(t,e.get(n)||null,r,o,null);throwOnInvalidObjectType(t,r)}return"function"===typeof r&&warnOnFunctionType(),null}
/**
   * Warns if there is a duplicate or missing key
   */function warnOnInvalidKey(e,t){if("object"!==typeof e||null===e)return t;switch(e.$$typeof){case J:case Z:warnForMissingKey(e);var n=e.key;if("string"!==typeof n)break;if(null===t){(t=new Set).add(n);break}if(!t.has(n)){t.add(n);break}warning$1(!1,"Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",n)}return t}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
return function reconcileChildFibers(t,n,r,o){
// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var a="object"===typeof r&&null!==r&&r.type===ee&&null===r.key;a&&(r=r.props.children);// Handle object types
var i="object"===typeof r&&null!==r;if(i)switch(r.$$typeof){case J:return placeSingleChild(function reconcileSingleElement(e,t,n,r){for(var o=n.key,a=t;null!==a;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(a.key===o){if(a.tag===_?n.type===ee:a.elementType===n.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(a,n)){deleteRemainingChildren(e,a.sibling);var i=useFiber(a,n.type===ee?n.props.children:n.props,r);return i.ref=coerceRef(e,a,n),i.return=e,i._debugSource=n._source,i._debugOwner=n._owner,i}deleteRemainingChildren(e,a);break}deleteChild(e,a),a=a.sibling}if(n.type===ee){var l=createFiberFromFragment(n.props.children,e.mode,r,n.key);return l.return=e,l}var u=createFiberFromElement(n,e.mode,r);return u.ref=coerceRef(e,t,n),u.return=e,u}(t,n,r,o));case Z:return placeSingleChild(function reconcileSinglePortal(e,t,n,r){for(var o=n.key,a=t;null!==a;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(a.key===o){if(a.tag===F&&a.stateNode.containerInfo===n.containerInfo&&a.stateNode.implementation===n.implementation){deleteRemainingChildren(e,a.sibling);var i=useFiber(a,n.children||[],r);return i.return=e,i}deleteRemainingChildren(e,a);break}deleteChild(e,a),a=a.sibling}var l=createFiberFromPortal(n,e.mode,r);return l.return=e,l}(t,n,r,o))}if("string"===typeof r||"number"===typeof r)return placeSingleChild(function reconcileSingleTextNode(e,t,n,r){
// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==t&&t.tag===N){
// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(e,t.sibling);var o=useFiber(t,n,r);return o.return=e,o}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(e,t);var a=createFiberFromText(n,e.mode,r);return a.return=e,a}(t,n,""+r,o));if(Es(r))return function reconcileChildrenArray(t,n,r,o){for(
// First, validate keys.
var a=null,i=0;i<r.length;i++){a=warnOnInvalidKey(r[i],a)}for(var l=null,u=null,s=n,c=0,d=0,p=null;null!==s&&d<r.length;d++){s.index>d?(p=s,s=null):p=s.sibling;var f=updateSlot(t,s,r[d],o);if(null===f){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===s&&(s=p);break}e&&s&&null===f.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(t,s),c=placeChild(f,c,d),null===u?
// TODO: Move out of the loop. This only happens for the first run.
l=f:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
u.sibling=f,u=f,s=p}if(d===r.length)
// We've reached the end of the new children. We can delete the rest.
return deleteRemainingChildren(t,s),l;if(null===s){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;d<r.length;d++){var m=createChild(t,r[d],o);null!==m&&(c=placeChild(m,c,d),null===u?
// TODO: Move out of the loop. This only happens for the first run.
l=m:u.sibling=m,u=m)}return l}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var h=mapRemainingChildren(0,s);d<r.length;d++){var v=updateFromMap(h,t,d,r[d],o);null!==v&&(e&&null!==v.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
h.delete(null===v.key?d:v.key),c=placeChild(v,c,d),null===u?l=v:u.sibling=v,u=v)}return e&&
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
h.forEach((function(e){return deleteChild(t,e)})),l}(t,n,r,o);if(getIteratorFn(r))return function reconcileChildrenIterator(t,n,r,o){
// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var a=getIteratorFn(r);if("function"!==typeof a)throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
"function"===typeof Symbol&&// $FlowFixMe Flow doesn't know about toStringTag
"Generator"===r[Symbol.toStringTag]&&(Cs||warning$1(!1,"Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),Cs=!0),// Warn about using Maps as children
r.entries===a&&(bs||warning$1(!1,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),bs=!0);// First, validate keys.
// We'll get a different iterator later for the main pass.
var i=a.call(r);if(i)for(var l=null,u=i.next();!u.done;u=i.next()){l=warnOnInvalidKey(u.value,l)}var s=a.call(r);if(null==s)throw Error("An iterable object provided no iterator.");for(var c=null,d=null,p=n,f=0,m=0,h=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(h=p,p=null):h=p.sibling;var g=updateSlot(t,p,v.value,o);if(null===g){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===p&&(p=h);break}e&&p&&null===g.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(t,p),f=placeChild(g,f,m),null===d?
// TODO: Move out of the loop. This only happens for the first run.
c=g:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
d.sibling=g,d=g,p=h}if(v.done)
// We've reached the end of the new children. We can delete the rest.
return deleteRemainingChildren(t,p),c;if(null===p){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!v.done;m++,v=s.next()){var y=createChild(t,v.value,o);null!==y&&(f=placeChild(y,f,m),null===d?
// TODO: Move out of the loop. This only happens for the first run.
c=y:d.sibling=y,d=y)}return c}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var b=mapRemainingChildren(0,p);!v.done;m++,v=s.next()){var C=updateFromMap(b,t,m,v.value,o);null!==C&&(e&&null!==C.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
b.delete(null===C.key?m:C.key),f=placeChild(C,f,m),null===d?c=C:d.sibling=C,d=C)}return e&&
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
b.forEach((function(e){return deleteChild(t,e)})),c}(t,n,r,o);if(i&&throwOnInvalidObjectType(t,r),"function"===typeof r&&warnOnFunctionType(),"undefined"===typeof r&&!a)
// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(t.tag){case R:if(t.stateNode.render._isMockFunction)
// We allow auto-mocks to proceed as if they're returning null.
break;
// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case P:var l=t.type;throw Error((l.displayName||l.name||"Component")+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.")}// Remaining cases are all treated as empty.
return deleteRemainingChildren(t,n)}}var xs=ChildReconciler(!0),Ps=ChildReconciler(!1);// Reset a workInProgress child set to prepare it for a second pass.
function resetChildFibers(e,t){for(var n=e.child;null!==n;)resetWorkInProgress(n,t),n=n.sibling}var Rs={},Is=createCursor(Rs),Ds=createCursor(Rs),Fs=createCursor(Rs);function requiredContext(e){if(e===Rs)throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function getRootHostContainer(){return requiredContext(Fs.current)}function pushHostContainer(e,t){
// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(Fs,t,e),// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(Ds,e,e),// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
push(Is,Rs,e);var n=function getRootHostContext(e){var t,n,r=e.nodeType;switch(r){case ln:case un:t=r===ln?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:getChildNamespace(null,"");break;default:var a=r===an?e.parentNode:e;n=getChildNamespace(a.namespaceURI||null,t=a.tagName)}var i=t.toLowerCase();return{namespace:n,ancestorInfo:updatedAncestorInfo(null,i)}}(t);// Now that we know this function doesn't throw, replace it.
pop(Is,e),push(Is,n,e)}function popHostContainer(e){pop(Is,e),pop(Ds,e),pop(Fs,e)}function getHostContext(){return requiredContext(Is.current)}function pushHostContext(e){requiredContext(Fs.current);var t=requiredContext(Is.current),n=function getChildHostContext(e,t,n){var r=e;return{namespace:getChildNamespace(r.namespace,t),ancestorInfo:updatedAncestorInfo(r.ancestorInfo,t)}}(t,e.type);// Don't push this Fiber's context unless it's unique.
t!==n&&(// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(Ds,e,e),push(Is,n,e))}function popHostContext(e){
// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
Ds.current===e&&(pop(Is,e),pop(Ds,e))}var Os=1,Ns=1,_s=2,Ls=createCursor(0);// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
function hasSuspenseContext(e,t){return 0!==(e&t)}function setDefaultShallowSuspenseContext(e){return e&Os}function setShallowSuspenseContext(e,t){return e&Os|t}function pushSuspenseContext(e,t){push(Ls,t,e)}function popSuspenseContext(e){pop(Ls,e)}function shouldCaptureSuspense(e,t){
// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var n=e.memoizedState;if(null!==n)return null!==n.dehydrated;var r=e.memoizedProps;// In order to capture, the Suspense component must have a fallback prop.
return void 0!==r.fallback&&(// Regular boundaries always capture.
!0!==r.unstable_avoidThisFallback||!t)}function findFirstSuspended(e){for(var t=e;null!==t;){if(t.tag===W){var n=t.memoizedState;if(null!==n){var r=n.dehydrated;if(null===r||isSuspenseInstancePending(r)||isSuspenseInstanceFallback(r))return t}}else if(t.tag===q&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
void 0!==t.memoizedProps.revealOrder){if((t.effectTag&Xr)!==Br)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms={},Us=Array.isArray;function updateEventListener(e,t,n,r,o){var a,i;if(e&&(a=e.responder,i=e.props),!a||a.$$typeof!==pe)throw Error("An invalid value was used as an event listener. Expect one or many event listeners created via React.unstable_useResponder().");var l=i;if(n.has(a))warning$1(!1,'Duplicate event responder "%s" found in event listeners. Event listeners passed to elements cannot use the same event responder more than once.',a.displayName);else{n.add(a);var u=r.get(a);void 0===u?
// Mount (happens in either complete or commit phase)
function mountEventResponder$1(e,t,n,r,o){var a=Ms,i=e.getInitialState;null!==i&&(a=i(t));var l=function createResponderInstance(e,t,n,r){return{fiber:r,props:t,responder:e,rootEventTypes:null,state:n}}(e,t,a,n);if(!o)for(var u=n;null!==u;){var s=u.tag;if(s===O){o=u.stateNode;break}if(s===D){o=u.stateNode.containerInfo;break}u=u.return}mountResponderInstance(e,l,t,a,o),r.set(e,l)}(a,l,t,r,o):(
// Update (happens during commit phase only)
u.props=l,u.fiber=t)}}function updateEventListeners(e,t,n){var r=new Set,o=t.dependencies;if(null!=e){null===o&&(o=t.dependencies={expirationTime:Cu,firstContext:null,responders:new Map});var a=o.responders;if(null===a&&(a=new Map),Us(e))for(var i=0,l=e.length;i<l;i++){updateEventListener(e[i],t,r,a,n)}else updateEventListener(e,t,r,a,n)}if(null!==o){var u=o.responders;if(null!==u)for(
// Unmount
var s=Array.from(u.keys()),c=0,d=s.length;c<d;c++){var p=s[c];if(!r.has(p))unmountResponderInstance(u.get(p)),u.delete(p)}}}function createResponderListener(e,t){var n={responder:e,props:t};return Object.freeze(n),n}var As,Hs=
/*             */
0,Ws=
/*      */
2,zs=
/*      */
4,js=
/*        */
8,Bs=
/*        */
16,Vs=
/*          */
32,$s=
/*         */
64,qs=
/*       */
128,Qs=K.ReactCurrentDispatcher,Ys=K.ReactCurrentBatchConfig;As=new Set;
// These are set right before calling the component.
var Ks=Cu,Gs=null,Xs=null,Js=null,Zs=null,ec=null,tc=null,nc=Cu,rc=null,oc=0,ac=!1,ic=null,lc=0,uc=25,sc=null,cc=null,dc=-1,pc=!1;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
function mountHookTypesDev(){var e=sc;null===cc?cc=[e]:cc.push(e)}function updateHookTypesDev(){var e=sc;null!==cc&&(dc++,cc[dc]!==e&&function warnOnHookMismatchInDev(e){var t=getComponentName(Gs.type);if(!As.has(t)&&(As.add(t),null!==cc)){for(var n="",r=0;r<=dc;r++){// Extra space so second column lines up
// lol @ IE not supporting String#repeat
for(var o=cc[r],a=r===dc?e:o,i=r+1+". "+o;i.length<30;)i+=" ";n+=i+=a+"\n"}warning$1(!1,"React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",t,n)}}(e))}function checkDepsAreArrayDev(e){void 0===e||null===e||Array.isArray(e)||
// Verify deps, but only on mount to avoid extra checks.
// It's unlikely their type would change as usually you define them inline.
warning$1(!1,"%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",sc,typeof e)}function throwInvalidHookError(){throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.")}function areHookInputsEqual(e,t){if(pc)
// Only true when this component is being hot reloaded.
return!1;if(null===t)return warning$1(!1,"%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",sc),!1;
// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
e.length!==t.length&&warning$1(!1,"The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",sc,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!pl(e[n],t[n]))return!1;return!0}function renderWithHooks(e,t,n,r,o,a){Ks=a,Gs=t,Js=null!==e?e.memoizedState:null,cc=null!==e?e._debugHookTypes:null,dc=-1,// Used for hot reloading:
pc=null!==e&&e.type!==t.type,Qs.current=null!==Js?gc:null!==cc?vc:hc;var i=n(r,o);if(ac){do{ac=!1,lc+=1,
// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
pc=!1,// Start over from the beginning of the list
Js=null!==e?e.memoizedState:null,tc=Zs,Xs=null,ec=null,rc=null,
// Also validate hook order for cascading updates.
dc=-1,Qs.current=gc,i=n(r,o)}while(ac);ic=null,lc=0}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
Qs.current=mc;var l=Gs;l.memoizedState=Zs,l.expirationTime=nc,l.updateQueue=rc,l.effectTag|=oc,l._debugHookTypes=cc;// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var u=null!==Xs&&null!==Xs.next;// These were reset above
// didScheduleRenderPhaseUpdate = false;
// renderPhaseUpdates = null;
// numberOfReRenders = 0;
if(Ks=Cu,Gs=null,Xs=null,Js=null,Zs=null,ec=null,tc=null,sc=null,cc=null,dc=-1,nc=Cu,rc=null,oc=0,u)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return i}function bailoutHooks(e,t,n){t.updateQueue=e.updateQueue,t.effectTag&=~(eo|qr),e.expirationTime<=n&&(e.expirationTime=Cu)}function resetHooks(){
// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
Qs.current=mc,// This is used to reset the state of this module when a component throws.
// It's also called inside mountIndeterminateComponent if we determine the
// component is a module-style component.
Ks=Cu,Gs=null,Xs=null,Js=null,Zs=null,ec=null,tc=null,cc=null,dc=-1,sc=null,nc=Cu,rc=null,oc=0,ac=!1,ic=null,lc=0}function mountWorkInProgressHook(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===ec?
// This is the first hook in the list
Zs=ec=e:
// Append to the end of the list
ec=ec.next=e,ec}function updateWorkInProgressHook(){
// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
if(null!==tc)
// There's already a work-in-progress. Reuse it.
tc=(ec=tc).next,Js=null!==(Xs=Js)?Xs.next:null;else{
// Clone from the current hook.
if(null===Js)throw Error("Rendered more hooks than during the previous render.");var e={memoizedState:(Xs=Js).memoizedState,baseState:Xs.baseState,queue:Xs.queue,baseUpdate:Xs.baseUpdate,next:null};
// This is the first hook in the list.
ec=null===ec?Zs=e:ec.next=e,Js=Xs.next}return ec}function basicStateReducer(e,t){return"function"===typeof t?t(e):t}function mountReducer(e,t,n){var r,o=mountWorkInProgressHook();r=void 0!==n?n(t):t,o.memoizedState=o.baseState=r;var a=o.queue={last:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i=a.dispatch=dispatchAction.bind(null,// Flow doesn't know this is non-null, but we do.
Gs,a);return[o.memoizedState,i]}function updateReducer(e,t,n){var r=updateWorkInProgressHook(),o=r.queue;if(null===o)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");if(o.lastRenderedReducer=e,lc>0){
// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var a=o.dispatch;if(null!==ic){
// Render phase updates are stored in a map of queue -> linked list
var i=ic.get(o);if(void 0!==i){ic.delete(o);var l=r.memoizedState,u=i;do{l=e(l,u.action),u=u.next}while(null!==u);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
return pl(l,r.memoizedState)||markWorkInProgressReceivedUpdate(),r.memoizedState=l,// Don't persist the state accumulated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
r.baseUpdate===o.last&&(r.baseState=l),o.lastRenderedState=l,[l,a]}}return[r.memoizedState,a]}// The last update in the entire queue
var s,c=o.last,d=r.baseUpdate,p=r.baseState;// The last update that is part of the base state.
if(null!==d?(null!==c&&(
// For the first update, the queue is a circular linked list where
// `queue.last.next = queue.first`. Once the first update commits, and
// the `baseUpdate` is no longer empty, we can unravel the list.
c.next=null),s=d.next):s=null!==c?c.next:null,null!==s){var f=p,m=null,h=null,v=d,g=s,y=!1;do{var b=g.expirationTime;if(b<Ks)
// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
y||(y=!0,h=v,m=f),// Update the remaining priority in the queue.
b>nc&&markUnprocessedUpdateTime(nc=b);else// Process this update.
if(
// This update does have sufficient priority.
// Mark the event time of this update as relevant to this render pass.
// TODO: This should ideally use the true event time of this update rather than
// its priority which is a derived and not reverseable value.
// TODO: We should skip this update if it was already committed but currently
// we have no way of detecting the difference between a committed and suspended
// update here.
markRenderEventTimeAndConfig(b,g.suspenseConfig),g.eagerReducer===e)
// If this update was processed eagerly, and its reducer matches the
// current reducer, we can use the eagerly computed state.
f=g.eagerState;else f=e(f,g.action);v=g,g=g.next}while(null!==g&&g!==s);y||(h=v,m=f),// Mark that the fiber performed work, but only if the new state is
// different from the current state.
pl(f,r.memoizedState)||markWorkInProgressReceivedUpdate(),r.memoizedState=f,r.baseUpdate=h,r.baseState=m,o.lastRenderedState=f}var C=o.dispatch;return[r.memoizedState,C]}function mountState(e){var t=mountWorkInProgressHook();"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e;var n=t.queue={last:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:e},r=n.dispatch=dispatchAction.bind(null,// Flow doesn't know this is non-null, but we do.
Gs,n);return[t.memoizedState,r]}function updateState(e){return updateReducer(basicStateReducer)}function pushEffect(e,t,n,r){var o={tag:e,create:t,destroy:n,deps:r,
// Circular
next:null};if(null===rc)(rc={lastEffect:null}).lastEffect=o.next=o;else{var a=rc.lastEffect;if(null===a)rc.lastEffect=o.next=o;else{var i=a.next;a.next=o,o.next=i,rc.lastEffect=o}}return o}function mountRef(e){var t=mountWorkInProgressHook(),n={current:e};return Object.seal(n),t.memoizedState=n,n}function updateRef(e){return updateWorkInProgressHook().memoizedState}function mountEffectImpl(e,t,n,r){var o=mountWorkInProgressHook(),a=void 0===r?null:r;oc|=e,o.memoizedState=pushEffect(t,n,void 0,a)}function updateEffectImpl(e,t,n,r){var o=updateWorkInProgressHook(),a=void 0===r?null:r,i=void 0;if(null!==Xs){var l=Xs.memoizedState;if(i=l.destroy,null!==a)if(areHookInputsEqual(a,l.deps))return void pushEffect(Hs,n,i,a)}oc|=e,o.memoizedState=pushEffect(t,n,i,a)}function mountEffect(e,t){
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
return"undefined"!==typeof jest&&warnIfNotCurrentlyActingEffectsInDEV(Gs),mountEffectImpl(qr|eo,qs|$s,e,t)}function updateEffect(e,t){
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
return"undefined"!==typeof jest&&warnIfNotCurrentlyActingEffectsInDEV(Gs),updateEffectImpl(qr|eo,qs|$s,e,t)}function mountLayoutEffect(e,t){return mountEffectImpl(qr,zs|Vs,e,t)}function updateLayoutEffect(e,t){return updateEffectImpl(qr,zs|Vs,e,t)}function imperativeHandleEffect(e,t){if("function"===typeof t){var n=t,r=e();return n(r),function(){n(null)}}if(null!==t&&void 0!==t){var o=t;o.hasOwnProperty("current")||warning$1(!1,"Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}");var a=e();return o.current=a,function(){o.current=null}}}function mountImperativeHandle(e,t,n){"function"!==typeof t&&warning$1(!1,"Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");// TODO: If deps are provided, should we skip comparing the ref itself?
var r=null!==n&&void 0!==n?n.concat([e]):null;return mountEffectImpl(qr,zs|Vs,imperativeHandleEffect.bind(null,t,e),r)}function updateImperativeHandle(e,t,n){"function"!==typeof t&&warning$1(!1,"Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");// TODO: If deps are provided, should we skip comparing the ref itself?
var r=null!==n&&void 0!==n?n.concat([e]):null;return updateEffectImpl(qr,zs|Vs,imperativeHandleEffect.bind(null,t,e),r)}function mountDebugValue(e,t){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}var fc=mountDebugValue;function mountCallback(e,t){var n=void 0===t?null:t;return mountWorkInProgressHook().memoizedState=[e,n],e}function updateCallback(e,t){var n=updateWorkInProgressHook(),r=void 0===t?null:t,o=n.memoizedState;if(null!==o&&(null!==r&&areHookInputsEqual(r,o[1])))return o[0];return n.memoizedState=[e,r],e}function mountMemo(e,t){var n=mountWorkInProgressHook(),r=void 0===t?null:t,o=e();return n.memoizedState=[o,r],o}function updateMemo(e,t){var n=updateWorkInProgressHook(),r=void 0===t?null:t,o=n.memoizedState;if(null!==o&&(null!==r&&areHookInputsEqual(r,o[1])))return o[0];var a=e();return n.memoizedState=[a,r],a}function mountDeferredValue(e,t){var n=mountState(e),r=n[0],a=n[1];return mountEffect((function(){o.unstable_next((function(){var n=Ys.suspense;Ys.suspense=void 0===t?null:t;try{a(e)}finally{Ys.suspense=n}}))}),[e,t]),r}function updateDeferredValue(e,t){var n=updateState(),r=n[0],a=n[1];return updateEffect((function(){o.unstable_next((function(){var n=Ys.suspense;Ys.suspense=void 0===t?null:t;try{a(e)}finally{Ys.suspense=n}}))}),[e,t]),r}function mountTransition(e){var t=mountState(!1),n=t[0],r=t[1];return[mountCallback((function(t){r(!0),o.unstable_next((function(){var n=Ys.suspense;Ys.suspense=void 0===e?null:e;try{r(!1),t()}finally{Ys.suspense=n}}))}),[e,n]),n]}function updateTransition(e){var t=updateState(),n=t[0],r=t[1];return[updateCallback((function(t){r(!0),o.unstable_next((function(){var n=Ys.suspense;Ys.suspense=void 0===e?null:e;try{r(!1),t()}finally{Ys.suspense=n}}))}),[e,n]),n]}function dispatchAction(e,t,n){if(!(lc<uc))throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");"function"===typeof arguments[3]&&warning$1(!1,"State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=e.alternate;if(e===Gs||null!==r&&r===Gs){
// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
ac=!0;var o={expirationTime:Ks,suspenseConfig:null,action:n,eagerReducer:null,eagerState:null,next:null};o.priority=getCurrentPriorityLevel(),null===ic&&(ic=new Map);var a=ic.get(t);if(void 0===a)ic.set(t,o);else{for(
// Append the update to the end of the list.
var i=a;null!==i.next;)i=i.next;i.next=o}}else{var l=requestCurrentTimeForUpdate(),u=requestCurrentSuspenseConfig(),s=computeExpirationForFiber(l,e,u),c={expirationTime:s,suspenseConfig:u,action:n,eagerReducer:null,eagerState:null,next:null};c.priority=getCurrentPriorityLevel();// Append the update to the end of the list.
var d=t.last;if(null===d)
// This is the first update. Create a circular list.
c.next=c;else{var p=d.next;null!==p&&(
// Still circular.
c.next=p),d.next=c}if(t.last=c,e.expirationTime===Cu&&(null===r||r.expirationTime===Cu)){
// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var f=t.lastRenderedReducer;if(null!==f){var m;m=Qs.current,Qs.current=bc;try{var h=t.lastRenderedState,v=f(h,n);if(// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
c.eagerReducer=f,c.eagerState=v,pl(v,h))
// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return}catch(g){// Suppress the error. It will throw again in the render phase.
}finally{Qs.current=m}}}
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
"undefined"!==typeof jest&&(warnIfNotScopedWithMatchingAct(e),Yd(e)),zd(e,s)}}var mc={readContext:readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useResponder:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError},hc=null,vc=null,gc=null,yc=null,bc=null,warnInvalidContextAccess=function(){warning$1(!1,"Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},warnInvalidHookAccess=function(){warning$1(!1,"Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks")};hc={readContext:function(e,t){return readContext(e,t)},useCallback:function(e,t){return sc="useCallback",mountHookTypesDev(),checkDepsAreArrayDev(t),mountCallback(e,t)},useContext:function(e,t){return sc="useContext",mountHookTypesDev(),readContext(e,t)},useEffect:function(e,t){return sc="useEffect",mountHookTypesDev(),checkDepsAreArrayDev(t),mountEffect(e,t)},useImperativeHandle:function(e,t,n){return sc="useImperativeHandle",mountHookTypesDev(),checkDepsAreArrayDev(n),mountImperativeHandle(e,t,n)},useLayoutEffect:function(e,t){return sc="useLayoutEffect",mountHookTypesDev(),checkDepsAreArrayDev(t),mountLayoutEffect(e,t)},useMemo:function(e,t){sc="useMemo",mountHookTypesDev(),checkDepsAreArrayDev(t);var n=Qs.current;Qs.current=yc;try{return mountMemo(e,t)}finally{Qs.current=n}},useReducer:function(e,t,n){sc="useReducer",mountHookTypesDev();var r=Qs.current;Qs.current=yc;try{return mountReducer(e,t,n)}finally{Qs.current=r}},useRef:function(e){return sc="useRef",mountHookTypesDev(),mountRef(e)},useState:function(e){sc="useState",mountHookTypesDev();var t=Qs.current;Qs.current=yc;try{return mountState(e)}finally{Qs.current=t}},useDebugValue:function(e,t){sc="useDebugValue",mountHookTypesDev()},useResponder:function(e,t){return sc="useResponder",mountHookTypesDev(),createResponderListener(e,t)},useDeferredValue:function(e,t){return sc="useDeferredValue",mountHookTypesDev(),mountDeferredValue(e,t)},useTransition:function(e){return sc="useTransition",mountHookTypesDev(),mountTransition(e)}},vc={readContext:function(e,t){return readContext(e,t)},useCallback:function(e,t){return sc="useCallback",updateHookTypesDev(),mountCallback(e,t)},useContext:function(e,t){return sc="useContext",updateHookTypesDev(),readContext(e,t)},useEffect:function(e,t){return sc="useEffect",updateHookTypesDev(),mountEffect(e,t)},useImperativeHandle:function(e,t,n){return sc="useImperativeHandle",updateHookTypesDev(),mountImperativeHandle(e,t,n)},useLayoutEffect:function(e,t){return sc="useLayoutEffect",updateHookTypesDev(),mountLayoutEffect(e,t)},useMemo:function(e,t){sc="useMemo",updateHookTypesDev();var n=Qs.current;Qs.current=yc;try{return mountMemo(e,t)}finally{Qs.current=n}},useReducer:function(e,t,n){sc="useReducer",updateHookTypesDev();var r=Qs.current;Qs.current=yc;try{return mountReducer(e,t,n)}finally{Qs.current=r}},useRef:function(e){return sc="useRef",updateHookTypesDev(),mountRef(e)},useState:function(e){sc="useState",updateHookTypesDev();var t=Qs.current;Qs.current=yc;try{return mountState(e)}finally{Qs.current=t}},useDebugValue:function(e,t){sc="useDebugValue",updateHookTypesDev()},useResponder:function(e,t){return sc="useResponder",updateHookTypesDev(),createResponderListener(e,t)},useDeferredValue:function(e,t){return sc="useDeferredValue",updateHookTypesDev(),mountDeferredValue(e,t)},useTransition:function(e){return sc="useTransition",updateHookTypesDev(),mountTransition(e)}},gc={readContext:function(e,t){return readContext(e,t)},useCallback:function(e,t){return sc="useCallback",updateHookTypesDev(),updateCallback(e,t)},useContext:function(e,t){return sc="useContext",updateHookTypesDev(),readContext(e,t)},useEffect:function(e,t){return sc="useEffect",updateHookTypesDev(),updateEffect(e,t)},useImperativeHandle:function(e,t,n){return sc="useImperativeHandle",updateHookTypesDev(),updateImperativeHandle(e,t,n)},useLayoutEffect:function(e,t){return sc="useLayoutEffect",updateHookTypesDev(),updateLayoutEffect(e,t)},useMemo:function(e,t){sc="useMemo",updateHookTypesDev();var n=Qs.current;Qs.current=bc;try{return updateMemo(e,t)}finally{Qs.current=n}},useReducer:function(e,t,n){sc="useReducer",updateHookTypesDev();var r=Qs.current;Qs.current=bc;try{return updateReducer(e)}finally{Qs.current=r}},useRef:function(e){return sc="useRef",updateHookTypesDev(),updateRef()},useState:function(e){sc="useState",updateHookTypesDev();var t=Qs.current;Qs.current=bc;try{return updateState()}finally{Qs.current=t}},useDebugValue:function(e,t){return sc="useDebugValue",updateHookTypesDev(),fc(e,t)},useResponder:function(e,t){return sc="useResponder",updateHookTypesDev(),createResponderListener(e,t)},useDeferredValue:function(e,t){return sc="useDeferredValue",updateHookTypesDev(),updateDeferredValue(e,t)},useTransition:function(e){return sc="useTransition",updateHookTypesDev(),updateTransition(e)}},yc={readContext:function(e,t){return warnInvalidContextAccess(),readContext(e,t)},useCallback:function(e,t){return sc="useCallback",warnInvalidHookAccess(),mountHookTypesDev(),mountCallback(e,t)},useContext:function(e,t){return sc="useContext",warnInvalidHookAccess(),mountHookTypesDev(),readContext(e,t)},useEffect:function(e,t){return sc="useEffect",warnInvalidHookAccess(),mountHookTypesDev(),mountEffect(e,t)},useImperativeHandle:function(e,t,n){return sc="useImperativeHandle",warnInvalidHookAccess(),mountHookTypesDev(),mountImperativeHandle(e,t,n)},useLayoutEffect:function(e,t){return sc="useLayoutEffect",warnInvalidHookAccess(),mountHookTypesDev(),mountLayoutEffect(e,t)},useMemo:function(e,t){sc="useMemo",warnInvalidHookAccess(),mountHookTypesDev();var n=Qs.current;Qs.current=yc;try{return mountMemo(e,t)}finally{Qs.current=n}},useReducer:function(e,t,n){sc="useReducer",warnInvalidHookAccess(),mountHookTypesDev();var r=Qs.current;Qs.current=yc;try{return mountReducer(e,t,n)}finally{Qs.current=r}},useRef:function(e){return sc="useRef",warnInvalidHookAccess(),mountHookTypesDev(),mountRef(e)},useState:function(e){sc="useState",warnInvalidHookAccess(),mountHookTypesDev();var t=Qs.current;Qs.current=yc;try{return mountState(e)}finally{Qs.current=t}},useDebugValue:function(e,t){sc="useDebugValue",warnInvalidHookAccess(),mountHookTypesDev()},useResponder:function(e,t){return sc="useResponder",warnInvalidHookAccess(),mountHookTypesDev(),createResponderListener(e,t)},useDeferredValue:function(e,t){return sc="useDeferredValue",warnInvalidHookAccess(),mountHookTypesDev(),mountDeferredValue(e,t)},useTransition:function(e){return sc="useTransition",warnInvalidHookAccess(),mountHookTypesDev(),mountTransition(e)}},bc={readContext:function(e,t){return warnInvalidContextAccess(),readContext(e,t)},useCallback:function(e,t){return sc="useCallback",warnInvalidHookAccess(),updateHookTypesDev(),updateCallback(e,t)},useContext:function(e,t){return sc="useContext",warnInvalidHookAccess(),updateHookTypesDev(),readContext(e,t)},useEffect:function(e,t){return sc="useEffect",warnInvalidHookAccess(),updateHookTypesDev(),updateEffect(e,t)},useImperativeHandle:function(e,t,n){return sc="useImperativeHandle",warnInvalidHookAccess(),updateHookTypesDev(),updateImperativeHandle(e,t,n)},useLayoutEffect:function(e,t){return sc="useLayoutEffect",warnInvalidHookAccess(),updateHookTypesDev(),updateLayoutEffect(e,t)},useMemo:function(e,t){sc="useMemo",warnInvalidHookAccess(),updateHookTypesDev();var n=Qs.current;Qs.current=bc;try{return updateMemo(e,t)}finally{Qs.current=n}},useReducer:function(e,t,n){sc="useReducer",warnInvalidHookAccess(),updateHookTypesDev();var r=Qs.current;Qs.current=bc;try{return updateReducer(e)}finally{Qs.current=r}},useRef:function(e){return sc="useRef",warnInvalidHookAccess(),updateHookTypesDev(),updateRef()},useState:function(e){sc="useState",warnInvalidHookAccess(),updateHookTypesDev();var t=Qs.current;Qs.current=bc;try{return updateState()}finally{Qs.current=t}},useDebugValue:function(e,t){return sc="useDebugValue",warnInvalidHookAccess(),updateHookTypesDev(),fc(e,t)},useResponder:function(e,t){return sc="useResponder",warnInvalidHookAccess(),updateHookTypesDev(),createResponderListener(e,t)},useDeferredValue:function(e,t){return sc="useDeferredValue",warnInvalidHookAccess(),updateHookTypesDev(),updateDeferredValue(e,t)},useTransition:function(e){return sc="useTransition",warnInvalidHookAccess(),updateHookTypesDev(),updateTransition(e)}};
// CommonJS interop named imports.
var Cc=o.unstable_now,Tc=0,kc=-1;function getCommitTime(){return Tc}function recordCommitTime(){Me&&(Tc=Cc())}function startProfilerTimer(e){Me&&(kc=Cc(),e.actualStartTime<0&&(e.actualStartTime=Cc()))}function stopProfilerTimerIfRunning(e){Me&&(kc=-1)}function stopProfilerTimerIfRunningAndRecordDelta(e,t){if(Me&&kc>=0){var n=Cc()-kc;e.actualDuration+=n,t&&(e.selfBaseDuration=n),kc=-1}}
// This may have been an insertion or a hydration.
var wc=null,Sc=null,Ec=!1;function deleteHydratableInstance(e,t){switch(e.tag){case D:!function didNotHydrateContainerInstance(e,t){t.nodeType===rn?warnForDeletedHydratableElement(e,t):t.nodeType===an||warnForDeletedHydratableText(e,t)}(e.stateNode.containerInfo,t);break;case O:!function didNotHydrateInstance(e,t,n,r){!0!==t[pi]&&(r.nodeType===rn?warnForDeletedHydratableElement(n,r):r.nodeType===an||warnForDeletedHydratableText(n,r))}(e.type,e.memoizedProps,e.stateNode,t)}var n=function createFiberFromHostInstanceForDeletion(){var e=createFiber(O,null,null,mu);// TODO: These should not need a type.
return e.elementType="DELETED",e.type="DELETED",e}();n.stateNode=t,n.return=e,n.effectTag=Yr,// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function insertNonHydratedInstance(e,t){switch(t.effectTag=t.effectTag&~to|$r,e.tag){case D:var n=e.stateNode.containerInfo;switch(t.tag){case O:var r=t.type;t.pendingProps;!function didNotFindHydratableContainerInstance(e,t,n){warnForInsertedHydratedElement(e,t)}(n,r);break;case N:!function didNotFindHydratableContainerTextInstance(e,t){warnForInsertedHydratedText(e,t)}(n,t.pendingProps)}break;case O:e.type;var o=e.memoizedProps,a=e.stateNode;switch(t.tag){case O:var i=t.type;t.pendingProps;!function didNotFindHydratableInstance(e,t,n,r,o){!0!==t[pi]&&warnForInsertedHydratedElement(n,r)}(0,o,a,i);break;case N:!function didNotFindHydratableTextInstance(e,t,n,r){!0!==t[pi]&&warnForInsertedHydratedText(n,r)}(0,o,a,t.pendingProps);break;case W:!function didNotFindHydratableSuspenseInstance(e,t,n){t[pi]}(0,o)}break;default:return}}function tryHydrate(e,t){switch(e.tag){case O:var n=e.type,r=(e.pendingProps,function canHydrateInstance(e,t,n){return e.nodeType!==rn||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e;// This has now been refined to an element node.
}(t,n));return null!==r&&(e.stateNode=r,!0);case N:var o=function canHydrateTextInstance(e,t){return""===t||e.nodeType!==on?null:e;// This has now been refined to a text node.
}(t,e.pendingProps);return null!==o&&(e.stateNode=o,!0);case W:if(Ae){var a=function canHydrateSuspenseInstance(e){return e.nodeType!==an?null:e;// This has now been refined to a suspense node.
}(t);if(null!==a){var i={dehydrated:a,retryTime:Tu};e.memoizedState=i;// Store the dehydrated fragment as a child fiber.
// This simplifies the code for getHostSibling and deleting nodes,
// since it doesn't have to consider all Suspense boundaries and
// check if they're dehydrated ones or not.
var l=function createFiberFromDehydratedFragment(e){var t=createFiber($,null,null,mu);return t.stateNode=e,t}(a);return l.return=e,e.child=l,!0}}return!1;default:return!1}}function tryToClaimNextHydratableInstance(e){if(Ec){var t=Sc;if(!t)
// Nothing to hydrate. Make it an insertion.
return insertNonHydratedInstance(wc,e),Ec=!1,void(wc=e);var n=t;if(!tryHydrate(e,t)){if(!(
// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
t=getNextHydratableSibling(n))||!tryHydrate(e,t))
// Nothing to hydrate. Make it an insertion.
return insertNonHydratedInstance(wc,e),Ec=!1,void(wc=e);// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(wc,n)}wc=e,Sc=getFirstHydratableChild(t)}}function prepareToHydrateHostTextInstance(e){if(!Li)throw Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var t=e.stateNode,n=e.memoizedProps,r=function hydrateTextInstance(e,t,n){return precacheFiberNode(n,e),function diffHydratedText(e,t){return e.nodeValue!==t}(e,t)}(t,n,e);if(r){
// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var o=wc;if(null!==o)switch(o.tag){case D:o.stateNode.containerInfo;!function didNotMatchHydratedContainerTextInstance(e,t,n){warnForUnmatchedText(t,n)}(0,t,n);break;case O:o.type;var a=o.memoizedProps;o.stateNode;!function didNotMatchHydratedTextInstance(e,t,n,r,o){!0!==t[pi]&&warnForUnmatchedText(r,o)}(0,a,0,t,n)}}return r}function prepareToHydrateHostSuspenseInstance(e){if(!Li)throw Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var t=e.memoizedState,n=null!==t?t.dehydrated:null;if(!n)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");!function hydrateSuspenseInstance(e,t){precacheFiberNode(t,e)}(n,e)}function skipPastDehydratedSuspenseInstance(e){if(!Li)throw Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var t=e.memoizedState,n=null!==t?t.dehydrated:null;if(!n)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return function getNextHydratableInstanceAfterSuspenseInstance(e){for(var t=e.nextSibling,n=0// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
;t;){if(t.nodeType===an){var r=t.data;if(r===wi){if(0===n)return getNextHydratableSibling(t);n--}else r!==ki&&r!==Ei&&r!==Si||n++}t=t.nextSibling}// TODO: Warn, we didn't find the end comment boundary.
return null}(n)}function popToNextHostParent(e){for(var t=e.return;null!==t&&t.tag!==O&&t.tag!==D&&t.tag!==W;)t=t.return;wc=t}function popHydrationState(e){if(!Li)return!1;if(e!==wc)
// We're deeper than the current hydration context, inside an inserted
// tree.
return!1;if(!Ec)
// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
return popToNextHostParent(e),Ec=!0,!1;var t=e.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(e.tag!==O||"head"!==t&&"body"!==t&&!shouldSetTextContent(t,e.memoizedProps))for(var n=Sc;n;)deleteHydratableInstance(e,n),n=getNextHydratableSibling(n);return popToNextHostParent(e),Sc=e.tag===W?skipPastDehydratedSuspenseInstance(e):wc?getNextHydratableSibling(e.stateNode):null,!0}function resetHydrationState(){Li&&(wc=null,Sc=null,Ec=!1)}var xc,Pc,Rc,Ic,Dc,Fc,Oc,Nc,_c,Lc,Mc=K.ReactCurrentOwner,Uc=!1;function reconcileChildren(e,t,n,r){
// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
t.child=null===e?Ps(t,null,n,r):xs(t,e.child,n,r)}function updateForwardRef(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=n.propTypes;i&&a(i,r,// Resolved props
"prop",getComponentName(n),getCurrentFiberStackInDev)}var l,u=n.render,s=t.ref;return prepareToReadContext(t,o),Mc.current=t,setCurrentPhase("render"),l=renderWithHooks(e,t,u,r,s,o),_e&&t.mode&hu&&null!==t.memoizedState&&(l=renderWithHooks(e,t,u,r,s,o)),setCurrentPhase(null),null===e||Uc?(// React DevTools reads this flag.
t.effectTag|=Vr,reconcileChildren(e,t,l,o),t.child):(bailoutHooks(e,t,o),bailoutOnAlreadyFinishedWork(e,t,o))}function updateMemoComponent(e,t,n,r,o,i){if(null===e){var l=n.type;if(function isSimpleFunctionComponent(e){return"function"===typeof e&&!shouldConstruct(e)&&void 0===e.defaultProps}(l)&&null===n.compare&&// SimpleMemoComponent codepath doesn't resolve outer props either.
void 0===n.defaultProps){var u;return u=resolveFunctionForHotReloading(l),// If this is a plain function component without default props,
// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
t.tag=j,t.type=u,validateFunctionComponentInDev(t,l),updateSimpleMemoComponent(e,t,u,r,o,i)}var s=l.propTypes;s&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
a(s,r,// Resolved props
"prop",getComponentName(l),getCurrentFiberStackInDev);var c=createFiberFromTypeAndProps(n.type,null,r,null,t.mode,i);return c.ref=t.ref,c.return=t,t.child=c,c}var d=n.type,p=d.propTypes;p&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
a(p,r,// Resolved props
"prop",getComponentName(d),getCurrentFiberStackInDev);var f=e.child;// This is always exactly one child
if(o<i){
// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var m=f.memoizedProps,h=n.compare;// Default to shallow comparison
if((h=null!==h?h:shallowEqual)(m,r)&&e.ref===t.ref)return bailoutOnAlreadyFinishedWork(e,t,i)}// React DevTools reads this flag.
t.effectTag|=Vr;var v=createWorkInProgress(f,r,i);return v.ref=t.ref,v.return=t,t.child=v,v}function updateSimpleMemoComponent(e,t,n,r,o,i){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var l=t.elementType;l.$$typeof===ce&&(
// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
l=refineResolvedLazyComponent(l));var u=l&&l.propTypes;u&&a(u,r,// Resolved (SimpleMemoComponent has no defaultProps)
"prop",getComponentName(l),getCurrentFiberStackInDev);// Inner propTypes will be validated in the function component path.
}if(null!==e&&(shallowEqual(e.memoizedProps,r)&&e.ref===t.ref&&// Prevent bailout if the implementation changed due to hot reload:
t.type===e.type&&(Uc=!1,o<i)))return bailoutOnAlreadyFinishedWork(e,t,i);return updateFunctionComponent(e,t,n,r,i)}function markRef(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(
// Schedule a Ref effect
t.effectTag|=Jr)}function updateFunctionComponent(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=n.propTypes;i&&a(i,r,// Resolved props
"prop",getComponentName(n),getCurrentFiberStackInDev)}var l,u;Xe||(l=getMaskedContext(t,getUnmaskedContext(0,n,!0)));return prepareToReadContext(t,o),Mc.current=t,setCurrentPhase("render"),u=renderWithHooks(e,t,n,r,l,o),_e&&t.mode&hu&&null!==t.memoizedState&&(u=renderWithHooks(e,t,n,r,l,o)),setCurrentPhase(null),null===e||Uc?(// React DevTools reads this flag.
t.effectTag|=Vr,reconcileChildren(e,t,u,o),t.child):(bailoutHooks(e,t,o),bailoutOnAlreadyFinishedWork(e,t,o))}function updateClassComponent(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=n.propTypes;i&&a(i,r,// Resolved props
"prop",getComponentName(n),getCurrentFiberStackInDev)}// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var l,u;isContextProvider(n)?(l=!0,pushContextProvider(t)):l=!1,prepareToReadContext(t,o),null===t.stateNode?(null!==e&&(
// An class component without an instance only mounts if it suspended
// inside a non- concurrent tree, in an inconsistent state. We want to
// tree it like a new mount, even though an empty version of it already
// committed. Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=$r),// In the initial pass we might need to construct the instance.
constructClassInstance(t,n,r),mountClassInstance(t,n,r,o),u=!0):
// In a resume, we'll already have an instance we can reuse.
u=null===e?function resumeMountClassInstance(e,t,n,r){var o=e.stateNode,a=e.memoizedProps;o.props=a;var i=o.context,l=t.contextType,u=Ll;if("object"===typeof l&&null!==l)u=readContext(l);else if(!Xe){u=getMaskedContext(e,getUnmaskedContext(0,t,!0))}var s=t.getDerivedStateFromProps,c="function"===typeof s||"function"===typeof o.getSnapshotBeforeUpdate;// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
c||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||a===n&&i===u||callComponentWillReceiveProps(e,o,n,u),resetHasForceUpdateBeforeProcessing();var d=e.memoizedState,p=o.state=d,f=e.updateQueue;if(null!==f&&(processUpdateQueue(e,f,n,o,r),p=e.memoizedState),a===n&&d===p&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"===typeof o.componentDidMount&&(e.effectTag|=qr),!1;"function"===typeof s&&(applyDerivedStateFromProps(e,t,s,n),p=e.memoizedState);var m=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(e,t,a,n,d,p,u);return m?(
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
c||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(startPhaseTimer(e,"componentWillMount"),"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),stopPhaseTimer()),"function"===typeof o.componentDidMount&&(e.effectTag|=qr)):(
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
"function"===typeof o.componentDidMount&&(e.effectTag|=qr),// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
e.memoizedProps=n,e.memoizedState=p),// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
o.props=n,o.state=p,o.context=u,m}// Invokes the update life-cycles and returns false if it shouldn't rerender.
(t,n,r,o):function updateClassInstance(e,t,n,r,o){var a=t.stateNode,i=t.memoizedProps;a.props=t.type===t.elementType?i:resolveDefaultProps(t.type,i);var l=a.context,u=n.contextType,s=Ll;if("object"===typeof u&&null!==u)s=readContext(u);else if(!Xe){s=getMaskedContext(t,getUnmaskedContext(0,n,!0))}var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||i===r&&l===s||callComponentWillReceiveProps(t,a,r,s),resetHasForceUpdateBeforeProcessing();var p=t.memoizedState,f=a.state=p,m=t.updateQueue;if(null!==m&&(processUpdateQueue(t,m,r,a,o),f=t.memoizedState),i===r&&p===f&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"===typeof a.componentDidUpdate&&(i===e.memoizedProps&&p===e.memoizedState||(t.effectTag|=qr)),"function"===typeof a.getSnapshotBeforeUpdate&&(i===e.memoizedProps&&p===e.memoizedState||(t.effectTag|=Zr)),!1;"function"===typeof c&&(applyDerivedStateFromProps(t,n,c,r),f=t.memoizedState);var h=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(t,n,i,r,p,f,s);return h?(
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
d||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||(startPhaseTimer(t,"componentWillUpdate"),"function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,s),stopPhaseTimer()),"function"===typeof a.componentDidUpdate&&(t.effectTag|=qr),"function"===typeof a.getSnapshotBeforeUpdate&&(t.effectTag|=Zr)):(
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
"function"===typeof a.componentDidUpdate&&(i===e.memoizedProps&&p===e.memoizedState||(t.effectTag|=qr)),"function"===typeof a.getSnapshotBeforeUpdate&&(i===e.memoizedProps&&p===e.memoizedState||(t.effectTag|=Zr)),// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
t.memoizedProps=r,t.memoizedState=f),// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
a.props=r,a.state=f,a.context=s,h}(e,t,n,r,o);var s=finishClassComponent(e,t,n,u,l,o);return t.stateNode.props!==r&&(Fc||warning$1(!1,"It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",getComponentName(t.type)||"a component"),Fc=!0),s}function finishClassComponent(e,t,n,r,o,a){
// Refs should update even if shouldComponentUpdate returns false
markRef(e,t);var i=(t.effectTag&Xr)!==Br;if(!r&&!i)
// Context providers should defer to sCU for rendering
return o&&invalidateContextProvider(t,n,!1),bailoutOnAlreadyFinishedWork(e,t,a);var l,u=t.stateNode;// Rerender
return Mc.current=t,i&&"function"!==typeof n.getDerivedStateFromError?(
// If we captured an error, but getDerivedStateFrom catch is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
l=null,Me&&stopProfilerTimerIfRunning()):(setCurrentPhase("render"),l=u.render(),_e&&t.mode&hu&&u.render(),setCurrentPhase(null)),// React DevTools reads this flag.
t.effectTag|=Vr,null!==e&&i?
// If we're recovering from an error, reconcile without reusing any of
// the existing children. Conceptually, the normal children and the children
// that are shown on error are two different sets, so we shouldn't reuse
// normal children even if their identities match.
function forceUnmountCurrentAndReconcile(e,t,n,r){
// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
//
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
t.child=xs(t,e.child,null,r),// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their their
// identity matches.
t.child=xs(t,null,n,r)}(e,t,l,a):reconcileChildren(e,t,l,a),// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
t.memoizedState=u.state,// The context might have changed so we need to recalculate it.
o&&invalidateContextProvider(t,n,!0),t.child}function pushHostRootContext(e){var t=e.stateNode;t.pendingContext?pushTopLevelContextObject(e,t.pendingContext,t.pendingContext!==t.context):t.context&&
// Should always be set
pushTopLevelContextObject(e,t.context,!1),pushHostContainer(e,t.containerInfo)}function updateHostRoot(e,t,n){pushHostRootContext(t);var r=t.updateQueue;if(null===r)throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");var o=t.pendingProps,a=t.memoizedState,i=null!==a?a.element:null;processUpdateQueue(t,r,o,null,n);var l=t.memoizedState.element;// Caution: React DevTools currently depends on this property
// being called "element".
if(l===i)
// If the state is the same as before, that's a bailout because we had
// no work that expires at this time.
return resetHydrationState(),bailoutOnAlreadyFinishedWork(e,t,n);if(t.stateNode.hydrate&&function enterHydrationState(e){if(!Li)return!1;var t=e.stateNode.containerInfo;return Sc=getFirstHydratableChild(t),wc=e,Ec=!0,!0}(t)){
// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
var u=Ps(t,null,l,n);t.child=u;for(var s=u;s;)
// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
s.effectTag=s.effectTag&~$r|to,s=s.sibling}else
// Otherwise reset hydration state in case we aborted and resumed another
// root.
reconcileChildren(e,t,l,n),resetHydrationState();return t.child}function mountLazyComponent(e,t,n,r,o){null!==e&&(
// An lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=$r);var i=t.pendingProps;// We can't start a User Timing measurement with correct label yet.
// Cancel and resume right after we know the tag.
cancelWorkTimer(t);var l=readLazyComponentType(n);// Store the unwrapped component in the type.
t.type=l;var u=t.tag=function resolveLazyComponentTag(e){if("function"===typeof e)return shouldConstruct(e)?R:P;if(void 0!==e&&null!==e){var t=e.$$typeof;if(t===ie)return A;if(t===se)return z}return I}// This is used to create an alternate fiber to do work on.
(l);startWorkTimer(t);var s,c=resolveDefaultProps(l,i);switch(u){case P:validateFunctionComponentInDev(t,l),t.type=l=resolveFunctionForHotReloading(l),s=updateFunctionComponent(null,t,l,c,o);break;case R:t.type=l=resolveClassForHotReloading(l),s=updateClassComponent(null,t,l,c,o);break;case A:t.type=l=resolveForwardRefForHotReloading(l),s=updateForwardRef(null,t,l,c,o);break;case z:if(t.type!==t.elementType){var d=l.propTypes;d&&a(d,c,// Resolved for outer only
"prop",getComponentName(l),getCurrentFiberStackInDev)}s=updateMemoComponent(null,t,l,resolveDefaultProps(l.type,c),// The inner type can have defaults too
r,o);break;default:var p="";throw null!==l&&"object"===typeof l&&l.$$typeof===ce&&(p=" Did you wrap a component in React.lazy() more than once?"),Error("Element type is invalid. Received a promise that resolves to: "+l+". Lazy element type must resolve to a class or function."+p)}return s}function validateFunctionComponentInDev(e,t){if(t&&t.childContextTypes&&warningWithoutStack$1(!1,"%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),null!==e.ref){var n="",r=getCurrentFiberOwnerNameInDevOrNull();r&&(n+="\n\nCheck the render method of `"+r+"`.");var o=r||e._debugID||"",a=e._debugSource;a&&(o=a.fileName+":"+a.lineNumber),Dc[o]||(Dc[o]=!0,warning$1(!1,"Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if(Ke&&void 0!==t.defaultProps){var i=getComponentName(t)||"Unknown";Lc[i]||(warningWithoutStack$1(!1,"%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",i),Lc[i]=!0)}if("function"===typeof t.getDerivedStateFromProps){var l=getComponentName(t)||"Unknown";Ic[l]||(warningWithoutStack$1(!1,"%s: Function components do not support getDerivedStateFromProps.",l),Ic[l]=!0)}if("object"===typeof t.contextType&&null!==t.contextType){var u=getComponentName(t)||"Unknown";Rc[u]||(warningWithoutStack$1(!1,"%s: Function components do not support contextType.",u),Rc[u]=!0)}}xc={},Pc={},Rc={},Ic={},Dc={},Fc=!1,Oc=!1,Nc={},_c={},Lc={};var Ac={dehydrated:null,retryTime:Cu};function updateSuspenseComponent(e,t,n){var r=t.mode,o=t.pendingProps;(function shouldSuspend(e){return shouldSuspendImpl(e)})(t)&&(t.effectTag|=Xr);var a=Ls.current,i=!1,l=(t.effectTag&Xr)!==Br;// This next part is a bit confusing. If the children timeout, we switch to
// showing the fallback children in place of the "primary" children.
// However, we don't want to delete the primary children because then their
// state will be lost (both the React state and the host state, e.g.
// uncontrolled form inputs). Instead we keep them mounted and hide them.
// Both the fallback children AND the primary children are rendered at the
// same time. Once the primary children are un-suspended, we can delete
// the fallback children — don't need to preserve their state.
//
// The two sets of children are siblings in the host environment, but
// semantically, for purposes of reconciliation, they are two separate sets.
// So we store them using two fragment fibers.
//
// However, we want to avoid allocating extra fibers for every placeholder.
// They're only necessary when the children time out, because that's the
// only time when both sets are mounted.
//
// So, the extra fragment fibers are only used if the children time out.
// Otherwise, we render the primary children directly. This requires some
// custom reconciliation logic to preserve the state of the primary
// children. It's essentially a very basic form of re-parenting.
if(l||function shouldRemainOnFallback(e,t,n){
// If the context is telling us that we should show a fallback, and we're not
// already showing content, then we should show the fallback instead.
return hasSuspenseContext(e,_s)&&(null===t||null!==t.memoizedState)}(a,e)?(
// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
i=!0,t.effectTag&=~Xr):
// Attempting the main content
null!==e&&null===e.memoizedState||
// This is a new mount or this boundary is already showing a fallback state.
// Mark this subtree context as having at least one invisible parent that could
// handle the fallback state.
// Boundaries without fallbacks or should be avoided are not considered since
// they cannot handle preferred fallback states.
void 0!==o.fallback&&!0!==o.unstable_avoidThisFallback&&(a=function addSubtreeSuspenseContext(e,t){return e|t}(a,Ns)),pushSuspenseContext(t,a=setDefaultShallowSuspenseContext(a)),"maxDuration"in o&&(Oc||(Oc=!0,warning$1(!1,"maxDuration has been removed from React. Remove the maxDuration prop."))),null===e){
// If we're currently hydrating, try to hydrate this boundary.
// But only if this has a fallback.
if(void 0!==o.fallback&&(tryToClaimNextHydratableInstance(t),Ae)){var u=t.memoizedState;if(null!==u){var s=u.dehydrated;if(null!==s)return function mountDehydratedSuspenseComponent(e,t,n){
// During the first pass, we'll bail out and not drill into the children.
// Instead, we'll leave the content in place and try to hydrate it later.
if((e.mode&vu)===mu)warning$1(!1,"Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOM.createBlockingRoot(container, { hydrate: true }).render(element) or remove the Suspense components from the server rendered components."),e.expirationTime=Su;else if(isSuspenseInstanceFallback(t)){
// This is a client-only boundary. Since we won't get any content from the server
// for this, we need to schedule that at a higher priority based on when it would
// have timed out. In theory we could render it in this pass but it would have the
// wrong priority associated with it and will prevent hydration of parent path.
// Instead, we'll leave work left on it to render it in a separate commit.
// TODO This time should be the time at which the server rendered response that is
// a parent to this boundary was displayed. However, since we currently don't have
// a protocol to transfer that time, we'll just estimate it by using the current
// time. This will mean that Suspense timeouts are slightly shifted to later than
// they should be.
var r=computeAsyncExpiration(requestCurrentTimeForUpdate());// Schedule a normal pri update to render this content.
Ue&&markSpawnedWork(r),e.expirationTime=r}else
// We'll continue hydrating the rest at offscreen priority since we'll already
// be showing the right content coming from the server, it is no rush.
e.expirationTime=Tu,Ue&&markSpawnedWork(Tu);return null}(t,s)}}// This is the initial mount. This branch is pretty simple because there's
// no previous state that needs to be preserved.
if(i){
// Mount separate fragments for primary and fallback children.
var c=o.fallback,d=createFiberFromFragment(null,r,Cu,null);if(d.return=t,(t.mode&vu)===mu){
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var p=null!==t.memoizedState?t.child.child:t.child;d.child=p;for(var f=p;null!==f;)f.return=d,f=f.sibling}var m=createFiberFromFragment(c,r,n,null);return m.return=t,d.sibling=m,// Skip the primary children, and continue working on the
// fallback children.
t.memoizedState=Ac,t.child=d,m}
// Mount the primary children without an intermediate fragment fiber.
var h=o.children;return t.memoizedState=null,t.child=Ps(t,null,h,n)}
// This is an update. This branch is more complicated because we need to
// ensure the state of the primary children is preserved.
var v=e.memoizedState;if(null!==v){if(Ae){var g=v.dehydrated;if(null!==g){if(l){if(null!==t.memoizedState)
// Something suspended and we should still be in dehydrated mode.
// Leave the existing child in place.
return t.child=e.child,// The dehydrated completion pass expects this flag to be there
// but the normal suspense pass doesn't.
t.effectTag|=Xr,null;
// Suspended but we should no longer be in dehydrated mode.
// Therefore we now have to render the fallback. Wrap the children
// in a fragment fiber to keep them separate from the fallback
// children.
var y=o.fallback,b=createFiberFromFragment(// It shouldn't matter what the pending props are because we aren't
// going to render this fragment.
null,r,Cu,null);if(b.return=t,// This is always null since we never want the previous child
// that we're not going to hydrate.
b.child=null,(t.mode&vu)===mu)for(
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var C=b.child=t.child;null!==C;)C.return=b,C=C.sibling;else
// We will have dropped the effect list which contains the deletion.
// We need to reconcile to delete the current child.
xs(t,e.child,null,n);// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(Me&&t.mode&yu){for(
// treeBaseDuration is the sum of all the child tree base durations.
var T=0,k=b.child;null!==k;)T+=k.treeBaseDuration,k=k.sibling;b.treeBaseDuration=T}// Create a fragment from the fallback children, too.
var w=createFiberFromFragment(y,r,n,null);// Skip the primary children, and continue working on the
// fallback children.
return w.return=t,b.sibling=w,w.effectTag|=$r,b.childExpirationTime=Cu,t.memoizedState=Ac,t.child=b,w}return function updateDehydratedSuspenseComponent(e,t,n,r,o){if(
// We should never be hydrating at this point because it is the first pass,
// but after we've already committed once.
function warnIfHydrating(){Ec&&warning$1(!1,"We should not be hydrating here. This is a bug in React. Please file a bug.")}(),(t.mode&vu)===mu)return retrySuspenseComponentWithoutHydrating(e,t,o);if(isSuspenseInstanceFallback(n))
// This boundary is in a permanent fallback state. In this case, we'll never
// get an update and we'll never be able to hydrate the final content. Let's just try the
// client side render instead.
return retrySuspenseComponentWithoutHydrating(e,t,o);// We use childExpirationTime to indicate that a child might depend on context, so if
// any context has changed, we need to treat is as if the input might have changed.
var a=e.childExpirationTime>=o;if(Uc||a){
// This boundary has changed since the first render. This means that we are now unable to
// hydrate it. We might still be able to hydrate it using an earlier expiration time, if
// we are rendering at lower expiration than sync.
if(o<Su&&r.retryTime<=o){
// This render is even higher pri than we've seen before, let's try again
// at even higher pri.
var i=o+1;r.retryTime=i,zd(e,i)}// If we have scheduled higher pri work above, this will probably just abort the render
// since we now have higher priority work, but in case it doesn't, we need to prepare to
// render something, if we time out. Even if that requires us to delete everything and
// skip hydration.
// Delay having to do this as long as the suspense timeout allows us.
return renderDidSuspendDelayIfPossible(),retrySuspenseComponentWithoutHydrating(e,t,o)}if(isSuspenseInstancePending(n))
// This component is still pending more data from the server, so we can't hydrate its
// content. We treat it as if this component suspended itself. It might seem as if
// we could just try to render it client-side instead. However, this will perform a
// lot of unnecessary work and is unlikely to complete since it often will suspend
// on missing data anyway. Additionally, the server might be able to render more
// than we can on the client yet. In that case we'd end up with more fallback states
// on the client than if we just leave it alone. If the server times out or errors
// these should update this boundary to the permanent Fallback state instead.
// Mark it as having captured (i.e. suspended).
return t.effectTag|=Xr,// Leave the child in place. I.e. the dehydrated fragment.
t.child=e.child,// Register a callback to retry this boundary once the server has sent the result.
function registerSuspenseInstanceRetry(e,t){e._reactRetry=t}(n,retryDehydratedSuspenseBoundary.bind(null,e)),null;
// This is the first attempt.
!function reenterHydrationStateFromDehydratedSuspenseInstance(e,t){return!!Li&&(Sc=getNextHydratableSibling(t),popToNextHostParent(e),Ec=!0,!0)}(t,n);for(var l=t.pendingProps.children,u=Ps(t,null,l,o),s=u;s;)
// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
s.effectTag|=to,s=s.sibling;return t.child=u,t.child}(e,t,g,v,n)}}// The current tree already timed out. That means each child set is
// wrapped in a fragment fiber.
var S=e.child,E=S.sibling;if(i){
// Still timed out. Reuse the current primary children by cloning
// its fragment. We're going to skip over these entirely.
var x=o.fallback,P=createWorkInProgress(S,S.pendingProps,Cu);if(P.return=t,(t.mode&vu)===mu){
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var R=null!==t.memoizedState?t.child.child:t.child;if(R!==S.child){P.child=R;for(var I=R;null!==I;)I.return=P,I=I.sibling}}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(Me&&t.mode&yu){for(
// treeBaseDuration is the sum of all the child tree base durations.
var D=0,F=P.child;null!==F;)D+=F.treeBaseDuration,F=F.sibling;P.treeBaseDuration=D}// Clone the fallback child fragment, too. These we'll continue
// working on.
var O=createWorkInProgress(E,x,E.expirationTime);return O.return=t,P.sibling=O,P.childExpirationTime=Cu,// Skip the primary children, and continue working on the
// fallback children.
t.memoizedState=Ac,t.child=P,O}
// No longer suspended. Switch back to showing the primary children,
// and remove the intermediate fragment fiber.
var N=o.children,_=S.child,L=xs(t,_,N,n);// If this render doesn't suspend, we need to delete the fallback
// children. Wait until the complete phase, after we've confirmed the
// fallback is no longer needed.
// TODO: Would it be better to store the fallback fragment on
// the stateNode?
// Continue rendering the children, like we normally do.
return t.memoizedState=null,t.child=L}
// The current tree has not already timed out. That means the primary
// children are not wrapped in a fragment fiber.
var M=e.child;if(i){
// Timed out. Wrap the children in a fragment fiber to keep them
// separate from the fallback children.
var U=o.fallback,A=createFiberFromFragment(// It shouldn't matter what the pending props are because we aren't
// going to render this fragment.
null,r,Cu,null);// Even though we're creating a new fiber, there are no new children,
// because we're reusing an already mounted tree. So we don't need to
// schedule a placement.
// primaryChildFragment.effectTag |= Placement;
if(A.return=t,A.child=M,null!==M&&(M.return=A),(t.mode&vu)===mu){
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var H=null!==t.memoizedState?t.child.child:t.child;A.child=H;for(var W=H;null!==W;)W.return=A,W=W.sibling}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(Me&&t.mode&yu){for(
// treeBaseDuration is the sum of all the child tree base durations.
var z=0,j=A.child;null!==j;)z+=j.treeBaseDuration,j=j.sibling;A.treeBaseDuration=z}// Create a fragment from the fallback children, too.
var B=createFiberFromFragment(U,r,n,null);return B.return=t,A.sibling=B,B.effectTag|=$r,A.childExpirationTime=Cu,// Skip the primary children, and continue working on the
// fallback children.
t.memoizedState=Ac,t.child=A,B}
// Still haven't timed out.  Continue rendering the children, like we
// normally do.
t.memoizedState=null;var V=o.children;return t.child=xs(t,M,V,n)}function retrySuspenseComponentWithoutHydrating(e,t,n){
// We're now not suspended nor dehydrated.
return t.memoizedState=null,// This will ensure that the children get Placement effects and
// that the old child gets a Deletion effect.
// We could also call forceUnmountCurrentAndReconcile.
reconcileChildren(e,t,t.pendingProps.children,n),t.child}function scheduleWorkOnFiber(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),scheduleWorkOnParentPath(e.return,t)}function validateSuspenseListNestedChild(e,t){var n=Array.isArray(e),r=!n&&"function"===typeof getIteratorFn(e);if(n||r){var o=n?"array":"iterable";return warning$1(!1,"A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,t,o),!1}return!0}function initSuspenseListRenderState(e,t,n,r,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,last:r,tail:n,tailExpiration:0,tailMode:o,lastEffect:a}:(
// We can reuse the existing object from previous renders.
i.isBackwards=t,i.rendering=null,i.last=r,i.tail=n,i.tailExpiration=0,i.tailMode=o,i.lastEffect=a)}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function updateSuspenseListComponent(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail,i=r.children;!function validateRevealOrder(e){if(void 0!==e&&"forwards"!==e&&"backwards"!==e&&"together"!==e&&!Nc[e])if(Nc[e]=!0,"string"===typeof e)switch(e.toLowerCase()){case"together":case"forwards":case"backwards":warning$1(!1,'"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break;case"forward":case"backward":warning$1(!1,'"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break;default:warning$1(!1,'"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}else warning$1(!1,'%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}(o),function validateTailOptions(e,t){void 0===e||_c[e]||("collapsed"!==e&&"hidden"!==e?(_c[e]=!0,warning$1(!1,'"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):"forwards"!==t&&"backwards"!==t&&(_c[e]=!0,warning$1(!1,'<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}(a,o),function validateSuspenseListChildren(e,t){if(("forwards"===t||"backwards"===t)&&void 0!==e&&null!==e&&!1!==e)if(Array.isArray(e)){for(var n=0;n<e.length;n++)if(!validateSuspenseListNestedChild(e[n],n))return}else{var r=getIteratorFn(e);if("function"===typeof r){var o=r.call(e);if(o)for(var a=o.next(),i=0;!a.done;a=o.next()){if(!validateSuspenseListNestedChild(a.value,i))return;i++}}else warning$1(!1,'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}(i,o),reconcileChildren(e,t,i,n);var l=Ls.current;hasSuspenseContext(l,_s)?(l=setShallowSuspenseContext(l,_s),t.effectTag|=Xr):(null!==e&&(e.effectTag&Xr)!==Br&&
// If we previously forced a fallback, we need to schedule work
// on any nested boundaries to let them know to try to render
// again. This is the same as context updating.
function propagateSuspenseContextChange(e,t,n){for(
// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
var r=t;null!==r;){if(r.tag===W)null!==r.memoizedState&&scheduleWorkOnFiber(r,n);else if(r.tag===q)
// If the tail is hidden there might not be an Suspense boundaries
// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
scheduleWorkOnFiber(r,n);else if(null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)return;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}(t,t.child,n),l=setDefaultShallowSuspenseContext(l));if(pushSuspenseContext(t,l),(t.mode&vu)===mu)
// Outside of blocking mode, SuspenseList doesn't work so we just
// use make it a noop by treating it as the default revealOrder.
t.memoizedState=null;else switch(o){case"forwards":var u,s=function findLastContentRow(e){for(
// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
var t=e,n=null;null!==t;){var r=t.alternate;// New rows can't be content rows.
null!==r&&null===findFirstSuspended(r)&&(n=t),t=t.sibling}return n}(t.child);null===s?(
// The whole list is part of the tail.
// TODO: We could fast path by just rendering the tail now.
u=t.child,t.child=null):(
// Disconnect the tail rows after the content row.
// We're going to render them separately later.
u=s.sibling,s.sibling=null),initSuspenseListRenderState(t,!1,// isBackwards
u,s,a,t.lastEffect);break;case"backwards":
// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var c=null,d=t.child;for(t.child=null;null!==d;){var p=d.alternate;// New rows can't be content rows.
if(null!==p&&null===findFirstSuspended(p)){
// This is the beginning of the main content.
t.child=d;break}var f=d.sibling;d.sibling=c,c=d,d=f}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
initSuspenseListRenderState(t,!0,// isBackwards
c,null,// last
a,t.lastEffect);break;case"together":initSuspenseListRenderState(t,!1,// isBackwards
null,// tail
null,// last
void 0,t.lastEffect);break;default:
// The default reveal order is the same as not having
// a boundary.
t.memoizedState=null}return t.child}function updateContextProvider(e,t,n){var r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,u=t.type.propTypes;if(u&&a(u,o,"prop","Context.Provider",getCurrentFiberStackInDev),pushProvider(t,l),null!==i){var s=function calculateChangedBits(e,t,n){if(pl(n,t))
// No change
return 0;var r="function"===typeof e._calculateChangedBits?e._calculateChangedBits(n,t):bu;return(r&bu)!==r&&warning$1(!1,"calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",r),0|r}(r,l,i.value);if(0===s){
// No change. Bailout early if children are the same.
if(i.children===o.children&&!hasContextChanged())return bailoutOnAlreadyFinishedWork(e,t,n)}else
// The context value changed. Search for matching consumers and schedule
// them to update.
!function propagateContextChange(e,t,n,r){var o=e.child;for(null!==o&&(
// Set the return pointer of the child to the work-in-progress fiber.
o.return=e);null!==o;){var a=void 0,i=o.dependencies;// Visit this fiber.
if(null!==i){a=o.child;for(var l=i.firstContext;null!==l;){
// Check if the context matches.
if(l.context===t&&0!==(l.observedBits&n)){
// Match! Schedule an update on this fiber.
if(o.tag===R){
// Schedule a force update on the work-in-progress.
var u=createUpdate(r,null);u.tag=es,// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
enqueueUpdate(o,u)}o.expirationTime<r&&(o.expirationTime=r);var s=o.alternate;null!==s&&s.expirationTime<r&&(s.expirationTime=r),scheduleWorkOnParentPath(o.return,r),// Mark the expiration time on the list, too.
i.expirationTime<r&&(i.expirationTime=r);// Since we already found a match, we can stop traversing the
// dependency list.
break}l=l.next}}else if(o.tag===U)
// Don't scan deeper if this is a matching provider
a=o.type===e.type?null:o.child;else if(Ae&&o.tag===$){
// If a dehydrated suspense bounudary is in this subtree, we don't know
// if it will have any context consumers in it. The best we can do is
// mark it as having updates.
var c=o.return;if(null===c)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");c.expirationTime<r&&(c.expirationTime=r);var d=c.alternate;null!==d&&d.expirationTime<r&&(d.expirationTime=r),// This is intentionally passing this fiber as the parent
// because we want to schedule this fiber as having work
// on its children. We'll use the childExpirationTime on
// this fiber to indicate that a context has changed.
scheduleWorkOnParentPath(c,r),a=o.sibling}else
// Traverse down.
a=o.child;if(null!==a)
// Set the return pointer of the child to the work-in-progress fiber.
a.return=o;else for(
// No child. Traverse to next sibling.
a=o;null!==a;){if(a===e){
// We're back to the root of this subtree. Exit.
a=null;break}var p=a.sibling;if(null!==p){
// Set the return pointer of the sibling to the work-in-progress fiber.
p.return=a.return,a=p;break}// No more siblings. Traverse up.
a=a.return}o=a}}(t,r,s,n)}return reconcileChildren(e,t,o.children,n),t.child}var Hc=!1;function markWorkInProgressReceivedUpdate(){Uc=!0}function bailoutOnAlreadyFinishedWork(e,t,n){cancelWorkTimer(t),null!==e&&(
// Reuse previous dependencies
t.dependencies=e.dependencies),Me&&
// Don't update "base" render times for bailouts.
stopProfilerTimerIfRunning();var r=t.expirationTime;return r!==Cu&&markUnprocessedUpdateTime(r),t.childExpirationTime<n?null:(
// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
function cloneChildFibers(e,t){if(null!==e&&t.child!==e.child)throw Error("Resuming work not yet implemented.");if(null!==t.child){var n=t.child,r=createWorkInProgress(n,n.pendingProps,n.expirationTime);for(t.child=r,r.return=t;null!==n.sibling;)n=n.sibling,(r=r.sibling=createWorkInProgress(n,n.pendingProps,n.expirationTime)).return=t;r.sibling=null}}(e,t),t.child)}function beginWork$1(e,t,n){var r=t.expirationTime;if(t._debugNeedsRemount&&null!==e)
// This will restart the begin phase with a new fiber.
return function remountFiber(e,t,n){var r=t.return;if(null===r)throw new Error("Cannot swap the root fiber.");// Disconnect from the old current.
// It will get deleted.
// Replace the child/sibling pointers above it.
if(e.alternate=null,t.alternate=null,// Connect to the new tree.
n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var o=r.child;if(null===o)throw new Error("Expected parent to have a child.");for(;o.sibling!==t;)if(null===(o=o.sibling))throw new Error("Expected to find the previous sibling.");o.sibling=n}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var a=r.lastEffect;// Restart work from the new fiber.
return null!==a?(a.nextEffect=e,r.lastEffect=e):r.firstEffect=r.lastEffect=e,e.nextEffect=null,e.effectTag=Yr,n.effectTag|=$r,n}(e,t,createFiberFromTypeAndProps(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.expirationTime));if(null!==e){var o=e.memoizedProps,i=t.pendingProps;if(o!==i||hasContextChanged()||// Force a re-render if the implementation changed due to hot reload:
t.type!==e.type)
// If props or context changed, mark the fiber as having performed work.
// This may be unset if the props are determined to be equal later (memo).
Uc=!0;else{if(r<n){// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(Uc=!1,t.tag){case D:pushHostRootContext(t),resetHydrationState();break;case O:if(pushHostContext(t),t.mode&gu&&n!==Tu&&shouldDeprioritizeSubtree(t.type,i))return Ue&&markSpawnedWork(Tu),// Schedule this fiber to re-render at offscreen priority. Then bailout.
t.expirationTime=t.childExpirationTime=Tu,null;break;case R:isContextProvider(t.type)&&pushContextProvider(t);break;case F:pushHostContainer(t,t.stateNode.containerInfo);break;case U:pushProvider(t,t.memoizedProps.value);break;case H:if(Me)t.childExpirationTime>=n&&(t.effectTag|=qr);break;case W:var l=t.memoizedState;if(null!==l){if(Ae&&null!==l.dehydrated){pushSuspenseContext(t,setDefaultShallowSuspenseContext(Ls.current)),// We know that this component will suspend again because if it has
// been unsuspended it has committed as a resolved Suspense component.
// If it needs to be retried, it should have work scheduled on it.
t.effectTag|=Xr;break}// If this boundary is currently timed out, we need to decide
// whether to retry the primary children, or to skip over it and
// go straight to the fallback. Check the priority of the primary
// child fragment.
var u=t.child.childExpirationTime;if(u!==Cu&&u>=n)
// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return updateSuspenseComponent(e,t,n);pushSuspenseContext(t,setDefaultShallowSuspenseContext(Ls.current));// The primary children do not have pending work with sufficient
// priority. Bailout.
var s=bailoutOnAlreadyFinishedWork(e,t,n);return null!==s?s.sibling:null}pushSuspenseContext(t,setDefaultShallowSuspenseContext(Ls.current));break;case q:var c=(e.effectTag&Xr)!==Br,d=t.childExpirationTime>=n;if(c){if(d)
// If something was in fallback state last time, and we have all the
// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return updateSuspenseListComponent(e,t,n);// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
t.effectTag|=Xr}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var p=t.memoizedState;if(null!==p&&(
// Reset to the "together" mode in case we've started a different
// update in the past but didn't complete it.
p.rendering=null,p.tail=null),pushSuspenseContext(t,Ls.current),d)break;
// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null}return bailoutOnAlreadyFinishedWork(e,t,n)}
// An update was scheduled on this fiber, but there are no new props
// nor legacy context. Set this to false. If an update queue or context
// consumer produces a changed value, it will set this to true. Otherwise,
// the component will assume the children have not changed and bail out.
Uc=!1}}else Uc=!1;// Before entering the begin phase, clear the expiration time.
switch(t.expirationTime=Cu,t.tag){case I:return function mountIndeterminateComponent(e,t,n,r){null!==e&&(
// An indeterminate component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=$r);var o,a,i=t.pendingProps;if(Xe||(o=getMaskedContext(t,getUnmaskedContext(0,n,!1))),prepareToReadContext(t,r),n.prototype&&"function"===typeof n.prototype.render){var l=getComponentName(n)||"Unknown";xc[l]||(warningWithoutStack$1(!1,"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",l,l),xc[l]=!0)}if(t.mode&hu&&Ou.recordLegacyContextWarning(t,null),Mc.current=t,a=renderWithHooks(null,t,n,i,o,r),// React DevTools reads this flag.
t.effectTag|=Vr,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof){var u=getComponentName(n)||"Unknown";Pc[u]||(warningWithoutStack$1(!1,"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",u,u,u),Pc[u]=!0),// Proceed under the assumption that this is a class instance
t.tag=R,// Throw out any hooks that were used.
resetHooks();// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var s=!1;isContextProvider(n)?(s=!0,pushContextProvider(t)):s=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null;var c=n.getDerivedStateFromProps;return"function"===typeof c&&applyDerivedStateFromProps(t,n,c,i),adoptClassInstance(t,a),mountClassInstance(t,n,i,r),finishClassComponent(null,t,n,!0,s,r)}
// Proceed under the assumption that this is a function component
return t.tag=P,Xe&&n.contextTypes&&warningWithoutStack$1(!1,"%s uses the legacy contextTypes API which is no longer supported. Use React.createContext() with React.useContext() instead.",getComponentName(n)||"Unknown"),_e&&t.mode&hu&&null!==t.memoizedState&&(a=renderWithHooks(null,t,n,i,o,r)),reconcileChildren(null,t,a,r),validateFunctionComponentInDev(t,n),t.child}(e,t,t.type,n);case B:return mountLazyComponent(e,t,t.elementType,r,n);case P:var f=t.type,m=t.pendingProps;return updateFunctionComponent(e,t,f,t.elementType===f?m:resolveDefaultProps(f,m),n);case R:var h=t.type,v=t.pendingProps;return updateClassComponent(e,t,h,t.elementType===h?v:resolveDefaultProps(h,v),n);case D:return updateHostRoot(e,t,n);case O:return function updateHostComponent(e,t,n){pushHostContext(t),null===e&&tryToClaimNextHydratableInstance(t);var r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,i=o.children;// Check the host config to see if the children are offscreen/hidden.
return shouldSetTextContent(r,o)?
// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also have access to this prop. That
// avoids allocating another HostText fiber and traversing it.
i=null:null!==a&&shouldSetTextContent(r,a)&&(
// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
t.effectTag|=Kr),markRef(e,t),t.mode&gu&&n!==Tu&&shouldDeprioritizeSubtree(0,o)?(Ue&&markSpawnedWork(Tu),// Schedule this fiber to re-render at offscreen priority. Then bailout.
t.expirationTime=t.childExpirationTime=Tu,null):(reconcileChildren(e,t,i,n),t.child)}(e,t,n);case N:return function updateHostText(e,t){// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null===e&&tryToClaimNextHydratableInstance(t),null}(e,t);case W:return updateSuspenseComponent(e,t,n);case F:return function updatePortalComponent(e,t,n){pushHostContainer(t,t.stateNode.containerInfo);var r=t.pendingProps;return null===e?
// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
t.child=xs(t,null,r,n):reconcileChildren(e,t,r,n),t.child}(e,t,n);case A:var g=t.type,y=t.pendingProps;return updateForwardRef(e,t,g,t.elementType===g?y:resolveDefaultProps(g,y),n);case _:return function updateFragment(e,t,n){return reconcileChildren(e,t,t.pendingProps,n),t.child}(e,t,n);case L:return function updateMode(e,t,n){return reconcileChildren(e,t,t.pendingProps.children,n),t.child}(e,t,n);case H:return function updateProfiler(e,t,n){return Me&&(t.effectTag|=qr),reconcileChildren(e,t,t.pendingProps.children,n),t.child}(e,t,n);case U:return updateContextProvider(e,t,n);case M:return function updateContextConsumer(e,t,n){var r=t.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
void 0===r._context?
// This may be because it's a Context (rather than a Consumer).
// Or it may be because it's older React where they're the same thing.
// We only want to warn if we're sure it's a new React.
r!==r.Consumer&&(Hc||(Hc=!0,warning$1(!1,"Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var o=t.pendingProps,a=o.children;"function"!==typeof a&&warningWithoutStack$1(!1,"A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),prepareToReadContext(t,n);var i,l=readContext(r,o.unstable_observedBits);return Mc.current=t,setCurrentPhase("render"),i=a(l),setCurrentPhase(null),// React DevTools reads this flag.
t.effectTag|=Vr,reconcileChildren(e,t,i,n),t.child}(e,t,n);case z:var b=t.type,C=resolveDefaultProps(b,t.pendingProps);if(t.type!==t.elementType){var T=b.propTypes;T&&a(T,C,// Resolved for outer only
"prop",getComponentName(b),getCurrentFiberStackInDev)}return updateMemoComponent(e,t,b,C=resolveDefaultProps(b.type,C),r,n);case j:return updateSimpleMemoComponent(e,t,t.type,t.pendingProps,r,n);case V:var k=t.type,w=t.pendingProps;return function mountIncompleteClassComponent(e,t,n,r,o){// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var a;return null!==e&&(
// An incomplete component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=$r),// Promote the fiber to a class and try rendering again.
t.tag=R,isContextProvider(n)?(a=!0,pushContextProvider(t)):a=!1,prepareToReadContext(t,o),constructClassInstance(t,n,r),mountClassInstance(t,n,r,o),finishClassComponent(null,t,n,!0,a,o)}(e,t,k,t.elementType===k?w:resolveDefaultProps(k,w),n);case q:return updateSuspenseListComponent(e,t,n);case Q:if(Ve)return function updateFundamentalComponent$1(e,t,n){return!1===t.type.impl.reconcileChildren?null:(reconcileChildren(e,t,t.pendingProps.children,n),t.child)}(e,t,n);break;case Y:if($e)return function updateScopeComponent(e,t,n){return reconcileChildren(e,t,t.pendingProps.children,n),t.child}(e,t,n)}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function isFiberSuspenseAndTimedOut(e){return e.tag===W&&null!==e.memoizedState}function getSuspenseFallbackChild(e){return e.child.sibling.child}var Wc,zc,jc,Bc,Vc={};function collectScopedNodes(e,t,n){if($e){if(e.tag===O){var r=e.type,o=e.memoizedProps,a=getPublicInstance(e.stateNode);null!==a&&!0===t(r,o||Vc,a)&&n.push(a)}var i=e.child;isFiberSuspenseAndTimedOut(e)&&(i=getSuspenseFallbackChild(e)),null!==i&&collectScopedNodesFromChildren(i,t,n)}}function collectFirstScopedNode(e,t){if($e){if(e.tag===O){var n=e.type,r=e.memoizedProps,o=getPublicInstance(e.stateNode);if(null!==o&&!0===t(n,r,o))return o}var a=e.child;if(isFiberSuspenseAndTimedOut(e)&&(a=getSuspenseFallbackChild(e)),null!==a)return collectFirstScopedNodeFromChildren(a,t)}return null}function collectScopedNodesFromChildren(e,t,n){for(var r=e;null!==r;)collectScopedNodes(r,t,n),r=r.sibling}function collectFirstScopedNodeFromChildren(e,t){for(var n=e;null!==n;){var r=collectFirstScopedNode(n,t);if(null!==r)return r;n=n.sibling}return null}function collectNearestScopeMethods(e,t,n){if(function isValidScopeNode(e,t){return e.tag===Y&&e.type===t&&null!==e.stateNode}(e,t))n.push(e.stateNode.methods);else{var r=e.child;isFiberSuspenseAndTimedOut(e)&&(r=getSuspenseFallbackChild(e)),null!==r&&collectNearestChildScopeMethods(r,t,n)}}function collectNearestChildScopeMethods(e,t,n){for(var r=e;null!==r;)collectNearestScopeMethods(r,t,n),r=r.sibling}function createScopeMethods(e,t){return{getChildren:function(){var n=t.fiber.child,r=[];return null!==n&&collectNearestChildScopeMethods(n,e,r),0===r.length?null:r},getChildrenFromRoot:function(){for(var n=t.fiber;null!==n;){var r=n.return;if(null===r)break;if((n=r).tag===Y&&n.type===e)break}var o=[];return collectNearestChildScopeMethods(n.child,e,o),0===o.length?null:o},getParent:function(){for(var n=t.fiber.return;null!==n;){if(n.tag===Y&&n.type===e)return n.stateNode.methods;n=n.return}return null},getProps:function(){return t.fiber.memoizedProps},queryAllNodes:function(e){var n=t.fiber.child,r=[];return null!==n&&collectScopedNodesFromChildren(n,e,r),0===r.length?null:r},queryFirstNode:function(e){var n=t.fiber.child;return null!==n?collectFirstScopedNodeFromChildren(n,e):null},containsNode:function(n){for(var r=function getInstanceFromNode$2(e){return getClosestInstanceFromNode(e)||null}(n);null!==r;){if(r.tag===Y&&r.type===e&&r.stateNode===t)return!0;r=r.return}return!1}}}function markUpdate(e){
// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
e.effectTag|=qr}function markRef$1(e){e.effectTag|=Jr}if(_i)
// Mutation mode
Wc=function(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o=t.child;null!==o;){if(o.tag===O||o.tag===N)appendInitialChild(e,o.stateNode);else if(Ve&&o.tag===Q)appendInitialChild(e,o.stateNode.instance);else if(o.tag===F);else if(null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)return;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zc=function(e){// Noop
},jc=function(e,t,n,r,o){
// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var a=e.memoizedProps;if(a!==r){// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var i=prepareUpdate(t.stateNode,n,a,r,o,getHostContext());// TODO: Type this specific to this type of component.
t.updateQueue=i,// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
i&&markUpdate(t)}},Bc=function(e,t,n,r){
// If the text differs, mark it as an update. All the work in done in commitWork.
n!==r&&markUpdate(t)};else if(fi){
// Persistent host tree mode
Wc=function(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o=t.child;null!==o;){if(o.tag===O){var a=o.stateNode;if(n&&r){
// This child is inside a timed out tree. Hide it.
var i=o.memoizedProps,l=o.type;a=Ci(a,l,i,o)}appendInitialChild(e,a)}else if(o.tag===N){var u=o.stateNode;if(n&&r){
// This child is inside a timed out tree. Hide it.
var s=o.memoizedProps;u=Ti(u,s,o)}appendInitialChild(e,u)}else if(Ve&&o.tag===Q){var c=o.stateNode.instance;if(n&&r){
// This child is inside a timed out tree. Hide it.
var d=o.memoizedProps,p=o.type;c=Ci(c,p,d,o)}appendInitialChild(e,c)}else if(o.tag===F);else if(o.tag===W){if((o.effectTag&qr)!==Br){
// Need to toggle the visibility of the primary children.
var f=null!==o.memoizedState;if(f){var m=o.child;if(null!==m){null!==m.child&&(m.child.return=m,Wc(e,m,!0,f));var h=m.sibling;if(null!==h){h.return=o,o=h;continue}}}}if(null!==o.child){
// Continue traversing like normal
o.child.return=o,o=o.child;continue}}else if(null!==o.child){o.child.return=o,o=o.child;continue}// $FlowFixMe This is correct but Flow is confused by the labeled break.
if((o=o)===t)return;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};// An unfortunate fork of appendAllChildren because we have two different parent types.
var appendAllChildrenToContainer=function(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o=t.child;null!==o;){if(o.tag===O){var a=o.stateNode;if(n&&r){
// This child is inside a timed out tree. Hide it.
var i=o.memoizedProps,l=o.type;a=Ci(a,l,i,o)}gi(e,a)}else if(o.tag===N){var u=o.stateNode;if(n&&r){
// This child is inside a timed out tree. Hide it.
var s=o.memoizedProps;u=Ti(u,s,o)}gi(e,u)}else if(Ve&&o.tag===Q){var c=o.stateNode.instance;if(n&&r){
// This child is inside a timed out tree. Hide it.
var d=o.memoizedProps,p=o.type;c=Ci(c,p,d,o)}gi(e,c)}else if(o.tag===F);else if(o.tag===W){if((o.effectTag&qr)!==Br){
// Need to toggle the visibility of the primary children.
var f=null!==o.memoizedState;if(f){var m=o.child;if(null!==m){null!==m.child&&(m.child.return=m,appendAllChildrenToContainer(e,m,!0,f));var h=m.sibling;if(null!==h){h.return=o,o=h;continue}}}}if(null!==o.child){
// Continue traversing like normal
o.child.return=o,o=o.child;continue}}else if(null!==o.child){o.child.return=o,o=o.child;continue}// $FlowFixMe This is correct but Flow is confused by the labeled break.
if((o=o)===t)return;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};zc=function(e){var t=e.stateNode;if(null===e.firstEffect);else{var n=t.containerInfo,r=vi(n);// If children might have changed, we have to add them all to the set.
appendAllChildrenToContainer(r,e,!1,!1),t.pendingChildren=r,// Schedule an update on the container to swap out the container.
markUpdate(e),yi(n,r)}},jc=function(e,t,n,r,o){var a=e.stateNode,i=e.memoizedProps,l=null===t.firstEffect;if(l&&i===r)
// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
t.stateNode=a;else{var u=t.stateNode,s=getHostContext(),c=null;if(i!==r&&(c=prepareUpdate(u,n,i,r,o,s)),l&&null===c)
// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
t.stateNode=a;else{var d=mi(a,c,n,i,r,t,l,u);finalizeInitialChildren(d,n,r,o)&&markUpdate(t),t.stateNode=d,l?
// If there are no other effects in this tree, we need to flag this node as having one.
// Even though we're not going to use it for anything.
// Otherwise parents won't know that there are new children to propagate upwards.
markUpdate(t):
// If children might have changed, we have to add them all to the set.
Wc(d,t,!1,!1)}}},Bc=function(e,t,n,r){if(n!==r){
// If the text content differs, we'll create a new text instance for it.
var o=getRootHostContainer(),a=getHostContext();t.stateNode=createTextInstance(r,o,a,t),// We'll have to mark it as having an effect, even though we won't use the effect for anything.
// This lets the parents know that at least one of their children has changed.
markUpdate(t)}}}else
// No host operations
zc=function(e){// Noop
},jc=function(e,t,n,r,o){// Noop
},Bc=function(e,t,n,r){// Noop
};function cutOffTailIfNeeded(e,t){switch(e.tailMode){case"hidden":for(
// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===r?
// All remaining items in the tail are insertions.
e.tail=null:
// Detach the insertion after the last node that was already
// inserted.
r.sibling=null;break;case"collapsed":for(
// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var o=e.tail,a=null;null!==o;)null!==o.alternate&&(a=o),o=o.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===a?
// All remaining items in the tail are insertions.
t||null===e.tail?e.tail=null:
// We suspended during the head. We want to show at least one
// row at the tail. So we'll keep on and cut off the rest.
e.tail.sibling=null:
// Detach the insertion after the last node that was already
// inserted.
a.sibling=null}}function completeWork(e,t,n){var r=t.pendingProps;switch(t.tag){case I:case B:break;case j:case P:break;case R:isContextProvider(t.type)&&popContext(t);break;case D:popHostContainer(t),popTopLevelContextObject(t);var o=t.stateNode;if(o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null===e||null===e.child)popHydrationState(t)&&
// If we hydrated, then we'll need to schedule an update for
// the commit side-effects on the root.
markUpdate(t);zc(t);break;case O:popHostContext(t);var a=getRootHostContainer(),i=t.type;if(null!==e&&null!=t.stateNode){if(jc(e,t,i,r,a),Be)e.memoizedProps.listeners!==r.listeners&&markUpdate(t);e.ref!==t.ref&&markRef$1(t)}else{if(!r){if(null===t.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");// This can happen when we abort work.
break}var l=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on we want to add then top->down or
// bottom->up. Top->down is faster in IE11.
if(popHydrationState(t)){if(
// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
function prepareToHydrateHostInstance(e,t,n){if(!Li)throw Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var r=hydrateInstance(e.stateNode,e.type,e.memoizedProps,t,n,e);// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
// TODO: Type this specific to this type of component.
return e.updateQueue=r,null!==r}(t,a,l)&&
// If changes to the hydrated node needs to be applied at the
// commit-phase we mark this as such.
markUpdate(t),Be){var u=r.listeners;null!=u&&updateEventListeners(u,t,a)}}else{var s=createInstance(i,r,a,l,t);if(Wc(s,t,!1,!1),// This needs to be set before we mount Flare event listeners
t.stateNode=s,Be){var c=r.listeners;null!=c&&updateEventListeners(c,t,a)}// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
finalizeInitialChildren(s,i,r,a)&&markUpdate(t)}null!==t.ref&&
// If there is a ref on a host node we need to schedule a callback
markRef$1(t)}break;case N:var d=r;if(e&&null!=t.stateNode){var p=e.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
Bc(e,t,p,d)}else{if("string"!==typeof d&&null===t.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var f=getRootHostContainer(),m=getHostContext();popHydrationState(t)?prepareToHydrateHostTextInstance(t)&&markUpdate(t):t.stateNode=createTextInstance(d,f,m,t)}break;case A:break;case W:popSuspenseContext(t);var h=t.memoizedState;if(Ae&&null!==h&&null!==h.dehydrated){if(null===e){if(!popHydrationState(t))throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");return prepareToHydrateHostSuspenseInstance(t),Ue&&markSpawnedWork(Tu),null}
// We should never have been in a hydration state if we didn't have a current.
// However, in some of those paths, we might have reentered a hydration state
// and then we might be inside a hydration state. In that case, we'll need to
// exit out of it.
return resetHydrationState(),(t.effectTag&Xr)===Br&&(
// This boundary did not suspend so it's now hydrated and unsuspended.
t.memoizedState=null),// If nothing suspended, we need to schedule an effect to mark this boundary
// as having hydrated so events know that they're free be invoked.
// It's also a signal to replay events and the suspense callback.
// If something suspended, schedule an effect to attach retry listeners.
// So we might as well always mark this.
t.effectTag|=qr,null}if((t.effectTag&Xr)!==Br)// Do not reset the effect list.
// Something suspended. Re-render with the fallback children.
return t.expirationTime=n,t;var v=null!==h,g=!1;if(null===e)void 0!==t.memoizedProps.fallback&&popHydrationState(t);else{var y=e.memoizedState;if(g=null!==y,!v&&null!==y){
// We just switched from the fallback to the normal children.
// Delete the fallback.
// TODO: Would it be better to store the fallback fragment on
// the stateNode during the begin phase?
var b=e.child.sibling;if(null!==b){
// Deletions go at the beginning of the return fiber's effect list
var C=t.firstEffect;null!==C?(t.firstEffect=b,b.nextEffect=C):(t.firstEffect=t.lastEffect=b,b.nextEffect=null),b.effectTag=Yr}}}if(v&&!g)
// If this subtreee is running in blocking mode we can suspend,
// otherwise we won't suspend.
// TODO: This will still suspend a synchronous tree if anything
// in the concurrent tree already suspended during this render.
// This is a known bug.
if((t.mode&vu)!==mu)null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||hasSuspenseContext(Ls.current,Ns)?
// If this was in an invisible tree or a new render, then showing
// this boundary is ok.
function renderDidSuspend(){hd===ad&&(hd=ud)}():
// Otherwise, we're going to have to hide content so we should
// suspend for longer if possible.
renderDidSuspendDelayIfPossible();fi&&v&&(
// If this boundary just timed out, schedule an effect to attach a
// retry listener to the proimse. This flag is also used to hide the
// primary children.
t.effectTag|=qr),_i&&(v||g)&&(
// If this boundary just timed out, schedule an effect to attach a
// retry listener to the proimse. This flag is also used to hide the
// primary children. In mutation mode, we also need the flag to
// *unhide* children that were previously hidden, so check if the
// is currently timed out, too.
t.effectTag|=qr),Ye&&null!==t.updateQueue&&null!=t.memoizedProps.suspenseCallback&&(
// Always notify the callback
t.effectTag|=qr);break;case _:case L:case H:break;case F:popHostContainer(t),zc(t);break;case U:
// Pop provider fiber
popProvider(t);break;case M:case z:break;case V:isContextProvider(t.type)&&popContext(t);break;case q:popSuspenseContext(t);var T=t.memoizedState;if(null===T)
// We're running in the default, "independent" mode. We don't do anything
// in this mode.
break;var k=(t.effectTag&Xr)!==Br,w=T.rendering;if(null===w){
// We just rendered the head.
if(k)cutOffTailIfNeeded(T,!1);else if(!(// Called during render to determine if anything has suspended.
// Returns false if we're not sure.
function renderHasNotSuspendedYet(){
// If something errored or completed, we can't really be sure,
// so those are false.
return hd===ad}()&&(null===e||(e.effectTag&Xr)===Br)))for(var S=t.child;null!==S;){var E=findFirstSuspended(S);if(null!==E){k=!0,t.effectTag|=Xr,cutOffTailIfNeeded(T,!1);// If this is a newly suspended tree, it might not get committed as
// part of the second pass. In that case nothing will subscribe to
// its thennables. Instead, we'll transfer its thennables to the
// SuspenseList so that it can retry if they resolve.
// There might be multiple of these in the list but since we're
// going to wait for all of them anyway, it doesn't really matter
// which ones gets to ping. In theory we could get clever and keep
// track of how many dependencies remain but it gets tricky because
// in the meantime, we can add/remove/change items and dependencies.
// We might bail out of the loop before finding any but that
// doesn't matter since that means that the other boundaries that
// we did find already has their listeners attached.
var x=E.updateQueue;return null!==x&&(t.updateQueue=x,t.effectTag|=qr),// Rerender the whole list, but this time, we'll force fallbacks
// to stay in place.
// Reset the effect list before doing the second pass since that's now invalid.
null===T.lastEffect&&(t.firstEffect=null),t.lastEffect=T.lastEffect,// Reset the child fibers to their original state.
resetChildFibers(t,n),// Set up the Suspense Context to force suspense and immediately
// rerender the children.
pushSuspenseContext(t,setShallowSuspenseContext(Ls.current,_s)),t.child}S=S.sibling}// Next we're going to render the tail.
}else{
// Append the rendered row to the child list.
if(!k){var $=findFirstSuspended(w);if(null!==$){t.effectTag|=Xr,k=!0;// Ensure we transfer the update queue to the parent so that it doesn't
// get lost if this row ends up dropped during a second pass.
var K=$.updateQueue;// This might have been modified.
if(null!==K&&(t.updateQueue=K,t.effectTag|=qr),cutOffTailIfNeeded(T,!0),null===T.tail&&"hidden"===T.tailMode&&!w.alternate){
// We need to delete the row we just rendered.
// Reset the effect list to what it was before we rendered this
// child. The nested children have already appended themselves.
var G=t.lastEffect=T.lastEffect;// Remove any effects that were appended after this point.
// We're done.
return null!==G&&(G.nextEffect=null),null}}else if(fu()>T.tailExpiration&&n>Tu){
// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
t.effectTag|=Xr,k=!0,cutOffTailIfNeeded(T,!1);// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. If we can show
// them, then they really have the same priority as this render.
// So we'll pick it back up the very next render pass once we've had
// an opportunity to yield for paint.
var X=n-1;t.expirationTime=t.childExpirationTime=X,Ue&&markSpawnedWork(X)}}if(T.isBackwards)
// The effect list of the backwards tail will have been added
// to the end. This breaks the guarantee that life-cycles fire in
// sibling order but that isn't a strong guarantee promised by React.
// Especially since these might also just pop in during future commits.
// Append to the beginning of the list.
w.sibling=t.child,t.child=w;else{var J=T.last;null!==J?J.sibling=w:t.child=w,T.last=w}}if(null!==T.tail){
// We still have tail rows to render.
if(0===T.tailExpiration){T.tailExpiration=fu()+500}// Pop a row.
var Z=T.tail;T.rendering=Z,T.tail=Z.sibling,T.lastEffect=t.lastEffect,Z.sibling=null;// Restore the context.
// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var ee=Ls.current;// Do a pass over the next row.
return pushSuspenseContext(t,ee=k?setShallowSuspenseContext(ee,_s):setDefaultShallowSuspenseContext(ee)),Z}break;case Q:if(Ve){var te=t.type.impl,ne=t.stateNode;if(null===ne){var re,oe=te.getInitialState;void 0!==oe&&(re=oe(r));var ae=function getFundamentalComponentInstance(e){if(Ve){var t=e.currentFiber,n=e.impl,r=e.props,o=e.state,a=n.getInstance(null,r,o);return precacheFiberNode(t,a),a}// Because of the flag above, this gets around the Flow error;
return null}(ne=t.stateNode=function createFundamentalStateInstance(e,t,n,r){return{currentFiber:e,impl:n,instance:null,prevProps:null,props:t,state:r}}(t,r,te,re||{}));if(ne.instance=ae,!1===te.reconcileChildren)return null;Wc(ae,t,!1,!1),function mountFundamentalComponent(e){if(Ve){var t=e.impl,n=e.instance,r=e.props,o=e.state,a=t.onMount;void 0!==a&&a(null,n,r,o)}}(ne)}else{
// We fire update in commit phase
var ie=ne.props;if(ne.prevProps=ie,ne.props=r,ne.currentFiber=t,fi){var le=hi(ne);ne.instance=le,Wc(le,t,!1,!1)}(function shouldUpdateFundamentalComponent(e){if(Ve){var t=e.impl,n=e.prevProps,r=e.props,o=e.state,a=t.shouldUpdate;if(void 0!==a)return a(null,n,r,o)}return!0})(ne)&&markUpdate(t)}}break;case Y:if($e)if(null===e){var ue=t.type,se={fiber:t,methods:null};if(t.stateNode=se,se.methods=createScopeMethods(ue,se),Be){var ce=r.listeners;if(null!=ce)updateEventListeners(ce,t,getRootHostContainer())}null!==t.ref&&(markRef$1(t),markUpdate(t))}else{if(Be)e.memoizedProps.listeners===r.listeners&&null===t.ref||markUpdate(t);else null!==t.ref&&markUpdate(t);e.ref!==t.ref&&markRef$1(t)}break;default:throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}return null}function unwindWork(e,t){switch(e.tag){case R:isContextProvider(e.type)&&popContext(e);var n=e.effectTag;return n&io?(e.effectTag=n&~io|Xr,e):null;case D:popHostContainer(e),popTopLevelContextObject(e);var r=e.effectTag;if((r&Xr)!==Br)throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");return e.effectTag=r&~io|Xr,e;case O:
// TODO: popHydrationState
return popHostContext(e),null;case W:if(popSuspenseContext(e),Ae){var o=e.memoizedState;if(null!==o&&null!==o.dehydrated){if(null===e.alternate)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");resetHydrationState()}}var a=e.effectTag;return a&io?(e.effectTag=a&~io|Xr,e):null;case q:// SuspenseList doesn't actually catch anything. It should've been
// caught by a nested boundary. If not, it should bubble through.
return popSuspenseContext(e),null;case F:return popHostContainer(e),null;case U:return popProvider(e),null;default:return null}}function unwindInterruptedWork(e){switch(e.tag){case R:var t=e.type.childContextTypes;null!==t&&void 0!==t&&popContext(e);break;case D:popHostContainer(e),popTopLevelContextObject(e);break;case O:popHostContext(e);break;case F:popHostContainer(e);break;case W:case q:popSuspenseContext(e);break;case U:popProvider(e)}}function createCapturedValue(e,t){
// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:e,source:t,stack:getStackByFiberInDevAndProd(t)}}
// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
var $c=null;$c=new Set;var qc="function"===typeof WeakSet?WeakSet:Set;function logError(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=getStackByFiberInDevAndProd(n));var o={componentName:null!==n?getComponentName(n.type):null,componentStack:null!==r?r:"",error:t.value,errorBoundary:null,errorBoundaryName:null,errorBoundaryFound:!1,willRetry:!1};null!==e&&e.tag===R&&(o.errorBoundary=e.stateNode,o.errorBoundaryName=getComponentName(e.type),o.errorBoundaryFound=!0,o.willRetry=!0);try{!function logCapturedError(e){var t=e.error,n=e.componentName,r=e.componentStack,o=e.errorBoundaryName,a=e.errorBoundaryFound,i=e.willRetry;// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(null!=t&&t._suppressLogging){if(a&&i)
// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console.error(t)}var l=""+(n?"The above error occurred in the <"+n+"> component:":"The above error occurred in one of your React components:")+r+"\n\n"+(// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
a&&o?i?"React will try to recreate this component tree from scratch using the error boundary you provided, "+o+".":"This error was initially handled by the error boundary "+o+".\nRecreating the tree from scratch failed so React will unmount the tree.":"Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://fb.me/react-error-boundaries to learn more about error boundaries.");// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(l)}(o)}catch(kp){
// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout((function(){throw kp}))}}var callComponentWillUnmountWithTimer=function(e,t){startPhaseTimer(e,"componentWillUnmount"),t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount(),stopPhaseTimer()};// Capture errors so they don't interrupt unmounting.
function safelyDetachRef(e){var t=e.ref;null!==t&&("function"===typeof t?(invokeGuardedCallback(null,t,null,null),hasCaughtError()&&captureCommitPhaseError(e,clearCaughtError())):t.current=null)}function safelyCallDestroy(e,t){(invokeGuardedCallback(null,t,null),hasCaughtError())&&captureCommitPhaseError(e,clearCaughtError())}function commitBeforeMutationLifeCycles(e,t){switch(t.tag){case P:case A:case j:return void commitHookEffectList(Ws,Hs,t);case R:if(t.effectTag&Zr&&null!==e){var n=e.memoizedProps,r=e.memoizedState;startPhaseTimer(t,"getSnapshotBeforeUpdate");var o=t.stateNode;// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
t.type!==t.elementType||Fc||(o.props!==t.memoizedProps&&warning$1(!1,"Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(t.type)||"instance"),o.state!==t.memoizedState&&warning$1(!1,"Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(t.type)||"instance"));var a=o.getSnapshotBeforeUpdate(t.elementType===t.type?n:resolveDefaultProps(t.type,n),r),i=$c;void 0!==a||i.has(t.type)||(i.add(t.type),warningWithoutStack$1(!1,"%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",getComponentName(t.type))),o.__reactInternalSnapshotBeforeUpdate=a,stopPhaseTimer()}return;case D:case O:case N:case F:case V:
// Nothing to do for these component types
return;default:throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function commitHookEffectList(e,t,n){var r=n.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var a=o.next,i=a;do{if((i.tag&e)!==Hs){
// Unmount
var l=i.destroy;i.destroy=void 0,void 0!==l&&l()}if((i.tag&t)!==Hs){
// Mount
var u=i.create;i.destroy=u();var s=i.destroy;if(void 0!==s&&"function"!==typeof s){var c=void 0;c=null===s?" You returned null. If your effect does not require clean up, return undefined (or nothing).":"function"===typeof s.then?"\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching":" You returned: "+s,warningWithoutStack$1(!1,"An effect function must not return anything besides a function, which is used for clean-up.%s%s",c,getStackByFiberInDevAndProd(n))}}i=i.next}while(i!==a)}}function commitPassiveHookEffects(e){if((e.effectTag&eo)!==Br)switch(e.tag){case P:case A:case j:commitHookEffectList(qs,Hs,e),commitHookEffectList(Hs,$s,e)}}function commitLifeCycles(e,t,n,r){switch(n.tag){case P:case A:case j:commitHookEffectList(Bs,Vs,n);break;case R:var o=n.stateNode;if(n.effectTag&qr)if(null===t)startPhaseTimer(n,"componentDidMount"),n.type!==n.elementType||Fc||(o.props!==n.memoizedProps&&warning$1(!1,"Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance"),o.state!==n.memoizedState&&warning$1(!1,"Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance")),o.componentDidMount(),stopPhaseTimer();else{var a=n.elementType===n.type?t.memoizedProps:resolveDefaultProps(n.type,t.memoizedProps),i=t.memoizedState;startPhaseTimer(n,"componentDidUpdate"),n.type!==n.elementType||Fc||(o.props!==n.memoizedProps&&warning$1(!1,"Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance"),o.state!==n.memoizedState&&warning$1(!1,"Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance")),o.componentDidUpdate(a,i,o.__reactInternalSnapshotBeforeUpdate),stopPhaseTimer()}var l=n.updateQueue;return void(null!==l&&(n.type!==n.elementType||Fc||(o.props!==n.memoizedProps&&warning$1(!1,"Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance"),o.state!==n.memoizedState&&warning$1(!1,"Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance")),// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
commitUpdateQueue(0,l,o)));case D:var u=n.updateQueue;if(null!==u){var s=null;if(null!==n.child)switch(n.child.tag){case O:s=getPublicInstance(n.child.stateNode);break;case R:s=n.child.stateNode}commitUpdateQueue(0,u,s)}return;case O:var c=n.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(null===t&&n.effectTag&qr)!function commitMount(e,t,n,r){
// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
shouldAutoFocusHostComponent(t,n)&&e.focus()}(c,n.type,n.memoizedProps);return;case N:case F:
// We have no life-cycles associated with portals.
return;case H:if(Me){var d=n.memoizedProps.onRender;"function"===typeof d&&(Ue?d(n.memoizedProps.id,null===t?"mount":"update",n.actualDuration,n.treeBaseDuration,n.actualStartTime,getCommitTime(),e.memoizedInteractions):d(n.memoizedProps.id,null===t?"mount":"update",n.actualDuration,n.treeBaseDuration,n.actualStartTime,getCommitTime()))}return;case W:return void function commitSuspenseHydrationCallbacks(e,t){if(!Li)return;if(null===t.memoizedState){var n=t.alternate;if(null!==n){var r=n.memoizedState;if(null!==r){var o=r.dehydrated;if(null!==o&&(function commitHydratedSuspenseInstance(e){
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(e)}(o),Ye)){var a=e.hydrationCallbacks;if(null!==a){var i=a.onHydrated;i&&i(o)}}}}}}(e,n);case q:case V:case Q:case Y:return;default:throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function commitAttachRef(e){var t=e.ref;if(null!==t){var n,r=e.stateNode;switch(e.tag){case O:n=getPublicInstance(r);break;default:n=r}// Moved outside to ensure DCE works with this flag
$e&&e.tag===Y&&(n=r.methods),"function"===typeof t?t(n):(t.hasOwnProperty("current")||warningWithoutStack$1(!1,"Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s",getComponentName(e.type),getStackByFiberInDevAndProd(e)),t.current=n)}}function commitDetachRef(e){var t=e.ref;null!==t&&("function"===typeof t?t(null):t.current=null)}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(e,t,n){switch(function onCommitUnmount(e){"function"===typeof Zd&&Zd(e)}(t),t.tag){case P:case A:case z:case j:var r=t.updateQueue;if(null!==r){var o=r.lastEffect;if(null!==o){var a=o.next;// When the owner fiber is deleted, the destroy function of a passive
// effect hook is called during the synchronous commit phase. This is
// a concession to implementation complexity. Calling it in the
// passive effect phase (like they usually are, when dependencies
// change during an update) would require either traversing the
// children of the deleted fiber again, or including unmount effects
// as part of the fiber effect list.
//
// Because this is during the sync commit phase, we need to change
// the priority.
//
// TODO: Reconsider this implementation trade off.
runWithPriority$2(n>ru?ru:n,(function(){var e=a;do{var n=e.destroy;void 0!==n&&safelyCallDestroy(t,n),e=e.next}while(e!==a)}))}}break;case R:safelyDetachRef(t);var i=t.stateNode;return void("function"===typeof i.componentWillUnmount&&function safelyCallComponentWillUnmount(e,t){invokeGuardedCallback(null,callComponentWillUnmountWithTimer,null,e,t),hasCaughtError()&&captureCommitPhaseError(e,clearCaughtError())}(t,i));case O:if(Be){var l=t.dependencies;if(null!==l){var u=l.responders;if(null!==u){for(var s=Array.from(u.values()),c=0,d=s.length;c<d;c++){unmountResponderInstance(s[c])}l.responders=null}}}return void safelyDetachRef(t);case F:
// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
return void(_i?unmountHostComponents(e,t,n):fi&&function emptyPortalContainer(e){if(!fi)return;var t=e.stateNode.containerInfo,n=vi(t);bi(t,n)}(t));case Q:if(Ve){var p=t.stateNode;null!==p&&(!function unmountFundamentalComponent(e){if(Ve){var t=e.impl,n=e.instance,r=e.props,o=e.state,a=t.onUnmount;void 0!==a&&a(null,n,r,o)}}(p),t.stateNode=null)}return;case $:if(Ye){var f=e.hydrationCallbacks;if(null!==f){var m=f.onDeleted;m&&m(t.stateNode)}}return;case Y:$e&&safelyDetachRef(t)}}function commitNestedUnmounts(e,t,n){for(
// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
// we do an inner loop while we're still inside the host node.
var r=t;;)// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(commitUnmount(e,r,n),null===r.child||// If we use mutation we drill down into portals using commitUnmount above.
// If we don't use mutation we drill down into portals here instead.
_i&&r.tag===F){if(r===t)return;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}else r.child.return=r,r=r.child}function isHostParent(e){return e.tag===O||e.tag===D||e.tag===F}function commitPlacement(e){if(_i){// Recursively insert all host nodes into the parent.
var t,n,r=function getHostParentFiber(e){for(var t=e.return;null!==t;){if(isHostParent(t))return t;t=t.return}throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}(e),o=r.stateNode;// Note: these two variables *must* always be updated together.
switch(r.tag){case O:t=o,n=!1;break;case D:case F:t=o.containerInfo,n=!0;break;case Q:Ve&&(t=o.instance,n=!1);
// eslint-disable-next-line-no-fallthrough
default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}r.effectTag&Kr&&(
// Reset the text content of the parent before doing any insertions
resetTextContent(t),// Clear ContentReset from the effect tag
r.effectTag&=~Kr);for(var a,i,l,u=function getHostSibling(e){
// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var t=e;e:for(;;){
// If we didn't find anything, let's try the next sibling.
for(;null===t.sibling;){if(null===t.return||isHostParent(t.return))
// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==O&&t.tag!==N&&t.tag!==$;){
// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(t.effectTag&$r)
// If we don't have a child, try the siblings instead.
continue e;// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(null===t.child||t.tag===F)continue e;t.child.return=t,t=t.child}// Check if this host node is stable or about to be placed.
if(!(t.effectTag&$r))
// Found it!
return t.stateNode}}(e),s=e// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
;;){var c=s.tag===O||s.tag===N;if(c||Ve&&s.tag===Q){var d=c?s.stateNode:s.stateNode.instance;u?n?(i=d,l=u,(a=t).nodeType===an?a.parentNode.insertBefore(i,l):a.insertBefore(i,l)):insertBefore(t,d,u):n?appendChildToContainer(t,d):appendChild(t,d)}else if(s.tag===F);else if(null!==s.child){s.child.return=s,s=s.child;continue}if(s===e)return;for(;null===s.sibling;){if(null===s.return||s.return===e)return;s=s.return}s.sibling.return=s.return,s=s.sibling}}}function unmountHostComponents(e,t,n){for(
// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
var r,o,a,i,l=t,u=!1// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
;;){if(!u){var s=l.return;e:for(;;){if(null===s)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");var c=s.stateNode;switch(s.tag){case O:r=c,o=!1;break e;case D:case F:r=c.containerInfo,o=!0;break e;case Q:Ve&&(r=c.instance,o=!1)}s=s.return}u=!0}if(l.tag===O||l.tag===N)commitNestedUnmounts(e,l,n),// After all the children have unmounted, it is now safe to remove the
// node from the tree.
o?removeChildFromContainer(r,l.stateNode):removeChild(r,l.stateNode);else if(Ve&&l.tag===Q){var d=l.stateNode.instance;commitNestedUnmounts(e,l,n),// After all the children have unmounted, it is now safe to remove the
// node from the tree.
o?removeChildFromContainer(r,d):removeChild(r,d)}else if(Ae&&l.tag===$){if(Ye){var p=e.hydrationCallbacks;if(null!==p){var f=p.onDeleted;f&&f(l.stateNode)}}// Delete the dehydrated suspense boundary and all of its content.
o?(a=r,i=l.stateNode,a.nodeType===an?clearSuspenseBoundary(a.parentNode,i):a.nodeType===rn&&clearSuspenseBoundary(a,i),// Document nodes should never contain suspense boundaries.
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(a)):clearSuspenseBoundary(r,l.stateNode)}else if(l.tag===F){if(null!==l.child){
// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
r=l.stateNode.containerInfo,o=!0,// Visit children because portals might contain host components.
l.child.return=l,l=l.child;continue}}else// Visit children because we may find more host components below.
if(commitUnmount(e,l,n),null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)return;for(;null===l.sibling;){if(null===l.return||l.return===t)return;(l=l.return).tag===F&&(
// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
u=!1)}l.sibling.return=l.return,l=l.sibling}}function commitDeletion(e,t,n){_i?
// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(e,t,n):
// Detach refs and call componentWillUnmount() on the whole subtree.
commitNestedUnmounts(e,t,n),function detachFiber(e){var t=e.alternate;// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,null!==t&&detachFiber(t)}(t)}function commitWork(e,t){if(_i)switch(t.tag){case P:case A:case z:case j:
// Note: We currently never use MountMutation, but useLayout uses
// UnmountMutation.
return void commitHookEffectList(zs,js,t);case R:return;case O:var n=t.stateNode;if(null!=n){
// Commit the work prepared earlier.
var r=t.memoizedProps,o=null!==e?e.memoizedProps:r,a=t.type,i=t.updateQueue;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
if(t.updateQueue=null,null!==i&&function commitUpdate(e,t,n,r,o,a){
// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(e,o),// Apply the diff to the DOM node.
updateProperties(e,t,n,r,o)}(n,i,a,o,r),Be){var l=o.listeners,u=r.listeners;l!==u&&updateEventListeners(u,t,null)}}return;case N:if(null===t.stateNode)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var s=t.stateNode,c=t.memoizedProps;null!==e&&e.memoizedProps;return void function commitTextUpdate(e,t,n){e.nodeValue=n}(s,0,c);case D:if(Li){var d=t.stateNode;d.hydrate&&(
// We've just hydrated. No need to hydrate again.
d.hydrate=!1,commitHydratedContainer(d.containerInfo))}return;case H:return;case W:return commitSuspenseComponent(t),void attachSuspenseRetryListeners(t);case q:return void attachSuspenseRetryListeners(t);case V:return;case Q:if(Ve)!function updateFundamentalComponent(e){if(Ve){var t=e.impl,n=e.instance,r=e.prevProps,o=e.props,a=e.state,i=t.onUpdate;void 0!==i&&i(null,n,r,o,a)}}(t.stateNode);return;case Y:if($e)if(t.stateNode.fiber=t,Be){var p=t.memoizedProps,f=(null!==e?e.memoizedProps:p).listeners,m=p.listeners;f!==m&&updateEventListeners(m,t,null)}return;default:throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}else{switch(t.tag){case P:case A:case z:case j:
// Note: We currently never use MountMutation, but useLayout uses
// UnmountMutation.
return void commitHookEffectList(zs,js,t);case H:return;case W:return commitSuspenseComponent(t),void attachSuspenseRetryListeners(t);case q:return void attachSuspenseRetryListeners(t);case D:if(Li){var h=t.stateNode;h.hydrate&&(
// We've just hydrated. No need to hydrate again.
h.hydrate=!1,commitHydratedContainer(h.containerInfo))}}(function commitContainer(e){if(fi)switch(e.tag){case R:case O:case N:case Q:return;case D:case F:var t=e.stateNode,n=t.containerInfo,r=t.pendingChildren;return void bi(n,r);default:throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}})(t)}}function commitSuspenseComponent(e){var t,n=e.memoizedState,r=e;if(null===n?t=!1:(t=!0,r=e.child,function markCommitTimeOfFallback(){kd=fu()}()),_i&&null!==r&&function hideOrUnhideAllChildren(e,t){if(_i)for(
// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
var n=e;;){if(n.tag===O){var r=n.stateNode;t?hideInstance(r):unhideInstance(n.stateNode,n.memoizedProps)}else if(n.tag===N){var o=n.stateNode;t?o.nodeValue="":unhideTextInstance(o,n.memoizedProps)}else{if(n.tag===W&&null!==n.memoizedState&&null===n.memoizedState.dehydrated){
// Found a nested Suspense component that timed out. Skip over the
// primary child fragment, which should remain hidden.
var a=n.child.sibling;a.return=n,n=a;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)return;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}(r,t),Ye&&null!==n){var o=e.memoizedProps.suspenseCallback;if("function"===typeof o){var a=e.updateQueue;null!==a&&o(new Set(a))}else void 0!==o&&warning$1(!1,"Unexpected type for suspenseCallback.")}}function attachSuspenseRetryListeners(e){
// If this boundary just timed out, then it will have a set of thenables.
// For each thenable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new qc),t.forEach((function(t){
// Memoize using the boundary fiber to prevent redundant listeners.
var r=resolveRetryThenable.bind(null,e,t);n.has(t)||(Ue&&!0!==t.__reactDoNotTraceInteractions&&(r=i.unstable_wrap(r)),n.add(t),t.then(r,r))}))}}function commitResetTextContent(e){_i&&resetTextContent(e.stateNode)}var Qc="function"===typeof WeakMap?WeakMap:Map;function createRootErrorUpdate(e,t,n){var r=createUpdate(n,null);// Unmount the root by rendering null.
r.tag=ts,// Caution: React DevTools currently depends on this property
// being called "element".
r.payload={element:null};var o=t.value;return r.callback=function(){jd(o),logError(e,t)},r}function createClassErrorUpdate(e,t,n){var r=createUpdate(n,null);r.tag=ts;var o=e.type.getDerivedStateFromError;if("function"===typeof o){var a=t.value;r.payload=function(){return logError(e,t),o(a)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch?r.callback=function callback(){markFailedErrorBoundaryForHotReloading(e),"function"!==typeof o&&(
// To preserve the preexisting retry behavior of error boundaries,
// we keep track of which ones already failed during this batch.
// This gets reset before we yield back to the browser.
// TODO: Warn in strict mode if getDerivedStateFromError is
// not defined.
!function markLegacyErrorBoundaryAsFailed(e){null===Pd?Pd=new Set([e]):Pd.add(e)}(this),// Only log here if componentDidCatch is the only error boundary method defined
logError(e,t));var n=t.value,r=t.stack;this.componentDidCatch(n,{componentStack:null!==r?r:""}),"function"!==typeof o&&e.expirationTime!==Su&&warningWithoutStack$1(!1,"%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",getComponentName(e.type)||"Unknown")}:r.callback=function(){markFailedErrorBoundaryForHotReloading(e)},r}function attachPingListener(e,t,n){
// Attach a listener to the promise to "ping" the root and retry. But
// only if one does not already exist for the current render expiration
// time (which acts like a "thread ID" here).
var r,o=e.pingCache;if(null===o?(o=e.pingCache=new Qc,r=new Set,o.set(n,r)):void 0===(r=o.get(n))&&(r=new Set,o.set(n,r)),!r.has(t)){
// Memoize using the thread ID to prevent redundant listeners.
r.add(t);var a=pingSuspendedRoot.bind(null,e,n,t);n.then(a,a)}}function throwException(e,t,n,r,o){if(
// The source fiber did not complete.
n.effectTag|=ao,// Its effect list is no longer valid.
n.firstEffect=n.lastEffect=null,null!==r&&"object"===typeof r&&"function"===typeof r.then){
// This is a thenable.
var a=r;!function checkForWrongSuspensePriorityInDEV(e){var t=getCurrentPriorityLevel();if((e.mode&gu)!==Br&&(t===nu||t===tu))for(var n=e;null!==n;){
// Add the component that triggered the suspense
var r=n.alternate;if(null!==r)
// TODO: warn component that triggers the high priority
// suspend is the HostRoot
switch(n.tag){case R:
// Loop through the component's update queue and see whether the component
// has triggered any high priority updates
var o=r.updateQueue;if(null!==o)for(var a=o.firstUpdate;null!==a;){var i=a.priority;if(i===nu||i===tu){null===Gd?Gd=new Set([getComponentName(n.type)]):Gd.add(getComponentName(n.type));break}a=a.next}break;case P:case A:case j:if(null!==n.memoizedState&&null!==n.memoizedState.baseUpdate)// Loop through the functional component's memoized state to see whether
// the component has triggered any high pri updates
for(var l=n.memoizedState.baseUpdate;null!==l;){var u=l.priority;if(u===nu||u===tu){null===Gd?Gd=new Set([getComponentName(n.type)]):Gd.add(getComponentName(n.type));break}if(l.next===n.memoizedState.baseUpdate)break;l=l.next}}n=n.return}}(n);var i=hasSuspenseContext(Ls.current,Ns),l=t;// Schedule the nearest Suspense to re-render the timed out view.
do{if(l.tag===W&&shouldCaptureSuspense(l,i)){
// Found the nearest boundary.
// Stash the promise on the boundary fiber. If the boundary times out, we'll
// attach another listener to flip the boundary back to its normal state.
var u=l.updateQueue;if(null===u){var s=new Set;s.add(a),l.updateQueue=s}else u.add(a);// If the boundary is outside of blocking mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. In the commit phase, we'll schedule a
// subsequent synchronous update to re-render the Suspense.
//
// Note: It doesn't matter whether the component that suspended was
// inside a blocking mode tree. If the Suspense is outside of it, we
// should *not* suspend the commit.
if((l.mode&vu)===mu){if(l.effectTag|=Xr,// We're going to commit this fiber even though it didn't complete.
// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
n.effectTag&=~(ro|ao),n.tag===R)if(null===n.alternate)
// This is a new mount. Change the tag so it's not mistaken for a
// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
n.tag=V;else{
// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var c=createUpdate(Su,null);c.tag=es,enqueueUpdate(n,c)}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
// Exit without suspending.
return void(n.expirationTime=Su)}// Confirmed that the boundary is in a concurrent mode tree. Continue
// with the normal suspend path.
//
// After this we'll use a set of heuristics to determine whether this
// render pass will run to completion or restart or "suspend" the commit.
// The actual logic for this is spread out in different places.
//
// This first principle is that if we're going to suspend when we complete
// a root, then we should also restart if we get an update or ping that
// might unsuspend it, and vice versa. The only reason to suspend is
// because you think you might want to restart before committing. However,
// it doesn't make sense to restart only while in the period we're suspended.
//
// Restarting too aggressively is also not good because it starves out any
// intermediate loading state. So we use heuristics to determine when.
// Suspense Heuristics
//
// If nothing threw a Promise or all the same fallbacks are already showing,
// then don't suspend/restart.
//
// If this is an initial render of a new tree of Suspense boundaries and
// those trigger a fallback, then don't suspend/restart. We want to ensure
// that we can show the initial loading state as quickly as possible.
//
// If we hit a "Delayed" case, such as when we'd switch from content back into
// a fallback, then we should always suspend/restart. SuspenseConfig applies to
// this case. If none is defined, JND is used instead.
//
// If we're already showing a fallback and it gets "retried", allowing us to show
// another level, but there's still an inner boundary that would show a fallback,
// then we suspend/restart for 500ms since the last time we showed a fallback
// anywhere in the tree. This effectively throttles progressive loading into a
// consistent train of commits. This also gives us an opportunity to restart to
// get to the completed state slightly earlier.
//
// If there's ambiguity due to batching it's resolved in preference of:
// 1) "delayed", 2) "initial render", 3) "retry".
//
// We want to ensure that a "busy" state doesn't get force committed. We want to
// ensure that new initial loading states can commit as soon as possible.
return attachPingListener(e,o,a),l.effectTag|=io,void(l.expirationTime=o)}// This boundary already captured during this render. Continue to the next
// boundary.
l=l.return}while(null!==l);// No boundary was found. Fallthrough to error mode.
// TODO: Use invariant so the message is stripped in prod?
r=new Error((getComponentName(n.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+getStackByFiberInDevAndProd(n))}// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
!function renderDidError(){hd!==cd&&(hd=ld)}(),r=createCapturedValue(r,n);var d=t;do{switch(d.tag){case D:var p=r;return d.effectTag|=io,d.expirationTime=o,void enqueueCapturedUpdate(d,createRootErrorUpdate(d,p,o));case R:
// Capture and retry
var f=r,m=d.type,h=d.stateNode;if((d.effectTag&Xr)===Br&&("function"===typeof m.getDerivedStateFromError||null!==h&&"function"===typeof h.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(h)))return d.effectTag|=io,d.expirationTime=o,void enqueueCapturedUpdate(d,createClassErrorUpdate(d,f,o))}d=d.return}while(null!==d)}var Yc=Math.ceil,Kc=K.ReactCurrentDispatcher,Gc=K.ReactCurrentOwner,Xc=K.IsSomeRendererActing,Jc=
/*                    */
0,Zc=
/*               */
1,ed=
/*                 */
2,td=
/*         */
4,nd=
/*       */
8,rd=
/*                */
16,od=
/*                */
32,ad=0,id=1,ld=2,ud=3,sd=4,cd=5,dd=Jc,pd=null,fd=null,md=Cu,hd=ad,vd=null,gd=Su,yd=Su,bd=null,Cd=Cu,Td=!1,kd=0,wd=500,Sd=null,Ed=!1,xd=null,Pd=null,Rd=!1,Id=null,Dd=iu,Fd=Cu,Od=null,Nd=50,_d=0,Ld=null,Md=50,Ud=0,Ad=null,Hd=null,Wd=Cu;function requestCurrentTimeForUpdate(){return(dd&(rd|od))!==Jc?msToExpirationTime(fu()):// We're not inside React, so we may be in the middle of a browser event.
Wd!==Cu?Wd:// This is the first update since React yielded. Compute a new start time.
Wd=msToExpirationTime(fu())}function computeExpirationForFiber(e,t,n){var r=t.mode;if((r&vu)===mu)return Su;var o,a=getCurrentPriorityLevel();if((r&gu)===mu)return a===tu?Su:Eu;if((dd&rd)!==Jc)
// Use whatever time we're already rendering
// TODO: Should there be a way to opt out, like with `runWithPriority`?
return md;if(null!==n)
// Compute an expiration time based on the Suspense timeout.
o=function computeSuspenseExpiration(e,t){
// TODO: Should we warn if timeoutMs is lower than the normal pri expiration time?
return computeExpirationBucket(e,t,Iu)}(e,0|n.timeoutMs||Ru);else
// Compute an expiration time based on the Scheduler priority.
switch(a){case tu:o=Su;break;case nu:
// TODO: Rename this to computeUserBlockingExpiration
o=computeInteractiveExpiration(e);break;case ru:case ou:
// TODO: Handle LowPriority
// TODO: Rename this to... something better.
o=computeAsyncExpiration(e);break;case au:o=ku;break;default:throw Error("Expected a valid priority level")}// If we're in the middle of rendering a tree, do not update at the same
// expiration time that is already rendering.
// TODO: We shouldn't have to do this if the update is on a different root.
// Refactor computeExpirationForFiber + scheduleUpdate so we have access to
// the root when we check for this condition.
return null!==pd&&o===md&&(
// This is a trick to move this update into a separate batch
o-=1),o}var zd=function scheduleUpdateOnFiber(e,t){!function checkForNestedUpdates(){if(_d>Nd)throw _d=0,Ld=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Ud>Md&&(Ud=0,warning$1(!1,"Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}(),function warnAboutInvalidUpdatesOnClassComponentsInDEV(e){if(e.tag===R)switch(ke){case"getChildContext":if(qd)return;warningWithoutStack$1(!1,"setState(...): Cannot call setState() inside getChildContext()"),qd=!0;break;case"render":if($d)return;warningWithoutStack$1(!1,"Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),$d=!0}}// a 'shared' variable that changes when act() opens/closes in tests.
(e);var n=markUpdateTimeFromFiberToRoot(e,t);if(null!==n){!function checkForInterruption(e,t){Ne&&null!==pd&&t>md&&(Ad=e)}(e,t),function recordScheduleUpdate(){Ne&&(El&&(xl=!0),null!==wl&&"componentWillMount"!==wl&&"componentWillReceiveProps"!==wl&&(Pl=!0))}();// TODO: computeExpirationForFiber also reads the priority. Pass the
// priority as an argument to that function and this one.
var r=getCurrentPriorityLevel();if(t===Su?// Check if we're inside unbatchedUpdates
(dd&nd)!==Jc&&// Check if we're not already rendering
(dd&(rd|od))===Jc?(
// Register pending interactions on the root to avoid losing traced interaction data.
schedulePendingInteractions(n,t),// This is a legacy edge case. The initial mount of a ReactDOM.render-ed
// root inside of batchedUpdates should be synchronous, but layout updates
// should be deferred until the end of the batch.
performSyncWorkOnRoot(n)):(ensureRootIsScheduled(n),schedulePendingInteractions(n,t),dd===Jc&&
// Flush the synchronous work now, unless we're already working or inside
// a batch. This is intentionally inside scheduleUpdateOnFiber instead of
// scheduleCallbackForFiber to preserve the ability to schedule a callback
// without immediately flushing it. We only do this for user-initiated
// updates, to preserve historical behavior of legacy mode.
flushSyncCallbackQueue()):(ensureRootIsScheduled(n),schedulePendingInteractions(n,t)),(dd&td)!==Jc&&(// Only updates at user-blocking priority or greater are considered
// discrete, even inside a discrete event.
r===nu||r===tu))
// This is the result of a discrete event. Track the lowest priority
// discrete update per root so we can flush them early, if needed.
if(null===Od)Od=new Map([[n,t]]);else{var o=Od.get(n);(void 0===o||o>t)&&Od.set(n,t)}}else(function warnAboutUpdateOnUnmountedFiberInDEV(e){var t=e.tag;if(t!==D&&t!==R&&t!==P&&t!==A&&t!==z&&t!==j)
// Only warn for user-defined components, not internal ones like Suspense.
return;// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var n=getComponentName(e.type)||"ReactComponent";if(null!==Vd){if(Vd.has(n))return;Vd.add(n)}else Vd=new Set([n]);warningWithoutStack$1(!1,"Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s",t===R?"the componentWillUnmount method":"a useEffect cleanup function",getStackByFiberInDevAndProd(e))})(e)};// This is split into a separate function so we can mark a fiber with pending
// work without treating it as a typical update that originates from an event;
// e.g. retrying a Suspense boundary isn't an update, but it does schedule work
// on a fiber.
function markUpdateTimeFromFiberToRoot(e,t){
// Update the source fiber's expiration time
e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);// Walk the parent path to the root and update the child expiration time.
var r=e.return,o=null;if(null===r&&e.tag===D)o=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t?(r.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t)):null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&r.tag===D){o=r.stateNode;break}r=r.return}return null!==o&&(pd===o&&(
// Received an update to a tree that's in the middle of rendering. Mark
// that's unprocessed work on this root.
markUnprocessedUpdateTime(t),hd===sd&&
// The root already suspended with a delay, which means this render
// definitely won't finish. Since we have a new update, let's mark it as
// suspended now, right before marking the incoming update. This has the
// effect of interrupting the current render and switching to the update.
// TODO: This happens to work when receiving an update during the render
// phase, because of the trick inside computeExpirationForFiber to
// subtract 1 from `renderExpirationTime` to move it into a
// separate bucket. But we should probably model it with an exception,
// using the same mechanism we use to force hydration of a subtree.
// TODO: This does not account for low pri updates that were already
// scheduled before the root started rendering. Need to track the next
// pending expiration time (perhaps by backtracking the return path) and
// then trigger a restart in the `renderDidSuspendDelayIfPossible` path.
markRootSuspendedAtTime(o,md)),// Mark that the root has a pending update.
markRootUpdatedAtTime(o,t)),o}function getNextRootExpirationTimeToWorkOn(e){
// Determines the next expiration time that the root should render, taking
// into account levels that may be suspended, or levels that may have
// received a ping.
var t=e.lastExpiredTime;if(t!==Cu)return t;// "Pending" refers to any update that hasn't committed yet, including if it
// suspended. The "suspended" range is therefore a subset.
var n=e.firstPendingTime;if(!isRootSuspendedAtTime(e,n))
// The highest priority pending time is not suspended. Let's work on that.
return n;// If the first pending time is suspended, check if there's a lower priority
// pending level that we know about. Or check if we received a ping. Work
// on whichever is higher priority.
var r=e.lastPingedTime,o=e.nextKnownPendingLevel;return r>o?r:o}// Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the
// expiration time of the existing task is the same as the expiration time of
// the next level that the root has work on. This function is called on every
// update, and right before exiting a task.
function ensureRootIsScheduled(e){if(e.lastExpiredTime!==Cu)
// Special case: Expired work should flush synchronously.
return e.callbackExpirationTime=Su,e.callbackPriority=tu,void(e.callbackNode=scheduleSyncCallback(performSyncWorkOnRoot.bind(null,e)));var t=getNextRootExpirationTimeToWorkOn(e),n=e.callbackNode;if(t!==Cu){// TODO: If this is an update, we already read the current time. Pass the
// time as an argument.
var r,o=inferPriorityFromExpirationTime(requestCurrentTimeForUpdate(),t);// If there's an existing render task, confirm it has the correct priority and
// expiration time. Otherwise, we'll cancel it and schedule a new one.
if(null!==n){var a=e.callbackPriority;if(// Callback must have the exact same expiration time.
e.callbackExpirationTime===t&&// Callback must have greater or equal priority.
a>=o)
// Existing callback is sufficient.
return;// Need to schedule a new task.
// TODO: Instead of scheduling a new task, we should be able to change the
// priority of the existing one.
!function cancelCallback(e){e!==eu&&Vl(e)}(n)}e.callbackExpirationTime=t,e.callbackPriority=o,
// Sync React callbacks are scheduled on a special internal queue
r=t===Su?scheduleSyncCallback(performSyncWorkOnRoot.bind(null,e)):Je?scheduleCallback(o,performConcurrentWorkOnRoot.bind(null,e)):scheduleCallback(o,performConcurrentWorkOnRoot.bind(null,e),// Compute a task timeout based on the expiration time. This also affects
// ordering because tasks are processed in timeout order.
{timeout:expirationTimeToMs(t)-fu()}),e.callbackNode=r}else
// There's nothing to work on.
null!==n&&(e.callbackNode=null,e.callbackExpirationTime=Cu,e.callbackPriority=iu)}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function performConcurrentWorkOnRoot(e,t){if(
// Since we know we're in a React event, we can clear the current
// event time. The next update will compute a new event time.
Wd=Cu,t)return markRootExpiredAtTime(e,requestCurrentTimeForUpdate()),// This will schedule a synchronous callback.
ensureRootIsScheduled(e),null;// Determine the next expiration time to work on, using the fields stored
// on the root.
var n=getNextRootExpirationTimeToWorkOn(e);if(n!==Cu){var r=e.callbackNode;if((dd&(rd|od))!==Jc)throw Error("Should not already be working.");// If we have a work-in-progress fiber, it means there's still work to do
// in this root.
if(flushPassiveEffects(),// If the root or expiration time have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
e===pd&&n===md||(prepareFreshStack(e,n),startWorkOnPendingInteractions(e,n)),null!==fd){var o=dd;dd|=rd;var a=pushDispatcher(e),i=pushInteractions(e);for(startWorkLoopTimer(fd);;)try{workLoopConcurrent();break}catch(s){handleError(e,s)}if(resetContextDependencies(),dd=o,popDispatcher(a),Ue&&popInteractions(i),hd===id){var l=vd;throw stopInterruptedWorkLoopTimer(),prepareFreshStack(e,n),markRootSuspendedAtTime(e,n),ensureRootIsScheduled(e),l}if(null!==fd)
// There's still work left over. Exit without committing.
stopInterruptedWorkLoopTimer();else{
// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
stopFinishedWorkLoopTimer();var u=e.finishedWork=e.current.alternate;e.finishedExpirationTime=n,function finishConcurrentRender(e,t,n,r){switch(
// Set this to null to indicate there's no in-progress render.
pd=null,n){case ad:case id:throw Error("Root did not complete. This is a bug in React.");
// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case ld:
// If this was an async render, the error may have happened due to
// a mutation in a concurrent event. Try rendering one more time,
// synchronously, to see if the error goes away. If there are
// lower priority updates, let's include those, too, in case they
// fix the inconsistency. Render at Idle to include all updates.
// If it was Idle or Never or some not-yet-invented time, render
// at that time.
markRootExpiredAtTime(e,r>ku?ku:r);// We assume that this second render pass will be synchronous
// and therefore not hit this path again.
break;case ud:markRootSuspendedAtTime(e,r);var o=e.lastSuspendedTime;if(r===o&&(e.nextKnownPendingLevel=getRemainingExpirationTime(t)),flushSuspensePriorityWarningInDEV(),gd===Su&&(!Qe||!Qd.current)){
// If we have not processed any new updates during this pass, then
// this is either a retry of an existing fallback state or a
// hidden tree. Hidden trees shouldn't be batched with other work
// and after that's fixed it can only be a retry. We're going to
// throttle committing retries so that we don't show too many
// loading states too quickly.
var a=kd+wd-fu();// Don't bother with a very short suspense time.
if(a>10){if(Td){var i=e.lastPingedTime;if(i===Cu||i>=r){
// This render was pinged but we didn't get to restart
// earlier so try restarting now instead.
e.lastPingedTime=r,prepareFreshStack(e,r);break}}var l=getNextRootExpirationTimeToWorkOn(e);if(l!==Cu&&l!==r)
// There's additional work on this root.
break;if(o!==Cu&&o!==r){
// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
e.lastPingedTime=o;break}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
e.timeoutHandle=Fi(commitRoot.bind(null,e),a);break}}// The work expired. Commit immediately.
commitRoot(e);break;case sd:markRootSuspendedAtTime(e,r);var u=e.lastSuspendedTime;if(r===u&&(e.nextKnownPendingLevel=getRemainingExpirationTime(t)),flushSuspensePriorityWarningInDEV(),!Qe||!Qd.current){
// We're suspended in a state that should be avoided. We'll try to
// avoid committing it for as long as the timeouts let us.
if(Td){var s=e.lastPingedTime;if(s===Cu||s>=r){
// This render was pinged but we didn't get to restart earlier
// so try restarting now instead.
e.lastPingedTime=r,prepareFreshStack(e,r);break}}var c,d=getNextRootExpirationTimeToWorkOn(e);if(d!==Cu&&d!==r)
// There's additional work on this root.
break;if(u!==Cu&&u!==r){
// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
e.lastPingedTime=u;break}if(yd!==Su)
// We have processed a suspense config whose expiration time we
// can use as the timeout.
c=expirationTimeToMs(yd)-fu();else if(gd===Su)
// This should never normally happen because only new updates
// cause delayed states, so we should have processed something.
// However, this could also happen in an offscreen tree.
c=0;else{
// If we don't have a suspense config, we're going to use a
// heuristic to determine how long we can suspend.
var p=function inferTimeFromExpirationTime(e){return expirationTimeToMs(e)-Ru}(gd),f=fu(),m=expirationTimeToMs(r)-f,h=f-p;h<0&&(
// We get this wrong some time since we estimate the time.
h=0),c=// Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.
function jnd(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:1960*Yc(e/1960)}(h)-h,// Clamp the timeout to the expiration time. TODO: Once the
// event time is exact instead of inferred from expiration time
// we don't need this.
m<c&&(c=m)}// Don't bother with a very short suspense time.
if(c>10){
// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
e.timeoutHandle=Fi(commitRoot.bind(null,e),c);break}}// The work expired. Commit immediately.
commitRoot(e);break;case cd:
// The work completed. Ready to commit.
if(// do not delay if we're inside an act() scope
(!Qe||!Qd.current)&&gd!==Su&&null!==bd){
// If we have exceeded the minimum loading delay, which probably
// means we have shown a spinner already, we might have to suspend
// a bit longer to ensure that the spinner is shown for
// enough time.
var v=function computeMsUntilSuspenseLoadingDelay(e,t,n){var r=0|n.busyMinDurationMs;if(r<=0)return 0;var o=0|n.busyDelayMs,a=fu(),i=function inferTimeFromExpirationTimeWithSuspenseConfig(e,t){return expirationTimeToMs(e)-(0|t.timeoutMs||Ru)}// The work loop is an extremely hot path. Tell Closure not to inline it.
/** @noinline */(e,n),l=a-i;// Compute the time until this render pass would expire.
if(l<=o)
// If we haven't yet waited longer than the initial delay, we don't
// have to wait any additional time.
return 0;// This is the value that is passed to `setTimeout`.
return o+r-l}(gd,0,bd);if(v>10){markRootSuspendedAtTime(e,r),e.timeoutHandle=Fi(commitRoot.bind(null,e),v);break}}commitRoot(e);break;default:throw Error("Unknown root exit status.")}}// This is the entry point for synchronous tasks that don't go
// through Scheduler
(e,u,hd,n)}if(ensureRootIsScheduled(e),e.callbackNode===r)
// The task node scheduled for this root is the same one that's
// currently executed. Need to return a continuation.
return performConcurrentWorkOnRoot.bind(null,e)}}return null}function performSyncWorkOnRoot(e){
// Check if there's expired work on this root. Otherwise, render at Sync.
var t=e.lastExpiredTime,n=t!==Cu?t:Su;if(e.finishedExpirationTime===n)
// There's already a pending commit at this expiration time.
// TODO: This is poorly factored. This case only exists for the
// batch.commit() API.
commitRoot(e);else{if((dd&(rd|od))!==Jc)throw Error("Should not already be working.");// If we have a work-in-progress fiber, it means there's still work to do
// in this root.
if(flushPassiveEffects(),// If the root or expiration time have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
e===pd&&n===md||(prepareFreshStack(e,n),startWorkOnPendingInteractions(e,n)),null!==fd){var r=dd;dd|=rd;var o=pushDispatcher(e),a=pushInteractions(e);for(startWorkLoopTimer(fd);;)try{workLoopSync();break}catch(l){handleError(e,l)}if(resetContextDependencies(),dd=r,popDispatcher(o),Ue&&popInteractions(a),hd===id){var i=vd;throw stopInterruptedWorkLoopTimer(),prepareFreshStack(e,n),markRootSuspendedAtTime(e,n),ensureRootIsScheduled(e),i}if(null!==fd)throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");// Before exiting, make sure there's a callback scheduled for the next
// pending level.
// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
stopFinishedWorkLoopTimer(),e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,function finishSyncRender(e,t,n){
// Set this to null to indicate there's no in-progress render.
pd=null,(t===ud||t===sd)&&flushSuspensePriorityWarningInDEV();commitRoot(e)}(e,hd),ensureRootIsScheduled(e)}}return null}function flushDiscreteUpdates(){
// TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
// However, `act` uses `batchedUpdates`, so there's no way to distinguish
// those two cases. Need to fix this before exposing flushDiscreteUpdates
// as a public API.
(dd&(Zc|rd|od))===Jc?(!function flushPendingDiscreteUpdates(){if(null!==Od){
// For each root with pending discrete updates, schedule a callback to
// immediately flush them.
var e=Od;Od=null,e.forEach((function(e,t){markRootExpiredAtTime(t,e),ensureRootIsScheduled(t)})),// Now flush the immediate queue.
flushSyncCallbackQueue()}}(),// If the discrete updates scheduled passive effects, flush them now so that
// they fire before the next serial event.
flushPassiveEffects()):(dd&rd)!==Jc&&warning$1(!1,"unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.")}function batchedUpdates$1(e,t){var n=dd;dd|=Zc;try{return e(t)}finally{(dd=n)===Jc&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}function discreteUpdates$1(e,t,n,r){var o=dd;dd|=td;try{
// Should this
return runWithPriority$2(nu,e.bind(null,t,n,r))}finally{(dd=o)===Jc&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}function unbatchedUpdates(e,t){var n=dd;dd&=~Zc,dd|=nd;try{return e(t)}finally{(dd=n)===Jc&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}function flushSync(e,t){if((dd&(rd|od))!==Jc)throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");var n=dd;dd|=Zc;try{return runWithPriority$2(tu,e.bind(null,t))}finally{dd=n,// Flush the immediate callbacks that were scheduled during this batch.
// Note that this will happen even if batchedUpdates is higher up
// the stack.
flushSyncCallbackQueue()}}function prepareFreshStack(e,t){e.finishedWork=null,e.finishedExpirationTime=Cu;var n=e.timeoutHandle;if(n!==Ni&&(
// The root previous suspended and scheduled a timeout to commit a fallback
// state. Now that we have additional work, cancel the timeout.
e.timeoutHandle=Ni,// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
Oi(n)),null!==fd)for(var r=fd.return;null!==r;)unwindInterruptedWork(r),r=r.return;pd=e,fd=createWorkInProgress(e.current,null,t),md=t,hd=ad,vd=null,gd=Su,yd=Su,bd=null,Cd=Cu,Td=!1,Ue&&(Hd=null),Ou.discardPendingWarnings(),Gd=null}function handleError(e,t){for(;;){try{if(
// Reset module-level state that was set during the render phase.
resetContextDependencies(),resetHooks(),resetCurrentFiber(),null===fd||null===fd.return)
// Expected to be working on a non-root fiber. This is a fatal error
// because there's no ancestor that can handle it; the root is
// supposed to capture all errors that weren't caught by an error
// boundary.
return hd=id,vd=t,null;Me&&fd.mode&yu&&
// Record the time spent rendering before an error was thrown. This
// avoids inaccurate Profiler durations in the case of a
// suspended render.
stopProfilerTimerIfRunningAndRecordDelta(fd,!0),throwException(e,fd.return,fd,t,md),fd=completeUnitOfWork(fd)}catch(n){
// Something in the return path also threw.
t=n;continue}// Return to the normal work loop.
return}}function pushDispatcher(e){var t=Kc.current;return Kc.current=mc,null===t?mc:t}function popDispatcher(e){Kc.current=e}function pushInteractions(e){if(Ue){var t=i.__interactionsRef.current;return i.__interactionsRef.current=e.memoizedInteractions,t}return null}function popInteractions(e){Ue&&(i.__interactionsRef.current=e)}function markRenderEventTimeAndConfig(e,t){e<gd&&e>ku&&(gd=e),null!==t&&e<yd&&e>ku&&(yd=e,// Most of the time we only have one config and getting wrong is not bad.
bd=t)}function markUnprocessedUpdateTime(e){e>Cd&&(Cd=e)}function renderDidSuspendDelayIfPossible(){hd!==ad&&hd!==ud||(hd=sd),// Check if there's a lower priority update somewhere else in the tree.
Cd!==Cu&&null!==pd&&(
// Mark the current render as suspended, and then mark that there's a
// pending update.
// TODO: This should immediately interrupt the current render, instead
// of waiting until the next time we yield.
markRootSuspendedAtTime(pd,md),markRootUpdatedAtTime(pd,Cd))}function workLoopSync(){
// Already timed out, so perform work without checking if we need to yield.
for(;null!==fd;)fd=performUnitOfWork(fd)}
/** @noinline */function workLoopConcurrent(){
// Perform work until Scheduler asks us to yield
for(;null!==fd&&!lu();)fd=performUnitOfWork(fd)}function performUnitOfWork(e){
// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var t,n=e.alternate;return startWorkTimer(e),setCurrentFiber(e),Me&&(e.mode&yu)!==mu?(startProfilerTimer(e),t=Bd(n,e,md),stopProfilerTimerIfRunningAndRecordDelta(e,!0)):t=Bd(n,e,md),resetCurrentFiber(),e.memoizedProps=e.pendingProps,null===t&&(
// If this doesn't spawn new work, complete the current work.
t=completeUnitOfWork(e)),Gc.current=null,t}function completeUnitOfWork(e){
// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
fd=e;do{
// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var t=fd.alternate,n=fd.return;// Check if the work completed or if something threw.
if((fd.effectTag&ao)===Br){setCurrentFiber(fd);var r=void 0;if(Me&&(fd.mode&yu)!==mu?(startProfilerTimer(fd),r=completeWork(t,fd,md),// Update render duration assuming we didn't error.
stopProfilerTimerIfRunningAndRecordDelta(fd,!1)):r=completeWork(t,fd,md),stopWorkTimer(fd),resetCurrentFiber(),resetChildExpirationTime(fd),null!==r)
// Completing this fiber spawned new work. Work on that next.
return r;if(null!==n&&// Do not append effects to parents if a sibling failed to complete
(n.effectTag&ao)===Br)
// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
null===n.firstEffect&&(n.firstEffect=fd.firstEffect),null!==fd.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=fd.firstEffect),n.lastEffect=fd.lastEffect),// Skip both NoWork and PerformedWork tags when creating the effect
// list. PerformedWork effect is read by React DevTools but shouldn't be
// committed.
fd.effectTag>Vr&&(null!==n.lastEffect?n.lastEffect.nextEffect=fd:n.firstEffect=fd,n.lastEffect=fd)}else{
// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var o=unwindWork(fd);// Because this fiber did not complete, don't reset its expiration time.
if(Me&&(fd.mode&yu)!==mu){
// Record the render duration for the fiber that errored.
stopProfilerTimerIfRunningAndRecordDelta(fd,!1);for(// Include the time spent working on failed children before continuing.
var a=fd.actualDuration,i=fd.child;null!==i;)a+=i.actualDuration,i=i.sibling;fd.actualDuration=a}if(null!==o)
// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
// TODO: The name stopFailedWorkTimer is misleading because Suspense
// also captures and restarts.
return stopFailedWorkTimer(fd),o.effectTag&=oo,o;stopWorkTimer(fd),null!==n&&(
// Mark the parent fiber as incomplete and clear its effect list.
n.firstEffect=n.lastEffect=null,n.effectTag|=ao)}var l=fd.sibling;if(null!==l)
// If there is more work to do in this returnFiber, do that next.
return l;// Otherwise, return to the parent
fd=n}while(null!==fd);// We've reached the root.
return hd===ad&&(hd=cd),null}function getRemainingExpirationTime(e){var t=e.expirationTime,n=e.childExpirationTime;return t>n?t:n}function resetChildExpirationTime(e){if(md===Tu||e.childExpirationTime!==Tu){var t=Cu;// Bubble up the earliest expiration time.
if(Me&&(e.mode&yu)!==mu){for(
// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var n=e.actualDuration,r=e.selfBaseDuration,o=null===e.alternate||e.child!==e.alternate.child,a=e.child;null!==a;){var i=a.expirationTime,l=a.childExpirationTime;i>t&&(t=i),l>t&&(t=l),o&&(n+=a.actualDuration),r+=a.treeBaseDuration,a=a.sibling}e.actualDuration=n,e.treeBaseDuration=r}else for(var u=e.child;null!==u;){var s=u.expirationTime,c=u.childExpirationTime;s>t&&(t=s),c>t&&(t=c),u=u.sibling}e.childExpirationTime=t}}function commitRoot(e){var t=getCurrentPriorityLevel();return runWithPriority$2(tu,commitRootImpl.bind(null,e,t)),null}function commitRootImpl(e,t){do{
// `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
// means `flushPassiveEffects` will sometimes result in additional
// passive effects. So we need to keep flushing in a loop until there are
// no more pending effects.
// TODO: Might be better if `flushPassiveEffects` did not automatically
// flush synchronous work at the end, to avoid factoring hazards like this.
flushPassiveEffects()}while(null!==Id);if(function flushRenderPhaseStrictModeWarningsInDEV(){Ou.flushLegacyContextWarning(),Le&&Ou.flushPendingUnsafeLifecycleWarnings()}(),(dd&(rd|od))!==Jc)throw Error("Should not already be working.");var n,r=e.finishedWork,o=e.finishedExpirationTime;if(null===r)return null;if(e.finishedWork=null,e.finishedExpirationTime=Cu,r===e.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
if(e.callbackNode=null,e.callbackExpirationTime=Cu,e.callbackPriority=iu,e.nextKnownPendingLevel=Cu,function startCommitTimer(){if(Ne){if(!Tl)return;El=!0,xl=!1,Dl.clear(),beginMark("(Committing Changes)")}}(),function markRootFinishedAtTime(e,t,n){// Update the range of suspended times. Treat everything higher priority or
// equal to this update as unsuspended.
// Update the range of pending times
e.firstPendingTime=n,t<=e.lastSuspendedTime?
// The entire suspended range is now unsuspended.
e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=Cu:t<=e.firstSuspendedTime&&(
// Part of the suspended range is now unsuspended. Narrow the range to
// include everything between the unsuspended time (non-inclusive) and the
// last suspended time.
e.firstSuspendedTime=t-1);t<=e.lastPingedTime&&(
// Clear the pinged time
e.lastPingedTime=Cu);t<=e.lastExpiredTime&&(
// Clear the expired time
e.lastExpiredTime=Cu)}(e,o,getRemainingExpirationTime(r)),e===pd&&(
// We can reset these now that they are finished.
pd=null,fd=null,md=Cu),r.effectTag>Vr?
// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if it
// had one; that is, all the effects in the tree including the root.
null!==r.lastEffect?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:
// There is no effect on the root.
n=r.firstEffect,null!==n){var a=dd;dd|=od;var i=pushInteractions(e);// Reset this to null before calling lifecycles
Gc.current=null,// The commit phase is broken into several sub-phases. We do a separate pass
// of the effect list for each phase: all mutation effects come before all
// layout effects, and so on.
// The first phase a "before mutation" phase. We use this phase to read the
// state of the host tree right before we mutate it. This is where
// getSnapshotBeforeUpdate is called.
startCommitSnapshotEffectsTimer(),prepareForCommit(e.containerInfo),Sd=n;do{if(invokeGuardedCallback(null,commitBeforeMutationEffects,null),hasCaughtError()){if(null===Sd)throw Error("Should be working on an effect.");var l=clearCaughtError();captureCommitPhaseError(Sd,l),Sd=Sd.nextEffect}}while(null!==Sd);stopCommitSnapshotEffectsTimer(),Me&&
// Mark the current commit time to be shared by all Profilers in this
// batch. This enables them to be grouped later.
recordCommitTime(),// The next phase is the mutation phase, where we mutate the host tree.
startCommitHostEffectsTimer(),Sd=n;do{if(invokeGuardedCallback(null,commitMutationEffects,null,e,t),hasCaughtError()){if(null===Sd)throw Error("Should be working on an effect.");var u=clearCaughtError();captureCommitPhaseError(Sd,u),Sd=Sd.nextEffect}}while(null!==Sd);stopCommitHostEffectsTimer(),function resetAfterCommit(e){restoreSelection(Ri),Ri=null,setEnabled(Pi),Pi=null}(e.containerInfo),// The work-in-progress tree is now the current tree. This must come after
// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
e.current=r,// The next phase is the layout phase, where we call effects that read
// the host tree after it's been mutated. The idiomatic use case for this is
// layout, but class component lifecycles also fire here for legacy reasons.
startCommitLifeCyclesTimer(),Sd=n;do{if(invokeGuardedCallback(null,commitLayoutEffects,null,e,o),hasCaughtError()){if(null===Sd)throw Error("Should be working on an effect.");var s=clearCaughtError();captureCommitPhaseError(Sd,s),Sd=Sd.nextEffect}}while(null!==Sd);stopCommitLifeCyclesTimer(),Sd=null,// Tell Scheduler to yield at the end of the frame, so the browser has an
// opportunity to paint.
uu(),Ue&&popInteractions(i),dd=a}else
// No effects.
e.current=r,// Measure these anyway so the flamegraph explicitly shows that there were
// no effects.
// TODO: Maybe there's a better way to report this.
startCommitSnapshotEffectsTimer(),stopCommitSnapshotEffectsTimer(),Me&&recordCommitTime(),startCommitHostEffectsTimer(),stopCommitHostEffectsTimer(),startCommitLifeCyclesTimer(),stopCommitLifeCyclesTimer();!function stopCommitTimer(){if(Ne){if(!Tl)return;var e=null;xl?e="Lifecycle hook scheduled a cascading update":Rl>0&&(e="Caused by a cascading update in earlier commit"),xl=!1,Rl++,El=!1,Dl.clear(),endMark("(Committing Changes)","(Committing Changes)",e)}}();var c=Rd;if(Rd)
// This commit has passive effects. Stash a reference to them. But don't
// schedule a callback until after flushing layout work.
Rd=!1,Id=e,Fd=o,Dd=t;else for(
// We are done with the effect chain at this point so let's clear the
// nextEffect pointers to assist with GC. If we have passive effects, we'll
// clear this in flushPassiveEffects.
Sd=n;null!==Sd;){var d=Sd.nextEffect;Sd.nextEffect=null,Sd=d}// Check if there's remaining work on this root
var p=e.firstPendingTime;if(p!==Cu){if(Ue){if(null!==Hd){var f=Hd;Hd=null;for(var m=0;m<f.length;m++)scheduleInteractions(e,f[m],e.memoizedInteractions)}schedulePendingInteractions(e,p)}}else
// If there's no remaining work, we can clear the set of already failed
// error boundaries.
Pd=null;if(Ue&&(c||
// If there are no passive effects, then we can complete the pending interactions.
// Otherwise, we'll wait until after the passive effects are flushed.
// Wait to do this until after remaining work has been scheduled,
// so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
finishPendingInteractions(e,o)),p===Su?
// Count the number of times the root synchronously re-renders without
// finishing. If there are too many, it indicates an infinite update loop.
e===Ld?_d++:(_d=0,Ld=e):_d=0,function onCommitRoot(e,t){"function"===typeof Jd&&Jd(e,t)}(r.stateNode,o),// Always call this before exiting `commitRoot`, to ensure that any
// additional work on this root is scheduled.
ensureRootIsScheduled(e),Ed){Ed=!1;var h=xd;throw xd=null,h}return(dd&nd)!==Jc?null:(// If layout work was scheduled, flush it now.
flushSyncCallbackQueue(),null)}function commitBeforeMutationEffects(){for(;null!==Sd;){var e=Sd.effectTag;if((e&Zr)!==Br)setCurrentFiber(Sd),recordEffect(),commitBeforeMutationLifeCycles(Sd.alternate,Sd),resetCurrentFiber();(e&eo)!==Br&&(
// If there are passive effects, schedule a callback to flush at
// the earliest opportunity.
Rd||(Rd=!0,scheduleCallback(ru,(function(){return flushPassiveEffects(),null})))),Sd=Sd.nextEffect}}function commitMutationEffects(e,t){
// TODO: Should probably move the bulk of this function to commitWork.
for(;null!==Sd;){setCurrentFiber(Sd);var n=Sd.effectTag;if(n&Kr&&commitResetTextContent(Sd),n&Jr){var r=Sd.alternate;null!==r&&commitDetachRef(r)}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every possible
// bitmap value, we remove the secondary effects from the effect tag and
// switch on that value.
switch(n&($r|qr|Yr|to)){case $r:commitPlacement(Sd),// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
Sd.effectTag&=~$r;break;case Qr:
// Placement
commitPlacement(Sd),// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
Sd.effectTag&=~$r,commitWork(Sd.alternate,Sd);break;case to:Sd.effectTag&=~to;break;case no:Sd.effectTag&=~to,commitWork(Sd.alternate,Sd);break;case qr:commitWork(Sd.alternate,Sd);break;case Yr:commitDeletion(e,Sd,t)}// TODO: Only record a mutation effect if primaryEffectTag is non-zero.
recordEffect(),resetCurrentFiber(),Sd=Sd.nextEffect}}function commitLayoutEffects(e,t){
// TODO: Should probably move the bulk of this function to commitWork.
for(;null!==Sd;){setCurrentFiber(Sd);var n=Sd.effectTag;if(n&(qr|Gr))recordEffect(),commitLifeCycles(e,Sd.alternate,Sd);n&Jr&&(recordEffect(),commitAttachRef(Sd)),resetCurrentFiber(),Sd=Sd.nextEffect}}function flushPassiveEffects(){if(Dd!==iu){var e=Dd>ru?ru:Dd;return Dd=iu,runWithPriority$2(e,flushPassiveEffectsImpl)}}function flushPassiveEffectsImpl(){if(null===Id)return!1;var e=Id,t=Fd;if(Id=null,Fd=Cu,(dd&(rd|od))!==Jc)throw Error("Cannot flush passive effects while already rendering.");var n=dd;dd|=od;for(var r=pushInteractions(e),o=e.current.firstEffect// Note: This currently assumes there are no passive effects on the root
// fiber, because the root is not part of its own effect list. This could
// change in the future.
;null!==o;){if(setCurrentFiber(o),invokeGuardedCallback(null,commitPassiveHookEffects,null,o),hasCaughtError()){if(null===o)throw Error("Should be working on an effect.");captureCommitPhaseError(o,clearCaughtError())}resetCurrentFiber();var a=o.nextEffect;// Remove nextEffect pointer to assist GC
o.nextEffect=null,o=a}return Ue&&(popInteractions(r),finishPendingInteractions(e,t)),dd=n,flushSyncCallbackQueue(),// If additional passive effects were scheduled, increment a counter. If this
// exceeds the limit, we'll fire a warning.
Ud=null===Id?0:Ud+1,!0}function isAlreadyFailedLegacyErrorBoundary(e){return null!==Pd&&Pd.has(e)}var jd=function prepareToThrowUncaughtError(e){Ed||(Ed=!0,xd=e)};function captureCommitPhaseErrorOnRoot(e,t,n){enqueueUpdate(e,createRootErrorUpdate(e,createCapturedValue(n,t),Su));var r=markUpdateTimeFromFiberToRoot(e,Su);null!==r&&(ensureRootIsScheduled(r),schedulePendingInteractions(r,Su))}function captureCommitPhaseError(e,t){if(e.tag!==D)for(var n=e.return;null!==n;){if(n.tag===D)return void captureCommitPhaseErrorOnRoot(n,e,t);if(n.tag===R){var r=n.type,o=n.stateNode;if("function"===typeof r.getDerivedStateFromError||"function"===typeof o.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(o)){enqueueUpdate(n,createClassErrorUpdate(n,createCapturedValue(t,e),// TODO: This is always sync
Su));var a=markUpdateTimeFromFiberToRoot(n,Su);return void(null!==a&&(ensureRootIsScheduled(a),schedulePendingInteractions(a,Su)))}}n=n.return}else
// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
captureCommitPhaseErrorOnRoot(e,e,t)}function pingSuspendedRoot(e,t,n){var r=e.pingCache;if(null!==r&&
// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
r.delete(t),pd!==e||md!==n){if(isRootSuspendedAtTime(e,n)){var o=e.lastPingedTime;o!==Cu&&o<n||(// Mark the time at which this ping was scheduled.
e.lastPingedTime=n,e.finishedExpirationTime===n&&(
// If there's a pending fallback waiting to commit, throw it away.
e.finishedExpirationTime=Cu,e.finishedWork=null),ensureRootIsScheduled(e),schedulePendingInteractions(e,n))}}else
// Received a ping at the same priority level at which we're currently
// rendering. We might want to restart this render. This should mirror
// the logic of whether or not a root suspends once it completes.
// TODO: If we're rendering sync either due to Sync, Batched or expired,
// we should probably never restart.
// If we're suspended with delay, we'll always suspend so we can always
// restart. If we're suspended without any updates, it might be a retry.
// If it's early in the retry we can restart. We can't know for sure
// whether we'll eventually process an update during this render pass,
// but it's somewhat unlikely that we get to a ping before that, since
// getting to the root most update is usually very fast.
hd===sd||hd===ud&&gd===Su&&fu()-kd<wd?
// Restart from the root. Don't need to schedule a ping because
// we're already working on this tree.
prepareFreshStack(e,md):
// Even though we can't restart right now, we might get an
// opportunity later. So we mark this render as having a ping.
Td=!0}function retryTimedOutBoundary(e,t){
// The boundary fiber (a Suspense component or SuspenseList component)
// previously was rendered in its fallback state. One of the promises that
// suspended it has resolved, which means at least part of the tree was
// likely unblocked. Try rendering again, at a new expiration time.
if(t===Cu){t=computeExpirationForFiber(requestCurrentTimeForUpdate(),e,null)}// TODO: Special case idle priority?
var n=markUpdateTimeFromFiberToRoot(e,t);null!==n&&(ensureRootIsScheduled(n),schedulePendingInteractions(n,t))}function retryDehydratedSuspenseBoundary(e){var t=e.memoizedState,n=Cu;null!==t&&(n=t.retryTime),retryTimedOutBoundary(e,n)}function resolveRetryThenable(e,t){var n,r=Cu;// Default
if(Ae)switch(e.tag){case W:n=e.stateNode;var o=e.memoizedState;null!==o&&(r=o.retryTime);break;case q:n=e.stateNode;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}else n=e.stateNode;null!==n&&
// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
n.delete(t),retryTimedOutBoundary(e,r)}function stopFinishedWorkLoopTimer(){stopWorkLoopTimer(Ad,!0),Ad=null}function stopInterruptedWorkLoopTimer(){stopWorkLoopTimer(Ad,!1),Ad=null}var Bd,Vd=null;Bd=function(e,t,n){
// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var r=assignFiberPropertiesInDEV(null,t);try{return beginWork$1(e,t,n)}catch(o){if(null!==o&&"object"===typeof o&&"function"===typeof o.then)
// Don't replay promises. Treat everything else like an error.
throw o;// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
if(resetContextDependencies(),resetHooks(),// Don't reset current debug fiber, since we're about to work on the
// same fiber again.
// Unwind the failed stack frame
unwindInterruptedWork(t),// Restore the original properties of the fiber.
assignFiberPropertiesInDEV(t,r),Me&&t.mode&yu&&
// Reset the profiler timer.
startProfilerTimer(t),// Run beginWork again.
invokeGuardedCallback(null,beginWork$1,null,e,t,n),hasCaughtError())// `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
// Rethrow this error instead of the original one.
throw clearCaughtError();
// This branch is reachable if the render phase is impure.
throw o}};var $d=!1,qd=!1;var Qd={current:!1};function warnIfNotScopedWithMatchingAct(e){!0===Di&&!0===Xc.current&&!0!==Qd.current&&warningWithoutStack$1(!1,"It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from 'react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);%s",getStackByFiberInDevAndProd(e))}function warnIfNotCurrentlyActingEffectsInDEV(e){!0===Di&&(e.mode&hu)!==mu&&!1===Xc.current&&!1===Qd.current&&warningWithoutStack$1(!1,"An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s",getComponentName(e.type),getStackByFiberInDevAndProd(e))}var Yd=function warnIfNotCurrentlyActingUpdatesInDEV(e){!0===Di&&dd===Jc&&!1===Xc.current&&!1===Qd.current&&warningWithoutStack$1(!1,"An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s",getComponentName(e.type),getStackByFiberInDevAndProd(e))},Kd=!1;// In tests, we want to enforce a mocked scheduler.
var Gd=null;function flushSuspensePriorityWarningInDEV(){if(null!==Gd){var e=[];Gd.forEach((function(t){return e.push(t)})),Gd=null,e.length>0&&warningWithoutStack$1(!1,"%s triggered a user-blocking update that suspended.\n\nThe fix is to split the update into multiple parts: a user-blocking update to provide immediate feedback, and another update that triggers the bulk of the changes.\n\nRefer to the documentation for useTransition to learn how to implement this pattern.",// TODO: Add link to React docs with more information, once it exists
e.sort().join(", "))}}function computeThreadID(e,t){
// Interaction threads are unique per root and expiration time.
return 1e3*t+e.interactionThreadID}function markSpawnedWork(e){Ue&&(null===Hd?Hd=[e]:Hd.push(e))}function scheduleInteractions(e,t,n){if(Ue&&n.size>0){var r=e.pendingInteractionMap,o=r.get(t);null!=o?n.forEach((function(e){o.has(e)||
// Update the pending async work count for previously unscheduled interaction.
e.__count++,o.add(e)})):(r.set(t,new Set(n)),// Update the pending async work count for the current interactions.
n.forEach((function(e){e.__count++})));var a=i.__subscriberRef.current;if(null!==a){var l=computeThreadID(e,t);a.onWorkScheduled(n,l)}}}function schedulePendingInteractions(e,t){
// This is called when work is scheduled on a root.
// It associates the current interactions with the newly-scheduled expiration.
// They will be restored when that expiration is later committed.
Ue&&scheduleInteractions(e,t,i.__interactionsRef.current)}function startWorkOnPendingInteractions(e,t){
// This is called when new work is started on a root.
if(Ue){// Determine which interactions this batch of work currently includes, So that
// we can accurately attribute time spent working on it, And so that cascading
// work triggered during the render phase will be associated with it.
var n=new Set;if(e.pendingInteractionMap.forEach((function(e,r){r>=t&&e.forEach((function(e){return n.add(e)}))})),// Store the current set of interactions on the FiberRoot for a few reasons:
// We can re-use it in hot functions like performConcurrentWorkOnRoot()
// without having to recalculate it. We will also use it in commitWork() to
// pass to any Profiler onRender() hooks. This also provides DevTools with a
// way to access it when the onCommitRoot() hook is called.
e.memoizedInteractions=n,n.size>0){var r=i.__subscriberRef.current;if(null!==r){var o=computeThreadID(e,t);try{r.onWorkStarted(n,o)}catch(a){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(tu,(function(){throw a}))}}}}}function finishPendingInteractions(e,t){if(Ue){var n,r=e.firstPendingTime;try{if(null!==(n=i.__subscriberRef.current)&&e.memoizedInteractions.size>0){var o=computeThreadID(e,t);n.onWorkStopped(e.memoizedInteractions,o)}}catch(l){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(tu,(function(){throw l}))}finally{
// Clear completed interactions from the pending Map.
// Unless the render was suspended or cascading work was scheduled,
// In which case– leave pending interactions until the subsequent render.
var a=e.pendingInteractionMap;a.forEach((function(e,t){
// Only decrement the pending interaction count if we're done.
// If there's still work at the current priority,
// That indicates that we are waiting for suspense data.
t>r&&(a.delete(t),e.forEach((function(e){if(e.__count--,null!==n&&0===e.__count)try{n.onInteractionScheduledWorkCompleted(e)}catch(l){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(tu,(function(){throw l}))}})))}))}}}var Xd,Jd=null,Zd=null,ep=!1,tp="undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;function injectInternals(e){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
// No DevTools
return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)
// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!t.supportsFiber)// DevTools exists, even though it doesn't support Fiber.
return warningWithoutStack$1(!1,"The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"),!0;try{var n=t.inject(e);// We have successfully injected, so now it is safe to set up hooks.
Jd=function(e,r){try{var o=(e.current.effectTag&Xr)===Xr;if(Me){var a=inferPriorityFromExpirationTime(function getCurrentTime(){return msToExpirationTime(fu())}(),r);t.onCommitFiberRoot(n,e,a,o)}else t.onCommitFiberRoot(n,e,void 0,o)}catch(i){ep||(ep=!0,warningWithoutStack$1(!1,"React DevTools encountered an error: %s",i))}},Zd=function(e){try{t.onCommitFiberUnmount(n,e)}catch(r){ep||(ep=!0,warningWithoutStack$1(!1,"React DevTools encountered an error: %s",r))}}}catch(r){warningWithoutStack$1(!1,"React DevTools encountered an error: %s.",r)}// DevTools exists
return!0}Xd=!1;try{var np=Object.preventExtensions({}),rp=new Map([[np,null]]),op=new Set([np]);// This is necessary for Rollup to not consider these unused.
// https://github.com/rollup/rollup/issues/1771
// TODO: we can remove these if Rollup fixes the bug.
rp.set(0,0),op.add(0)}catch(kp){
// TODO: Consider warning about bad polyfills
Xd=!0}var ap=1;function FiberNode(e,t,n,r){
// Instance
this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,// Fiber
this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,// Effects
this.effectTag=Br,this.nextEffect=null,this.firstEffect=null,this.lastEffect=null,this.expirationTime=Cu,this.childExpirationTime=Cu,this.alternate=null,Me&&(
// Note: The following is done to avoid a v8 performance cliff.
//
// Initializing the fields below to smis and later updating them with
// double values will cause Fibers to end up having separate shapes.
// This behavior/bug has something to do with Object.preventExtension().
// Fortunately this only impacts DEV builds.
// Unfortunately it makes React unusably slow for some applications.
// To work around this, initialize the fields below with doubles.
//
// Learn more about this here:
// https://github.com/facebook/react/issues/14365
// https://bugs.chromium.org/p/v8/issues/detail?id=8538
this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,// It's okay to replace the initial doubles with smis after initialization.
// This won't trigger the performance cliff mentioned above,
// and it simplifies other profiler code (including DevTools).
this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0),// This is normally DEV-only except www when it adds listeners.
// TODO: remove the User Timing integration in favor of Root Events.
Ne&&(this._debugID=ap++,this._debugIsCurrentlyTiming=!1),this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Xd||"function"!==typeof Object.preventExtensions||Object.preventExtensions(this)}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber=function(e,t,n,r){
// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new FiberNode(e,t,n,r)};function shouldConstruct(e){var t=e.prototype;return!(!t||!t.isReactComponent)}function createWorkInProgress(e,t,n){var r=e.alternate;null===r?(
// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
(r=createFiber(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,
// DEV-only fields
r._debugID=e._debugID,r._debugSource=e._debugSource,r._debugOwner=e._debugOwner,r._debugHookTypes=e._debugHookTypes,r.alternate=e,e.alternate=r):(r.pendingProps=t,// We already have an alternate.
// Reset the effect tag.
r.effectTag=Br,// The effect list is no longer valid.
r.nextEffect=null,r.firstEffect=null,r.lastEffect=null,Me&&(
// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
r.actualDuration=0,r.actualStartTime=-1)),r.childExpirationTime=e.childExpirationTime,r.expirationTime=e.expirationTime,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var o=e.dependencies;switch(r.dependencies=null===o?null:{expirationTime:o.expirationTime,firstContext:o.firstContext,responders:o.responders},// These will be overridden during the parent's reconciliation
r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,Me&&(r.selfBaseDuration=e.selfBaseDuration,r.treeBaseDuration=e.treeBaseDuration),r._debugNeedsRemount=e._debugNeedsRemount,r.tag){case I:case P:case j:r.type=resolveFunctionForHotReloading(e.type);break;case R:r.type=resolveClassForHotReloading(e.type);break;case A:r.type=resolveForwardRefForHotReloading(e.type)}return r}// Used to reuse a Fiber for a second pass.
function resetWorkInProgress(e,t){
// This resets the Fiber to what createFiber or createWorkInProgress would
// have set the values to before during the first pass. Ideally this wouldn't
// be necessary but unfortunately many code paths reads from the workInProgress
// when they should be reading from current and writing to workInProgress.
// We assume pendingProps, index, key, ref, return are still untouched to
// avoid doing another reconciliation.
// Reset the effect tag but keep any Placement tags, since that's something
// that child fiber is setting, not the reconciliation.
e.effectTag&=$r,// The effect list is no longer valid.
e.nextEffect=null,e.firstEffect=null,e.lastEffect=null;var n=e.alternate;if(null===n)
// Reset to createFiber's initial values.
e.childExpirationTime=Cu,e.expirationTime=t,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,Me&&(
// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
e.selfBaseDuration=0,e.treeBaseDuration=0);else{
// Reset to the cloned values that createWorkInProgress would've.
e.childExpirationTime=n.childExpirationTime,e.expirationTime=n.expirationTime,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var r=n.dependencies;e.dependencies=null===r?null:{expirationTime:r.expirationTime,firstContext:r.firstContext,responders:r.responders},Me&&(
// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration)}return e}function createFiberFromTypeAndProps(e,// React$ElementType
t,n,r,o,a){var i,l=I,u=e;if("function"===typeof e)shouldConstruct(e)?(l=R,u=resolveClassForHotReloading(u)):u=resolveFunctionForHotReloading(u);else if("string"===typeof e)l=O;else e:switch(e){case ee:return createFiberFromFragment(n.children,o,a,t);case ae:l=L,o|=gu|vu|hu;break;case te:l=L,o|=hu;break;case ne:return function createFiberFromProfiler(e,t,n,r){"string"===typeof e.id&&"function"===typeof e.onRender||warningWithoutStack$1(!1,'Profiler must specify an "id" string and "onRender" function as props');var o=createFiber(H,e,r,t|yu);// TODO: The Profiler fiber shouldn't have a type. It has a tag.
return o.elementType=ne,o.type=ne,o.expirationTime=n,o}(n,o,a,t);case le:return function createFiberFromSuspense(e,t,n,r){var o=createFiber(W,e,r,t);// TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return o.type=le,o.elementType=le,o.expirationTime=n,o}(n,o,a,t);case ue:return function createFiberFromSuspenseList(e,t,n,r){var o=createFiber(q,e,r,t);
// TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return o.type=ue,o.elementType=ue,o.expirationTime=n,o}(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case re:l=U;break e;case oe:
// This is a consumer
l=M;break e;case ie:l=A,u=resolveForwardRefForHotReloading(u);break e;case se:l=z;break e;case ce:l=B,u=null;break e;case de:if(Ve)return function createFiberFromFundamental(e,t,n,r,o){var a=createFiber(Q,t,o,n);return a.elementType=e,a.type=e,a.expirationTime=r,a}(e,n,o,a,t);break;case fe:if($e)return function createFiberFromScope(e,t,n,r,o){var a=createFiber(Y,t,o,n);return a.type=e,a.elementType=e,a.expirationTime=r,a}(e,n,o,a,t)}var s="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=r?getComponentName(r.type):null;throw c&&(s+="\n\nCheck the render method of `"+c+"`."),Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(null==e?e:typeof e)+"."+s)}return(i=createFiber(l,n,t,o)).elementType=e,i.type=u,i.expirationTime=a,i}function createFiberFromElement(e,t,n){var r;r=e._owner;var o=createFiberFromTypeAndProps(e.type,e.key,e.props,r,t,n);return o._debugSource=e._source,o._debugOwner=e._owner,o}function createFiberFromFragment(e,t,n,r){var o=createFiber(_,e,r,t);return o.expirationTime=n,o}function createFiberFromText(e,t,n){var r=createFiber(N,e,null,t);return r.expirationTime=n,r}function createFiberFromPortal(e,t,n){var r=null!==e.children?e.children:[],o=createFiber(F,r,e.key,t);return o.expirationTime=n,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,
// Used by persistent updates
implementation:e.implementation},o}// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(e,t){return null===e&&(
// This Fiber's initial properties will always be overwritten.
// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
e=createFiber(I,null,null,mu)),// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.effectTag=t.effectTag,e.nextEffect=t.nextEffect,e.firstEffect=t.firstEffect,e.lastEffect=t.lastEffect,e.expirationTime=t.expirationTime,e.childExpirationTime=t.childExpirationTime,e.alternate=t.alternate,Me&&(e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration),e._debugID=t._debugID,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugIsCurrentlyTiming=t._debugIsCurrentlyTiming,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function FiberRootNode(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pendingChildren=null,this.pingCache=null,this.finishedExpirationTime=Cu,this.finishedWork=null,this.timeoutHandle=Ni,this.context=null,this.pendingContext=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=iu,this.firstPendingTime=Cu,this.firstSuspendedTime=Cu,this.lastSuspendedTime=Cu,this.nextKnownPendingLevel=Cu,this.lastPingedTime=Cu,this.lastExpiredTime=Cu,Ue&&(this.interactionThreadID=i.unstable_getThreadID(),this.memoizedInteractions=new Set,this.pendingInteractionMap=new Map),Ye&&(this.hydrationCallbacks=null)}function createFiberRoot(e,t,n,r){var o=new FiberRootNode(e,t,n);Ye&&(o.hydrationCallbacks=r);// Cyclic construction. This cheats the type system right now because
// stateNode is any.
var a=function createHostRootFiber(e){var t;return t=e===zl?gu|vu|hu:e===Wl?vu|hu:mu,Me&&tp&&(
// Always collect profile timings when DevTools are present.
// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
t|=yu),createFiber(D,null,null,t)}(t);return o.current=a,a.stateNode=o,o}function isRootSuspendedAtTime(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;return n!==Cu&&n>=t&&r<=t}function markRootSuspendedAtTime(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===Cu)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=Cu),t<=e.lastExpiredTime&&(e.lastExpiredTime=Cu)}function markRootUpdatedAtTime(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);// Update the range of suspended times. Treat everything lower priority or
// equal to this update as unsuspended.
var n=e.firstSuspendedTime;n!==Cu&&(t>=n?
// The entire suspended range is now unsuspended.
e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=Cu:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),// This is a pending level. Check if it's higher priority than the next
// known pending level.
t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function markRootExpiredAtTime(e,t){var n=e.lastExpiredTime;(n===Cu||n>t)&&(e.lastExpiredTime=t)}
// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ip,lp,up={debugTool:null};function updateContainer(e,t,n,r){var a=t.current,i=requestCurrentTimeForUpdate();
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
"undefined"!==typeof jest&&(!// TODO Before we release concurrent mode, revisit this and decide whether a mocked
// scheduler is the actual recommendation. The alternative could be a testing build,
// a new lib, or whatever; we dunno just yet. This message is for early adopters
// to get their tests right.
function warnIfUnmockedScheduler(e){!1===Kd&&void 0===o.unstable_flushAllWithoutAsserting&&(e.mode&vu||e.mode&gu?(Kd=!0,warningWithoutStack$1(!1,"In Concurrent or Sync modes, the \"scheduler\" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: \njest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\nFor more info, visit https://fb.me/react-mock-scheduler")):!0===qe&&(Kd=!0,warningWithoutStack$1(!1,"Starting from React v17, the \"scheduler\" module will need to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: \njest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\nFor more info, visit https://fb.me/react-mock-scheduler")))}(a),warnIfNotScopedWithMatchingAct(a));var l=requestCurrentSuspenseConfig(),u=computeExpirationForFiber(i,a,l);up.debugTool&&(null===a.alternate?up.debugTool.onMountContainer(t):null===e?up.debugTool.onUnmountContainer(t):up.debugTool.onUpdateContainer(t));var s=function getContextForSubtree(e){if(!e)return Ll;var t=get(e),n=findCurrentUnmaskedContext(t);if(t.tag===R){var r=t.type;if(isContextProvider(r))return processChildContext(t,r,n)}return n}(n);null===t.context?t.context=s:t.pendingContext=s,"render"!==ke||null===Te||ip||(ip=!0,warningWithoutStack$1(!1,"Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",getComponentName(Te.type)||"Unknown"));var c=createUpdate(u,l);// Caution: React DevTools currently depends on this property
// being called "element".
return c.payload={element:e},null!==(r=void 0===r?null:r)&&("function"!==typeof r&&warningWithoutStack$1(!1,"render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),c.callback=r),enqueueUpdate(a,c),zd(a,u),u}function getPublicRootInstance(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case O:return getPublicInstance(t.child.stateNode);default:return t.child.stateNode}}function markRetryTimeImpl(e,t){var n=e.memoizedState;null!==n&&null!==n.dehydrated&&n.retryTime<t&&(n.retryTime=t)}// Increases the priority of thennables when they resolve within this boundary.
function markRetryTimeIfNotHydrated(e,t){markRetryTimeImpl(e,t);var n=e.alternate;n&&markRetryTimeImpl(n,t)}function findHostInstanceWithNoPortals(e){var t=function findCurrentHostFiberWithNoPortals(e){var t=findCurrentFiberUsingSlowPath(e);if(!t)return null;// Next we'll drill down this component to find the first HostComponent/Text.
for(var n=t;;){if(n.tag===O||n.tag===N||Ve&&n.tag===Q)return n;if(n.child&&n.tag!==F)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}(e);return null===t?null:t.tag===Q?t.stateNode.instance:t.stateNode}ip=!1,lp={};var shouldSuspendImpl=function(e){return!1};var sp=null,cp=null,dp=null,pp=null,copyWithSetImpl=function(e,t,n,o){if(n>=t.length)return o;var a=t[n],i=Array.isArray(e)?e.slice():r({},e);// $FlowFixMe number or string is fine here
return i[a]=copyWithSetImpl(e[a],t,n+1,o),i},copyWithSet=function(e,t,n){return copyWithSetImpl(e,t,0,n)};
// This file intentionally does *not* have the Flow annotation.
// Don't add it. See `./inline-typed.js` for an explanation.
// TODO: This type is shared between the reconciler and ReactDOM, but will
// eventually be lifted out to the renderer.
function ReactDOMRoot(e,t){this._internalRoot=createRootImpl(e,zl,t)}function ReactDOMBlockingRoot(e,t,n){this._internalRoot=createRootImpl(e,t,n)}function createRootImpl(e,t,n){
// Tag is either LegacyRoot or Concurrent Root
var r=null!=n&&!0===n.hydrate,o=function createContainer(e,t,n,r){return createFiberRoot(e,t,n,r)}(e,t,r,null!=n&&n.hydrationOptions||null);(function markContainerAsRoot(e,t){t[Hi]=e}(o.current,e),r&&t!==Hl)&&function eagerlyTrapReplayableEvents(e){var t=getListeningSetForElement(e);// Discrete
go.forEach((function(n){trapReplayableEvent(n,e,t)})),// Continuous
yo.forEach((function(n){trapReplayableEvent(n,e,t)}))}(e.nodeType===ln?e:e.ownerDocument);return o}function isValidContainer(e){return!(!e||e.nodeType!==rn&&e.nodeType!==ln&&e.nodeType!==un&&(e.nodeType!==an||" react-mount-point-unstable "!==e.nodeValue))}function warnOnInvalidCallback(e,t){null!==e&&"function"!==typeof e&&warningWithoutStack$1(!1,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}// Support DevTools editable values for useState and useReducer.
sp=function(e,t,n,o){for(
// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
var a=e.memoizedState;null!==a&&t>0;)a=a.next,t--;if(null!==a){var i=copyWithSet(a.memoizedState,n,o);a.memoizedState=i,a.baseState=i,// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=r({},e.memoizedProps),zd(e,Su)}},// Support DevTools props for function components, forwardRef, memo, host components, etc.
cp=function(e,t,n){e.pendingProps=copyWithSet(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),zd(e,Su)},dp=function(e){zd(e,Su)},pp=function(e){shouldSuspendImpl=e},ReactDOMRoot.prototype.render=ReactDOMBlockingRoot.prototype.render=function(e,t){var n=this._internalRoot,r=void 0===t?null:t;warnOnInvalidCallback(r,"render"),updateContainer(e,n,null,r)},ReactDOMRoot.prototype.unmount=ReactDOMBlockingRoot.prototype.unmount=function(e){var t=this._internalRoot,n=void 0===e?null:e;warnOnInvalidCallback(n,"render");var r=t.containerInfo;updateContainer(null,t,null,(function(){unmarkContainerAsRoot(r),null!==n&&n()}))};var fp,mp=K.ReactCurrentOwner,hp=!1;function getReactRootElementInContainer(e){return e?e.nodeType===ln?e.documentElement:e.firstChild:null}function legacyCreateRootFromDOMContainer(e,t){var n=t||function shouldHydrateDueToLegacyHeuristic(e){var t=getReactRootElementInContainer(e);return!(!t||t.nodeType!==rn||!t.hasAttribute(xt))}(e);// First clear any existing content.
if(!n)for(var r,o=!1;r=e.lastChild;)!o&&r.nodeType===rn&&r.hasAttribute(xt)&&(o=!0,warningWithoutStack$1(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")),e.removeChild(r);return!n||t||hp||(hp=!0,lowPriorityWarningWithoutStack$1(!1,"render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")),function createLegacyRoot(e,t){return new ReactDOMBlockingRoot(e,Hl,t)}(e,n?{hydrate:!0}:void 0)}function legacyRenderSubtreeIntoContainer(e,t,n,r,o){fp(n),warnOnInvalidCallback(void 0===o?null:o,"render");// TODO: Without `any` type, Flow says "Property cannot be accessed on any
// member of intersection type." Whyyyyyy.
var a,i=n._reactRootContainer;if(i){if(a=i._internalRoot,"function"===typeof o){var l=o;o=function(){var e=getPublicRootInstance(a);l.call(e)}}// Update
updateContainer(t,a,e,o)}else{if(
// Initial mount
i=n._reactRootContainer=legacyCreateRootFromDOMContainer(n,r),a=i._internalRoot,"function"===typeof o){var u=o;o=function(){var e=getPublicRootInstance(a);u.call(e)}}// Initial mount should not be batched.
unbatchedUpdates((function(){updateContainer(t,a,e,o)}))}return getPublicRootInstance(a)}fp=function(e){if(e._reactRootContainer&&e.nodeType!==an){var t=findHostInstanceWithNoPortals(e._reactRootContainer._internalRoot.current);t&&t.parentNode!==e&&warningWithoutStack$1(!1,"render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=getReactRootElementInContainer(e);!(!r||!getInstanceFromNode$1(r))&&!n&&warningWithoutStack$1(!1,"render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===rn&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&warningWithoutStack$1(!1,"render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};!function setAttemptSynchronousHydration(e){Hr=e}((function attemptSynchronousHydration$1(e){switch(e.tag){case D:var t=e.stateNode;t.hydrate&&
// Flush the first scheduled "update".
function flushRoot(e,t){markRootExpiredAtTime(e,t),ensureRootIsScheduled(e),(dd&(rd|od))===Jc&&flushSyncCallbackQueue()}(t,t.firstPendingTime);break;case W:flushSync((function(){return zd(e,Su)}));// If we're still blocked after this, we need to increase
// the priority of any promises resolving within this
// boundary so that they next attempt also has higher pri.
var n=computeInteractiveExpiration(requestCurrentTimeForUpdate());markRetryTimeIfNotHydrated(e,n)}})),function setAttemptUserBlockingHydration(e){Wr=e}((function attemptUserBlockingHydration$1(e){if(e.tag===W){var t=computeInteractiveExpiration(requestCurrentTimeForUpdate());zd(e,t),markRetryTimeIfNotHydrated(e,t)}})),function setAttemptContinuousHydration(e){zr=e}((function attemptContinuousHydration$1(e){if(e.tag===W){var t=function computeContinuousHydrationExpiration(e){
// Each time we ask for a new one of these we increase the priority.
// This ensures that the last one always wins since we can't deprioritize
// once we've scheduled work already.
return wu++}(requestCurrentTimeForUpdate());zd(e,t),markRetryTimeIfNotHydrated(e,t)}})),function setAttemptHydrationAtCurrentPriority(e){jr=e}((function attemptHydrationAtCurrentPriority$1(e){if(e.tag===W){var t=computeExpirationForFiber(requestCurrentTimeForUpdate(),e,null);zd(e,t),markRetryTimeIfNotHydrated(e,t)}}));var vp=!1;function createPortal$$1(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!isValidContainer(t))throw Error("Target container is not a DOM element.");// TODO: pass ReactDOM portal implementation as third argument
return function createPortal$1(e,t,// TODO: figure out the API for cross-renderer implementation.
n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{
// This tag allow us to uniquely identify this as a React Portal
$$typeof:Z,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}
// TODO: this is special because it gets imported during build.
(e,t,null,n)}"function"===typeof Map&&// $FlowIssue Flow incorrectly thinks Map has no prototype
null!=Map.prototype&&"function"===typeof Map.prototype.forEach&&"function"===typeof Set&&// $FlowIssue Flow incorrectly thinks Set has no prototype
null!=Set.prototype&&"function"===typeof Set.prototype.clear&&"function"===typeof Set.prototype.forEach||warningWithoutStack$1(!1,"React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),function setRestoreImplementation(e){De=e}((function restoreControlledState$$1(e,t,n){switch(t){case"input":return void restoreControlledState$1(e,n);case"textarea":return void function restoreControlledState$3(e,t){
// DOM component is still mounted; update
updateWrapper$1(e,t)}(e,n);case"select":return void function restoreControlledState$2(e,t){var n=e,r=t.value;null!=r&&updateOptions(n,!!t.multiple,r,!1)}(e,n)}})),function setBatchingImplementation(e,t,n,r){batchedUpdatesImpl=e,discreteUpdatesImpl=t,flushDiscreteUpdatesImpl=n,et=r}(batchedUpdates$1,discreteUpdates$1,flushDiscreteUpdates,(function batchedEventUpdates$1(e,t){var n=dd;dd|=ed;try{return e(t)}finally{(dd=n)===Jc&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}));var gp={createPortal:createPortal$$1,
// Legacy
findDOMNode:function findDOMNode(e){var t=mp.current;return null!==t&&null!==t.stateNode&&(t.stateNode._warnedAboutRefsInRender||warningWithoutStack$1(!1,"%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",getComponentName(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0),null==e?null:e.nodeType===rn?e:function findHostInstanceWithWarning(e,t){var n=get(e);if(void 0===n)throw"function"===typeof e.render?Error("Unable to find node on an unmounted component."):Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(e));var r=findCurrentHostFiber(n);if(null===r)return null;if(r.mode&hu){var o=getComponentName(n.type)||"Component";lp[o]||(lp[o]=!0,n.mode&hu?warningWithoutStack$1(!1,"%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s",t,t,o,getStackByFiberInDevAndProd(r)):warningWithoutStack$1(!1,"%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s",t,t,o,getStackByFiberInDevAndProd(r)))}return r.stateNode}(e,"findDOMNode")},hydrate:function hydrate(e,t,n){if(!isValidContainer(t))throw Error("Target container is not a DOM element.");// TODO: throw or warn if we couldn't hydrate?
return isContainerMarkedAsRoot(t)&&void 0===t._reactRootContainer&&warningWithoutStack$1(!1,"You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?"),legacyRenderSubtreeIntoContainer(null,e,t,!0,n)},render:function render(e,t,n){if(!isValidContainer(t))throw Error("Target container is not a DOM element.");return isContainerMarkedAsRoot(t)&&void 0===t._reactRootContainer&&warningWithoutStack$1(!1,"You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?"),legacyRenderSubtreeIntoContainer(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function unstable_renderSubtreeIntoContainer(e,t,n,r){if(!isValidContainer(n))throw Error("Target container is not a DOM element.");if(null==e||!function has(e){return void 0!==e._reactInternalFiber}(e))throw Error("parentComponent must be a valid React Component");return legacyRenderSubtreeIntoContainer(e,t,n,!1,r)},unmountComponentAtNode:function unmountComponentAtNode(e){if(!isValidContainer(e))throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");if(isContainerMarkedAsRoot(e)&&void 0===e._reactRootContainer&&warningWithoutStack$1(!1,"You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?"),e._reactRootContainer){var t=getReactRootElementInContainer(e);// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return t&&!getInstanceFromNode$1(t)&&warningWithoutStack$1(!1,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),// Unmount should not be batched.
unbatchedUpdates((function(){legacyRenderSubtreeIntoContainer(null,null,e,!1,(function(){e._reactRootContainer=null,unmarkContainerAsRoot(e)}))})),!0}var n=getReactRootElementInContainer(e),r=!(!n||!getInstanceFromNode$1(n)),o=e.nodeType===rn&&isValidContainer(e.parentNode)&&!!e.parentNode._reactRootContainer;return r&&warningWithoutStack$1(!1,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",o?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1},
// Temporary alias since we already shipped React 16 RC with it.
// TODO: remove in React 17.
unstable_createPortal:function(){return vp||(vp=!0,lowPriorityWarningWithoutStack$1(!1,'The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')),createPortal$$1.apply(void 0,arguments)},unstable_batchedUpdates:batchedUpdates$1,flushSync:flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{
// Keep in sync with ReactDOMUnstableNativeDependencies.js
// ReactTestUtils.js, and ReactTestUtilsAct.js. This is an array for better minification.
Events:[getInstanceFromNode$1,getNodeFromInstance$1,getFiberCurrentPropsFromNode$1,x.injectEventPluginsByName,c,accumulateTwoPhaseDispatches,function accumulateDirectDispatches(e){forEachAccumulated(e,accumulateDirectDispatchesSingle)},enqueueStateRestore,restoreStateIfNeeded,dispatchEvent,runEventsInBatch,flushPassiveEffects,Qd]}};if(!function injectIntoDevTools(e){var t=e.findFiberByHostInstance,n=K.ReactCurrentDispatcher;return injectInternals(r({},e,{overrideHookState:sp,overrideProps:cp,setSuspenseHandler:pp,scheduleUpdate:dp,currentDispatcherRef:n,findHostInstanceByFiber:function(e){var t=findCurrentHostFiber(e);return null===t?null:t.stateNode},findFiberByHostInstance:function(e){return t?t(e):null},
// React Refresh
findHostInstancesForRefresh:findHostInstancesForRefresh,scheduleRefresh:scheduleRefresh,scheduleRoot:scheduleRoot,setRefreshHandler:setRefreshHandler,
// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:function(){return Te}}))}({findFiberByHostInstance:getClosestInstanceFromNode,bundleType:1,version:"16.12.0",rendererPackageName:"react-dom"})&&we&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){var yp=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
/^(https?|file):$/.test(yp)&&console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools"+("file:"===yp?"\nYou might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq":""),"font-weight:bold")}var bp=Object.freeze({default:gp}),Cp=bp&&gp||bp,Tp=Cp.default||Cp;e.exports=Tp})()},
/***/bwe0:
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";e.exports=n(/*! ./cjs/scheduler-tracing.development.js */"GXno")},
/***/ctBr:
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/** @license React v16.12.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var t=n(/*! object-assign */"MgzW"),r=n(/*! prop-types/checkPropTypes */"oVyQ"),o="function"===typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,y=o?Symbol.for("react.fundamental"):60117,b=o?Symbol.for("react.responder"):60118,C=o?Symbol.for("react.scope"):60119,T="function"===typeof Symbol&&Symbol.iterator,k="@@iterator";function getIteratorFn(e){if(null===e||"object"!==typeof e)return null;var t=T&&e[T]||e[k];return"function"===typeof t?t:null}
// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var printWarning=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.warn(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(i){}},lowPriorityWarningWithoutStack$1=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];printWarning.apply(void 0,[t].concat(r))}},warningWithoutStack$1=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(r.length>8)
// Check before the condition to catch violations early.
throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!==typeof console){var a=r.map((function(e){return""+e}));a.unshift("Warning: "+t),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
Function.prototype.apply.call(console.error,console,a)}try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var i=0,l="Warning: "+t.replace(/%s/g,(function(){return r[i++]}));throw new Error(l)}catch(u){}}},w={};function warnNoop(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;w[o]||(warningWithoutStack$1(!1,"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,r),w[o]=!0)}
/**
 * This is the abstract API for an update queue.
 */var S={
/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
isMounted:function(e){return!1},
/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
enqueueForceUpdate:function(e,t,n){warnNoop(e,"forceUpdate")},
/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
enqueueReplaceState:function(e,t,n,r){warnNoop(e,"replaceState")},
/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
enqueueSetState:function(e,t,n,r){warnNoop(e,"setState")}},E={};
/**
 * Base class helpers for the updating state of a component.
 */
function Component(e,t,n){this.props=e,this.context=t,// If a component has string refs, we will assign a different object later.
this.refs=E,// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||S}Object.freeze(E),Component.prototype.isReactComponent={},
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var x={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},defineDeprecationWarning=function(e,t){Object.defineProperty(Component.prototype,e,{get:function(){lowPriorityWarningWithoutStack$1(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var P in x)x.hasOwnProperty(P)&&defineDeprecationWarning(P,x[P]);function ComponentDummy(){}
/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(e,t,n){this.props=e,this.context=t,// If a component has string refs, we will assign a different object later.
this.refs=E,this.updater=n||S}ComponentDummy.prototype=Component.prototype;var R=PureComponent.prototype=new ComponentDummy;R.constructor=PureComponent,// Avoid an extra prototype jump for these methods.
t(R,Component.prototype),R.isPureReactComponent=!0;
/**
 * Keeps track of the current dispatcher.
 */
var I={
/**
   * @internal
   * @type {ReactComponent}
   */
current:null},D={suspense:null},F={
/**
   * @internal
   * @type {ReactComponent}
   */
current:null},O=/^(.*)[\\\/]/,N=1;
/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */function getComponentName(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"===typeof e.tag&&warningWithoutStack$1(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case l:return"Fragment";case i:return"Portal";case s:return"Profiler";case u:return"StrictMode";case m:return"Suspense";case h:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case d:return"Context.Consumer";case c:return"Context.Provider";case f:return function getWrappedName(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}(e,e.render,"ForwardRef");case v:return getComponentName(e.type);case g:var t=function refineResolvedLazyComponent(e){return e._status===N?e._result:null}(e);if(t)return getComponentName(t)}return null}var _={},L=null;function setCurrentlyValidatingElement(e){L=e}
// Stack implementation injected by the current renderer.
_.getCurrentStack=null,_.getStackAddendum=function(){var e="";// Add an extra top frame while an element is being validated
if(L){var t=getComponentName(L.type),n=L._owner;e+=function(e,t,n){var r="";if(t){var o=t.fileName,a=o.replace(O,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(a)){var i=o.match(O);if(i){var l=i[1];if(l)a=l.replace(O,"")+"/"+a}}r=" (at "+a+":"+t.lineNumber+")"}else n&&(r=" (created by "+n+")");return"\n    in "+(e||"Unknown")+r}(t,L._source,n&&getComponentName(n.type))}// Delegate to the injected renderer-specific implementation
var r=_.getCurrentStack;return r&&(e+=r()||""),e};
/**
 * Used by act() to track whether you're inside an act() scope.
 */
var M={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:D,ReactCurrentOwner:F,IsSomeRendererActing:{current:!1},
// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:t};t(M,{
// These should not be included in production.
ReactDebugCurrentFrame:_,
// Shim for React DOM 16.0.0 which still destructured (but not used) this.
// TODO: remove in React 17.0.
ReactComponentTreeHook:{}});
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var U,A,warning$1=function(e,t){if(!e){// eslint-disable-next-line react-internal/warning-and-invariant-args
for(var n=M.ReactDebugCurrentFrame,r=n.getStackAddendum(),o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];warningWithoutStack$1.apply(void 0,[!1,t+"%s"].concat(a,[r]))}},H=Object.prototype.hasOwnProperty,W={key:!0,ref:!0,__self:!0,__source:!0};function hasValidRef(e){if(H.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function hasValidKey(e){if(H.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function defineKeyPropWarningGetter(e,t){var warnAboutAccessingKey=function(){U||(U=!0,warningWithoutStack$1(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};warnAboutAccessingKey.isReactWarning=!0,Object.defineProperty(e,"key",{get:warnAboutAccessingKey,configurable:!0})}function defineRefPropWarningGetter(e,t){var warnAboutAccessingRef=function(){A||(A=!0,warningWithoutStack$1(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};warnAboutAccessingRef.isReactWarning=!0,Object.defineProperty(e,"ref",{get:warnAboutAccessingRef,configurable:!0})}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */var ReactElement=function(e,t,n,r,o,i,l){var u={
// This tag allows us to uniquely identify this as a React Element
$$typeof:a,
// Built-in properties that belong on the element
type:e,key:t,ref:n,props:l,
// Record the component responsible for creating this element.
_owner:i,
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
_store:{}};// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),// self and source are DEV only properties.
Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(e,t,n){var r,o={},a=null,i=null,l=null,u=null;// Reserved names are extracted
if(null!=t)// Remaining properties are added to a new props object
for(r in hasValidRef(t)&&(i=t.ref),hasValidKey(t)&&(a=""+t.key),l=void 0===t.__self?null:t.__self,u=void 0===t.__source?null:t.__source,t)H.call(t,r)&&!W.hasOwnProperty(r)&&(o[r]=t[r]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var s=arguments.length-2;if(1===s)o.children=n;else if(s>1){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];Object.freeze&&Object.freeze(c),o.children=c}// Resolve default props
if(e&&e.defaultProps){var p=e.defaultProps;for(r in p)void 0===o[r]&&(o[r]=p[r])}if(a||i){var f="function"===typeof e?e.displayName||e.name||"Unknown":e;a&&defineKeyPropWarningGetter(o,f),i&&defineRefPropWarningGetter(o,f)}return ReactElement(e,a,i,l,u,F.current,o)}
/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(e,n,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o,a,i=t({},e.props),l=e.key,u=e.ref,s=e._self,c=e._source,d=e._owner;// Original props are copied
if(null!=n)for(o in hasValidRef(n)&&(
// Silently steal the ref from the parent.
u=n.ref,d=F.current),hasValidKey(n)&&(l=""+n.key),e.type&&e.type.defaultProps&&(a=e.type.defaultProps),n)H.call(n,o)&&!W.hasOwnProperty(o)&&(void 0===n[o]&&void 0!==a?
// Resolve default props
i[o]=a[o]:i[o]=n[o]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var p=arguments.length-2;if(1===p)i.children=r;else if(p>1){for(var f=Array(p),m=0;m<p;m++)f[m]=arguments[m+2];i.children=f}return ReactElement(e.type,l,u,s,c,d,i)}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */function isValidElement(e){return"object"===typeof e&&null!==e&&e.$$typeof===a}var z=".",j=":";
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */
var B=!1,V=/\/+/g;function escapeUserProvidedKey(e){return(""+e).replace(V,"$&/")}var $=10,q=[];function getPooledTraverseContext(e,t,n,r){if(q.length){var o=q.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function releaseTraverseContext(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,q.length<$&&q.push(e)}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(e,t,n){return null==e?0:function traverseAllChildrenImpl(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(
// All of the above are perceived as null.
e=null);var l,u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case i:u=!0}}if(u)return n(r,e,// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
""===t?z+getComponentKey(e,0):t),1;var s=0,c=""===t?z:t+j;// Count of children found in the current subtree.
if(Array.isArray(e))for(var d=0;d<e.length;d++)s+=traverseAllChildrenImpl(l=e[d],c+getComponentKey(l,d),n,r);else{var p=getIteratorFn(e);if("function"===typeof p){
// Warn about using Maps as children
p===e.entries&&(B||warning$1(!1,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),B=!0);for(var f,m=p.call(e),h=0;!(f=m.next()).done;)s+=traverseAllChildrenImpl(l=f.value,c+getComponentKey(l,h++),n,r)}else if("object"===o){var v;v=" If you meant to render a collection of children, use an array instead."+_.getStackAddendum();var g=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===g?"object with keys {"+Object.keys(e).join(", ")+"}":g)+")."+v)}}return s}(e,"",t,n)}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function getComponentKey(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return"object"===typeof e&&null!==e&&null!=e.key?
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36);// Implicit key determined by the index in the set
}function forEachSingleChild(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function mapSingleChildIntoContext(e,t,n){var r=e.result,o=e.keyPrefix,a=e.func,i=e.context,l=a.call(i,t,e.count++);Array.isArray(l)?mapIntoWithKeyPrefixInternal(l,r,n,(function(e){return e})):null!=l&&(isValidElement(l)&&(l=function cloneAndReplaceKey(e,t){return ReactElement(e.type,t,e.ref,e._self,e._source,e._owner,e.props)}(l,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
o+(!l.key||t&&t.key===l.key?"":escapeUserProvidedKey(l.key)+"/")+n)),r.push(l))}function mapIntoWithKeyPrefixInternal(e,t,n,r,o){var a="";null!=n&&(a=escapeUserProvidedKey(n)+"/");var i=getPooledTraverseContext(t,a,r,o);traverseAllChildren(e,mapSingleChildIntoContext,i),releaseTraverseContext(i)}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function isValidElementType(e){return"string"===typeof e||"function"===typeof e||// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
e===l||e===p||e===s||e===u||e===m||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===v||e.$$typeof===c||e.$$typeof===d||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===C)}function resolveDispatcher(){var e=I.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return e}var Q;Q=!1;Object.prototype.hasOwnProperty;function getDeclarationErrorAddendum(){if(F.current){var e=getComponentName(F.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function getSourceInfoErrorAddendum(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var Y={};
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function getCurrentComponentErrorInfo(e){var t=getDeclarationErrorAddendum();if(!t){var n="string"===typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!Y[n]){Y[n]=!0;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==F.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+getComponentName(e._owner.type)+"."),setCurrentlyValidatingElement(e),warning$1(!1,'Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',n,r),setCurrentlyValidatingElement(null)}}}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(e,t){if("object"===typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];isValidElement(r)&&validateExplicitKey(r,t)}else if(isValidElement(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var o=getIteratorFn(e);if("function"===typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)isValidElement(a.value)&&validateExplicitKey(a.value,t)}}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(e){var t=e.type;if(null!==t&&void 0!==t&&"string"!==typeof t){var n,o=getComponentName(t);if("function"===typeof t)n=t.propTypes;else{if("object"!==typeof t||t.$$typeof!==f&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
t.$$typeof!==v)return;n=t.propTypes}n?(setCurrentlyValidatingElement(e),r(n,e.props,"prop",o,_.getStackAddendum),setCurrentlyValidatingElement(null)):void 0===t.PropTypes||Q||(Q=!0,warningWithoutStack$1(!1,"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")),"function"===typeof t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved||warningWithoutStack$1(!1,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."))}}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */function validateFragmentProps(e){setCurrentlyValidatingElement(e);for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){warning$1(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r);break}}null!==e.ref&&warning$1(!1,"Invalid attribute `ref` supplied to `React.Fragment`."),setCurrentlyValidatingElement(null)}function createElementWithValidation(e,t,n){var r=isValidElementType(e);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!r){var o="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,u=function getSourceInfoErrorAddendumForProps(e){return null!==e&&void 0!==e?getSourceInfoErrorAddendum(e.__source):""}(t);o+=u||getDeclarationErrorAddendum(),null===e?i="null":Array.isArray(e)?i="array":void 0!==e&&e.$$typeof===a?(i="<"+(getComponentName(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,warning$1(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,o)}var s=createElement.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==s)return s;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(r)for(var c=2;c<arguments.length;c++)validateChildKeys(arguments[c],e);return e===l?validateFragmentProps(s):validatePropTypes(s),s}try{var K=Object.freeze({}),G=new Map([[K,null]]),X=new Set([K]);// This is necessary for Rollup to not consider these unused.
// https://github.com/rollup/rollup/issues/1771
// TODO: we can remove these if Rollup fixes the bug.
G.set(0,0),X.add(0)}catch(ne){
// TODO: Consider warning about bad polyfills
!0}
// Helps identify side effects in render-phase lifecycle hooks and setState
// reducers by double invoking them in Strict Mode.
// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
// Gather advanced timing metrics for Profiler subtrees.
// Trace which interactions trigger each commit.
// SSR experiments
// Only used in www builds.
// Only used in www builds.
// Disable javascript: URL strings in href for XSS protection.
// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties
// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var J={Children:{map:function mapChildren(e,t,n){if(null==e)return e;var r=[];return mapIntoWithKeyPrefixInternal(e,r,null,t,n),r}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */,forEach:function forEachChildren(e,t,n){if(null==e)return e;var r=getPooledTraverseContext(null,null,t,n);traverseAllChildren(e,forEachSingleChild,r),releaseTraverseContext(r)},count:function countChildren(e){return traverseAllChildren(e,(function(){return null}),null)}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */,toArray:function toArray(e){var t=[];return mapIntoWithKeyPrefixInternal(e,t,null,(function(e){return e})),t}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */,only:function onlyChild(e){if(!isValidElement(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},createRef:
// an immutable object with a single mutable value
function createRef(){var e={current:null};return Object.seal(e),e},Component:Component,PureComponent:PureComponent,createContext:function createContext(e,t){void 0===t?t=null:null!==t&&"function"!==typeof t&&warningWithoutStack$1(!1,"createContext: Expected the optional second argument to be a function. Instead received: %s",t);var n={$$typeof:d,_calculateChangedBits:t,
// As a workaround to support multiple concurrent renderers, we categorize
// some renderers as primary and others as secondary. We only expect
// there to be two concurrent renderers at most: React Native (primary) and
// Fabric (secondary); React DOM (primary) and React ART (secondary).
// Secondary renderers store their context values on separate fields.
_currentValue:e,_currentValue2:e,
// Used to track how many concurrent renderers this context currently
// supports within in a single renderer. Such as parallel server rendering.
_threadCount:0,
// These are circular
Provider:null,Consumer:null};n.Provider={$$typeof:c,_context:n};var r=!1,o=!1,a={$$typeof:d,_context:n,_calculateChangedBits:n._calculateChangedBits};// $FlowFixMe: Flow complains about not setting a value, which is intentional here
return Object.defineProperties(a,{Provider:{get:function(){return o||(o=!0,warning$1(!1,"Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),n.Provider},set:function(e){n.Provider=e}},_currentValue:{get:function(){return n._currentValue},set:function(e){n._currentValue=e}},_currentValue2:{get:function(){return n._currentValue2},set:function(e){n._currentValue2=e}},_threadCount:{get:function(){return n._threadCount},set:function(e){n._threadCount=e}},Consumer:{get:function(){return r||(r=!0,warning$1(!1,"Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),n.Consumer}}}),// $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
n.Consumer=a,n._currentRenderer=null,n._currentRenderer2=null,n},forwardRef:function forwardRef(e){return null!=e&&e.$$typeof===v?warningWithoutStack$1(!1,"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!==typeof e?warningWithoutStack$1(!1,"forwardRef requires a render function but was given %s.",null===e?"null":typeof e):// Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
0!==e.length&&2!==e.length&&warningWithoutStack$1(!1,"forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null!=e.defaultProps||null!=e.propTypes)&&warningWithoutStack$1(!1,"forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"),{$$typeof:f,render:e}},lazy:function lazy(e){var t,n,r={$$typeof:g,_ctor:e,
// React uses these fields to store the result.
_status:-1,_result:null};return Object.defineProperties(r,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){warning$1(!1,"React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,// Match production behavior more closely:
Object.defineProperty(r,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return n},set:function(e){warning$1(!1,"React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,// Match production behavior more closely:
Object.defineProperty(r,"propTypes",{enumerable:!0})}}}),r},memo:function memo(e,t){return isValidElementType(e)||warningWithoutStack$1(!1,"memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:v,type:e,compare:void 0===t?null:t}},useCallback:function useCallback(e,t){return resolveDispatcher().useCallback(e,t)},useContext:function useContext(e,t){var n=resolveDispatcher();// TODO: add a more generic warning for invalid values.
if(void 0!==t&&warning$1(!1,"useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"===typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var r=e._context;// Don't deduplicate because this legitimately causes bugs
// and nobody should be using this in existing code.
r.Consumer===e?warning$1(!1,"Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&warning$1(!1,"Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return n.useContext(e,t)},useEffect:function useEffect(e,t){return resolveDispatcher().useEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return resolveDispatcher().useImperativeHandle(e,t,n)},useDebugValue:function useDebugValue(e,t){return resolveDispatcher().useDebugValue(e,t)},useLayoutEffect:function useLayoutEffect(e,t){return resolveDispatcher().useLayoutEffect(e,t)},useMemo:function useMemo(e,t){return resolveDispatcher().useMemo(e,t)},useReducer:function useReducer(e,t,n){return resolveDispatcher().useReducer(e,t,n)},useRef:function useRef(e){return resolveDispatcher().useRef(e)},useState:function useState(e){return resolveDispatcher().useState(e)},Fragment:l,Profiler:s,StrictMode:u,Suspense:m,createElement:createElementWithValidation,cloneElement:function cloneElementWithValidation(e,t,n){for(var r=cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)validateChildKeys(arguments[o],r.type);return validatePropTypes(r),r},createFactory:function createFactoryWithValidation(e){var t=createElementWithValidation.bind(null,e);return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return lowPriorityWarningWithoutStack$1(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},isValidElement:isValidElement,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M};
// Experimental React Flare event system and event components support.
var Z=Object.freeze({default:J}),ee=Z&&J||Z,te=ee.default||ee;e.exports=te})()},
/***/fZtv:
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/* WEBPACK VAR INJECTION */(function(t){// @flow
var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(/*! ./../webpack/buildin/global.js */"yLpj"))
/***/},
/***/i8i4:
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";e.exports=n(/*! ./cjs/react-dom.development.js */"Ybsr")},
/***/m0LI:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t){e.exports=function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}},
/***/oVyQ:
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var printWarning=function(){},r=n(/*! ./lib/ReactPropTypesSecret */"WbBG"),o={},a=Function.call.bind(Object.prototype.hasOwnProperty);
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(e,t,n,i,l){for(var u in e)if(a(e,u)){var s;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!==typeof e[u]){var c=Error((i||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.");throw c.name="Invariant Violation",c}s=e[u](t,u,i,n,null,r)}catch(p){s=p}if(!s||s instanceof Error||printWarning((i||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in o)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
o[s.message]=!0;var d=l?l():"";printWarning("Failed "+n+" type: "+s.message+(null!=d?d:""))}}}
/**
 * Resets warning cache when testing.
 *
 * @private
 */printWarning=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(n){}},checkPropTypes.resetWarningCache=function(){o={}},e.exports=checkPropTypes},
/***/q1tI:
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";e.exports=n(/*! ./cjs/react.development.js */"ctBr")},
/***/qPUD:
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){Object.defineProperty(t,"__esModule",{value:!0});
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var e="function"===typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;
/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var printWarning=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.warn(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(i){}},lowPriorityWarningWithoutStack$1=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];printWarning.apply(void 0,[t].concat(r))}};function typeOf(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case s:case c:case o:case i:case a:case p:return f;default:var v=f&&f.$$typeof;switch(v){case u:case d:case h:case m:case l:return v;default:return t}}case r:return t}}}// AsyncMode is deprecated along with isAsyncMode
var b=s,C=c,T=u,k=l,w=n,S=d,E=o,x=h,P=m,R=r,I=i,D=a,F=p,O=!1;function isConcurrentMode(e){return typeOf(e)===c}t.typeOf=typeOf,t.AsyncMode=b,t.ConcurrentMode=C,t.ContextConsumer=T,t.ContextProvider=k,t.Element=w,t.ForwardRef=S,t.Fragment=E,t.Lazy=x,t.Memo=P,t.Portal=R,t.Profiler=I,t.StrictMode=D,t.Suspense=F,t.isValidElementType=function isValidElementType(e){return"string"===typeof e||"function"===typeof e||// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
e===o||e===c||e===i||e===a||e===p||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===g||e.$$typeof===y)},t.isAsyncMode=// AsyncMode should be deprecated
function isAsyncMode(e){return O||(O=!0,lowPriorityWarningWithoutStack$1(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),isConcurrentMode(e)||typeOf(e)===s},t.isConcurrentMode=isConcurrentMode,t.isContextConsumer=function isContextConsumer(e){return typeOf(e)===u},t.isContextProvider=function isContextProvider(e){return typeOf(e)===l},t.isElement=function isElement(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function isForwardRef(e){return typeOf(e)===d},t.isFragment=function isFragment(e){return typeOf(e)===o},t.isLazy=function isLazy(e){return typeOf(e)===h},t.isMemo=function isMemo(e){return typeOf(e)===m},t.isPortal=function isPortal(e){return typeOf(e)===r},t.isProfiler=function isProfiler(e){return typeOf(e)===i},t.isStrictMode=function isStrictMode(e){return typeOf(e)===a},t.isSuspense=function isSuspense(e){return typeOf(e)===p}})()},
/***/sHIV:
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(/*! react-is */"TOwV"),o=n(/*! object-assign */"MgzW"),a=n(/*! ./lib/ReactPropTypesSecret */"WbBG"),i=n(/*! ./checkPropTypes */"oVyQ"),l=Function.call.bind(Object.prototype.hasOwnProperty),printWarning=function(){};function emptyFunctionThatReturnsNull(){return null}printWarning=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(n){}},e.exports=function(e,t){
/* global Symbol */
var n="function"===typeof Symbol&&Symbol.iterator,u="@@iterator";
/**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */
var s="<<anonymous>>",c={array:createPrimitiveTypeChecker("array"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),symbol:createPrimitiveTypeChecker("symbol"),any:function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull)}(),arrayOf:function createArrayOfTypeChecker(e){return createChainableTypeChecker((function validate(t,n,r,o,i){if("function"!==typeof e)return new PropTypeError("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new PropTypeError("Invalid "+o+" `"+i+"` of type `"+getPropType(l)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<l.length;u++){var s=e(l,u,r,o,i+"["+u+"]",a);if(s instanceof Error)return s}return null}))},element:function createElementTypeChecker(){return createChainableTypeChecker((function validate(t,n,r,o,a){var i=t[n];return e(i)?null:new PropTypeError("Invalid "+o+" `"+a+"` of type `"+getPropType(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}))}(),elementType:function createElementTypeTypeChecker(){return createChainableTypeChecker((function validate(e,t,n,o,a){var i=e[t];return r.isValidElementType(i)?null:new PropTypeError("Invalid "+o+" `"+a+"` of type `"+getPropType(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")}))}(),instanceOf:function createInstanceTypeChecker(e){return createChainableTypeChecker((function validate(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||s;return new PropTypeError("Invalid "+o+" `"+a+"` of type `"+
// Returns class name of the object, if any.
function getClassName(e){if(!e.constructor||!e.constructor.name)return s;return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:function createNodeChecker(){return createChainableTypeChecker((function validate(e,t,n,r,o){return isNode(e[t])?null:new PropTypeError("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}))}(),objectOf:function createObjectOfTypeChecker(e){return createChainableTypeChecker((function validate(t,n,r,o,i){if("function"!==typeof e)return new PropTypeError("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=getPropType(u);if("object"!==s)return new PropTypeError("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in u)if(l(u,c)){var d=e(u,c,r,o,i+"."+c,a);if(d instanceof Error)return d}return null}))},oneOf:function createEnumTypeChecker(e){if(!Array.isArray(e))return arguments.length>1?printWarning("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):printWarning("Invalid argument supplied to oneOf, expected an array."),emptyFunctionThatReturnsNull;return createChainableTypeChecker((function validate(t,n,r,o,a){for(var i=t[n],l=0;l<e.length;l++)if(is(i,e[l]))return null;var u=JSON.stringify(e,(function replacer(e,t){return"symbol"===getPreciseType(t)?String(t):t}));return new PropTypeError("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+u+".")}))},oneOfType:function createUnionTypeChecker(e){if(!Array.isArray(e))return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunctionThatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!==typeof n)return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+getPostfixForTypeWarning(n)+" at index "+t+"."),emptyFunctionThatReturnsNull}return createChainableTypeChecker((function validate(t,n,r,o,i){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,o,i,a))return null}return new PropTypeError("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function createShapeTypeChecker(e){return createChainableTypeChecker((function validate(t,n,r,o,i){var l=t[n],u=getPropType(l);if("object"!==u)return new PropTypeError("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var c=e[s];if(c){var d=c(l,s,r,o,i+"."+s,a);if(d)return d}}return null}))},exact:function createStrictShapeTypeChecker(e){return createChainableTypeChecker((function validate(t,n,r,i,l){var u=t[n],s=getPropType(u);if("object"!==s)return new PropTypeError("Invalid "+i+" `"+l+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");
// We need to check all keys in case some are required but missing from
// props.
var c=o({},t[n],e);for(var d in c){var p=e[d];if(!p)return new PropTypeError("Invalid "+i+" `"+l+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(u,d,r,i,l+"."+d,a);if(f)return f}return null}))}};
// Important!
// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
/**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
/*eslint-disable no-self-compare*/
function is(e,t){
// SameValue algorithm
return e===t?0!==e||1/e===1/t:e!==e&&t!==t}
/*eslint-enable no-self-compare*/
/**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */function PropTypeError(e){this.message=e,this.stack=""}
// Make `instanceof Error` still work for returned errors.
function createChainableTypeChecker(e){var n={},r=0;function checkType(o,i,l,u,c,d,p){if(u=u||s,d=d||l,p!==a){if(t){
// New behavior only for users of `prop-types` package
var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!==typeof console){
// Old behavior for people using React.PropTypes
var m=u+":"+l;!n[m]&&
// Avoid spamming the console because they are often not actionable except for lib authors
r<3&&(printWarning("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,r++)}}return null==i[l]?o?null===i[l]?new PropTypeError("The "+c+" `"+d+"` is marked as required in `"+u+"`, but its value is `null`."):new PropTypeError("The "+c+" `"+d+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,l,u,c,d)}var o=checkType.bind(null,!1);return o.isRequired=checkType.bind(null,!0),o}function createPrimitiveTypeChecker(e){return createChainableTypeChecker((function validate(t,n,r,o,a,i){var l=t[n];return getPropType(l)!==e?new PropTypeError("Invalid "+o+" `"+a+"` of type `"+getPreciseType(l)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function isNode(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(isNode);if(null===t||e(t))return!0;var r=// Before Symbol spec.
/**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
function getIteratorFn(e){var t=e&&(n&&e[n]||e[u]);if("function"===typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!isNode(o.value))return!1}else
// Iterator will provide entry [k,v] tuples rather than values.
for(;!(o=a.next()).done;){var i=o.value;if(i&&!isNode(i[1]))return!1}return!0;default:return!1}}
// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function isSymbol(e,t){
// Native Symbol.
return"symbol"===e||
// falsy value can't be a Symbol
!!t&&(
// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
"Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}
// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(e){if("undefined"===typeof e||null===e)return""+e;var t=getPropType(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}
// Returns a string that is postfixed to a warning about an invalid type.
// For example, "undefined" or "of type array"
function getPostfixForTypeWarning(e){var t=getPreciseType(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return PropTypeError.prototype=Error.prototype,c.checkPropTypes=i,c.resetWarningCache=i.resetWarningCache,c.PropTypes=c,c}},
/***/wTVA:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e}},
/***/wkBT:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},
/***/yLpj:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/function(e,t){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||new Function("return this")()}catch(r){
// This works if the window reference is available
"object"===typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n}}]);
//# sourceMappingURL=vendor.2ba60b49.js.map