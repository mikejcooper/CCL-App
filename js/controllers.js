var infoBoxOpened = false;
angular.module('starter.controllers',['ui.bootstrap'])

    .config(function($ionicConfigProvider) {
        //ion-nav-bar (menu) center on android
        $ionicConfigProvider.platform.android.navBar.alignTitle("center")
    })


.controller('AppCtrl', function($scope, $modal) {




        // UI bootstrap modal code
        $scope.showModal = function() {

            $scope.opts = {
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl : '../templates/welcomePopup.html',
                controller : ModalInstanceCtrl,
                resolve: {}, // empty storage
                windowClass: 'center-modal'
            };


            $scope.opts.resolve.item = function() {
                return angular.copy(
                    {name: $scope.name}
                ); // pass name to resolve storage
            };

            var modalInstance = $modal.open($scope.opts);

            modalInstance.result.then(function(){
                //on ok button press
                console.log("Modal cancel");
            },function(){
                //on cancel button press
                console.log("Modal closed");
            });
        };
        var ModalInstanceCtrl = function($scope, $modalInstance, $modal, item) {
            $scope.item = item;

            $scope.ok = function () {
                $modalInstance.close();
                console.log("ok()");
            };

            $scope.cancel = function () {
                $modalInstance.close();
                console.log("cancel()");
            };
        };
        //open welcomePopup
        if (!infoBoxOpened){
            $scope.showModal();
            infoBoxOpened = true;
        }



        document.addEventListener('deviceready', function () {
            // Enable to debug issues.
            // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

            console.log("PUSH MESSAGE");

            var notificationOpenedCallback = function(jsonData) {
                console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
            };

            window.plugins.OneSignal.init("c0188d98-4a48-11e5-bcbb-a71ac7fabb2a",
                {googleProjectNumber: "1071552359129"},
                notificationOpenedCallback);

            // Show an alert box if a notification comes in when the user is in your app.
            window.plugins.OneSignal.enableInAppAlertNotification(true);
        }, false);




})


.controller('HallCtrl', function($scope, $ionicPopup) {

        $scope.halls = {
            1: {
                name: "Goldney",
                imgURL: "hallsIMG/1.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/goldney/"
            },
            2: {
                name: "Clifton Hill House",
                imgURL: "hallsIMG/2.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/clifton-hill/"
            },
            3: {
                name: "Goldney",
                imgURL: "hallsIMG/1.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/goldney/"
            },
            4: {
                name: "Clifton Hill House",
                imgURL: "hallsIMG/2.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/clifton-hill/"
            },
            5: {
                name: "Goldney",
                imgURL: "hallsIMG/1.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/goldney/"
            },
            6: {
                name: "Clifton Hill House",
                imgURL: "hallsIMG/2.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/clifton-hill/"
            },
            7: {
                name: "Goldney",
                imgURL: "hallsIMG/1.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/goldney/"
            },
            8: {
                name: "Clifton Hill House",
                imgURL: "hallsIMG/2.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/clifton-hill/"
            }


        };

        $scope.openLink = function(URL){

            var confirmPopup = $ionicPopup.confirm({
                title: 'Open UoB Website?',
                cancelText: 'Cancel',
                okText: 'Ok'
            });
            //
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                    openLink(URL);
                } else {
                    console.log('You are not sure');
                }
            });

            return false;
        };

    })

