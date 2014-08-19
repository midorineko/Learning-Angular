'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);


phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
      $scope.phones = data.splice(0, 5); //this leads to only 5 responses
    });

    $scope.orderProp = 'age';
  }]);
