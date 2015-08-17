// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ui.bootstrap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }




    //Push Notifications
    if (PushbotsPlugin.isAndroid()) {
      PushbotsPlugin.initializeAndroid('55d1be871779590e208b4567', '1071552359129');
      console.log("push android");

    } else if (PushbotsPlugin.isiOS()) {
      PushbotsPlugin.initializeiOS('55d1be871779590e208b4567');
      console.log("push ios");
    }

  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      }
    }
  })
      .state('app.hallsOfResidence', {
    url: "/homeAlternative1",
    views: {
      'menuContent': {
        templateUrl: "templates/hallsOfResidence.html",
        controller: 'HomeCtrl'
      }
    }
  })


  .state('app.contactUs', {
    url: "/contactUs",
    views: {
      'menuContent': {
        templateUrl: "templates/contactUs.html"
      }
    }
  })

  .state('app.jcr', {
    url: "/jcr",
    views: {
      'menuContent': {
        templateUrl: "templates/jcr.html"
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');


});

