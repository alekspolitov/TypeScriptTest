define(["require", "exports", "./services/services"], function (require, exports, services_1) {
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
