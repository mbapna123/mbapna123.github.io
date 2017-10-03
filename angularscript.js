var app = angular.module('pokeapp', []);
var kobe=false;

app.controller('controller', function($scope) {
    $scope.user = 2.00;
    $scope.image = "http://2.bp.blogspot.com/-cIfnFtBMTXo/VKzymP76l9I/AAAAAAAAAJk/_vHlnkMMsIM/s1600/durant.jpg";
    $scope.pokemon="slaking"
})

app.directive('myDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function myValidation(value) {
        if (value.indexOf(".jpg") > -1 ||value.indexOf(".png") > -1 ||value.indexOf(".jpeg") > -1||value.indexOf(".gif") > -1) {
          mCtrl.$setValidity('imagefunc', true);
        } else {
          mCtrl.$setValidity('imagefunc', false);
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  }
})

// app.directive('myDirective', function() {
//   return {
//     alert("hi")
//     require: 'ngModel',
//     link: function(scope, element, attr, mCtrl) {
//       function myValidation(value) {
//         for (i=0;i<arr.length;i++){
//         if (value==arr[i]) {
//           kobe=true;
//           break;
//         }}
//         if (kobe){
//           mCtrl.$setValidity('pokefunc', false);
//         }
//         else{
//             mCtrl.$setValidity('pokefunc', true);
//         }
//         return value;
//       }
//       mCtrl.$parsers.push(myValidation);
//     }
//   }
// })
