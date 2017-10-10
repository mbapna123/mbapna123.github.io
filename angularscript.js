var app = angular.module('pokeapp', []);
var kobe=false;

app.controller('controller', function($scope) {
    $scope.user = 2.00;
    $scope.image = "https://2.bp.blogspot.com/-cIfnFtBMTXo/VKzymP76l9I/AAAAAAAAAJk/_vHlnkMMsIM/s1600/durant.jpg";
    $scope.pokemon="slaking"
})

app.directive('myDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function myValidation(value) {
        if (value.indexOf(".jpg") > -1 ||value.indexOf(".png") > -1 ||value.indexOf(".jpeg") > -1||value.indexOf(".gif") > -1) {
          valueerrthree=0;
          mCtrl.$setValidity('imagefunc', true);
          $(".imagefile").css("background","linear-gradient(#16B9D4,#9AE3F0)");
          if (valueerrthree!=1 && valueerrtwo!=1 && valueerr!=1){
          errork=1;
              $(".submitimage").css("background","linear-gradient(#16B9D4,#9AE3F0)")
            }
        } else {
          errork=0;
          mCtrl.$setValidity('imagefunc', false);
          $(".imagefile").css("background","linear-gradient(white,grey)");
          valueerrthree=1;
          $(".submitimage").css("background","linear-gradient(white,grey)")
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  }
})
