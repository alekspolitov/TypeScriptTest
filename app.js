(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = (window.$);
var Core = require("./modules/module1");
var App;
(function (App) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            $("#content").append(this.greeting);
            return this.greeting;
        };
        Greeter.prototype.getUser = function () {
            var model = new Core.UserModel("Aleks Politov", 1);
            $("#content").append(model.toString());
            return model.toString() + Core.SampleFunc();
        };
        Greeter.GLOBAL = "GLOBAL2";
        return Greeter;
    })();
    App.Greeter = Greeter;
})(App || (App = {}));
var sample = new App.Greeter("text");
window.setInterval(function () { return sample.getUser(); }, 2000);

},{"./modules/module1":2}],2:[function(require,module,exports){
var UserModel = (function () {
    function UserModel(name, id) {
        this.name = "";
        this.id = 0;
        this.id = id;
        this.name = name;
    }
    UserModel.prototype.toString = function () {
        return this.id + "|" + this.name;
    };
    return UserModel;
})();
exports.UserModel = UserModel;
function SampleFunc() {
    return "";
}
exports.SampleFunc = SampleFunc;

},{}]},{},[1])


//# sourceMappingURL=app.js.map