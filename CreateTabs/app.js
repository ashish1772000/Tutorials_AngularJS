var app = angular.module('AppModule', []);
app.controller('TabController', function () {
    // Initialize the tab inside controller only. ng-init="tab = 1"
    this.tab = 1;

    // Assign tab ids. ng-click="tab=2" 
    this.assignTab = function (tabId) {
        this.tab = tabId;
    };

    // Check whether tab is selected. ng-class="{active:tab === 2}" 
    this.isTabSelected = function (tabId) {
        return this.tab === tabId;
    };
});


