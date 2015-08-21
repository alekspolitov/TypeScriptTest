/// <reference path="typings/tsd.d.ts" />
///https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/
//import $ = require("jquery");
//import Core = require("./modules/module1");
/// <reference path="modules/module1.ts" />
var userModule = UserModule;
var App;
(function (App) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            //var data: string = <string><any>this.greeting;
            $("#content").append(this.greeting);
            return this.greeting;
        };
        Greeter.prototype.getUser = function () {
            var model = new userModule.UserModel("Aleks Politov", 1);
            $("#content").append(model.toString());
            return model.toString() + userModule.SampleFunc();
        };
        Greeter.GLOBAL = "GLOBAL2";
        return Greeter;
    })();
    App.Greeter = Greeter;
})(App || (App = {}));
var sample = new App.Greeter("text");
window.setInterval(function () { return sample.getUser(); }, 2000);
