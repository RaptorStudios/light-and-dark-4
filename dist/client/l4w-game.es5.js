"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e53) { throw _e53; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e54) { didErr = true; err = _e54; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see l4w-game.js.LICENSE.txt */
var L4W_game;

L4W_game = function () {
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
    289: function _(e, t, n) {
      "use strict";

      n.r(t), n.d(t, {
        Game: function Game() {
          return cl;
        }
      });
      var r = {};
      n.r(r), n.d(r, {
        BaseScript: function BaseScript() {
          return Vs;
        },
        DEFAULT_DIALOG: function DEFAULT_DIALOG() {
          return Gs;
        },
        DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
          return Hs;
        },
        Script1: function Script1() {
          return Ys;
        },
        Transports: function Transports() {
          return qs;
        }
      });
      var i = Object.freeze({});

      function o(e) {
        return null == e;
      }

      function a(e) {
        return null != e;
      }

      function s(e) {
        return !0 === e;
      }

      function l(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == _typeof(e) || "boolean" == typeof e;
      }

      function c(e) {
        return null !== e && "object" == _typeof(e);
      }

      var u = Object.prototype.toString;

      function d(e) {
        return "[object Object]" === u.call(e);
      }

      function f(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }

      function p(e) {
        return a(e) && "function" == typeof e.then && "function" == typeof e["catch"];
      }

      function h(e) {
        return null == e ? "" : Array.isArray(e) || d(e) && e.toString === u ? JSON.stringify(e, null, 2) : String(e);
      }

      function v(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }

      function g(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
          n[r[i]] = !0;
        }

        return t ? function (e) {
          return n[e.toLowerCase()];
        } : function (e) {
          return n[e];
        };
      }

      var m = g("slot,component", !0),
          y = g("key,ref,slot,slot-scope,is");

      function b(e, t) {
        if (e.length) {
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1);
        }
      }

      var _ = Object.prototype.hasOwnProperty;

      function E(e, t) {
        return _.call(e, t);
      }

      function w(e) {
        var t = Object.create(null);
        return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }

      var A = /-(\w)/g,
          S = w(function (e) {
        return e.replace(A, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }),
          k = w(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }),
          T = /\B([A-Z])/g,
          C = w(function (e) {
        return e.replace(T, "-$1").toLowerCase();
      }),
          x = Function.prototype.bind ? function (e, t) {
        return e.bind(t);
      } : function (e, t) {
        function n(n) {
          var r = arguments.length;
          return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
        }

        return n._length = e.length, n;
      };

      function I(e, t) {
        t = t || 0;

        for (var n = e.length - t, r = new Array(n); n--;) {
          r[n] = e[n + t];
        }

        return r;
      }

      function M(e, t) {
        for (var n in t) {
          e[n] = t[n];
        }

        return e;
      }

      function O(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          e[n] && M(t, e[n]);
        }

        return t;
      }

      function D(e, t, n) {}

      var L = function L(e, t, n) {
        return !1;
      },
          N = function N(e) {
        return e;
      };

      function R(e, t) {
        if (e === t) return !0;
        var n = c(e),
            r = c(t);
        if (!n || !r) return !n && !r && String(e) === String(t);

        try {
          var i = Array.isArray(e),
              o = Array.isArray(t);
          if (i && o) return e.length === t.length && e.every(function (e, n) {
            return R(e, t[n]);
          });
          if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
          if (i || o) return !1;
          var a = Object.keys(e),
              s = Object.keys(t);
          return a.length === s.length && a.every(function (n) {
            return R(e[n], t[n]);
          });
        } catch (e) {
          return !1;
        }
      }

      function $(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (R(e[n], t)) return n;
        }

        return -1;
      }

      function F(e) {
        var t = !1;
        return function () {
          t || (t = !0, e.apply(this, arguments));
        };
      }

      var j = "data-server-rendered",
          P = ["component", "directive", "filter"],
          B = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
          U = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: L,
        isReservedAttr: L,
        isUnknownElement: L,
        getTagNamespace: D,
        parsePlatformTagName: N,
        mustUseProp: L,
        async: !0,
        _lifecycleHooks: B
      },
          W = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

      function H(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
      }

      function G(e, t, n, r) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0
        });
      }

      var V,
          q = new RegExp("[^" + W.source + ".$_\\d]"),
          Y = ("__proto__" in {}),
          z = "undefined" != typeof window,
          K = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
          J = K && WXEnvironment.platform.toLowerCase(),
          Q = z && window.navigator.userAgent.toLowerCase(),
          X = Q && /msie|trident/.test(Q),
          Z = Q && Q.indexOf("msie 9.0") > 0,
          ee = Q && Q.indexOf("edge/") > 0,
          te = (Q && Q.indexOf("android"), Q && /iphone|ipad|ipod|ios/.test(Q) || "ios" === J),
          ne = (Q && /chrome\/\d+/.test(Q), Q && /phantomjs/.test(Q), Q && Q.match(/firefox\/(\d+)/)),
          re = {}.watch,
          ie = !1;
      if (z) try {
        var oe = {};
        Object.defineProperty(oe, "passive", {
          get: function get() {
            ie = !0;
          }
        }), window.addEventListener("test-passive", null, oe);
      } catch (e) {}

      var ae = function ae() {
        return void 0 === V && (V = !z && !K && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), V;
      },
          se = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

      function le(e) {
        return "function" == typeof e && /native code/.test(e.toString());
      }

      var ce,
          ue = "undefined" != typeof Symbol && le(Symbol) && "undefined" != typeof Reflect && le(Reflect.ownKeys);
      ce = "undefined" != typeof Set && le(Set) ? Set : function () {
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

      var de = D,
          fe = 0,
          pe = function pe() {
        this.id = fe++, this.subs = [];
      };

      pe.prototype.addSub = function (e) {
        this.subs.push(e);
      }, pe.prototype.removeSub = function (e) {
        b(this.subs, e);
      }, pe.prototype.depend = function () {
        pe.target && pe.target.addDep(this);
      }, pe.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
          e[t].update();
        }
      }, pe.target = null;
      var he = [];

      function ve(e) {
        he.push(e), pe.target = e;
      }

      function ge() {
        he.pop(), pe.target = he[he.length - 1];
      }

      var me = function me(e, t, n, r, i, o, a, s) {
        this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
      },
          ye = {
        child: {
          configurable: !0
        }
      };

      ye.child.get = function () {
        return this.componentInstance;
      }, Object.defineProperties(me.prototype, ye);

      var be = function be(e) {
        void 0 === e && (e = "");
        var t = new me();
        return t.text = e, t.isComment = !0, t;
      };

      function _e(e) {
        return new me(void 0, void 0, void 0, String(e));
      }

      function Ee(e) {
        var t = new me(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
      }

      var we = Array.prototype,
          Ae = Object.create(we);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
        var t = we[e];
        G(Ae, e, function () {
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
      var Se = Object.getOwnPropertyNames(Ae),
          ke = !0;

      function Te(e) {
        ke = e;
      }

      var Ce = function Ce(e) {
        this.value = e, this.dep = new pe(), this.vmCount = 0, G(e, "__ob__", this), Array.isArray(e) ? (Y ? function (e, t) {
          e.__proto__ = t;
        }(e, Ae) : function (e, t, n) {
          for (var r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            G(e, o, t[o]);
          }
        }(e, Ae, Se), this.observeArray(e)) : this.walk(e);
      };

      function xe(e, t) {
        var n;
        if (c(e) && !(e instanceof me)) return E(e, "__ob__") && e.__ob__ instanceof Ce ? n = e.__ob__ : ke && !ae() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new Ce(e)), t && n && n.vmCount++, n;
      }

      function Ie(e, t, n, r, i) {
        var o = new pe(),
            a = Object.getOwnPropertyDescriptor(e, t);

        if (!a || !1 !== a.configurable) {
          var s = a && a.get,
              l = a && a.set;
          s && !l || 2 !== arguments.length || (n = e[t]);
          var c = !i && xe(n);
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              var t = s ? s.call(e) : n;
              return pe.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && De(t))), t;
            },
            set: function set(t) {
              var r = s ? s.call(e) : n;
              t === r || t != t && r != r || s && !l || (l ? l.call(e, t) : n = t, c = !i && xe(t), o.notify());
            }
          });
        }
      }

      function Me(e, t, n) {
        if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (Ie(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n);
      }

      function Oe(e, t) {
        if (Array.isArray(e) && f(t)) e.splice(t, 1);else {
          var n = e.__ob__;
          e._isVue || n && n.vmCount || E(e, t) && (delete e[t], n && n.dep.notify());
        }
      }

      function De(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++) {
          (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && De(t);
        }
      }

      Ce.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
          Ie(e, t[n]);
        }
      }, Ce.prototype.observeArray = function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          xe(e[t]);
        }
      };
      var Le = U.optionMergeStrategies;

      function Ne(e, t) {
        if (!t) return e;

        for (var n, r, i, o = ue ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) {
          "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], E(e, n) ? r !== i && d(r) && d(i) && Ne(r, i) : Me(e, n, i));
        }

        return e;
      }

      function Re(e, t, n) {
        return n ? function () {
          var r = "function" == typeof t ? t.call(n, n) : t,
              i = "function" == typeof e ? e.call(n, n) : e;
          return r ? Ne(r, i) : i;
        } : t ? e ? function () {
          return Ne("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
        } : t : e;
      }

      function $e(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function (e) {
          for (var t = [], n = 0; n < e.length; n++) {
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          }

          return t;
        }(n) : n;
      }

      function Fe(e, t, n, r) {
        var i = Object.create(e || null);
        return t ? M(i, t) : i;
      }

      Le.data = function (e, t, n) {
        return n ? Re(e, t, n) : t && "function" != typeof t ? e : Re(e, t);
      }, B.forEach(function (e) {
        Le[e] = $e;
      }), P.forEach(function (e) {
        Le[e + "s"] = Fe;
      }), Le.watch = function (e, t, n, r) {
        if (e === re && (e = void 0), t === re && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var i = {};

        for (var o in M(i, e), t) {
          var a = i[o],
              s = t[o];
          a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
        }

        return i;
      }, Le.props = Le.methods = Le.inject = Le.computed = function (e, t, n, r) {
        if (!e) return t;
        var i = Object.create(null);
        return M(i, e), t && M(i, t), i;
      }, Le.provide = Re;

      var je = function je(e, t) {
        return void 0 === t ? e : t;
      };

      function Pe(e, t, n) {
        if ("function" == typeof t && (t = t.options), function (e, t) {
          var n = e.props;

          if (n) {
            var r,
                i,
                o = {};
            if (Array.isArray(n)) for (r = n.length; r--;) {
              "string" == typeof (i = n[r]) && (o[S(i)] = {
                type: null
              });
            } else if (d(n)) for (var a in n) {
              i = n[a], o[S(a)] = d(i) ? i : {
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
            } else if (d(n)) for (var o in n) {
              var a = n[o];
              r[o] = d(a) ? M({
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
        }(t), !t._base && (t["extends"] && (e = Pe(e, t["extends"], n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) {
          e = Pe(e, t.mixins[r], n);
        }
        var o,
            a = {};

        for (o in e) {
          s(o);
        }

        for (o in t) {
          E(e, o) || s(o);
        }

        function s(r) {
          var i = Le[r] || je;
          a[r] = i(e[r], t[r], n, r);
        }

        return a;
      }

      function Be(e, t, n, r) {
        if ("string" == typeof n) {
          var i = e[t];
          if (E(i, n)) return i[n];
          var o = S(n);
          if (E(i, o)) return i[o];
          var a = k(o);
          return E(i, a) ? i[a] : i[n] || i[o] || i[a];
        }
      }

      function Ue(e, t, n, r) {
        var i = t[e],
            o = !E(n, e),
            a = n[e],
            s = Ge(Boolean, i.type);
        if (s > -1) if (o && !E(i, "default")) a = !1;else if ("" === a || a === C(e)) {
          var l = Ge(String, i.type);
          (l < 0 || s < l) && (a = !0);
        }

        if (void 0 === a) {
          a = function (e, t, n) {
            if (E(t, "default")) {
              var r = t["default"];
              return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== We(t.type) ? r.call(e) : r;
            }
          }(r, i, e);

          var c = ke;
          Te(!0), xe(a), Te(c);
        }

        return a;
      }

      function We(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : "";
      }

      function He(e, t) {
        return We(e) === We(t);
      }

      function Ge(e, t) {
        if (!Array.isArray(t)) return He(t, e) ? 0 : -1;

        for (var n = 0, r = t.length; n < r; n++) {
          if (He(t[n], e)) return n;
        }

        return -1;
      }

      function Ve(e, t, n) {
        ve();

        try {
          if (t) for (var r = t; r = r.$parent;) {
            var i = r.$options.errorCaptured;
            if (i) for (var o = 0; o < i.length; o++) {
              try {
                if (!1 === i[o].call(r, e, t, n)) return;
              } catch (e) {
                Ye(e, r, "errorCaptured hook");
              }
            }
          }
          Ye(e, t, n);
        } finally {
          ge();
        }
      }

      function qe(e, t, n, r, i) {
        var o;

        try {
          (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && p(o) && !o._handled && (o["catch"](function (e) {
            return Ve(e, r, i + " (Promise/async)");
          }), o._handled = !0);
        } catch (e) {
          Ve(e, r, i);
        }

        return o;
      }

      function Ye(e, t, n) {
        if (U.errorHandler) try {
          return U.errorHandler.call(null, e, t, n);
        } catch (t) {
          t !== e && ze(t);
        }
        ze(e);
      }

      function ze(e, t, n) {
        if (!z && !K || "undefined" == typeof console) throw e;
        console.error(e);
      }

      var Ke,
          Je = !1,
          Qe = [],
          Xe = !1;

      function Ze() {
        Xe = !1;
        var e = Qe.slice(0);
        Qe.length = 0;

        for (var t = 0; t < e.length; t++) {
          e[t]();
        }
      }

      if ("undefined" != typeof Promise && le(Promise)) {
        var et = Promise.resolve();
        Ke = function Ke() {
          et.then(Ze), te && setTimeout(D);
        }, Je = !0;
      } else if (X || "undefined" == typeof MutationObserver || !le(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ke = "undefined" != typeof setImmediate && le(setImmediate) ? function () {
        setImmediate(Ze);
      } : function () {
        setTimeout(Ze, 0);
      };else {
        var tt = 1,
            nt = new MutationObserver(Ze),
            rt = document.createTextNode(String(tt));
        nt.observe(rt, {
          characterData: !0
        }), Ke = function Ke() {
          tt = (tt + 1) % 2, rt.data = String(tt);
        }, Je = !0;
      }

      function it(e, t) {
        var n;
        if (Qe.push(function () {
          if (e) try {
            e.call(t);
          } catch (e) {
            Ve(e, t, "nextTick");
          } else n && n(t);
        }), Xe || (Xe = !0, Ke()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
          n = e;
        });
      }

      var ot = new ce();

      function at(e) {
        st(e, ot), ot.clear();
      }

      function st(e, t) {
        var n,
            r,
            i = Array.isArray(e);

        if (!(!i && !c(e) || Object.isFrozen(e) || e instanceof me)) {
          if (e.__ob__) {
            var o = e.__ob__.dep.id;
            if (t.has(o)) return;
            t.add(o);
          }

          if (i) for (n = e.length; n--;) {
            st(e[n], t);
          } else for (n = (r = Object.keys(e)).length; n--;) {
            st(e[r[n]], t);
          }
        }
      }

      var lt = w(function (e) {
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

      function ct(e, t) {
        function n() {
          var e = arguments,
              r = n.fns;
          if (!Array.isArray(r)) return qe(r, null, arguments, t, "v-on handler");

          for (var i = r.slice(), o = 0; o < i.length; o++) {
            qe(i[o], null, e, t, "v-on handler");
          }
        }

        return n.fns = e, n;
      }

      function ut(e, t, n, r, i, a) {
        var l, c, u, d;

        for (l in e) {
          c = e[l], u = t[l], d = lt(l), o(c) || (o(u) ? (o(c.fns) && (c = e[l] = ct(c, a)), s(d.once) && (c = e[l] = i(d.name, c, d.capture)), n(d.name, c, d.capture, d.passive, d.params)) : c !== u && (u.fns = c, e[l] = u));
        }

        for (l in t) {
          o(e[l]) && r((d = lt(l)).name, t[l], d.capture);
        }
      }

      function dt(e, t, n) {
        var r;
        e instanceof me && (e = e.data.hook || (e.data.hook = {}));
        var i = e[t];

        function l() {
          n.apply(this, arguments), b(r.fns, l);
        }

        o(i) ? r = ct([l]) : a(i.fns) && s(i.merged) ? (r = i).fns.push(l) : r = ct([i, l]), r.merged = !0, e[t] = r;
      }

      function ft(e, t, n, r, i) {
        if (a(t)) {
          if (E(t, n)) return e[n] = t[n], i || delete t[n], !0;
          if (E(t, r)) return e[n] = t[r], i || delete t[r], !0;
        }

        return !1;
      }

      function pt(e) {
        return l(e) ? [_e(e)] : Array.isArray(e) ? vt(e) : void 0;
      }

      function ht(e) {
        return a(e) && a(e.text) && !1 === e.isComment;
      }

      function vt(e, t) {
        var n,
            r,
            i,
            c,
            u = [];

        for (n = 0; n < e.length; n++) {
          o(r = e[n]) || "boolean" == typeof r || (c = u[i = u.length - 1], Array.isArray(r) ? r.length > 0 && (ht((r = vt(r, (t || "") + "_" + n))[0]) && ht(c) && (u[i] = _e(c.text + r[0].text), r.shift()), u.push.apply(u, r)) : l(r) ? ht(c) ? u[i] = _e(c.text + r) : "" !== r && u.push(_e(r)) : ht(r) && ht(c) ? u[i] = _e(c.text + r.text) : (s(e._isVList) && a(r.tag) && o(r.key) && a(t) && (r.key = "__vlist" + t + "_" + n + "__"), u.push(r)));
        }

        return u;
      }

      function gt(e, t) {
        if (e) {
          for (var n = Object.create(null), r = ue ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
            var o = r[i];

            if ("__ob__" !== o) {
              for (var a = e[o].from, s = t; s;) {
                if (s._provided && E(s._provided, a)) {
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

      function mt(e, t) {
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
          n[c].every(yt) && delete n[c];
        }

        return n;
      }

      function yt(e) {
        return e.isComment && !e.asyncFactory || " " === e.text;
      }

      function bt(e, t, n) {
        var r,
            o = Object.keys(t).length > 0,
            a = e ? !!e.$stable : !o,
            s = e && e.$key;

        if (e) {
          if (e._normalized) return e._normalized;
          if (a && n && n !== i && s === n.$key && !o && !n.$hasNormal) return n;

          for (var l in r = {}, e) {
            e[l] && "$" !== l[0] && (r[l] = _t(t, l, e[l]));
          }
        } else r = {};

        for (var c in t) {
          c in r || (r[c] = Et(t, c));
        }

        return e && Object.isExtensible(e) && (e._normalized = r), G(r, "$stable", a), G(r, "$key", s), G(r, "$hasNormal", o), r;
      }

      function _t(e, t, n) {
        var r = function r() {
          var e = arguments.length ? n.apply(null, arguments) : n({});
          return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : pt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
        };

        return n.proxy && Object.defineProperty(e, t, {
          get: r,
          enumerable: !0,
          configurable: !0
        }), r;
      }

      function Et(e, t) {
        return function () {
          return e[t];
        };
      }

      function wt(e, t) {
        var n, r, i, o, s;
        if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
          n[r] = t(e[r], r);
        } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
          n[r] = t(r + 1, r);
        } else if (c(e)) if (ue && e[Symbol.iterator]) {
          n = [];

          for (var l = e[Symbol.iterator](), u = l.next(); !u.done;) {
            n.push(t(u.value, n.length)), u = l.next();
          }
        } else for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++) {
          s = o[r], n[r] = t(e[s], s, r);
        }
        return a(n) || (n = []), n._isVList = !0, n;
      }

      function At(e, t, n, r) {
        var i,
            o = this.$scopedSlots[e];
        o ? (n = n || {}, r && (n = M(M({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
        var a = n && n.slot;
        return a ? this.$createElement("template", {
          slot: a
        }, i) : i;
      }

      function St(e) {
        return Be(this.$options, "filters", e) || N;
      }

      function kt(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
      }

      function Tt(e, t, n, r, i) {
        var o = U.keyCodes[t] || n;
        return i && r && !U.keyCodes[t] ? kt(i, r) : o ? kt(o, e) : r ? C(r) !== t : void 0;
      }

      function Ct(e, t, n, r, i) {
        if (n && c(n)) {
          var o;
          Array.isArray(n) && (n = O(n));

          var a = function a(_a2) {
            if ("class" === _a2 || "style" === _a2 || y(_a2)) o = e;else {
              var s = e.attrs && e.attrs.type;
              o = r || U.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
            }
            var l = S(_a2),
                c = C(_a2);
            l in o || c in o || (o[_a2] = n[_a2], i && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
              n[_a2] = e;
            }));
          };

          for (var s in n) {
            a(s);
          }
        }

        return e;
      }

      function xt(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
            r = n[e];
        return r && !t || Mt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r;
      }

      function It(e, t, n) {
        return Mt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
      }

      function Mt(e, t, n) {
        if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
          e[r] && "string" != typeof e[r] && Ot(e[r], t + "_" + r, n);
        } else Ot(e, t, n);
      }

      function Ot(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n;
      }

      function Dt(e, t) {
        if (t && d(t)) {
          var n = e.on = e.on ? M({}, e.on) : {};

          for (var r in t) {
            var i = n[r],
                o = t[r];
            n[r] = i ? [].concat(i, o) : o;
          }
        }

        return e;
      }

      function Lt(e, t, n, r) {
        t = t || {
          $stable: !n
        };

        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          Array.isArray(o) ? Lt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
        }

        return r && (t.$key = r), t;
      }

      function Nt(e, t) {
        for (var n = 0; n < t.length; n += 2) {
          var r = t[n];
          "string" == typeof r && r && (e[t[n]] = t[n + 1]);
        }

        return e;
      }

      function Rt(e, t) {
        return "string" == typeof e ? t + e : e;
      }

      function $t(e) {
        e._o = It, e._n = v, e._s = h, e._l = wt, e._t = At, e._q = R, e._i = $, e._m = xt, e._f = St, e._k = Tt, e._b = Ct, e._v = _e, e._e = be, e._u = Lt, e._g = Dt, e._d = Nt, e._p = Rt;
      }

      function Ft(e, t, n, r, o) {
        var a,
            l = this,
            c = o.options;
        E(r, "_uid") ? (a = Object.create(r))._original = r : (a = r, r = r._original);
        var u = s(c._compiled),
            d = !u;
        this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || i, this.injections = gt(c.inject, r), this.slots = function () {
          return l.$slots || bt(e.scopedSlots, l.$slots = mt(n, r)), l.$slots;
        }, Object.defineProperty(this, "scopedSlots", {
          enumerable: !0,
          get: function get() {
            return bt(e.scopedSlots, this.slots());
          }
        }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = bt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, i) {
          var o = Gt(a, e, t, n, i, d);
          return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = r), o;
        } : this._c = function (e, t, n, r) {
          return Gt(a, e, t, n, r, d);
        };
      }

      function jt(e, t, n, r, i) {
        var o = Ee(e);
        return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
      }

      function Pt(e, t) {
        for (var n in t) {
          e[S(n)] = t[n];
        }
      }

      $t(Ft.prototype);
      var Bt = {
        init: function init(e, t) {
          if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
            var n = e;
            Bt.prepatch(n, n);
          } else (e.componentInstance = function (e, t) {
            var n = {
              _isComponent: !0,
              _parentVnode: e,
              parent: t
            },
                r = e.data.inlineTemplate;
            return a(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
          }(e, tn)).$mount(t ? e.elm : void 0, t);
        },
        prepatch: function prepatch(e, t) {
          var n = t.componentOptions;
          !function (e, t, n, r, o) {
            var a = r.data.scopedSlots,
                s = e.$scopedSlots,
                l = !!(a && !a.$stable || s !== i && !s.$stable || a && e.$scopedSlots.$key !== a.$key),
                c = !!(o || e.$options._renderChildren || l);

            if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = o, e.$attrs = r.data.attrs || i, e.$listeners = n || i, t && e.$options.props) {
              Te(!1);

              for (var u = e._props, d = e.$options._propKeys || [], f = 0; f < d.length; f++) {
                var p = d[f],
                    h = e.$options.props;
                u[p] = Ue(p, h, t, e);
              }

              Te(!0), e.$options.propsData = t;
            }

            n = n || i;
            var v = e.$options._parentListeners;
            e.$options._parentListeners = n, en(e, n, v), c && (e.$slots = mt(o, r.context), e.$forceUpdate());
          }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
        },
        insert: function insert(e) {
          var t,
              n = e.context,
              r = e.componentInstance;
          r._isMounted || (r._isMounted = !0, sn(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, cn.push(t)) : on(r, !0));
        },
        destroy: function destroy(e) {
          var t = e.componentInstance;
          t._isDestroyed || (e.data.keepAlive ? an(t, !0) : t.$destroy());
        }
      },
          Ut = Object.keys(Bt);

      function Wt(e, t, n, r, l) {
        if (!o(e)) {
          var u = n.$options._base;

          if (c(e) && (e = u.extend(e)), "function" == typeof e) {
            var d;
            if (o(e.cid) && void 0 === (e = function (e, t) {
              if (s(e.error) && a(e.errorComp)) return e.errorComp;
              if (a(e.resolved)) return e.resolved;
              var n = Yt;
              if (n && a(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), s(e.loading) && a(e.loadingComp)) return e.loadingComp;

              if (n && !a(e.owners)) {
                var r = e.owners = [n],
                    i = !0,
                    l = null,
                    u = null;
                n.$on("hook:destroyed", function () {
                  return b(r, n);
                });

                var d = function d(e) {
                  for (var t = 0, n = r.length; t < n; t++) {
                    r[t].$forceUpdate();
                  }

                  e && (r.length = 0, null !== l && (clearTimeout(l), l = null), null !== u && (clearTimeout(u), u = null));
                },
                    f = F(function (n) {
                  e.resolved = zt(n, t), i ? r.length = 0 : d(!0);
                }),
                    h = F(function (t) {
                  a(e.errorComp) && (e.error = !0, d(!0));
                }),
                    v = e(f, h);

                return c(v) && (p(v) ? o(e.resolved) && v.then(f, h) : p(v.component) && (v.component.then(f, h), a(v.error) && (e.errorComp = zt(v.error, t)), a(v.loading) && (e.loadingComp = zt(v.loading, t), 0 === v.delay ? e.loading = !0 : l = setTimeout(function () {
                  l = null, o(e.resolved) && o(e.error) && (e.loading = !0, d(!1));
                }, v.delay || 200)), a(v.timeout) && (u = setTimeout(function () {
                  u = null, o(e.resolved) && h(null);
                }, v.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved;
              }
            }(d = e, u))) return function (e, t, n, r, i) {
              var o = be();
              return o.asyncFactory = e, o.asyncMeta = {
                data: t,
                context: n,
                children: r,
                tag: i
              }, o;
            }(d, t, n, r, l);
            t = t || {}, xn(e), a(t.model) && function (e, t) {
              var n = e.model && e.model.prop || "value",
                  r = e.model && e.model.event || "input";
              (t.attrs || (t.attrs = {}))[n] = t.model.value;
              var i = t.on || (t.on = {}),
                  o = i[r],
                  s = t.model.callback;
              a(o) ? (Array.isArray(o) ? -1 === o.indexOf(s) : o !== s) && (i[r] = [s].concat(o)) : i[r] = s;
            }(e.options, t);

            var f = function (e, t, n) {
              var r = t.options.props;

              if (!o(r)) {
                var i = {},
                    s = e.attrs,
                    l = e.props;
                if (a(s) || a(l)) for (var c in r) {
                  var u = C(c);
                  ft(i, l, c, u, !0) || ft(i, s, c, u, !1);
                }
                return i;
              }
            }(t, e);

            if (s(e.options.functional)) return function (e, t, n, r, o) {
              var s = e.options,
                  l = {},
                  c = s.props;
              if (a(c)) for (var u in c) {
                l[u] = Ue(u, c, t || i);
              } else a(n.attrs) && Pt(l, n.attrs), a(n.props) && Pt(l, n.props);
              var d = new Ft(n, l, o, r, e),
                  f = s.render.call(null, d._c, d);
              if (f instanceof me) return jt(f, n, d.parent, s);

              if (Array.isArray(f)) {
                for (var p = pt(f) || [], h = new Array(p.length), v = 0; v < p.length; v++) {
                  h[v] = jt(p[v], n, d.parent, s);
                }

                return h;
              }
            }(e, f, t, n, r);
            var h = t.on;

            if (t.on = t.nativeOn, s(e.options["abstract"])) {
              var v = t.slot;
              t = {}, v && (t.slot = v);
            }

            !function (e) {
              for (var t = e.hook || (e.hook = {}), n = 0; n < Ut.length; n++) {
                var r = Ut[n],
                    i = t[r],
                    o = Bt[r];
                i === o || i && i._merged || (t[r] = i ? Ht(o, i) : o);
              }
            }(t);
            var g = e.options.name || l;
            return new me("vue-component-" + e.cid + (g ? "-" + g : ""), t, void 0, void 0, void 0, n, {
              Ctor: e,
              propsData: f,
              listeners: h,
              tag: l,
              children: r
            }, d);
          }
        }
      }

      function Ht(e, t) {
        var n = function n(_n2, r) {
          e(_n2, r), t(_n2, r);
        };

        return n._merged = !0, n;
      }

      function Gt(e, t, n, r, i, o) {
        return (Array.isArray(n) || l(n)) && (i = r, r = n, n = void 0), s(o) && (i = 2), function (e, t, n, r, i) {
          if (a(n) && a(n.__ob__)) return be();
          if (a(n) && a(n.is) && (t = n.is), !t) return be();
          var o, s, l;
          (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
            "default": r[0]
          }, r.length = 0), 2 === i ? r = pt(r) : 1 === i && (r = function (e) {
            for (var t = 0; t < e.length; t++) {
              if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            }

            return e;
          }(r)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || U.getTagNamespace(t), o = U.isReservedTag(t) ? new me(U.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !a(l = Be(e.$options, "components", t)) ? new me(t, n, r, void 0, void 0, e) : Wt(l, n, e, r, t)) : o = Wt(t, n, e, r);
          return Array.isArray(o) ? o : a(o) ? (a(s) && Vt(o, s), a(n) && function (e) {
            c(e.style) && at(e.style), c(e["class"]) && at(e["class"]);
          }(n), o) : be();
        }(e, t, n, r, i);
      }

      function Vt(e, t, n) {
        if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), a(e.children)) for (var r = 0, i = e.children.length; r < i; r++) {
          var l = e.children[r];
          a(l.tag) && (o(l.ns) || s(n) && "svg" !== l.tag) && Vt(l, t, n);
        }
      }

      var qt,
          Yt = null;

      function zt(e, t) {
        return (e.__esModule || ue && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), c(e) ? t.extend(e) : e;
      }

      function Kt(e) {
        return e.isComment && e.asyncFactory;
      }

      function Jt(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (a(n) && (a(n.componentOptions) || Kt(n))) return n;
        }
      }

      function Qt(e, t) {
        qt.$on(e, t);
      }

      function Xt(e, t) {
        qt.$off(e, t);
      }

      function Zt(e, t) {
        var n = qt;
        return function r() {
          var i = t.apply(null, arguments);
          null !== i && n.$off(e, r);
        };
      }

      function en(e, t, n) {
        qt = e, ut(t, n || {}, Qt, Xt, Zt, e), qt = void 0;
      }

      var tn = null;

      function nn(e) {
        var t = tn;
        return tn = e, function () {
          tn = t;
        };
      }

      function rn(e) {
        for (; e && (e = e.$parent);) {
          if (e._inactive) return !0;
        }

        return !1;
      }

      function on(e, t) {
        if (t) {
          if (e._directInactive = !1, rn(e)) return;
        } else if (e._directInactive) return;

        if (e._inactive || null === e._inactive) {
          e._inactive = !1;

          for (var n = 0; n < e.$children.length; n++) {
            on(e.$children[n]);
          }

          sn(e, "activated");
        }
      }

      function an(e, t) {
        if (!(t && (e._directInactive = !0, rn(e)) || e._inactive)) {
          e._inactive = !0;

          for (var n = 0; n < e.$children.length; n++) {
            an(e.$children[n]);
          }

          sn(e, "deactivated");
        }
      }

      function sn(e, t) {
        ve();
        var n = e.$options[t],
            r = t + " hook";
        if (n) for (var i = 0, o = n.length; i < o; i++) {
          qe(n[i], e, null, e, r);
        }
        e._hasHookEvent && e.$emit("hook:" + t), ge();
      }

      var ln = [],
          cn = [],
          un = {},
          dn = !1,
          fn = !1,
          pn = 0,
          hn = 0,
          vn = Date.now;

      if (z && !X) {
        var gn = window.performance;
        gn && "function" == typeof gn.now && vn() > document.createEvent("Event").timeStamp && (vn = function vn() {
          return gn.now();
        });
      }

      function mn() {
        var e, t;

        for (hn = vn(), fn = !0, ln.sort(function (e, t) {
          return e.id - t.id;
        }), pn = 0; pn < ln.length; pn++) {
          (e = ln[pn]).before && e.before(), t = e.id, un[t] = null, e.run();
        }

        var n = cn.slice(),
            r = ln.slice();
        pn = ln.length = cn.length = 0, un = {}, dn = fn = !1, function (e) {
          for (var t = 0; t < e.length; t++) {
            e[t]._inactive = !0, on(e[t], !0);
          }
        }(n), function (e) {
          for (var t = e.length; t--;) {
            var n = e[t],
                r = n.vm;
            r._watcher === n && r._isMounted && !r._isDestroyed && sn(r, "updated");
          }
        }(r), se && U.devtools && se.emit("flush");
      }

      var yn = 0,
          bn = function bn(e, t, n, r, i) {
        this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++yn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ce(), this.newDepIds = new ce(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
          if (!q.test(e)) {
            var t = e.split(".");
            return function (e) {
              for (var n = 0; n < t.length; n++) {
                if (!e) return;
                e = e[t[n]];
              }

              return e;
            };
          }
        }(t), this.getter || (this.getter = D)), this.value = this.lazy ? void 0 : this.get();
      };

      bn.prototype.get = function () {
        var e;
        ve(this);
        var t = this.vm;

        try {
          e = this.getter.call(t, t);
        } catch (e) {
          if (!this.user) throw e;
          Ve(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && at(e), ge(), this.cleanupDeps();
        }

        return e;
      }, bn.prototype.addDep = function (e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
      }, bn.prototype.cleanupDeps = function () {
        for (var e = this.deps.length; e--;) {
          var t = this.deps[e];
          this.newDepIds.has(t.id) || t.removeSub(this);
        }

        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
      }, bn.prototype.update = function () {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
          var t = e.id;

          if (null == un[t]) {
            if (un[t] = !0, fn) {
              for (var n = ln.length - 1; n > pn && ln[n].id > e.id;) {
                n--;
              }

              ln.splice(n + 1, 0, e);
            } else ln.push(e);

            dn || (dn = !0, it(mn));
          }
        }(this);
      }, bn.prototype.run = function () {
        if (this.active) {
          var e = this.get();

          if (e !== this.value || c(e) || this.deep) {
            var t = this.value;
            if (this.value = e, this.user) try {
              this.cb.call(this.vm, e, t);
            } catch (e) {
              Ve(e, this.vm, 'callback for watcher "' + this.expression + '"');
            } else this.cb.call(this.vm, e, t);
          }
        }
      }, bn.prototype.evaluate = function () {
        this.value = this.get(), this.dirty = !1;
      }, bn.prototype.depend = function () {
        for (var e = this.deps.length; e--;) {
          this.deps[e].depend();
        }
      }, bn.prototype.teardown = function () {
        if (this.active) {
          this.vm._isBeingDestroyed || b(this.vm._watchers, this);

          for (var e = this.deps.length; e--;) {
            this.deps[e].removeSub(this);
          }

          this.active = !1;
        }
      };
      var _n = {
        enumerable: !0,
        configurable: !0,
        get: D,
        set: D
      };

      function En(e, t, n) {
        _n.get = function () {
          return this[t][n];
        }, _n.set = function (e) {
          this[t][n] = e;
        }, Object.defineProperty(e, n, _n);
      }

      var wn = {
        lazy: !0
      };

      function An(e, t, n) {
        var r = !ae();
        "function" == typeof n ? (_n.get = r ? Sn(t) : kn(n), _n.set = D) : (_n.get = n.get ? r && !1 !== n.cache ? Sn(t) : kn(n.get) : D, _n.set = n.set || D), Object.defineProperty(e, t, _n);
      }

      function Sn(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t) return t.dirty && t.evaluate(), pe.target && t.depend(), t.value;
        };
      }

      function kn(e) {
        return function () {
          return e.call(this, this);
        };
      }

      function Tn(e, t, n, r) {
        return d(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
      }

      var Cn = 0;

      function xn(e) {
        var t = e.options;

        if (e["super"]) {
          var n = xn(e["super"]);

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

            r && M(e.extendOptions, r), (t = e.options = Pe(n, e.extendOptions)).name && (t.components[t.name] = e);
          }
        }

        return t;
      }

      function In(e) {
        this._init(e);
      }

      function Mn(e) {
        return e && (e.Ctor.options.name || e.tag);
      }

      function On(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== u.call(n)) && e.test(t));
        var n;
      }

      function Dn(e, t) {
        var n = e.cache,
            r = e.keys,
            i = e._vnode;

        for (var o in n) {
          var a = n[o];

          if (a) {
            var s = Mn(a.componentOptions);
            s && !t(s) && Ln(n, o, r, i);
          }
        }
      }

      function Ln(e, t, n, r) {
        var i = e[t];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, b(n, t);
      }

      !function (e) {
        e.prototype._init = function (e) {
          var t = this;
          t._uid = Cn++, t._isVue = !0, e && e._isComponent ? function (e, t) {
            var n = e.$options = Object.create(e.constructor.options),
                r = t._parentVnode;
            n.parent = t.parent, n._parentVnode = r;
            var i = r.componentOptions;
            n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
          }(t, e) : t.$options = Pe(xn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
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
            t && en(e, t);
          }(t), function (e) {
            e._vnode = null, e._staticTrees = null;
            var t = e.$options,
                n = e.$vnode = t._parentVnode,
                r = n && n.context;
            e.$slots = mt(t._renderChildren, r), e.$scopedSlots = i, e._c = function (t, n, r, i) {
              return Gt(e, t, n, r, i, !1);
            }, e.$createElement = function (t, n, r, i) {
              return Gt(e, t, n, r, i, !0);
            };
            var o = n && n.data;
            Ie(e, "$attrs", o && o.attrs || i, null, !0), Ie(e, "$listeners", t._parentListeners || i, null, !0);
          }(t), sn(t, "beforeCreate"), function (e) {
            var t = gt(e.$options.inject, e);
            t && (Te(!1), Object.keys(t).forEach(function (n) {
              Ie(e, n, t[n]);
            }), Te(!0));
          }(t), function (e) {
            e._watchers = [];
            var t = e.$options;
            t.props && function (e, t) {
              var n = e.$options.propsData || {},
                  r = e._props = {},
                  i = e.$options._propKeys = [];
              e.$parent && Te(!1);

              var o = function o(_o2) {
                i.push(_o2);
                var a = Ue(_o2, t, n, e);
                Ie(r, _o2, a), _o2 in e || En(e, "_props", _o2);
              };

              for (var a in t) {
                o(a);
              }

              Te(!0);
            }(e, t.props), t.methods && function (e, t) {
              for (var n in e.$options.props, t) {
                e[n] = "function" != typeof t[n] ? D : x(t[n], e);
              }
            }(e, t.methods), t.data ? function (e) {
              var t = e.$options.data;
              d(t = e._data = "function" == typeof t ? function (e, t) {
                ve();

                try {
                  return e.call(t, t);
                } catch (e) {
                  return Ve(e, t, "data()"), {};
                } finally {
                  ge();
                }
              }(t, e) : t || {}) || (t = {});

              for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
                var o = n[i];
                r && E(r, o) || H(o) || En(e, "_data", o);
              }

              xe(t, !0);
            }(e) : xe(e._data = {}, !0), t.computed && function (e, t) {
              var n = e._computedWatchers = Object.create(null),
                  r = ae();

              for (var i in t) {
                var o = t[i],
                    a = "function" == typeof o ? o : o.get;
                r || (n[i] = new bn(e, a || D, D, wn)), i in e || An(e, i, o);
              }
            }(e, t.computed), t.watch && t.watch !== re && function (e, t) {
              for (var n in t) {
                var r = t[n];
                if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
                  Tn(e, n, r[i]);
                } else Tn(e, n, r);
              }
            }(e, t.watch);
          }(t), function (e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t);
          }(t), sn(t, "created"), t.$options.el && t.$mount(t.$options.el);
        };
      }(In), function (e) {
        Object.defineProperty(e.prototype, "$data", {
          get: function get() {
            return this._data;
          }
        }), Object.defineProperty(e.prototype, "$props", {
          get: function get() {
            return this._props;
          }
        }), e.prototype.$set = Me, e.prototype.$delete = Oe, e.prototype.$watch = function (e, t, n) {
          var r = this;
          if (d(t)) return Tn(r, e, t, n);
          (n = n || {}).user = !0;
          var i = new bn(r, e, t, n);
          if (n.immediate) try {
            t.call(r, i.value);
          } catch (e) {
            Ve(e, r, 'callback for immediate watcher "' + i.expression + '"');
          }
          return function () {
            i.teardown();
          };
        };
      }(In), function (e) {
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
            n = n.length > 1 ? I(n) : n;

            for (var r = I(arguments, 1), i = 'event handler for "' + e + '"', o = 0, a = n.length; o < a; o++) {
              qe(n[o], t, r, t, i);
            }
          }

          return t;
        };
      }(In), function (e) {
        e.prototype._update = function (e, t) {
          var n = this,
              r = n.$el,
              i = n._vnode,
              o = nn(n);
          n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, e.prototype.$forceUpdate = function () {
          this._watcher && this._watcher.update();
        }, e.prototype.$destroy = function () {
          var e = this;

          if (!e._isBeingDestroyed) {
            sn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
            var t = e.$parent;
            !t || t._isBeingDestroyed || e.$options["abstract"] || b(t.$children, e), e._watcher && e._watcher.teardown();

            for (var n = e._watchers.length; n--;) {
              e._watchers[n].teardown();
            }

            e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), sn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
          }
        };
      }(In), function (e) {
        $t(e.prototype), e.prototype.$nextTick = function (e) {
          return it(e, this);
        }, e.prototype._render = function () {
          var e,
              t = this,
              n = t.$options,
              r = n.render,
              i = n._parentVnode;
          i && (t.$scopedSlots = bt(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;

          try {
            Yt = t, e = r.call(t._renderProxy, t.$createElement);
          } catch (n) {
            Ve(n, t, "render"), e = t._vnode;
          } finally {
            Yt = null;
          }

          return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof me || (e = be()), e.parent = i, e;
        };
      }(In);
      var Nn = [String, RegExp, Array],
          Rn = {
        KeepAlive: {
          name: "keep-alive",
          "abstract": !0,
          props: {
            include: Nn,
            exclude: Nn,
            max: [String, Number]
          },
          created: function created() {
            this.cache = Object.create(null), this.keys = [];
          },
          destroyed: function destroyed() {
            for (var e in this.cache) {
              Ln(this.cache, e, this.keys);
            }
          },
          mounted: function mounted() {
            var e = this;
            this.$watch("include", function (t) {
              Dn(e, function (e) {
                return On(t, e);
              });
            }), this.$watch("exclude", function (t) {
              Dn(e, function (e) {
                return !On(t, e);
              });
            });
          },
          render: function render() {
            var e = this.$slots["default"],
                t = Jt(e),
                n = t && t.componentOptions;

            if (n) {
              var r = Mn(n),
                  i = this.include,
                  o = this.exclude;
              if (i && (!r || !On(i, r)) || o && r && On(o, r)) return t;
              var a = this.cache,
                  s = this.keys,
                  l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
              a[l] ? (t.componentInstance = a[l].componentInstance, b(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && Ln(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
            }

            return t || e && e[0];
          }
        }
      };
      !function (e) {
        var t = {
          get: function get() {
            return U;
          }
        };
        Object.defineProperty(e, "config", t), e.util = {
          warn: de,
          extend: M,
          mergeOptions: Pe,
          defineReactive: Ie
        }, e.set = Me, e["delete"] = Oe, e.nextTick = it, e.observable = function (e) {
          return xe(e), e;
        }, e.options = Object.create(null), P.forEach(function (t) {
          e.options[t + "s"] = Object.create(null);
        }), e.options._base = e, M(e.options.components, Rn), function (e) {
          e.use = function (e) {
            var t = this._installedPlugins || (this._installedPlugins = []);
            if (t.indexOf(e) > -1) return this;
            var n = I(arguments, 1);
            return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
          };
        }(e), function (e) {
          e.mixin = function (e) {
            return this.options = Pe(this.options, e), this;
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

            return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = Pe(n.options, e), a["super"] = n, a.options.props && function (e) {
              var t = e.options.props;

              for (var n in t) {
                En(e.prototype, "_props", n);
              }
            }(a), a.options.computed && function (e) {
              var t = e.options.computed;

              for (var n in t) {
                An(e.prototype, n, t[n]);
              }
            }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, P.forEach(function (e) {
              a[e] = n[e];
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = M({}, a.options), i[r] = a, a;
          };
        }(e), function (e) {
          P.forEach(function (t) {
            e[t] = function (e, n) {
              return n ? ("component" === t && d(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                bind: n,
                update: n
              }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
            };
          });
        }(e);
      }(In), Object.defineProperty(In.prototype, "$isServer", {
        get: ae
      }), Object.defineProperty(In.prototype, "$ssrContext", {
        get: function get() {
          return this.$vnode && this.$vnode.ssrContext;
        }
      }), Object.defineProperty(In, "FunctionalRenderContext", {
        value: Ft
      }), In.version = "2.6.12";

      var $n = g("style,class"),
          Fn = g("input,textarea,option,select,progress"),
          jn = function jn(e, t, n) {
        return "value" === n && Fn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
      },
          Pn = g("contenteditable,draggable,spellcheck"),
          Bn = g("events,caret,typing,plaintext-only"),
          Un = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
          Wn = "http://www.w3.org/1999/xlink",
          Hn = function Hn(e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
      },
          Gn = function Gn(e) {
        return Hn(e) ? e.slice(6, e.length) : "";
      },
          Vn = function Vn(e) {
        return null == e || !1 === e;
      };

      function qn(e, t) {
        return {
          staticClass: Yn(e.staticClass, t.staticClass),
          "class": a(e["class"]) ? [e["class"], t["class"]] : t["class"]
        };
      }

      function Yn(e, t) {
        return e ? t ? e + " " + t : e : t || "";
      }

      function zn(e) {
        return Array.isArray(e) ? function (e) {
          for (var t, n = "", r = 0, i = e.length; r < i; r++) {
            a(t = zn(e[r])) && "" !== t && (n && (n += " "), n += t);
          }

          return n;
        }(e) : c(e) ? function (e) {
          var t = "";

          for (var n in e) {
            e[n] && (t && (t += " "), t += n);
          }

          return t;
        }(e) : "string" == typeof e ? e : "";
      }

      var Kn = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
      },
          Jn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
          Qn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
          Xn = function Xn(e) {
        return Jn(e) || Qn(e);
      };

      function Zn(e) {
        return Qn(e) ? "svg" : "math" === e ? "math" : void 0;
      }

      var er = Object.create(null),
          tr = g("text,number,password,search,email,tel,url");

      function nr(e) {
        return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
      }

      var rr = Object.freeze({
        createElement: function createElement(e, t) {
          var n = document.createElement(e);
          return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
        },
        createElementNS: function createElementNS(e, t) {
          return document.createElementNS(Kn[e], t);
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
          ir = {
        create: function create(e, t) {
          or(t);
        },
        update: function update(e, t) {
          e.data.ref !== t.data.ref && (or(e, !0), or(t));
        },
        destroy: function destroy(e) {
          or(e, !0);
        }
      };

      function or(e, t) {
        var n = e.data.ref;

        if (a(n)) {
          var r = e.context,
              i = e.componentInstance || e.elm,
              o = r.$refs;
          t ? Array.isArray(o[n]) ? b(o[n], i) : o[n] === i && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i;
        }
      }

      var ar = new me("", {}, []),
          sr = ["create", "activate", "update", "remove", "destroy"];

      function lr(e, t) {
        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && function (e, t) {
          if ("input" !== e.tag) return !0;
          var n,
              r = a(n = e.data) && a(n = n.attrs) && n.type,
              i = a(n = t.data) && a(n = n.attrs) && n.type;
          return r === i || tr(r) && tr(i);
        }(e, t) || s(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && o(t.asyncFactory.error));
      }

      function cr(e, t, n) {
        var r,
            i,
            o = {};

        for (r = t; r <= n; ++r) {
          a(i = e[r].key) && (o[i] = r);
        }

        return o;
      }

      var ur = {
        create: dr,
        update: dr,
        destroy: function destroy(e) {
          dr(e, ar);
        }
      };

      function dr(e, t) {
        (e.data.directives || t.data.directives) && function (e, t) {
          var n,
              r,
              i,
              o = e === ar,
              a = t === ar,
              s = pr(e.data.directives, e.context),
              l = pr(t.data.directives, t.context),
              c = [],
              u = [];

          for (n in l) {
            r = s[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, vr(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (vr(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
          }

          if (c.length) {
            var d = function d() {
              for (var n = 0; n < c.length; n++) {
                vr(c[n], "inserted", t, e);
              }
            };

            o ? dt(t, "insert", d) : d();
          }

          if (u.length && dt(t, "postpatch", function () {
            for (var n = 0; n < u.length; n++) {
              vr(u[n], "componentUpdated", t, e);
            }
          }), !o) for (n in s) {
            l[n] || vr(s[n], "unbind", e, e, a);
          }
        }(e, t);
      }

      var fr = Object.create(null);

      function pr(e, t) {
        var n,
            r,
            i = Object.create(null);
        if (!e) return i;

        for (n = 0; n < e.length; n++) {
          (r = e[n]).modifiers || (r.modifiers = fr), i[hr(r)] = r, r.def = Be(t.$options, "directives", r.name);
        }

        return i;
      }

      function hr(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
      }

      function vr(e, t, n, r, i) {
        var o = e.def && e.def[t];
        if (o) try {
          o(n.elm, e, n, r, i);
        } catch (r) {
          Ve(r, n.context, "directive " + e.name + " " + t + " hook");
        }
      }

      var gr = [ir, ur];

      function mr(e, t) {
        var n = t.componentOptions;

        if (!(a(n) && !1 === n.Ctor.options.inheritAttrs || o(e.data.attrs) && o(t.data.attrs))) {
          var r,
              i,
              s = t.elm,
              l = e.data.attrs || {},
              c = t.data.attrs || {};

          for (r in a(c.__ob__) && (c = t.data.attrs = M({}, c)), c) {
            i = c[r], l[r] !== i && yr(s, r, i);
          }

          for (r in (X || ee) && c.value !== l.value && yr(s, "value", c.value), l) {
            o(c[r]) && (Hn(r) ? s.removeAttributeNS(Wn, Gn(r)) : Pn(r) || s.removeAttribute(r));
          }
        }
      }

      function yr(e, t, n) {
        e.tagName.indexOf("-") > -1 ? br(e, t, n) : Un(t) ? Vn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Pn(t) ? e.setAttribute(t, function (e, t) {
          return Vn(t) || "false" === t ? "false" : "contenteditable" === e && Bn(t) ? t : "true";
        }(t, n)) : Hn(t) ? Vn(n) ? e.removeAttributeNS(Wn, Gn(t)) : e.setAttributeNS(Wn, t, n) : br(e, t, n);
      }

      function br(e, t, n) {
        if (Vn(n)) e.removeAttribute(t);else {
          if (X && !Z && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
            var r = function r(t) {
              t.stopImmediatePropagation(), e.removeEventListener("input", r);
            };

            e.addEventListener("input", r), e.__ieph = !0;
          }

          e.setAttribute(t, n);
        }
      }

      var _r = {
        create: mr,
        update: mr
      };

      function Er(e, t) {
        var n = t.elm,
            r = t.data,
            i = e.data;

        if (!(o(r.staticClass) && o(r["class"]) && (o(i) || o(i.staticClass) && o(i["class"])))) {
          var s = function (e) {
            for (var t = e.data, n = e, r = e; a(r.componentInstance);) {
              (r = r.componentInstance._vnode) && r.data && (t = qn(r.data, t));
            }

            for (; a(n = n.parent);) {
              n && n.data && (t = qn(t, n.data));
            }

            return i = t.staticClass, o = t["class"], a(i) || a(o) ? Yn(i, zn(o)) : "";
            var i, o;
          }(t),
              l = n._transitionClasses;

          a(l) && (s = Yn(s, zn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
        }
      }

      var wr,
          Ar,
          Sr,
          kr,
          Tr,
          Cr,
          xr = {
        create: Er,
        update: Er
      },
          Ir = /[\w).+\-_$\]]/;

      function Mr(e) {
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

              v && Ir.test(v) || (c = !0);
            }
          } else void 0 === i ? (p = r + 1, i = e.slice(0, r).trim()) : g();
        }

        function g() {
          (o || (o = [])).push(e.slice(p, r).trim()), p = r + 1;
        }

        if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== p && g(), o) for (r = 0; r < o.length; r++) {
          i = Or(i, o[r]);
        }
        return i;
      }

      function Or(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n),
            i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i);
      }

      function Dr(e, t) {
        console.error("[Vue compiler]: " + e);
      }

      function Lr(e, t) {
        return e ? e.map(function (e) {
          return e[t];
        }).filter(function (e) {
          return e;
        }) : [];
      }

      function Nr(e, t, n, r, i) {
        (e.props || (e.props = [])).push(Hr({
          name: t,
          value: n,
          dynamic: i
        }, r)), e.plain = !1;
      }

      function Rr(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Hr({
          name: t,
          value: n,
          dynamic: i
        }, r)), e.plain = !1;
      }

      function $r(e, t, n, r) {
        e.attrsMap[t] = n, e.attrsList.push(Hr({
          name: t,
          value: n
        }, r));
      }

      function Fr(e, t, n, r, i, o, a, s) {
        (e.directives || (e.directives = [])).push(Hr({
          name: t,
          rawName: n,
          value: r,
          arg: i,
          isDynamicArg: o,
          modifiers: a
        }, s)), e.plain = !1;
      }

      function jr(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t;
      }

      function Pr(e, t, n, r, o, a, s, l) {
        var c;
        (r = r || i).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete r.right) : r.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), r.capture && (delete r.capture, t = jr("!", t, l)), r.once && (delete r.once, t = jr("~", t, l)), r.passive && (delete r.passive, t = jr("&", t, l)), r["native"] ? (delete r["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
        var u = Hr({
          value: n.trim(),
          dynamic: l
        }, s);
        r !== i && (u.modifiers = r);
        var d = c[t];
        Array.isArray(d) ? o ? d.unshift(u) : d.push(u) : c[t] = d ? o ? [u, d] : [d, u] : u, e.plain = !1;
      }

      function Br(e, t, n) {
        var r = Ur(e, ":" + t) || Ur(e, "v-bind:" + t);
        if (null != r) return Mr(r);

        if (!1 !== n) {
          var i = Ur(e, t);
          if (null != i) return JSON.stringify(i);
        }
      }

      function Ur(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) {
          if (i[o].name === t) {
            i.splice(o, 1);
            break;
          }
        }
        return n && delete e.attrsMap[t], r;
      }

      function Wr(e, t) {
        for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          if (t.test(o.name)) return n.splice(r, 1), o;
        }
      }

      function Hr(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
      }

      function Gr(e, t, n) {
        var r = n || {},
            i = r.number,
            o = "$$v";
        r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
        var a = Vr(t, o);
        e.model = {
          value: "(" + t + ")",
          expression: JSON.stringify(t),
          callback: "function ($$v) {" + a + "}"
        };
      }

      function Vr(e, t) {
        var n = function (e) {
          if (e = e.trim(), wr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < wr - 1) return (kr = e.lastIndexOf(".")) > -1 ? {
            exp: e.slice(0, kr),
            key: '"' + e.slice(kr + 1) + '"'
          } : {
            exp: e,
            key: null
          };

          for (Ar = e, kr = Tr = Cr = 0; !Yr();) {
            zr(Sr = qr()) ? Jr(Sr) : 91 === Sr && Kr(Sr);
          }

          return {
            exp: e.slice(0, Tr),
            key: e.slice(Tr + 1, Cr)
          };
        }(e);

        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
      }

      function qr() {
        return Ar.charCodeAt(++kr);
      }

      function Yr() {
        return kr >= wr;
      }

      function zr(e) {
        return 34 === e || 39 === e;
      }

      function Kr(e) {
        var t = 1;

        for (Tr = kr; !Yr();) {
          if (zr(e = qr())) Jr(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
            Cr = kr;
            break;
          }
        }
      }

      function Jr(e) {
        for (var t = e; !Yr() && (e = qr()) !== t;) {
          ;
        }
      }

      var Qr;

      function Xr(e, t, n) {
        var r = Qr;
        return function i() {
          var o = t.apply(null, arguments);
          null !== o && ti(e, i, n, r);
        };
      }

      var Zr = Je && !(ne && Number(ne[1]) <= 53);

      function ei(e, t, n, r) {
        if (Zr) {
          var i = hn,
              o = t;

          t = o._wrapper = function (e) {
            if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments);
          };
        }

        Qr.addEventListener(e, t, ie ? {
          capture: n,
          passive: r
        } : n);
      }

      function ti(e, t, n, r) {
        (r || Qr).removeEventListener(e, t._wrapper || t, n);
      }

      function ni(e, t) {
        if (!o(e.data.on) || !o(t.data.on)) {
          var n = t.data.on || {},
              r = e.data.on || {};
          Qr = t.elm, function (e) {
            if (a(e.__r)) {
              var t = X ? "change" : "input";
              e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
            }

            a(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
          }(n), ut(n, r, ei, ti, Xr, t.context), Qr = void 0;
        }
      }

      var ri,
          ii = {
        create: ni,
        update: ni
      };

      function oi(e, t) {
        if (!o(e.data.domProps) || !o(t.data.domProps)) {
          var n,
              r,
              i = t.elm,
              s = e.data.domProps || {},
              l = t.data.domProps || {};

          for (n in a(l.__ob__) && (l = t.data.domProps = M({}, l)), s) {
            n in l || (i[n] = "");
          }

          for (n in l) {
            if (r = l[n], "textContent" === n || "innerHTML" === n) {
              if (t.children && (t.children.length = 0), r === s[n]) continue;
              1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
            }

            if ("value" === n && "PROGRESS" !== i.tagName) {
              i._value = r;
              var c = o(r) ? "" : String(r);
              ai(i, c) && (i.value = c);
            } else if ("innerHTML" === n && Qn(i.tagName) && o(i.innerHTML)) {
              (ri = ri || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";

              for (var u = ri.firstChild; i.firstChild;) {
                i.removeChild(i.firstChild);
              }

              for (; u.firstChild;) {
                i.appendChild(u.firstChild);
              }
            } else if (r !== s[n]) try {
              i[n] = r;
            } catch (e) {}
          }
        }
      }

      function ai(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function (e, t) {
          var n = !0;

          try {
            n = document.activeElement !== e;
          } catch (e) {}

          return n && e.value !== t;
        }(e, t) || function (e, t) {
          var n = e.value,
              r = e._vModifiers;

          if (a(r)) {
            if (r.number) return v(n) !== v(t);
            if (r.trim) return n.trim() !== t.trim();
          }

          return n !== t;
        }(e, t));
      }

      var si = {
        create: oi,
        update: oi
      },
          li = w(function (e) {
        var t = {},
            n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function (e) {
          if (e) {
            var r = e.split(n);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }), t;
      });

      function ci(e) {
        var t = ui(e.style);
        return e.staticStyle ? M(e.staticStyle, t) : t;
      }

      function ui(e) {
        return Array.isArray(e) ? O(e) : "string" == typeof e ? li(e) : e;
      }

      var di,
          fi = /^--/,
          pi = /\s*!important$/,
          hi = function hi(e, t, n) {
        if (fi.test(t)) e.style.setProperty(t, n);else if (pi.test(n)) e.style.setProperty(C(t), n.replace(pi, ""), "important");else {
          var r = gi(t);
          if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
            e.style[r] = n[i];
          } else e.style[r] = n;
        }
      },
          vi = ["Webkit", "Moz", "ms"],
          gi = w(function (e) {
        if (di = di || document.createElement("div").style, "filter" !== (e = S(e)) && e in di) return e;

        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < vi.length; n++) {
          var r = vi[n] + t;
          if (r in di) return r;
        }
      });

      function mi(e, t) {
        var n = t.data,
            r = e.data;

        if (!(o(n.staticStyle) && o(n.style) && o(r.staticStyle) && o(r.style))) {
          var i,
              s,
              l = t.elm,
              c = r.staticStyle,
              u = r.normalizedStyle || r.style || {},
              d = c || u,
              f = ui(t.data.style) || {};
          t.data.normalizedStyle = a(f.__ob__) ? M({}, f) : f;

          var p = function (e, t) {
            for (var n, r = {}, i = e; i.componentInstance;) {
              (i = i.componentInstance._vnode) && i.data && (n = ci(i.data)) && M(r, n);
            }

            (n = ci(e.data)) && M(r, n);

            for (var o = e; o = o.parent;) {
              o.data && (n = ci(o.data)) && M(r, n);
            }

            return r;
          }(t);

          for (s in d) {
            o(p[s]) && hi(l, s, "");
          }

          for (s in p) {
            (i = p[s]) !== d[s] && hi(l, s, null == i ? "" : i);
          }
        }
      }

      var yi = {
        create: mi,
        update: mi
      },
          bi = /\s+/;

      function _i(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(bi).forEach(function (t) {
          return e.classList.add(t);
        }) : e.classList.add(t);else {
          var n = " " + (e.getAttribute("class") || "") + " ";
          n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
        }
      }

      function Ei(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(bi).forEach(function (t) {
          return e.classList.remove(t);
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
          for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
            n = n.replace(r, " ");
          }

          (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
        }
      }

      function wi(e) {
        if (e) {
          if ("object" == _typeof(e)) {
            var t = {};
            return !1 !== e.css && M(t, Ai(e.name || "v")), M(t, e), t;
          }

          return "string" == typeof e ? Ai(e) : void 0;
        }
      }

      var Ai = w(function (e) {
        return {
          enterClass: e + "-enter",
          enterToClass: e + "-enter-to",
          enterActiveClass: e + "-enter-active",
          leaveClass: e + "-leave",
          leaveToClass: e + "-leave-to",
          leaveActiveClass: e + "-leave-active"
        };
      }),
          Si = z && !Z,
          ki = "transition",
          Ti = "animation",
          Ci = "transition",
          xi = "transitionend",
          Ii = "animation",
          Mi = "animationend";
      Si && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ci = "WebkitTransition", xi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ii = "WebkitAnimation", Mi = "webkitAnimationEnd"));
      var Oi = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
        return e();
      };

      function Di(e) {
        Oi(function () {
          Oi(e);
        });
      }

      function Li(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), _i(e, t));
      }

      function Ni(e, t) {
        e._transitionClasses && b(e._transitionClasses, t), Ei(e, t);
      }

      function Ri(e, t, n) {
        var r = Fi(e, t),
            i = r.type,
            o = r.timeout,
            a = r.propCount;
        if (!i) return n();

        var s = i === ki ? xi : Mi,
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

      var $i = /\b(transform|all)(,|$)/;

      function Fi(e, t) {
        var n,
            r = window.getComputedStyle(e),
            i = (r[Ci + "Delay"] || "").split(", "),
            o = (r[Ci + "Duration"] || "").split(", "),
            a = ji(i, o),
            s = (r[Ii + "Delay"] || "").split(", "),
            l = (r[Ii + "Duration"] || "").split(", "),
            c = ji(s, l),
            u = 0,
            d = 0;
        return t === ki ? a > 0 && (n = ki, u = a, d = o.length) : t === Ti ? c > 0 && (n = Ti, u = c, d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? ki : Ti : null) ? n === ki ? o.length : l.length : 0, {
          type: n,
          timeout: u,
          propCount: d,
          hasTransform: n === ki && $i.test(r[Ci + "Property"])
        };
      }

      function ji(e, t) {
        for (; e.length < t.length;) {
          e = e.concat(e);
        }

        return Math.max.apply(null, t.map(function (t, n) {
          return Pi(t) + Pi(e[n]);
        }));
      }

      function Pi(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
      }

      function Bi(e, t) {
        var n = e.elm;
        a(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var r = wi(e.data.transition);

        if (!o(r) && !a(n._enterCb) && 1 === n.nodeType) {
          for (var i = r.css, s = r.type, l = r.enterClass, u = r.enterToClass, d = r.enterActiveClass, f = r.appearClass, p = r.appearToClass, h = r.appearActiveClass, g = r.beforeEnter, m = r.enter, y = r.afterEnter, b = r.enterCancelled, _ = r.beforeAppear, E = r.appear, w = r.afterAppear, A = r.appearCancelled, S = r.duration, k = tn, T = tn.$vnode; T && T.parent;) {
            k = T.context, T = T.parent;
          }

          var C = !k._isMounted || !e.isRootInsert;

          if (!C || E || "" === E) {
            var x = C && f ? f : l,
                I = C && h ? h : d,
                M = C && p ? p : u,
                O = C && _ || g,
                D = C && "function" == typeof E ? E : m,
                L = C && w || y,
                N = C && A || b,
                R = v(c(S) ? S.enter : S),
                $ = !1 !== i && !Z,
                j = Hi(D),
                P = n._enterCb = F(function () {
              $ && (Ni(n, M), Ni(n, I)), P.cancelled ? ($ && Ni(n, x), N && N(n)) : L && L(n), n._enterCb = null;
            });
            e.data.show || dt(e, "insert", function () {
              var t = n.parentNode,
                  r = t && t._pending && t._pending[e.key];
              r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), D && D(n, P);
            }), O && O(n), $ && (Li(n, x), Li(n, I), Di(function () {
              Ni(n, x), P.cancelled || (Li(n, M), j || (Wi(R) ? setTimeout(P, R) : Ri(n, s, P)));
            })), e.data.show && (t && t(), D && D(n, P)), $ || j || P();
          }
        }
      }

      function Ui(e, t) {
        var n = e.elm;
        a(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var r = wi(e.data.transition);
        if (o(r) || 1 !== n.nodeType) return t();

        if (!a(n._leaveCb)) {
          var i = r.css,
              s = r.type,
              l = r.leaveClass,
              u = r.leaveToClass,
              d = r.leaveActiveClass,
              f = r.beforeLeave,
              p = r.leave,
              h = r.afterLeave,
              g = r.leaveCancelled,
              m = r.delayLeave,
              y = r.duration,
              b = !1 !== i && !Z,
              _ = Hi(p),
              E = v(c(y) ? y.leave : y),
              w = n._leaveCb = F(function () {
            n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), b && (Ni(n, u), Ni(n, d)), w.cancelled ? (b && Ni(n, l), g && g(n)) : (t(), h && h(n)), n._leaveCb = null;
          });

          m ? m(A) : A();
        }

        function A() {
          w.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), b && (Li(n, l), Li(n, d), Di(function () {
            Ni(n, l), w.cancelled || (Li(n, u), _ || (Wi(E) ? setTimeout(w, E) : Ri(n, s, w)));
          })), p && p(n, w), b || _ || w());
        }
      }

      function Wi(e) {
        return "number" == typeof e && !isNaN(e);
      }

      function Hi(e) {
        if (o(e)) return !1;
        var t = e.fns;
        return a(t) ? Hi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
      }

      function Gi(e, t) {
        !0 !== t.data.show && Bi(t);
      }

      var Vi = function (e) {
        var t,
            n,
            r = {},
            i = e.modules,
            c = e.nodeOps;

        for (t = 0; t < sr.length; ++t) {
          for (r[sr[t]] = [], n = 0; n < i.length; ++n) {
            a(i[n][sr[t]]) && r[sr[t]].push(i[n][sr[t]]);
          }
        }

        function u(e) {
          var t = c.parentNode(e);
          a(t) && c.removeChild(t, e);
        }

        function d(e, t, n, i, o, l, u) {
          if (a(e.elm) && a(l) && (e = l[u] = Ee(e)), e.isRootInsert = !o, !function (e, t, n, i) {
            var o = e.data;

            if (a(o)) {
              var l = a(e.componentInstance) && o.keepAlive;
              if (a(o = o.hook) && a(o = o.init) && o(e, !1), a(e.componentInstance)) return f(e, t), p(n, e.elm, i), s(l) && function (e, t, n, i) {
                for (var o, s = e; s.componentInstance;) {
                  if (a(o = (s = s.componentInstance._vnode).data) && a(o = o.transition)) {
                    for (o = 0; o < r.activate.length; ++o) {
                      r.activate[o](ar, s);
                    }

                    t.push(s);
                    break;
                  }
                }

                p(n, e.elm, i);
              }(e, t, n, i), !0;
            }
          }(e, t, n, i)) {
            var d = e.data,
                v = e.children,
                g = e.tag;
            a(g) ? (e.elm = e.ns ? c.createElementNS(e.ns, g) : c.createElement(g, e), y(e), h(e, v, t), a(d) && m(e, t), p(n, e.elm, i)) : s(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, i)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, i));
          }
        }

        function f(e, t) {
          a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), y(e)) : (or(e), t.push(e));
        }

        function p(e, t, n) {
          a(e) && (a(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
        }

        function h(e, t, n) {
          if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
            d(t[r], n, e.elm, null, !0, t, r);
          } else l(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
        }

        function v(e) {
          for (; e.componentInstance;) {
            e = e.componentInstance._vnode;
          }

          return a(e.tag);
        }

        function m(e, n) {
          for (var i = 0; i < r.create.length; ++i) {
            r.create[i](ar, e);
          }

          a(t = e.data.hook) && (a(t.create) && t.create(ar, e), a(t.insert) && n.push(e));
        }

        function y(e) {
          var t;
          if (a(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
            a(t = n.context) && a(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
          }
          a(t = tn) && t !== e.context && t !== e.fnContext && a(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
        }

        function b(e, t, n, r, i, o) {
          for (; r <= i; ++r) {
            d(n[r], o, e, t, !1, n, r);
          }
        }

        function _(e) {
          var t,
              n,
              i = e.data;
          if (a(i)) for (a(t = i.hook) && a(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) {
            r.destroy[t](e);
          }
          if (a(t = e.children)) for (n = 0; n < e.children.length; ++n) {
            _(e.children[n]);
          }
        }

        function E(e, t, n) {
          for (; t <= n; ++t) {
            var r = e[t];
            a(r) && (a(r.tag) ? (w(r), _(r)) : u(r.elm));
          }
        }

        function w(e, t) {
          if (a(t) || a(e.data)) {
            var n,
                i = r.remove.length + 1;

            for (a(t) ? t.listeners += i : t = function (e, t) {
              function n() {
                0 == --n.listeners && u(e);
              }

              return n.listeners = t, n;
            }(e.elm, i), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && w(n, t), n = 0; n < r.remove.length; ++n) {
              r.remove[n](e, t);
            }

            a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t();
          } else u(e.elm);
        }

        function A(e, t, n, r) {
          for (var i = n; i < r; i++) {
            var o = t[i];
            if (a(o) && lr(e, o)) return i;
          }
        }

        function S(e, t, n, i, l, u) {
          if (e !== t) {
            a(t.elm) && a(i) && (t = i[l] = Ee(t));
            var f = t.elm = e.elm;
            if (s(e.isAsyncPlaceholder)) a(t.asyncFactory.resolved) ? C(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (s(t.isStatic) && s(e.isStatic) && t.key === e.key && (s(t.isCloned) || s(t.isOnce))) t.componentInstance = e.componentInstance;else {
              var p,
                  h = t.data;
              a(h) && a(p = h.hook) && a(p = p.prepatch) && p(e, t);
              var g = e.children,
                  m = t.children;

              if (a(h) && v(t)) {
                for (p = 0; p < r.update.length; ++p) {
                  r.update[p](e, t);
                }

                a(p = h.hook) && a(p = p.update) && p(e, t);
              }

              o(t.text) ? a(g) && a(m) ? g !== m && function (e, t, n, r, i) {
                for (var s, l, u, f = 0, p = 0, h = t.length - 1, v = t[0], g = t[h], m = n.length - 1, y = n[0], _ = n[m], w = !i; f <= h && p <= m;) {
                  o(v) ? v = t[++f] : o(g) ? g = t[--h] : lr(v, y) ? (S(v, y, r, n, p), v = t[++f], y = n[++p]) : lr(g, _) ? (S(g, _, r, n, m), g = t[--h], _ = n[--m]) : lr(v, _) ? (S(v, _, r, n, m), w && c.insertBefore(e, v.elm, c.nextSibling(g.elm)), v = t[++f], _ = n[--m]) : lr(g, y) ? (S(g, y, r, n, p), w && c.insertBefore(e, g.elm, v.elm), g = t[--h], y = n[++p]) : (o(s) && (s = cr(t, f, h)), o(l = a(y.key) ? s[y.key] : A(y, t, f, h)) ? d(y, r, e, v.elm, !1, n, p) : lr(u = t[l], y) ? (S(u, y, r, n, p), t[l] = void 0, w && c.insertBefore(e, u.elm, v.elm)) : d(y, r, e, v.elm, !1, n, p), y = n[++p]);
                }

                f > h ? b(e, o(n[m + 1]) ? null : n[m + 1].elm, n, p, m, r) : p > m && E(t, f, h);
              }(f, g, m, n, u) : a(m) ? (a(e.text) && c.setTextContent(f, ""), b(f, null, m, 0, m.length - 1, n)) : a(g) ? E(g, 0, g.length - 1) : a(e.text) && c.setTextContent(f, "") : e.text !== t.text && c.setTextContent(f, t.text), a(h) && a(p = h.hook) && a(p = p.postpatch) && p(e, t);
            }
          }
        }

        function k(e, t, n) {
          if (s(n) && a(e.parent)) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
            t[r].data.hook.insert(t[r]);
          }
        }

        var T = g("attrs,class,staticClass,staticStyle,key");

        function C(e, t, n, r) {
          var i,
              o = t.tag,
              l = t.data,
              c = t.children;
          if (r = r || l && l.pre, t.elm = e, s(t.isComment) && a(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
          if (a(l) && (a(i = l.hook) && a(i = i.init) && i(t, !0), a(i = t.componentInstance))) return f(t, n), !0;

          if (a(o)) {
            if (a(c)) if (e.hasChildNodes()) {
              if (a(i = l) && a(i = i.domProps) && a(i = i.innerHTML)) {
                if (i !== e.innerHTML) return !1;
              } else {
                for (var u = !0, d = e.firstChild, p = 0; p < c.length; p++) {
                  if (!d || !C(d, c[p], n, r)) {
                    u = !1;
                    break;
                  }

                  d = d.nextSibling;
                }

                if (!u || d) return !1;
              }
            } else h(t, c, n);

            if (a(l)) {
              var v = !1;

              for (var g in l) {
                if (!T(g)) {
                  v = !0, m(t, n);
                  break;
                }
              }

              !v && l["class"] && at(l["class"]);
            }
          } else e.data !== t.text && (e.data = t.text);

          return !0;
        }

        return function (e, t, n, i) {
          if (!o(t)) {
            var l,
                u = !1,
                f = [];
            if (o(e)) u = !0, d(t, f);else {
              var p = a(e.nodeType);
              if (!p && lr(e, t)) S(e, t, f, null, null, i);else {
                if (p) {
                  if (1 === e.nodeType && e.hasAttribute(j) && (e.removeAttribute(j), n = !0), s(n) && C(e, t, f)) return k(t, f, !0), e;
                  l = e, e = new me(c.tagName(l).toLowerCase(), {}, [], void 0, l);
                }

                var h = e.elm,
                    g = c.parentNode(h);
                if (d(t, f, h._leaveCb ? null : g, c.nextSibling(h)), a(t.parent)) for (var m = t.parent, y = v(t); m;) {
                  for (var b = 0; b < r.destroy.length; ++b) {
                    r.destroy[b](m);
                  }

                  if (m.elm = t.elm, y) {
                    for (var w = 0; w < r.create.length; ++w) {
                      r.create[w](ar, m);
                    }

                    var A = m.data.hook.insert;
                    if (A.merged) for (var T = 1; T < A.fns.length; T++) {
                      A.fns[T]();
                    }
                  } else or(m);

                  m = m.parent;
                }
                a(g) ? E([e], 0, 0) : a(e.tag) && _(e);
              }
            }
            return k(t, f, u), t.elm;
          }

          a(e) && _(e);
        };
      }({
        nodeOps: rr,
        modules: [_r, xr, ii, si, yi, z ? {
          create: Gi,
          activate: Gi,
          remove: function remove(e, t) {
            !0 !== e.data.show ? Ui(e, t) : t();
          }
        } : {}].concat(gr)
      });

      Z && document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        e && e.vmodel && Zi(e, "input");
      });
      var qi = {
        inserted: function inserted(e, t, n, r) {
          "select" === n.tag ? (r.elm && !r.elm._vOptions ? dt(n, "postpatch", function () {
            qi.componentUpdated(e, t, n);
          }) : Yi(e, t, n.context), e._vOptions = [].map.call(e.options, Ji)) : ("textarea" === n.tag || tr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Qi), e.addEventListener("compositionend", Xi), e.addEventListener("change", Xi), Z && (e.vmodel = !0)));
        },
        componentUpdated: function componentUpdated(e, t, n) {
          if ("select" === n.tag) {
            Yi(e, t, n.context);
            var r = e._vOptions,
                i = e._vOptions = [].map.call(e.options, Ji);
            i.some(function (e, t) {
              return !R(e, r[t]);
            }) && (e.multiple ? t.value.some(function (e) {
              return Ki(e, i);
            }) : t.value !== t.oldValue && Ki(t.value, i)) && Zi(e, "change");
          }
        }
      };

      function Yi(e, t, n) {
        zi(e, t), (X || ee) && setTimeout(function () {
          zi(e, t);
        }, 0);
      }

      function zi(e, t, n) {
        var r = t.value,
            i = e.multiple;

        if (!i || Array.isArray(r)) {
          for (var o, a, s = 0, l = e.options.length; s < l; s++) {
            if (a = e.options[s], i) o = $(r, Ji(a)) > -1, a.selected !== o && (a.selected = o);else if (R(Ji(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
          }

          i || (e.selectedIndex = -1);
        }
      }

      function Ki(e, t) {
        return t.every(function (t) {
          return !R(t, e);
        });
      }

      function Ji(e) {
        return "_value" in e ? e._value : e.value;
      }

      function Qi(e) {
        e.target.composing = !0;
      }

      function Xi(e) {
        e.target.composing && (e.target.composing = !1, Zi(e.target, "input"));
      }

      function Zi(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }

      function eo(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : eo(e.componentInstance._vnode);
      }

      var to = {
        model: qi,
        show: {
          bind: function bind(e, t, n) {
            var r = t.value,
                i = (n = eo(n)).data && n.data.transition,
                o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
            r && i ? (n.data.show = !0, Bi(n, function () {
              e.style.display = o;
            })) : e.style.display = r ? o : "none";
          },
          update: function update(e, t, n) {
            var r = t.value;
            !r != !t.oldValue && ((n = eo(n)).data && n.data.transition ? (n.data.show = !0, r ? Bi(n, function () {
              e.style.display = e.__vOriginalDisplay;
            }) : Ui(n, function () {
              e.style.display = "none";
            })) : e.style.display = r ? e.__vOriginalDisplay : "none");
          },
          unbind: function unbind(e, t, n, r, i) {
            i || (e.style.display = e.__vOriginalDisplay);
          }
        }
      },
          no = {
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

      function ro(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options["abstract"] ? ro(Jt(t.children)) : e;
      }

      function io(e) {
        var t = {},
            n = e.$options;

        for (var r in n.propsData) {
          t[r] = e[r];
        }

        var i = n._parentListeners;

        for (var o in i) {
          t[S(o)] = i[o];
        }

        return t;
      }

      function oo(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
          props: t.componentOptions.propsData
        });
      }

      var ao = function ao(e) {
        return e.tag || Kt(e);
      },
          so = function so(e) {
        return "show" === e.name;
      },
          lo = {
        name: "transition",
        props: no,
        "abstract": !0,
        render: function render(e) {
          var t = this,
              n = this.$slots["default"];

          if (n && (n = n.filter(ao)).length) {
            var r = this.mode,
                i = n[0];
            if (function (e) {
              for (; e = e.parent;) {
                if (e.data.transition) return !0;
              }
            }(this.$vnode)) return i;
            var o = ro(i);
            if (!o) return i;
            if (this._leaving) return oo(e, i);
            var a = "__transition-" + this._uid + "-";
            o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : l(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
            var s = (o.data || (o.data = {})).transition = io(this),
                c = this._vnode,
                u = ro(c);

            if (o.data.directives && o.data.directives.some(so) && (o.data.show = !0), u && u.data && !function (e, t) {
              return t.key === e.key && t.tag === e.tag;
            }(o, u) && !Kt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
              var d = u.data.transition = M({}, s);
              if ("out-in" === r) return this._leaving = !0, dt(d, "afterLeave", function () {
                t._leaving = !1, t.$forceUpdate();
              }), oo(e, i);

              if ("in-out" === r) {
                if (Kt(o)) return c;

                var f,
                    p = function p() {
                  f();
                };

                dt(s, "afterEnter", p), dt(s, "enterCancelled", p), dt(d, "delayLeave", function (e) {
                  f = e;
                });
              }
            }

            return i;
          }
        }
      },
          co = M({
        tag: String,
        moveClass: String
      }, no);

      function uo(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }

      function fo(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }

      function po(e) {
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

      delete co.mode;
      var ho = {
        Transition: lo,
        TransitionGroup: {
          props: co,
          beforeMount: function beforeMount() {
            var e = this,
                t = this._update;

            this._update = function (n, r) {
              var i = nn(e);
              e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r);
            };
          },
          render: function render(e) {
            for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], a = io(this), s = 0; s < i.length; s++) {
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
            e.length && this.hasMove(e[0].elm, t) && (e.forEach(uo), e.forEach(fo), e.forEach(po), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                    r = n.style;
                Li(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(xi, n._moveCb = function e(r) {
                  r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(xi, e), n._moveCb = null, Ni(n, t));
                });
              }
            }));
          },
          methods: {
            hasMove: function hasMove(e, t) {
              if (!Si) return !1;
              if (this._hasMove) return this._hasMove;
              var n = e.cloneNode();
              e._transitionClasses && e._transitionClasses.forEach(function (e) {
                Ei(n, e);
              }), _i(n, t), n.style.display = "none", this.$el.appendChild(n);
              var r = Fi(n);
              return this.$el.removeChild(n), this._hasMove = r.hasTransform;
            }
          }
        }
      };
      In.config.mustUseProp = jn, In.config.isReservedTag = Xn, In.config.isReservedAttr = $n, In.config.getTagNamespace = Zn, In.config.isUnknownElement = function (e) {
        if (!z) return !0;
        if (Xn(e)) return !1;
        if (e = e.toLowerCase(), null != er[e]) return er[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? er[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : er[e] = /HTMLUnknownElement/.test(t.toString());
      }, M(In.options.directives, to), M(In.options.components, ho), In.prototype.__patch__ = z ? Vi : D, In.prototype.$mount = function (e, t) {
        return function (e, t, n) {
          var r;
          return e.$el = t, e.$options.render || (e.$options.render = be), sn(e, "beforeMount"), r = function r() {
            e._update(e._render(), n);
          }, new bn(e, r, D, {
            before: function before() {
              e._isMounted && !e._isDestroyed && sn(e, "beforeUpdate");
            }
          }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, sn(e, "mounted")), e;
        }(this, e = e && z ? nr(e) : void 0, t);
      }, z && setTimeout(function () {
        U.devtools && se && se.emit("init", In);
      }, 0);

      var vo,
          go = /\{\{((?:.|\r?\n)+?)\}\}/g,
          mo = /[-.*+?^${}()|[\]\/\\]/g,
          yo = w(function (e) {
        var t = e[0].replace(mo, "\\$&"),
            n = e[1].replace(mo, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
      }),
          bo = {
        staticKeys: ["staticClass"],
        transformNode: function transformNode(e, t) {
          t.warn;
          var n = Ur(e, "class");
          n && (e.staticClass = JSON.stringify(n));
          var r = Br(e, "class", !1);
          r && (e.classBinding = r);
        },
        genData: function genData(e) {
          var t = "";
          return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
        }
      },
          _o = {
        staticKeys: ["staticStyle"],
        transformNode: function transformNode(e, t) {
          t.warn;
          var n = Ur(e, "style");
          n && (e.staticStyle = JSON.stringify(li(n)));
          var r = Br(e, "style", !1);
          r && (e.styleBinding = r);
        },
        genData: function genData(e) {
          var t = "";
          return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
        }
      },
          Eo = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
          wo = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
          Ao = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
          So = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          ko = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          To = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + W.source + "]*",
          Co = "((?:" + To + "\\:)?" + To + ")",
          xo = new RegExp("^<" + Co),
          Io = /^\s*(\/?)>/,
          Mo = new RegExp("^<\\/" + Co + "[^>]*>"),
          Oo = /^<!DOCTYPE [^>]+>/i,
          Do = /^<!\--/,
          Lo = /^<!\[/,
          No = g("script,style,textarea", !0),
          Ro = {},
          $o = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
      },
          Fo = /&(?:lt|gt|quot|amp|#39);/g,
          jo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
          Po = g("pre,textarea", !0),
          Bo = function Bo(e, t) {
        return e && Po(e) && "\n" === t[0];
      };

      function Uo(e, t) {
        var n = t ? jo : Fo;
        return e.replace(n, function (e) {
          return $o[e];
        });
      }

      var Wo,
          Ho,
          Go,
          Vo,
          qo,
          Yo,
          zo,
          Ko,
          Jo = /^@|^v-on:/,
          Qo = /^v-|^@|^:|^#/,
          Xo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
          Zo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          ea = /^\(|\)$/g,
          ta = /^\[.*\]$/,
          na = /:(.*)$/,
          ra = /^:|^\.|^v-bind:/,
          ia = /\.[^.\]]+(?=[^\]]*$)/g,
          oa = /^v-slot(:|$)|^#/,
          aa = /[\r\n]/,
          sa = /\s+/g,
          la = w(function (e) {
        return (vo = vo || document.createElement("div")).innerHTML = e, vo.textContent;
      }),
          ca = "_empty_";

      function ua(e, t, n) {
        return {
          type: 1,
          tag: e,
          attrsList: t,
          attrsMap: ga(t),
          rawAttrsMap: {},
          parent: n,
          children: []
        };
      }

      function da(e, t) {
        var n;
        !function (e) {
          var t = Br(e, "key");
          t && (e.key = t);
        }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
          var t = Br(e, "ref");
          t && (e.ref = t, e.refInFor = function (e) {
            for (var t = e; t;) {
              if (void 0 !== t["for"]) return !0;
              t = t.parent;
            }

            return !1;
          }(e));
        }(e), function (e) {
          var t;
          "template" === e.tag ? (t = Ur(e, "scope"), e.slotScope = t || Ur(e, "slot-scope")) : (t = Ur(e, "slot-scope")) && (e.slotScope = t);
          var n = Br(e, "slot");

          if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Rr(e, "slot", n, function (e, t) {
            return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
          }(e))), "template" === e.tag) {
            var r = Wr(e, oa);

            if (r) {
              var i = ha(r),
                  o = i.name,
                  a = i.dynamic;
              e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || ca;
            }
          } else {
            var s = Wr(e, oa);

            if (s) {
              var l = e.scopedSlots || (e.scopedSlots = {}),
                  c = ha(s),
                  u = c.name,
                  d = c.dynamic,
                  f = l[u] = ua("template", [], e);
              f.slotTarget = u, f.slotTargetDynamic = d, f.children = e.children.filter(function (e) {
                if (!e.slotScope) return e.parent = f, !0;
              }), f.slotScope = s.value || ca, e.children = [], e.plain = !1;
            }
          }
        }(e), "slot" === (n = e).tag && (n.slotName = Br(n, "name")), function (e) {
          var t;
          (t = Br(e, "is")) && (e.component = t), null != Ur(e, "inline-template") && (e.inlineTemplate = !0);
        }(e);

        for (var r = 0; r < Go.length; r++) {
          e = Go[r](e, t) || e;
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
            if (r = i = c[t].name, o = c[t].value, Qo.test(r)) {
              if (e.hasBindings = !0, (a = va(r.replace(Qo, ""))) && (r = r.replace(ia, "")), ra.test(r)) r = r.replace(ra, ""), o = Mr(o), (l = ta.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (r = S(r)) && (r = "innerHTML"), a.camel && !l && (r = S(r)), a.sync && (s = Vr(o, "$event"), l ? Pr(e, '"update:"+(' + r + ")", s, null, !1, 0, c[t], !0) : (Pr(e, "update:" + S(r), s, null, !1, 0, c[t]), C(r) !== S(r) && Pr(e, "update:" + C(r), s, null, !1, 0, c[t])))), a && a.prop || !e.component && zo(e.tag, e.attrsMap.type, r) ? Nr(e, r, o, c[t], l) : Rr(e, r, o, c[t], l);else if (Jo.test(r)) r = r.replace(Jo, ""), (l = ta.test(r)) && (r = r.slice(1, -1)), Pr(e, r, o, a, !1, 0, c[t], l);else {
                var u = (r = r.replace(Qo, "")).match(na),
                    d = u && u[1];
                l = !1, d && (r = r.slice(0, -(d.length + 1)), ta.test(d) && (d = d.slice(1, -1), l = !0)), Fr(e, r, i, o, d, l, a, c[t]);
              }
            } else Rr(e, r, JSON.stringify(o), c[t]), !e.component && "muted" === r && zo(e.tag, e.attrsMap.type, r) && Nr(e, r, "true", c[t]);
          }
        }(e), e;
      }

      function fa(e) {
        var t;

        if (t = Ur(e, "v-for")) {
          var n = function (e) {
            var t = e.match(Xo);

            if (t) {
              var n = {};
              n["for"] = t[2].trim();
              var r = t[1].trim().replace(ea, ""),
                  i = r.match(Zo);
              return i ? (n.alias = r.replace(Zo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n;
            }
          }(t);

          n && M(e, n);
        }
      }

      function pa(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }

      function ha(e) {
        var t = e.name.replace(oa, "");
        return t || "#" !== e.name[0] && (t = "default"), ta.test(t) ? {
          name: t.slice(1, -1),
          dynamic: !0
        } : {
          name: '"' + t + '"',
          dynamic: !1
        };
      }

      function va(e) {
        var t = e.match(ia);

        if (t) {
          var n = {};
          return t.forEach(function (e) {
            n[e.slice(1)] = !0;
          }), n;
        }
      }

      function ga(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) {
          t[e[n].name] = e[n].value;
        }

        return t;
      }

      var ma = /^xmlns:NS\d+/,
          ya = /^NS\d+:/;

      function ba(e) {
        return ua(e.tag, e.attrsList.slice(), e.parent);
      }

      var _a,
          Ea,
          wa,
          Aa = [bo, _o, {
        preTransformNode: function preTransformNode(e, t) {
          if ("input" === e.tag) {
            var n,
                r = e.attrsMap;
            if (!r["v-model"]) return;

            if ((r[":type"] || r["v-bind:type"]) && (n = Br(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
              var i = Ur(e, "v-if", !0),
                  o = i ? "&&(" + i + ")" : "",
                  a = null != Ur(e, "v-else", !0),
                  s = Ur(e, "v-else-if", !0),
                  l = ba(e);
              fa(l), $r(l, "type", "checkbox"), da(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + o, pa(l, {
                exp: l["if"],
                block: l
              });
              var c = ba(e);
              Ur(c, "v-for", !0), $r(c, "type", "radio"), da(c, t), pa(l, {
                exp: "(" + n + ")==='radio'" + o,
                block: c
              });
              var u = ba(e);
              return Ur(u, "v-for", !0), $r(u, ":type", n), da(u, t), pa(l, {
                exp: i,
                block: u
              }), a ? l["else"] = !0 : s && (l.elseif = s), l;
            }
          }
        }
      }],
          Sa = {
        expectHTML: !0,
        modules: Aa,
        directives: {
          model: function model(e, t, n) {
            var r = t.value,
                i = t.modifiers,
                o = e.tag,
                a = e.attrsMap.type;
            if (e.component) return Gr(e, r, i), !1;
            if ("select" === o) !function (e, t, n) {
              var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
              Pr(e, "change", r = r + " " + Vr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
            }(e, r, i);else if ("input" === o && "checkbox" === a) !function (e, t, n) {
              var r = n && n.number,
                  i = Br(e, "value") || "null",
                  o = Br(e, "true-value") || "true",
                  a = Br(e, "false-value") || "false";
              Nr(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Pr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Vr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Vr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Vr(t, "$$c") + "}", null, !0);
            }(e, r, i);else if ("input" === o && "radio" === a) !function (e, t, n) {
              var r = n && n.number,
                  i = Br(e, "value") || "null";
              Nr(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Pr(e, "change", Vr(t, i), null, !0);
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
              var d = Vr(t, u);
              l && (d = "if($event.target.composing)return;" + d), Nr(e, "value", "(" + t + ")"), Pr(e, c, d, null, !0), (s || a) && Pr(e, "blur", "$forceUpdate()");
            }(e, r, i);else if (!U.isReservedTag(o)) return Gr(e, r, i), !1;
            return !0;
          },
          text: function text(e, t) {
            t.value && Nr(e, "textContent", "_s(" + t.value + ")", t);
          },
          html: function html(e, t) {
            t.value && Nr(e, "innerHTML", "_s(" + t.value + ")", t);
          }
        },
        isPreTag: function isPreTag(e) {
          return "pre" === e;
        },
        isUnaryTag: Eo,
        mustUseProp: jn,
        canBeLeftOpenTag: wo,
        isReservedTag: Xn,
        getTagNamespace: Zn,
        staticKeys: (wa = Aa, wa.reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, []).join(","))
      },
          ka = w(function (e) {
        return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
      });

      function Ta(e, t) {
        e && (_a = ka(t.staticKeys || ""), Ea = t.isReservedTag || L, Ca(e), xa(e, !1));
      }

      function Ca(e) {
        if (e["static"] = function (e) {
          return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || m(e.tag) || !Ea(e.tag) || function (e) {
            for (; e.parent;) {
              if ("template" !== (e = e.parent).tag) return !1;
              if (e["for"]) return !0;
            }

            return !1;
          }(e) || !Object.keys(e).every(_a))));
        }(e), 1 === e.type) {
          if (!Ea(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

          for (var t = 0, n = e.children.length; t < n; t++) {
            var r = e.children[t];
            Ca(r), r["static"] || (e["static"] = !1);
          }

          if (e.ifConditions) for (var i = 1, o = e.ifConditions.length; i < o; i++) {
            var a = e.ifConditions[i].block;
            Ca(a), a["static"] || (e["static"] = !1);
          }
        }
      }

      function xa(e, t) {
        if (1 === e.type) {
          if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
          if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
            xa(e.children[n], t || !!e["for"]);
          }
          if (e.ifConditions) for (var i = 1, o = e.ifConditions.length; i < o; i++) {
            xa(e.ifConditions[i].block, t);
          }
        }
      }

      var Ia = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
          Ma = /\([^)]*?\);*$/,
          Oa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
          Da = {
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
          La = {
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
          Na = function Na(e) {
        return "if(" + e + ")return null;";
      },
          Ra = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: Na("$event.target !== $event.currentTarget"),
        ctrl: Na("!$event.ctrlKey"),
        shift: Na("!$event.shiftKey"),
        alt: Na("!$event.altKey"),
        meta: Na("!$event.metaKey"),
        left: Na("'button' in $event && $event.button !== 0"),
        middle: Na("'button' in $event && $event.button !== 1"),
        right: Na("'button' in $event && $event.button !== 2")
      };

      function $a(e, t) {
        var n = t ? "nativeOn:" : "on:",
            r = "",
            i = "";

        for (var o in e) {
          var a = Fa(e[o]);
          e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ",";
        }

        return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r;
      }

      function Fa(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map(function (e) {
          return Fa(e);
        }).join(",") + "]";
        var t = Oa.test(e.value),
            n = Ia.test(e.value),
            r = Oa.test(e.value.replace(Ma, ""));

        if (e.modifiers) {
          var i = "",
              o = "",
              a = [];

          for (var s in e.modifiers) {
            if (Ra[s]) o += Ra[s], Da[s] && a.push(s);else if ("exact" === s) {
              var l = e.modifiers;
              o += Na(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                return !l[e];
              }).map(function (e) {
                return "$event." + e + "Key";
              }).join("||"));
            } else a.push(s);
          }

          return a.length && (i += function (e) {
            return "if(!$event.type.indexOf('key')&&" + e.map(ja).join("&&") + ")return null;";
          }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}";
        }

        return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}";
      }

      function ja(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Da[e],
            r = La[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")";
      }

      var Pa = {
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
        cloak: D
      },
          Ba = function Ba(e) {
        this.options = e, this.warn = e.warn || Dr, this.transforms = Lr(e.modules, "transformCode"), this.dataGenFns = Lr(e.modules, "genData"), this.directives = M(M({}, Pa), e.directives);
        var t = e.isReservedTag || L;
        this.maybeComponent = function (e) {
          return !!e.component || !t(e.tag);
        }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
      };

      function Ua(e, t) {
        var n = new Ba(t);
        return {
          render: "with(this){return " + (e ? Wa(e, n) : '_c("div")') + "}",
          staticRenderFns: n.staticRenderFns
        };
      }

      function Wa(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ha(e, t);
        if (e.once && !e.onceProcessed) return Ga(e, t);
        if (e["for"] && !e.forProcessed) return Ya(e, t);
        if (e["if"] && !e.ifProcessed) return Va(e, t);

        if ("template" !== e.tag || e.slotTarget || t.pre) {
          if ("slot" === e.tag) return function (e, t) {
            var n = e.slotName || '"default"',
                r = Qa(e, t),
                i = "_t(" + n + (r ? "," + r : ""),
                o = e.attrs || e.dynamicAttrs ? es((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
              return {
                name: S(e.name),
                value: e.value,
                dynamic: e.dynamic
              };
            })) : null,
                a = e.attrsMap["v-bind"];
            return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")";
          }(e, t);
          var n;
          if (e.component) n = function (e, t, n) {
            var r = t.inlineTemplate ? null : Qa(t, n, !0);
            return "_c(" + e + "," + za(t, n) + (r ? "," + r : "") + ")";
          }(e.component, e, t);else {
            var r;
            (!e.plain || e.pre && t.maybeComponent(e)) && (r = za(e, t));
            var i = e.inlineTemplate ? null : Qa(e, t, !0);
            n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
          }

          for (var o = 0; o < t.transforms.length; o++) {
            n = t.transforms[o](e, n);
          }

          return n;
        }

        return Qa(e, t) || "void 0";
      }

      function Ha(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Wa(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
      }

      function Ga(e, t) {
        if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return Va(e, t);

        if (e.staticInFor) {
          for (var n = "", r = e.parent; r;) {
            if (r["for"]) {
              n = r.key;
              break;
            }

            r = r.parent;
          }

          return n ? "_o(" + Wa(e, t) + "," + t.onceId++ + "," + n + ")" : Wa(e, t);
        }

        return Ha(e, t);
      }

      function Va(e, t, n, r) {
        return e.ifProcessed = !0, qa(e.ifConditions.slice(), t, n, r);
      }

      function qa(e, t, n, r) {
        if (!e.length) return r || "_e()";
        var i = e.shift();
        return i.exp ? "(" + i.exp + ")?" + o(i.block) + ":" + qa(e, t, n, r) : "" + o(i.block);

        function o(e) {
          return n ? n(e, t) : e.once ? Ga(e, t) : Wa(e, t);
        }
      }

      function Ya(e, t, n, r) {
        var i = e["for"],
            o = e.alias,
            a = e.iterator1 ? "," + e.iterator1 : "",
            s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Wa)(e, t) + "})";
      }

      function za(e, t) {
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

        if (e.attrs && (n += "attrs:" + es(e.attrs) + ","), e.props && (n += "domProps:" + es(e.props) + ","), e.events && (n += $a(e.events, !1) + ","), e.nativeEvents && (n += $a(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
          var r = e["for"] || Object.keys(t).some(function (e) {
            var n = t[e];
            return n.slotTargetDynamic || n["if"] || n["for"] || Ka(n);
          }),
              i = !!e["if"];
          if (!r) for (var o = e.parent; o;) {
            if (o.slotScope && o.slotScope !== ca || o["for"]) {
              r = !0;
              break;
            }

            o["if"] && (i = !0), o = o.parent;
          }
          var a = Object.keys(t).map(function (e) {
            return Ja(t[e], n);
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
              var r = Ua(n, t.options);
              return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
                return "function(){" + e + "}";
              }).join(",") + "]}";
            }
          }(e, t);

          o && (n += o + ",");
        }

        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + es(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
      }

      function Ka(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(Ka));
      }

      function Ja(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e["if"] && !e.ifProcessed && !n) return Va(e, t, Ja, "null");
        if (e["for"] && !e.forProcessed) return Ya(e, t, Ja);
        var r = e.slotScope === ca ? "" : String(e.slotScope),
            i = "function(" + r + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Qa(e, t) || "undefined") + ":undefined" : Qa(e, t) || "undefined" : Wa(e, t)) + "}",
            o = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}";
      }

      function Qa(e, t, n, r, i) {
        var o = e.children;

        if (o.length) {
          var a = o[0];

          if (1 === o.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
            var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
            return "" + (r || Wa)(a, t) + s;
          }

          var l = n ? function (e, t) {
            for (var n = 0, r = 0; r < e.length; r++) {
              var i = e[r];

              if (1 === i.type) {
                if (Xa(i) || i.ifConditions && i.ifConditions.some(function (e) {
                  return Xa(e.block);
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
              c = i || Za;
          return "[" + o.map(function (e) {
            return c(e, t);
          }).join(",") + "]" + (l ? "," + l : "");
        }
      }

      function Xa(e) {
        return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
      }

      function Za(e, t) {
        return 1 === e.type ? Wa(e, t) : 3 === e.type && e.isComment ? function (e) {
          return "_e(" + JSON.stringify(e.text) + ")";
        }(e) : "_v(" + (2 === (n = e).type ? n.expression : ts(JSON.stringify(n.text))) + ")";
        var n;
      }

      function es(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
          var i = e[r],
              o = ts(i.value);
          i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ",";
        }

        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
      }

      function ts(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }

      function ns(e, t) {
        try {
          return new Function(e);
        } catch (n) {
          return t.push({
            err: n,
            code: e
          }), D;
        }
      }

      function rs(e) {
        var t = Object.create(null);
        return function (n, r, i) {
          (r = M({}, r)).warn, delete r.warn;
          var o = r.delimiters ? String(r.delimiters) + n : n;
          if (t[o]) return t[o];
          var a = e(n, r),
              s = {},
              l = [];
          return s.render = ns(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
            return ns(e, l);
          }), t[o] = s;
        };
      }

      new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
      var is,
          os,
          as = (is = function is(e, t) {
        var n = function (e, t) {
          Wo = t.warn || Dr, Yo = t.isPreTag || L, zo = t.mustUseProp || L, Ko = t.getTagNamespace || L, t.isReservedTag, Go = Lr(t.modules, "transformNode"), Vo = Lr(t.modules, "preTransformNode"), qo = Lr(t.modules, "postTransformNode"), Ho = t.delimiters;
          var n,
              r,
              i = [],
              o = !1 !== t.preserveWhitespace,
              a = t.whitespace,
              s = !1,
              l = !1;

          function c(e) {
            if (u(e), s || e.processed || (e = da(e, t)), i.length || e === n || n["if"] && (e.elseif || e["else"]) && pa(n, {
              exp: e.elseif,
              block: e
            }), r && !e.forbidden) if (e.elseif || e["else"]) a = e, (c = function (e) {
              for (var t = e.length; t--;) {
                if (1 === e[t].type) return e[t];
                e.pop();
              }
            }(r.children)) && c["if"] && pa(c, {
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
            }), u(e), e.pre && (s = !1), Yo(e.tag) && (l = !1);

            for (var d = 0; d < qo.length; d++) {
              qo[d](e, t);
            }
          }

          function u(e) {
            if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
              e.children.pop();
            }
          }

          return function (e, t) {
            for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || L, s = t.canBeLeftOpenTag || L, l = 0; e;) {
              if (n = e, r && No(r)) {
                var c = 0,
                    u = r.toLowerCase(),
                    d = Ro[u] || (Ro[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                    f = e.replace(d, function (e, n, r) {
                  return c = r.length, No(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Bo(u, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
                });
                l += e.length - f.length, e = f, T(u, l - c, l);
              } else {
                var p = e.indexOf("<");

                if (0 === p) {
                  if (Do.test(e)) {
                    var h = e.indexOf("--\x3e");

                    if (h >= 0) {
                      t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), A(h + 3);
                      continue;
                    }
                  }

                  if (Lo.test(e)) {
                    var v = e.indexOf("]>");

                    if (v >= 0) {
                      A(v + 2);
                      continue;
                    }
                  }

                  var g = e.match(Oo);

                  if (g) {
                    A(g[0].length);
                    continue;
                  }

                  var m = e.match(Mo);

                  if (m) {
                    var y = l;
                    A(m[0].length), T(m[1], y, l);
                    continue;
                  }

                  var b = S();

                  if (b) {
                    k(b), Bo(b.tagName, e) && A(1);
                    continue;
                  }
                }

                var _ = void 0,
                    E = void 0,
                    w = void 0;

                if (p >= 0) {
                  for (E = e.slice(p); !(Mo.test(E) || xo.test(E) || Do.test(E) || Lo.test(E) || (w = E.indexOf("<", 1)) < 0);) {
                    p += w, E = e.slice(p);
                  }

                  _ = e.substring(0, p);
                }

                p < 0 && (_ = e), _ && A(_.length), t.chars && _ && t.chars(_, l - _.length, l);
              }

              if (e === n) {
                t.chars && t.chars(e);
                break;
              }
            }

            function A(t) {
              l += t, e = e.substring(t);
            }

            function S() {
              var t = e.match(xo);

              if (t) {
                var n,
                    r,
                    i = {
                  tagName: t[1],
                  attrs: [],
                  start: l
                };

                for (A(t[0].length); !(n = e.match(Io)) && (r = e.match(ko) || e.match(So));) {
                  r.start = l, A(r[0].length), r.end = l, i.attrs.push(r);
                }

                if (n) return i.unarySlash = n[1], A(n[0].length), i.end = l, i;
              }
            }

            function k(e) {
              var n = e.tagName,
                  l = e.unarySlash;
              o && ("p" === r && Ao(n) && T(r), s(n) && r === n && T(n));

              for (var c = a(n) || !!l, u = e.attrs.length, d = new Array(u), f = 0; f < u; f++) {
                var p = e.attrs[f],
                    h = p[3] || p[4] || p[5] || "",
                    v = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                d[f] = {
                  name: p[1],
                  value: Uo(h, v)
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

            function T(e, n, o) {
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

            T();
          }(e, {
            warn: Wo,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function start(e, o, a, u, d) {
              var f = r && r.ns || Ko(e);
              X && "svg" === f && (o = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var r = e[n];
                  ma.test(r.name) || (r.name = r.name.replace(ya, ""), t.push(r));
                }

                return t;
              }(o));
              var p,
                  h = ua(e, o, r);
              f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || ae() || (h.forbidden = !0);

              for (var v = 0; v < Vo.length; v++) {
                h = Vo[v](h, t) || h;
              }

              s || (function (e) {
                null != Ur(e, "v-pre") && (e.pre = !0);
              }(h), h.pre && (s = !0)), Yo(h.tag) && (l = !0), s ? function (e) {
                var t = e.attrsList,
                    n = t.length;
                if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) {
                  r[i] = {
                    name: t[i].name,
                    value: JSON.stringify(t[i].value)
                  }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
                } else e.pre || (e.plain = !0);
              }(h) : h.processed || (fa(h), function (e) {
                var t = Ur(e, "v-if");
                if (t) e["if"] = t, pa(e, {
                  exp: t,
                  block: e
                });else {
                  null != Ur(e, "v-else") && (e["else"] = !0);
                  var n = Ur(e, "v-else-if");
                  n && (e.elseif = n);
                }
              }(h), function (e) {
                null != Ur(e, "v-once") && (e.once = !0);
              }(h)), n || (n = h), a ? c(h) : (r = h, i.push(h));
            },
            end: function end(e, t, n) {
              var o = i[i.length - 1];
              i.length -= 1, r = i[i.length - 1], c(o);
            },
            chars: function chars(e, t, n) {
              if (r && (!X || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                var i,
                    c,
                    u,
                    d = r.children;
                (e = l || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : la(e) : d.length ? a ? "condense" === a && aa.test(e) ? "" : " " : o ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(sa, " ")), !s && " " !== e && (c = function (e, t) {
                  var n = t ? yo(t) : go;

                  if (n.test(e)) {
                    for (var r, i, o, a = [], s = [], l = n.lastIndex = 0; r = n.exec(e);) {
                      (i = r.index) > l && (s.push(o = e.slice(l, i)), a.push(JSON.stringify(o)));
                      var c = Mr(r[1].trim());
                      a.push("_s(" + c + ")"), s.push({
                        "@binding": c
                      }), l = i + r[0].length;
                    }

                    return l < e.length && (s.push(o = e.slice(l)), a.push(JSON.stringify(o))), {
                      expression: a.join("+"),
                      tokens: s
                    };
                  }
                }(e, Ho)) ? u = {
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

        !1 !== t.optimize && Ta(n, t);
        var r = Ua(n, t);
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
          if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = M(Object.create(e.directives || null), n.directives)), n) {
            "modules" !== a && "directives" !== a && (r[a] = n[a]);
          }

          r.warn = function (e, t, n) {
            (n ? o : i).push(e);
          };

          var s = is(t.trim(), r);
          return s.errors = i, s.tips = o, s;
        }

        return {
          compile: t,
          compileToFunctions: rs(t)
        };
      })(Sa),
          ss = (as.compile, as.compileToFunctions);

      function ls(e) {
        return (os = os || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', os.innerHTML.indexOf("&#10;") > 0;
      }

      var cs = !!z && ls(!1),
          us = !!z && ls(!0),
          ds = w(function (e) {
        var t = nr(e);
        return t && t.innerHTML;
      }),
          fs = In.prototype.$mount;
      In.prototype.$mount = function (e, t) {
        if ((e = e && nr(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;

        if (!n.render) {
          var r = n.template;
          if (r) {
            if ("string" == typeof r) "#" === r.charAt(0) && (r = ds(r));else {
              if (!r.nodeType) return this;
              r = r.innerHTML;
            }
          } else e && (r = function (e) {
            if (e.outerHTML) return e.outerHTML;
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML;
          }(e));

          if (r) {
            var i = ss(r, {
              outputSourceRange: !1,
              shouldDecodeNewlines: cs,
              shouldDecodeNewlinesForHref: us,
              delimiters: n.delimiters,
              comments: n.comments
            }, this),
                o = i.render,
                a = i.staticRenderFns;
            n.render = o, n.staticRenderFns = a;
          }
        }

        return fs.call(this, e, t);
      }, In.compile = ss;
      var ps = In;

      var hs,
          vs,
          gs,
          ms,
          ys = function ys() {
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

      ys._withStripped = !0, function (e) {
        e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
      }(hs || (hs = {})), function (e) {
        e.LOCATION = "Location";
      }(vs || (vs = {})), function (e) {
        e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.TILESET = "tileset", e.PICTURE = "picture", e.POINTER = "pointer", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
      }(gs || (gs = {})), function (e) {
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

          function w(e) {
            var t = {
              x: e.clientX,
              y: e.clientY
            };
            return i.mapPositionToGrid(t);
          }

          n.addEventListener("click", function (e) {
            var n = w(e);
            t || l(n.i, n.j, n.x, n.y), o();
          }), n.addEventListener("mousemove", function (e) {
            var t = w(e);
            E ? d(t.i, t.j, e.buttons) : f(t.i, t.j);
          }), n.addEventListener("mousedown", function (e) {
            E = !0;
            var t = w(e);
            c(t.i, t.j, t.x, t.y, e.buttons), o();
          }), n.addEventListener("mouseup", function (e) {
            E = !1;
            var t = w(e);
            u(t.i, t.j, e.buttons);
          }), n.addEventListener("mouseout", function (e) {
            E ? d(void 0, void 0, e.buttons) : f(void 0, void 0);
          }), n.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            var t = w(e);
            g(t.i, t.j);
          }), n.addEventListener("dblclick", function (e) {
            var t = w(e);
            m(t.i, t.j);
          }), n.addEventListener("wheel", function (e) {
            var t = w(e);
            y(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchstart", function (e) {
            var t = w(e);
            c(t.i, t.j, t.x, t.y), o();
          }, {
            passive: !0
          }), n.addEventListener("touchend", function (e) {
            var t = w(e);
            d(void 0, void 0), u(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchcancel", function (e) {
            var t = w(e);
            d(void 0, void 0), u(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchmove", function (e) {
            var t = w(e);
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
      }(ms || (ms = {}));
      var bs = [];

      function _s(e, t) {
        var n;

        switch (e) {
          case 0:
            n = ms.Keys.N_0;
            break;

          case 1:
            n = ms.Keys.N_1;
            break;

          case 2:
            n = ms.Keys.N_2;
            break;

          case 3:
            n = ms.Keys.N_3;
            break;

          case 4:
            n = ms.Keys.N_4;
            break;

          case 5:
            n = ms.Keys.N_5;
            break;

          case 6:
            n = ms.Keys.N_6;
            break;

          case 7:
            n = ms.Keys.N_7;
            break;

          case 8:
            n = ms.Keys.N_8;
            break;

          case 9:
            n = ms.Keys.N_9;
            break;

          default:
            return void console.error("Unexpected numericKey: " + e);
        }

        var r = function r(e) {
          e.key === n && (t(e), function () {
            var _iterator2 = _createForOfIteratorHelper(bs),
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

            bs = [];
          }());
        };

        bs.push(r), document.addEventListener("keydown", r);
      }

      var Es = function Es() {
        _classCallCheck(this, Es);
      };

      var ws, As, Ss, ks;
      Es.NONE = 0, Es.UP = Math.pow(2, 0), Es.DOWN = Math.pow(2, 1), Es.LEFT = Math.pow(2, 2), Es.RIGHT = Math.pow(2, 3), Es.ALL = Es.UP + Es.DOWN + Es.LEFT + Es.RIGHT, function (e) {
        e.IT = "it", e.EN = "en";
      }(ws || (ws = {})), function (e) {
        e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
      }(As || (As = {})), function (e) {
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
      }(Ss || (Ss = {})), function (e) {
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
          return (e & t) === t && t !== Es.NONE;
        }

        function i(e, t) {
          var n = Es.NONE;

          switch (t) {
            case 0:
              n = Es.UP;
              break;

            case 2:
              n = Es.DOWN;
              break;

            case 3:
              n = Es.LEFT;
              break;

            case 1:
              n = Es.RIGHT;
          }

          return r(e, n);
        }

        function o(e, t, n, r) {
          var i = Es.NONE;
          return n && void 0 !== e.blocks && t < e.blocks.length && (i |= e.blocks[t]), r && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (i |= e.dynamicBlocks[t]), i;
        }

        function a(e) {
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

        function s(e) {
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
        }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = r, e.isDirectionEnumBlocked = i, e.isMovementBlocked = function (r, o, s, l) {
          var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
          var u;
          u = t({
            i: o,
            j: s
          }, r.width);
          var d,
              f = e.getMapStaticBlock(r, u),
              p = t(n({
            i: o,
            j: s
          }, l), r.width);
          return d = c ? e.getMapStaticBlock(r, p) : e.getMapBlocks(r, p), i(f, l) || i(d, a(l));
        }, e.getBlock = function (e, t, n, r) {
          var i = 0;
          return i |= e ? Es.UP : 0, i |= t ? Es.DOWN : 0, i |= n ? Es.LEFT : 0, i |= r ? Es.RIGHT : 0, i;
        }, e.getMapBlocks = function (e, t) {
          return o(e, t, !0, !0);
        }, e.getMapStaticBlock = function (e, t) {
          return o(e, t, !0, !1);
        }, e.getMapDynamicBlock = function (e, t) {
          return o(e, t, !1, !0);
        }, e.isDirectionsOpposed = function (e, t) {
          return a(e) === t;
        }, e.getOpposedDirections = a, e.getNextAbsoluteDirection = function (e, t) {
          if (0 === t || 4 === e) return e;
          var n = [0, 1, 2, 3],
              r = 0;

          for (var _i2 = 0, _n3 = n; _i2 < _n3.length; _i2++) {
            var _t3 = _n3[_i2];
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
          return !Ss.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
        }, e.getDirectionName = s, e.getBlockName = function (e) {
          var t = "free";
          return r(e, Es.UP) && (t = s(0)), r(e, Es.DOWN) && (t += s(2)), r(e, Es.LEFT) && (t += s(3)), r(e, Es.RIGHT) && (t += s(1)), t;
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
      }(ks || (ks = {}));
      var Ts = {
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
          lang: ws.EN,
          skin: "ld3-webskin1.png",
          enableCLI: !0
        }
      };
      var Cs, xs, Is, Ms, Os, Ds;
      !function (e) {
        function t(e) {
          return {
            id: Ss.getRandomString(),
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
            lang: Ts.ui.lang,
            skin: Ts.ui.skin,
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
          return e.name = Ts.hero.name, e.i = Ts.maps.start.i, e.j = Ts.maps.start.j, e.states = [], e.states[0] = {
            direction: 2,
            condition: "always",
            trigger: 0
          }, e.states[0].charaset = Ts.hero.charaset, e;
        }

        function o() {
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
            timestamp: Ss.now(),
            currentMap: Ts.maps.start.map,
            hero: i(),
            maps: [],
            config: n()
          };
        }, e.getConfig = n, e.getEvent = r, e.getHero = i, e.getEventState = o, e.getString = function () {
          return "";
        }, e.getTree = function () {
          return {};
        }, e.getCharacter = function () {
          return {
            direction: 2
          };
        };
      }(Cs || (Cs = {})), function (e) {
        var t = "dialogContainer",
            n = "userInput";
        var r, i;

        function o() {
          var e = document.getElementById(t);
          null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
            e.style.display = "none";
          }, 200), ms.disableActionEvents()) : console.error("Element not foud: dialogContainer");
        }

        function a() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          ms.enableActionEvents();
          var n = document.getElementById(t);
          null !== n ? (n.classList.remove("visibleFadeIn"), n.classList.add("hiddenFadeOut"), setTimeout(function () {
            n.style.display = "none";
          }, 200), void 0 === i || e || i()) : console.error("Element not foud: dialogContainer");
        }

        function s(e) {
          void 0 !== e ? setTimeout(function () {
            a();
          }, e) : setTimeout(function () {
            ms.addActionCallback(function () {
              a();
            });
          }, 500);
        }

        function l(e, t, n) {
          zs.load(e, gs.STRING, function (t) {
            Ss.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
          }, t);
        }

        function c(e, t, n) {
          e !== Cs.DEFAULT_ID ? zs.load(e + "", gs.DIALOG, function (t) {
            if (Ss.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(Cs.getDialogNode(Cs.FIRST_ELEM_ID));else {
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

                  return u(_t4, r, i), _t4;
                }

                return console.error("Cannot reconstruct dialog tree from node: " + e), Cs.getDialogNode();
              }(Cs.FIRST_ELEM_ID, _e5.nodes, _e5.edges);

              n(_r2);
            }
          }) : n(Cs.getDialogNode(Cs.FIRST_ELEM_ID));
        }

        function u(e, t, n) {
          if (e.referenced = !0, !Ss.isEmpty(e.edgeIds)) {
            var _iterator6 = _createForOfIteratorHelper(e.edgeIds),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _r3 = _step6.value;

                if (n.has(_r3)) {
                  var _i3 = n.get(_r3);

                  if (void 0 === e.edges && (e.edges = []), e.edges.push(_i3), void 0 !== _i3.nodeId) if (t.has(_i3.nodeId)) {
                    var _e8 = t.get(_i3.nodeId);

                    _i3.node = _e8, _e8.referenced && (_i3.nodeReferenced = !0), u(_e8, t, n);
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

        function d(e, t, n, r) {
          if (t.has(e.id)) return;
          t.set(e.id, e);
          var i = e.edges;

          if (!Ss.isEmpty(i)) {
            r && delete e.edges;

            var _iterator7 = _createForOfIteratorHelper(i),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _e9 = _step7.value;
                if (n.has(_e9.id)) continue;
                n.set(_e9.id, _e9);
                var _i4 = _e9.node;
                void 0 !== _i4 && (r && delete _e9.node, d(_i4, t, n));
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }

        function f(e, t, a, l, c, u) {
          var d = document.getElementById("dialogFrame"),
              v = document.getElementById("dialogFace"),
              g = document.getElementById("dialogName"),
              m = document.getElementById("dialogArea");
          if (null === v) return void console.error("Element not foud: dialogFace");
          if (null === g || null === g.firstChild) return void console.error("Element not foud: dialogName");
          if (null === m) return void console.error("Element not foud: dialogArea");
          if (null === d) return void console.error("Element not foud: dialogFrame");
          o(), Ss.isEmpty(c) ? console.error("skin is not defined!") : d.style.borderImageSource = "url('/assets/skin/" + c + "')";
          var y = l.face;
          void 0 !== y ? (v.style.display = "block", v.style.backgroundImage = "url('/assets/faceset/" + y + "')") : v.style.display = "none", g.firstChild.textContent = a;

          var b = function (e) {
            var t;
            return void 0 !== e.genericMessage && (t = function (e) {
              var t = r.get(e);

              if (void 0 !== t && !Ss.isEmpty(t.values)) {
                var _e10, _n4;

                if (_e10 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                  return p(t.condition, e.conditionParams);
                }), 0 === _e10.length) return;
                return _n4 = 1 === _e10.length ? 0 : ks.getRandomInteger(0, _e10.length - 1), _e10[_n4].message;
              }
            }(e.genericMessage)), void 0 === t && (t = e.message), void 0 !== t && (t = t), t;
          }(l);

          m.innerText = void 0 !== b ? b : "";

          var _ = document.getElementById("dialogEdgeArea");

          if (null === _) return void console.error("Element not foud: dialogEdgeArea");

          for (; _.firstChild;) {
            _.removeChild(_.firstChild);
          }

          i = void 0;
          var E = [];

          if (void 0 !== l.edges) {
            var _iterator8 = _createForOfIteratorHelper(l.edges),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _e11 = _step8.value;
                p(_e11.condition) && E.push(_e11);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          var w = function w(r) {
            if (void 0 !== r.action) {
              var _i5,
                  _o3 = document.getElementById(n);

              if (null === _o3) return void console.warn("Input required");
              _i5 = _o3.value, _i5 = _i5.trim(), _i5 = ms.escapeText(_i5), h(r, e, t, _i5);
            } else void 0 !== r.node ? f(e, t, a, r.node, c, u) : s(0);
          };

          if (0 === E.length) s(l.closingTimeout);else if (1 === E.length && void 0 === E[0].message) {
            if (void 0 === E[0].inputType) i = function i() {
              w(E[0]);
            }, s(l.closingTimeout);else {
              var _e12 = document.createElement("input");

              switch (E[0].inputType) {
                case 1:
                  _e12.type = "number";
                  break;

                case 0:
                  _e12.type = "text";
                  break;

                default:
                  console.error("Unexpected DialogInputType for edge: " + E[0].id);
              }

              _e12.id = n, _.appendChild(_e12);
            }
          } else {
            var _e13 = 1;

            var _iterator9 = _createForOfIteratorHelper(E),
                _step9;

            try {
              var _loop = function _loop() {
                var t = _step9.value;
                var n = document.createElement("div");
                n.classList.add("l4wDialogEdge"), _.appendChild(n), void 0 !== t.message && (n.innerText = t.message);

                var r = function r(e) {
                  n.classList.add("l4wDialogEdgeSelected"), setTimeout(function () {
                    w(t);
                  }, 100);
                };

                n.onclick = r, _s(_e13, r), _e13++;
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

        function p(e, t) {
          return void 0 === e || (e in js ? js[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
        }

        function h(e, t, n, r) {
          var i = e.script;
          if (void 0 === i) return !1;
          var o = new i[i](event, n, t);
          if (Ss.isEmpty(o)) return console.error('Script "' + i + '" not found (dialog edge: ' + e.id + ")"), !1;
          var a = e.action;
          if (void 0 === a) return !1;
          if (!(a in o)) return console.error('Action "' + a + '" not found in script "' + i + '" (dialog edge: ' + e.id + ")"), !1;

          try {
            return o[a](r);
          } catch (e) {
            console.error(e);
          }

          return !1;
        }

        function v(e, t, n, r, i) {
          if (!r.has(e.id)) {
            if (!n && e.id === t) return e;
            r.set(e.id, e);
            var _o4 = e.edges;

            if (!Ss.isEmpty(_o4)) {
              var _iterator10 = _createForOfIteratorHelper(_o4),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _e14 = _step10.value;

                  if (!i.has(_e14.id)) {
                    if (n && _e14.id === t) return _e14;
                    i.set(_e14.id, _e14);
                    var _o5 = _e14.node;

                    if (void 0 !== _o5) {
                      var _e15 = v(_o5, t, n, r, i);

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

        e.openDialog = o, e.closeDialog = a, e.loadString = l, e.saveString = function (e, t, n) {
          var r = JSON.stringify(t);
          zs.save(e + "", r, gs.STRING, function (t, r) {
            if (void 0 !== t) {
              var _e16 = parseInt(t);

              if (isNaN(_e16)) return console.error("Error while saving string"), void n();
            }

            n(e);
          });
        }, e.loadDialog = c, e.saveDialog = function (e, t, n) {
          var r = new Map(),
              i = new Map();
          d(t, r, i, !0);
          var o = {
            nodes: Array.from(r.values()),
            edges: Array.from(i.values())
          };
          zs.save(e + "", JSON.stringify(o), gs.DIALOG, function (t, r) {
            r ? (Ss.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
          });
        }, e.deconstructDialogTree = d, e.loadGenericMessages = function (e, t, n) {
          isNaN(e) ? n(!1) : zs.load(e + "", gs.GENERIC_MESSAGE, function (t) {
            Ss.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), n(!1)) : (r = JSON.parse(t), n(!0));
          });
        }, e.showComplexDialog = function (e, t, n, r, i, o) {
          c(r, i.lang, function (a) {
            void 0 === a ? console.error("Error while loading dialog: " + r) : f(e, t, n, a, i.skin, o);
          });
        }, e.showSimpleDialog = function (e, t, n, r, i, o) {
          l(r, i.lang, function (r) {
            var a = Cs.getDialogNode();
            a.message = r, f(e, t, n, a, i.skin, o);
          });
        }, e.launchAction = h, e.search = function (e, t, n) {
          return v(e, t, void 0 !== n && n, new Map(), new Map());
        };
      }(xs || (xs = {})), function (e) {
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
      }(Is || (Is = {})), function (e) {
        function t(e, t) {
          switch (parseInt(t + "")) {
            case 0:
              e.frequencyVal = Is.VERY_LOW_FREQUENCY;
              break;

            case 1:
              e.frequencyVal = Is.LOW_FREQUENCY;
              break;

            case 2:
              e.frequencyVal = Is.MEDIUM_LOW_FREQUENCY;
              break;

            case 3:
              e.frequencyVal = Is.MEDIUM_FREQUENCY;
              break;

            case 4:
              e.frequencyVal = Is.MEDIUM_HIGH_FREQUENCY;
              break;

            case 5:
              e.frequencyVal = Is.HIGH_FREQUENCY;
              break;

            case 6:
              e.frequencyVal = Is.VERY_HIGH_FREQUENCY;
              break;

            default:
              e.frequencyVal = Is.MEDIUM_FREQUENCY;
          }
        }

        function n(e, t) {
          switch (parseInt(t + "")) {
            case 0:
              e.mSpeed = Is.VERY_LOW_MSPEED;
              break;

            case 1:
              e.mSpeed = Is.LOW_MSPEED;
              break;

            case 2:
              e.mSpeed = Is.MEDIUM_LOW_MSPEED;
              break;

            case 3:
              e.mSpeed = Is.MEDIUM_MSPEED;
              break;

            case 4:
              e.mSpeed = Is.MEDIUM_HIGH_MSPEED;
              break;

            case 5:
              e.mSpeed = Is.HIGH_MSPEED;
              break;

            case 6:
              e.mSpeed = Is.VERY_HIGH_MSPEED;
              break;

            default:
              e.mSpeed = Is.MEDIUM_MSPEED;
          }
        }

        e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
          return !(void 0 === e || t !== (0 !== ks.normalizeZIndex(e.onTop)) || !Ss.isEmpty(e.visible) && !e.visible || !Ss.isEmpty(e.opacity) && 0 === e.opacity || Ss.isEmpty(e.charaset));
        }, e.initTransientData = function (e, r) {
          return void 0 === r && (r = Cs.getCharacter()), n(r, r.speed), t(r, r.frequency), r;
        };
      }(Ms || (Ms = {})), function (e) {
        e.showError = function (e, t) {
          null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
        };
      }(Os || (Os = {})), function (e) {
        e.loadTileset = function (e, t, n) {
          zs.load(e + "", gs.TILESET, function (r) {
            if (Ss.isEmpty(r)) console.error("Error while loading tileset: " + e), n();else try {
              var _e17 = JSON.parse(r);

              n(_e17);
            } catch (r) {
              "SyntaxError" === r.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === r.name ? console.error("Error while reading tileset: " + e) : console.error(r), Os.showError(t), n();
            }
          });
        }, e.initTransientData = function (e) {
          void 0 !== e.imageData && (e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height);
        };
      }(Ds || (Ds = {}));

      var Ls = function Ls() {
        _classCallCheck(this, Ls);

        this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
      };

      function Ns() {}

      var Rs,
          $s,
          Fs,
          js,
          Ps = window.requestAnimationFrame || function (e) {
        return window.setTimeout(e, 40), Math.floor(100 * Math.random());
      },
          Bs = window.cancelAnimationFrame;

      !function (e) {
        function t(e) {
          return {
            id: e.id,
            memory: e.memory
          };
        }

        e.getSave = function (e, n) {
          if (Ss.isEmpty(e) || Ss.isEmpty(n)) return Cs.getSave();
          var r = new Array();

          if (!Ss.isEmpty(e.events)) {
            var _iterator11 = _createForOfIteratorHelper(e.events),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _n5 = _step11.value;
                r.push(t(_n5));
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          var i = Cs.getSave();
          return i.currentMap = e.id, i.hero = n, i.maps[e.id] = {
            events: r
          }, i;
        }, e.loadMapSave = function (e, t, n, r) {
          $s.loadMap(t, e.context.canvas, function (t) {
            var i = t;
            !function (e, t) {
              if (Ss.isEmpty(e) || Ss.isEmpty(t.events) || Ss.isEmpty(e.maps[t.id])) return;
              var n = e.maps[t.id].events;

              if (!Ss.isEmpty(n)) {
                var _iterator12 = _createForOfIteratorHelper(n),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _e18 = _step12.value;

                    var _iterator13 = _createForOfIteratorHelper(t.events),
                        _step13;

                    try {
                      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        var _n6 = _step13.value;
                        _e18.id === _n6.id && (_n6.memory = _e18.memory);
                      }
                    } catch (err) {
                      _iterator13.e(err);
                    } finally {
                      _iterator13.f();
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            }(e.save, i), e.changeMap(i, function () {
              if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, Fs.initTransientData(i, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !Ss.isEmpty(e.map.events)) for (var _t5 = 0; _t5 < e.map.events.length; _t5++) {
                var _n7 = Fs.initTransientData(e.map, e.grid, e.map.events[_t5]);

                void 0 !== _n7 && (e.map.events[_t5] = _n7);
              }
              r(!0);
            });
          });
        };
      }(Rs || (Rs = {}));

      var Us = /*#__PURE__*/function (_ref) {
        _inherits(Us, _ref);

        var _super = _createSuper(Us);

        function Us(e, t) {
          var _this;

          _classCallCheck(this, Us);

          _this = _super.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.launcher = t;
          return _this;
        }

        _createClass(Us, [{
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            if (!_get(_getPrototypeOf(Us.prototype), "mainGameLoop_pre", this).call(this)) return !1;
            var e = !1,
                t = this,
                n = Ss.now();

            if (!Ss.isEmpty(this.hero)) {
              var _r4 = Fs.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

              void 0 !== _r4 && this.launcher(this.hero, this, this.hero, _r4), e = Fs.manageMovements(this.map, this.grid, this.hero, function (e, n) {
                t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
              }, function (e, n) {
                t.focus.x += e, t.focus.y += n;
              });
            }

            if (!Ss.isEmpty(this.map.events)) {
              var _iterator14 = _createForOfIteratorHelper(this.map.events),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _t6 = _step14.value;

                  var _r5 = Fs.update(_t6, this, this.hero, this.action, n, this.pauseDuration);

                  void 0 !== _r5 && this.launcher(_t6, this, this.hero, _r5), e = e || Fs.manageMovements(this.map, this.grid, _t6, Ns, Ns);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              this.action = void 0;
            }

            return e && $s.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
          }
        }, {
          key: "mainGameLoop_post",
          value: function mainGameLoop_post() {
            _get(_getPrototypeOf(Us.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
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
            var e = Math.floor(Ss.now() / 1e3);
            if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
              this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

              var _e19 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

              this.FPS = Math.ceil(_e19) + 2;
            }
            this.renderingConfiguration.showFPS && (this.context.fillStyle = Is.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
          }
        }, {
          key: "renderDynamicElements",
          value: function renderDynamicElements(e, t, n, r, i, o, a) {
            try {
              Fs.isVisible(this.hero, e, t, n, r, i, o, a) && Fs.render(this.grid, this.hero, this.context, !0);
            } catch (e) {
              console.error(e);
            }

            if (!Ss.isEmpty(this.map.events)) {
              var _iterator15 = _createForOfIteratorHelper(this.map.events),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _s2 = _step15.value;

                  try {
                    Fs.isVisible(_s2, e, t, n, r, i, o, a) && Fs.render(this.grid, _s2, this.context, !0, this.pointer);
                  } catch (e) {
                    console.error(e);
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          }
        }, {
          key: "loadSave",
          value: function loadSave(e, t) {
            var n, r;

            if (void 0 === e) {
              if (!Ss.isEmpty(this.map)) return void t(!1);
              n = Ts.maps.start.map, r = Cs.getHero();
            } else this.save = e, n = e.currentMap, r = e.hero;

            var i = Fs.initTransientData(this.map, this.grid, r);
            void 0 === i ? console.error("Cannot initialize hero event") : this.hero = i, Rs.loadMapSave(this, n, r, t);
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
            return Fs.startMovement(this.hero, e, t, function (e) {
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
            void 0 === this.save && (this.save = Cs.getSave()), this.save.config.lang = e;
          }
        }, {
          key: "toggleNaturalScale",
          value: function toggleNaturalScale(e, t) {
            this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
          }
        }]);

        return Us;
      }( /*#__PURE__*/function () {
        function _class(e) {
          _classCallCheck(this, _class);

          this.renderingConfiguration = new Ls(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
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
                n = Ps(function () {
              t.mainGameLoop(n);
            });
          }
        }, {
          key: "mainGameLoop",
          value: function mainGameLoop(e) {
            var t = this,
                n = Ps(function () {
              t.mainGameLoop(n);
            });
            !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : Bs(e);
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
              var _e20 = this.grid.mapCellToCanvas(this.pointer);

              this.context.save(), this.context.beginPath(), this.context.fillStyle = Is.Color.YELLOW, this.context.scale(2, 1), this.context.arc(Math.floor((_e20.x + this.grid.cellW / 2) / 2), _e20.y + this.grid.cellH - 4, 8, 0, Is.DOUBLE_PI), this.context.closePath(), this.context.globalAlpha = .4, this.context.fill(), this.context.restore();
            }
          }
        }, {
          key: "renderFocus",
          value: function renderFocus() {
            null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = Is.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, Is.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
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
            this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = Ss.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = Ss.now() - this.pauseStartTime, this.pauseStartTime = void 0);
          }
        }, {
          key: "changeMap",
          value: function changeMap(e, t) {
            this.togglePause(!0), Ss.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), this.map = e, this.changeTile(e.tileset.image, function (e) {
              setTimeout(function () {
                $s.initTransientData(e), e.togglePause(!1);
              }), t(e);
            });
          }
        }, {
          key: "changeTile",
          value: function changeTile(e, t) {
            var n = this;
            Ds.loadTileset(e, this.context, function (r) {
              if (void 0 === r) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
              n.map.tileset = r, zs.load(r.image, gs.TILE, function (e) {
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
                o = this.redrawArea.x,
                a = this.redrawArea.x + this.redrawArea.w;

            if (!Ss.isEmpty(e) && void 0 !== e.tileset.imageData) {
              for (var _s3 = r; _s3 <= i; _s3++) {
                for (var _r6 = o; _r6 <= a; _r6++) {
                  var _i6 = ks.cellToGid({
                    i: _r6,
                    j: _s3
                  }, e.width);

                  for (var _o6 = Is.MapLayer.LOW; _o6 <= Is.MapLayer.TOP; _o6++) {
                    var _a3 = this.map.layers[_o6];
                    if (void 0 === _a3 || void 0 === _a3.data || _a3.data.length < _i6) continue;
                    var _l = _a3.data[_i6];
                    if (Ss.isEmpty(_l)) continue;
                    var _c = 0;
                    void 0 !== e.tileset.onTop && (_c = ks.normalizeZIndex(e.tileset.onTop[_l])), 0 !== _c && n || (this.applyLayerCustomizations(_o6), Ss.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderCell(t, e.tileset, _l, _r6, _s3), t.globalAlpha = 1, this.removeLayerCustomizations(_o6));
                  }

                  $s.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _r6, _s3, !1);
                }
              }

              this.renderPointer();

              for (var _s4 = r; _s4 <= i; _s4++) {
                for (var _i7 = o; _i7 <= a && n; _i7++) {
                  for (var _n8 = r; _n8 <= _s4; _n8++) {
                    var _r7 = ks.cellToGid({
                      i: _i7,
                      j: _n8
                    }, e.width);

                    for (var _o7 = Is.MapLayer.LOW; _o7 <= Is.MapLayer.TOP; _o7++) {
                      var _a4 = this.map.layers[_o7];
                      if (void 0 === _a4 || void 0 === _a4.data || _a4.data.length < _r7) continue;
                      var _l2 = _a4.data[_r7];
                      if (Ss.isEmpty(_l2)) continue;
                      var _c2 = 0;
                      void 0 !== e.tileset.onTop && (_c2 = ks.normalizeZIndex(e.tileset.onTop[_l2])), _c2 > 0 && _n8 + _c2 === _s4 && (this.applyLayerCustomizations(_o7), Ss.isEmpty(_a4.opacity) || (t.globalAlpha = _a4.opacity), this.renderCell(t, e.tileset, _l2, _i7, _n8), t.globalAlpha = 1, this.removeLayerCustomizations(_o7));
                    }
                  }
                }

                for (var _e21 = o; _e21 <= a; _e21++) {
                  this.renderDynamicElements(r, i, o, a, _e21, _s4, !1);
                }
              }

              for (var _e22 = r; _e22 <= i; _e22++) {
                for (var _t7 = o; _t7 <= a; _t7++) {
                  this.renderDynamicElements(r, i, o, a, _t7, _e22, !0), $s.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t7, _e22, !0);
                }
              }
            }

            $s.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
          }
        }, {
          key: "renderCell",
          value: function renderCell(e, t, n, r, i) {
            var o = ks.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
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

          for (var _e23 = 0; _e23 < t.height * t.width; _e23++) {
            t.dynamicBlocks[_e23] = 0;
          }

          var n = new Array();
          void 0 !== e && n.push(e), void 0 !== t.events && (n = n.concat(t.events));

          var _iterator16 = _createForOfIteratorHelper(n),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _e24 = _step16.value;

              var _n9 = Fs.getState(_e24);

              if (void 0 === _n9 || Ss.isEmpty(_n9.block) || _n9.block) {
                var _n10 = ks.cellToGid(_e24, t.width);

                t.dynamicBlocks[_n10] = Es.ALL;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }

        function n(e, t, n, r, i) {
          var o = ks.getDirectionTarget({
            i: t,
            j: n
          }, r),
              a = !1;
          return void 0 !== i && 4 === ks.getDirection(o, i) && (a = !0), ks.isMovementBlocked(e, t, n, r, a);
        }

        e.loadMap = function (e, t, n) {
          zs.load(e + "", gs.MAP, function (r) {
            if (Ss.isEmpty(r)) console.error("Error while loading map: " + e), n();else try {
              var _e25 = JSON.parse(r);

              if (!Ss.isEmpty(_e25.events)) {
                _e25.maxEventId = 0;

                var _iterator17 = _createForOfIteratorHelper(_e25.events),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var _t8 = _step17.value;
                    _t8.id > _e25.maxEventId && (_e25.maxEventId = _t8.id);
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              }

              n(_e25);
            } catch (i) {
              "SyntaxError" === i.name ? console.error("Error while parsing map: " + e) : "TypeError" === i.name ? console.error("Error while reading map: " + e) : console.error(i), console.error(r), Os.showError(t.getContext("2d")), n();
            }
          });
        }, e.renderUI = function (e, t, n, r, i, o, a) {
          if ((a || r.showGrid || r.showEditorGrid || r.showFocus || r.showBlocks || r.showOnTops) && (!a || r.showFPS || r.showCellNumbers || r.showFocus) && !Ss.isEmpty(r)) {
            if (!a && r.showBlocks && !Ss.isEmpty(e) && (!Ss.isEmpty(e.blocks) || !Ss.isEmpty(e.dynamicBlocks))) {
              n.save(), n.globalAlpha = .5, n.fillStyle = Is.Color.YELLOW, n.strokeStyle = Is.Color.BLACK, n.lineWidth = 2;

              var _r8 = Ss.isEmpty(e.blocks) ? Es.NONE : e.blocks[o * e.width + i],
                  _a5 = Ss.isEmpty(e.dynamicBlocks) ? Es.NONE : e.dynamicBlocks[o * e.width + i];

              (_r8 > Es.NONE || _a5 > Es.NONE) && (_a5 > Es.NONE && (n.fillStyle = Is.Color.GREEN), ks.isBlockDirectionBlocked(_r8 | _a5, Es.UP) && (n.beginPath(), n.moveTo(i * t.cellW, o * t.cellH), n.lineTo((i + .5) * t.cellW, (o + .2) * t.cellH), n.lineTo((i + 1) * t.cellW, o * t.cellH), n.fill(), n.stroke()), ks.isBlockDirectionBlocked(_r8 | _a5, Es.DOWN) && (n.beginPath(), n.moveTo(i * t.cellW, (o + 1) * t.cellH), n.lineTo((i + .5) * t.cellW, (o + .8) * t.cellH), n.lineTo((i + 1) * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke()), ks.isBlockDirectionBlocked(_r8 | _a5, Es.LEFT) && (n.beginPath(), n.moveTo(i * t.cellW, o * t.cellH), n.lineTo((i + .2) * t.cellW, (o + .5) * t.cellH), n.lineTo(i * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke()), ks.isBlockDirectionBlocked(_r8 | _a5, Es.RIGHT) && (n.beginPath(), n.moveTo((i + 1) * t.cellW, o * t.cellH), n.lineTo((i + .8) * t.cellW, (o + .5) * t.cellH), n.lineTo((i + 1) * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
            }

            if (!a && r.showOnTops && !Ss.isEmpty(e) && !Ss.isEmpty(e.tileset.onTop)) {
              var _r9 = ks.cellToGid({
                i: i,
                j: o
              }, e.width);

              ks.normalizeZIndex(e.tileset.onTop[_r9]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = Is.Color.AQUA, n.arc(Math.floor((i + .5) * t.cellW), Math.floor((o + .5) * t.cellH), 10, 0, Is.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = Is.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_r9], (i + .35) * t.cellW, (o + .65) * t.cellH), n.restore());
            }

            !a && r.showGrid && (n.strokeStyle = Is.Color.RED, n.strokeRect(i * t.cellW, o * t.cellH, t.cellW, t.cellH)), !a && r.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = Is.Color.GREY, n.strokeRect(i * t.cellW, o * t.cellH, t.cellW, t.cellH), n.restore()), !a && r.showCellNumbers && (n.fillStyle = Is.Color.RED, n.font = "bold 10px Arial", n.fillText(i + "," + o, i * t.cellW + 1, o * t.cellH + 10));
          }
        }, e.renderGlobalUI = function (e, t, n) {
          if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
            var _r10, _i8;

            t.save();
            var _o8 = e.cellW,
                _a6 = e.cellH;

            if (void 0 !== n.selectCellStart) {
              if (_r10 = n.selectCellStart.i * e.cellW, _i8 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
                var _t9 = n.selectCellEnd.i * e.cellW,
                    _s5 = n.selectCellEnd.j * e.cellH;

                _r10 > _t9 ? (_o8 = _r10 - _t9, _r10 = _t9) : _o8 = _t9 - _r10, _i8 > _s5 ? (_a6 = _i8 - _s5, _i8 = _s5) : _a6 = _s5 - _i8, _o8 += e.cellW, _a6 += e.cellH;
              }

              t.strokeStyle = Is.Color.RED, t.lineWidth = 3;
            } else _r10 = n.selectEventCell.i * e.cellW, _i8 = n.selectEventCell.j * e.cellH, t.strokeStyle = Is.Color.LIME, t.lineWidth = 2;

            t.strokeRect(_r10, _i8, _o8, _a6), t.restore();
          }
        }, e.resizeMap = function (e, t, n) {
          var r = e.width,
              i = n,
              o = e.height,
              a = t;
          if (r === i && o === a || Ss.isEmpty(e)) return;
          var s,
              l,
              c = Math.min(r, i);
          if (i < r) s = r - i;else {
            l = [];

            for (var _e26 = 0; _e26 < i - r; _e26++) {
              l[_e26] = void 0;
            }
          }

          for (var _t10 = 0; _t10 < e.layers.length; _t10++) {
            var _n11 = e.layers[_t10];

            if (void 0 !== _n11.data) {
              if (r !== i) for (var _e27 = 0; _e27 < o; _e27++) {
                void 0 !== s ? _n11.data.splice(c + _e27 * i, s) : void 0 !== l ? _n11.data.splice(c + _e27 * i, 0, l) : console.error("Unexpected case");
              }

              if (o > a && (_n11.data.length = i * a), o < a) {
                var _e28 = [];

                for (var _t11 = 0; _t11 < i - r; _t11++) {
                  _e28[_t11] = void 0;
                }

                for (var _t12 = r; _t12 < i; _t12++) {
                  _n11.data.concat(_e28);
                }
              }
            }
          }

          e.height = t, e.width = n;
        }, e.initTransientData = function (e) {
          var n,
              r = e.map,
              i = e.grid;
          if (e instanceof Us && (n = e.hero), Ds.initTransientData(r.tileset), function (e) {
            if (e.blocks = [], !Ss.isEmpty(e.layers) && !Ss.isEmpty(e.tileset.blocks)) {
              for (var _t13 = 0; _t13 < e.height * e.width; _t13++) {
                e.blocks[_t13] = 0;
              }

              for (var _t14 = 0; _t14 < e.layers.length; _t14++) {
                var _n12 = e.layers[_t14];
                if (void 0 !== _n12.data) for (var _t15 = 0; _t15 < _n12.data.length; _t15++) {
                  var _r11 = _n12.data[_t15];
                  if (Ss.isEmpty(_r11) || _r11 < 0 || _r11 >= e.tileset.blocks.length) continue;
                  if (void 0 !== e.tileset.onTop && ks.normalizeZIndex(e.tileset.onTop[_r11]) > 0) continue;
                  var _i9 = e.tileset.blocks[_r11];
                  Ss.isEmpty(_i9) && (_i9 = Es.NONE), e.blocks[_t15] = _i9;
                }
              }
            }
          }(r), t(n, r), Ss.isEmpty(r.events)) r.events = [];else {
            var _iterator18 = _createForOfIteratorHelper(r.events),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _e29 = _step18.value;
                Fs.initTransientData(r, i, _e29);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
          r.width = parseInt(r.width + ""), r.height = parseInt(r.height + "");
        }, e.updateDynamicData = function (e, n) {
          t(e, n);
        }, e.isMovementTowardsTargetBlocked = n, e.pathFinder = function (e, t, r) {
          var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : As.D_STAR_LITE;
          var o = Ss.now(),
              a = r.i - t.i,
              s = r.j - t.j;
          if (0 === a && 0 === s) return 4;
          {
            var _M = 4;

            switch (i) {
              case As.BASIC:
                Math.abs(a) > Math.abs(s) ? (_M = a > 0 ? 1 : 3, n(e, t.i, t.j, _M, r) && (_M = s > 0 ? 2 : 0)) : (_M = s > 0 ? 2 : 0, n(e, t.i, t.j, _M, r) && (_M = a > 0 ? 1 : 3)), n(e, t.i, t.j, _M, r) && (_M = 4);
                break;

              case As.D_STAR_LITE:
                {
                  var v = function v(e) {
                    return [Math.min(b(e), _(e)) + S(f, e) + _i10, Math.min(b(e), _(e))];
                  };

                  var g = function g(e) {
                    b(e) !== _(e) ? (e.key = v(e), C(e)) : function (e) {
                      var _iterator19 = _createForOfIteratorHelper(c),
                          _step19;

                      try {
                        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                          var _t16 = _step19.value;
                          if (T(e, _t16)) return !0;
                        }
                      } catch (err) {
                        _iterator19.e(err);
                      } finally {
                        _iterator19.f();
                      }

                      return !1;
                    }(e) && x(e);
                  };

                  var m = function m(e, t) {
                    t > _n13 && (t = _n13);
                    var r = ks.cellToGid(e.cell, h);
                    u[r] = t;
                  };

                  var y = function y(e, t) {
                    t > _n13 && (t = _n13);
                    var r = ks.cellToGid(e.cell, h);
                    d[r] = t;
                  };

                  var b = function b(e) {
                    var t = ks.cellToGid(e.cell, h);
                    return u[t];
                  };

                  var _ = function _(e) {
                    var t = ks.cellToGid(e.cell, h);
                    return d[t];
                  };

                  var E = function E(t) {
                    var n = ks.cellToGid(t.cell, e.width),
                        r = [];
                    return 0 !== t.cell.i && r.push(l[n - 1]), t.cell.i < e.width - 1 && r.push(l[n + 1]), n - e.width >= 0 && r.push(l[n - e.width]), n + e.width < l.length && r.push(l[n + e.width]), r;
                  };

                  var w = function w(t) {
                    var n = ks.cellToGid(t.cell, e.width),
                        r = [];
                    return 0 !== t.cell.i && r.push(l[n - 1]), t.cell.i < e.width - 1 && r.push(l[n + 1]), n - e.width >= 0 && r.push(l[n - e.width]), n + e.width < l.length && r.push(l[n + e.width]), r;
                  };

                  var A = function A(t, r) {
                    var i = ks.getDirection(r.cell, t.cell),
                        o = 4 === ks.getDirection(r.cell, p.cell);
                    return ks.isMovementBlocked(e, t.cell.i, t.cell.j, i, o) ? _n13 : 1;
                  };

                  var S = function S(e, t) {
                    return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
                  };

                  var k = function k(e, t) {
                    return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
                  };

                  var T = function T(e, t) {
                    return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
                  };

                  var C = function C(e) {
                    var _iterator20 = _createForOfIteratorHelper(c),
                        _step20;

                    try {
                      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                        var _t17 = _step20.value;
                        if (T(e, _t17)) return void (_t17.key = e.key);
                      }
                    } catch (err) {
                      _iterator20.e(err);
                    } finally {
                      _iterator20.f();
                    }

                    c.push(e);
                  };

                  var x = function x(e) {
                    var t = [];

                    var _iterator21 = _createForOfIteratorHelper(c),
                        _step21;

                    try {
                      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                        var _n14 = _step21.value;
                        T(e, _n14) || t.push(_n14);
                      }
                    } catch (err) {
                      _iterator21.e(err);
                    } finally {
                      _iterator21.f();
                    }

                    c = t;
                  };

                  var I = function I() {
                    var e;

                    var _iterator22 = _createForOfIteratorHelper(c),
                        _step22;

                    try {
                      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                        var _t18 = _step22.value;
                        (void 0 === e || k(_t18.key, e.key) < 0) && (e = _t18);
                      }
                    } catch (err) {
                      _iterator22.e(err);
                    } finally {
                      _iterator22.f();
                    }

                    return void 0 === e && (e = {
                      cell: {
                        i: -1,
                        j: -1
                      },
                      key: [_n13, _n13]
                    }), e;
                  };

                  var l, c, u, d;
                  var _n13 = Number.MAX_SAFE_INTEGER;
                  var f, p;
                  var _i10 = 0;
                  var h = e.width;
                  f = {
                    cell: t
                  }, p = {
                    cell: r
                  }, _M = function () {
                    for (function () {
                      l = [];

                      for (var _t19 = 0; _t19 < e.height; _t19++) {
                        for (var _n16 = 0; _n16 < e.width; _n16++) {
                          var _e31 = {
                            cell: {
                              i: _n16,
                              j: _t19
                            }
                          };
                          l.push(_e31);
                        }
                      }

                      u = [], d = [], c = [], _i10 = 0;

                      var _iterator23 = _createForOfIteratorHelper(l),
                          _step23;

                      try {
                        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                          var _e32 = _step23.value;
                          m(_e32, _n13), y(_e32, _n13);
                        }
                      } catch (err) {
                        _iterator23.e(err);
                      } finally {
                        _iterator23.f();
                      }

                      y(p, 0);
                      var t = p;
                      t.key = [S(f, p), 0], c.push(t);
                    }(), function () {
                      for (; k(I().key, v(f)) < 0 || _(f) > b(f);) {
                        var _e33 = I(),
                            _t20 = _e33,
                            _r12 = _e33.key,
                            _i11 = v(_t20);

                        if (k(_r12, _i11) < 0) _t20.key = _i11, C(_t20);else if (b(_t20) > _(_t20)) {
                          m(_t20, _(_t20)), x(_t20);

                          var _iterator24 = _createForOfIteratorHelper(w(_t20)),
                              _step24;

                          try {
                            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                              var _e34 = _step24.value;
                              T(_e34, p) || y(_e34, Math.min(_(_e34), A(_e34, _t20) + b(_t20))), g(_e34);
                            }
                          } catch (err) {
                            _iterator24.e(err);
                          } finally {
                            _iterator24.f();
                          }
                        } else {
                          var _e35 = b(_t20);

                          m(_t20, _n13);

                          var _r13 = w(_t20);

                          _r13.push(_t20);

                          var _iterator25 = _createForOfIteratorHelper(_r13),
                              _step25;

                          try {
                            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                              var _i12 = _step25.value;

                              if ((_(_i12) === A(_i12, _t20) + _e35 || _(_i12) === _n13 && (A(_i12, _t20) === _n13 || _e35 === _n13)) && !T(_i12, p)) {
                                var _e36 = void 0;

                                var _iterator26 = _createForOfIteratorHelper(E(_i12)),
                                    _step26;

                                try {
                                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                                    var _t21 = _step26.value;

                                    var _r14 = A(_i12, _t21) + b(_t21);

                                    _r14 > _n13 && (_r14 = _n13), (void 0 === _e36 || _e36 > _r14) && (_e36 = _r14);
                                  }
                                } catch (err) {
                                  _iterator26.e(err);
                                } finally {
                                  _iterator26.f();
                                }

                                y(_i12, _e36);
                              }

                              g(_i12);
                            }
                          } catch (err) {
                            _iterator25.e(err);
                          } finally {
                            _iterator25.f();
                          }
                        }
                      }
                    }(); !T(f, p);) {
                      var _e30 = void 0,
                          _n15 = void 0;

                      var _iterator27 = _createForOfIteratorHelper(E(f)),
                          _step27;

                      try {
                        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                          var _t22 = _step27.value;

                          var _r15 = A(f, _t22) + b(_t22);

                          (void 0 === _n15 || _n15 > _r15) && (_n15 = _r15, _e30 = _t22);
                        }
                      } catch (err) {
                        _iterator27.e(err);
                      } finally {
                        _iterator27.f();
                      }

                      return f = _e30, ks.getDirection(f.cell, t);
                    }

                    return 4;
                  }();
                }
            }

            4 !== _M && (Fs.addDirectionToPath(t, _M, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && ks.isDirectionsOpposed(t.path[0], t.path[1]) && (_M = 4));

            var _O = Ss.now() - o;

            return _O > 10 && console.debug("Path found in: " + _O), _M;
          }
        };
      }($s || ($s = {})), function (e) {
        function t(e, t) {
          var n = e.states[t].condition;
          return n in js ? js[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
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
          var t = o(e);

          if (void 0 !== t) {
            var _e37 = t.mSpeed;
            if (!Ss.isEmpty(_e37)) return _e37;
          }

          return Is.MEDIUM_MSPEED;
        }

        function o(e) {
          if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
        }

        function a(e, t) {
          var n = t.states[t.currentState].direction;
          void 0 === n && (n = 4);
          var r = ks.getNextAbsoluteDirection(n, 0),
              i = $s.isMovementTowardsTargetBlocked(e, t.i, t.j, r) ? 0 : 3,
              o = $s.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
              a = $s.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
              s = i + o + a + ($s.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
              l = 4;

          if (s > 0) {
            var _e38 = ks.getRandomInteger(1, s);

            _e38 -= i, _e38 <= 0 ? l = r : (_e38 -= o, _e38 <= 0 || (_e38 -= a), l = 4);
          }

          return ks.getDirectionTarget(t, l);
        }

        e.update = function (e, r, i, o, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

          if (Ss.isEmpty(e.movementStartTime) || (e.movementStartTime += l), !Ss.isEmpty(e.states)) {
            var _s6 = -1;

            for (var _n17 = e.states.length - 1; _n17 >= 0; _n17--) {
              if (t(e, _n17)) {
                _s6 = _n17;
                break;
              }
            }

            if (e.currentState = _s6, e === i) return;
            if (-1 !== e.currentState && void 0 !== e.states[e.currentState].movement && void 0 === e.movementStartTime && function (e, t) {
              var r,
                  _i14,
                  o = t.states[t.currentState].movement;

              switch (o.strategy) {
                case "target":
                  void 0 === o.target && (console.warn("event: " + t.id + " has strategy=target, but target is undefined. Will fallback to random"), o.target = a(e, t)), r = o.target;
                  break;

                case "event":
                  var _s7;

                  var _iterator28 = _createForOfIteratorHelper(e.events),
                      _step28;

                  try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                      var _t23 = _step28.value;
                      _t23.id === o.eventId && (_s7 = _t23);
                    }
                  } catch (err) {
                    _iterator28.e(err);
                  } finally {
                    _iterator28.f();
                  }

                  if (void 0 === _s7) return void console.error("Cannot find event: " + o.eventId);

                  var _l3 = $s.pathFinder(e, t, _s7, o.pathfinder);

                  r = ks.getDirectionTarget(t, _l3), _i14 = function i(r) {
                    var a = $s.pathFinder(e, t, _s7, o.pathfinder);

                    if (4 !== a) {
                      var _e39 = ks.getDirectionTarget(t, a);

                      n(t, _e39.i, _e39.j, _i14);
                    } else setTimeout(function () {
                      _i14(r);
                    }, 1e3);
                  };
                  break;

                case "random":
                  r = a(e, t), _i14 = function _i13() {
                    setTimeout(function () {
                      var r = a(e, t);
                      n(t, r.i, r.j, _i14);
                    }, o.pause);
                  };
                  break;

                default:
                  return void console.error("Unexpected movement strategy: " + o.strategy + " for event: " + t.id);
              }

              void 0 !== r && n(t, r.i, r.j, _i14);
            }(r.getMap(), e), function (e, t, n, r) {
              switch (e.states[t].trigger) {
                case 0:
                  if (void 0 === r || r.i !== e.i || r.j !== e.j) return !1;

                case 1:
                  var _i15 = Math.abs(e.i - n.i),
                      _o9 = Math.abs(e.j - n.j);

                  return 0 === _i15 && _o9 <= 1 || _i15 <= 1 && 0 === _o9;

                case 2:
                  return e.i === n.i && e.j === n.j;

                case 3:
                  return !0;

                default:
                  return console.error("Unexpected case: " + e.states[t].trigger), !1;
              }
            }(e, e.currentState, i, o)) return e.currentState;
          }
        }, e.startMovement = n, e.stopMovement = r, e.manageMovements = function e(t, n, o, a, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var c = !1;

          if (!Ss.isEmpty(o.movementStartTime)) {
            if (0 === l && (l = Ss.now() - o.movementStartTime), void 0 === o.target) return console.error("No target set for movement"), !0;

            var _e40,
                _u = o.target,
                _d = function (e, t, n) {
              var r = 4,
                  i = ks.cellToGid(n, e.width),
                  o = ks.getMapStaticBlock(e, i),
                  a = ks.getMapDynamicBlock(e, i);
              if (ks.isBlockDirectionBlocked(o, Es.ALL) && !ks.isBlockDirectionBlocked(a, Es.ALL) || i < 0 || i >= e.width * e.height) r = 4;else if (Ss.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
                try {
                  r = $s.pathFinder(e, t, n);
                } catch (t) {
                  console.error(t);
                }

                var _o10 = ks.getDirectionTarget(t, r),
                    _a7 = ks.cellToGid(_o10, e.width),
                    _s8 = ks.getMapDynamicBlock(e, _a7);

                ks.isDirectionEnumBlocked(_s8, ks.getOpposedDirections(r)) && (r = 4, _a7 === i && void 0 !== t.onTargetReached && t.onTargetReached(n));
              } else r = t.movementDirection;
              return r;
            }(t, o, _u),
                _f = 0,
                _p = 0;

            switch (_d) {
              case 3:
                _f = Math.min(n.cellW, Math.floor(i(o) * l)), _e40 = _f, _f *= -1;
                break;

              case 1:
                _f = Math.min(n.cellW, Math.floor(i(o) * l)), _e40 = _f;
                break;

              case 0:
                _p = Math.min(n.cellH, Math.floor(i(o) * l)), _e40 = _p, _p *= -1;
                break;

              case 2:
                _p = Math.min(n.cellH, Math.floor(i(o) * l)), _e40 = _p;
                break;

              case 4:
                r(o), void 0 !== o.onTargetReached && o.onTargetReached(_u);
            }

            if (4 !== _d && (void 0 !== o.states[o.currentState] && (o.states[o.currentState].direction = _d), o.movementDirection = _d, o.position = {
              x: o.i * n.cellW + _f,
              y: o.j * n.cellH + _p
            }, a(_f, _p), _e40 === n.cellW)) {
              c = !0, o.movementDirection = void 0, o.movementStartTime = Ss.now(), l -= Math.floor(_e40 / i(o));

              var _t24 = n.mapCanvasToCell(o.position);

              o.i = _t24.i, o.j = _t24.j, s(_f, _p);

              var _a8 = n.mapCellToCanvas(o.target);

              (!Ss.isEmpty(o.newTarget) || o.position.x === _a8.x && o.position.y === _a8.y) && r(o);
            }
          }

          return !Ss.isEmpty(o.newTarget) && Ss.isEmpty(o.movementStartTime) && (o.target = o.newTarget, o.onTargetReached = o.newOnTargetReached, o.newTarget = void 0, o.newOnTargetReached = void 0, o.movementStartTime = Ss.now(), c = c || e(t, n, o, a, s, l)), c;
        }, e.addDirectionToPath = function (e, t, n) {
          void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !Ss.isEmpty(n) && e.path.length > n && e.path.shift();
        }, e.render = function (e, t, n, r, i) {
          var a,
              s = o(t);
          if (void 0 !== s) if (Ss.isEmpty(s.charaset) ? Ss.isEmpty(s.gid) : a = zs.loadImageFromCache(s.charaset, gs.CHAR), void 0 !== t.position) {
            if (r || (n.save(), n.strokeStyle = Is.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
              var _o11 = Math.floor(a.width / 4),
                  _l4 = Math.floor(a.height / 4),
                  _c3 = _o11,
                  _u2 = _l4;

              r || (_l4 > _o11 ? (_c3 = Math.floor(_o11 * e.cellH / _l4), _u2 = e.cellH) : (_u2 = Math.floor(_l4 * e.cellW / _o11), _c3 = e.cellW));

              var _d2,
                  _f2 = 0;

              if (_d2 = Ss.isEmpty(s.frequencyVal) ? Is.MEDIUM_FREQUENCY : s.frequencyVal, Ss.isEmpty(t.target)) {
                if (1 === s.rotation || 2 === s.rotation) {
                  Ss.isEmpty(s.animationStartTime) && (s.animationStartTime = Ss.now());

                  var _e41 = Ss.now() - s.animationStartTime;

                  _d2 /= 4;

                  var _t25 = Math.floor(_e41 * _d2 % 4);

                  2 === s.rotation && (3 === _t25 ? _t25 = 1 : 1 === _t25 && (_t25 = 3)), s.direction = _t25;
                } else s.animationStartTime = void 0;
              } else {
                Ss.isEmpty(s.animationStartTime) && (s.animationStartTime = Ss.now());

                var _e42 = Ss.now() - s.animationStartTime;

                switch (Math.floor(_e42 * _d2 % 4)) {
                  case 1:
                    _f2 = _o11;
                    break;

                  case 2:
                    _f2 = 2 * _o11;
                    break;

                  case 3:
                    _f2 = 3 * _o11;
                }
              }
              var _p2 = 0;

              switch (s.direction) {
                case 3:
                  _p2 = _l4;
                  break;

                case 1:
                  _p2 = 2 * _l4;
                  break;

                case 0:
                  _p2 = 3 * _l4;
              }

              var _h = t.position.x + Math.floor((e.cellW - _c3) / 2),
                  _v = t.position.y + Math.floor(-_u2 + e.cellH);

              n.save(), Ss.isEmpty(s.opacity) || 100 === s.opacity || (n.globalAlpha = s.opacity / 100), void 0 !== i && i.i === t.i && i.j === t.j && (n.shadowColor = Is.Color.YELLOW, n.shadowBlur = 8), n.drawImage(a, _f2, _p2, _o11, _l4, _h, _v, _c3, _u2), n.restore();
            }
          } else console.error("Event position undefined: " + t);
        }, e.isVisible = function (e, t, n, r, i, a, s, l) {
          return e.i === a && e.j === s && !!Ms.isVisible(o(e), l) && e.i >= r && e.i <= i && e.j >= t && e.j <= n;
        }, e.saveMem = function (e, t, n) {
          Ss.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
        }, e.loadMem = function (e, t) {
          if (!Ss.isEmpty(e.memory)) return e.memory[t];
        }, e.deleteMem = function (e, t) {
          Ss.isEmpty(e.memory) || delete e.memory[t];
        }, e.initTransientData = function (t, n, i) {
          if (Ms.initTransientData(n, e.getState(i)), void 0 !== i) return r(i), i.position = {
            x: i.i * n.cellW,
            y: i.j * n.cellH
          }, i;
        }, e.getState = o;
      }(Fs || (Fs = {}));

      var Ws = /*#__PURE__*/function () {
        function Ws(e, t, n) {
          _classCallCheck(this, Ws);

          this.event = e, this.hero = t, this.scene = n;
        }

        _createClass(Ws, [{
          key: "getConfig",
          value: function getConfig() {
            return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : Cs.getConfig();
          }
        }, {
          key: "showSimpleDialog",
          value: function showSimpleDialog(e, t) {
            var n = this.getConfig();
            return xs.showSimpleDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
          }
        }, {
          key: "showComplexDialog",
          value: function showComplexDialog(e, t) {
            var n = this.getConfig();
            return xs.showComplexDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
          }
        }, {
          key: "moveToTarget",
          value: function moveToTarget(e, t) {
            return Fs.startMovement(this.event, e.i, e.j, t), !0;
          }
        }, {
          key: "stepToTarget",
          value: function stepToTarget(e, t) {
            var n = ks.getDirection(e, this.event);
            return this.stepToDirection(n, t);
          }
        }, {
          key: "stepToDirection",
          value: function stepToDirection(e, t) {
            var n = ks.moveToDirection(this.event, e);
            return this.moveToTarget(n, t);
          }
        }, {
          key: "stepFromTarget",
          value: function stepFromTarget(e, t) {
            var n = ks.getDirection(e, this.event);
            return n = ks.getOpposedDirections(n), this.stepToDirection(n, t);
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
            Fs.saveMem(this.event, e, t);
          }
        }, {
          key: "loadMem",
          value: function loadMem(e) {
            return Fs.loadMem(this.event, e);
          }
        }, {
          key: "incrementStateVar",
          value: function incrementStateVar() {
            var e = this.loadMem(Ws.STATE_VAR),
                t = 0;
            return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(Ws.STATE_VAR, t + ""), t;
          }
        }, {
          key: "setStateVar",
          value: function setStateVar(e) {
            this.saveMem(Ws.STATE_VAR, e + "");
          }
        }, {
          key: "goToMap",
          value: function goToMap(e, t) {
            var n = this.scene;
            Rs.loadMapSave(n, e, t, function () {
              n.moveFocusToTarget(t), Fs.stopMovement(n.hero);
            });
          }
        }, {
          key: "changeSkin",
          value: function changeSkin(e) {
            this.scene.save.config.skin = e;
          }
        }]);

        return Ws;
      }();

      Ws.tooltip = "(no description provided)", Ws.STATE_VAR = "state", function (e) {
        function t(e, t) {
          var n = e.memory[Ws.STATE_VAR],
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
      }(js || (js = {}));
      var Hs = "msg",
          Gs = "dlg";

      var Vs = /*#__PURE__*/function (_Ws) {
        _inherits(Vs, _Ws);

        var _super2 = _createSuper(Vs);

        function Vs(e, t, n) {
          _classCallCheck(this, Vs);

          return _super2.call(this, e, t, n);
        }

        _createClass(Vs, [{
          key: "speak",
          value: function speak() {
            var e = this.loadMem(Hs + (this.event.currentState + 1));
            Ss.isEmpty(e) && (e = this.loadMem(Hs)), this.showSimpleDialog(e, Ns);
          }
        }, {
          key: "dialog",
          value: function dialog() {
            var e = this.event.states[this.event.currentState];
            void 0 !== e.dialog && this.showComplexDialog(e.dialog, Ns);
          }
        }]);

        return Vs;
      }(Ws);

      Vs.tooltip = "Basic script with simple actions, mainly for generic NPCs";

      var qs = /*#__PURE__*/function (_Ws2) {
        _inherits(qs, _Ws2);

        var _super3 = _createSuper(qs);

        function qs() {
          _classCallCheck(this, qs);

          return _super3.apply(this, arguments);
        }

        _createClass(qs, [{
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

        return qs;
      }(Ws);

      qs.tooltip = "Provide transportation from one map to another";

      var Ys = /*#__PURE__*/function (_Ws3) {
        _inherits(Ys, _Ws3);

        var _super4 = _createSuper(Ys);

        function Ys() {
          _classCallCheck(this, Ys);

          return _super4.apply(this, arguments);
        }

        _createClass(Ys, [{
          key: "testAction",
          value: function testAction() {
            return this.showSimpleDialog("2", Ns), !0;
          }
        }, {
          key: "giantTest",
          value: function giantTest() {
            this.showSimpleDialog("4", Ns);
            var e = this;
            return this.wait(1e3).then(function () {
              e.stepFromTarget(e.hero);
            }), this.incrementStateVar(), !0;
          }
        }, {
          key: "giantTest2",
          value: function giantTest2() {
            this.showSimpleDialog("5", Ns);
            var e = this;
            return this.wait(1e3).then(function () {
              e.stepFromTarget(e.hero);
            }), this.incrementStateVar(), !0;
          }
        }, {
          key: "giantTest3",
          value: function giantTest3() {
            this.showSimpleDialog("6", Ns);
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

        return Ys;
      }(Ws);

      var zs;
      Ys.tooltip = "Script for tests", function (e) {
        var t = base_path + "data/",
            n = base_path + "assets/",
            i = base_path + "assetlist/",
            o = base_path + "edit/";
        var a = new Map();
        var s,
            l = new Map(),
            c = new Map();

        function u(e, t, n) {
          f(Is.RequestType.GET, void 0, e, t, n);
        }

        function d(e, t, n) {
          f(Is.RequestType.POST, t, e, n);
        }

        function f(e, t, n, r, i) {
          var o = new XMLHttpRequest();
          o.onload = function (e) {
            r(this.responseText);
          }, o.onerror = function (e) {
            console.error("Error for request to: " + n), console.error(e), r();
          }, o.ontimeout = function () {
            console.error("Timeout for request to: " + n), r();
          }, o.open(e, n, !0);

          try {
            void 0 !== i && o.setRequestHeader("lang", i), Ss.isEmpty(t) || e !== Is.RequestType.POST ? o.send() : o.send(t);
          } catch (e) {
            "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), r();
          }
        }

        function p(e, r, i, o) {
          Ss.isEmpty(e) && (console.error("Trying to load empty file!"), console.trace());

          var s = function (e, r) {
            var i;

            switch (r) {
              case gs.CHAR:
              case gs.FACE:
              case gs.SKIN:
              case gs.PICTURE:
              case gs.TILE:
                i = n;
                break;

              case gs.MAP:
              case gs.SAVE:
              case gs.STRING:
              case gs.DIALOG:
              case gs.GENERIC_MESSAGE:
              case gs.TILESET:
                i = t;
                break;

              default:
                console.error("Unexpected resource type"), console.trace();
            }

            return i + r + "/" + e;
          }(e, r);

          if (void 0 === s) return console.error("Error while loading file: " + e + "/" + r), void i();

          switch (r) {
            case gs.CHAR:
            case gs.FACE:
            case gs.SKIN:
            case gs.TILE:
            case gs.PICTURE:
              var _t26 = new Image();

              _t26.onload = function () {
                a.set(r + "@" + e, _t26), i(_t26);
              }, _t26.src = s;
              break;

            case gs.MAP:
            case gs.SAVE:
            case gs.STRING:
            case gs.DIALOG:
            case gs.GENERIC_MESSAGE:
            case gs.TILESET:
              u(s, i, o);
              break;

            default:
              console.error("Unexpected resource type"), console.trace(), i(void 0);
          }
        }

        function h(e, t) {
          var n = a.get(t + "@" + e);
          return Ss.isEmpty(n) && p(e, t, function (n) {
            void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : a.set(t + "@" + e, n);
          }), n;
        }

        e.loadProperties = function (e) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
          l.has(n) ? e(l.get(n)) : u(t + gs.CONFIGURATION + "/" + n + ".properties", function (t) {
            var r;
            void 0 !== t ? (r = function (e) {
              var t = new Map(),
                  n = e.split("\n");

              for (var r = 0; r < n.length; r++) {
                var _e43 = n[r].trim();

                if ("" !== _e43 && 0 !== _e43.indexOf("#")) {
                  var _n18 = _e43.split("="),
                      _i16 = +_n18[1];

                  isNaN(_i16) ? t.has(_n18[1]) ? t.set(_n18[0], t.get(_n18[1])) : console.error("Error parsing properties file at line " + r + ": " + _i16) : t.set(_n18[0], _i16);
                }
              }

              return t;
            }(t), l.set(n, r)) : r = new Map(), e(r);
          });
        }, e.sendGETRequest = u, e.sendPOSTRequest = d, e.load = p, e.loadImageFromCache = h, e.loadDefaultImage = function (e) {
          return h("404.png", e);
        }, e.save = function (e, t, n, r) {
          var i = function (e, t) {
            return o + t + "/" + e;
          }(e, n);

          d(i, t, function (e) {
            void 0 !== e ? n === gs.STRING || n === gs.DIALOG || n === gs.GENERIC_MESSAGE ? r(e, !0) : r(void 0, !0) : (console.error("Empty response for: " + i), r(void 0, !1));
          });
        }, e.listResources = function (e, t) {
          u(i + e, function (e) {
            if (void 0 !== e) {
              var _n19 = JSON.parse(e);

              if (void 0 !== _n19) return void t(_n19);
            }

            console.error("Empty response from " + i), t([]);
          });
        }, e.listScriptClasses = function () {
          if (void 0 !== s) return s;
          var e = Object.keys(r).filter(function (e) {
            try {
              return r[e].prototype instanceof Ws;
            } catch (e) {
              return !1;
            }
          }),
              t = new Map();

          var _iterator29 = _createForOfIteratorHelper(e),
              _step29;

          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var _n20 = _step29.value;
              t.set(_n20, r[_n20].tooltip);
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }

          return s = t, t;
        }, e.listScriptActions = function (e) {
          if (c.has(e)) return c.get(e);
          var t = new r[e](void 0, void 0, void 0),
              n = Object.getOwnPropertyNames(Object.getPrototypeOf(t)).filter(function (e) {
            try {
              return "constructor" !== e && !Ss.isEmpty(e) && "function" == typeof t[e];
            } catch (e) {
              return !1;
            }
          });
          return c.set(e, n), n;
        }, e.listEventStateConditions = function () {
          return Object.keys(js);
        };
      }(zs || (zs = {}));
      var Ks = ps.extend({
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
              gapi.auth2.getAuthInstance().isSignedIn.get() && (ps.set(t, "loginStatus", !0), ps.set(t, "loginService", "google"));
            });
          }, window.gLoginCallback = this.gLoginCallback;
        },
        methods: {
          logoutCallback: function logoutCallback() {
            ps.set(this, "loginStatus", !1), ps.set(this, "loginService", void 0), ps.set(this, "flagLoggingOut", !1);
          },
          logout: function logout() {
            if (this.loginStatus) {
              switch (this.loginService) {
                case "facebook":
                  if (void 0 !== this.fbToken) {
                    ps.set(this, "flagLoggingOut", !0);

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

              zs.sendGETRequest("logout", function (e) {});
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
            zs.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
              if (void 0 !== n) try {
                if (JSON.parse(n).result) return ps.set(t, "loginStatus", !0), void ps.set(t, "loginService", e.service);
              } catch (e) {
                console.error(n);
              }
              ps.set(t, "loginStatus", !1), ps.set(t, "loginService", void 0), console.error("Logged with " + e.service + " failed");
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
      var Qs = Js(Ks, ys, [], !1, null, "08ab550b", null);
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
      var el = ps.extend({
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
                  ps.set(_e45, "flagSent", !0), zs.sendPOSTRequest("issue", JSON.stringify(n), function (t) {
                    if (ps.set(_e45, "flagReceived", !0), !Ss.isEmpty(t)) try {
                      var _n21 = JSON.parse(t);

                      return void ps.set(_e45, "url", _n21.url);
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
            ps.set(this, "flagSent", !1), ps.set(this, "flagReceived", !1), ps.set(this, "url", void 0), e || (ps.set(this, "description", ""), ps.set(this, "label", void 0));
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
      var rl, il, ol, al, sl, ll, cl;
      !function (e) {
        e.launchAction = function (e, t, n, i, o) {
          var a = e.states[i];

          if (0 === a.trigger) {
            var _t28 = ks.getDirection(e, n),
                _r16 = Fs.getState(n);

            void 0 !== _r16 ? _r16.direction = _t28 : console.error("Hero state undefined");

            var _i17 = ks.getOpposedDirections(_t28);

            _r16 = Fs.getState(e), void 0 !== _r16 ? _r16.direction = _i17 : console.error("Event state undefined:" + e);
          }

          {
            var _i18 = e.script;
            if (Ss.isEmpty(_i18)) ;else {
              var _s9 = new r[_i18](e, n, t);

              if (Ss.isEmpty(_s9)) return console.error('Script "' + _i18 + '" not found (event: ' + e.name + ")"), !1;
              var _l5 = a.action;
              if (Ss.isEmpty(_l5)) ;else if (_l5 in _s9) try {
                return Ss.isEmpty(o) ? _s9[_l5]() : _s9[_l5](o);
              } catch (e) {
                console.error(e);
              } else console.error('Action "' + _l5 + '" not found in script "' + _i18 + '" (event: ' + e.name + ")");
            }
          }
          {
            var _r17 = a.dialog;
            void 0 !== _r17 && xs.showComplexDialog(t, n, e.name, _r17, t.save.config, Ns);
          }
          return !1;
        };
      }(rl || (rl = {})), function (e) {
        e.check = function () {
          !function () {
            var e = document.createElement("canvas");
            if (!e.getContext || !e.getContext("2d")) console.error("HTML5 canvas is not supported");
          }();
        }, e.serviceWorker = function () {
          return void 0 === navigator.serviceWorker ? (console.warn("Service Workers are not supported"), !1) : "localhost" !== location.hostname && "https" !== location.protocol || (console.warn("Service Workers won't work when using local self-signed certificates. This could be fixed by trusting them, or using browser flags."), !1);
        }, e.webWorker = function () {
          return void 0 !== window.Worker || (console.warn("Web Workers are not supported"), !1);
        }, e.webSpeech = function () {
          return void 0 !== window.SpeechSynthesisUtterance || (console.warn("Web Speech API are not supported"), !1);
        };
      }(il || (il = {})), function (e) {
        var t;
        e.WEBWORKER_URL = "workers/l4w-webworker.js", e.SERVICEWORKER_URL = "workers/l4w-serviceworker.js", e.SERVICEWORKER_OPTIONS = {
          scope: "../"
        }, e.launchWebWorker = function (n) {
          il.webWorker() && (Ss.isEmpty(t) && (t = new Worker(e.WEBWORKER_URL)), t.postMessage(n));
        }, e.registerServiceWorker = function () {
          il.serviceWorker() && navigator.serviceWorker.register(e.SERVICEWORKER_URL, e.SERVICEWORKER_OPTIONS).then(function (e) {}, function (e) {
            console.warn("ServiceWorker registration failed: ", e);
          });
        };
      }(ol || (ol = {})), function (e) {
        e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
      }(al || (al = {}));

      var ul = /*#__PURE__*/function (_ref2) {
        _inherits(ul, _ref2);

        var _super5 = _createSuper(ul);

        function ul(e, t) {
          _classCallCheck(this, ul);

          return _super5.call(this, e, t, al.game);
        }

        _createClass(ul, [{
          key: "deferredInit",
          value: function deferredInit(e) {
            _get(_getPrototypeOf(ul.prototype), "deferredInit", this).call(this, e);

            var t = e.get("canvasRatio");
            void 0 === t && (t = 1), this.canvasRatio = t, this.scaleStepX = this.cellW * Math.pow(2, -10), this.scaleStepY = this.cellH * Math.pow(2, -10);
          }
        }, {
          key: "refreshCanvasSize",
          value: function refreshCanvasSize() {
            if (this.naturalScale) this.doubleScale ? (this.scaleX = 2, this.scaleY = 2) : (this.scaleX = 1, this.scaleY = 1);else {
              var _e46 = this.baseH / this.height(),
                  _t29 = this.baseW / this.width(),
                  _n22 = this.canvasRatio / (_e46 > _t29 ? _e46 : _t29);

              this.scaleX = _n22 - _n22 % this.scaleStepX, this.scaleY = _n22 - _n22 % this.scaleStepY;
            }

            _get(_getPrototypeOf(ul.prototype), "refreshCanvasSize", this).call(this);
          }
        }, {
          key: "width",
          value: function width() {
            return window.innerWidth || (null !== document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth || 0);
          }
        }, {
          key: "height",
          value: function height() {
            return window.innerHeight || (null !== document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight || 0);
          }
        }, {
          key: "toggleNaturalScale",
          value: function toggleNaturalScale(e, t) {
            this.naturalScale = void 0 !== e ? e : !this.toggleNaturalScale, this.doubleScale = t || !1;
          }
        }]);

        return ul;
      }( /*#__PURE__*/function () {
        function _class2(e, t, n) {
          _classCallCheck(this, _class2);

          var r;
          this.canvas = e, this.currentTranslation = {
            x: 0,
            y: 0
          }, this.gridType = n, r = this, zs.loadProperties(function (e) {
            r.deferredInit(e), r.updateSizingDerivates(), r.refreshCanvasSize(), t(r);
          });
        }

        _createClass(_class2, [{
          key: "deferredInit",
          value: function deferredInit(e) {
            this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(al[this.gridType] + "Rows"), this.columns = e.get(al[this.gridType] + "Columns");
          }
        }, {
          key: "updateSizingDerivates",
          value: function updateSizingDerivates() {
            this.baseH = this.cellH * this.rows, this.baseW = this.cellW * this.columns, this.halfRows = Math.floor(this.rows / 2), this.halfColumns = Math.floor(this.columns / 2);
          }
        }, {
          key: "refreshCanvasSize",
          value: function refreshCanvasSize() {
            this.canvas.width = Math.floor(this.baseW * this.scaleX), this.canvas.height = Math.floor(this.baseH * this.scaleY);
          }
        }, {
          key: "clear",
          value: function clear(e, t) {
            void 0 === t ? e.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW, this.baseH) : e.clearRect(this.currentTranslation.x + t.x * this.cellW, this.currentTranslation.y + t.y * this.cellH, (t.w + 1) * this.cellW, (t.h + 1) * this.cellH);
          }
        }, {
          key: "mapPositionToGrid",
          value: function mapPositionToGrid(e) {
            var t = this.canvas.getBoundingClientRect(),
                n = Math.floor((e.x - t.left) / this.scaleX + this.currentTranslation.x),
                r = Math.floor((e.y - t.top) / this.scaleY + this.currentTranslation.y);
            return {
              i: Math.floor((e.x - t.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW),
              j: Math.floor((e.y - t.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH),
              x: n,
              y: r
            };
          }
        }, {
          key: "mapCellToCanvas",
          value: function mapCellToCanvas(e) {
            return {
              x: e.i * this.cellW,
              y: e.j * this.cellH
            };
          }
        }, {
          key: "mapCanvasToCell",
          value: function mapCanvasToCell(e) {
            return {
              i: Math.floor(e.x / this.cellW),
              j: Math.floor(e.y / this.cellH)
            };
          }
        }, {
          key: "changeTranslation",
          value: function changeTranslation(e, t, n, r) {
            var i = e - this.halfColumns * this.cellW;
            if (i < 0) i = 0;else {
              var _e47 = (n - this.columns) * this.cellW;

              i > _e47 && (i = _e47);
            }
            var o = t - this.halfRows * this.cellH;
            if (o < 0) o = 0;else {
              var _e48 = (r - this.rows) * this.cellH;

              o > _e48 && (o = _e48);
            }
            return this.applyTranslate(i, o);
          }
        }, {
          key: "reappyTranslation",
          value: function reappyTranslation() {
            var e = this.currentTranslation.x,
                t = this.currentTranslation.y;
            this.currentTranslation.x = 0, this.currentTranslation.y = 0, this.applyTranslate(e, t);
          }
        }, {
          key: "applyTranslate",
          value: function applyTranslate(e, t) {
            return this.getContext().translate(this.currentTranslation.x - e, this.currentTranslation.y - t), this.currentTranslation = {
              x: e,
              y: t
            }, this.currentTranslation;
          }
        }, {
          key: "getCurrentTranslation",
          value: function getCurrentTranslation() {
            return this.currentTranslation;
          }
        }, {
          key: "resetTranslation",
          value: function resetTranslation() {
            this.getContext().translate(this.currentTranslation.x, this.currentTranslation.y), this.currentTranslation = {
              x: 0,
              y: 0
            };
          }
        }, {
          key: "getBoundariesX",
          value: function getBoundariesX(e, t) {
            var n = Math.floor(e / this.cellW),
                r = n - this.halfColumns - 1,
                i = n + this.halfColumns + 1;
            return this.checkBoundariesLimit(r, i, t);
          }
        }, {
          key: "getBoundariesY",
          value: function getBoundariesY(e, t) {
            var n = Math.floor(e / this.cellH),
                r = n - this.halfRows - 1,
                i = n + this.halfRows + 1;
            return this.checkBoundariesLimit(r, i, t);
          }
        }, {
          key: "checkBoundariesLimit",
          value: function checkBoundariesLimit(e, t, n, r) {
            return e < 0 && (void 0 !== r && r || (t -= e), e = 0), t >= n && (void 0 !== r && r || (e -= t - n + 1), t = n - 1), {
              min: e,
              max: t
            };
          }
        }, {
          key: "getContext",
          value: function getContext() {
            return this.canvas.getContext("2d");
          }
        }]);

        return _class2;
      }());

      !function (e) {
        e.speak = function (e, t) {
          if (!il.webSpeech()) return;
          var n = new SpeechSynthesisUtterance(e);
          n.lang = t, speechSynthesis.speak(n);
        }, e.gandalf = function e(t) {
          if (!il.webSpeech()) return;
          var n = null,
              r = window.speechSynthesis.getVoices();

          if (0 === r.length) {
            if (void 0 === t) return void setTimeout(function () {
              return e(3);
            }, 0);
            if (t > 0) return void setTimeout(function () {
              return e(t - 1);
            }, 10);
          }

          var _iterator30 = _createForOfIteratorHelper(r),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var _e49 = _step30.value;

              if (["Google UK English Male", "Microsoft David Desktop - English (United States)", "Google US English"].includes(_e49.name)) {
                n = _e49;
                break;
              }
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }

          var i = new SpeechSynthesisUtterance("You shall not pass");
          i.lang = ws.EN, i.pitch = 0, i.rate = .1, null !== n && (i.voice = n), speechSynthesis.speak(i);
        };
      }(sl || (sl = {})), function (e) {
        e.flagGodMode = !1;
        var t = "background: black; color: white; font-size: 18px";

        function n() {
          console.log("%cAccepted commands                                                          \n%c---------------------------------------------------------------------------\nhelp    lists accepted commands                                            \niddqd   activates God Mode (only Talos supported)                          \nman     opens manual pages                                                 \nuname   show system info                                                   \n", "background: black; color: white; font-weight: bold; font-size: 18px", t);
        }

        function r() {
          e.flagGodMode = !e.flagGodMode;
          var n = e.flagGodMode ? "enabled " : "disabled";
          console.log("%cGod Mode " + n + "                                                          \n", t);
        }

        function i() {
          console.log("%cOpening manual pages...                                                    \n", t), window.open("https://github.com/giovannipessiva/l4w/wiki", "_blank");
        }

        function o() {
          zs.sendGETRequest("/v", function (e) {
            var _e50;

            e = (_e50 = e) === null || _e50 === void 0 ? void 0 : _e50.padEnd(20), console.log("%c" + e + "                                                       \n", t);
          });
        }

        function a() {
          sl.gandalf(), console.warn("%c\n                                                         █                             █                         \n                  ╓▄▄                                    ██                           ▐█                         \n                  ████                                  ▐██                           ▐█                         \n                  ████▌                                 ████                          ▐█                         \n                   ▀██                                  ████                          ▐█                         \n                    ▐█                                 ▐█████                          █                         \n                     █                                 ██████                          █                         \n                     ██                            ▄▄▄████████▄▄▄▄▄                    █                         \n                      █                  ▄▄▄▄█████████████████████████████▄▄          ▐█▄                        \n                      █▌                   ╙▀▀▀██████████████████████▀▀▀▀           ╙▀███▀▀                      \n                      ▐█                            ▐███████████                 ▄▄ ╔████                        \n                      ████▄ ██▄▄▄,                  █████▀▀▀████             ▄█████▌▐████                        \n                      █████▌█████████▄▄▄,     ▄▄▄▄▄▄███ ╙▀▀▀ ████▄▄▄▄▄▄▄▄██████████▌  ▐█                         \n                      ▀███▀  █████████████████████████        █████████████████████▌   ╙                         \n                        █▌   ▀███████████████████████▌        ▐█████████████████████                             \n                        ▐█    ███████████████████████         ▐█████████████████████                             \n                         █    ███████████████████████         ▐████      ▀██████████▄                            \n                         ██   ██████████▀▀▀    ▀█████▌        ▐████          ▀██████▌                            \n                         ▐█   ▀▀▀▀▀              █████        █████                                              \n                          █▌                    ▐█████▌      ▄█████▌                                             \n                          ▐█                    ████████,  ,████████                                             \n                           █                   ▐████████████████████▌                                            \n                           ██                  ██████████████████████                                            \n                           ▐█                 ▐██████████████████████▌                                           \n                            █▌                ████████████████████████                                           \n                            ▐█               ]████████████████████████▌                                          \n                             █               ██████████████████████████                                          \n                             ██             ]██████████████████████████▌                                         \n                             ▐█             ████████████████████████████                                         \n                              █▌           ]████████████████████████████▌                                        \n                              ▐█           ██████████████████████████████                                        \n                               █          ]██████████████████████████████▌                                       \n                               █▌         ████████████████████████████████                                       \n                               ▐█        ]████████████████████████████████▄                                      \n                                '        ██████████████████████████████████                                      \n                                        ▀▀▀▀▀▀▀▀██████▀▀▀▀▀▀███████▀▀▀▀▀▀▀                                       \n                                                ▀▀▀▀▀         ▀▀▀▀▀                                              ", "background: black; color: bada55; font-size: 12px");
        }

        e.start = function () {
          Ts.ui.enableCLI && (setTimeout(function () {
            console.log("%c                       ____       _____  __      __                        \n                      |    |     /  |  |/  \\    /  \\                       \n                      |    |    /   |  |\\   \\/\\/   /                       \n                      |    |___/    ^   /\\        /                        \n                      |_______ \\____   |  \\__/\\  /                         \n                              \\/    |__|       \\/                          \n%cWelcome to L4W command line interface! Type 'help' for listing commands    ", "background: black; color: #bada55; font-size: 18px", "background: black; color: #bada55; font-size: 18px");
          }, 1e3), Object.defineProperty(window, "help", {
            get: function get() {
              setTimeout(n, 0);
            }
          }), Object.defineProperty(window, "iddqd", {
            get: function get() {
              setTimeout(r, 0);
            }
          }), Object.defineProperty(window, "man", {
            get: function get() {
              setTimeout(i, 0);
            }
          }), Object.defineProperty(window, "su", {
            get: function get() {
              setTimeout(a, 0);
            }
          }), Object.defineProperty(window, "uname", {
            get: function get() {
              setTimeout(o, 0);
            }
          }));
        };
      }(ll || (ll = {})), function (e) {
        var t;

        function n() {
          var e = document.getElementById("comboLang");

          if (null !== e && e instanceof HTMLSelectElement) {
            var _n23 = e.selectedOptions.item(0);

            null !== _n23 && void 0 !== ws[_n23.value] && t.setLanguage(ws[_n23.value]);
          }
        }

        function r(e, t) {
          zs.load("0", gs.SAVE, function (n) {
            if (Ss.isEmpty(n)) t();else try {
              var _e51 = JSON.parse(n);

              t(_e51);
            } catch (n) {
              "SyntaxError" === n.name ? console.error("Error while parsing save") : "TypeError" === n.name ? console.error("Error while reading save") : console.error(n), Os.showError(e.getContext("2d")), t();
            }
          });
        }

        function i(e, t) {
          var n = e.hero,
              r = e.hero.target;
          void 0 === r && (r = e.hero.newTarget), void 0 !== r && ks.getPointDistance(e.hero.position, e.grid.mapCellToCanvas(r)) <= Math.floor(e.grid.cellH / 2) && (n = r);
          var i = ks.getDirectionTarget(n, t);
          e.startHeroMovement(i.i, i.j);
        }

        function o() {
          var e = document.getElementById("comboScreen");

          switch (e.value) {
            case "apt":
              t.toggleNaturalScale(!1);
              break;

            case "nat":
              t.toggleNaturalScale(!0, !1);
              break;

            case "nat2":
              t.toggleNaturalScale(!0, !0);
              break;

            default:
              console.error("Unexpected comboScreen value:" + e.value);
          }

          a();
        }

        function a() {
          var e = document.getElementById("canvas1"),
              t = Math.round((window.innerHeight - e.clientHeight) / 2) + "px";
          e.style.marginTop = t, e.style.marginBottom = t;
        }

        function s() {
          var e = document.getElementById("checkAntialiasing");
          t.toggleAntialiasing(e.checked);
        }

        function l() {
          if (null === document.fullscreenElement) {
            var _e52 = document.documentElement;
            if (_e52.requestFullscreen) _e52.requestFullscreen();else if (_e52.mozRequestFullScreen) _e52.mozRequestFullScreen();else if (_e52.webkitRequestFullscreen) _e52.webkitRequestFullscreen();else {
              if (!_e52.msRequestFullscreen) return void console.error("Cannot request FullScreen");
              _e52["msRequestFullscreen("];
            }
          }
        }

        function c() {
          if (null !== document.fullscreenElement) if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();else {
            if (!document.msExitFullscreen) return void console.error("Cannot request FullScreen");
            document.msExitFullscreen();
          }
        }

        e.start = function (e) {
          il.check(), ol.registerServiceWorker(), ll.start(), new ps({
            el: "#loginVue",
            components: {
              login: Xs
            }
          }), new ps({
            el: "#bugReportingVue",
            components: {
              "bug-reporting": nl
            }
          }), new ul(e, function (l) {
            t = new Us(l, rl.launchAction), function (e, t, n) {
              var r = new Map();
              r[ms.Keys.W] = function (e) {
                i(t, 0);
              }, r[ms.Keys.S] = function (e) {
                i(t, 2);
              }, r[ms.Keys.A] = function (e) {
                i(t, 3);
              }, r[ms.Keys.D] = function (e) {
                i(t, 1);
              }, r[ms.Keys.F1] = function (e) {
                t.toggleFPS(), e.preventDefault();
              }, r[ms.Keys.F2] = function (e) {
                t.toggleGridMode(), e.preventDefault();
              }, r[ms.Keys.F3] = function (e) {
                t.toggleCellNumbering(), e.preventDefault();
              }, r[ms.Keys.F4] = function (e) {
                t.toggleFocus(), e.preventDefault();
              }, r[ms.Keys.F5] = function (e) {
                t.toggleBlocks(), e.preventDefault();
              }, r[ms.Keys.F6] = function (e) {
                t.toggleAntialiasing(), e.preventDefault();
              };
              ms.init(e, n, r, Ns, function (e, n, r, i) {
                !function (e, n) {
                  t.registerAction(e, n), t.startHeroMovement(e, n);
                }(e, n);
              }, Ns, Ns, function (e, n) {
                t.updatePointer(e, n);
              }, function (e, n) {
                t.updatePointer(e, n);
              }, function () {
                t.togglePause(!0);
              }, function () {
                t.togglePause(!1);
              }, function () {
                t.togglePause(!0), n.refreshCanvasSize(), t.changeScale(), t.reapplyTranslation(), t.togglePause(!1), a();
              }, Ns, Ns, Ns);
            }(e, t, l), r(e, function (r) {
              t.loadSave(r, function (i) {
                t.start(e), t.moveFocusToDirection();
                var l = document.getElementById("comboLang");
                void 0 !== r && void 0 !== r.config && (void 0 !== r.config.lang && (l.value = r.config.lang, n()), void 0 !== r.config.flagAntialiasing && (document.getElementById("checkAntialiasing").checked = r.config.flagAntialiasing, s()), void 0 !== r.config.flagNatural && void 0 !== r.config.flagDouble && (document.getElementById("comboScreen").value = r.config.flagNatural ? r.config.flagDouble ? "nat2" : "nat" : "apt", o())), l.options.add(new Option("English 🇬🇧", ws.EN)), l.options.add(new Option("Italiano 🇮🇹", ws.IT)), l.value = t.save.config.lang, a(), e.classList.add("l4wCanvas"), document.getElementById("footer").style.visibility = "visible";
              });
            });
          });
        }, e.changeLanguage = n, e.load = function () {
          xs.closeDialog(!0), r(document.getElementById("canvas1"), function (e) {
            t.loadSave(e, function (e) {
              t.moveFocusToDirection(), e ? console.log("Save loaded successfully") : console.log("Save not found");
            });
          });
        }, e.save = function () {
          var e = Cs.FIRST_ELEM_ID,
              n = Rs.getSave(t.map, t.hero);
          void 0 !== n && Ss.isNumeric(n.id) && (e = n.id), n.config.lang = document.getElementById("comboLang").value, n.config.flagAntialiasing = document.getElementById("checkAntialiasing").checked, n.config.flagNatural = "apt" !== document.getElementById("comboScreen").value, n.config.flagDouble = "nat2" === document.getElementById("comboScreen").value, zs.save(e + "", JSON.stringify(n), gs.SAVE, function (e, t) {
            t && console.log("Game saved successfully");
          });
        }, e.changeScreen = o, e.changeFullscreen = function () {
          document.getElementById("checkFullscreen").checked ? l() : c(), a();
        }, e.changeAntialiasing = s, e.openFullscreen = l, e.closeFullscreen = c;
      }(cl || (cl = {}));
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
  }, n(289);
}();
