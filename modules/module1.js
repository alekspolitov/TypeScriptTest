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
    }());
    UserModule.UserModel = UserModel;
    function SampleFunc() {
        return "";
    }
    UserModule.SampleFunc = SampleFunc;
})(UserModule || (UserModule = {}));
