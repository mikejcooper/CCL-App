var infoBoxOpened = false;
angular.module('starter.controllers',['ui.bootstrap', 'ngCordova'])

    .config(function($ionicConfigProvider) {
        //ion-nav-bar (menu) center on android
        $ionicConfigProvider.platform.android.navBar.alignTitle("center")
    })


.controller('AppCtrl', function($scope, $modal, $ionicModal) {


        $ionicModal.fromTemplateUrl('templates/welcomePopup.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.openModal()
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            console.log('destroy');
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });




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
                name: "Wills Halls",
                imgURL: "hallsIMG/Wills Hall.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/wills/"
            },
            4: {
                name: "Orchard Heights",
                imgURL: "hallsIMG/Orchard Heights.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/orchard/"
            },
            5: {
                name: "Hiatt Baker",
                imgURL: "hallsIMG/Hiatt Baker.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/hiatt-baker-self-catered/"
            },
            6: {
                name: "Culver",
                imgURL: "hallsIMG/Culver.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/culver/"
            },
            7: {
                name: "Unite House",
                imgURL: "hallsIMG/Unite House.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/unite/"
            },
            8: {
                name: "Colston Street",
                imgURL: "hallsIMG/Colston Street.jpg",
                hallURL: "http://www.bristol.ac.uk/accommodation/undergraduate/residences/colston-street/"
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

.controller('HomeCtrl', function($scope, $ionicPopup, $cordovaCalendar) {


        $scope.isCollapsed = true;

        $scope.days = {
            day1: {
                day: "Saturday 19th",
                events: {
                    event1: {
                        title: 'Pizza Party / Scavenger Hunt',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Pizza.jpg",
                        location: "Unite House, Bristol",
                        venue: "Nelson House",
                        date: "Saturday 19th September",
                        dateCal: "September 19",
                        time:'19:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2522/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },

            day2: {
                day: "Sunday 20th",
                events: {
                    event1: {
                        title: 'Bunker - Moving In Party',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Moving In Party.jpg",
                        location: "Bunker, BS8 1QU, Bristol",
                        venue: "Bunker, Clifton Triangle",
                        date: "Sunday 20th September",
                        dateCal: "September 20",
                        time:'22:30',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2771/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event2: {
                        title: 'Curry Night',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Curry Night (1).jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House, Common Room",
                        date: "Sunday 20th September",
                        dateCal: "September 20",
                        time:'20:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2777/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event3: {
                        title: 'Unismart Talk (Unite/Culver)',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Unismart.jpg",
                        location: "Anson Rooms, Bristol",
                        venue: "Anson Rooms, Student Union",
                        date: "Sunday 20th September",
                        dateCal: "September 20",
                        time:'17:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2756/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event4: {
                        title: 'Unismart Talk (Orchard Heights)',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Unismart.jpg",
                        location: "Anson Rooms, Bristol",
                        venue: "Anson Rooms, Student Union",
                        date: "Sunday 20th September",
                        dateCal: "September 20",
                        time:'15:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2523/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },

            day3: {
                day: "Monday 21st",
                events: {
                    event3: {
                        title: 'Bus Tour of Bristol',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/bus tour.jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Monday 21st September",
                        dateCal: "September 21",
                        time:'12:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2525/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event2: {
                        title: 'CCL Mixer',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Welcome Week General Image.jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Monday 21st September",
                        dateCal: "September 21",
                        time:'13:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2526/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event1: {
                        title: 'O2 Academy - Future Takeover',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/o2.jpg",
                        location: "O2 Academy, Bristol",
                        venue: "O2 Academy, Bristol",
                        date: "Monday 21st September",
                        dateCal: "September 21",
                        time:'22:30',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2649/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },

            day4: {
                day: "Tuesday 22nd",
                events: {
                    event3: {
                        title: 'Courtyard Olympics',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/CCL Olympics (1).jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Courtyard",
                        date: "Tuesday 22nd September",
                        dateCal: "September 22",
                        time:'12:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2527/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event2: {
                        title: 'Lazer Fusion',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Laser Fusion.png",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Tuesday 22nd September",
                        dateCal: "September 22",
                        time:'18:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2526/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event1: {
                        title: 'Movie Night',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Movie Night.JPG",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Tuesday 22nd September",
                        dateCal: "September 22",
                        time:'20:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2528/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },

            day4: {

                day: "Wednesday 23rd",
                events: {
                    event3: {
                        title: 'Walking Tour',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Walking Tours.jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Wednesday 23rd September",
                        dateCal: "September 23",
                        time:'12:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2529/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event2: {
                        title: 'video Games Night',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Gaming (1).jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Wednesday 23rd September",
                        dateCal: "September 23",
                        time:'19:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2530/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event1: {
                        title: 'SWX - Phresh Prince',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/SWX.jpg",
                        location: "BS1 2JY, Bristol",
                        venue: "SWX Bristol",
                        date: "Wednesday 23rd September",
                        dateCal: "September 23",
                        time:'22:30',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2697/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },

            day4: {

                day: "Thursday 24th",
                events: {
                    event3: {
                        title: 'Street Art Tour and Workshop',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Banksy.jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Common Room",
                        date: "Thursday 24th September",
                        dateCal: "September 24",
                        time:'12:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2531/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    },
                    event2: {
                        title: 'The Lanes',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Bowling (1).jpg",
                        location: "The Lanes, Bristol",
                        venue: "The Lanes, Bristol",
                        date: "Thursday 24th September",
                        dateCal: "September 24",
                        time:'15:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2532/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },

            day5: {
                day: "Friday 25th",
                events: {
                    event3: {
                        title: 'Lakota - Apocalypse One',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/CCL Olympics (1).jpg",
                        location: "Lakota, Bristol",
                        venue: "Lakota, BS2 8QN, Bristol",
                        date: "Friday 25th September",
                        dateCal: "September 25",
                        time:'22:30',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2714/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
                    }
                }
            },
            day6: {
                day: "Saturday 26th",
                events: {
                    event3: {
                        title: 'The Big City Chill',
                        avatarImg: "events/CCL.png",
                        coverImg: "events/Bristol SU Welcome Fair.jpg",
                        location: "Unite House, Bristol",
                        venue: "Unite House - Courtyard",
                        date: "Saturday 26th September",
                        dateCal: "September 26",
                        time:'12:00',
                        coverURL: "https://www.bristolsu.org.uk/ents/event/2749/",
                        avatarURL: "https://www.facebook.com/citycentreliving?fref=ts"
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

        $scope.calendarEvent = function(start, title, location, date) {

            start = start[0].concat(start[1]);
            var end = (parseInt(start) + 1).toString();
            date = date[10].concat(date[11]);


            console.log(end);
            console.log(start);
            console.log(date);

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

                $cordovaCalendar.createEvent({
                    title: title,
                    location: location,
                    notes: '',
                    startDate: new Date(2015, 8, date, start, 0, 0, 0, 0),
                    endDate: new Date(2015, 8, date, end, 0, 0, 0, 0)
                }).then(function (result) {
                    console.log("Event created successfully");
                }, function (err) {
                    console.error("There was an error: " + err);
                });


                //var dateTemp = (date.concat(", 2015 ")).toString();
                //
                //var startDate = new Date(dateTemp.concat(start));
                //var endDate = new Date(dateTemp.concat(end));
                //var title = title;
                //var location = location;
                //var notes = "";
                //
                //
                //
                //// create (the only function also supported on Android for now)
                //$cordovaCalendar.createEvent(title, location, notes, startDate, endDate, success, error);
            }

        }

})

.controller('phoneCtrl', function($scope, $ionicPopup, $ionicModal) {





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



















// UI bootstrap modal code
//$scope.showModal = function() {
//
//    $scope.opts = {
//        backdrop: true,
//        backdropClick: true,
//        dialogFade: false,
//        keyboard: true,
//        templateUrl : '../templates/welcomePopup.html',
//        controller : ModalInstanceCtrl,
//        resolve: {}, // empty storage
//        windowClass: 'center-modal'
//    };
//
//
//    $scope.opts.resolve.item = function() {
//        return angular.copy(
//            {name: $scope.name}
//        ); // pass name to resolve storage
//    };
//
//    var modalInstance = $modal.open($scope.opts);
//
//    modalInstance.result.then(function(){
//        //on ok button press
//        console.log("Modal cancel");
//    },function(){
//        //on cancel button press
//        console.log("Modal closed");
//    });
//};
//
//
//
//var ModalInstanceCtrl = function($scope, $modalInstance, $modal, item) {
//    $scope.item = item;
//
//    $scope.ok = function () {
//        $modalInstance.close();
//        console.log("ok()");
//    };
//
//    $scope.cancel = function () {
//        $modalInstance.close();
//        console.log("cancel()");
//    };
//};
////open welcomePopup
//if (!infoBoxOpened){
//    $scope.showModal();
//    infoBoxOpened = true;
//}