.controller('HomeCtrl', function($scope, $ionicPopup) {

        $scope.isCollapsed = true;

        $scope.days = {
            day1: {
                day: "Monday",
                events: {
                    event1: {
                        title: 'Bristol Freshers',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/1.png",
                        location: "Univerity of Bristol Campus",
                        venue: "Anson Rooms",
                        date: "27th Sep - 4th Oct",
                        time:'09:00',
                        coverURL: "https://www.facebook.com/events/971419459536809/",
                        avatarURL: "http://www.bris.ac.uk/"
                    },
                    event2: {
                        title: 'Sciences vs Arts Bar Crawl',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/2.jpg",
                        location: "The South Buildings, Canons Road, BS15UH, Bristol",
                        venue: "Pryzm Nightclub",
                        date: "Tuesday 6 October",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/1556319957955080/",
                        avatarURL: "http://www.bris.ac.uk/",
                        additionalEventOccurrence: "yes"
                    },
                    event3: {
                        title: 'Arcadia Bristol',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/3.jpg",
                        location: "Queen Square, BS1 4LH Bristol, United Kingdom",
                        venue: "Queen Square, Bristol",
                        date: "4th - 5th September",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/865692610181537/",
                        avatarURL: "https://www.facebook.com/groups/521020464709928/?fref=ts",
                        additionalEventOccurrence: "no"
                    }
                }
            },

            day2: {
                day: "Tuesday",
                events: {
                    event1: {
                        title: 'Bristol Freshers',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/1.png",
                        location: "Univerity of Bristol Campus",
                        venue: "Anson Rooms",
                        date: "27th Sep - 4th Oct",
                        time:'09:00',
                        coverURL: "https://www.facebook.com/events/971419459536809/",
                        avatarURL: "http://www.bris.ac.uk/"
                    },
                    event2: {
                        title: 'Sciences vs Arts Bar Crawl',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/2.jpg",
                        location: "The South Buildings, Canons Road, BS15UH, Bristol",
                        venue: "Pryzm Nightclub",
                        date: "Tuesday 6 October",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/1556319957955080/",
                        avatarURL: "http://www.bris.ac.uk/",
                        additionalEventOccurrence: "yes"
                    },
                    event3: {
                        title: 'Arcadia Bristol',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/3.jpg",
                        location: "Queen Square, BS1 4LH Bristol, United Kingdom",
                        venue: "Queen Square, Bristol",
                        date: "4th - 5th September",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/865692610181537/",
                        avatarURL: "https://www.facebook.com/groups/521020464709928/?fref=ts",
                        additionalEventOccurrence: "no"
                    }
                }
            },

            day3: {
                day: "Wednesday",
                events: {
                    event1: {
                        title: 'Bristol Freshers',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/1.png",
                        location: "Univerity of Bristol Campus",
                        venue: "Anson Rooms",
                        date: "27th Sep - 4th Oct",
                        time:'09:00',
                        coverURL: "https://www.facebook.com/events/971419459536809/",
                        avatarURL: "http://www.bris.ac.uk/"
                    },
                    event2: {
                        title: 'Sciences vs Arts Bar Crawl',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/2.jpg",
                        location: "The South Buildings, Canons Road, BS15UH, Bristol",
                        venue: "Pryzm Nightclub",
                        date: "Tuesday 6 October",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/1556319957955080/",
                        avatarURL: "http://www.bris.ac.uk/",
                        additionalEventOccurrence: "yes"
                    },
                    event3: {
                        title: 'Arcadia Bristol',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/3.jpg",
                        location: "Queen Square, BS1 4LH Bristol, United Kingdom",
                        venue: "Queen Square, Bristol",
                        date: "4th - 5th September",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/865692610181537/",
                        avatarURL: "https://www.facebook.com/groups/521020464709928/?fref=ts",
                        additionalEventOccurrence: "no"
                    }
                }
            },

            day4: {
                day: "Thursday",
                events: {
                    event1: {
                        title: 'Bristol Freshers',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/1.png",
                        location: "Univerity of Bristol Campus",
                        venue: "Anson Rooms",
                        date: "27th Sep - 4th Oct",
                        time:'09:00',
                        coverURL: "https://www.facebook.com/events/971419459536809/",
                        avatarURL: "http://www.bris.ac.uk/"
                    },
                    event2: {
                        title: 'Sciences vs Arts Bar Crawl',
                        avatarImg: "img/bristolLogo.png",
                        coverImg: "events/2.jpg",
                        location: "The South Buildings, Canons Road, BS15UH, Bristol",
                        venue: "Pryzm Nightclub",
                        date: "Tuesday 6 October",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/1556319957955080/",
                        avatarURL: "http://www.bris.ac.uk/",
                        additionalEventOccurrence: "yes"
                    },
                    event3: {
                        title: 'Arcadia Bristol',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/3.jpg",
                        location: "Queen Square, BS1 4LH Bristol, United Kingdom",
                        venue: "Queen Square, Bristol",
                        date: "4th - 5th September",
                        time:'22:00',
                        coverURL: "https://www.facebook.com/events/865692610181537/",
                        avatarURL: "https://www.facebook.com/groups/521020464709928/?fref=ts",
                        additionalEventOccurrence: "no"
                    }
                }
            }

        };


      //Device selection for Maps integration.
        $scope.changeLinkMaps = function (location){
        var devicePlatform = device.platform;
        var mapRoot = location + ", UK";

        var confirmPopup = $ionicPopup.confirm({
              title: 'Open Maps?',
              cancelText: 'Cancel',
              okText: 'Ok'
        });
        confirmPopup.then(function (res) {
            if (res) {
                console.log('You are sure');
                if(devicePlatform == "iOS"){
                    mapRoot = "http://maps.apple.com/?q=" + mapRoot;
                }
                else if (devicePlatform == 'Android'){
                    mapRoot = "geo:0,0?q=" + mapRoot;
                }
                else {
                    mapRoot = "https://www.google.co.uk/maps/search/" + mapRoot;
                }
                openLink(mapRoot);
                console.log('HERE');
              }
              else {
                console.log('You are not sure');
              }
          });
          return false;
      };

      //Add to config.xml for appAvailability plugin ->>> <gap:plugin name="com.ohh2ahh.plugins.appavailability" />
        $scope.changeLinkImages = function(URL){
          //console.log("here");
        //var scheme  = 'fb://';
        //appAvailability.check(scheme,       // URI Scheme or Package Name
        //    function() {  // Success callback - application installed
        //      document.getElementById(id.toString()).href = "fb://" + URL;
        //    },
        //    function() {  // Error callback
        //      document.getElementById(id.toString()).href = URL;
        //    })


          var confirmPopup = $ionicPopup.confirm({
              title: 'Open Facebook?',
              cancelText: 'Cancel',
              okText: 'Ok'
          });
          //
          confirmPopup.then(function (res) {
              if (res) {
                  console.log('You are sure');
                  openLink(URL);
              } else {
                  console.log('You are not sure');
              }
          });

        return false;
      };

        $scope.calendarEvent = function() {

            var confirmPopup = $ionicPopup.confirm({
                title: 'Create Calendar Event?',
                cancelText: 'Cancel',
                okText: 'Ok'
            });
            //
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                    createCalendarEvent();
                } else {
                    console.log('You are not sure');
                }
            });

            createCalendarEvent = function() {

                var startDate = new Date("July 25, 2015 13:00:00");
                var endDate = new Date("July 25, 2015 14:30:00");
                var title = "My nice event";
                var location = "Home";
                var notes = "Some notes about this event.";

                // create (the only function also supported on Android for now)
                window.plugins.calendar.createEvent(title, location, notes, startDate, endDate, success, error);
            }

        }

})

.controller('phoneCtrl', function($scope, $ionicPopup) {

        $scope.showConfirm = function(phoneNumber, id) {
            //console.log("hello");
            //window.open("tel:"+ phoneNumber);


            var confirmPopup = $ionicPopup.confirm({
                title: 'Call - ' + id,
                template: phoneNumber,
                cancelText: 'Cancel',
                okText: 'Call'
            });
            //
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                    openLink("tel:"+ phoneNumber);
                } else {
                    console.log('You are not sure');
                }
            });
        }

});



var openLink = function (URL){

    var devicePlatform = device.platform;

    if(devicePlatform == "iOS"){
        window.open(URL, '_system', $location = 'no');
    }
    else if (devicePlatform == 'Android'){
        navigator.app.loadUrl(URL, { openExternal:true });
    }
    else {
        window.open(URL, '_system', $location = 'no');
    }
    console.log('LINK opened');

    return false;
};


