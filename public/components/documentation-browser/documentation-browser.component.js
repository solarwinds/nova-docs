"use strict";

var module = angular.module("apollo-documentation");

module.component("documentationBrowser", {
    bindings: {
        project: "=?"
    },
    templateUrl: "components/documentation-browser/documentation-browser.component.html",
    controller: ["$http", "$window", function($http, $window) {
        var vm = this;
        this.getProjects = getProjects;
        this.open = open;

        activate();

        function activate() {
            vm.getProjects().then(function(response) {
                vm.projects = response.data;
            });
        }

        function open(project, branch) {
            $window.location = "/" + project.name + "/" + branch;
        }

        function getProjects() {
            return $http.get("/api/projects");
        }
    }]
});
