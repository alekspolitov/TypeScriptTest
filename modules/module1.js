var Core;
(function (Core) {
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
    Core.UserModel = UserModel;
})(Core = exports.Core || (exports.Core = {}));
