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
})(Services || (Services = {}));
