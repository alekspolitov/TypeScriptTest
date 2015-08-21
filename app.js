;(function($){
"use strict";
var Services;
(function (Services) {
    var MyService = (function () {
        function MyService(serviceName) {
            this.serviceName = serviceName;
        }
        MyService.prototype.DoAnything = function () {
            return "sample text";
        };
        return MyService;
    })();
    Services.MyService = MyService;
})(Services || (Services = {}));
//import Service = require('./services/services');
/// <reference path="services/services.ts" />
var UserModule;
(function (UserModule) {
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
        UserModel.prototype.callService = function () {
            var service = new Services.MyService("My Super Service");
            service.DoAnything();
        };
        return UserModel;
    })();
    UserModule.UserModel = UserModel;
    function SampleFunc() {
        return "";
    }
    UserModule.SampleFunc = SampleFunc;
})(UserModule || (UserModule = {}));
/// <reference path="typings/tsd.d.ts" />
///https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/
//import $ = require("jquery");
//import Core = require("./modules/module1");
/// <reference path="modules/module1.ts" />
//import userModule = UserModule;
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
            var model = new UserModule.UserModel("Aleks Politov", 1);
            $("#content").append(model.toString());
            return model.toString() + UserModule.SampleFunc();
        };
        Greeter.GLOBAL = "GLOBAL2";
        return Greeter;
    })();
    App.Greeter = Greeter;
})(App || (App = {}));
var sample = new App.Greeter("text");
window.setInterval(function () { return sample.getUser(); }, 2000);

})(jQuery)