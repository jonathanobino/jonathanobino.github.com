webpackJsonp([0],{109:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=function(){return l.default.createElement("div",null,l.default.createElement("img",{src:"http://samherbert.net/svg-loaders/svg-loaders/three-dots.svg"}))};t.default=o},110:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=n(26),i=function(e){var t=e.item,n=t.imageSrc?l.default.createElement(o.LazyBackgroundImage,{link:t.imageSrc,className:"imgWrapper"}):l.default.createElement("div",{className:"imgWrapper hide-sm"});t.description.technology?l.default.createElement("p",null,l.default.createElement("span",{className:"sans"},"Technology Involved")," ",t.description.technology):null;return l.default.createElement("div",{className:"row careerItem"},l.default.createElement("div",{className:"large-9 medium-8 small-9 columns description"},l.default.createElement("p",null,l.default.createElement("span",{className:"sans"},"Company")," ",l.default.createElement("strong",null,t.description.company)),l.default.createElement("p",null,l.default.createElement("span",{className:"sans"},"Role")," ",t.description.role),l.default.createElement("p",null,l.default.createElement("span",{className:"sans"},"When")," ",t.description.when)),l.default.createElement("div",{className:"large-3 medium-4 small-3 columns"},l.default.createElement("a",{href:t.link,target:"_blank"},n)))};t.default=i},111:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(5),c=a(u),s=n(32),f=a(s),d=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isSending:!1,successfulSended:!1,errorSending:!1,btnDisabled:!0,errorMessage:""},n.sendEmail=n.sendEmail.bind(n),n.emailValidator=n.emailValidator.bind(n),n.handleCanSend=n.handleCanSend.bind(n),n.checkBeforeSend=n.checkBeforeSend.bind(n),n}return o(t,e),i(t,[{key:"sendEmail",value:function(){var e=this;this.checkBeforeSend()&&(this.setState({isSending:!0}),(0,f.default)({method:"POST",url:"//formspree.io/"+this.props.address,data:{name:this.refs.name.value,email:this.refs.email.value,message:this.refs.text.value},headers:{Accept:"application/json"}}).then(function(t){setTimeout(function(){"email sent"==t.data.success?e.setState({successfulSended:!0,isSending:!1}):e.setState({errorSending:!0,isSending:!1})},1e3)}).catch(function(t){setTimeout(function(){e.setState({errorSending:!0,isSending:!1})},1e3)}))}},{key:"emailValidator",value:function(e){return/[(a-zA-Z0-9)]+[@]+[(a-zA-Z0-9)]+\.+[(a-zA-Z0-9)]+$/gi.test(e)}},{key:"handleCanSend",value:function(e){this.emailValidator(this.refs.email.value)?0==this.refs.text.value.split("").length?this.setState({errorMessage:"There must be some text here!"}):this.setState({errorMessage:""}):this.setState({errorMessage:"There must be a valid email here!"})}},{key:"checkBeforeSend",value:function(){return this.refs.text.value.split("").length>0&&this.emailValidator(this.refs.email.value)}},{key:"render",value:function(){var e=void 0,t=""!==this.state.errorMessage?c.default.createElement("h2",{className:"error"},this.state.errorMessage):c.default.createElement("h2",null,"Let's get in touch!");return this.state.isSending?e=c.default.createElement("img",{src:"http://samherbert.net/svg-loaders/svg-loaders/three-dots.svg"}):this.state.successfulSended?e=c.default.createElement("h2",null," Thank you! I'll be in touch shortly! ",c.default.createElement("i",{className:"fa fa-thumbs-o-up"})):this.state.errorSending&&(e=c.default.createElement("h2",null," Hey! An error has occoured! Please try to refresh the page and send it again.")),c.default.createElement("div",{className:"contactFormWrapper"},c.default.createElement("div",{className:"message "+(this.state.successfulSended===!0?"show":1==this.state.errorSending?"show":1==this.state.isSending?"show":"")},e),c.default.createElement("div",{className:"contactForm"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"medium-12 columns medium-centered text-center"},t)),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"medium-6 columns"},c.default.createElement("input",{type:"text",ref:"name",placeholder:"Name"})),c.default.createElement("div",{className:"medium-6 columns"},c.default.createElement("input",{type:"email",ref:"email",placeholder:"Email",onChange:this.handleCanSend}))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"medium-12 columns"},c.default.createElement("textarea",{ref:"text",placeholder:"Message",rows:"5",onChange:this.handleCanSend})),c.default.createElement("div",{className:"medium-12 columns"},c.default.createElement("button",{className:"button sendForm",onClick:this.sendEmail,ref:"send"},"Send")))))}}]),t}(u.Component);t.default=d},112:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=function(e){var t=e.background,n=e.children,a={background:t};return l.default.createElement("div",{className:"full",style:a},n)};t.default=o},113:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(5),c=a(u),s=n(55),f=a(s),d=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.clickHandler=n.clickHandler.bind(n),n}return o(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{onClick:this.clickHandler},this.props.children)}},{key:"clickHandler",value:function(){var e=this,t=document.querySelector(this.props.target);t.getBoundingClientRect().top+1;"function"==typeof this.props.beforeScroll?this.props.beforeScroll().then(function(){(0,f.default)(t,"scroll",{duration:e.props.timing||1e3})}):(0,f.default)(t,"scroll",{duration:this.props.timing||1e3})}}]),t}(u.Component);t.default=d},114:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=n(26),i=n(34),u=a(i),c=function(e){return l.default.createElement(o.LazyImage,{link:(0,u.default)(e)})},s=function(e){var t=e.name,n=e.html_url,a=e.stargazers_count,r=e.language,o=e.description;e.owner;return l.default.createElement("div",{className:"repo"},l.default.createElement("h4",null,l.default.createElement("a",{href:n,alt:t,target:"_blank"},t)," ",a," ",l.default.createElement("i",{className:"fa fa-star"})),l.default.createElement("div",null,l.default.createElement("small",null,"Description:"),l.default.createElement("p",null,o)),l.default.createElement("div",null,l.default.createElement("small",null,"Languagues:"),l.default.createElement("div",{className:"spaceBetween"},c(r))))};t.default=s},115:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=function(e){var t=e.background,n=e.children,a=e.isRow;return l.default.createElement("div",{className:"panel",style:{background:t}},l.default.createElement("div",{className:a?"row":""},n))};t.default=o},116:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(5),c=a(u),s=n(20),f=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blurriness:0,translate:0},n.scrollHandler=n.scrollHandler.bind(n),n}return o(t,e),i(t,[{key:"render",value:function(){var e={background:this.props.background};return c.default.createElement("div",{className:"wrapper"},c.default.createElement("div",{style:e,className:"parallax"}),c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"content"},this.props.children)))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler)}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.translate!=t.translate}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler)}},{key:"scrollHandler",value:function(e){var t=(0,s.findDOMNode)(this),n=t.querySelector(".parallax"),a=t.getBoundingClientRect(),r=a.height,l=0;r-window.scrollY>50&&(l=parseInt(window.scrollY/3),window.requestAnimationFrame(function(){n.style.transform="translate3d(0px,"+l+"px,0px)"}))}}]),t}(u.Component);t.default=f},117:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=n(26),i=function(e){var t=e.item;return l.default.createElement("div",{className:"portfolioItem"},l.default.createElement("a",{href:t.link,target:"_blank"},l.default.createElement("figure",null,l.default.createElement(o.LazyBackgroundImage,{className:"squareImage",link:t.imageSrc}),l.default.createElement("figcaption",null,l.default.createElement("p",null,t.description)))))};t.default=i},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(5),l=a(r),o=n(20),i=(a(o),n(90)),u=a(i),c=n(91);a(c);(0,o.render)(l.default.createElement(u.default,null),document.getElementById("app"))},26:function(e,t,n){!function(t,a){e.exports=a(n(5))}(this,function(e){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";(function(e){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),i=(n.n(o),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(e){var t=e.offset,n=e.top,a=e.left;return window.scrollY+window.innerHeight+t>n&&window.scrollX+window.innerWidth+t>a},s=function(e){var t=e.element.domNode,n=t.getBoundingClientRect(),a=n.top,r=n.left,l=n.right;return u({},e,{top:a,left:r,right:l})},f=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={link:""},n.makeItVisible=n.makeItVisible.bind(n),n}return l(t,e),i(t,[{key:"makeItVisible",value:function(){this.setState({link:this.props.link})}},{key:"componentDidMount",value:function(){t.addElement(this)}},{key:"componentWillUnmount",value:function(){t.removeElementFromList(this)}}]),t}(o.Component);f.elements=[],f.eventHandler=function(){0===f.elements.length?f.removeScrollHandler():!function(){for(var e=[],t=0;t<f.elements.length;t++)c(f.elements[t])&&(f.elements[t].element.makeItVisible(),e.push(t));e.length>0&&(f.elements=f.elements.filter(function(t,n){return!e.includes(n)})),f.elements=f.elements.map(function(e){return s(e)}),f.isListenerAttached=window.requestAnimationFrame(f.eventHandler)}()},f.addElement=function(e){var t=e.domNode.getBoundingClientRect(),n=t.top,a=t.left,r=t.right;f.elements.push({element:e,top:n,left:a,right:r,offset:e.props.offset||100}),"function"!=typeof f.isListenerAttached&&(f.isListenerAttached=window.requestAnimationFrame(f.eventHandler))},f.removeScrollHandler=function(){window.cancelAnimationFrame(f.isListenerAttached)},f.removeElementFromList=function(e){f.elements=f.elements.filter(function(t){return t.element!==e})},f.isListenerAttached=!1,"production"===!e.NODE_ENV&&(f.propTypes={link:o.PropTypes.string.isRequired}),t.a=f}).call(t,n(5))},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),i=n.n(o),u=n(1),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.className,style:this.style,ref:function(t){return e.domNode=t}})}},{key:"componentWillMount",value:function(){this.style=c({backgroundImage:"url("+this.state.link+")"},this.props.style)}},{key:"componentWillUpdate",value:function(e,t){this.style=c({},this.style,{backgroundImage:"url("+t.link+")"})}}]),t}(u.a);f.defaultProps={className:"",style:{}},t.a=f},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),i=n.n(o),u=n(1),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this;return i.a.createElement("iframe",{height:this.props.height,scrolling:this.props.scrolling,src:this.state.link,frameBorder:this.props.frameBorder,allowTransparency:this.props.allowTransparency,allowFullScreen:this.props.allowFullScreen,style:this.style,ref:function(t){return e.domNode=t}})}},{key:"componentWillMount",value:function(){this.style=c({minWidth:"100%"},this.props.style)}}]),t}(u.a);f.defaultProps={height:"500",scrolling:"no",frameBorder:"no",allowTransparency:"true",allowFullScreen:"true"},t.a=f},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),i=n.n(o),u=n(1),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this;return i.a.createElement("img",{src:this.state.link,alt:this.props.alt,style:this.style,className:this.props.className,ref:function(t){return e.domNode=t}})}},{key:"componentWillMount",value:function(){""===this.props.className&&this.props.preserveAspect===!1&&(this.style=c({minHeight:"300px",minWidth:"300px"},this.props.style))}}]),t}(u.a);f.defaultProps={style:{},className:"",preserveAspect:!0},t.a=f},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function r(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function l(e){if(f===clearTimeout)return clearTimeout(e);if((f===a||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){h&&m&&(h=!1,m.length?p=m.concat(p):g=-1,p.length&&i())}function i(){if(!h){var e=r(o);h=!0;for(var t=p.length;t;){for(m=p,p=[];++g<t;)m&&m[g].run();g=-1,t=p.length}m=null,h=!1,l(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:a}catch(e){f=a}}();var m,p=[],h=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||h||r(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(4),l=n(3);n.d(t,"LazyBackgroundImage",function(){return a.a}),n.d(t,"LazyImage",function(){return r.a}),n.d(t,"LazyFrame",function(){return l.a})}])})},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){switch(e=e.toLowerCase()){case"css":e+="-3";break;case"html":e+="-5";break;case"angular":case"nodejs":e+="-icon"}return"//cdn.svgporn.com/logos/"+e+".svg"};t.default=a},61:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(5),c=a(u),s=n(34),f=a(s),d=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={year:(new Date).getFullYear()},n}return o(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"footer"},c.default.createElement("ul",{className:"inline-list"},c.default.createElement("li",null,c.default.createElement("a",{href:"https://twitter.com/jonathanobino",target:"_blank"},c.default.createElement("i",{className:"fa fa-twitter fa-2x"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://github.com/jonathanobino",target:"_blank"},c.default.createElement("i",{className:"fa fa-github fa-2x"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"http://codepen.io/jonathanobino",target:"_blank"},c.default.createElement("i",{className:"fa fa-codepen fa-2x"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://it.linkedin.com/in/jonathanobino",target:"_blank"},c.default.createElement("i",{className:"fa fa-linkedin fa-2x"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://medium.com/@threobin",target:"_blank"},c.default.createElement("i",{className:"fa fa-medium fa-2x"})))),c.default.createElement("p",{className:"text-center"},"Jonathan Obino © ",this.state.year),c.default.createElement("p",{className:"text-center credits"},"Made with ",c.default.createElement("span",{className:"fa fa-heart heart"})," and ",c.default.createElement("img",{src:(0,f.default)("react"),alt:"React JS"})))}}]),t}(u.Component);t.default=d},90:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(5),s=a(c),f=n(112),d=(a(f),n(111)),m=a(d),p=n(116),h=a(p),g=n(117),b=a(g),y=n(110),v=a(y),E=n(61),w=a(E),_=n(115),k=a(_),O=n(113),j=a(O),N=n(32),S=a(N),P=n(109),M=a(P),x=n(114),T=a(x),C=n(34),I=a(C),L=n(26),A=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pens:[{id:"obwBEz1",link:"//codepen.io/jonathanobino/embed/preview/obwBEz/?height=500&theme-id=0&default-tab=result"},{id:"MaQNgY1",link:"//codepen.io/jonathanobino/embed/preview/MaQNgY/?height=500&theme-id=0&default-tab=result"},{id:"obwBEz2",link:"//codepen.io/jonathanobino/embed/preview/obwBEz/?height=500&theme-id=0&default-tab=result"},{id:"MaQNgY2",link:"//codepen.io/jonathanobino/embed/preview/MaQNgY/?height=268&theme-id=0&default-tab=result"}]},n}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"My Popular Pens")),s.default.createElement("div",{className:"medium-10 large-10 columns"},this.state.pens.map(function(e,t){return s.default.createElement("div",{className:"medium-6 large-6 columns",key:e.id},s.default.createElement(L.LazyFrame,{key:e.id,link:e.link,height:268}))})))}},{key:"componentDidMount",value:function(){var e=this;S.default.get("http://cpv2api.com/pens/popular/jonathanobino").then(function(t){if(t.data.success){var n=t.data.data.map(function(e){var t=e.link.split("/").pop();return{id:t,link:"//codepen.io/jonathanobino/embed/preview/"+t+"/?height=268&theme-id=0&default-tab=result"}});e.setState({pens:n.slice(0,4)})}})}}]),t}(c.Component),F=(function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={posts:[]},n}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"Last blog posts")),s.default.createElement("div",{className:"medium-6 large-6 columns m-story"},s.default.createElement("a",{className:"m-story","data-collapsed":"true",href:"https://medium.com/@threobin/do-you-really-need-global-npm-packages-a3f21dc2396f"},"Do you really need global NPM packages?")),s.default.createElement("div",{className:"medium-6 large-6 columns"}))}}]),t}(c.Component),function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={places:[{description:{company:"Freelance",role:"Full Stack Developer",when:"01.2015 - now"}},{link:"http://www.addfuel.it",description:{company:"Fuel",role:"Front End Developer",when:"03.2015 - 06.2015",technology:"Angular, jQuery, CSS3, HTML5"},imageSrc:"images/fuel.png"},{link:"http://www.majeeko.com",description:{company:"Majeeko",role:"Full Stack Developer",when:"09.2015 - 12.2015",technology:"Angular, jQuery, CSS3, HTML5, Node JS, Mongo DB, Express"},imageSrc:"images/majeeko.png"}]},n}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"Some places where I've worked")),s.default.createElement("div",{className:"medium-10 large-10 columns"},this.state.places.map(function(e,t){return s.default.createElement(v.default,{item:e,key:t})})))}}]),t}(c.Component)),z=function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"What I use")),s.default.createElement("div",{className:"medium-10 large-10 columns"},s.default.createElement("ul",{className:"inline-list same-height-child"},s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("html"),alt:"HTML5"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("sass"),alt:"SASS"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("angular"),alt:"Angular"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("react"),alt:"React JS"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("nodejs"),alt:"Node JS"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("mongodb"),alt:"Mongo DB"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("gulp"),alt:"Gulp JS"})),s.default.createElement("li",null,s.default.createElement(L.LazyImage,{link:(0,I.default)("express"),alt:"Express"})))))},H=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={portfolio:[{link:"http://ratemyc.herokuapp.com",description:"Rate My Customer",imageSrc:"/images/ratemy.png"},{link:"https://github.com/jonathanobino/kiko-hack",description:"Kiko Experience (hackathon app)",imageSrc:"/images/kiko.png"},{link:"http://www.digigrafonline.it",description:"Digigraf",imageSrc:"/images/digigraf.png"}]},n}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"Some work that I've done")),s.default.createElement("div",{className:"medium-10 large-10 columns"},s.default.createElement("div",{className:"row"},this.state.portfolio.map(function(e,t){return s.default.createElement("div",{className:"medium-4 columns",key:t},s.default.createElement(b.default,{item:e}))}))))}}]),t}(c.Component),B=function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"About me")),s.default.createElement("div",{
className:"medium-10 large-10 columns"},s.default.createElement("p",null,"Hello, my name is Jonathan Obino and I'm a Full Stack Web Developer.",s.default.createElement("br",null),"I work with Javascript both in the front end with frameworks and libraries like ",s.default.createElement("strong",null,"Angular")," or ",s.default.createElement("strong",null,"React")," and I work on the backend with frameworks like ",s.default.createElement("strong",null,"Express")," or ",s.default.createElement("strong",null,"Koa"),".",s.default.createElement("br",null),"I develop mobile applications with ",s.default.createElement("strong",null,"React Native")," or with ",s.default.createElement("strong",null,"Ionic")," to archeive the best solution with the right tool for the project.",s.default.createElement("br",null),"I like to stay up-to-date with the new technology and to experiment with them as soon they are available.",s.default.createElement("br",null),"As you can see on my github",s.default.createElement("a",{href:"https://github.com/jonathanobino/jonathanobino.github.com",target:"_blank"}," this website is built using React"),", bundled with WebPack and written in ES6.")))},R=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={projects:[{endpoint:"https://api.github.com/repos/jonathanobino/react-lazy"},{endpoint:"https://api.github.com/repos/jonathanobino/rately"}],results:[]},n}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"row main"},s.default.createElement("div",{className:"medium-2 large-2 columns text-right"},s.default.createElement("h2",null,"Open Source Projects")),s.default.createElement("div",{className:"medium-10 large-10 columns spaceBetween"},0===this.state.results.length?s.default.createElement(M.default,null):this.state.results.map(function(e,t){return s.default.createElement(T.default,i({},e,{key:t}))})))}},{key:"componentDidMount",value:function(){var e=this;Promise.all(this.state.projects.map(function(e){return S.default.get(e.endpoint)})).then(function(t){e.setState({results:t.map(function(e){return e.data})})})}}]),t}(c.Component),D=function(){return s.default.createElement("div",null,s.default.createElement(h.default,{background:"url(/images/background.jpg)"},s.default.createElement("img",{src:"/images/logo.png",alt:"logo"}),s.default.createElement(j.default,{target:"main"},s.default.createElement("div",{className:"mouse"},s.default.createElement("div",{className:"upAndDown"})))),s.default.createElement("main",null,s.default.createElement(k.default,{background:"#F0F0F0"},s.default.createElement(B,null),s.default.createElement(z,null),s.default.createElement(H,null),s.default.createElement(F,null),s.default.createElement(R,null),s.default.createElement(A,null))),s.default.createElement(m.default,{address:"jonobin@gmail.com"}),s.default.createElement(w.default,null))};t.default=D},91:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),l=a(r),o=n(20),i=a(o),u=n(61),c=(a(u),l.default.createClass({displayName:"Menu",render:function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"offCanvas"},l.default.createElement("p",null,l.default.createElement("span",{className:"fa fa-bars right",onClick:this.clickHandler})),l.default.createElement("ul",null,l.default.createElement("li",null,"Prova"),l.default.createElement("li",null,"Prova"),l.default.createElement("li",null,"Prova"))),l.default.createElement("div",{className:"mainWrapper"},l.default.createElement("div",{className:"flexFloating"},l.default.createElement("p",null,l.default.createElement("span",{className:"fa fa-bars right",onClick:this.clickHandler}))),this.props.children))},clickHandler:function(e){i.default.findDOMNode(this)}}));t.default=c}},[205]);