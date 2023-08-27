"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors_1 = require("../../../Errors");
var HTTPBasicAuthentication = /** @class */ (function () {
    function HTTPBasicAuthentication() {
        // if (realm === void 0) { realm = 'realm'; }
        // this.userManager = {};
        // this.realm = "";
    }
    HTTPBasicAuthentication.prototype.askForAuthentication = function (ctx) {
        return {
            'WWW-Authenticate': 'Basic realm="' + this.realm + '"'
        };
    };
    HTTPBasicAuthentication.prototype.getUser = function (ctx, callback) {
        var _this = this;
        var onError = function (error) {
            // _this.userManager.getDefaultUser(function (defaultUser) {
                callback(error, null);
            // });
        };

        var authHeader = ctx.headers.find('Authorization');
        if (!authHeader) {
            onError(Errors_1.Errors.MissingAuthorisationHeader);
            return;
        }
        if (!/^Basic \s*[a-zA-Z0-9]+=*\s*$/.test(authHeader)) {
            onError(Errors_1.Errors.WrongHeaderFormat);
            return;
        }
        var value = Buffer.from(/^Basic \s*([a-zA-Z0-9]+=*)\s*$/.exec(authHeader)[1], 'base64').toString().split(':', 2);
        var username = value[0];
        var password = value[1];

        if (username && password) {
            var user = {
                uid: username,
                username: username,
                password: password,
                isDefaultUser: false
                // Add other user properties here if needed
            };

            callback(null, user);

        } 
       
    };
    return HTTPBasicAuthentication;
}());
exports.HTTPBasicAuthentication = HTTPBasicAuthentication;

