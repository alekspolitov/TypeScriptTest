;(function($){
"use strict";
System.register("modules/services/services", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Services;
    return {
        setters:[],
        execute: function() {
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
            })(Services = Services || (Services = {}));
            exports_1("Services", Services);
        }
    }
});
System.register("modules/module1", ["modules/services/services"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var services_1;
    var UserModule;
    return {
        setters:[
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
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
            })(UserModule = UserModule || (UserModule = {}));
            exports_2("UserModule", UserModule);
        }
    }
});
System.register("main", ["modules/module1", "jquery"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var module1_1, $;
    var App, sample;
    return {
        setters:[
            function (module1_1_1) {
                module1_1 = module1_1_1;
            },
            function ($_1) {
                $ = $_1;
            }],
        execute: function() {
            (function (App) {
                var Greeter = (function () {
                    function Greeter(message) {
                        this.greeting = message;
                    }
                    Greeter.prototype.greet = function () {
                        var y;
                        var x = { id: "id1", name: "name1" };
                        var name = x.name;
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
            })(App = App || (App = {}));
            exports_3("App", App);
            sample = new App.Greeter("text");
            window.setInterval(function () { return sample.getUser(); }, 2000);
        }
    }
});

})(jQuery)