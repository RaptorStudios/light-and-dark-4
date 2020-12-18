"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e46) { throw _e46; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e47) { didErr = true; err = _e47; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! For license information please see l4w-tester.js.LICENSE.txt */
var L4W_tester;

L4W_tester = function () {
  var e = {
    624: function _(e, t, n) {
      var r = n(15),
          i = n(645)(r);
      i.push([e.id, "\n.root[data-v-463340e8] {\n    margin: 1em;\n}\n.description[data-v-463340e8]{\n    width: 21em;\n    height: 4em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.loading[data-v-463340e8] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/BugReporting.vue"],
        names: [],
        mappings: ";AAmHA;IACA,WAAA;AACA;AACA;IACA,WAAA;IACA,WAAA;IACA,qEAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        \x3c!-- TODO load only when user start writing, so that the overlay wont normally appear --\x3e\n        <script type="application/javascript" async defer src="https://www.google.com/recaptcha/api.js?render=6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb"><\/script>\n        <div v-if="!flagSent">\n            <p>\n                <label for="issueLabel">Do you want to report something?</label><br>\n                <select v-model="label" id="issueLabel">\n                    <option selected disabled />\n                    <option value="bug">Problem</option>\n                    <option value="question">Question</option>\n                    <option value="enhancement">Enhancement suggestion</option>\n                    <option value="other">Other</option>\n                </select>\n            </p>\n            <p>\n                <label for="issueDescription">What\'s on your mind?</label><br>\n                <textarea v-model="description" id="issueDescription" class="description" type="text"></textarea>\n            </p>\n            <p>\n                When you send the report <strong>what you wrote will be publicly visible on the <a href="https://github.com/giovannipessiva/l4w/issues">project issue tracker</a></strong>.<br>\n                If you want some privacy, <a href="mailto:rpt@altervista.org?subject=Feedback%20on%20L4W">drop me a mail</a>\n            </p>\n            <button v-on:click="send()" v-bind:disabled="description.trim().length === 0">Send</button>\n        </div>\n        <div v-else>\n            <div v-if="!flagReceived">\n                <img class="loading" src="/style/ui/ajax-loader.webp" alt="loading..." />\n            </div>\n            <div v-else-if="url !== undefined">\n                <p>\n                    Thank you for your feedback!<br>\n                    You can find it on the project issue tracker: <a v-bind:href="url">{{ url }}</a><br>\n                </p>\n                <button v-on:click="reset()">Dismiss</button>\n            </div>\n            <div v-else>\n                <p>\n                    An error occured :(<br>\n                </p>\n                <button v-on:click="reset(true)">Dismiss</button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\n\nimport { Resource } from "../core/util/Resource";\nimport { Utils } from "../../common/Utils";\nimport { IIssueRequest, IIssueResponse } from "../../common/ServerAPI"\n\ndeclare let grecaptcha: any; // Loaded from Google script\n\nexport default Vue.extend({\n    name: "bug-reporting",\n    data: function(): {\n        label?: string,\n        description: string,\n        flagSent?: boolean,\n        flagReceived?: boolean,\n        url?: string\n    } {\n        return {\n            label: undefined,\n            description: "",\n            flagSent: false,\n            flagReceived: false,\n            url: undefined\n        }\n    },\n    methods: {\n        send: function() {\n            if(this.description.trim().length > 0) {\n                let vueScope = this;\n                grecaptcha.ready(function() {\n                    grecaptcha.execute("6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb", {action: "bugReport"}).then(function(token: string) {\n                        let request: IIssueRequest = {\n                            label: vueScope.label, \n                            description: vueScope.description,\n                            captchaToken: token\n                        };\n                        Vue.set(vueScope, "flagSent", true);\n                        Resource.sendPOSTRequest("issue", JSON.stringify(request), function(response?: string) {\n                            Vue.set(vueScope, "flagReceived", true);\n                            if(!Utils.isEmpty(response)) {\n                                try {\n                                    let resp: IIssueResponse = JSON.parse(response!);\n                                    Vue.set(vueScope, "url", resp.url);\n                                    return;\n                                } catch(e) {\n                                    console.error(response);\n                                }\n                            }\n                            console.error("Issue creation failed");\n                        });\n                    });\n                });\n            }\n        },\n        reset: function(flagPreserveRequest?: boolean) {\n            Vue.set(this, "flagSent", false);\n            Vue.set(this, "flagReceived", false);\n            Vue.set(this, "url", undefined);\n            if(!flagPreserveRequest) {\n                Vue.set(this, "description", "");\n                Vue.set(this, "label", undefined);\n            }\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    margin: 1em;\n}\n.description{\n    width: 21em;\n    height: 4em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = i;
    },
    201: function _(e, t, n) {
      var r = n(15),
          i = n(645)(r);
      i.push([e.id, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/Login.vue"],
        names: [],
        mappings: ";AAwMA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Add Google login meta tags\n        let meta = document.createElement("meta");\n        meta.name = "google-signin-scope";\n        meta.content = "profile email";\n        document.head.appendChild(meta);\n\n        meta = document.createElement("meta");\n        meta.name = "google-signin-client_id";\n        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n        document.head.appendChild(meta);\n\n        // Init Facebook login\n        let vueScope = this;\n        window["fbAsyncInit"] = function() {\n            FB.init({\n                appId: "1885551381575204",\n                autoLogAppEvents: false,\n                cookie: true,\n                xfbml: false,\n                version : "v6.0"\n            });\n            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n            FB.getLoginStatus(function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n        };\n\n        // Init Google login\n        window["gAsyncInit"] = function() {\n            gapi.load("auth2", function() {\n                const authInstance = gapi.auth2.getAuthInstance();\n                if(authInstance.isSignedIn.get()) {\n                    Vue.set(vueScope, "loginStatus", true);\n                    Vue.set(vueScope, "loginService", "google");\n                }\n            });\n        };\n        window["gLoginCallback"] = this.gLoginCallback;\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(response !== undefined) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(response);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.error("Logged with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = i;
    },
    645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }, t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (r) for (var o = 0; o < this.length; o++) {
            var a = this[o][0];
            null != a && (i[a] = !0);
          }

          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s]);
            r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
          }
        }, t;
      };
    },
    15: function _(e) {
      "use strict";

      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, r = new Array(t); n < t; n++) {
          r[n] = e[n];
        }

        return r;
      }

      e.exports = function (e) {
        var n,
            r,
            i = (r = 4, function (e) {
          if (Array.isArray(e)) return e;
        }(n = e) || function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;

            try {
              for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
                ;
              }
            } catch (e) {
              i = !0, o = e;
            } finally {
              try {
                r || null == s["return"] || s["return"]();
              } finally {
                if (i) throw o;
              }
            }

            return n;
          }
        }(n, r) || function (e, n) {
          if (e) {
            if ("string" == typeof e) return t(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
          }
        }(n, r) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()),
            o = i[1],
            a = i[3];

        if ("function" == typeof btoa) {
          var s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
              c = "/*# ".concat(l, " */"),
              u = a.sources.map(function (e) {
            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */");
          });
          return [o].concat(u).concat([c]).join("\n");
        }

        return [o].join("\n");
      };
    },
    840: function _(e, t, n) {
      "use strict";

      n.r(t), n.d(t, {
        Tester: function Tester() {
          return rl;
        }
      });
      var r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          p = {};
      n.r(p), n.d(p, {
        BaseScript: function BaseScript() {
          return x;
        },
        DEFAULT_DIALOG: function DEFAULT_DIALOG() {
          return I;
        },
        DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
          return T;
        },
        Script1: function Script1() {
          return M;
        },
        Transports: function Transports() {
          return O;
        }
      });

      var h = function h() {
        _classCallCheck(this, h);
      };

      h.NONE = 0, h.UP = Math.pow(2, 0), h.DOWN = Math.pow(2, 1), h.LEFT = Math.pow(2, 2), h.RIGHT = Math.pow(2, 3), h.ALL = h.UP + h.DOWN + h.LEFT + h.RIGHT, function (e) {
        e.IT = "it", e.EN = "en";
      }(r || (r = {})), function (e) {
        e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
      }(i || (i = {})), function (e) {
        function t(e) {
          return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
        }

        e.isEmpty = t, e.unitTestIsEmpty = function () {
          var e = new Map();
          console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
        }, e.mergeMaps = function (e, t) {
          var n = new Map();

          function r(e, t, r) {
            n.set(t, e);
          }

          return t.forEach(r), e.forEach(r), n;
        }, e.isNumeric = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }, e.convertStringToEnum = function (e, t) {
          return e[Object.keys(e).filter(function (n) {
            return e[n] === t;
          })[0]];
        };
        var n = "abcdefghijklmnopqrstuvwxyz0123456789";
        e.getRandomString = function (e) {
          return void 0 === e && (e = 8), _toConsumableArray(Array(e)).map(function (e) {
            return n[~~(Math.random() * n.length)];
          }).join("");
        }, e.now = function () {
          return new Date().getTime();
        };
      }(o || (o = {})), function (e) {
        function t(e, t) {
          return e.i + e.j * t;
        }

        function n(e, t) {
          var n = {
            i: e.i,
            j: e.j
          };

          switch (t) {
            case 0:
              n.j -= 1;
              break;

            case 2:
              n.j += 1;
              break;

            case 3:
              n.i -= 1;
              break;

            case 1:
              n.i += 1;
              break;

            case 4:
              break;

            default:
              console.error("Unexpected case: " + t);
          }

          return n;
        }

        function r(e, t) {
          return (e & t) === t && t !== h.NONE;
        }

        function i(e, t) {
          var n = h.NONE;

          switch (t) {
            case 0:
              n = h.UP;
              break;

            case 2:
              n = h.DOWN;
              break;

            case 3:
              n = h.LEFT;
              break;

            case 1:
              n = h.RIGHT;
          }

          return r(e, n);
        }

        function a(e, t, n, r) {
          var i = h.NONE;
          return n && void 0 !== e.blocks && t < e.blocks.length && (i |= e.blocks[t]), r && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (i |= e.dynamicBlocks[t]), i;
        }

        function s(e) {
          switch (e) {
            case 0:
              return 2;

            case 2:
              return 0;

            case 3:
              return 1;

            case 1:
              return 3;

            default:
              return 4;
          }
        }

        function l(e) {
          switch (e) {
            case 0:
              return "˄ up";

            case 2:
              return "˅ down";

            case 3:
              return "˂ left";

            case 1:
              return "˃ right";

            default:
              return "  none";
          }
        }

        e.mergeRectangles = function (e, t) {
          if (void 0 === e) return t;
          if (void 0 === t) return e;
          var n, r, i, o;
          return n = e.x < t.x ? e.x : t.x, r = e.y < t.y ? e.y : t.y, o = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, i = e.y + e.h > t.y + t.h ? e.y + e.h - r : t.y + t.h - r, {
            x: n,
            y: r,
            w: o,
            h: i
          };
        }, e.resetSelect = function (e) {
          for (var _t2 = e.length - 1; _t2 >= 0; _t2--) {
            e.remove(_t2);
          }
        }, e.gidToCell = function (e, t) {
          return {
            i: e % t,
            j: Math.floor(e / t)
          };
        }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = r, e.isDirectionEnumBlocked = i, e.isMovementBlocked = function (r, o, a, l) {
          var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
          var u;
          u = t({
            i: o,
            j: a
          }, r.width);
          var d,
              f = e.getMapStaticBlock(r, u),
              p = t(n({
            i: o,
            j: a
          }, l), r.width);
          return d = c ? e.getMapStaticBlock(r, p) : e.getMapBlocks(r, p), i(f, l) || i(d, s(l));
        }, e.getBlock = function (e, t, n, r) {
          var i = 0;
          return i |= e ? h.UP : 0, i |= t ? h.DOWN : 0, i |= n ? h.LEFT : 0, i |= r ? h.RIGHT : 0, i;
        }, e.getMapBlocks = function (e, t) {
          return a(e, t, !0, !0);
        }, e.getMapStaticBlock = function (e, t) {
          return a(e, t, !0, !1);
        }, e.getMapDynamicBlock = function (e, t) {
          return a(e, t, !1, !0);
        }, e.isDirectionsOpposed = function (e, t) {
          return s(e) === t;
        }, e.getOpposedDirections = s, e.getNextAbsoluteDirection = function (e, t) {
          if (0 === t || 4 === e) return e;
          var n = [0, 1, 2, 3],
              r = 0;

          for (var _i2 = 0, _n2 = n; _i2 < _n2.length; _i2++) {
            var _t3 = _n2[_i2];
            if (e === _t3) break;
            r++;
          }

          switch (t) {
            case 3:
              r--;
              break;

            case 1:
              r++;
              break;

            case 2:
              r += 2;
          }

          return r < 0 ? r = n.length - 1 : r >= n.length && (r -= n.length), n[r];
        }, e.getDirection = function (e, t) {
          var n,
              r = e.i - t.i,
              i = e.j - t.j;
          return n = Math.abs(r) > Math.abs(i) ? r > 0 ? 1 : 3 : i > 0 ? 2 : i < 0 ? 0 : 4, n;
        }, e.moveToDirection = function (e, t) {
          var n = {
            i: e.i,
            j: e.j
          };

          switch (t) {
            case 0:
              n.j -= 1;
              break;

            case 2:
              n.j += 1;
              break;

            case 3:
              n.i -= 1;
              break;

            case 1:
              n.i += 1;
          }

          return n;
        }, e.getCellDistance = function (e, t) {
          return Math.abs(e.i - t.i) + Math.abs(e.j - t.j);
        }, e.getPointDistance = function (e, t) {
          return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
        }, e.getRandomBoolean = function () {
          return Math.random() >= .5;
        }, e.getRandomInteger = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        }, e.normalizeZIndex = function (e) {
          return !o.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
        }, e.getDirectionName = l, e.getBlockName = function (e) {
          var t = "free";
          return r(e, h.UP) && (t = l(0)), r(e, h.DOWN) && (t += l(2)), r(e, h.LEFT) && (t += l(3)), r(e, h.RIGHT) && (t += l(1)), t;
        }, e.getSelectionAreaName = function (e) {
          switch (e) {
            case 0:
              return "⬒ up";

            case 1:
              return "⬓ down";

            case 2:
              return "◧ left";

            case 3:
              return "◨ right";

            case 4:
              return "▣ center";

            default:
              return "  none";
          }
        };
      }(a || (a = {})), function (e) {
        e.DOUBLE_PI = 2 * Math.PI;

        var t = function t() {
          _classCallCheck(this, t);
        };

        t.YELLOW = "yellow", t.RED = "red", t.WHITE = "white", t.GREY = "grey", t.BLACK = "black", t.AQUA = "aqua", t.DARKBLUE = "darkblue", t.GREEN = "green", t.LIME = "lime", e.Color = t;

        var n = function n() {
          _classCallCheck(this, n);
        };

        n.GET = "GET", n.POST = "POST", e.RequestType = n;

        var r = function r() {
          _classCallCheck(this, r);
        };

        var i, o, a;
        r.JSON = "application/json", e.MimeType = r, e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
          e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
        }(i = e.MapLayer || (e.MapLayer = {})), function (e) {
          e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
        }(o = e.EditMode || (e.EditMode = {})), function (e) {
          e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
        }(a = e.TileEditMode || (e.TileEditMode = {}));
      }(s || (s = {})), function (e) {
        e.showError = function (e, t) {
          null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
        };
      }(l || (l = {})), function (e) {
        e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
      }(c || (c = {})), function (e) {
        e.LOCATION = "Location";
      }(u || (u = {})), function (e) {
        e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.TILESET = "tileset", e.PICTURE = "picture", e.POINTER = "pointer", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
      }(d || (d = {})), function (e) {
        var t = !1,
            n = [];

        var r = function r() {
          _classCallCheck(this, r);
        };

        r.UP = "ArrowUp", r.DOWN = "ArrowDown", r.LEFT = "ArrowLeft", r.RIGHT = "ArrowRight", r.CTRL = "Control", r.ALT = "Alt", r.ENTER = "Enter", r.SPACEBAR = " ", r.CAPS = "CapsLock", r.SHIFT = "Shift", r.W = "w", r.A = "a", r.D = "d", r.S = "s", r.P = "p", r.F1 = "F1", r.F2 = "F2", r.F3 = "F3", r.F4 = "F4", r.F5 = "F5", r.F6 = "F6", r.N_0 = "0", r.N_1 = "1", r.N_2 = "2", r.N_3 = "3", r.N_4 = "4", r.N_5 = "5", r.N_6 = "6", r.N_7 = "7", r.N_8 = "8", r.N_9 = "9", e.Keys = r;

        var i = function i() {
          _classCallCheck(this, i);
        };

        function o() {
          var _iterator = _createForOfIteratorHelper(n),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _e2 = _step.value;

              try {
                _e2();
              } catch (e) {
                console.error("Error executing onAction callback:"), console.error(e);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          n = [];
        }

        i.LEFT = 1, i.RIGHT = 2, i.MIDDLE = 4, e.MouseButtons = i, e.init = function (n, i, a, s, l, c, u, d, f, p, h, v, g, m, y) {
          var b,
              _ = !1;

          a[r.P] = function (e) {
            _ ? (h(), _ = !1) : (p(), _ = !0);
          };

          var E = !1;

          function A(e) {
            var t = {
              x: e.clientX,
              y: e.clientY
            };
            return i.mapPositionToGrid(t);
          }

          n.addEventListener("click", function (e) {
            var n = A(e);
            t || l(n.i, n.j, n.x, n.y), o();
          }), n.addEventListener("mousemove", function (e) {
            var t = A(e);
            E ? d(t.i, t.j, e.buttons) : f(t.i, t.j);
          }), n.addEventListener("mousedown", function (e) {
            E = !0;
            var t = A(e);
            c(t.i, t.j, t.x, t.y, e.buttons), o();
          }), n.addEventListener("mouseup", function (e) {
            E = !1;
            var t = A(e);
            u(t.i, t.j, e.buttons);
          }), n.addEventListener("mouseout", function (e) {
            E ? d(void 0, void 0, e.buttons) : f(void 0, void 0);
          }), n.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            var t = A(e);
            g(t.i, t.j);
          }), n.addEventListener("dblclick", function (e) {
            var t = A(e);
            m(t.i, t.j);
          }), n.addEventListener("wheel", function (e) {
            var t = A(e);
            y(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchstart", function (e) {
            var t = A(e);
            c(t.i, t.j, t.x, t.y), o();
          }, {
            passive: !0
          }), n.addEventListener("touchend", function (e) {
            var t = A(e);
            d(void 0, void 0), u(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchcancel", function (e) {
            var t = A(e);
            d(void 0, void 0), u(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchmove", function (e) {
            var t = A(e);
            d(t.i, t.j);
          }, {
            passive: !0
          }), document.addEventListener("keydown", function (t) {
            var n = a[t.key];
            void 0 !== n && n(t), t.key === e.Keys.SPACEBAR && (o(), t.preventDefault()), b = t.key;
          }), document.addEventListener("keyup", function (e) {
            e.key === b && s();
          }), document.addEventListener("visibilitychange", function () {
            document.hidden ? (p(), _ = !0) : (h(), _ = !1);
          }), window.addEventListener("resize", function (e) {
            v();
          }), document.addEventListener("orientationchange", function () {
            v();
          });
        }, e.escapeText = function (e) {
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }, e.addActionCallback = function (e) {
          n.push(e);
        }, e.disableActionEvents = function () {
          t = !0;
        }, e.enableActionEvents = function () {
          t = !1;
        };
      }(f || (f = {}));
      var v = [];

      function g(e, t) {
        var n;

        switch (e) {
          case 0:
            n = f.Keys.N_0;
            break;

          case 1:
            n = f.Keys.N_1;
            break;

          case 2:
            n = f.Keys.N_2;
            break;

          case 3:
            n = f.Keys.N_3;
            break;

          case 4:
            n = f.Keys.N_4;
            break;

          case 5:
            n = f.Keys.N_5;
            break;

          case 6:
            n = f.Keys.N_6;
            break;

          case 7:
            n = f.Keys.N_7;
            break;

          case 8:
            n = f.Keys.N_8;
            break;

          case 9:
            n = f.Keys.N_9;
            break;

          default:
            return void console.error("Unexpected numericKey: " + e);
        }

        var r = function r(e) {
          e.key === n && (t(e), function () {
            var _iterator2 = _createForOfIteratorHelper(v),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e3 = _step2.value;
                document.removeEventListener("keydown", _e3);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            v = [];
          }());
        };

        v.push(r), document.addEventListener("keydown", r);
      }

      var m = {
        maps: {
          start: {
            map: "0",
            i: 0,
            j: 0
          }
        },
        hero: {
          name: "Fart",
          charaset: "fart.png"
        },
        ui: {
          lang: r.EN,
          skin: "ld3-webskin1.png",
          enableCLI: !0
        }
      };

      var y, b, _, E, A, w;

      !function (e) {
        function t(e) {
          return {
            id: o.getRandomString(),
            name: void 0 !== e ? e : "Map",
            height: 20,
            width: 25,
            layers: [{
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              type: "tilelayer",
              x: 0,
              y: 0
            }, {
              type: "tilelayer",
              x: 0,
              y: 0
            }, {
              type: "tilelayer",
              x: 0,
              y: 0
            }, {
              type: "tilelayer",
              x: 0,
              y: 0
            }],
            nextobjectid: 2,
            tileset: {
              firstgid: 1,
              image: "002-Woods01.png",
              blocks: [],
              onTop: []
            },
            events: []
          };
        }

        function n() {
          return {
            lang: m.ui.lang,
            skin: m.ui.skin,
            flagAntialiasing: !1,
            flagDouble: !1,
            flagNatural: !1
          };
        }

        function r() {
          return {
            id: -1,
            name: "NPC",
            i: 0,
            j: 0,
            states: [{
              direction: 2,
              condition: "always",
              trigger: 0
            }],
            memory: {},
            script: "BaseScript",
            currentState: 0
          };
        }

        function i() {
          var e = {
            id: -1,
            name: "NPC",
            i: 0,
            j: 0,
            states: [{
              direction: 2,
              condition: "always",
              trigger: 0
            }],
            memory: {},
            script: "BaseScript",
            currentState: 0
          };
          return e.name = m.hero.name, e.i = m.maps.start.i, e.j = m.maps.start.j, e.states = [], e.states[0] = {
            direction: 2,
            condition: "always",
            trigger: 0
          }, e.states[0].charaset = m.hero.charaset, e;
        }

        function a() {
          return {
            direction: 2,
            condition: "always",
            trigger: 0
          };
        }

        e.DEFAULT_ID = -1, e.DEFAULT_ID_STR = e.DEFAULT_ID + "", e.FIRST_ELEM_ID = 0, e.DEFAULT_STR = "", e.getDialogNode = function (t) {
          return {
            id: void 0 !== t ? t : e.DEFAULT_ID
          };
        }, e.getDialogEdge = function (t) {
          return {
            id: void 0 !== t ? t : e.DEFAULT_ID
          };
        }, e.getEmptyMap = function (e) {
          var n = t(e);

          var _iterator3 = _createForOfIteratorHelper(n.layers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _e4 = _step3.value;
              _e4.data = void 0;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return n;
        }, e.getMap = t, e.getTileset = function () {
          return {
            firstgid: 1,
            image: "002-Woods01.png",
            blocks: [],
            onTop: []
          };
        }, e.getSave = function () {
          return {
            id: e.FIRST_ELEM_ID,
            timestamp: o.now(),
            currentMap: m.maps.start.map,
            hero: i(),
            maps: [],
            config: n()
          };
        }, e.getConfig = n, e.getEvent = r, e.getHero = i, e.getEventState = a, e.getString = function () {
          return "";
        }, e.getTree = function () {
          return {};
        }, e.getCharacter = function () {
          return {
            direction: 2
          };
        };
      }(y || (y = {})), function (e) {
        var t = "dialogContainer",
            n = "userInput";
        var r, i;

        function s() {
          var e = document.getElementById(t);
          null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
            e.style.display = "none";
          }, 200), f.disableActionEvents()) : console.error("Element not foud: dialogContainer");
        }

        function l() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          f.enableActionEvents();
          var n = document.getElementById(t);
          null !== n ? (n.classList.remove("visibleFadeIn"), n.classList.add("hiddenFadeOut"), setTimeout(function () {
            n.style.display = "none";
          }, 200), void 0 === i || e || i()) : console.error("Element not foud: dialogContainer");
        }

        function c(e) {
          void 0 !== e ? setTimeout(function () {
            l();
          }, e) : setTimeout(function () {
            f.addActionCallback(function () {
              l();
            });
          }, 500);
        }

        function u(e, t, n) {
          D.load(e, d.STRING, function (t) {
            o.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
          }, t);
        }

        function p(e, t, n) {
          e !== y.DEFAULT_ID ? D.load(e + "", d.DIALOG, function (t) {
            if (o.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(y.getDialogNode(y.FIRST_ELEM_ID));else {
              var _e5 = JSON.parse(t),
                  _r2 = function (e, t, n) {
                var r = new Map(),
                    i = new Map();

                var _iterator4 = _createForOfIteratorHelper(t),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _e6 = _step4.value;
                    r.set(_e6.id, _e6);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                var _iterator5 = _createForOfIteratorHelper(n),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _e7 = _step5.value;
                    i.set(_e7.id, _e7);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                if (r.has(e)) {
                  var _t4 = r.get(e);

                  return h(_t4, r, i), _t4;
                }

                return console.error("Cannot reconstruct dialog tree from node: " + e), y.getDialogNode();
              }(y.FIRST_ELEM_ID, _e5.nodes, _e5.edges);

              n(_r2);
            }
          }) : n(y.getDialogNode(y.FIRST_ELEM_ID));
        }

        function h(e, t, n) {
          if (e.referenced = !0, !o.isEmpty(e.edgeIds)) {
            var _iterator6 = _createForOfIteratorHelper(e.edgeIds),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _r3 = _step6.value;

                if (n.has(_r3)) {
                  var _i3 = n.get(_r3);

                  if (void 0 === e.edges && (e.edges = []), e.edges.push(_i3), void 0 !== _i3.nodeId) if (t.has(_i3.nodeId)) {
                    var _e8 = t.get(_i3.nodeId);

                    _i3.node = _e8, _e8.referenced && (_i3.nodeReferenced = !0), h(_e8, t, n);
                  } else console.error("Cannot reconstruct dialog tree from edge: " + _i3.id + ", node not found: " + _i3.nodeId);
                } else console.error("Cannot reconstruct dialog tree from node: " + e.id + ", edge not found: " + _r3);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }

        function v(e, t, n, r) {
          if (t.has(e.id)) return;
          t.set(e.id, e);
          var i = e.edges;

          if (!o.isEmpty(i)) {
            r && delete e.edges;

            var _iterator7 = _createForOfIteratorHelper(i),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _e9 = _step7.value;
                if (n.has(_e9.id)) continue;
                n.set(_e9.id, _e9);
                var _i4 = _e9.node;
                void 0 !== _i4 && (r && delete _e9.node, v(_i4, t, n));
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }

        function m(e, t, l, u, d, p) {
          var h = document.getElementById("dialogFrame"),
              v = document.getElementById("dialogFace"),
              y = document.getElementById("dialogName"),
              E = document.getElementById("dialogArea");
          if (null === v) return void console.error("Element not foud: dialogFace");
          if (null === y || null === y.firstChild) return void console.error("Element not foud: dialogName");
          if (null === E) return void console.error("Element not foud: dialogArea");
          if (null === h) return void console.error("Element not foud: dialogFrame");
          s(), o.isEmpty(d) ? console.error("skin is not defined!") : h.style.borderImageSource = "url('/assets/skin/" + d + "')";
          var A = u.face;
          void 0 !== A ? (v.style.display = "block", v.style.backgroundImage = "url('/assets/faceset/" + A + "')") : v.style.display = "none", y.firstChild.textContent = l;

          var w = function (e) {
            var t;
            return void 0 !== e.genericMessage && (t = function (e) {
              var t = r.get(e);

              if (void 0 !== t && !o.isEmpty(t.values)) {
                var _e10, _n3;

                if (_e10 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                  return b(t.condition, e.conditionParams);
                }), 0 === _e10.length) return;
                return _n3 = 1 === _e10.length ? 0 : a.getRandomInteger(0, _e10.length - 1), _e10[_n3].message;
              }
            }(e.genericMessage)), void 0 === t && (t = e.message), void 0 !== t && (t = t), t;
          }(u);

          E.innerText = void 0 !== w ? w : "";
          var S = document.getElementById("dialogEdgeArea");
          if (null === S) return void console.error("Element not foud: dialogEdgeArea");

          for (; S.firstChild;) {
            S.removeChild(S.firstChild);
          }

          i = void 0;
          var k = [];

          if (void 0 !== u.edges) {
            var _iterator8 = _createForOfIteratorHelper(u.edges),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _e11 = _step8.value;
                b(_e11.condition) && k.push(_e11);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          var C = function C(r) {
            if (void 0 !== r.action) {
              var _i5,
                  _o2 = document.getElementById(n);

              if (null === _o2) return void console.warn("Input required");
              _i5 = _o2.value, _i5 = _i5.trim(), _i5 = f.escapeText(_i5), _(r, e, t, _i5);
            } else void 0 !== r.node ? m(e, t, l, r.node, d, p) : c(0);
          };

          if (0 === k.length) c(u.closingTimeout);else if (1 === k.length && void 0 === k[0].message) {
            if (void 0 === k[0].inputType) i = function i() {
              C(k[0]);
            }, c(u.closingTimeout);else {
              var _e12 = document.createElement("input");

              switch (k[0].inputType) {
                case 1:
                  _e12.type = "number";
                  break;

                case 0:
                  _e12.type = "text";
                  break;

                default:
                  console.error("Unexpected DialogInputType for edge: " + k[0].id);
              }

              _e12.id = n, S.appendChild(_e12);
            }
          } else {
            var _e13 = 1;

            var _iterator9 = _createForOfIteratorHelper(k),
                _step9;

            try {
              var _loop = function _loop() {
                var t = _step9.value;
                var n = document.createElement("div");
                n.classList.add("l4wDialogEdge"), S.appendChild(n), void 0 !== t.message && (n.innerText = t.message);

                var r = function r(e) {
                  n.classList.add("l4wDialogEdgeSelected"), setTimeout(function () {
                    C(t);
                  }, 100);
                };

                n.onclick = r, g(_e13, r), _e13++;
              };

              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }

        function b(e, t) {
          return void 0 === e || (e in w ? w[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
        }

        function _(e, t, n, r) {
          var i = e.script;
          if (void 0 === i) return !1;
          var a = new i[i](event, n, t);
          if (o.isEmpty(a)) return console.error('Script "' + i + '" not found (dialog edge: ' + e.id + ")"), !1;
          var s = e.action;
          if (void 0 === s) return !1;
          if (!(s in a)) return console.error('Action "' + s + '" not found in script "' + i + '" (dialog edge: ' + e.id + ")"), !1;

          try {
            return a[s](r);
          } catch (e) {
            console.error(e);
          }

          return !1;
        }

        function E(e, t, n, r, i) {
          if (!r.has(e.id)) {
            if (!n && e.id === t) return e;
            r.set(e.id, e);
            var _a2 = e.edges;

            if (!o.isEmpty(_a2)) {
              var _iterator10 = _createForOfIteratorHelper(_a2),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _e14 = _step10.value;

                  if (!i.has(_e14.id)) {
                    if (n && _e14.id === t) return _e14;
                    i.set(_e14.id, _e14);
                    var _o3 = _e14.node;

                    if (void 0 !== _o3) {
                      var _e15 = E(_o3, t, n, r, i);

                      if (void 0 !== _e15) return _e15;
                    }
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }
        }

        e.openDialog = s, e.closeDialog = l, e.loadString = u, e.saveString = function (e, t, n) {
          var r = JSON.stringify(t);
          D.save(e + "", r, d.STRING, function (t, r) {
            if (void 0 !== t) {
              var _e16 = parseInt(t);

              if (isNaN(_e16)) return console.error("Error while saving string"), void n();
            }

            n(e);
          });
        }, e.loadDialog = p, e.saveDialog = function (e, t, n) {
          var r = new Map(),
              i = new Map();
          v(t, r, i, !0);
          var a = {
            nodes: Array.from(r.values()),
            edges: Array.from(i.values())
          };
          D.save(e + "", JSON.stringify(a), d.DIALOG, function (t, r) {
            r ? (o.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
          });
        }, e.deconstructDialogTree = v, e.loadGenericMessages = function (e, t, n) {
          isNaN(e) ? n(!1) : D.load(e + "", d.GENERIC_MESSAGE, function (t) {
            o.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), n(!1)) : (r = JSON.parse(t), n(!0));
          });
        }, e.showComplexDialog = function (e, t, n, r, i, o) {
          p(r, i.lang, function (a) {
            void 0 === a ? console.error("Error while loading dialog: " + r) : m(e, t, n, a, i.skin, o);
          });
        }, e.showSimpleDialog = function (e, t, n, r, i, o) {
          u(r, i.lang, function (r) {
            var a = y.getDialogNode();
            a.message = r, m(e, t, n, a, i.skin, o);
          });
        }, e.launchAction = _, e.search = function (e, t, n) {
          return E(e, t, void 0 !== n && n, new Map(), new Map());
        };
      }(b || (b = {})), function (e) {
        function t(e, t) {
          switch (parseInt(t + "")) {
            case 0:
              e.frequencyVal = s.VERY_LOW_FREQUENCY;
              break;

            case 1:
              e.frequencyVal = s.LOW_FREQUENCY;
              break;

            case 2:
              e.frequencyVal = s.MEDIUM_LOW_FREQUENCY;
              break;

            case 3:
              e.frequencyVal = s.MEDIUM_FREQUENCY;
              break;

            case 4:
              e.frequencyVal = s.MEDIUM_HIGH_FREQUENCY;
              break;

            case 5:
              e.frequencyVal = s.HIGH_FREQUENCY;
              break;

            case 6:
              e.frequencyVal = s.VERY_HIGH_FREQUENCY;
              break;

            default:
              e.frequencyVal = s.MEDIUM_FREQUENCY;
          }
        }

        function n(e, t) {
          switch (parseInt(t + "")) {
            case 0:
              e.mSpeed = s.VERY_LOW_MSPEED;
              break;

            case 1:
              e.mSpeed = s.LOW_MSPEED;
              break;

            case 2:
              e.mSpeed = s.MEDIUM_LOW_MSPEED;
              break;

            case 3:
              e.mSpeed = s.MEDIUM_MSPEED;
              break;

            case 4:
              e.mSpeed = s.MEDIUM_HIGH_MSPEED;
              break;

            case 5:
              e.mSpeed = s.HIGH_MSPEED;
              break;

            case 6:
              e.mSpeed = s.VERY_HIGH_MSPEED;
              break;

            default:
              e.mSpeed = s.MEDIUM_MSPEED;
          }
        }

        e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
          return !(void 0 === e || t !== (0 !== a.normalizeZIndex(e.onTop)) || !o.isEmpty(e.visible) && !e.visible || !o.isEmpty(e.opacity) && 0 === e.opacity || o.isEmpty(e.charaset));
        }, e.initTransientData = function (e, r) {
          return void 0 === r && (r = y.getCharacter()), n(r, r.speed), t(r, r.frequency), r;
        };
      }(_ || (_ = {})), function (e) {
        function t(e, t) {
          var n = e.states[t].condition;
          return n in w ? w[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
        }

        function n(e, t, n, r) {
          return e.newTarget = {
            i: t,
            j: n
          }, e.newOnTargetReached = r, !0;
        }

        function r(e) {
          e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
        }

        function i(e) {
          var t = l(e);

          if (void 0 !== t) {
            var _e17 = t.mSpeed;
            if (!o.isEmpty(_e17)) return _e17;
          }

          return s.MEDIUM_MSPEED;
        }

        function l(e) {
          if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
        }

        function c(e, t) {
          var n = t.states[t.currentState].direction;
          void 0 === n && (n = 4);
          var r = a.getNextAbsoluteDirection(n, 0),
              i = N.isMovementTowardsTargetBlocked(e, t.i, t.j, r) ? 0 : 3,
              o = N.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
              s = N.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
              l = i + o + s + (N.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
              c = 4;

          if (l > 0) {
            var _e18 = a.getRandomInteger(1, l);

            _e18 -= i, _e18 <= 0 ? c = r : (_e18 -= o, _e18 <= 0 || (_e18 -= s), c = 4);
          }

          return a.getDirectionTarget(t, c);
        }

        e.update = function (e, r, i, s, l) {
          var u = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

          if (o.isEmpty(e.movementStartTime) || (e.movementStartTime += u), !o.isEmpty(e.states)) {
            var _o4 = -1;

            for (var _n4 = e.states.length - 1; _n4 >= 0; _n4--) {
              if (t(e, _n4)) {
                _o4 = _n4;
                break;
              }
            }

            if (e.currentState = _o4, e === i) return;
            if (-1 !== e.currentState && void 0 !== e.states[e.currentState].movement && void 0 === e.movementStartTime && function (e, t) {
              var r,
                  _i7,
                  o = t.states[t.currentState].movement;

              switch (o.strategy) {
                case "target":
                  void 0 === o.target && (console.warn("event: " + t.id + " has strategy=target, but target is undefined. Will fallback to random"), o.target = c(e, t)), r = o.target;
                  break;

                case "event":
                  var _s2;

                  var _iterator11 = _createForOfIteratorHelper(e.events),
                      _step11;

                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _t5 = _step11.value;
                      _t5.id === o.eventId && (_s2 = _t5);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }

                  if (void 0 === _s2) return void console.error("Cannot find event: " + o.eventId);

                  var _l = N.pathFinder(e, t, _s2, o.pathfinder);

                  r = a.getDirectionTarget(t, _l), _i7 = function i(r) {
                    var l = N.pathFinder(e, t, _s2, o.pathfinder);

                    if (4 !== l) {
                      var _e19 = a.getDirectionTarget(t, l);

                      n(t, _e19.i, _e19.j, _i7);
                    } else setTimeout(function () {
                      _i7(r);
                    }, 1e3);
                  };
                  break;

                case "random":
                  r = c(e, t), _i7 = function _i6() {
                    setTimeout(function () {
                      var r = c(e, t);
                      n(t, r.i, r.j, _i7);
                    }, o.pause);
                  };
                  break;

                default:
                  return void console.error("Unexpected movement strategy: " + o.strategy + " for event: " + t.id);
              }

              void 0 !== r && n(t, r.i, r.j, _i7);
            }(r.getMap(), e), function (e, t, n, r) {
              switch (e.states[t].trigger) {
                case 0:
                  if (void 0 === r || r.i !== e.i || r.j !== e.j) return !1;

                case 1:
                  var _i8 = Math.abs(e.i - n.i),
                      _o5 = Math.abs(e.j - n.j);

                  return 0 === _i8 && _o5 <= 1 || _i8 <= 1 && 0 === _o5;

                case 2:
                  return e.i === n.i && e.j === n.j;

                case 3:
                  return !0;

                default:
                  return console.error("Unexpected case: " + e.states[t].trigger), !1;
              }
            }(e, e.currentState, i, s)) return e.currentState;
          }
        }, e.startMovement = n, e.stopMovement = r, e.manageMovements = function e(t, n, s, l, c) {
          var u = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var d = !1;

          if (!o.isEmpty(s.movementStartTime)) {
            if (0 === u && (u = o.now() - s.movementStartTime), void 0 === s.target) return console.error("No target set for movement"), !0;

            var _e20,
                _f = s.target,
                _p = function (e, t, n) {
              var r = 4,
                  i = a.cellToGid(n, e.width),
                  s = a.getMapStaticBlock(e, i),
                  l = a.getMapDynamicBlock(e, i);
              if (a.isBlockDirectionBlocked(s, h.ALL) && !a.isBlockDirectionBlocked(l, h.ALL) || i < 0 || i >= e.width * e.height) r = 4;else if (o.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
                try {
                  r = N.pathFinder(e, t, n);
                } catch (t) {
                  console.error(t);
                }

                var _o6 = a.getDirectionTarget(t, r),
                    _s3 = a.cellToGid(_o6, e.width),
                    _l2 = a.getMapDynamicBlock(e, _s3);

                a.isDirectionEnumBlocked(_l2, a.getOpposedDirections(r)) && (r = 4, _s3 === i && void 0 !== t.onTargetReached && t.onTargetReached(n));
              } else r = t.movementDirection;
              return r;
            }(t, s, _f),
                _v = 0,
                _g = 0;

            switch (_p) {
              case 3:
                _v = Math.min(n.cellW, Math.floor(i(s) * u)), _e20 = _v, _v *= -1;
                break;

              case 1:
                _v = Math.min(n.cellW, Math.floor(i(s) * u)), _e20 = _v;
                break;

              case 0:
                _g = Math.min(n.cellH, Math.floor(i(s) * u)), _e20 = _g, _g *= -1;
                break;

              case 2:
                _g = Math.min(n.cellH, Math.floor(i(s) * u)), _e20 = _g;
                break;

              case 4:
                r(s), void 0 !== s.onTargetReached && s.onTargetReached(_f);
            }

            if (4 !== _p && (void 0 !== s.states[s.currentState] && (s.states[s.currentState].direction = _p), s.movementDirection = _p, s.position = {
              x: s.i * n.cellW + _v,
              y: s.j * n.cellH + _g
            }, l(_v, _g), _e20 === n.cellW)) {
              d = !0, s.movementDirection = void 0, s.movementStartTime = o.now(), u -= Math.floor(_e20 / i(s));

              var _t6 = n.mapCanvasToCell(s.position);

              s.i = _t6.i, s.j = _t6.j, c(_v, _g);

              var _a3 = n.mapCellToCanvas(s.target);

              (!o.isEmpty(s.newTarget) || s.position.x === _a3.x && s.position.y === _a3.y) && r(s);
            }
          }

          return !o.isEmpty(s.newTarget) && o.isEmpty(s.movementStartTime) && (s.target = s.newTarget, s.onTargetReached = s.newOnTargetReached, s.newTarget = void 0, s.newOnTargetReached = void 0, s.movementStartTime = o.now(), d = d || e(t, n, s, l, c, u)), d;
        }, e.addDirectionToPath = function (e, t, n) {
          void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !o.isEmpty(n) && e.path.length > n && e.path.shift();
        }, e.render = function (e, t, n, r, i) {
          var a,
              c = l(t);
          if (void 0 !== c) if (o.isEmpty(c.charaset) ? o.isEmpty(c.gid) : a = D.loadImageFromCache(c.charaset, d.CHAR), void 0 !== t.position) {
            if (r || (n.save(), n.strokeStyle = s.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
              var _l3 = Math.floor(a.width / 4),
                  _u = Math.floor(a.height / 4),
                  _d = _l3,
                  _f2 = _u;

              r || (_u > _l3 ? (_d = Math.floor(_l3 * e.cellH / _u), _f2 = e.cellH) : (_f2 = Math.floor(_u * e.cellW / _l3), _d = e.cellW));

              var _p2,
                  _h = 0;

              if (_p2 = o.isEmpty(c.frequencyVal) ? s.MEDIUM_FREQUENCY : c.frequencyVal, o.isEmpty(t.target)) {
                if (1 === c.rotation || 2 === c.rotation) {
                  o.isEmpty(c.animationStartTime) && (c.animationStartTime = o.now());

                  var _e21 = o.now() - c.animationStartTime;

                  _p2 /= 4;

                  var _t7 = Math.floor(_e21 * _p2 % 4);

                  2 === c.rotation && (3 === _t7 ? _t7 = 1 : 1 === _t7 && (_t7 = 3)), c.direction = _t7;
                } else c.animationStartTime = void 0;
              } else {
                o.isEmpty(c.animationStartTime) && (c.animationStartTime = o.now());

                var _e22 = o.now() - c.animationStartTime;

                switch (Math.floor(_e22 * _p2 % 4)) {
                  case 1:
                    _h = _l3;
                    break;

                  case 2:
                    _h = 2 * _l3;
                    break;

                  case 3:
                    _h = 3 * _l3;
                }
              }
              var _v2 = 0;

              switch (c.direction) {
                case 3:
                  _v2 = _u;
                  break;

                case 1:
                  _v2 = 2 * _u;
                  break;

                case 0:
                  _v2 = 3 * _u;
              }

              var _g2 = t.position.x + Math.floor((e.cellW - _d) / 2),
                  _m = t.position.y + Math.floor(-_f2 + e.cellH);

              n.save(), o.isEmpty(c.opacity) || 100 === c.opacity || (n.globalAlpha = c.opacity / 100), void 0 !== i && i.i === t.i && i.j === t.j && (n.shadowColor = s.Color.YELLOW, n.shadowBlur = 8), n.drawImage(a, _h, _v2, _l3, _u, _g2, _m, _d, _f2), n.restore();
            }
          } else console.error("Event position undefined: " + t);
        }, e.isVisible = function (e, t, n, r, i, o, a, s) {
          return e.i === o && e.j === a && !!_.isVisible(l(e), s) && e.i >= r && e.i <= i && e.j >= t && e.j <= n;
        }, e.saveMem = function (e, t, n) {
          o.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
        }, e.loadMem = function (e, t) {
          if (!o.isEmpty(e.memory)) return e.memory[t];
        }, e.deleteMem = function (e, t) {
          o.isEmpty(e.memory) || delete e.memory[t];
        }, e.initTransientData = function (t, n, i) {
          if (_.initTransientData(n, e.getState(i)), void 0 !== i) return r(i), i.position = {
            x: i.i * n.cellW,
            y: i.j * n.cellH
          }, i;
        }, e.getState = l;
      }(E || (E = {})), function (e) {
        function t(e) {
          return {
            id: e.id,
            memory: e.memory
          };
        }

        e.getSave = function (e, n) {
          if (o.isEmpty(e) || o.isEmpty(n)) return y.getSave();
          var r = new Array();

          if (!o.isEmpty(e.events)) {
            var _iterator12 = _createForOfIteratorHelper(e.events),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _n5 = _step12.value;
                r.push(t(_n5));
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }

          var i = y.getSave();
          return i.currentMap = e.id, i.hero = n, i.maps[e.id] = {
            events: r
          }, i;
        }, e.loadMapSave = function (e, t, n, r) {
          N.loadMap(t, e.context.canvas, function (t) {
            var i = t;
            !function (e, t) {
              if (o.isEmpty(e) || o.isEmpty(t.events) || o.isEmpty(e.maps[t.id])) return;
              var n = e.maps[t.id].events;

              if (!o.isEmpty(n)) {
                var _iterator13 = _createForOfIteratorHelper(n),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var _e23 = _step13.value;

                    var _iterator14 = _createForOfIteratorHelper(t.events),
                        _step14;

                    try {
                      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                        var _n6 = _step14.value;
                        _e23.id === _n6.id && (_n6.memory = _e23.memory);
                      }
                    } catch (err) {
                      _iterator14.e(err);
                    } finally {
                      _iterator14.f();
                    }
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
              }
            }(e.save, i), e.changeMap(i, function () {
              if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, E.initTransientData(i, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !o.isEmpty(e.map.events)) for (var _t8 = 0; _t8 < e.map.events.length; _t8++) {
                var _n7 = E.initTransientData(e.map, e.grid, e.map.events[_t8]);

                void 0 !== _n7 && (e.map.events[_t8] = _n7);
              }
              r(!0);
            });
          });
        };
      }(A || (A = {}));

      var S = /*#__PURE__*/function () {
        function S(e, t, n) {
          _classCallCheck(this, S);

          this.event = e, this.hero = t, this.scene = n;
        }

        _createClass(S, [{
          key: "getConfig",
          value: function getConfig() {
            return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : y.getConfig();
          }
        }, {
          key: "showSimpleDialog",
          value: function showSimpleDialog(e, t) {
            var n = this.getConfig();
            return b.showSimpleDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
          }
        }, {
          key: "showComplexDialog",
          value: function showComplexDialog(e, t) {
            var n = this.getConfig();
            return b.showComplexDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
          }
        }, {
          key: "moveToTarget",
          value: function moveToTarget(e, t) {
            return E.startMovement(this.event, e.i, e.j, t), !0;
          }
        }, {
          key: "stepToTarget",
          value: function stepToTarget(e, t) {
            var n = a.getDirection(e, this.event);
            return this.stepToDirection(n, t);
          }
        }, {
          key: "stepToDirection",
          value: function stepToDirection(e, t) {
            var n = a.moveToDirection(this.event, e);
            return this.moveToTarget(n, t);
          }
        }, {
          key: "stepFromTarget",
          value: function stepFromTarget(e, t) {
            var n = a.getDirection(e, this.event);
            return n = a.getOpposedDirections(n), this.stepToDirection(n, t);
          }
        }, {
          key: "wait",
          value: function wait(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

            var n = function n(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              return new Promise(e <= 0 ? function (e, t) {
                e(!0);
              } : t ? function (t, r) {
                n(e - 100, !0).then(function () {
                  setTimeout(function () {
                    console.log("TIMER: " + e), t(!0);
                  }, 97);
                });
              } : function (t, n) {
                setTimeout(function () {
                  t(!0);
                }, e);
              });
            };

            return n(e, t);
          }
        }, {
          key: "saveMem",
          value: function saveMem(e, t) {
            E.saveMem(this.event, e, t);
          }
        }, {
          key: "loadMem",
          value: function loadMem(e) {
            return E.loadMem(this.event, e);
          }
        }, {
          key: "incrementStateVar",
          value: function incrementStateVar() {
            var e = this.loadMem(S.STATE_VAR),
                t = 0;
            return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(S.STATE_VAR, t + ""), t;
          }
        }, {
          key: "setStateVar",
          value: function setStateVar(e) {
            this.saveMem(S.STATE_VAR, e + "");
          }
        }, {
          key: "goToMap",
          value: function goToMap(e, t) {
            var n = this.scene;
            A.loadMapSave(n, e, t, function () {
              n.moveFocusToTarget(t), E.stopMovement(n.hero);
            });
          }
        }, {
          key: "changeSkin",
          value: function changeSkin(e) {
            this.scene.save.config.skin = e;
          }
        }]);

        return S;
      }();

      S.tooltip = "(no description provided)", S.STATE_VAR = "state", function (e) {
        function t(e, t) {
          var n = e.memory[S.STATE_VAR],
              r = Number.parseInt(n);
          return !Number.isNaN(r) && r === t;
        }

        e.always = function (e) {
          return !0;
        }, e.isStateVar0 = function (e) {
          return t(e, 0);
        }, e.isStateVar1 = function (e) {
          return t(e, 1);
        }, e.isStateVar2 = function (e) {
          return t(e, 2);
        }, e.isStateVar3 = function (e) {
          return t(e, 3);
        }, e.isStateVar4 = function (e) {
          return t(e, 4);
        }, e.isStateVar5 = function (e) {
          return t(e, 5);
        }, e.isStateVar6 = function (e) {
          return t(e, 6);
        }, e.isStateVar7 = function (e) {
          return t(e, 7);
        }, e.isStateVar8 = function (e) {
          return t(e, 8);
        }, e.isStateVar9 = function (e) {
          return t(e, 9);
        };
      }(w || (w = {}));

      var k = function k() {
        _classCallCheck(this, k);

        this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
      };

      function C() {}

      var T = "msg",
          I = "dlg";

      var x = /*#__PURE__*/function (_S) {
        _inherits(x, _S);

        var _super = _createSuper(x);

        function x(e, t, n) {
          _classCallCheck(this, x);

          return _super.call(this, e, t, n);
        }

        _createClass(x, [{
          key: "speak",
          value: function speak() {
            var e = this.loadMem(T + (this.event.currentState + 1));
            o.isEmpty(e) && (e = this.loadMem(T)), this.showSimpleDialog(e, C);
          }
        }, {
          key: "dialog",
          value: function dialog() {
            var e = this.event.states[this.event.currentState];
            void 0 !== e.dialog && this.showComplexDialog(e.dialog, C);
          }
        }]);

        return x;
      }(S);

      x.tooltip = "Basic script with simple actions, mainly for generic NPCs";

      var O = /*#__PURE__*/function (_S2) {
        _inherits(O, _S2);

        var _super2 = _createSuper(O);

        function O() {
          _classCallCheck(this, O);

          return _super2.apply(this, arguments);
        }

        _createClass(O, [{
          key: "forest",
          value: function forest() {
            this.goToMap("1", {
              i: 15,
              j: 1
            });
          }
        }, {
          key: "farm",
          value: function farm() {
            this.goToMap("0", {
              i: 15,
              j: 17
            }), this.hero.movementDirection = 0;
          }
        }]);

        return O;
      }(S);

      O.tooltip = "Provide transportation from one map to another";

      var M = /*#__PURE__*/function (_S3) {
        _inherits(M, _S3);

        var _super3 = _createSuper(M);

        function M() {
          _classCallCheck(this, M);

          return _super3.apply(this, arguments);
        }

        _createClass(M, [{
          key: "testAction",
          value: function testAction() {
            return this.showSimpleDialog("2", C), !0;
          }
        }, {
          key: "giantTest",
          value: function giantTest() {
            this.showSimpleDialog("4", C);
            var e = this;
            return this.wait(1e3).then(function () {
              e.stepFromTarget(e.hero);
            }), this.incrementStateVar(), !0;
          }
        }, {
          key: "giantTest2",
          value: function giantTest2() {
            this.showSimpleDialog("5", C);
            var e = this;
            return this.wait(1e3).then(function () {
              e.stepFromTarget(e.hero);
            }), this.incrementStateVar(), !0;
          }
        }, {
          key: "giantTest3",
          value: function giantTest3() {
            this.showSimpleDialog("6", C);
            var e = this;
            return this.moveToTarget({
              i: 0,
              j: 0
            }, function () {
              e.setStateVar(0);
            }), !0;
          }
        }, {
          key: "move3ToRight",
          value: function move3ToRight() {
            return this.moveToTarget({
              i: this.event.i + 3,
              j: this.event.j
            }), !0;
          }
        }]);

        return M;
      }(S);

      var D, L;
      M.tooltip = "Script for tests", function (e) {
        var t = base_path + "data/",
            n = base_path + "assets/",
            r = base_path + "assetlist/",
            i = base_path + "edit/";
        var a = new Map();
        var l,
            c = new Map(),
            u = new Map();

        function f(e, t, n) {
          v(s.RequestType.GET, void 0, e, t, n);
        }

        function h(e, t, n) {
          v(s.RequestType.POST, t, e, n);
        }

        function v(e, t, n, r, i) {
          var a = new XMLHttpRequest();
          a.onload = function (e) {
            r(this.responseText);
          }, a.onerror = function (e) {
            console.error("Error for request to: " + n), console.error(e), r();
          }, a.ontimeout = function () {
            console.error("Timeout for request to: " + n), r();
          }, a.open(e, n, !0);

          try {
            void 0 !== i && a.setRequestHeader("lang", i), o.isEmpty(t) || e !== s.RequestType.POST ? a.send() : a.send(t);
          } catch (e) {
            "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), r();
          }
        }

        function g(e, r, i, s) {
          o.isEmpty(e) && (console.error("Trying to load empty file!"), console.trace());

          var l = function (e, r) {
            var i;

            switch (r) {
              case d.CHAR:
              case d.FACE:
              case d.SKIN:
              case d.PICTURE:
              case d.TILE:
                i = n;
                break;

              case d.MAP:
              case d.SAVE:
              case d.STRING:
              case d.DIALOG:
              case d.GENERIC_MESSAGE:
              case d.TILESET:
                i = t;
                break;

              default:
                console.error("Unexpected resource type"), console.trace();
            }

            return i + r + "/" + e;
          }(e, r);

          if (void 0 === l) return console.error("Error while loading file: " + e + "/" + r), void i();

          switch (r) {
            case d.CHAR:
            case d.FACE:
            case d.SKIN:
            case d.TILE:
            case d.PICTURE:
              var _t9 = new Image();

              _t9.onload = function () {
                a.set(r + "@" + e, _t9), i(_t9);
              }, _t9.src = l;
              break;

            case d.MAP:
            case d.SAVE:
            case d.STRING:
            case d.DIALOG:
            case d.GENERIC_MESSAGE:
            case d.TILESET:
              f(l, i, s);
              break;

            default:
              console.error("Unexpected resource type"), console.trace(), i(void 0);
          }
        }

        function m(e, t) {
          var n = a.get(t + "@" + e);
          return o.isEmpty(n) && g(e, t, function (n) {
            void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : a.set(t + "@" + e, n);
          }), n;
        }

        e.loadProperties = function (e) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
          c.has(n) ? e(c.get(n)) : f(t + d.CONFIGURATION + "/" + n + ".properties", function (t) {
            var r;
            void 0 !== t ? (r = function (e) {
              var t = new Map(),
                  n = e.split("\n");

              for (var r = 0; r < n.length; r++) {
                var _e24 = n[r].trim();

                if ("" !== _e24 && 0 !== _e24.indexOf("#")) {
                  var _n8 = _e24.split("="),
                      _i9 = +_n8[1];

                  isNaN(_i9) ? t.has(_n8[1]) ? t.set(_n8[0], t.get(_n8[1])) : console.error("Error parsing properties file at line " + r + ": " + _i9) : t.set(_n8[0], _i9);
                }
              }

              return t;
            }(t), c.set(n, r)) : r = new Map(), e(r);
          });
        }, e.sendGETRequest = f, e.sendPOSTRequest = h, e.load = g, e.loadImageFromCache = m, e.loadDefaultImage = function (e) {
          return m("404.png", e);
        }, e.save = function (e, t, n, r) {
          var o = function (e, t) {
            return i + t + "/" + e;
          }(e, n);

          h(o, t, function (e) {
            void 0 !== e ? n === d.STRING || n === d.DIALOG || n === d.GENERIC_MESSAGE ? r(e, !0) : r(void 0, !0) : (console.error("Empty response for: " + o), r(void 0, !1));
          });
        }, e.listResources = function (e, t) {
          f(r + e, function (e) {
            if (void 0 !== e) {
              var _n9 = JSON.parse(e);

              if (void 0 !== _n9) return void t(_n9);
            }

            console.error("Empty response from " + r), t([]);
          });
        }, e.listScriptClasses = function () {
          if (void 0 !== l) return l;
          var e = Object.keys(p).filter(function (e) {
            try {
              return p[e].prototype instanceof S;
            } catch (e) {
              return !1;
            }
          }),
              t = new Map();

          var _iterator15 = _createForOfIteratorHelper(e),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _n10 = _step15.value;
              t.set(_n10, p[_n10].tooltip);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          return l = t, t;
        }, e.listScriptActions = function (e) {
          if (u.has(e)) return u.get(e);
          var t = new p[e](void 0, void 0, void 0),
              n = Object.getOwnPropertyNames(Object.getPrototypeOf(t)).filter(function (e) {
            try {
              return "constructor" !== e && !o.isEmpty(e) && "function" == typeof t[e];
            } catch (e) {
              return !1;
            }
          });
          return u.set(e, n), n;
        }, e.listEventStateConditions = function () {
          return Object.keys(w);
        };
      }(D || (D = {})), function (e) {
        e.loadTileset = function (e, t, n) {
          D.load(e + "", d.TILESET, function (r) {
            if (o.isEmpty(r)) console.error("Error while loading tileset: " + e), n();else try {
              var _e25 = JSON.parse(r);

              n(_e25);
            } catch (r) {
              "SyntaxError" === r.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === r.name ? console.error("Error while reading tileset: " + e) : console.error(r), l.showError(t), n();
            }
          });
        }, e.initTransientData = function (e) {
          void 0 !== e.imageData && (e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height);
        };
      }(L || (L = {}));

      var N,
          $ = window.requestAnimationFrame || function (e) {
        return window.setTimeout(e, 40), Math.floor(100 * Math.random());
      },
          R = window.cancelAnimationFrame;

      var j = /*#__PURE__*/function (_ref) {
        _inherits(j, _ref);

        var _super4 = _createSuper(j);

        function j(e, t) {
          var _this;

          _classCallCheck(this, j);

          _this = _super4.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.launcher = t;
          return _this;
        }

        _createClass(j, [{
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            if (!_get(_getPrototypeOf(j.prototype), "mainGameLoop_pre", this).call(this)) return !1;
            var e = !1,
                t = this,
                n = o.now();

            if (!o.isEmpty(this.hero)) {
              var _r4 = E.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

              void 0 !== _r4 && this.launcher(this.hero, this, this.hero, _r4), e = E.manageMovements(this.map, this.grid, this.hero, function (e, n) {
                t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
              }, function (e, n) {
                t.focus.x += e, t.focus.y += n;
              });
            }

            if (!o.isEmpty(this.map.events)) {
              var _iterator16 = _createForOfIteratorHelper(this.map.events),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var _t10 = _step16.value;

                  var _r5 = E.update(_t10, this, this.hero, this.action, n, this.pauseDuration);

                  void 0 !== _r5 && this.launcher(_t10, this, this.hero, _r5), e = e || E.manageMovements(this.map, this.grid, _t10, C, C);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              this.action = void 0;
            }

            return e && N.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
          }
        }, {
          key: "mainGameLoop_post",
          value: function mainGameLoop_post() {
            _get(_getPrototypeOf(j.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
          }
        }, {
          key: "getRedrawArea",
          value: function getRedrawArea(e) {
            var t = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth()),
                n = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
            return {
              x: t.min,
              y: n.min,
              h: n.max - n.min,
              w: t.max - t.min
            };
          }
        }, {
          key: "toggleFPS",
          value: function toggleFPS(e) {
            this.renderingConfiguration.showFPS = null != e ? e : !this.renderingConfiguration.showFPS;
          }
        }, {
          key: "renderFPS",
          value: function renderFPS() {
            var e = Math.floor(o.now() / 1e3);
            if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
              this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

              var _e26 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

              this.FPS = Math.ceil(_e26) + 2;
            }
            this.renderingConfiguration.showFPS && (this.context.fillStyle = s.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
          }
        }, {
          key: "renderDynamicElements",
          value: function renderDynamicElements(e, t, n, r, i, a, s) {
            try {
              E.isVisible(this.hero, e, t, n, r, i, a, s) && E.render(this.grid, this.hero, this.context, !0);
            } catch (e) {
              console.error(e);
            }

            if (!o.isEmpty(this.map.events)) {
              var _iterator17 = _createForOfIteratorHelper(this.map.events),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var _o7 = _step17.value;

                  try {
                    E.isVisible(_o7, e, t, n, r, i, a, s) && E.render(this.grid, _o7, this.context, !0, this.pointer);
                  } catch (e) {
                    console.error(e);
                  }
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            }
          }
        }, {
          key: "loadSave",
          value: function loadSave(e, t) {
            var n, r;

            if (void 0 === e) {
              if (!o.isEmpty(this.map)) return void t(!1);
              n = m.maps.start.map, r = y.getHero();
            } else this.save = e, n = e.currentMap, r = e.hero;

            var i = E.initTransientData(this.map, this.grid, r);
            void 0 === i ? console.error("Cannot initialize hero event") : this.hero = i, A.loadMapSave(this, n, r, t);
          }
        }, {
          key: "registerAction",
          value: function registerAction(e, t) {
            this.action = {
              i: e,
              j: t
            };
          }
        }, {
          key: "startHeroMovement",
          value: function startHeroMovement(e, t) {
            if (e < 0 || e >= this.map.width || t < 0 || t >= this.map.height) return !1;
            var n = this;
            return E.startMovement(this.hero, e, t, function (e) {
              n.registerAction(e.i, e.j);
            });
          }
        }, {
          key: "isDialogOpen",
          value: function isDialogOpen() {
            return void 0 !== this.dialogName && void 0 !== this.dialogSkin;
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(e) {
            void 0 === this.save && (this.save = y.getSave()), this.save.config.lang = e;
          }
        }, {
          key: "toggleNaturalScale",
          value: function toggleNaturalScale(e, t) {
            this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
          }
        }]);

        return j;
      }( /*#__PURE__*/function () {
        function _class(e) {
          _classCallCheck(this, _class);

          this.renderingConfiguration = new k(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
            i: 0,
            j: 0
          }), this.pointer = {
            i: 0,
            j: 0
          };
        }

        _createClass(_class, [{
          key: "start",
          value: function start(e) {
            this.changeScale();
            var t = this,
                n = $(function () {
              t.mainGameLoop(n);
            });
          }
        }, {
          key: "mainGameLoop",
          value: function mainGameLoop(e) {
            var t = this,
                n = $(function () {
              t.mainGameLoop(n);
            });
            !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : R(e);
          }
        }, {
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            return !0;
          }
        }, {
          key: "mainGameLoop_post",
          value: function mainGameLoop_post() {}
        }, {
          key: "renderPointer",
          value: function renderPointer() {
            if (void 0 !== this.pointer) {
              var _e27 = this.grid.mapCellToCanvas(this.pointer);

              this.context.save(), this.context.beginPath(), this.context.fillStyle = s.Color.YELLOW, this.context.scale(2, 1), this.context.arc(Math.floor((_e27.x + this.grid.cellW / 2) / 2), _e27.y + this.grid.cellH - 4, 8, 0, s.DOUBLE_PI), this.context.closePath(), this.context.globalAlpha = .4, this.context.fill(), this.context.restore();
            }
          }
        }, {
          key: "renderFocus",
          value: function renderFocus() {
            null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = s.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, s.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
          }
        }, {
          key: "toggleGrid",
          value: function toggleGrid(e) {
            this.renderingConfiguration.showGrid = null != e ? e : !this.renderingConfiguration.showGrid;
          }
        }, {
          key: "toggleGridMode",
          value: function toggleGridMode() {
            this.renderingConfiguration.showGrid ? this.renderingConfiguration.showBlocks ? (this.toggleGrid(), this.toggleBlocks()) : this.toggleBlocks() : this.toggleGrid();
          }
        }, {
          key: "toggleCellNumbering",
          value: function toggleCellNumbering(e) {
            this.renderingConfiguration.showCellNumbers = null != e ? e : !this.renderingConfiguration.showCellNumbers;
          }
        }, {
          key: "toggleFocus",
          value: function toggleFocus(e) {
            this.renderingConfiguration.showFocus = null != e ? e : !this.renderingConfiguration.showFocus;
          }
        }, {
          key: "toggleBlocks",
          value: function toggleBlocks(e) {
            this.renderingConfiguration.showBlocks = null != e ? e : !this.renderingConfiguration.showBlocks;
          }
        }, {
          key: "toggleOnTops",
          value: function toggleOnTops(e) {
            this.renderingConfiguration.showOnTops = null != e ? e : !this.renderingConfiguration.showOnTops;
          }
        }, {
          key: "toggleAntialiasing",
          value: function toggleAntialiasing(e) {
            this.renderingConfiguration.enableAntialiasing = null != e ? e : !this.renderingConfiguration.enableAntialiasing, "webkitImageSmoothingEnabled" in this.context && (this.context.webkitImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), "msImageSmoothingEnabled" in this.context && (this.context.msImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), void 0 !== this.context.imageSmoothingEnabled && (this.context.imageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing);
          }
        }, {
          key: "updatePointer",
          value: function updatePointer(e, t) {
            this.pointer = void 0 === e || void 0 === t ? void 0 : {
              i: e,
              j: t
            };
          }
        }, {
          key: "moveFocusToDirection",
          value: function moveFocusToDirection(e) {
            if (void 0 !== e) switch (e) {
              case 0:
                this.focus.y -= +this.grid.cellH;
                break;

              case 2:
                this.focus.y += +this.grid.cellH;
                break;

              case 3:
                this.focus.x -= +this.grid.cellW;
                break;

              case 1:
                this.focus.x += +this.grid.cellW;
                break;

              case 4:
                break;

              default:
                console.error("Unexpected case: " + e);
            }
            this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
          }
        }, {
          key: "moveFocusToTarget",
          value: function moveFocusToTarget(e) {
            this.focus = this.grid.mapCellToCanvas(e), this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
          }
        }, {
          key: "resetTranslation",
          value: function resetTranslation() {
            this.grid.resetTranslation();
          }
        }, {
          key: "reapplyTranslation",
          value: function reapplyTranslation() {
            this.grid.reappyTranslation();
          }
        }, {
          key: "changeScale",
          value: function changeScale() {
            try {
              this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.scale(this.grid.scaleX, this.grid.scaleY);
            } catch (e) {
              console.error(e);
            }
          }
        }, {
          key: "togglePause",
          value: function togglePause(e) {
            this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = o.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = o.now() - this.pauseStartTime, this.pauseStartTime = void 0);
          }
        }, {
          key: "changeMap",
          value: function changeMap(e, t) {
            this.togglePause(!0), o.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), this.map = e, this.changeTile(e.tileset.image, function (e) {
              setTimeout(function () {
                N.initTransientData(e), e.togglePause(!1);
              }), t(e);
            });
          }
        }, {
          key: "changeTile",
          value: function changeTile(e, t) {
            var n = this;
            L.loadTileset(e, this.context, function (r) {
              if (void 0 === r) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
              n.map.tileset = r, D.load(r.image, d.TILE, function (e) {
                n.map.tileset.imageData = e, t(n);
              });
            });
          }
        }, {
          key: "getSceneHeight",
          value: function getSceneHeight() {
            return this.map.height;
          }
        }, {
          key: "getSceneWidth",
          value: function getSceneWidth() {
            return this.map.width;
          }
        }, {
          key: "render",
          value: function render(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var r = this.redrawArea.y,
                i = this.redrawArea.y + this.redrawArea.h,
                l = this.redrawArea.x,
                c = this.redrawArea.x + this.redrawArea.w;

            if (!o.isEmpty(e) && void 0 !== e.tileset.imageData) {
              for (var _u2 = r; _u2 <= i; _u2++) {
                for (var _r6 = l; _r6 <= c; _r6++) {
                  var _i10 = a.cellToGid({
                    i: _r6,
                    j: _u2
                  }, e.width);

                  for (var _l4 = s.MapLayer.LOW; _l4 <= s.MapLayer.TOP; _l4++) {
                    var _s4 = this.map.layers[_l4];
                    if (void 0 === _s4 || void 0 === _s4.data || _s4.data.length < _i10) continue;
                    var _c = _s4.data[_i10];
                    if (o.isEmpty(_c)) continue;
                    var _d2 = 0;
                    void 0 !== e.tileset.onTop && (_d2 = a.normalizeZIndex(e.tileset.onTop[_c])), 0 !== _d2 && n || (this.applyLayerCustomizations(_l4), o.isEmpty(_s4.opacity) || (t.globalAlpha = _s4.opacity), this.renderCell(t, e.tileset, _c, _r6, _u2), t.globalAlpha = 1, this.removeLayerCustomizations(_l4));
                  }

                  N.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _r6, _u2, !1);
                }
              }

              this.renderPointer();

              for (var _u3 = r; _u3 <= i; _u3++) {
                for (var _i11 = l; _i11 <= c && n; _i11++) {
                  for (var _n11 = r; _n11 <= _u3; _n11++) {
                    var _r7 = a.cellToGid({
                      i: _i11,
                      j: _n11
                    }, e.width);

                    for (var _l5 = s.MapLayer.LOW; _l5 <= s.MapLayer.TOP; _l5++) {
                      var _s5 = this.map.layers[_l5];
                      if (void 0 === _s5 || void 0 === _s5.data || _s5.data.length < _r7) continue;
                      var _c2 = _s5.data[_r7];
                      if (o.isEmpty(_c2)) continue;
                      var _d3 = 0;
                      void 0 !== e.tileset.onTop && (_d3 = a.normalizeZIndex(e.tileset.onTop[_c2])), _d3 > 0 && _n11 + _d3 === _u3 && (this.applyLayerCustomizations(_l5), o.isEmpty(_s5.opacity) || (t.globalAlpha = _s5.opacity), this.renderCell(t, e.tileset, _c2, _i11, _n11), t.globalAlpha = 1, this.removeLayerCustomizations(_l5));
                    }
                  }
                }

                for (var _e28 = l; _e28 <= c; _e28++) {
                  this.renderDynamicElements(r, i, l, c, _e28, _u3, !1);
                }
              }

              for (var _e29 = r; _e29 <= i; _e29++) {
                for (var _t11 = l; _t11 <= c; _t11++) {
                  this.renderDynamicElements(r, i, l, c, _t11, _e29, !0), N.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t11, _e29, !0);
                }
              }
            }

            N.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
          }
        }, {
          key: "renderCell",
          value: function renderCell(e, t, n, r, i) {
            var o = a.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
            e.drawImage(t.imageData, Math.floor(o.i * this.grid.cellW), Math.floor(o.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(r * this.grid.cellW), Math.floor(i * this.grid.cellH), this.grid.cellW, this.grid.cellH);
          }
        }, {
          key: "applyLayerCustomizations",
          value: function applyLayerCustomizations(e) {}
        }, {
          key: "removeLayerCustomizations",
          value: function removeLayerCustomizations(e) {}
        }, {
          key: "onFocusCellChange",
          value: function onFocusCellChange() {}
        }, {
          key: "onFocusPixelChange",
          value: function onFocusPixelChange(e, t) {}
        }, {
          key: "getMap",
          value: function getMap() {
            return this.map;
          }
        }]);

        return _class;
      }());

      !function (e) {
        function t(e, t) {
          t.dynamicBlocks = [];

          for (var _e30 = 0; _e30 < t.height * t.width; _e30++) {
            t.dynamicBlocks[_e30] = 0;
          }

          var n = new Array();
          void 0 !== e && n.push(e), void 0 !== t.events && (n = n.concat(t.events));

          var _iterator18 = _createForOfIteratorHelper(n),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _e31 = _step18.value;

              var _n12 = E.getState(_e31);

              if (void 0 === _n12 || o.isEmpty(_n12.block) || _n12.block) {
                var _n13 = a.cellToGid(_e31, t.width);

                t.dynamicBlocks[_n13] = h.ALL;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }

        function n(e, t, n, r, i) {
          var o = a.getDirectionTarget({
            i: t,
            j: n
          }, r),
              s = !1;
          return void 0 !== i && 4 === a.getDirection(o, i) && (s = !0), a.isMovementBlocked(e, t, n, r, s);
        }

        e.loadMap = function (e, t, n) {
          D.load(e + "", d.MAP, function (r) {
            if (o.isEmpty(r)) console.error("Error while loading map: " + e), n();else try {
              var _e32 = JSON.parse(r);

              if (!o.isEmpty(_e32.events)) {
                _e32.maxEventId = 0;

                var _iterator19 = _createForOfIteratorHelper(_e32.events),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _t12 = _step19.value;
                    _t12.id > _e32.maxEventId && (_e32.maxEventId = _t12.id);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
              }

              n(_e32);
            } catch (i) {
              "SyntaxError" === i.name ? console.error("Error while parsing map: " + e) : "TypeError" === i.name ? console.error("Error while reading map: " + e) : console.error(i), console.error(r), l.showError(t.getContext("2d")), n();
            }
          });
        }, e.renderUI = function (e, t, n, r, i, l, c) {
          if ((c || r.showGrid || r.showEditorGrid || r.showFocus || r.showBlocks || r.showOnTops) && (!c || r.showFPS || r.showCellNumbers || r.showFocus) && !o.isEmpty(r)) {
            if (!c && r.showBlocks && !o.isEmpty(e) && (!o.isEmpty(e.blocks) || !o.isEmpty(e.dynamicBlocks))) {
              n.save(), n.globalAlpha = .5, n.fillStyle = s.Color.YELLOW, n.strokeStyle = s.Color.BLACK, n.lineWidth = 2;

              var _r8 = o.isEmpty(e.blocks) ? h.NONE : e.blocks[l * e.width + i],
                  _c3 = o.isEmpty(e.dynamicBlocks) ? h.NONE : e.dynamicBlocks[l * e.width + i];

              (_r8 > h.NONE || _c3 > h.NONE) && (_c3 > h.NONE && (n.fillStyle = s.Color.GREEN), a.isBlockDirectionBlocked(_r8 | _c3, h.UP) && (n.beginPath(), n.moveTo(i * t.cellW, l * t.cellH), n.lineTo((i + .5) * t.cellW, (l + .2) * t.cellH), n.lineTo((i + 1) * t.cellW, l * t.cellH), n.fill(), n.stroke()), a.isBlockDirectionBlocked(_r8 | _c3, h.DOWN) && (n.beginPath(), n.moveTo(i * t.cellW, (l + 1) * t.cellH), n.lineTo((i + .5) * t.cellW, (l + .8) * t.cellH), n.lineTo((i + 1) * t.cellW, (l + 1) * t.cellH), n.fill(), n.stroke()), a.isBlockDirectionBlocked(_r8 | _c3, h.LEFT) && (n.beginPath(), n.moveTo(i * t.cellW, l * t.cellH), n.lineTo((i + .2) * t.cellW, (l + .5) * t.cellH), n.lineTo(i * t.cellW, (l + 1) * t.cellH), n.fill(), n.stroke()), a.isBlockDirectionBlocked(_r8 | _c3, h.RIGHT) && (n.beginPath(), n.moveTo((i + 1) * t.cellW, l * t.cellH), n.lineTo((i + .8) * t.cellW, (l + .5) * t.cellH), n.lineTo((i + 1) * t.cellW, (l + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
            }

            if (!c && r.showOnTops && !o.isEmpty(e) && !o.isEmpty(e.tileset.onTop)) {
              var _r9 = a.cellToGid({
                i: i,
                j: l
              }, e.width);

              a.normalizeZIndex(e.tileset.onTop[_r9]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = s.Color.AQUA, n.arc(Math.floor((i + .5) * t.cellW), Math.floor((l + .5) * t.cellH), 10, 0, s.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = s.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_r9], (i + .35) * t.cellW, (l + .65) * t.cellH), n.restore());
            }

            !c && r.showGrid && (n.strokeStyle = s.Color.RED, n.strokeRect(i * t.cellW, l * t.cellH, t.cellW, t.cellH)), !c && r.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = s.Color.GREY, n.strokeRect(i * t.cellW, l * t.cellH, t.cellW, t.cellH), n.restore()), !c && r.showCellNumbers && (n.fillStyle = s.Color.RED, n.font = "bold 10px Arial", n.fillText(i + "," + l, i * t.cellW + 1, l * t.cellH + 10));
          }
        }, e.renderGlobalUI = function (e, t, n) {
          if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
            var _r10, _i12;

            t.save();
            var _o8 = e.cellW,
                _a4 = e.cellH;

            if (void 0 !== n.selectCellStart) {
              if (_r10 = n.selectCellStart.i * e.cellW, _i12 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
                var _t13 = n.selectCellEnd.i * e.cellW,
                    _s6 = n.selectCellEnd.j * e.cellH;

                _r10 > _t13 ? (_o8 = _r10 - _t13, _r10 = _t13) : _o8 = _t13 - _r10, _i12 > _s6 ? (_a4 = _i12 - _s6, _i12 = _s6) : _a4 = _s6 - _i12, _o8 += e.cellW, _a4 += e.cellH;
              }

              t.strokeStyle = s.Color.RED, t.lineWidth = 3;
            } else _r10 = n.selectEventCell.i * e.cellW, _i12 = n.selectEventCell.j * e.cellH, t.strokeStyle = s.Color.LIME, t.lineWidth = 2;

            t.strokeRect(_r10, _i12, _o8, _a4), t.restore();
          }
        }, e.resizeMap = function (e, t, n) {
          var r = e.width,
              i = n,
              a = e.height,
              s = t;
          if (r === i && a === s || o.isEmpty(e)) return;
          var l,
              c,
              u = Math.min(r, i);
          if (i < r) l = r - i;else {
            c = [];

            for (var _e33 = 0; _e33 < i - r; _e33++) {
              c[_e33] = void 0;
            }
          }

          for (var _t14 = 0; _t14 < e.layers.length; _t14++) {
            var _n14 = e.layers[_t14];

            if (void 0 !== _n14.data) {
              if (r !== i) for (var _e34 = 0; _e34 < a; _e34++) {
                void 0 !== l ? _n14.data.splice(u + _e34 * i, l) : void 0 !== c ? _n14.data.splice(u + _e34 * i, 0, c) : console.error("Unexpected case");
              }

              if (a > s && (_n14.data.length = i * s), a < s) {
                var _e35 = [];

                for (var _t15 = 0; _t15 < i - r; _t15++) {
                  _e35[_t15] = void 0;
                }

                for (var _t16 = r; _t16 < i; _t16++) {
                  _n14.data.concat(_e35);
                }
              }
            }
          }

          e.height = t, e.width = n;
        }, e.initTransientData = function (e) {
          var n,
              r = e.map,
              i = e.grid;
          if (e instanceof j && (n = e.hero), L.initTransientData(r.tileset), function (e) {
            if (e.blocks = [], !o.isEmpty(e.layers) && !o.isEmpty(e.tileset.blocks)) {
              for (var _t17 = 0; _t17 < e.height * e.width; _t17++) {
                e.blocks[_t17] = 0;
              }

              for (var _t18 = 0; _t18 < e.layers.length; _t18++) {
                var _n15 = e.layers[_t18];
                if (void 0 !== _n15.data) for (var _t19 = 0; _t19 < _n15.data.length; _t19++) {
                  var _r11 = _n15.data[_t19];
                  if (o.isEmpty(_r11) || _r11 < 0 || _r11 >= e.tileset.blocks.length) continue;
                  if (void 0 !== e.tileset.onTop && a.normalizeZIndex(e.tileset.onTop[_r11]) > 0) continue;
                  var _i13 = e.tileset.blocks[_r11];
                  o.isEmpty(_i13) && (_i13 = h.NONE), e.blocks[_t19] = _i13;
                }
              }
            }
          }(r), t(n, r), o.isEmpty(r.events)) r.events = [];else {
            var _iterator20 = _createForOfIteratorHelper(r.events),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var _e36 = _step20.value;
                E.initTransientData(r, i, _e36);
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
          r.width = parseInt(r.width + ""), r.height = parseInt(r.height + "");
        }, e.updateDynamicData = function (e, n) {
          t(e, n);
        }, e.isMovementTowardsTargetBlocked = n, e.pathFinder = function (e, t, r) {
          var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : i.D_STAR_LITE;
          var l = o.now(),
              c = r.i - t.i,
              u = r.j - t.j;
          if (0 === c && 0 === u) return 4;
          {
            var _N = 4;

            switch (s) {
              case i.BASIC:
                Math.abs(c) > Math.abs(u) ? (_N = c > 0 ? 1 : 3, n(e, t.i, t.j, _N, r) && (_N = u > 0 ? 2 : 0)) : (_N = u > 0 ? 2 : 0, n(e, t.i, t.j, _N, r) && (_N = c > 0 ? 1 : 3)), n(e, t.i, t.j, _N, r) && (_N = 4);
                break;

              case i.D_STAR_LITE:
                {
                  var y = function y(e) {
                    return [Math.min(w(e), S(e)) + I(v, e) + _i14, Math.min(w(e), S(e))];
                  };

                  var b = function b(e) {
                    w(e) !== S(e) ? (e.key = y(e), M(e)) : function (e) {
                      var _iterator21 = _createForOfIteratorHelper(f),
                          _step21;

                      try {
                        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                          var _t20 = _step21.value;
                          if (O(e, _t20)) return !0;
                        }
                      } catch (err) {
                        _iterator21.e(err);
                      } finally {
                        _iterator21.f();
                      }

                      return !1;
                    }(e) && D(e);
                  };

                  var _ = function _(e, t) {
                    t > _n16 && (t = _n16);
                    var r = a.cellToGid(e.cell, m);
                    p[r] = t;
                  };

                  var A = function A(e, t) {
                    t > _n16 && (t = _n16);
                    var r = a.cellToGid(e.cell, m);
                    h[r] = t;
                  };

                  var w = function w(e) {
                    var t = a.cellToGid(e.cell, m);
                    return p[t];
                  };

                  var S = function S(e) {
                    var t = a.cellToGid(e.cell, m);
                    return h[t];
                  };

                  var k = function k(t) {
                    var n = a.cellToGid(t.cell, e.width),
                        r = [];
                    return 0 !== t.cell.i && r.push(d[n - 1]), t.cell.i < e.width - 1 && r.push(d[n + 1]), n - e.width >= 0 && r.push(d[n - e.width]), n + e.width < d.length && r.push(d[n + e.width]), r;
                  };

                  var C = function C(t) {
                    var n = a.cellToGid(t.cell, e.width),
                        r = [];
                    return 0 !== t.cell.i && r.push(d[n - 1]), t.cell.i < e.width - 1 && r.push(d[n + 1]), n - e.width >= 0 && r.push(d[n - e.width]), n + e.width < d.length && r.push(d[n + e.width]), r;
                  };

                  var T = function T(t, r) {
                    var i = a.getDirection(r.cell, t.cell),
                        o = 4 === a.getDirection(r.cell, g.cell);
                    return a.isMovementBlocked(e, t.cell.i, t.cell.j, i, o) ? _n16 : 1;
                  };

                  var I = function I(e, t) {
                    return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
                  };

                  var x = function x(e, t) {
                    return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
                  };

                  var O = function O(e, t) {
                    return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
                  };

                  var M = function M(e) {
                    var _iterator22 = _createForOfIteratorHelper(f),
                        _step22;

                    try {
                      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                        var _t21 = _step22.value;
                        if (O(e, _t21)) return void (_t21.key = e.key);
                      }
                    } catch (err) {
                      _iterator22.e(err);
                    } finally {
                      _iterator22.f();
                    }

                    f.push(e);
                  };

                  var D = function D(e) {
                    var t = [];

                    var _iterator23 = _createForOfIteratorHelper(f),
                        _step23;

                    try {
                      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                        var _n17 = _step23.value;
                        O(e, _n17) || t.push(_n17);
                      }
                    } catch (err) {
                      _iterator23.e(err);
                    } finally {
                      _iterator23.f();
                    }

                    f = t;
                  };

                  var L = function L() {
                    var e;

                    var _iterator24 = _createForOfIteratorHelper(f),
                        _step24;

                    try {
                      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                        var _t22 = _step24.value;
                        (void 0 === e || x(_t22.key, e.key) < 0) && (e = _t22);
                      }
                    } catch (err) {
                      _iterator24.e(err);
                    } finally {
                      _iterator24.f();
                    }

                    return void 0 === e && (e = {
                      cell: {
                        i: -1,
                        j: -1
                      },
                      key: [_n16, _n16]
                    }), e;
                  };

                  var d, f, p, h;
                  var _n16 = Number.MAX_SAFE_INTEGER;
                  var v, g;
                  var _i14 = 0;
                  var m = e.width;
                  v = {
                    cell: t
                  }, g = {
                    cell: r
                  }, _N = function () {
                    for (function () {
                      d = [];

                      for (var _t23 = 0; _t23 < e.height; _t23++) {
                        for (var _n19 = 0; _n19 < e.width; _n19++) {
                          var _e38 = {
                            cell: {
                              i: _n19,
                              j: _t23
                            }
                          };
                          d.push(_e38);
                        }
                      }

                      p = [], h = [], f = [], _i14 = 0;

                      var _iterator25 = _createForOfIteratorHelper(d),
                          _step25;

                      try {
                        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                          var _e39 = _step25.value;
                          _(_e39, _n16), A(_e39, _n16);
                        }
                      } catch (err) {
                        _iterator25.e(err);
                      } finally {
                        _iterator25.f();
                      }

                      A(g, 0);
                      var t = g;
                      t.key = [I(v, g), 0], f.push(t);
                    }(), function () {
                      for (; x(L().key, y(v)) < 0 || S(v) > w(v);) {
                        var _e40 = L(),
                            _t24 = _e40,
                            _r12 = _e40.key,
                            _i15 = y(_t24);

                        if (x(_r12, _i15) < 0) _t24.key = _i15, M(_t24);else if (w(_t24) > S(_t24)) {
                          _(_t24, S(_t24)), D(_t24);

                          var _iterator26 = _createForOfIteratorHelper(C(_t24)),
                              _step26;

                          try {
                            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                              var _e41 = _step26.value;
                              O(_e41, g) || A(_e41, Math.min(S(_e41), T(_e41, _t24) + w(_t24))), b(_e41);
                            }
                          } catch (err) {
                            _iterator26.e(err);
                          } finally {
                            _iterator26.f();
                          }
                        } else {
                          var _e42 = w(_t24);

                          _(_t24, _n16);

                          var _r13 = C(_t24);

                          _r13.push(_t24);

                          var _iterator27 = _createForOfIteratorHelper(_r13),
                              _step27;

                          try {
                            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                              var _i16 = _step27.value;

                              if ((S(_i16) === T(_i16, _t24) + _e42 || S(_i16) === _n16 && (T(_i16, _t24) === _n16 || _e42 === _n16)) && !O(_i16, g)) {
                                var _e43 = void 0;

                                var _iterator28 = _createForOfIteratorHelper(k(_i16)),
                                    _step28;

                                try {
                                  for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                                    var _t25 = _step28.value;

                                    var _r14 = T(_i16, _t25) + w(_t25);

                                    _r14 > _n16 && (_r14 = _n16), (void 0 === _e43 || _e43 > _r14) && (_e43 = _r14);
                                  }
                                } catch (err) {
                                  _iterator28.e(err);
                                } finally {
                                  _iterator28.f();
                                }

                                A(_i16, _e43);
                              }

                              b(_i16);
                            }
                          } catch (err) {
                            _iterator27.e(err);
                          } finally {
                            _iterator27.f();
                          }
                        }
                      }
                    }(); !O(v, g);) {
                      var _e37 = void 0,
                          _n18 = void 0;

                      var _iterator29 = _createForOfIteratorHelper(k(v)),
                          _step29;

                      try {
                        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                          var _t26 = _step29.value;

                          var _r15 = T(v, _t26) + w(_t26);

                          (void 0 === _n18 || _n18 > _r15) && (_n18 = _r15, _e37 = _t26);
                        }
                      } catch (err) {
                        _iterator29.e(err);
                      } finally {
                        _iterator29.f();
                      }

                      return v = _e37, a.getDirection(v.cell, t);
                    }

                    return 4;
                  }();
                }
            }

            4 !== _N && (E.addDirectionToPath(t, _N, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && a.isDirectionsOpposed(t.path[0], t.path[1]) && (_N = 4));

            var _$ = o.now() - l;

            return _$ > 10 && console.debug("Path found in: " + _$), _N;
          }
        };
      }(N || (N = {}));
      var F = Object.freeze({});

      function P(e) {
        return null == e;
      }

      function B(e) {
        return null != e;
      }

      function U(e) {
        return !0 === e;
      }

      function H(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == _typeof(e) || "boolean" == typeof e;
      }

      function G(e) {
        return null !== e && "object" == _typeof(e);
      }

      var W = Object.prototype.toString;

      function V(e) {
        return "[object Object]" === W.call(e);
      }

      function Y(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }

      function q(e) {
        return B(e) && "function" == typeof e.then && "function" == typeof e["catch"];
      }

      function z(e) {
        return null == e ? "" : Array.isArray(e) || V(e) && e.toString === W ? JSON.stringify(e, null, 2) : String(e);
      }

      function K(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }

      function J(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
          n[r[i]] = !0;
        }

        return t ? function (e) {
          return n[e.toLowerCase()];
        } : function (e) {
          return n[e];
        };
      }

      var Q = J("slot,component", !0),
          X = J("key,ref,slot,slot-scope,is");

      function Z(e, t) {
        if (e.length) {
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1);
        }
      }

      var ee = Object.prototype.hasOwnProperty;

      function te(e, t) {
        return ee.call(e, t);
      }

      function ne(e) {
        var t = Object.create(null);
        return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }

      var re = /-(\w)/g,
          ie = ne(function (e) {
        return e.replace(re, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }),
          oe = ne(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }),
          ae = /\B([A-Z])/g,
          se = ne(function (e) {
        return e.replace(ae, "-$1").toLowerCase();
      }),
          le = Function.prototype.bind ? function (e, t) {
        return e.bind(t);
      } : function (e, t) {
        function n(n) {
          var r = arguments.length;
          return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
        }

        return n._length = e.length, n;
      };

      function ce(e, t) {
        t = t || 0;

        for (var n = e.length - t, r = new Array(n); n--;) {
          r[n] = e[n + t];
        }

        return r;
      }

      function ue(e, t) {
        for (var n in t) {
          e[n] = t[n];
        }

        return e;
      }

      function de(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          e[n] && ue(t, e[n]);
        }

        return t;
      }

      function fe(e, t, n) {}

      var pe = function pe(e, t, n) {
        return !1;
      },
          he = function he(e) {
        return e;
      };

      function ve(e, t) {
        if (e === t) return !0;
        var n = G(e),
            r = G(t);
        if (!n || !r) return !n && !r && String(e) === String(t);

        try {
          var i = Array.isArray(e),
              o = Array.isArray(t);
          if (i && o) return e.length === t.length && e.every(function (e, n) {
            return ve(e, t[n]);
          });
          if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
          if (i || o) return !1;
          var a = Object.keys(e),
              s = Object.keys(t);
          return a.length === s.length && a.every(function (n) {
            return ve(e[n], t[n]);
          });
        } catch (e) {
          return !1;
        }
      }

      function ge(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (ve(e[n], t)) return n;
        }

        return -1;
      }

      function me(e) {
        var t = !1;
        return function () {
          t || (t = !0, e.apply(this, arguments));
        };
      }

      var ye = "data-server-rendered",
          be = ["component", "directive", "filter"],
          _e = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
          Ee = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: pe,
        isReservedAttr: pe,
        isUnknownElement: pe,
        getTagNamespace: fe,
        parsePlatformTagName: he,
        mustUseProp: pe,
        async: !0,
        _lifecycleHooks: _e
      },
          Ae = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

      function we(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
      }

      function Se(e, t, n, r) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0
        });
      }

      var ke,
          Ce = new RegExp("[^" + Ae.source + ".$_\\d]"),
          Te = ("__proto__" in {}),
          Ie = "undefined" != typeof window,
          xe = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
          Oe = xe && WXEnvironment.platform.toLowerCase(),
          Me = Ie && window.navigator.userAgent.toLowerCase(),
          De = Me && /msie|trident/.test(Me),
          Le = Me && Me.indexOf("msie 9.0") > 0,
          Ne = Me && Me.indexOf("edge/") > 0,
          $e = (Me && Me.indexOf("android"), Me && /iphone|ipad|ipod|ios/.test(Me) || "ios" === Oe),
          Re = (Me && /chrome\/\d+/.test(Me), Me && /phantomjs/.test(Me), Me && Me.match(/firefox\/(\d+)/)),
          je = {}.watch,
          Fe = !1;
      if (Ie) try {
        var Pe = {};
        Object.defineProperty(Pe, "passive", {
          get: function get() {
            Fe = !0;
          }
        }), window.addEventListener("test-passive", null, Pe);
      } catch (e) {}

      var Be = function Be() {
        return void 0 === ke && (ke = !Ie && !xe && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), ke;
      },
          Ue = Ie && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

      function He(e) {
        return "function" == typeof e && /native code/.test(e.toString());
      }

      var Ge,
          We = "undefined" != typeof Symbol && He(Symbol) && "undefined" != typeof Reflect && He(Reflect.ownKeys);
      Ge = "undefined" != typeof Set && He(Set) ? Set : function () {
        function e() {
          this.set = Object.create(null);
        }

        return e.prototype.has = function (e) {
          return !0 === this.set[e];
        }, e.prototype.add = function (e) {
          this.set[e] = !0;
        }, e.prototype.clear = function () {
          this.set = Object.create(null);
        }, e;
      }();

      var Ve = fe,
          Ye = 0,
          qe = function qe() {
        this.id = Ye++, this.subs = [];
      };

      qe.prototype.addSub = function (e) {
        this.subs.push(e);
      }, qe.prototype.removeSub = function (e) {
        Z(this.subs, e);
      }, qe.prototype.depend = function () {
        qe.target && qe.target.addDep(this);
      }, qe.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
          e[t].update();
        }
      }, qe.target = null;
      var ze = [];

      function Ke(e) {
        ze.push(e), qe.target = e;
      }

      function Je() {
        ze.pop(), qe.target = ze[ze.length - 1];
      }

      var Qe = function Qe(e, t, n, r, i, o, a, s) {
        this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
      },
          Xe = {
        child: {
          configurable: !0
        }
      };

      Xe.child.get = function () {
        return this.componentInstance;
      }, Object.defineProperties(Qe.prototype, Xe);

      var Ze = function Ze(e) {
        void 0 === e && (e = "");
        var t = new Qe();
        return t.text = e, t.isComment = !0, t;
      };

      function et(e) {
        return new Qe(void 0, void 0, void 0, String(e));
      }

      function tt(e) {
        var t = new Qe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
      }

      var nt = Array.prototype,
          rt = Object.create(nt);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
        var t = nt[e];
        Se(rt, e, function () {
          for (var n = [], r = arguments.length; r--;) {
            n[r] = arguments[r];
          }

          var i,
              o = t.apply(this, n),
              a = this.__ob__;

          switch (e) {
            case "push":
            case "unshift":
              i = n;
              break;

            case "splice":
              i = n.slice(2);
          }

          return i && a.observeArray(i), a.dep.notify(), o;
        });
      });
      var it = Object.getOwnPropertyNames(rt),
          ot = !0;

      function at(e) {
        ot = e;
      }

      var st = function st(e) {
        this.value = e, this.dep = new qe(), this.vmCount = 0, Se(e, "__ob__", this), Array.isArray(e) ? (Te ? function (e, t) {
          e.__proto__ = t;
        }(e, rt) : function (e, t, n) {
          for (var r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            Se(e, o, t[o]);
          }
        }(e, rt, it), this.observeArray(e)) : this.walk(e);
      };

      function lt(e, t) {
        var n;
        if (G(e) && !(e instanceof Qe)) return te(e, "__ob__") && e.__ob__ instanceof st ? n = e.__ob__ : ot && !Be() && (Array.isArray(e) || V(e)) && Object.isExtensible(e) && !e._isVue && (n = new st(e)), t && n && n.vmCount++, n;
      }

      function ct(e, t, n, r, i) {
        var o = new qe(),
            a = Object.getOwnPropertyDescriptor(e, t);

        if (!a || !1 !== a.configurable) {
          var s = a && a.get,
              l = a && a.set;
          s && !l || 2 !== arguments.length || (n = e[t]);
          var c = !i && lt(n);
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              var t = s ? s.call(e) : n;
              return qe.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && ft(t))), t;
            },
            set: function set(t) {
              var r = s ? s.call(e) : n;
              t === r || t != t && r != r || s && !l || (l ? l.call(e, t) : n = t, c = !i && lt(t), o.notify());
            }
          });
        }
      }

      function ut(e, t, n) {
        if (Array.isArray(e) && Y(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (ct(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n);
      }

      function dt(e, t) {
        if (Array.isArray(e) && Y(t)) e.splice(t, 1);else {
          var n = e.__ob__;
          e._isVue || n && n.vmCount || te(e, t) && (delete e[t], n && n.dep.notify());
        }
      }

      function ft(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++) {
          (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && ft(t);
        }
      }

      st.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
          ct(e, t[n]);
        }
      }, st.prototype.observeArray = function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          lt(e[t]);
        }
      };
      var pt = Ee.optionMergeStrategies;

      function ht(e, t) {
        if (!t) return e;

        for (var n, r, i, o = We ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) {
          "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], te(e, n) ? r !== i && V(r) && V(i) && ht(r, i) : ut(e, n, i));
        }

        return e;
      }

      function vt(e, t, n) {
        return n ? function () {
          var r = "function" == typeof t ? t.call(n, n) : t,
              i = "function" == typeof e ? e.call(n, n) : e;
          return r ? ht(r, i) : i;
        } : t ? e ? function () {
          return ht("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
        } : t : e;
      }

      function gt(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function (e) {
          for (var t = [], n = 0; n < e.length; n++) {
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          }

          return t;
        }(n) : n;
      }

      function mt(e, t, n, r) {
        var i = Object.create(e || null);
        return t ? ue(i, t) : i;
      }

      pt.data = function (e, t, n) {
        return n ? vt(e, t, n) : t && "function" != typeof t ? e : vt(e, t);
      }, _e.forEach(function (e) {
        pt[e] = gt;
      }), be.forEach(function (e) {
        pt[e + "s"] = mt;
      }), pt.watch = function (e, t, n, r) {
        if (e === je && (e = void 0), t === je && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var i = {};

        for (var o in ue(i, e), t) {
          var a = i[o],
              s = t[o];
          a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
        }

        return i;
      }, pt.props = pt.methods = pt.inject = pt.computed = function (e, t, n, r) {
        if (!e) return t;
        var i = Object.create(null);
        return ue(i, e), t && ue(i, t), i;
      }, pt.provide = vt;

      var yt = function yt(e, t) {
        return void 0 === t ? e : t;
      };

      function bt(e, t, n) {
        if ("function" == typeof t && (t = t.options), function (e, t) {
          var n = e.props;

          if (n) {
            var r,
                i,
                o = {};
            if (Array.isArray(n)) for (r = n.length; r--;) {
              "string" == typeof (i = n[r]) && (o[ie(i)] = {
                type: null
              });
            } else if (V(n)) for (var a in n) {
              i = n[a], o[ie(a)] = V(i) ? i : {
                type: i
              };
            }
            e.props = o;
          }
        }(t), function (e, t) {
          var n = e.inject;

          if (n) {
            var r = e.inject = {};
            if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
              r[n[i]] = {
                from: n[i]
              };
            } else if (V(n)) for (var o in n) {
              var a = n[o];
              r[o] = V(a) ? ue({
                from: o
              }, a) : {
                from: a
              };
            }
          }
        }(t), function (e) {
          var t = e.directives;
          if (t) for (var n in t) {
            var r = t[n];
            "function" == typeof r && (t[n] = {
              bind: r,
              update: r
            });
          }
        }(t), !t._base && (t["extends"] && (e = bt(e, t["extends"], n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) {
          e = bt(e, t.mixins[r], n);
        }
        var o,
            a = {};

        for (o in e) {
          s(o);
        }

        for (o in t) {
          te(e, o) || s(o);
        }

        function s(r) {
          var i = pt[r] || yt;
          a[r] = i(e[r], t[r], n, r);
        }

        return a;
      }

      function _t(e, t, n, r) {
        if ("string" == typeof n) {
          var i = e[t];
          if (te(i, n)) return i[n];
          var o = ie(n);
          if (te(i, o)) return i[o];
          var a = oe(o);
          return te(i, a) ? i[a] : i[n] || i[o] || i[a];
        }
      }

      function Et(e, t, n, r) {
        var i = t[e],
            o = !te(n, e),
            a = n[e],
            s = St(Boolean, i.type);
        if (s > -1) if (o && !te(i, "default")) a = !1;else if ("" === a || a === se(e)) {
          var l = St(String, i.type);
          (l < 0 || s < l) && (a = !0);
        }

        if (void 0 === a) {
          a = function (e, t, n) {
            if (te(t, "default")) {
              var r = t["default"];
              return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== At(t.type) ? r.call(e) : r;
            }
          }(r, i, e);

          var c = ot;
          at(!0), lt(a), at(c);
        }

        return a;
      }

      function At(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : "";
      }

      function wt(e, t) {
        return At(e) === At(t);
      }

      function St(e, t) {
        if (!Array.isArray(t)) return wt(t, e) ? 0 : -1;

        for (var n = 0, r = t.length; n < r; n++) {
          if (wt(t[n], e)) return n;
        }

        return -1;
      }

      function kt(e, t, n) {
        Ke();

        try {
          if (t) for (var r = t; r = r.$parent;) {
            var i = r.$options.errorCaptured;
            if (i) for (var o = 0; o < i.length; o++) {
              try {
                if (!1 === i[o].call(r, e, t, n)) return;
              } catch (e) {
                Tt(e, r, "errorCaptured hook");
              }
            }
          }
          Tt(e, t, n);
        } finally {
          Je();
        }
      }

      function Ct(e, t, n, r, i) {
        var o;

        try {
          (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && q(o) && !o._handled && (o["catch"](function (e) {
            return kt(e, r, i + " (Promise/async)");
          }), o._handled = !0);
        } catch (e) {
          kt(e, r, i);
        }

        return o;
      }

      function Tt(e, t, n) {
        if (Ee.errorHandler) try {
          return Ee.errorHandler.call(null, e, t, n);
        } catch (t) {
          t !== e && It(t);
        }
        It(e);
      }

      function It(e, t, n) {
        if (!Ie && !xe || "undefined" == typeof console) throw e;
        console.error(e);
      }

      var xt,
          Ot = !1,
          Mt = [],
          Dt = !1;

      function Lt() {
        Dt = !1;
        var e = Mt.slice(0);
        Mt.length = 0;

        for (var t = 0; t < e.length; t++) {
          e[t]();
        }
      }

      if ("undefined" != typeof Promise && He(Promise)) {
        var Nt = Promise.resolve();
        xt = function xt() {
          Nt.then(Lt), $e && setTimeout(fe);
        }, Ot = !0;
      } else if (De || "undefined" == typeof MutationObserver || !He(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) xt = "undefined" != typeof setImmediate && He(setImmediate) ? function () {
        setImmediate(Lt);
      } : function () {
        setTimeout(Lt, 0);
      };else {
        var $t = 1,
            Rt = new MutationObserver(Lt),
            jt = document.createTextNode(String($t));
        Rt.observe(jt, {
          characterData: !0
        }), xt = function xt() {
          $t = ($t + 1) % 2, jt.data = String($t);
        }, Ot = !0;
      }

      function Ft(e, t) {
        var n;
        if (Mt.push(function () {
          if (e) try {
            e.call(t);
          } catch (e) {
            kt(e, t, "nextTick");
          } else n && n(t);
        }), Dt || (Dt = !0, xt()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
          n = e;
        });
      }

      var Pt = new Ge();

      function Bt(e) {
        Ut(e, Pt), Pt.clear();
      }

      function Ut(e, t) {
        var n,
            r,
            i = Array.isArray(e);

        if (!(!i && !G(e) || Object.isFrozen(e) || e instanceof Qe)) {
          if (e.__ob__) {
            var o = e.__ob__.dep.id;
            if (t.has(o)) return;
            t.add(o);
          }

          if (i) for (n = e.length; n--;) {
            Ut(e[n], t);
          } else for (n = (r = Object.keys(e)).length; n--;) {
            Ut(e[r[n]], t);
          }
        }
      }

      var Ht = ne(function (e) {
        var t = "&" === e.charAt(0),
            n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return {
          name: e = r ? e.slice(1) : e,
          once: n,
          capture: r,
          passive: t
        };
      });

      function Gt(e, t) {
        function n() {
          var e = arguments,
              r = n.fns;
          if (!Array.isArray(r)) return Ct(r, null, arguments, t, "v-on handler");

          for (var i = r.slice(), o = 0; o < i.length; o++) {
            Ct(i[o], null, e, t, "v-on handler");
          }
        }

        return n.fns = e, n;
      }

      function Wt(e, t, n, r, i, o) {
        var a, s, l, c;

        for (a in e) {
          s = e[a], l = t[a], c = Ht(a), P(s) || (P(l) ? (P(s.fns) && (s = e[a] = Gt(s, o)), U(c.once) && (s = e[a] = i(c.name, s, c.capture)), n(c.name, s, c.capture, c.passive, c.params)) : s !== l && (l.fns = s, e[a] = l));
        }

        for (a in t) {
          P(e[a]) && r((c = Ht(a)).name, t[a], c.capture);
        }
      }

      function Vt(e, t, n) {
        var r;
        e instanceof Qe && (e = e.data.hook || (e.data.hook = {}));
        var i = e[t];

        function o() {
          n.apply(this, arguments), Z(r.fns, o);
        }

        P(i) ? r = Gt([o]) : B(i.fns) && U(i.merged) ? (r = i).fns.push(o) : r = Gt([i, o]), r.merged = !0, e[t] = r;
      }

      function Yt(e, t, n, r, i) {
        if (B(t)) {
          if (te(t, n)) return e[n] = t[n], i || delete t[n], !0;
          if (te(t, r)) return e[n] = t[r], i || delete t[r], !0;
        }

        return !1;
      }

      function qt(e) {
        return H(e) ? [et(e)] : Array.isArray(e) ? Kt(e) : void 0;
      }

      function zt(e) {
        return B(e) && B(e.text) && !1 === e.isComment;
      }

      function Kt(e, t) {
        var n,
            r,
            i,
            o,
            a = [];

        for (n = 0; n < e.length; n++) {
          P(r = e[n]) || "boolean" == typeof r || (o = a[i = a.length - 1], Array.isArray(r) ? r.length > 0 && (zt((r = Kt(r, (t || "") + "_" + n))[0]) && zt(o) && (a[i] = et(o.text + r[0].text), r.shift()), a.push.apply(a, r)) : H(r) ? zt(o) ? a[i] = et(o.text + r) : "" !== r && a.push(et(r)) : zt(r) && zt(o) ? a[i] = et(o.text + r.text) : (U(e._isVList) && B(r.tag) && P(r.key) && B(t) && (r.key = "__vlist" + t + "_" + n + "__"), a.push(r)));
        }

        return a;
      }

      function Jt(e, t) {
        if (e) {
          for (var n = Object.create(null), r = We ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
            var o = r[i];

            if ("__ob__" !== o) {
              for (var a = e[o].from, s = t; s;) {
                if (s._provided && te(s._provided, a)) {
                  n[o] = s._provided[a];
                  break;
                }

                s = s.$parent;
              }

              if (!s && "default" in e[o]) {
                var l = e[o]["default"];
                n[o] = "function" == typeof l ? l.call(t) : l;
              }
            }
          }

          return n;
        }
      }

      function Qt(e, t) {
        if (!e || !e.length) return {};

        for (var n = {}, r = 0, i = e.length; r < i; r++) {
          var o = e[r],
              a = o.data;
          if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot) (n["default"] || (n["default"] = [])).push(o);else {
            var s = a.slot,
                l = n[s] || (n[s] = []);
            "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o);
          }
        }

        for (var c in n) {
          n[c].every(Xt) && delete n[c];
        }

        return n;
      }

      function Xt(e) {
        return e.isComment && !e.asyncFactory || " " === e.text;
      }

      function Zt(e, t, n) {
        var r,
            i = Object.keys(t).length > 0,
            o = e ? !!e.$stable : !i,
            a = e && e.$key;

        if (e) {
          if (e._normalized) return e._normalized;
          if (o && n && n !== F && a === n.$key && !i && !n.$hasNormal) return n;

          for (var s in r = {}, e) {
            e[s] && "$" !== s[0] && (r[s] = en(t, s, e[s]));
          }
        } else r = {};

        for (var l in t) {
          l in r || (r[l] = tn(t, l));
        }

        return e && Object.isExtensible(e) && (e._normalized = r), Se(r, "$stable", o), Se(r, "$key", a), Se(r, "$hasNormal", i), r;
      }

      function en(e, t, n) {
        var r = function r() {
          var e = arguments.length ? n.apply(null, arguments) : n({});
          return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : qt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
        };

        return n.proxy && Object.defineProperty(e, t, {
          get: r,
          enumerable: !0,
          configurable: !0
        }), r;
      }

      function tn(e, t) {
        return function () {
          return e[t];
        };
      }

      function nn(e, t) {
        var n, r, i, o, a;
        if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
          n[r] = t(e[r], r);
        } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
          n[r] = t(r + 1, r);
        } else if (G(e)) if (We && e[Symbol.iterator]) {
          n = [];

          for (var s = e[Symbol.iterator](), l = s.next(); !l.done;) {
            n.push(t(l.value, n.length)), l = s.next();
          }
        } else for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++) {
          a = o[r], n[r] = t(e[a], a, r);
        }
        return B(n) || (n = []), n._isVList = !0, n;
      }

      function rn(e, t, n, r) {
        var i,
            o = this.$scopedSlots[e];
        o ? (n = n || {}, r && (n = ue(ue({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
        var a = n && n.slot;
        return a ? this.$createElement("template", {
          slot: a
        }, i) : i;
      }

      function on(e) {
        return _t(this.$options, "filters", e) || he;
      }

      function an(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
      }

      function sn(e, t, n, r, i) {
        var o = Ee.keyCodes[t] || n;
        return i && r && !Ee.keyCodes[t] ? an(i, r) : o ? an(o, e) : r ? se(r) !== t : void 0;
      }

      function ln(e, t, n, r, i) {
        if (n && G(n)) {
          var o;
          Array.isArray(n) && (n = de(n));

          var a = function a(_a5) {
            if ("class" === _a5 || "style" === _a5 || X(_a5)) o = e;else {
              var s = e.attrs && e.attrs.type;
              o = r || Ee.mustUseProp(t, s, _a5) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
            }
            var l = ie(_a5),
                c = se(_a5);
            l in o || c in o || (o[_a5] = n[_a5], i && ((e.on || (e.on = {}))["update:" + _a5] = function (e) {
              n[_a5] = e;
            }));
          };

          for (var s in n) {
            a(s);
          }
        }

        return e;
      }

      function cn(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
            r = n[e];
        return r && !t || dn(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r;
      }

      function un(e, t, n) {
        return dn(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
      }

      function dn(e, t, n) {
        if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
          e[r] && "string" != typeof e[r] && fn(e[r], t + "_" + r, n);
        } else fn(e, t, n);
      }

      function fn(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n;
      }

      function pn(e, t) {
        if (t && V(t)) {
          var n = e.on = e.on ? ue({}, e.on) : {};

          for (var r in t) {
            var i = n[r],
                o = t[r];
            n[r] = i ? [].concat(i, o) : o;
          }
        }

        return e;
      }

      function hn(e, t, n, r) {
        t = t || {
          $stable: !n
        };

        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          Array.isArray(o) ? hn(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
        }

        return r && (t.$key = r), t;
      }

      function vn(e, t) {
        for (var n = 0; n < t.length; n += 2) {
          var r = t[n];
          "string" == typeof r && r && (e[t[n]] = t[n + 1]);
        }

        return e;
      }

      function gn(e, t) {
        return "string" == typeof e ? t + e : e;
      }

      function mn(e) {
        e._o = un, e._n = K, e._s = z, e._l = nn, e._t = rn, e._q = ve, e._i = ge, e._m = cn, e._f = on, e._k = sn, e._b = ln, e._v = et, e._e = Ze, e._u = hn, e._g = pn, e._d = vn, e._p = gn;
      }

      function yn(e, t, n, r, i) {
        var o,
            a = this,
            s = i.options;
        te(r, "_uid") ? (o = Object.create(r))._original = r : (o = r, r = r._original);
        var l = U(s._compiled),
            c = !l;
        this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || F, this.injections = Jt(s.inject, r), this.slots = function () {
          return a.$slots || Zt(e.scopedSlots, a.$slots = Qt(n, r)), a.$slots;
        }, Object.defineProperty(this, "scopedSlots", {
          enumerable: !0,
          get: function get() {
            return Zt(e.scopedSlots, this.slots());
          }
        }), l && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = Zt(e.scopedSlots, this.$slots)), s._scopeId ? this._c = function (e, t, n, i) {
          var a = kn(o, e, t, n, i, c);
          return a && !Array.isArray(a) && (a.fnScopeId = s._scopeId, a.fnContext = r), a;
        } : this._c = function (e, t, n, r) {
          return kn(o, e, t, n, r, c);
        };
      }

      function bn(e, t, n, r, i) {
        var o = tt(e);
        return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
      }

      function _n(e, t) {
        for (var n in t) {
          e[ie(n)] = t[n];
        }
      }

      mn(yn.prototype);
      var En = {
        init: function init(e, t) {
          if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
            var n = e;
            En.prepatch(n, n);
          } else (e.componentInstance = function (e, t) {
            var n = {
              _isComponent: !0,
              _parentVnode: e,
              parent: t
            },
                r = e.data.inlineTemplate;
            return B(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
          }(e, Rn)).$mount(t ? e.elm : void 0, t);
        },
        prepatch: function prepatch(e, t) {
          var n = t.componentOptions;
          !function (e, t, n, r, i) {
            var o = r.data.scopedSlots,
                a = e.$scopedSlots,
                s = !!(o && !o.$stable || a !== F && !a.$stable || o && e.$scopedSlots.$key !== o.$key),
                l = !!(i || e.$options._renderChildren || s);

            if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data.attrs || F, e.$listeners = n || F, t && e.$options.props) {
              at(!1);

              for (var c = e._props, u = e.$options._propKeys || [], d = 0; d < u.length; d++) {
                var f = u[d],
                    p = e.$options.props;
                c[f] = Et(f, p, t, e);
              }

              at(!0), e.$options.propsData = t;
            }

            n = n || F;
            var h = e.$options._parentListeners;
            e.$options._parentListeners = n, $n(e, n, h), l && (e.$slots = Qt(i, r.context), e.$forceUpdate());
          }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
        },
        insert: function insert(e) {
          var t,
              n = e.context,
              r = e.componentInstance;
          r._isMounted || (r._isMounted = !0, Un(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, Gn.push(t)) : Pn(r, !0));
        },
        destroy: function destroy(e) {
          var t = e.componentInstance;
          t._isDestroyed || (e.data.keepAlive ? Bn(t, !0) : t.$destroy());
        }
      },
          An = Object.keys(En);

      function wn(e, t, n, r, i) {
        if (!P(e)) {
          var o = n.$options._base;

          if (G(e) && (e = o.extend(e)), "function" == typeof e) {
            var a;
            if (P(e.cid) && void 0 === (e = function (e, t) {
              if (U(e.error) && B(e.errorComp)) return e.errorComp;
              if (B(e.resolved)) return e.resolved;
              var n = In;
              if (n && B(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), U(e.loading) && B(e.loadingComp)) return e.loadingComp;

              if (n && !B(e.owners)) {
                var r = e.owners = [n],
                    i = !0,
                    o = null,
                    a = null;
                n.$on("hook:destroyed", function () {
                  return Z(r, n);
                });

                var s = function s(e) {
                  for (var t = 0, n = r.length; t < n; t++) {
                    r[t].$forceUpdate();
                  }

                  e && (r.length = 0, null !== o && (clearTimeout(o), o = null), null !== a && (clearTimeout(a), a = null));
                },
                    l = me(function (n) {
                  e.resolved = xn(n, t), i ? r.length = 0 : s(!0);
                }),
                    c = me(function (t) {
                  B(e.errorComp) && (e.error = !0, s(!0));
                }),
                    u = e(l, c);

                return G(u) && (q(u) ? P(e.resolved) && u.then(l, c) : q(u.component) && (u.component.then(l, c), B(u.error) && (e.errorComp = xn(u.error, t)), B(u.loading) && (e.loadingComp = xn(u.loading, t), 0 === u.delay ? e.loading = !0 : o = setTimeout(function () {
                  o = null, P(e.resolved) && P(e.error) && (e.loading = !0, s(!1));
                }, u.delay || 200)), B(u.timeout) && (a = setTimeout(function () {
                  a = null, P(e.resolved) && c(null);
                }, u.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved;
              }
            }(a = e, o))) return function (e, t, n, r, i) {
              var o = Ze();
              return o.asyncFactory = e, o.asyncMeta = {
                data: t,
                context: n,
                children: r,
                tag: i
              }, o;
            }(a, t, n, r, i);
            t = t || {}, lr(e), B(t.model) && function (e, t) {
              var n = e.model && e.model.prop || "value",
                  r = e.model && e.model.event || "input";
              (t.attrs || (t.attrs = {}))[n] = t.model.value;
              var i = t.on || (t.on = {}),
                  o = i[r],
                  a = t.model.callback;
              B(o) ? (Array.isArray(o) ? -1 === o.indexOf(a) : o !== a) && (i[r] = [a].concat(o)) : i[r] = a;
            }(e.options, t);

            var s = function (e, t, n) {
              var r = t.options.props;

              if (!P(r)) {
                var i = {},
                    o = e.attrs,
                    a = e.props;
                if (B(o) || B(a)) for (var s in r) {
                  var l = se(s);
                  Yt(i, a, s, l, !0) || Yt(i, o, s, l, !1);
                }
                return i;
              }
            }(t, e);

            if (U(e.options.functional)) return function (e, t, n, r, i) {
              var o = e.options,
                  a = {},
                  s = o.props;
              if (B(s)) for (var l in s) {
                a[l] = Et(l, s, t || F);
              } else B(n.attrs) && _n(a, n.attrs), B(n.props) && _n(a, n.props);
              var c = new yn(n, a, i, r, e),
                  u = o.render.call(null, c._c, c);
              if (u instanceof Qe) return bn(u, n, c.parent, o);

              if (Array.isArray(u)) {
                for (var d = qt(u) || [], f = new Array(d.length), p = 0; p < d.length; p++) {
                  f[p] = bn(d[p], n, c.parent, o);
                }

                return f;
              }
            }(e, s, t, n, r);
            var l = t.on;

            if (t.on = t.nativeOn, U(e.options["abstract"])) {
              var c = t.slot;
              t = {}, c && (t.slot = c);
            }

            !function (e) {
              for (var t = e.hook || (e.hook = {}), n = 0; n < An.length; n++) {
                var r = An[n],
                    i = t[r],
                    o = En[r];
                i === o || i && i._merged || (t[r] = i ? Sn(o, i) : o);
              }
            }(t);
            var u = e.options.name || i;
            return new Qe("vue-component-" + e.cid + (u ? "-" + u : ""), t, void 0, void 0, void 0, n, {
              Ctor: e,
              propsData: s,
              listeners: l,
              tag: i,
              children: r
            }, a);
          }
        }
      }

      function Sn(e, t) {
        var n = function n(_n20, r) {
          e(_n20, r), t(_n20, r);
        };

        return n._merged = !0, n;
      }

      function kn(e, t, n, r, i, o) {
        return (Array.isArray(n) || H(n)) && (i = r, r = n, n = void 0), U(o) && (i = 2), function (e, t, n, r, i) {
          if (B(n) && B(n.__ob__)) return Ze();
          if (B(n) && B(n.is) && (t = n.is), !t) return Ze();
          var o, a, s;
          (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
            "default": r[0]
          }, r.length = 0), 2 === i ? r = qt(r) : 1 === i && (r = function (e) {
            for (var t = 0; t < e.length; t++) {
              if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            }

            return e;
          }(r)), "string" == typeof t) ? (a = e.$vnode && e.$vnode.ns || Ee.getTagNamespace(t), o = Ee.isReservedTag(t) ? new Qe(Ee.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !B(s = _t(e.$options, "components", t)) ? new Qe(t, n, r, void 0, void 0, e) : wn(s, n, e, r, t)) : o = wn(t, n, e, r);
          return Array.isArray(o) ? o : B(o) ? (B(a) && Cn(o, a), B(n) && function (e) {
            G(e.style) && Bt(e.style), G(e["class"]) && Bt(e["class"]);
          }(n), o) : Ze();
        }(e, t, n, r, i);
      }

      function Cn(e, t, n) {
        if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), B(e.children)) for (var r = 0, i = e.children.length; r < i; r++) {
          var o = e.children[r];
          B(o.tag) && (P(o.ns) || U(n) && "svg" !== o.tag) && Cn(o, t, n);
        }
      }

      var Tn,
          In = null;

      function xn(e, t) {
        return (e.__esModule || We && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), G(e) ? t.extend(e) : e;
      }

      function On(e) {
        return e.isComment && e.asyncFactory;
      }

      function Mn(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (B(n) && (B(n.componentOptions) || On(n))) return n;
        }
      }

      function Dn(e, t) {
        Tn.$on(e, t);
      }

      function Ln(e, t) {
        Tn.$off(e, t);
      }

      function Nn(e, t) {
        var n = Tn;
        return function r() {
          var i = t.apply(null, arguments);
          null !== i && n.$off(e, r);
        };
      }

      function $n(e, t, n) {
        Tn = e, Wt(t, n || {}, Dn, Ln, Nn, e), Tn = void 0;
      }

      var Rn = null;

      function jn(e) {
        var t = Rn;
        return Rn = e, function () {
          Rn = t;
        };
      }

      function Fn(e) {
        for (; e && (e = e.$parent);) {
          if (e._inactive) return !0;
        }

        return !1;
      }

      function Pn(e, t) {
        if (t) {
          if (e._directInactive = !1, Fn(e)) return;
        } else if (e._directInactive) return;

        if (e._inactive || null === e._inactive) {
          e._inactive = !1;

          for (var n = 0; n < e.$children.length; n++) {
            Pn(e.$children[n]);
          }

          Un(e, "activated");
        }
      }

      function Bn(e, t) {
        if (!(t && (e._directInactive = !0, Fn(e)) || e._inactive)) {
          e._inactive = !0;

          for (var n = 0; n < e.$children.length; n++) {
            Bn(e.$children[n]);
          }

          Un(e, "deactivated");
        }
      }

      function Un(e, t) {
        Ke();
        var n = e.$options[t],
            r = t + " hook";
        if (n) for (var i = 0, o = n.length; i < o; i++) {
          Ct(n[i], e, null, e, r);
        }
        e._hasHookEvent && e.$emit("hook:" + t), Je();
      }

      var Hn = [],
          Gn = [],
          Wn = {},
          Vn = !1,
          Yn = !1,
          qn = 0,
          zn = 0,
          Kn = Date.now;

      if (Ie && !De) {
        var Jn = window.performance;
        Jn && "function" == typeof Jn.now && Kn() > document.createEvent("Event").timeStamp && (Kn = function Kn() {
          return Jn.now();
        });
      }

      function Qn() {
        var e, t;

        for (zn = Kn(), Yn = !0, Hn.sort(function (e, t) {
          return e.id - t.id;
        }), qn = 0; qn < Hn.length; qn++) {
          (e = Hn[qn]).before && e.before(), t = e.id, Wn[t] = null, e.run();
        }

        var n = Gn.slice(),
            r = Hn.slice();
        qn = Hn.length = Gn.length = 0, Wn = {}, Vn = Yn = !1, function (e) {
          for (var t = 0; t < e.length; t++) {
            e[t]._inactive = !0, Pn(e[t], !0);
          }
        }(n), function (e) {
          for (var t = e.length; t--;) {
            var n = e[t],
                r = n.vm;
            r._watcher === n && r._isMounted && !r._isDestroyed && Un(r, "updated");
          }
        }(r), Ue && Ee.devtools && Ue.emit("flush");
      }

      var Xn = 0,
          Zn = function Zn(e, t, n, r, i) {
        this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Xn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ge(), this.newDepIds = new Ge(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
          if (!Ce.test(e)) {
            var t = e.split(".");
            return function (e) {
              for (var n = 0; n < t.length; n++) {
                if (!e) return;
                e = e[t[n]];
              }

              return e;
            };
          }
        }(t), this.getter || (this.getter = fe)), this.value = this.lazy ? void 0 : this.get();
      };

      Zn.prototype.get = function () {
        var e;
        Ke(this);
        var t = this.vm;

        try {
          e = this.getter.call(t, t);
        } catch (e) {
          if (!this.user) throw e;
          kt(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && Bt(e), Je(), this.cleanupDeps();
        }

        return e;
      }, Zn.prototype.addDep = function (e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
      }, Zn.prototype.cleanupDeps = function () {
        for (var e = this.deps.length; e--;) {
          var t = this.deps[e];
          this.newDepIds.has(t.id) || t.removeSub(this);
        }

        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
      }, Zn.prototype.update = function () {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
          var t = e.id;

          if (null == Wn[t]) {
            if (Wn[t] = !0, Yn) {
              for (var n = Hn.length - 1; n > qn && Hn[n].id > e.id;) {
                n--;
              }

              Hn.splice(n + 1, 0, e);
            } else Hn.push(e);

            Vn || (Vn = !0, Ft(Qn));
          }
        }(this);
      }, Zn.prototype.run = function () {
        if (this.active) {
          var e = this.get();

          if (e !== this.value || G(e) || this.deep) {
            var t = this.value;
            if (this.value = e, this.user) try {
              this.cb.call(this.vm, e, t);
            } catch (e) {
              kt(e, this.vm, 'callback for watcher "' + this.expression + '"');
            } else this.cb.call(this.vm, e, t);
          }
        }
      }, Zn.prototype.evaluate = function () {
        this.value = this.get(), this.dirty = !1;
      }, Zn.prototype.depend = function () {
        for (var e = this.deps.length; e--;) {
          this.deps[e].depend();
        }
      }, Zn.prototype.teardown = function () {
        if (this.active) {
          this.vm._isBeingDestroyed || Z(this.vm._watchers, this);

          for (var e = this.deps.length; e--;) {
            this.deps[e].removeSub(this);
          }

          this.active = !1;
        }
      };
      var er = {
        enumerable: !0,
        configurable: !0,
        get: fe,
        set: fe
      };

      function tr(e, t, n) {
        er.get = function () {
          return this[t][n];
        }, er.set = function (e) {
          this[t][n] = e;
        }, Object.defineProperty(e, n, er);
      }

      var nr = {
        lazy: !0
      };

      function rr(e, t, n) {
        var r = !Be();
        "function" == typeof n ? (er.get = r ? ir(t) : or(n), er.set = fe) : (er.get = n.get ? r && !1 !== n.cache ? ir(t) : or(n.get) : fe, er.set = n.set || fe), Object.defineProperty(e, t, er);
      }

      function ir(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t) return t.dirty && t.evaluate(), qe.target && t.depend(), t.value;
        };
      }

      function or(e) {
        return function () {
          return e.call(this, this);
        };
      }

      function ar(e, t, n, r) {
        return V(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
      }

      var sr = 0;

      function lr(e) {
        var t = e.options;

        if (e["super"]) {
          var n = lr(e["super"]);

          if (n !== e.superOptions) {
            e.superOptions = n;

            var r = function (e) {
              var t,
                  n = e.options,
                  r = e.sealedOptions;

              for (var i in n) {
                n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
              }

              return t;
            }(e);

            r && ue(e.extendOptions, r), (t = e.options = bt(n, e.extendOptions)).name && (t.components[t.name] = e);
          }
        }

        return t;
      }

      function cr(e) {
        this._init(e);
      }

      function ur(e) {
        return e && (e.Ctor.options.name || e.tag);
      }

      function dr(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== W.call(n)) && e.test(t));
        var n;
      }

      function fr(e, t) {
        var n = e.cache,
            r = e.keys,
            i = e._vnode;

        for (var o in n) {
          var a = n[o];

          if (a) {
            var s = ur(a.componentOptions);
            s && !t(s) && pr(n, o, r, i);
          }
        }
      }

      function pr(e, t, n, r) {
        var i = e[t];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, Z(n, t);
      }

      !function (e) {
        e.prototype._init = function (e) {
          var t = this;
          t._uid = sr++, t._isVue = !0, e && e._isComponent ? function (e, t) {
            var n = e.$options = Object.create(e.constructor.options),
                r = t._parentVnode;
            n.parent = t.parent, n._parentVnode = r;
            var i = r.componentOptions;
            n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
          }(t, e) : t.$options = bt(lr(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
            var t = e.$options,
                n = t.parent;

            if (n && !t["abstract"]) {
              for (; n.$options["abstract"] && n.$parent;) {
                n = n.$parent;
              }

              n.$children.push(e);
            }

            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
          }(t), function (e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && $n(e, t);
          }(t), function (e) {
            e._vnode = null, e._staticTrees = null;
            var t = e.$options,
                n = e.$vnode = t._parentVnode,
                r = n && n.context;
            e.$slots = Qt(t._renderChildren, r), e.$scopedSlots = F, e._c = function (t, n, r, i) {
              return kn(e, t, n, r, i, !1);
            }, e.$createElement = function (t, n, r, i) {
              return kn(e, t, n, r, i, !0);
            };
            var i = n && n.data;
            ct(e, "$attrs", i && i.attrs || F, null, !0), ct(e, "$listeners", t._parentListeners || F, null, !0);
          }(t), Un(t, "beforeCreate"), function (e) {
            var t = Jt(e.$options.inject, e);
            t && (at(!1), Object.keys(t).forEach(function (n) {
              ct(e, n, t[n]);
            }), at(!0));
          }(t), function (e) {
            e._watchers = [];
            var t = e.$options;
            t.props && function (e, t) {
              var n = e.$options.propsData || {},
                  r = e._props = {},
                  i = e.$options._propKeys = [];
              e.$parent && at(!1);

              var o = function o(_o9) {
                i.push(_o9);
                var a = Et(_o9, t, n, e);
                ct(r, _o9, a), _o9 in e || tr(e, "_props", _o9);
              };

              for (var a in t) {
                o(a);
              }

              at(!0);
            }(e, t.props), t.methods && function (e, t) {
              for (var n in e.$options.props, t) {
                e[n] = "function" != typeof t[n] ? fe : le(t[n], e);
              }
            }(e, t.methods), t.data ? function (e) {
              var t = e.$options.data;
              V(t = e._data = "function" == typeof t ? function (e, t) {
                Ke();

                try {
                  return e.call(t, t);
                } catch (e) {
                  return kt(e, t, "data()"), {};
                } finally {
                  Je();
                }
              }(t, e) : t || {}) || (t = {});

              for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
                var o = n[i];
                r && te(r, o) || we(o) || tr(e, "_data", o);
              }

              lt(t, !0);
            }(e) : lt(e._data = {}, !0), t.computed && function (e, t) {
              var n = e._computedWatchers = Object.create(null),
                  r = Be();

              for (var i in t) {
                var o = t[i],
                    a = "function" == typeof o ? o : o.get;
                r || (n[i] = new Zn(e, a || fe, fe, nr)), i in e || rr(e, i, o);
              }
            }(e, t.computed), t.watch && t.watch !== je && function (e, t) {
              for (var n in t) {
                var r = t[n];
                if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
                  ar(e, n, r[i]);
                } else ar(e, n, r);
              }
            }(e, t.watch);
          }(t), function (e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t);
          }(t), Un(t, "created"), t.$options.el && t.$mount(t.$options.el);
        };
      }(cr), function (e) {
        Object.defineProperty(e.prototype, "$data", {
          get: function get() {
            return this._data;
          }
        }), Object.defineProperty(e.prototype, "$props", {
          get: function get() {
            return this._props;
          }
        }), e.prototype.$set = ut, e.prototype.$delete = dt, e.prototype.$watch = function (e, t, n) {
          var r = this;
          if (V(t)) return ar(r, e, t, n);
          (n = n || {}).user = !0;
          var i = new Zn(r, e, t, n);
          if (n.immediate) try {
            t.call(r, i.value);
          } catch (e) {
            kt(e, r, 'callback for immediate watcher "' + i.expression + '"');
          }
          return function () {
            i.teardown();
          };
        };
      }(cr), function (e) {
        var t = /^hook:/;
        e.prototype.$on = function (e, n) {
          var r = this;
          if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) {
            r.$on(e[i], n);
          } else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
          return r;
        }, e.prototype.$once = function (e, t) {
          var n = this;

          function r() {
            n.$off(e, r), t.apply(n, arguments);
          }

          return r.fn = t, n.$on(e, r), n;
        }, e.prototype.$off = function (e, t) {
          var n = this;
          if (!arguments.length) return n._events = Object.create(null), n;

          if (Array.isArray(e)) {
            for (var r = 0, i = e.length; r < i; r++) {
              n.$off(e[r], t);
            }

            return n;
          }

          var o,
              a = n._events[e];
          if (!a) return n;
          if (!t) return n._events[e] = null, n;

          for (var s = a.length; s--;) {
            if ((o = a[s]) === t || o.fn === t) {
              a.splice(s, 1);
              break;
            }
          }

          return n;
        }, e.prototype.$emit = function (e) {
          var t = this,
              n = t._events[e];

          if (n) {
            n = n.length > 1 ? ce(n) : n;

            for (var r = ce(arguments, 1), i = 'event handler for "' + e + '"', o = 0, a = n.length; o < a; o++) {
              Ct(n[o], t, r, t, i);
            }
          }

          return t;
        };
      }(cr), function (e) {
        e.prototype._update = function (e, t) {
          var n = this,
              r = n.$el,
              i = n._vnode,
              o = jn(n);
          n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, e.prototype.$forceUpdate = function () {
          this._watcher && this._watcher.update();
        }, e.prototype.$destroy = function () {
          var e = this;

          if (!e._isBeingDestroyed) {
            Un(e, "beforeDestroy"), e._isBeingDestroyed = !0;
            var t = e.$parent;
            !t || t._isBeingDestroyed || e.$options["abstract"] || Z(t.$children, e), e._watcher && e._watcher.teardown();

            for (var n = e._watchers.length; n--;) {
              e._watchers[n].teardown();
            }

            e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Un(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
          }
        };
      }(cr), function (e) {
        mn(e.prototype), e.prototype.$nextTick = function (e) {
          return Ft(e, this);
        }, e.prototype._render = function () {
          var e,
              t = this,
              n = t.$options,
              r = n.render,
              i = n._parentVnode;
          i && (t.$scopedSlots = Zt(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;

          try {
            In = t, e = r.call(t._renderProxy, t.$createElement);
          } catch (n) {
            kt(n, t, "render"), e = t._vnode;
          } finally {
            In = null;
          }

          return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof Qe || (e = Ze()), e.parent = i, e;
        };
      }(cr);
      var hr = [String, RegExp, Array],
          vr = {
        KeepAlive: {
          name: "keep-alive",
          "abstract": !0,
          props: {
            include: hr,
            exclude: hr,
            max: [String, Number]
          },
          created: function created() {
            this.cache = Object.create(null), this.keys = [];
          },
          destroyed: function destroyed() {
            for (var e in this.cache) {
              pr(this.cache, e, this.keys);
            }
          },
          mounted: function mounted() {
            var e = this;
            this.$watch("include", function (t) {
              fr(e, function (e) {
                return dr(t, e);
              });
            }), this.$watch("exclude", function (t) {
              fr(e, function (e) {
                return !dr(t, e);
              });
            });
          },
          render: function render() {
            var e = this.$slots["default"],
                t = Mn(e),
                n = t && t.componentOptions;

            if (n) {
              var r = ur(n),
                  i = this.include,
                  o = this.exclude;
              if (i && (!r || !dr(i, r)) || o && r && dr(o, r)) return t;
              var a = this.cache,
                  s = this.keys,
                  l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
              a[l] ? (t.componentInstance = a[l].componentInstance, Z(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && pr(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
            }

            return t || e && e[0];
          }
        }
      };
      !function (e) {
        var t = {
          get: function get() {
            return Ee;
          }
        };
        Object.defineProperty(e, "config", t), e.util = {
          warn: Ve,
          extend: ue,
          mergeOptions: bt,
          defineReactive: ct
        }, e.set = ut, e["delete"] = dt, e.nextTick = Ft, e.observable = function (e) {
          return lt(e), e;
        }, e.options = Object.create(null), be.forEach(function (t) {
          e.options[t + "s"] = Object.create(null);
        }), e.options._base = e, ue(e.options.components, vr), function (e) {
          e.use = function (e) {
            var t = this._installedPlugins || (this._installedPlugins = []);
            if (t.indexOf(e) > -1) return this;
            var n = ce(arguments, 1);
            return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
          };
        }(e), function (e) {
          e.mixin = function (e) {
            return this.options = bt(this.options, e), this;
          };
        }(e), function (e) {
          e.cid = 0;
          var t = 1;

          e.extend = function (e) {
            e = e || {};
            var n = this,
                r = n.cid,
                i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];

            var o = e.name || n.options.name,
                a = function a(e) {
              this._init(e);
            };

            return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = bt(n.options, e), a["super"] = n, a.options.props && function (e) {
              var t = e.options.props;

              for (var n in t) {
                tr(e.prototype, "_props", n);
              }
            }(a), a.options.computed && function (e) {
              var t = e.options.computed;

              for (var n in t) {
                rr(e.prototype, n, t[n]);
              }
            }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, be.forEach(function (e) {
              a[e] = n[e];
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = ue({}, a.options), i[r] = a, a;
          };
        }(e), function (e) {
          be.forEach(function (t) {
            e[t] = function (e, n) {
              return n ? ("component" === t && V(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                bind: n,
                update: n
              }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
            };
          });
        }(e);
      }(cr), Object.defineProperty(cr.prototype, "$isServer", {
        get: Be
      }), Object.defineProperty(cr.prototype, "$ssrContext", {
        get: function get() {
          return this.$vnode && this.$vnode.ssrContext;
        }
      }), Object.defineProperty(cr, "FunctionalRenderContext", {
        value: yn
      }), cr.version = "2.6.12";

      var gr = J("style,class"),
          mr = J("input,textarea,option,select,progress"),
          yr = function yr(e, t, n) {
        return "value" === n && mr(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
      },
          br = J("contenteditable,draggable,spellcheck"),
          _r = J("events,caret,typing,plaintext-only"),
          Er = J("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
          Ar = "http://www.w3.org/1999/xlink",
          wr = function wr(e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
      },
          Sr = function Sr(e) {
        return wr(e) ? e.slice(6, e.length) : "";
      },
          kr = function kr(e) {
        return null == e || !1 === e;
      };

      function Cr(e, t) {
        return {
          staticClass: Tr(e.staticClass, t.staticClass),
          "class": B(e["class"]) ? [e["class"], t["class"]] : t["class"]
        };
      }

      function Tr(e, t) {
        return e ? t ? e + " " + t : e : t || "";
      }

      function Ir(e) {
        return Array.isArray(e) ? function (e) {
          for (var t, n = "", r = 0, i = e.length; r < i; r++) {
            B(t = Ir(e[r])) && "" !== t && (n && (n += " "), n += t);
          }

          return n;
        }(e) : G(e) ? function (e) {
          var t = "";

          for (var n in e) {
            e[n] && (t && (t += " "), t += n);
          }

          return t;
        }(e) : "string" == typeof e ? e : "";
      }

      var xr = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
      },
          Or = J("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
          Mr = J("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
          Dr = function Dr(e) {
        return Or(e) || Mr(e);
      };

      function Lr(e) {
        return Mr(e) ? "svg" : "math" === e ? "math" : void 0;
      }

      var Nr = Object.create(null),
          $r = J("text,number,password,search,email,tel,url");

      function Rr(e) {
        return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
      }

      var jr = Object.freeze({
        createElement: function createElement(e, t) {
          var n = document.createElement(e);
          return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
        },
        createElementNS: function createElementNS(e, t) {
          return document.createElementNS(xr[e], t);
        },
        createTextNode: function createTextNode(e) {
          return document.createTextNode(e);
        },
        createComment: function createComment(e) {
          return document.createComment(e);
        },
        insertBefore: function insertBefore(e, t, n) {
          e.insertBefore(t, n);
        },
        removeChild: function removeChild(e, t) {
          e.removeChild(t);
        },
        appendChild: function appendChild(e, t) {
          e.appendChild(t);
        },
        parentNode: function parentNode(e) {
          return e.parentNode;
        },
        nextSibling: function nextSibling(e) {
          return e.nextSibling;
        },
        tagName: function tagName(e) {
          return e.tagName;
        },
        setTextContent: function setTextContent(e, t) {
          e.textContent = t;
        },
        setStyleScope: function setStyleScope(e, t) {
          e.setAttribute(t, "");
        }
      }),
          Fr = {
        create: function create(e, t) {
          Pr(t);
        },
        update: function update(e, t) {
          e.data.ref !== t.data.ref && (Pr(e, !0), Pr(t));
        },
        destroy: function destroy(e) {
          Pr(e, !0);
        }
      };

      function Pr(e, t) {
        var n = e.data.ref;

        if (B(n)) {
          var r = e.context,
              i = e.componentInstance || e.elm,
              o = r.$refs;
          t ? Array.isArray(o[n]) ? Z(o[n], i) : o[n] === i && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i;
        }
      }

      var Br = new Qe("", {}, []),
          Ur = ["create", "activate", "update", "remove", "destroy"];

      function Hr(e, t) {
        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && B(e.data) === B(t.data) && function (e, t) {
          if ("input" !== e.tag) return !0;
          var n,
              r = B(n = e.data) && B(n = n.attrs) && n.type,
              i = B(n = t.data) && B(n = n.attrs) && n.type;
          return r === i || $r(r) && $r(i);
        }(e, t) || U(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && P(t.asyncFactory.error));
      }

      function Gr(e, t, n) {
        var r,
            i,
            o = {};

        for (r = t; r <= n; ++r) {
          B(i = e[r].key) && (o[i] = r);
        }

        return o;
      }

      var Wr = {
        create: Vr,
        update: Vr,
        destroy: function destroy(e) {
          Vr(e, Br);
        }
      };

      function Vr(e, t) {
        (e.data.directives || t.data.directives) && function (e, t) {
          var n,
              r,
              i,
              o = e === Br,
              a = t === Br,
              s = qr(e.data.directives, e.context),
              l = qr(t.data.directives, t.context),
              c = [],
              u = [];

          for (n in l) {
            r = s[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, Kr(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (Kr(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
          }

          if (c.length) {
            var d = function d() {
              for (var n = 0; n < c.length; n++) {
                Kr(c[n], "inserted", t, e);
              }
            };

            o ? Vt(t, "insert", d) : d();
          }

          if (u.length && Vt(t, "postpatch", function () {
            for (var n = 0; n < u.length; n++) {
              Kr(u[n], "componentUpdated", t, e);
            }
          }), !o) for (n in s) {
            l[n] || Kr(s[n], "unbind", e, e, a);
          }
        }(e, t);
      }

      var Yr = Object.create(null);

      function qr(e, t) {
        var n,
            r,
            i = Object.create(null);
        if (!e) return i;

        for (n = 0; n < e.length; n++) {
          (r = e[n]).modifiers || (r.modifiers = Yr), i[zr(r)] = r, r.def = _t(t.$options, "directives", r.name);
        }

        return i;
      }

      function zr(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
      }

      function Kr(e, t, n, r, i) {
        var o = e.def && e.def[t];
        if (o) try {
          o(n.elm, e, n, r, i);
        } catch (r) {
          kt(r, n.context, "directive " + e.name + " " + t + " hook");
        }
      }

      var Jr = [Fr, Wr];

      function Qr(e, t) {
        var n = t.componentOptions;

        if (!(B(n) && !1 === n.Ctor.options.inheritAttrs || P(e.data.attrs) && P(t.data.attrs))) {
          var r,
              i,
              o = t.elm,
              a = e.data.attrs || {},
              s = t.data.attrs || {};

          for (r in B(s.__ob__) && (s = t.data.attrs = ue({}, s)), s) {
            i = s[r], a[r] !== i && Xr(o, r, i);
          }

          for (r in (De || Ne) && s.value !== a.value && Xr(o, "value", s.value), a) {
            P(s[r]) && (wr(r) ? o.removeAttributeNS(Ar, Sr(r)) : br(r) || o.removeAttribute(r));
          }
        }
      }

      function Xr(e, t, n) {
        e.tagName.indexOf("-") > -1 ? Zr(e, t, n) : Er(t) ? kr(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : br(t) ? e.setAttribute(t, function (e, t) {
          return kr(t) || "false" === t ? "false" : "contenteditable" === e && _r(t) ? t : "true";
        }(t, n)) : wr(t) ? kr(n) ? e.removeAttributeNS(Ar, Sr(t)) : e.setAttributeNS(Ar, t, n) : Zr(e, t, n);
      }

      function Zr(e, t, n) {
        if (kr(n)) e.removeAttribute(t);else {
          if (De && !Le && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
            var r = function r(t) {
              t.stopImmediatePropagation(), e.removeEventListener("input", r);
            };

            e.addEventListener("input", r), e.__ieph = !0;
          }

          e.setAttribute(t, n);
        }
      }

      var ei = {
        create: Qr,
        update: Qr
      };

      function ti(e, t) {
        var n = t.elm,
            r = t.data,
            i = e.data;

        if (!(P(r.staticClass) && P(r["class"]) && (P(i) || P(i.staticClass) && P(i["class"])))) {
          var o = function (e) {
            for (var t = e.data, n = e, r = e; B(r.componentInstance);) {
              (r = r.componentInstance._vnode) && r.data && (t = Cr(r.data, t));
            }

            for (; B(n = n.parent);) {
              n && n.data && (t = Cr(t, n.data));
            }

            return i = t.staticClass, o = t["class"], B(i) || B(o) ? Tr(i, Ir(o)) : "";
            var i, o;
          }(t),
              a = n._transitionClasses;

          B(a) && (o = Tr(o, Ir(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o);
        }
      }

      var ni,
          ri,
          ii,
          oi,
          ai,
          si,
          li = {
        create: ti,
        update: ti
      },
          ci = /[\w).+\-_$\]]/;

      function ui(e) {
        var t,
            n,
            r,
            i,
            o,
            a = !1,
            s = !1,
            l = !1,
            c = !1,
            u = 0,
            d = 0,
            f = 0,
            p = 0;

        for (r = 0; r < e.length; r++) {
          if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || d || f) {
            switch (t) {
              case 34:
                s = !0;
                break;

              case 39:
                a = !0;
                break;

              case 96:
                l = !0;
                break;

              case 40:
                f++;
                break;

              case 41:
                f--;
                break;

              case 91:
                d++;
                break;

              case 93:
                d--;
                break;

              case 123:
                u++;
                break;

              case 125:
                u--;
            }

            if (47 === t) {
              for (var h = r - 1, v = void 0; h >= 0 && " " === (v = e.charAt(h)); h--) {
                ;
              }

              v && ci.test(v) || (c = !0);
            }
          } else void 0 === i ? (p = r + 1, i = e.slice(0, r).trim()) : g();
        }

        function g() {
          (o || (o = [])).push(e.slice(p, r).trim()), p = r + 1;
        }

        if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== p && g(), o) for (r = 0; r < o.length; r++) {
          i = di(i, o[r]);
        }
        return i;
      }

      function di(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n),
            i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i);
      }

      function fi(e, t) {
        console.error("[Vue compiler]: " + e);
      }

      function pi(e, t) {
        return e ? e.map(function (e) {
          return e[t];
        }).filter(function (e) {
          return e;
        }) : [];
      }

      function hi(e, t, n, r, i) {
        (e.props || (e.props = [])).push(wi({
          name: t,
          value: n,
          dynamic: i
        }, r)), e.plain = !1;
      }

      function vi(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(wi({
          name: t,
          value: n,
          dynamic: i
        }, r)), e.plain = !1;
      }

      function gi(e, t, n, r) {
        e.attrsMap[t] = n, e.attrsList.push(wi({
          name: t,
          value: n
        }, r));
      }

      function mi(e, t, n, r, i, o, a, s) {
        (e.directives || (e.directives = [])).push(wi({
          name: t,
          rawName: n,
          value: r,
          arg: i,
          isDynamicArg: o,
          modifiers: a
        }, s)), e.plain = !1;
      }

      function yi(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t;
      }

      function bi(e, t, n, r, i, o, a, s) {
        var l;
        (r = r || F).right ? s ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete r.right) : r.middle && (s ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), r.capture && (delete r.capture, t = yi("!", t, s)), r.once && (delete r.once, t = yi("~", t, s)), r.passive && (delete r.passive, t = yi("&", t, s)), r["native"] ? (delete r["native"], l = e.nativeEvents || (e.nativeEvents = {})) : l = e.events || (e.events = {});
        var c = wi({
          value: n.trim(),
          dynamic: s
        }, a);
        r !== F && (c.modifiers = r);
        var u = l[t];
        Array.isArray(u) ? i ? u.unshift(c) : u.push(c) : l[t] = u ? i ? [c, u] : [u, c] : c, e.plain = !1;
      }

      function _i(e, t, n) {
        var r = Ei(e, ":" + t) || Ei(e, "v-bind:" + t);
        if (null != r) return ui(r);

        if (!1 !== n) {
          var i = Ei(e, t);
          if (null != i) return JSON.stringify(i);
        }
      }

      function Ei(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) {
          if (i[o].name === t) {
            i.splice(o, 1);
            break;
          }
        }
        return n && delete e.attrsMap[t], r;
      }

      function Ai(e, t) {
        for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          if (t.test(o.name)) return n.splice(r, 1), o;
        }
      }

      function wi(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
      }

      function Si(e, t, n) {
        var r = n || {},
            i = r.number,
            o = "$$v";
        r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
        var a = ki(t, o);
        e.model = {
          value: "(" + t + ")",
          expression: JSON.stringify(t),
          callback: "function ($$v) {" + a + "}"
        };
      }

      function ki(e, t) {
        var n = function (e) {
          if (e = e.trim(), ni = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < ni - 1) return (oi = e.lastIndexOf(".")) > -1 ? {
            exp: e.slice(0, oi),
            key: '"' + e.slice(oi + 1) + '"'
          } : {
            exp: e,
            key: null
          };

          for (ri = e, oi = ai = si = 0; !Ti();) {
            Ii(ii = Ci()) ? Oi(ii) : 91 === ii && xi(ii);
          }

          return {
            exp: e.slice(0, ai),
            key: e.slice(ai + 1, si)
          };
        }(e);

        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
      }

      function Ci() {
        return ri.charCodeAt(++oi);
      }

      function Ti() {
        return oi >= ni;
      }

      function Ii(e) {
        return 34 === e || 39 === e;
      }

      function xi(e) {
        var t = 1;

        for (ai = oi; !Ti();) {
          if (Ii(e = Ci())) Oi(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
            si = oi;
            break;
          }
        }
      }

      function Oi(e) {
        for (var t = e; !Ti() && (e = Ci()) !== t;) {
          ;
        }
      }

      var Mi;

      function Di(e, t, n) {
        var r = Mi;
        return function i() {
          var o = t.apply(null, arguments);
          null !== o && $i(e, i, n, r);
        };
      }

      var Li = Ot && !(Re && Number(Re[1]) <= 53);

      function Ni(e, t, n, r) {
        if (Li) {
          var i = zn,
              o = t;

          t = o._wrapper = function (e) {
            if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments);
          };
        }

        Mi.addEventListener(e, t, Fe ? {
          capture: n,
          passive: r
        } : n);
      }

      function $i(e, t, n, r) {
        (r || Mi).removeEventListener(e, t._wrapper || t, n);
      }

      function Ri(e, t) {
        if (!P(e.data.on) || !P(t.data.on)) {
          var n = t.data.on || {},
              r = e.data.on || {};
          Mi = t.elm, function (e) {
            if (B(e.__r)) {
              var t = De ? "change" : "input";
              e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
            }

            B(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
          }(n), Wt(n, r, Ni, $i, Di, t.context), Mi = void 0;
        }
      }

      var ji,
          Fi = {
        create: Ri,
        update: Ri
      };

      function Pi(e, t) {
        if (!P(e.data.domProps) || !P(t.data.domProps)) {
          var n,
              r,
              i = t.elm,
              o = e.data.domProps || {},
              a = t.data.domProps || {};

          for (n in B(a.__ob__) && (a = t.data.domProps = ue({}, a)), o) {
            n in a || (i[n] = "");
          }

          for (n in a) {
            if (r = a[n], "textContent" === n || "innerHTML" === n) {
              if (t.children && (t.children.length = 0), r === o[n]) continue;
              1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
            }

            if ("value" === n && "PROGRESS" !== i.tagName) {
              i._value = r;
              var s = P(r) ? "" : String(r);
              Bi(i, s) && (i.value = s);
            } else if ("innerHTML" === n && Mr(i.tagName) && P(i.innerHTML)) {
              (ji = ji || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";

              for (var l = ji.firstChild; i.firstChild;) {
                i.removeChild(i.firstChild);
              }

              for (; l.firstChild;) {
                i.appendChild(l.firstChild);
              }
            } else if (r !== o[n]) try {
              i[n] = r;
            } catch (e) {}
          }
        }
      }

      function Bi(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function (e, t) {
          var n = !0;

          try {
            n = document.activeElement !== e;
          } catch (e) {}

          return n && e.value !== t;
        }(e, t) || function (e, t) {
          var n = e.value,
              r = e._vModifiers;

          if (B(r)) {
            if (r.number) return K(n) !== K(t);
            if (r.trim) return n.trim() !== t.trim();
          }

          return n !== t;
        }(e, t));
      }

      var Ui = {
        create: Pi,
        update: Pi
      },
          Hi = ne(function (e) {
        var t = {},
            n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function (e) {
          if (e) {
            var r = e.split(n);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }), t;
      });

      function Gi(e) {
        var t = Wi(e.style);
        return e.staticStyle ? ue(e.staticStyle, t) : t;
      }

      function Wi(e) {
        return Array.isArray(e) ? de(e) : "string" == typeof e ? Hi(e) : e;
      }

      var Vi,
          Yi = /^--/,
          qi = /\s*!important$/,
          zi = function zi(e, t, n) {
        if (Yi.test(t)) e.style.setProperty(t, n);else if (qi.test(n)) e.style.setProperty(se(t), n.replace(qi, ""), "important");else {
          var r = Ji(t);
          if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
            e.style[r] = n[i];
          } else e.style[r] = n;
        }
      },
          Ki = ["Webkit", "Moz", "ms"],
          Ji = ne(function (e) {
        if (Vi = Vi || document.createElement("div").style, "filter" !== (e = ie(e)) && e in Vi) return e;

        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Ki.length; n++) {
          var r = Ki[n] + t;
          if (r in Vi) return r;
        }
      });

      function Qi(e, t) {
        var n = t.data,
            r = e.data;

        if (!(P(n.staticStyle) && P(n.style) && P(r.staticStyle) && P(r.style))) {
          var i,
              o,
              a = t.elm,
              s = r.staticStyle,
              l = r.normalizedStyle || r.style || {},
              c = s || l,
              u = Wi(t.data.style) || {};
          t.data.normalizedStyle = B(u.__ob__) ? ue({}, u) : u;

          var d = function (e, t) {
            for (var n, r = {}, i = e; i.componentInstance;) {
              (i = i.componentInstance._vnode) && i.data && (n = Gi(i.data)) && ue(r, n);
            }

            (n = Gi(e.data)) && ue(r, n);

            for (var o = e; o = o.parent;) {
              o.data && (n = Gi(o.data)) && ue(r, n);
            }

            return r;
          }(t);

          for (o in c) {
            P(d[o]) && zi(a, o, "");
          }

          for (o in d) {
            (i = d[o]) !== c[o] && zi(a, o, null == i ? "" : i);
          }
        }
      }

      var Xi = {
        create: Qi,
        update: Qi
      },
          Zi = /\s+/;

      function eo(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Zi).forEach(function (t) {
          return e.classList.add(t);
        }) : e.classList.add(t);else {
          var n = " " + (e.getAttribute("class") || "") + " ";
          n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
        }
      }

      function to(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Zi).forEach(function (t) {
          return e.classList.remove(t);
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
          for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
            n = n.replace(r, " ");
          }

          (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
        }
      }

      function no(e) {
        if (e) {
          if ("object" == _typeof(e)) {
            var t = {};
            return !1 !== e.css && ue(t, ro(e.name || "v")), ue(t, e), t;
          }

          return "string" == typeof e ? ro(e) : void 0;
        }
      }

      var ro = ne(function (e) {
        return {
          enterClass: e + "-enter",
          enterToClass: e + "-enter-to",
          enterActiveClass: e + "-enter-active",
          leaveClass: e + "-leave",
          leaveToClass: e + "-leave-to",
          leaveActiveClass: e + "-leave-active"
        };
      }),
          io = Ie && !Le,
          oo = "transition",
          ao = "animation",
          so = "transition",
          lo = "transitionend",
          co = "animation",
          uo = "animationend";
      io && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (so = "WebkitTransition", lo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (co = "WebkitAnimation", uo = "webkitAnimationEnd"));
      var fo = Ie ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
        return e();
      };

      function po(e) {
        fo(function () {
          fo(e);
        });
      }

      function ho(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), eo(e, t));
      }

      function vo(e, t) {
        e._transitionClasses && Z(e._transitionClasses, t), to(e, t);
      }

      function go(e, t, n) {
        var r = yo(e, t),
            i = r.type,
            o = r.timeout,
            a = r.propCount;
        if (!i) return n();

        var s = i === oo ? lo : uo,
            l = 0,
            c = function c() {
          e.removeEventListener(s, u), n();
        },
            u = function u(t) {
          t.target === e && ++l >= a && c();
        };

        setTimeout(function () {
          l < a && c();
        }, o + 1), e.addEventListener(s, u);
      }

      var mo = /\b(transform|all)(,|$)/;

      function yo(e, t) {
        var n,
            r = window.getComputedStyle(e),
            i = (r[so + "Delay"] || "").split(", "),
            o = (r[so + "Duration"] || "").split(", "),
            a = bo(i, o),
            s = (r[co + "Delay"] || "").split(", "),
            l = (r[co + "Duration"] || "").split(", "),
            c = bo(s, l),
            u = 0,
            d = 0;
        return t === oo ? a > 0 && (n = oo, u = a, d = o.length) : t === ao ? c > 0 && (n = ao, u = c, d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? oo : ao : null) ? n === oo ? o.length : l.length : 0, {
          type: n,
          timeout: u,
          propCount: d,
          hasTransform: n === oo && mo.test(r[so + "Property"])
        };
      }

      function bo(e, t) {
        for (; e.length < t.length;) {
          e = e.concat(e);
        }

        return Math.max.apply(null, t.map(function (t, n) {
          return _o(t) + _o(e[n]);
        }));
      }

      function _o(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
      }

      function Eo(e, t) {
        var n = e.elm;
        B(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var r = no(e.data.transition);

        if (!P(r) && !B(n._enterCb) && 1 === n.nodeType) {
          for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, l = r.enterActiveClass, c = r.appearClass, u = r.appearToClass, d = r.appearActiveClass, f = r.beforeEnter, p = r.enter, h = r.afterEnter, v = r.enterCancelled, g = r.beforeAppear, m = r.appear, y = r.afterAppear, b = r.appearCancelled, _ = r.duration, E = Rn, A = Rn.$vnode; A && A.parent;) {
            E = A.context, A = A.parent;
          }

          var w = !E._isMounted || !e.isRootInsert;

          if (!w || m || "" === m) {
            var S = w && c ? c : a,
                k = w && d ? d : l,
                C = w && u ? u : s,
                T = w && g || f,
                I = w && "function" == typeof m ? m : p,
                x = w && y || h,
                O = w && b || v,
                M = K(G(_) ? _.enter : _),
                D = !1 !== i && !Le,
                L = So(I),
                N = n._enterCb = me(function () {
              D && (vo(n, C), vo(n, k)), N.cancelled ? (D && vo(n, S), O && O(n)) : x && x(n), n._enterCb = null;
            });
            e.data.show || Vt(e, "insert", function () {
              var t = n.parentNode,
                  r = t && t._pending && t._pending[e.key];
              r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), I && I(n, N);
            }), T && T(n), D && (ho(n, S), ho(n, k), po(function () {
              vo(n, S), N.cancelled || (ho(n, C), L || (wo(M) ? setTimeout(N, M) : go(n, o, N)));
            })), e.data.show && (t && t(), I && I(n, N)), D || L || N();
          }
        }
      }

      function Ao(e, t) {
        var n = e.elm;
        B(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var r = no(e.data.transition);
        if (P(r) || 1 !== n.nodeType) return t();

        if (!B(n._leaveCb)) {
          var i = r.css,
              o = r.type,
              a = r.leaveClass,
              s = r.leaveToClass,
              l = r.leaveActiveClass,
              c = r.beforeLeave,
              u = r.leave,
              d = r.afterLeave,
              f = r.leaveCancelled,
              p = r.delayLeave,
              h = r.duration,
              v = !1 !== i && !Le,
              g = So(u),
              m = K(G(h) ? h.leave : h),
              y = n._leaveCb = me(function () {
            n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), v && (vo(n, s), vo(n, l)), y.cancelled ? (v && vo(n, a), f && f(n)) : (t(), d && d(n)), n._leaveCb = null;
          });
          p ? p(b) : b();
        }

        function b() {
          y.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), c && c(n), v && (ho(n, a), ho(n, l), po(function () {
            vo(n, a), y.cancelled || (ho(n, s), g || (wo(m) ? setTimeout(y, m) : go(n, o, y)));
          })), u && u(n, y), v || g || y());
        }
      }

      function wo(e) {
        return "number" == typeof e && !isNaN(e);
      }

      function So(e) {
        if (P(e)) return !1;
        var t = e.fns;
        return B(t) ? So(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
      }

      function ko(e, t) {
        !0 !== t.data.show && Eo(t);
      }

      var Co = function (e) {
        var t,
            n,
            r = {},
            i = e.modules,
            o = e.nodeOps;

        for (t = 0; t < Ur.length; ++t) {
          for (r[Ur[t]] = [], n = 0; n < i.length; ++n) {
            B(i[n][Ur[t]]) && r[Ur[t]].push(i[n][Ur[t]]);
          }
        }

        function a(e) {
          var t = o.parentNode(e);
          B(t) && o.removeChild(t, e);
        }

        function s(e, t, n, i, a, s, d) {
          if (B(e.elm) && B(s) && (e = s[d] = tt(e)), e.isRootInsert = !a, !function (e, t, n, i) {
            var o = e.data;

            if (B(o)) {
              var a = B(e.componentInstance) && o.keepAlive;
              if (B(o = o.hook) && B(o = o.init) && o(e, !1), B(e.componentInstance)) return l(e, t), c(n, e.elm, i), U(a) && function (e, t, n, i) {
                for (var o, a = e; a.componentInstance;) {
                  if (B(o = (a = a.componentInstance._vnode).data) && B(o = o.transition)) {
                    for (o = 0; o < r.activate.length; ++o) {
                      r.activate[o](Br, a);
                    }

                    t.push(a);
                    break;
                  }
                }

                c(n, e.elm, i);
              }(e, t, n, i), !0;
            }
          }(e, t, n, i)) {
            var h = e.data,
                v = e.children,
                g = e.tag;
            B(g) ? (e.elm = e.ns ? o.createElementNS(e.ns, g) : o.createElement(g, e), p(e), u(e, v, t), B(h) && f(e, t), c(n, e.elm, i)) : U(e.isComment) ? (e.elm = o.createComment(e.text), c(n, e.elm, i)) : (e.elm = o.createTextNode(e.text), c(n, e.elm, i));
          }
        }

        function l(e, t) {
          B(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, d(e) ? (f(e, t), p(e)) : (Pr(e), t.push(e));
        }

        function c(e, t, n) {
          B(e) && (B(n) ? o.parentNode(n) === e && o.insertBefore(e, t, n) : o.appendChild(e, t));
        }

        function u(e, t, n) {
          if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
            s(t[r], n, e.elm, null, !0, t, r);
          } else H(e.text) && o.appendChild(e.elm, o.createTextNode(String(e.text)));
        }

        function d(e) {
          for (; e.componentInstance;) {
            e = e.componentInstance._vnode;
          }

          return B(e.tag);
        }

        function f(e, n) {
          for (var i = 0; i < r.create.length; ++i) {
            r.create[i](Br, e);
          }

          B(t = e.data.hook) && (B(t.create) && t.create(Br, e), B(t.insert) && n.push(e));
        }

        function p(e) {
          var t;
          if (B(t = e.fnScopeId)) o.setStyleScope(e.elm, t);else for (var n = e; n;) {
            B(t = n.context) && B(t = t.$options._scopeId) && o.setStyleScope(e.elm, t), n = n.parent;
          }
          B(t = Rn) && t !== e.context && t !== e.fnContext && B(t = t.$options._scopeId) && o.setStyleScope(e.elm, t);
        }

        function h(e, t, n, r, i, o) {
          for (; r <= i; ++r) {
            s(n[r], o, e, t, !1, n, r);
          }
        }

        function v(e) {
          var t,
              n,
              i = e.data;
          if (B(i)) for (B(t = i.hook) && B(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) {
            r.destroy[t](e);
          }
          if (B(t = e.children)) for (n = 0; n < e.children.length; ++n) {
            v(e.children[n]);
          }
        }

        function g(e, t, n) {
          for (; t <= n; ++t) {
            var r = e[t];
            B(r) && (B(r.tag) ? (m(r), v(r)) : a(r.elm));
          }
        }

        function m(e, t) {
          if (B(t) || B(e.data)) {
            var n,
                i = r.remove.length + 1;

            for (B(t) ? t.listeners += i : t = function (e, t) {
              function n() {
                0 == --n.listeners && a(e);
              }

              return n.listeners = t, n;
            }(e.elm, i), B(n = e.componentInstance) && B(n = n._vnode) && B(n.data) && m(n, t), n = 0; n < r.remove.length; ++n) {
              r.remove[n](e, t);
            }

            B(n = e.data.hook) && B(n = n.remove) ? n(e, t) : t();
          } else a(e.elm);
        }

        function y(e, t, n, r) {
          for (var i = n; i < r; i++) {
            var o = t[i];
            if (B(o) && Hr(e, o)) return i;
          }
        }

        function b(e, t, n, i, a, l) {
          if (e !== t) {
            B(t.elm) && B(i) && (t = i[a] = tt(t));
            var c = t.elm = e.elm;
            if (U(e.isAsyncPlaceholder)) B(t.asyncFactory.resolved) ? A(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (U(t.isStatic) && U(e.isStatic) && t.key === e.key && (U(t.isCloned) || U(t.isOnce))) t.componentInstance = e.componentInstance;else {
              var u,
                  f = t.data;
              B(f) && B(u = f.hook) && B(u = u.prepatch) && u(e, t);
              var p = e.children,
                  v = t.children;

              if (B(f) && d(t)) {
                for (u = 0; u < r.update.length; ++u) {
                  r.update[u](e, t);
                }

                B(u = f.hook) && B(u = u.update) && u(e, t);
              }

              P(t.text) ? B(p) && B(v) ? p !== v && function (e, t, n, r, i) {
                for (var a, l, c, u = 0, d = 0, f = t.length - 1, p = t[0], v = t[f], m = n.length - 1, _ = n[0], E = n[m], A = !i; u <= f && d <= m;) {
                  P(p) ? p = t[++u] : P(v) ? v = t[--f] : Hr(p, _) ? (b(p, _, r, n, d), p = t[++u], _ = n[++d]) : Hr(v, E) ? (b(v, E, r, n, m), v = t[--f], E = n[--m]) : Hr(p, E) ? (b(p, E, r, n, m), A && o.insertBefore(e, p.elm, o.nextSibling(v.elm)), p = t[++u], E = n[--m]) : Hr(v, _) ? (b(v, _, r, n, d), A && o.insertBefore(e, v.elm, p.elm), v = t[--f], _ = n[++d]) : (P(a) && (a = Gr(t, u, f)), P(l = B(_.key) ? a[_.key] : y(_, t, u, f)) ? s(_, r, e, p.elm, !1, n, d) : Hr(c = t[l], _) ? (b(c, _, r, n, d), t[l] = void 0, A && o.insertBefore(e, c.elm, p.elm)) : s(_, r, e, p.elm, !1, n, d), _ = n[++d]);
                }

                u > f ? h(e, P(n[m + 1]) ? null : n[m + 1].elm, n, d, m, r) : d > m && g(t, u, f);
              }(c, p, v, n, l) : B(v) ? (B(e.text) && o.setTextContent(c, ""), h(c, null, v, 0, v.length - 1, n)) : B(p) ? g(p, 0, p.length - 1) : B(e.text) && o.setTextContent(c, "") : e.text !== t.text && o.setTextContent(c, t.text), B(f) && B(u = f.hook) && B(u = u.postpatch) && u(e, t);
            }
          }
        }

        function _(e, t, n) {
          if (U(n) && B(e.parent)) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
            t[r].data.hook.insert(t[r]);
          }
        }

        var E = J("attrs,class,staticClass,staticStyle,key");

        function A(e, t, n, r) {
          var i,
              o = t.tag,
              a = t.data,
              s = t.children;
          if (r = r || a && a.pre, t.elm = e, U(t.isComment) && B(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
          if (B(a) && (B(i = a.hook) && B(i = i.init) && i(t, !0), B(i = t.componentInstance))) return l(t, n), !0;

          if (B(o)) {
            if (B(s)) if (e.hasChildNodes()) {
              if (B(i = a) && B(i = i.domProps) && B(i = i.innerHTML)) {
                if (i !== e.innerHTML) return !1;
              } else {
                for (var c = !0, d = e.firstChild, p = 0; p < s.length; p++) {
                  if (!d || !A(d, s[p], n, r)) {
                    c = !1;
                    break;
                  }

                  d = d.nextSibling;
                }

                if (!c || d) return !1;
              }
            } else u(t, s, n);

            if (B(a)) {
              var h = !1;

              for (var v in a) {
                if (!E(v)) {
                  h = !0, f(t, n);
                  break;
                }
              }

              !h && a["class"] && Bt(a["class"]);
            }
          } else e.data !== t.text && (e.data = t.text);

          return !0;
        }

        return function (e, t, n, i) {
          if (!P(t)) {
            var a,
                l = !1,
                c = [];
            if (P(e)) l = !0, s(t, c);else {
              var u = B(e.nodeType);
              if (!u && Hr(e, t)) b(e, t, c, null, null, i);else {
                if (u) {
                  if (1 === e.nodeType && e.hasAttribute(ye) && (e.removeAttribute(ye), n = !0), U(n) && A(e, t, c)) return _(t, c, !0), e;
                  a = e, e = new Qe(o.tagName(a).toLowerCase(), {}, [], void 0, a);
                }

                var f = e.elm,
                    p = o.parentNode(f);
                if (s(t, c, f._leaveCb ? null : p, o.nextSibling(f)), B(t.parent)) for (var h = t.parent, m = d(t); h;) {
                  for (var y = 0; y < r.destroy.length; ++y) {
                    r.destroy[y](h);
                  }

                  if (h.elm = t.elm, m) {
                    for (var E = 0; E < r.create.length; ++E) {
                      r.create[E](Br, h);
                    }

                    var w = h.data.hook.insert;
                    if (w.merged) for (var S = 1; S < w.fns.length; S++) {
                      w.fns[S]();
                    }
                  } else Pr(h);

                  h = h.parent;
                }
                B(p) ? g([e], 0, 0) : B(e.tag) && v(e);
              }
            }
            return _(t, c, l), t.elm;
          }

          B(e) && v(e);
        };
      }({
        nodeOps: jr,
        modules: [ei, li, Fi, Ui, Xi, Ie ? {
          create: ko,
          activate: ko,
          remove: function remove(e, t) {
            !0 !== e.data.show ? Ao(e, t) : t();
          }
        } : {}].concat(Jr)
      });

      Le && document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        e && e.vmodel && No(e, "input");
      });
      var To = {
        inserted: function inserted(e, t, n, r) {
          "select" === n.tag ? (r.elm && !r.elm._vOptions ? Vt(n, "postpatch", function () {
            To.componentUpdated(e, t, n);
          }) : Io(e, t, n.context), e._vOptions = [].map.call(e.options, Mo)) : ("textarea" === n.tag || $r(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Do), e.addEventListener("compositionend", Lo), e.addEventListener("change", Lo), Le && (e.vmodel = !0)));
        },
        componentUpdated: function componentUpdated(e, t, n) {
          if ("select" === n.tag) {
            Io(e, t, n.context);
            var r = e._vOptions,
                i = e._vOptions = [].map.call(e.options, Mo);
            i.some(function (e, t) {
              return !ve(e, r[t]);
            }) && (e.multiple ? t.value.some(function (e) {
              return Oo(e, i);
            }) : t.value !== t.oldValue && Oo(t.value, i)) && No(e, "change");
          }
        }
      };

      function Io(e, t, n) {
        xo(e, t), (De || Ne) && setTimeout(function () {
          xo(e, t);
        }, 0);
      }

      function xo(e, t, n) {
        var r = t.value,
            i = e.multiple;

        if (!i || Array.isArray(r)) {
          for (var o, a, s = 0, l = e.options.length; s < l; s++) {
            if (a = e.options[s], i) o = ge(r, Mo(a)) > -1, a.selected !== o && (a.selected = o);else if (ve(Mo(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
          }

          i || (e.selectedIndex = -1);
        }
      }

      function Oo(e, t) {
        return t.every(function (t) {
          return !ve(t, e);
        });
      }

      function Mo(e) {
        return "_value" in e ? e._value : e.value;
      }

      function Do(e) {
        e.target.composing = !0;
      }

      function Lo(e) {
        e.target.composing && (e.target.composing = !1, No(e.target, "input"));
      }

      function No(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }

      function $o(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : $o(e.componentInstance._vnode);
      }

      var Ro = {
        model: To,
        show: {
          bind: function bind(e, t, n) {
            var r = t.value,
                i = (n = $o(n)).data && n.data.transition,
                o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
            r && i ? (n.data.show = !0, Eo(n, function () {
              e.style.display = o;
            })) : e.style.display = r ? o : "none";
          },
          update: function update(e, t, n) {
            var r = t.value;
            !r != !t.oldValue && ((n = $o(n)).data && n.data.transition ? (n.data.show = !0, r ? Eo(n, function () {
              e.style.display = e.__vOriginalDisplay;
            }) : Ao(n, function () {
              e.style.display = "none";
            })) : e.style.display = r ? e.__vOriginalDisplay : "none");
          },
          unbind: function unbind(e, t, n, r, i) {
            i || (e.style.display = e.__vOriginalDisplay);
          }
        }
      },
          jo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      };

      function Fo(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options["abstract"] ? Fo(Mn(t.children)) : e;
      }

      function Po(e) {
        var t = {},
            n = e.$options;

        for (var r in n.propsData) {
          t[r] = e[r];
        }

        var i = n._parentListeners;

        for (var o in i) {
          t[ie(o)] = i[o];
        }

        return t;
      }

      function Bo(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
          props: t.componentOptions.propsData
        });
      }

      var Uo = function Uo(e) {
        return e.tag || On(e);
      },
          Ho = function Ho(e) {
        return "show" === e.name;
      },
          Go = {
        name: "transition",
        props: jo,
        "abstract": !0,
        render: function render(e) {
          var t = this,
              n = this.$slots["default"];

          if (n && (n = n.filter(Uo)).length) {
            var r = this.mode,
                i = n[0];
            if (function (e) {
              for (; e = e.parent;) {
                if (e.data.transition) return !0;
              }
            }(this.$vnode)) return i;
            var o = Fo(i);
            if (!o) return i;
            if (this._leaving) return Bo(e, i);
            var a = "__transition-" + this._uid + "-";
            o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : H(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
            var s = (o.data || (o.data = {})).transition = Po(this),
                l = this._vnode,
                c = Fo(l);

            if (o.data.directives && o.data.directives.some(Ho) && (o.data.show = !0), c && c.data && !function (e, t) {
              return t.key === e.key && t.tag === e.tag;
            }(o, c) && !On(c) && (!c.componentInstance || !c.componentInstance._vnode.isComment)) {
              var u = c.data.transition = ue({}, s);
              if ("out-in" === r) return this._leaving = !0, Vt(u, "afterLeave", function () {
                t._leaving = !1, t.$forceUpdate();
              }), Bo(e, i);

              if ("in-out" === r) {
                if (On(o)) return l;

                var d,
                    f = function f() {
                  d();
                };

                Vt(s, "afterEnter", f), Vt(s, "enterCancelled", f), Vt(u, "delayLeave", function (e) {
                  d = e;
                });
              }
            }

            return i;
          }
        }
      },
          Wo = ue({
        tag: String,
        moveClass: String
      }, jo);

      function Vo(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }

      function Yo(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }

      function qo(e) {
        var t = e.data.pos,
            n = e.data.newPos,
            r = t.left - n.left,
            i = t.top - n.top;

        if (r || i) {
          e.data.moved = !0;
          var o = e.elm.style;
          o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
        }
      }

      delete Wo.mode;
      var zo = {
        Transition: Go,
        TransitionGroup: {
          props: Wo,
          beforeMount: function beforeMount() {
            var e = this,
                t = this._update;

            this._update = function (n, r) {
              var i = jn(e);
              e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r);
            };
          },
          render: function render(e) {
            for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], a = Po(this), s = 0; s < i.length; s++) {
              var l = i[s];
              l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a);
            }

            if (r) {
              for (var c = [], u = [], d = 0; d < r.length; d++) {
                var f = r[d];
                f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : u.push(f);
              }

              this.kept = e(t, null, c), this.removed = u;
            }

            return e(t, null, o);
          },
          updated: function updated() {
            var e = this.prevChildren,
                t = this.moveClass || (this.name || "v") + "-move";
            e.length && this.hasMove(e[0].elm, t) && (e.forEach(Vo), e.forEach(Yo), e.forEach(qo), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                    r = n.style;
                ho(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(lo, n._moveCb = function e(r) {
                  r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(lo, e), n._moveCb = null, vo(n, t));
                });
              }
            }));
          },
          methods: {
            hasMove: function hasMove(e, t) {
              if (!io) return !1;
              if (this._hasMove) return this._hasMove;
              var n = e.cloneNode();
              e._transitionClasses && e._transitionClasses.forEach(function (e) {
                to(n, e);
              }), eo(n, t), n.style.display = "none", this.$el.appendChild(n);
              var r = yo(n);
              return this.$el.removeChild(n), this._hasMove = r.hasTransform;
            }
          }
        }
      };
      cr.config.mustUseProp = yr, cr.config.isReservedTag = Dr, cr.config.isReservedAttr = gr, cr.config.getTagNamespace = Lr, cr.config.isUnknownElement = function (e) {
        if (!Ie) return !0;
        if (Dr(e)) return !1;
        if (e = e.toLowerCase(), null != Nr[e]) return Nr[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? Nr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Nr[e] = /HTMLUnknownElement/.test(t.toString());
      }, ue(cr.options.directives, Ro), ue(cr.options.components, zo), cr.prototype.__patch__ = Ie ? Co : fe, cr.prototype.$mount = function (e, t) {
        return function (e, t, n) {
          var r;
          return e.$el = t, e.$options.render || (e.$options.render = Ze), Un(e, "beforeMount"), r = function r() {
            e._update(e._render(), n);
          }, new Zn(e, r, fe, {
            before: function before() {
              e._isMounted && !e._isDestroyed && Un(e, "beforeUpdate");
            }
          }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Un(e, "mounted")), e;
        }(this, e = e && Ie ? Rr(e) : void 0, t);
      }, Ie && setTimeout(function () {
        Ee.devtools && Ue && Ue.emit("init", cr);
      }, 0);

      var Ko,
          Jo = /\{\{((?:.|\r?\n)+?)\}\}/g,
          Qo = /[-.*+?^${}()|[\]\/\\]/g,
          Xo = ne(function (e) {
        var t = e[0].replace(Qo, "\\$&"),
            n = e[1].replace(Qo, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
      }),
          Zo = {
        staticKeys: ["staticClass"],
        transformNode: function transformNode(e, t) {
          t.warn;
          var n = Ei(e, "class");
          n && (e.staticClass = JSON.stringify(n));

          var r = _i(e, "class", !1);

          r && (e.classBinding = r);
        },
        genData: function genData(e) {
          var t = "";
          return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
        }
      },
          ea = {
        staticKeys: ["staticStyle"],
        transformNode: function transformNode(e, t) {
          t.warn;
          var n = Ei(e, "style");
          n && (e.staticStyle = JSON.stringify(Hi(n)));

          var r = _i(e, "style", !1);

          r && (e.styleBinding = r);
        },
        genData: function genData(e) {
          var t = "";
          return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
        }
      },
          ta = J("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
          na = J("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
          ra = J("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
          ia = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          oa = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          aa = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + Ae.source + "]*",
          sa = "((?:" + aa + "\\:)?" + aa + ")",
          la = new RegExp("^<" + sa),
          ca = /^\s*(\/?)>/,
          ua = new RegExp("^<\\/" + sa + "[^>]*>"),
          da = /^<!DOCTYPE [^>]+>/i,
          fa = /^<!\--/,
          pa = /^<!\[/,
          ha = J("script,style,textarea", !0),
          va = {},
          ga = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
      },
          ma = /&(?:lt|gt|quot|amp|#39);/g,
          ya = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
          ba = J("pre,textarea", !0),
          _a = function _a(e, t) {
        return e && ba(e) && "\n" === t[0];
      };

      function Ea(e, t) {
        var n = t ? ya : ma;
        return e.replace(n, function (e) {
          return ga[e];
        });
      }

      var Aa,
          wa,
          Sa,
          ka,
          Ca,
          Ta,
          Ia,
          xa,
          Oa = /^@|^v-on:/,
          Ma = /^v-|^@|^:|^#/,
          Da = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
          La = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          Na = /^\(|\)$/g,
          $a = /^\[.*\]$/,
          Ra = /:(.*)$/,
          ja = /^:|^\.|^v-bind:/,
          Fa = /\.[^.\]]+(?=[^\]]*$)/g,
          Pa = /^v-slot(:|$)|^#/,
          Ba = /[\r\n]/,
          Ua = /\s+/g,
          Ha = ne(function (e) {
        return (Ko = Ko || document.createElement("div")).innerHTML = e, Ko.textContent;
      }),
          Ga = "_empty_";

      function Wa(e, t, n) {
        return {
          type: 1,
          tag: e,
          attrsList: t,
          attrsMap: Ja(t),
          rawAttrsMap: {},
          parent: n,
          children: []
        };
      }

      function Va(e, t) {
        var n;
        !function (e) {
          var t = _i(e, "key");

          t && (e.key = t);
        }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
          var t = _i(e, "ref");

          t && (e.ref = t, e.refInFor = function (e) {
            for (var t = e; t;) {
              if (void 0 !== t["for"]) return !0;
              t = t.parent;
            }

            return !1;
          }(e));
        }(e), function (e) {
          var t;
          "template" === e.tag ? (t = Ei(e, "scope"), e.slotScope = t || Ei(e, "slot-scope")) : (t = Ei(e, "slot-scope")) && (e.slotScope = t);

          var n = _i(e, "slot");

          if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || vi(e, "slot", n, function (e, t) {
            return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
          }(e))), "template" === e.tag) {
            var r = Ai(e, Pa);

            if (r) {
              var i = za(r),
                  o = i.name,
                  a = i.dynamic;
              e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || Ga;
            }
          } else {
            var s = Ai(e, Pa);

            if (s) {
              var l = e.scopedSlots || (e.scopedSlots = {}),
                  c = za(s),
                  u = c.name,
                  d = c.dynamic,
                  f = l[u] = Wa("template", [], e);
              f.slotTarget = u, f.slotTargetDynamic = d, f.children = e.children.filter(function (e) {
                if (!e.slotScope) return e.parent = f, !0;
              }), f.slotScope = s.value || Ga, e.children = [], e.plain = !1;
            }
          }
        }(e), "slot" === (n = e).tag && (n.slotName = _i(n, "name")), function (e) {
          var t;
          (t = _i(e, "is")) && (e.component = t), null != Ei(e, "inline-template") && (e.inlineTemplate = !0);
        }(e);

        for (var r = 0; r < Sa.length; r++) {
          e = Sa[r](e, t) || e;
        }

        return function (e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l,
              c = e.attrsList;

          for (t = 0, n = c.length; t < n; t++) {
            if (r = i = c[t].name, o = c[t].value, Ma.test(r)) {
              if (e.hasBindings = !0, (a = Ka(r.replace(Ma, ""))) && (r = r.replace(Fa, "")), ja.test(r)) r = r.replace(ja, ""), o = ui(o), (l = $a.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (r = ie(r)) && (r = "innerHTML"), a.camel && !l && (r = ie(r)), a.sync && (s = ki(o, "$event"), l ? bi(e, '"update:"+(' + r + ")", s, null, !1, 0, c[t], !0) : (bi(e, "update:" + ie(r), s, null, !1, 0, c[t]), se(r) !== ie(r) && bi(e, "update:" + se(r), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Ia(e.tag, e.attrsMap.type, r) ? hi(e, r, o, c[t], l) : vi(e, r, o, c[t], l);else if (Oa.test(r)) r = r.replace(Oa, ""), (l = $a.test(r)) && (r = r.slice(1, -1)), bi(e, r, o, a, !1, 0, c[t], l);else {
                var u = (r = r.replace(Ma, "")).match(Ra),
                    d = u && u[1];
                l = !1, d && (r = r.slice(0, -(d.length + 1)), $a.test(d) && (d = d.slice(1, -1), l = !0)), mi(e, r, i, o, d, l, a, c[t]);
              }
            } else vi(e, r, JSON.stringify(o), c[t]), !e.component && "muted" === r && Ia(e.tag, e.attrsMap.type, r) && hi(e, r, "true", c[t]);
          }
        }(e), e;
      }

      function Ya(e) {
        var t;

        if (t = Ei(e, "v-for")) {
          var n = function (e) {
            var t = e.match(Da);

            if (t) {
              var n = {};
              n["for"] = t[2].trim();
              var r = t[1].trim().replace(Na, ""),
                  i = r.match(La);
              return i ? (n.alias = r.replace(La, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n;
            }
          }(t);

          n && ue(e, n);
        }
      }

      function qa(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }

      function za(e) {
        var t = e.name.replace(Pa, "");
        return t || "#" !== e.name[0] && (t = "default"), $a.test(t) ? {
          name: t.slice(1, -1),
          dynamic: !0
        } : {
          name: '"' + t + '"',
          dynamic: !1
        };
      }

      function Ka(e) {
        var t = e.match(Fa);

        if (t) {
          var n = {};
          return t.forEach(function (e) {
            n[e.slice(1)] = !0;
          }), n;
        }
      }

      function Ja(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) {
          t[e[n].name] = e[n].value;
        }

        return t;
      }

      var Qa = /^xmlns:NS\d+/,
          Xa = /^NS\d+:/;

      function Za(e) {
        return Wa(e.tag, e.attrsList.slice(), e.parent);
      }

      var es,
          ts,
          ns,
          rs = [Zo, ea, {
        preTransformNode: function preTransformNode(e, t) {
          if ("input" === e.tag) {
            var n,
                r = e.attrsMap;
            if (!r["v-model"]) return;

            if ((r[":type"] || r["v-bind:type"]) && (n = _i(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
              var i = Ei(e, "v-if", !0),
                  o = i ? "&&(" + i + ")" : "",
                  a = null != Ei(e, "v-else", !0),
                  s = Ei(e, "v-else-if", !0),
                  l = Za(e);
              Ya(l), gi(l, "type", "checkbox"), Va(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + o, qa(l, {
                exp: l["if"],
                block: l
              });
              var c = Za(e);
              Ei(c, "v-for", !0), gi(c, "type", "radio"), Va(c, t), qa(l, {
                exp: "(" + n + ")==='radio'" + o,
                block: c
              });
              var u = Za(e);
              return Ei(u, "v-for", !0), gi(u, ":type", n), Va(u, t), qa(l, {
                exp: i,
                block: u
              }), a ? l["else"] = !0 : s && (l.elseif = s), l;
            }
          }
        }
      }],
          is = {
        expectHTML: !0,
        modules: rs,
        directives: {
          model: function model(e, t, n) {
            var r = t.value,
                i = t.modifiers,
                o = e.tag,
                a = e.attrsMap.type;
            if (e.component) return Si(e, r, i), !1;
            if ("select" === o) !function (e, t, n) {
              var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
              bi(e, "change", r = r + " " + ki(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
            }(e, r, i);else if ("input" === o && "checkbox" === a) !function (e, t, n) {
              var r = n && n.number,
                  i = _i(e, "value") || "null",
                  o = _i(e, "true-value") || "true",
                  a = _i(e, "false-value") || "false";
              hi(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), bi(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + ki(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + ki(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + ki(t, "$$c") + "}", null, !0);
            }(e, r, i);else if ("input" === o && "radio" === a) !function (e, t, n) {
              var r = n && n.number,
                  i = _i(e, "value") || "null";
              hi(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), bi(e, "change", ki(t, i), null, !0);
            }(e, r, i);else if ("input" === o || "textarea" === o) !function (e, t, n) {
              var r = e.attrsMap.type,
                  i = n || {},
                  o = i.lazy,
                  a = i.number,
                  s = i.trim,
                  l = !o && "range" !== r,
                  c = o ? "change" : "range" === r ? "__r" : "input",
                  u = "$event.target.value";
              s && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")");
              var d = ki(t, u);
              l && (d = "if($event.target.composing)return;" + d), hi(e, "value", "(" + t + ")"), bi(e, c, d, null, !0), (s || a) && bi(e, "blur", "$forceUpdate()");
            }(e, r, i);else if (!Ee.isReservedTag(o)) return Si(e, r, i), !1;
            return !0;
          },
          text: function text(e, t) {
            t.value && hi(e, "textContent", "_s(" + t.value + ")", t);
          },
          html: function html(e, t) {
            t.value && hi(e, "innerHTML", "_s(" + t.value + ")", t);
          }
        },
        isPreTag: function isPreTag(e) {
          return "pre" === e;
        },
        isUnaryTag: ta,
        mustUseProp: yr,
        canBeLeftOpenTag: na,
        isReservedTag: Dr,
        getTagNamespace: Lr,
        staticKeys: (ns = rs, ns.reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, []).join(","))
      },
          os = ne(function (e) {
        return J("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
      });

      function as(e, t) {
        e && (es = os(t.staticKeys || ""), ts = t.isReservedTag || pe, ss(e), ls(e, !1));
      }

      function ss(e) {
        if (e["static"] = function (e) {
          return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || Q(e.tag) || !ts(e.tag) || function (e) {
            for (; e.parent;) {
              if ("template" !== (e = e.parent).tag) return !1;
              if (e["for"]) return !0;
            }

            return !1;
          }(e) || !Object.keys(e).every(es))));
        }(e), 1 === e.type) {
          if (!ts(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

          for (var t = 0, n = e.children.length; t < n; t++) {
            var r = e.children[t];
            ss(r), r["static"] || (e["static"] = !1);
          }

          if (e.ifConditions) for (var i = 1, o = e.ifConditions.length; i < o; i++) {
            var a = e.ifConditions[i].block;
            ss(a), a["static"] || (e["static"] = !1);
          }
        }
      }

      function ls(e, t) {
        if (1 === e.type) {
          if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
          if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
            ls(e.children[n], t || !!e["for"]);
          }
          if (e.ifConditions) for (var i = 1, o = e.ifConditions.length; i < o; i++) {
            ls(e.ifConditions[i].block, t);
          }
        }
      }

      var cs = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
          us = /\([^)]*?\);*$/,
          ds = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
          fs = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        "delete": [8, 46]
      },
          ps = {
        esc: ["Esc", "Escape"],
        tab: "Tab",
        enter: "Enter",
        space: [" ", "Spacebar"],
        up: ["Up", "ArrowUp"],
        left: ["Left", "ArrowLeft"],
        right: ["Right", "ArrowRight"],
        down: ["Down", "ArrowDown"],
        "delete": ["Backspace", "Delete", "Del"]
      },
          hs = function hs(e) {
        return "if(" + e + ")return null;";
      },
          vs = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: hs("$event.target !== $event.currentTarget"),
        ctrl: hs("!$event.ctrlKey"),
        shift: hs("!$event.shiftKey"),
        alt: hs("!$event.altKey"),
        meta: hs("!$event.metaKey"),
        left: hs("'button' in $event && $event.button !== 0"),
        middle: hs("'button' in $event && $event.button !== 1"),
        right: hs("'button' in $event && $event.button !== 2")
      };

      function gs(e, t) {
        var n = t ? "nativeOn:" : "on:",
            r = "",
            i = "";

        for (var o in e) {
          var a = ms(e[o]);
          e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ",";
        }

        return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r;
      }

      function ms(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map(function (e) {
          return ms(e);
        }).join(",") + "]";
        var t = ds.test(e.value),
            n = cs.test(e.value),
            r = ds.test(e.value.replace(us, ""));

        if (e.modifiers) {
          var i = "",
              o = "",
              a = [];

          for (var s in e.modifiers) {
            if (vs[s]) o += vs[s], fs[s] && a.push(s);else if ("exact" === s) {
              var l = e.modifiers;
              o += hs(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                return !l[e];
              }).map(function (e) {
                return "$event." + e + "Key";
              }).join("||"));
            } else a.push(s);
          }

          return a.length && (i += function (e) {
            return "if(!$event.type.indexOf('key')&&" + e.map(ys).join("&&") + ")return null;";
          }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}";
        }

        return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}";
      }

      function ys(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = fs[e],
            r = ps[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")";
      }

      var bs = {
        on: function on(e, t) {
          e.wrapListeners = function (e) {
            return "_g(" + e + "," + t.value + ")";
          };
        },
        bind: function bind(e, t) {
          e.wrapData = function (n) {
            return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
          };
        },
        cloak: fe
      },
          _s = function _s(e) {
        this.options = e, this.warn = e.warn || fi, this.transforms = pi(e.modules, "transformCode"), this.dataGenFns = pi(e.modules, "genData"), this.directives = ue(ue({}, bs), e.directives);
        var t = e.isReservedTag || pe;
        this.maybeComponent = function (e) {
          return !!e.component || !t(e.tag);
        }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
      };

      function Es(e, t) {
        var n = new _s(t);
        return {
          render: "with(this){return " + (e ? As(e, n) : '_c("div")') + "}",
          staticRenderFns: n.staticRenderFns
        };
      }

      function As(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return ws(e, t);
        if (e.once && !e.onceProcessed) return Ss(e, t);
        if (e["for"] && !e.forProcessed) return Ts(e, t);
        if (e["if"] && !e.ifProcessed) return ks(e, t);

        if ("template" !== e.tag || e.slotTarget || t.pre) {
          if ("slot" === e.tag) return function (e, t) {
            var n = e.slotName || '"default"',
                r = Ms(e, t),
                i = "_t(" + n + (r ? "," + r : ""),
                o = e.attrs || e.dynamicAttrs ? Ns((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
              return {
                name: ie(e.name),
                value: e.value,
                dynamic: e.dynamic
              };
            })) : null,
                a = e.attrsMap["v-bind"];
            return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")";
          }(e, t);
          var n;
          if (e.component) n = function (e, t, n) {
            var r = t.inlineTemplate ? null : Ms(t, n, !0);
            return "_c(" + e + "," + Is(t, n) + (r ? "," + r : "") + ")";
          }(e.component, e, t);else {
            var r;
            (!e.plain || e.pre && t.maybeComponent(e)) && (r = Is(e, t));
            var i = e.inlineTemplate ? null : Ms(e, t, !0);
            n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
          }

          for (var o = 0; o < t.transforms.length; o++) {
            n = t.transforms[o](e, n);
          }

          return n;
        }

        return Ms(e, t) || "void 0";
      }

      function ws(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + As(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
      }

      function Ss(e, t) {
        if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return ks(e, t);

        if (e.staticInFor) {
          for (var n = "", r = e.parent; r;) {
            if (r["for"]) {
              n = r.key;
              break;
            }

            r = r.parent;
          }

          return n ? "_o(" + As(e, t) + "," + t.onceId++ + "," + n + ")" : As(e, t);
        }

        return ws(e, t);
      }

      function ks(e, t, n, r) {
        return e.ifProcessed = !0, Cs(e.ifConditions.slice(), t, n, r);
      }

      function Cs(e, t, n, r) {
        if (!e.length) return r || "_e()";
        var i = e.shift();
        return i.exp ? "(" + i.exp + ")?" + o(i.block) + ":" + Cs(e, t, n, r) : "" + o(i.block);

        function o(e) {
          return n ? n(e, t) : e.once ? Ss(e, t) : As(e, t);
        }
      }

      function Ts(e, t, n, r) {
        var i = e["for"],
            o = e.alias,
            a = e.iterator1 ? "," + e.iterator1 : "",
            s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || As)(e, t) + "})";
      }

      function Is(e, t) {
        var n = "{",
            r = function (e, t) {
          var n = e.directives;

          if (n) {
            var r,
                i,
                o,
                a,
                s = "directives:[",
                l = !1;

            for (r = 0, i = n.length; r < i; r++) {
              o = n[r], a = !0;
              var c = t.directives[o.name];
              c && (a = !!c(e, o, t.warn)), a && (l = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
            }

            return l ? s.slice(0, -1) + "]" : void 0;
          }
        }(e, t);

        r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

        for (var i = 0; i < t.dataGenFns.length; i++) {
          n += t.dataGenFns[i](e);
        }

        if (e.attrs && (n += "attrs:" + Ns(e.attrs) + ","), e.props && (n += "domProps:" + Ns(e.props) + ","), e.events && (n += gs(e.events, !1) + ","), e.nativeEvents && (n += gs(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
          var r = e["for"] || Object.keys(t).some(function (e) {
            var n = t[e];
            return n.slotTargetDynamic || n["if"] || n["for"] || xs(n);
          }),
              i = !!e["if"];
          if (!r) for (var o = e.parent; o;) {
            if (o.slotScope && o.slotScope !== Ga || o["for"]) {
              r = !0;
              break;
            }

            o["if"] && (i = !0), o = o.parent;
          }
          var a = Object.keys(t).map(function (e) {
            return Os(t[e], n);
          }).join(",");
          return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function (e) {
            for (var t = 5381, n = e.length; n;) {
              t = 33 * t ^ e.charCodeAt(--n);
            }

            return t >>> 0;
          }(a) : "") + ")";
        }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
          var o = function (e, t) {
            var n = e.children[0];

            if (n && 1 === n.type) {
              var r = Es(n, t.options);
              return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
                return "function(){" + e + "}";
              }).join(",") + "]}";
            }
          }(e, t);

          o && (n += o + ",");
        }

        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ns(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
      }

      function xs(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(xs));
      }

      function Os(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e["if"] && !e.ifProcessed && !n) return ks(e, t, Os, "null");
        if (e["for"] && !e.forProcessed) return Ts(e, t, Os);
        var r = e.slotScope === Ga ? "" : String(e.slotScope),
            i = "function(" + r + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Ms(e, t) || "undefined") + ":undefined" : Ms(e, t) || "undefined" : As(e, t)) + "}",
            o = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}";
      }

      function Ms(e, t, n, r, i) {
        var o = e.children;

        if (o.length) {
          var a = o[0];

          if (1 === o.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
            var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
            return "" + (r || As)(a, t) + s;
          }

          var l = n ? function (e, t) {
            for (var n = 0, r = 0; r < e.length; r++) {
              var i = e[r];

              if (1 === i.type) {
                if (Ds(i) || i.ifConditions && i.ifConditions.some(function (e) {
                  return Ds(e.block);
                })) {
                  n = 2;
                  break;
                }

                (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
                  return t(e.block);
                })) && (n = 1);
              }
            }

            return n;
          }(o, t.maybeComponent) : 0,
              c = i || Ls;
          return "[" + o.map(function (e) {
            return c(e, t);
          }).join(",") + "]" + (l ? "," + l : "");
        }
      }

      function Ds(e) {
        return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
      }

      function Ls(e, t) {
        return 1 === e.type ? As(e, t) : 3 === e.type && e.isComment ? function (e) {
          return "_e(" + JSON.stringify(e.text) + ")";
        }(e) : "_v(" + (2 === (n = e).type ? n.expression : $s(JSON.stringify(n.text))) + ")";
        var n;
      }

      function Ns(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
          var i = e[r],
              o = $s(i.value);
          i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ",";
        }

        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
      }

      function $s(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }

      function Rs(e, t) {
        try {
          return new Function(e);
        } catch (n) {
          return t.push({
            err: n,
            code: e
          }), fe;
        }
      }

      function js(e) {
        var t = Object.create(null);
        return function (n, r, i) {
          (r = ue({}, r)).warn, delete r.warn;
          var o = r.delimiters ? String(r.delimiters) + n : n;
          if (t[o]) return t[o];
          var a = e(n, r),
              s = {},
              l = [];
          return s.render = Rs(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
            return Rs(e, l);
          }), t[o] = s;
        };
      }

      new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
      var Fs,
          Ps,
          Bs = (Fs = function Fs(e, t) {
        var n = function (e, t) {
          Aa = t.warn || fi, Ta = t.isPreTag || pe, Ia = t.mustUseProp || pe, xa = t.getTagNamespace || pe, t.isReservedTag, Sa = pi(t.modules, "transformNode"), ka = pi(t.modules, "preTransformNode"), Ca = pi(t.modules, "postTransformNode"), wa = t.delimiters;
          var n,
              r,
              i = [],
              o = !1 !== t.preserveWhitespace,
              a = t.whitespace,
              s = !1,
              l = !1;

          function c(e) {
            if (u(e), s || e.processed || (e = Va(e, t)), i.length || e === n || n["if"] && (e.elseif || e["else"]) && qa(n, {
              exp: e.elseif,
              block: e
            }), r && !e.forbidden) if (e.elseif || e["else"]) a = e, (c = function (e) {
              for (var t = e.length; t--;) {
                if (1 === e[t].type) return e[t];
                e.pop();
              }
            }(r.children)) && c["if"] && qa(c, {
              exp: a.elseif,
              block: a
            });else {
              if (e.slotScope) {
                var o = e.slotTarget || '"default"';
                (r.scopedSlots || (r.scopedSlots = {}))[o] = e;
              }

              r.children.push(e), e.parent = r;
            }
            var a, c;
            e.children = e.children.filter(function (e) {
              return !e.slotScope;
            }), u(e), e.pre && (s = !1), Ta(e.tag) && (l = !1);

            for (var d = 0; d < Ca.length; d++) {
              Ca[d](e, t);
            }
          }

          function u(e) {
            if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
              e.children.pop();
            }
          }

          return function (e, t) {
            for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || pe, s = t.canBeLeftOpenTag || pe, l = 0; e;) {
              if (n = e, r && ha(r)) {
                var c = 0,
                    u = r.toLowerCase(),
                    d = va[u] || (va[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                    f = e.replace(d, function (e, n, r) {
                  return c = r.length, ha(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), _a(u, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
                });
                l += e.length - f.length, e = f, C(u, l - c, l);
              } else {
                var p = e.indexOf("<");

                if (0 === p) {
                  if (fa.test(e)) {
                    var h = e.indexOf("--\x3e");

                    if (h >= 0) {
                      t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), w(h + 3);
                      continue;
                    }
                  }

                  if (pa.test(e)) {
                    var v = e.indexOf("]>");

                    if (v >= 0) {
                      w(v + 2);
                      continue;
                    }
                  }

                  var g = e.match(da);

                  if (g) {
                    w(g[0].length);
                    continue;
                  }

                  var m = e.match(ua);

                  if (m) {
                    var y = l;
                    w(m[0].length), C(m[1], y, l);
                    continue;
                  }

                  var b = S();

                  if (b) {
                    k(b), _a(b.tagName, e) && w(1);
                    continue;
                  }
                }

                var _ = void 0,
                    E = void 0,
                    A = void 0;

                if (p >= 0) {
                  for (E = e.slice(p); !(ua.test(E) || la.test(E) || fa.test(E) || pa.test(E) || (A = E.indexOf("<", 1)) < 0);) {
                    p += A, E = e.slice(p);
                  }

                  _ = e.substring(0, p);
                }

                p < 0 && (_ = e), _ && w(_.length), t.chars && _ && t.chars(_, l - _.length, l);
              }

              if (e === n) {
                t.chars && t.chars(e);
                break;
              }
            }

            function w(t) {
              l += t, e = e.substring(t);
            }

            function S() {
              var t = e.match(la);

              if (t) {
                var n,
                    r,
                    i = {
                  tagName: t[1],
                  attrs: [],
                  start: l
                };

                for (w(t[0].length); !(n = e.match(ca)) && (r = e.match(oa) || e.match(ia));) {
                  r.start = l, w(r[0].length), r.end = l, i.attrs.push(r);
                }

                if (n) return i.unarySlash = n[1], w(n[0].length), i.end = l, i;
              }
            }

            function k(e) {
              var n = e.tagName,
                  l = e.unarySlash;
              o && ("p" === r && ra(n) && C(r), s(n) && r === n && C(n));

              for (var c = a(n) || !!l, u = e.attrs.length, d = new Array(u), f = 0; f < u; f++) {
                var p = e.attrs[f],
                    h = p[3] || p[4] || p[5] || "",
                    v = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                d[f] = {
                  name: p[1],
                  value: Ea(h, v)
                };
              }

              c || (i.push({
                tag: n,
                lowerCasedTag: n.toLowerCase(),
                attrs: d,
                start: e.start,
                end: e.end
              }), r = n), t.start && t.start(n, d, c, e.start, e.end);
            }

            function C(e, n, o) {
              var a, s;
              if (null == n && (n = l), null == o && (o = l), e) for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--) {
                ;
              } else a = 0;

              if (a >= 0) {
                for (var c = i.length - 1; c >= a; c--) {
                  t.end && t.end(i[c].tag, n, o);
                }

                i.length = a, r = a && i[a - 1].tag;
              } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o));
            }

            C();
          }(e, {
            warn: Aa,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function start(e, o, a, u, d) {
              var f = r && r.ns || xa(e);
              De && "svg" === f && (o = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var r = e[n];
                  Qa.test(r.name) || (r.name = r.name.replace(Xa, ""), t.push(r));
                }

                return t;
              }(o));
              var p,
                  h = Wa(e, o, r);
              f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || Be() || (h.forbidden = !0);

              for (var v = 0; v < ka.length; v++) {
                h = ka[v](h, t) || h;
              }

              s || (function (e) {
                null != Ei(e, "v-pre") && (e.pre = !0);
              }(h), h.pre && (s = !0)), Ta(h.tag) && (l = !0), s ? function (e) {
                var t = e.attrsList,
                    n = t.length;
                if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) {
                  r[i] = {
                    name: t[i].name,
                    value: JSON.stringify(t[i].value)
                  }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
                } else e.pre || (e.plain = !0);
              }(h) : h.processed || (Ya(h), function (e) {
                var t = Ei(e, "v-if");
                if (t) e["if"] = t, qa(e, {
                  exp: t,
                  block: e
                });else {
                  null != Ei(e, "v-else") && (e["else"] = !0);
                  var n = Ei(e, "v-else-if");
                  n && (e.elseif = n);
                }
              }(h), function (e) {
                null != Ei(e, "v-once") && (e.once = !0);
              }(h)), n || (n = h), a ? c(h) : (r = h, i.push(h));
            },
            end: function end(e, t, n) {
              var o = i[i.length - 1];
              i.length -= 1, r = i[i.length - 1], c(o);
            },
            chars: function chars(e, t, n) {
              if (r && (!De || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                var i,
                    c,
                    u,
                    d = r.children;
                (e = l || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : Ha(e) : d.length ? a ? "condense" === a && Ba.test(e) ? "" : " " : o ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(Ua, " ")), !s && " " !== e && (c = function (e, t) {
                  var n = t ? Xo(t) : Jo;

                  if (n.test(e)) {
                    for (var r, i, o, a = [], s = [], l = n.lastIndex = 0; r = n.exec(e);) {
                      (i = r.index) > l && (s.push(o = e.slice(l, i)), a.push(JSON.stringify(o)));
                      var c = ui(r[1].trim());
                      a.push("_s(" + c + ")"), s.push({
                        "@binding": c
                      }), l = i + r[0].length;
                    }

                    return l < e.length && (s.push(o = e.slice(l)), a.push(JSON.stringify(o))), {
                      expression: a.join("+"),
                      tokens: s
                    };
                  }
                }(e, wa)) ? u = {
                  type: 2,
                  expression: c.expression,
                  tokens: c.tokens,
                  text: e
                } : " " === e && d.length && " " === d[d.length - 1].text || (u = {
                  type: 3,
                  text: e
                }), u && d.push(u));
              }
            },
            comment: function comment(e, t, n) {
              if (r) {
                var i = {
                  type: 3,
                  text: e,
                  isComment: !0
                };
                r.children.push(i);
              }
            }
          }), n;
        }(e.trim(), t);

        !1 !== t.optimize && as(n, t);
        var r = Es(n, t);
        return {
          ast: n,
          render: r.render,
          staticRenderFns: r.staticRenderFns
        };
      }, function (e) {
        function t(t, n) {
          var r = Object.create(e),
              i = [],
              o = [];
          if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = ue(Object.create(e.directives || null), n.directives)), n) {
            "modules" !== a && "directives" !== a && (r[a] = n[a]);
          }

          r.warn = function (e, t, n) {
            (n ? o : i).push(e);
          };

          var s = Fs(t.trim(), r);
          return s.errors = i, s.tips = o, s;
        }

        return {
          compile: t,
          compileToFunctions: js(t)
        };
      })(is),
          Us = (Bs.compile, Bs.compileToFunctions);

      function Hs(e) {
        return (Ps = Ps || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', Ps.innerHTML.indexOf("&#10;") > 0;
      }

      var Gs = !!Ie && Hs(!1),
          Ws = !!Ie && Hs(!0),
          Vs = ne(function (e) {
        var t = Rr(e);
        return t && t.innerHTML;
      }),
          Ys = cr.prototype.$mount;
      cr.prototype.$mount = function (e, t) {
        if ((e = e && Rr(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;

        if (!n.render) {
          var r = n.template;
          if (r) {
            if ("string" == typeof r) "#" === r.charAt(0) && (r = Vs(r));else {
              if (!r.nodeType) return this;
              r = r.innerHTML;
            }
          } else e && (r = function (e) {
            if (e.outerHTML) return e.outerHTML;
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML;
          }(e));

          if (r) {
            var i = Us(r, {
              outputSourceRange: !1,
              shouldDecodeNewlines: Gs,
              shouldDecodeNewlinesForHref: Ws,
              delimiters: n.delimiters,
              comments: n.comments
            }, this),
                o = i.render,
                a = i.staticRenderFns;
            n.render = o, n.staticRenderFns = a;
          }
        }

        return Ys.call(this, e, t);
      }, cr.compile = Us;
      var qs = cr;

      var zs = function zs() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "root"
        }, [n("script", {
          attrs: {
            type: "application/javascript",
            async: "",
            defer: "",
            crossorigin: "anonymous",
            src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"
          }
        }), e._v(" "), n("script", {
          attrs: {
            type: "application/javascript",
            async: "",
            defer: "",
            src: "https://apis.google.com/js/platform.js?onload=gAsyncInit"
          }
        }), e._v(" "), n("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.loginStatus,
            expression: "!loginStatus"
          }]
        }, [n("div", {
          staticClass: "g-signin2",
          attrs: {
            "data-onsuccess": "gLoginCallback",
            "data-theme": "dark"
          }
        }), e._v(" "), n("div", {
          staticClass: "fb-login-button",
          attrs: {
            "data-size": "large",
            "data-button-type": "login_with",
            "data-layout": "default",
            "data-auto-logout-link": "false",
            "data-use-continue-as": "false",
            "data-width": "",
            "data-scope": "email"
          }
        }), e._v(" "), n("br"), e._v(" "), e._t("unlogged")], 2), e._v(" "), e.loginStatus ? n("div", [n("img", {
          staticClass: "statusIcon loggedIcon",
          attrs: {
            src: "/style/ui/logged.png",
            alt: "Logged icon",
            title: "You are currently logged in!"
          }
        }), e._v(" "), n("br"), e._v(" "), e.flagLoggingOut ? n("div", [n("img", {
          staticClass: "loading",
          attrs: {
            src: "/style/ui/spinner.gif",
            alt: "logging out..."
          }
        })]) : n("div", [n("button", {
          on: {
            click: e.logout
          }
        }, [e._v("Logout")]), e._v(" "), n("br"), n("br"), e._v(" "), e._t("logged")], 2)]) : e._e()]);
      };

      zs._withStripped = !0;
      var Ks = qs.extend({
        name: "login",
        props: {
          showIcons: {
            type: Boolean,
            required: !1,
            "default": !0
          }
        },
        data: function data() {
          return {
            loginStatus: !1,
            loginService: void 0,
            fbToken: void 0,
            flagLoggingOut: !1
          };
        },
        created: function created() {
          var e = document.createElement("meta");
          e.name = "google-signin-scope", e.content = "profile email", document.head.appendChild(e), e = document.createElement("meta"), e.name = "google-signin-client_id", e.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(e);
          var t = this;
          window.fbAsyncInit = function () {
            FB.init({
              appId: "1885551381575204",
              autoLogAppEvents: !1,
              cookie: !0,
              xfbml: !1,
              version: "v6.0"
            }), FB.Event.subscribe("auth.statusChange", function (e) {
              t.fbLoginStatusChangeCallback(e);
            }), FB.getLoginStatus(function (e) {
              t.fbLoginStatusChangeCallback(e);
            });
          }, window.gAsyncInit = function () {
            gapi.load("auth2", function () {
              gapi.auth2.getAuthInstance().isSignedIn.get() && (qs.set(t, "loginStatus", !0), qs.set(t, "loginService", "google"));
            });
          }, window.gLoginCallback = this.gLoginCallback;
        },
        methods: {
          logoutCallback: function logoutCallback() {
            qs.set(this, "loginStatus", !1), qs.set(this, "loginService", void 0), qs.set(this, "flagLoggingOut", !1);
          },
          logout: function logout() {
            if (this.loginStatus) {
              switch (this.loginService) {
                case "facebook":
                  if (void 0 !== this.fbToken) {
                    qs.set(this, "flagLoggingOut", !0);

                    var _e44 = this;

                    FB.api("/me/permissions", "delete", {
                      access_token: _e44.fbToken
                    }, function (t) {
                      !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                        _e44.logoutCallback();
                      });
                    }), this.fbToken = void 0;
                  }

                  break;

                case "google":
                  gapi.auth2.getAuthInstance().signOut().then(this.logoutCallback());
                  break;

                default:
                  console.error("Unexpected loginService: " + this.loginService);
              }

              D.sendGETRequest("logout", function (e) {});
            } else console.error("Cannot logout, user is not currently logged in");
          },
          fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
            if ("connected" === e.status) {
              this.fbToken = e.authResponse.accessToken;
              var _t27 = {
                service: "facebook",
                token: e.authResponse.accessToken,
                userId: e.authResponse.userID
              };
              this.doLogin(_t27);
            }
          },
          gLoginCallback: function gLoginCallback(e) {
            var t = {
              service: "google",
              token: e.getAuthResponse().id_token
            };
            this.doLogin(t);
          },
          doLogin: function doLogin(e) {
            var t = this;
            D.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
              if (void 0 !== n) try {
                if (JSON.parse(n).result) return qs.set(t, "loginStatus", !0), void qs.set(t, "loginService", e.service);
              } catch (e) {
                console.error(n);
              }
              qs.set(t, "loginStatus", !1), qs.set(t, "loginService", void 0), console.error("Logged with " + e.service + " failed");
            });
          }
        }
      });

      function Js(e, t, n, r, i, o, a, s) {
        var l,
            c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (l = function l(e) {
          (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
        }, c._ssrRegister = l) : i && (l = s ? function () {
          i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
        } : i), l) if (c.functional) {
          c._injectStyles = l;
          var u = c.render;

          c.render = function (e, t) {
            return l.call(t), u(e, t);
          };
        } else {
          var d = c.beforeCreate;
          c.beforeCreate = d ? [].concat(d, l) : [l];
        }
        return {
          exports: e,
          options: c
        };
      }

      n(564);
      var Qs = Js(Ks, zs, [], !1, null, "08ab550b", null);
      Qs.options.__file = "src/client/components/Login.vue";
      var Xs = Qs.exports;

      var Zs = function Zs() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "root"
        }, [n("script", {
          attrs: {
            type: "application/javascript",
            async: "",
            defer: "",
            src: "https://www.google.com/recaptcha/api.js?render=6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb"
          }
        }), e._v(" "), e.flagSent ? n("div", [e.flagReceived ? void 0 !== e.url ? n("div", [n("p", [e._v("\n                Thank you for your feedback!"), n("br"), e._v("\n                You can find it on the project issue tracker: "), n("a", {
          attrs: {
            href: e.url
          }
        }, [e._v(e._s(e.url))]), n("br")]), e._v(" "), n("button", {
          on: {
            click: function click(t) {
              return e.reset();
            }
          }
        }, [e._v("Dismiss")])]) : n("div", [e._m(1), e._v(" "), n("button", {
          on: {
            click: function click(t) {
              return e.reset(!0);
            }
          }
        }, [e._v("Dismiss")])]) : n("div", [n("img", {
          staticClass: "loading",
          attrs: {
            src: "/style/ui/ajax-loader.webp",
            alt: "loading..."
          }
        })])]) : n("div", [n("p", [n("label", {
          attrs: {
            "for": "issueLabel"
          }
        }, [e._v("Do you want to report something?")]), n("br"), e._v(" "), n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.label,
            expression: "label"
          }],
          attrs: {
            id: "issueLabel"
          },
          on: {
            change: function change(t) {
              var n = Array.prototype.filter.call(t.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });
              e.label = t.target.multiple ? n : n[0];
            }
          }
        }, [n("option", {
          attrs: {
            selected: "",
            disabled: ""
          }
        }), e._v(" "), n("option", {
          attrs: {
            value: "bug"
          }
        }, [e._v("Problem")]), e._v(" "), n("option", {
          attrs: {
            value: "question"
          }
        }, [e._v("Question")]), e._v(" "), n("option", {
          attrs: {
            value: "enhancement"
          }
        }, [e._v("Enhancement suggestion")]), e._v(" "), n("option", {
          attrs: {
            value: "other"
          }
        }, [e._v("Other")])])]), e._v(" "), n("p", [n("label", {
          attrs: {
            "for": "issueDescription"
          }
        }, [e._v("What's on your mind?")]), n("br"), e._v(" "), n("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.description,
            expression: "description"
          }],
          staticClass: "description",
          attrs: {
            id: "issueDescription",
            type: "text"
          },
          domProps: {
            value: e.description
          },
          on: {
            input: function input(t) {
              t.target.composing || (e.description = t.target.value);
            }
          }
        })]), e._v(" "), e._m(0), e._v(" "), n("button", {
          attrs: {
            disabled: 0 === e.description.trim().length
          },
          on: {
            click: function click(t) {
              return e.send();
            }
          }
        }, [e._v("Send")])])]);
      };

      Zs._withStripped = !0;
      var el = qs.extend({
        name: "bug-reporting",
        data: function data() {
          return {
            label: void 0,
            description: "",
            flagSent: !1,
            flagReceived: !1,
            url: void 0
          };
        },
        methods: {
          send: function send() {
            if (this.description.trim().length > 0) {
              var _e45 = this;

              grecaptcha.ready(function () {
                grecaptcha.execute("6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb", {
                  action: "bugReport"
                }).then(function (t) {
                  var n = {
                    label: _e45.label,
                    description: _e45.description,
                    captchaToken: t
                  };
                  qs.set(_e45, "flagSent", !0), D.sendPOSTRequest("issue", JSON.stringify(n), function (t) {
                    if (qs.set(_e45, "flagReceived", !0), !o.isEmpty(t)) try {
                      var _n21 = JSON.parse(t);

                      return void qs.set(_e45, "url", _n21.url);
                    } catch (e) {
                      console.error(t);
                    }
                    console.error("Issue creation failed");
                  });
                });
              });
            }
          },
          reset: function reset(e) {
            qs.set(this, "flagSent", !1), qs.set(this, "flagReceived", !1), qs.set(this, "url", void 0), e || (qs.set(this, "description", ""), qs.set(this, "label", void 0));
          }
        }
      });
      n(109);
      var tl = Js(el, Zs, [function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("p", [e._v("\n            When you send the report "), n("strong", [e._v("what you wrote will be publicly visible on the "), n("a", {
          attrs: {
            href: "https://github.com/giovannipessiva/l4w/issues"
          }
        }, [e._v("project issue tracker")])]), e._v("."), n("br"), e._v("\n            If you want some privacy, "), n("a", {
          attrs: {
            href: "mailto:rpt@altervista.org?subject=Feedback%20on%20L4W"
          }
        }, [e._v("drop me a mail")])]);
      }, function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("p", [e._v("\n                An error occured :("), n("br")]);
      }], !1, null, "463340e8", null);
      tl.options.__file = "src/client/components/BugReporting.vue";
      var nl = tl.exports;
      var rl;
      !function (e) {
        function t(e, t, n, r, o, s, l) {
          var c = y.getEmptyMap("Test");
          c.width = e, c.height = t, c.blocks = l;
          var u = y.getEvent();
          u.i = n, u.j = r;
          var d,
              f = {
            i: o,
            j: s
          },
              p = document.getElementById("alg").value;

          switch (p) {
            case "Basic":
              d = i.BASIC;
              break;

            case "D* Lite":
              d = i.D_STAR_LITE;
              break;

            default:
              console.error("Unexpected pathfinding algo: " + p), d = i.BASIC;
          }

          var h,
              v = [],
              g = 0;

          do {
            if (h = N.pathFinder(c, u, f, d), 4 !== h && (u = a.moveToDirection(u, h), v.push({
              cell: {
                i: u.i,
                j: u.j
              }
            })), g++, g > e * t) {
              console.error("Pathfinder has failed :(");
              break;
            }
          } while (4 !== h);

          return v;
        }

        var n, r;

        function o() {
          var e = parseInt(document.getElementById("eventX").value),
              t = parseInt(document.getElementById("eventY").value),
              n = parseInt(document.getElementById("targetX").value),
              i = parseInt(document.getElementById("targetY").value),
              o = parseInt(document.getElementById("width").value),
              a = parseInt(document.getElementById("height").value);
          void 0 !== r && r.length === o * a || (r = new Array(o * a).fill(0)), e >= o && (e = o - 1, document.getElementById("eventX").value = e + ""), n >= o && (n = o - 1, document.getElementById("targetX").value = n + ""), t >= a && (t = a - 1, document.getElementById("eventY").value = t + ""), i >= a && (i = a - 1, document.getElementById("targetY").value = i + "");
          var s = "";

          for (var _l6 = 0; _l6 < a; _l6++) {
            for (var _a6 = 0; _a6 < o; _a6++) {
              var _c4 = "cell",
                  _u4 = _a6 + _l6 * o;

              n === _a6 && i === _l6 && (_c4 += " target"), 15 === r[_u4] && (_c4 += " blocked"), e === _a6 && t === _l6 && (_c4 += " event"), s += "<div id='g" + _u4 + "' class='" + _c4 + "' onclick='L4W_tester.Tester.toggleBlock(" + _u4 + ")'></div>";
            }

            s += "<br style='clear:both;'/>";
          }

          document.getElementById("map").innerHTML = s;
        }

        e.loadVueComponents = function () {
          new qs({
            el: "#loginVue",
            components: {
              login: Xs
            }
          }), new qs({
            el: "#bugReportingVue",
            components: {
              "bug-reporting": nl
            }
          });
        }, e.testPathfinding = t, e.drawMap = o, e.pathfinding = function () {
          var e = parseInt(document.getElementById("eventX").value),
              i = parseInt(document.getElementById("eventY").value),
              a = parseInt(document.getElementById("targetX").value),
              s = parseInt(document.getElementById("targetY").value),
              l = t(parseInt(document.getElementById("width").value), parseInt(document.getElementById("height").value), e, i, a, s, r);
          document.getElementById("eventX").disabled = !0, document.getElementById("eventY").disabled = !0, document.getElementById("targetX").disabled = !0, document.getElementById("targetY").disabled = !0, document.getElementById("width").disabled = !0, document.getElementById("height").disabled = !0, document.getElementById("find").disabled = !0, document.getElementById("stop").disabled = !1, n = !1, document.getElementById("log").innerHTML = "", function e(t, r) {
            r < t.length && !n ? (document.getElementById("eventX").value = t[r].cell.i + "", document.getElementById("eventY").value = t[r].cell.j + "", o(), setTimeout(function () {
              e(t, r + 1);
            }, 100)) : (document.getElementById("eventX").disabled = !1, document.getElementById("eventY").disabled = !1, document.getElementById("targetX").disabled = !1, document.getElementById("targetY").disabled = !1, document.getElementById("width").disabled = !1, document.getElementById("height").disabled = !1, document.getElementById("find").disabled = !1, document.getElementById("stop").disabled = !0);
          }(l, 0);
        }, e.stop = function () {
          n = !0;
        }, e.toggleBlock = function (e) {
          15 === r[e] ? r[e] = 0 : r[e] = 15, o();
        };
      }(rl || (rl = {}));
    },
    109: function _(e, t, n) {
      var r = n(624);
      "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals), (0, n(346).Z)("d14fe258", r, !1, {});
    },
    564: function _(e, t, n) {
      var r = n(201);
      "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals), (0, n(346).Z)("56feccaa", r, !1, {});
    },
    346: function _(e, t, n) {
      "use strict";

      function r(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
          var o = t[i],
              a = o[0],
              s = {
            id: e + ":" + i,
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
          r[a] ? r[a].parts.push(s) : n.push(r[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      n.d(t, {
        Z: function Z() {
          return h;
        }
      });
      var i = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

      var o = {},
          a = i && (document.head || document.getElementsByTagName("head")[0]),
          s = null,
          l = 0,
          c = !1,
          u = function u() {},
          d = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function h(e, t, n, i) {
        c = n, d = i || {};
        var a = r(e, t);
        return v(a), function (t) {
          for (var n = [], i = 0; i < a.length; i++) {
            var s = a[i];
            (l = o[s.id]).refs--, n.push(l);
          }

          for (t ? v(a = r(e, t)) : a = [], i = 0; i < n.length; i++) {
            var l;

            if (0 === (l = n[i]).refs) {
              for (var c = 0; c < l.parts.length; c++) {
                l.parts[c]();
              }

              delete o[l.id];
            }
          }
        };
      }

      function v(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
              r = o[n.id];

          if (r) {
            r.refs++;

            for (var i = 0; i < r.parts.length; i++) {
              r.parts[i](n.parts[i]);
            }

            for (; i < n.parts.length; i++) {
              r.parts.push(m(n.parts[i]));
            }

            r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
          } else {
            var a = [];

            for (i = 0; i < n.parts.length; i++) {
              a.push(m(n.parts[i]));
            }

            o[n.id] = {
              id: n.id,
              refs: 1,
              parts: a
            };
          }
        }
      }

      function g() {
        var e = document.createElement("style");
        return e.type = "text/css", a.appendChild(e), e;
      }

      function m(e) {
        var t,
            n,
            r = document.querySelector("style[" + f + '~="' + e.id + '"]');

        if (r) {
          if (c) return u;
          r.parentNode.removeChild(r);
        }

        if (p) {
          var i = l++;
          r = s || (s = g()), t = _.bind(null, r, i, !1), n = _.bind(null, r, i, !0);
        } else r = g(), t = E.bind(null, r), n = function n() {
          r.parentNode.removeChild(r);
        };

        return t(e), function (r) {
          if (r) {
            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
            t(e = r);
          } else n();
        };
      }

      var y,
          b = (y = [], function (e, t) {
        return y[e] = t, y.filter(Boolean).join("\n");
      });

      function _(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, i);else {
          var o = document.createTextNode(i),
              a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }

      function E(e, t) {
        var n = t.css,
            r = t.media,
            i = t.sourceMap;
        if (r && e.setAttribute("media", r), d.ssrId && e.setAttribute(f, t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }
    }
  },
      t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      id: r,
      exports: {}
    };
    return e[r](i, i.exports, n), i.exports;
  }

  return n.d = function (e, t) {
    for (var r in t) {
      n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    }
  }, n.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n(840);
}();
