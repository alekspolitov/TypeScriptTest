!function(e){"use strict";define("modules/services/services",["require","exports"],function(e,t){var n;!function(e){var t=function(){function e(e){this.serviceName=e}return e.prototype.DoAnything=function(){return"sample text"},e}();e.MyService=t}(n=t.Services||(t.Services={}))}),define("modules/module1",["require","exports","modules/services/services"],function(e,t,n){var r;!function(e){function t(){return""}var r=function(){function e(e,t){this.name="",this.id=0,this.id=t,this.name=e}return e.prototype.toString=function(){return this.id+"|"+this.name},e.prototype.callService=function(){var e=new n.Services.MyService("My Super Service");e.DoAnything()},e}();e.UserModel=r,e.SampleFunc=t}(r=t.UserModule||(t.UserModule={}))}),define("main",["require","exports","modules/module1"],function(t,n,r){var i;!function(t){var n=function(){function t(e){this.greeting=e}return t.prototype.greet=function(){return e("#content").append(this.greeting),this.greeting},t.prototype.getUser=function(){var t=new r.UserModule.UserModel("Aleks Politov",1);return e("#content").append(t.toString()+"<br/>"),t.toString()+r.UserModule.SampleFunc()},t.GLOBAL="GLOBAL2",t}();t.Greeter=n}(i||(i={}));var o=new i.Greeter("text");window.setInterval(function(){return o.getUser()},2e3)})}(jQuery);