/// <reference path="typings/tsd.d.ts" />
var $ = require("jquery");
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
            return model.toString();
        };
        Greeter.GLOBAL = "GLOBAL2";
        return Greeter;
    })();
    App.Greeter = Greeter;
})(App || (App = {}));
var sample = new App.Greeter("text");
window.setInterval(function () { return sample.getUser(); }, 2000);
