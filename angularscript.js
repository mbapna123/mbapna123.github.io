var app = angular.module('pokeapp', []);
var kobe=false;

app.controller('controller', function($scope) {
      $scope.image="https://2.bp.blogspot.com/-cIfnFtBMTXo/VKzymP76l9I/AAAAAAAAAJk/_vHlnkMMsIM/s1600/durant.jpg";
  $scope.imagevalid = function() {
    var heh=$scope.image
       if (heh.indexOf(".jpg") > -1 ||heh.indexOf(".png") > -1 ||heh.indexOf(".jpeg") > -1||heh.indexOf(".gif") > -1) {
         return ""}
         else{return "Invalid image tag"}
 }
})
