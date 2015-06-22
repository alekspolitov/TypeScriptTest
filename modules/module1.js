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
function SampleFunc() {
    return "";
}
module.exports = UserModel;
