;(function($){
"use strict";
define("modules/services/services", ["require", "exports"], function (require, exports) {
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
        }());
        Services.MyService = MyService;
    })(Services = exports.Services || (exports.Services = {}));
});
define("modules/module1", ["require", "exports", "modules/services/services"], function (require, exports, services_1) {
    "use strict";
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
                var service = new services_1.Services.MyService("My Super Service");
                service.DoAnything();
            };
            return UserModel;
        }());
        UserModule.UserModel = UserModel;
        function SampleFunc() {
            return "";
        }
        UserModule.SampleFunc = SampleFunc;
    })(UserModule = exports.UserModule || (exports.UserModule = {}));
});
define("main", ["require", "exports", "modules/module1"], function (require, exports, module1_1) {
    "use strict";
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
                var model = new module1_1.UserModule.UserModel("Aleks Politov", 1);
                $("#content").append(model.toString() + "<br/>");
                return model.toString() + module1_1.UserModule.SampleFunc();
            };
            Greeter.GLOBAL = "GLOBAL2";
            return Greeter;
        }());
        App.Greeter = Greeter;
    })(App = exports.App || (exports.App = {}));
    var sample = new App.Greeter("text");
    window.setInterval(function () { return sample.getUser(); }, 2000);
});

})(jQuery)