"use strict";

var module = angular.module("apollo-documentation", ["xui"]);

module.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "constants",
    function ($stateProvider, $urlRouterProvider, $locationProvider, constants) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise("/");

        constants.environment = {name: "production"};

        $stateProvider.state("home", {
            url: "/:id",
            template: "<documentation-browser project=\"$params.id\"></documentation-browser>"
        });
    }]);
