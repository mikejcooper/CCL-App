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
})




.controller('HomeCtrl', function($scope, $ionicPopup) {

        $scope.isCollapsed = true;

        $scope.cards = [
    {day:"Monday", title:'Bristol Freshers', avatarImg:"img/bristolLogo.png", coverImg:"events/1.png", location: "Univerity of Bristol Campus", venue:"Anson Rooms", date:"27th Sep - 4th Oct", coverURL:"https://www.facebook.com/events/971419459536809/", avatarURL:"http://www.bris.ac.uk/", id: 1},
    {day:"Tuesday", title:'Sciences vs Arts Bar Crawl', avatarImg:"img/bristolLogo.png", coverImg:"events/2.jpg", location: "The South Buildings, Canons Road, BS15UH, Bristol", venue:"Pryzm Nightclub", date:"Tuesday 6 October at 20:00 - 04:00 ", coverURL:"https://www.facebook.com/events/1556319957955080/", avatarURL:"http://www.bris.ac.uk/", additionalEventOccurrence: "yes"},
    {day:"Wednesday", title:'Arcadia Bristol', avatarImg:"events/CCL.png", coverImg:"events/3.jpg", location: "Queen Square, BS1 4LH Bristol, United Kingdom", venue:"Queen Square, Bristol", date:"4th - 5th September", coverURL:"https://www.facebook.com/events/865692610181537/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"},
    {day:"Thursday", title:'Bristol Harbour Festival', avatarImg:"events/CCL.png", coverImg:"events/4.png", location: "The Grove, BS1 4RB Bristol, United Kingdom", venue:"Thekla, Bristol", date:"18th - 19th July", coverURL:"https://www.facebook.com/events/468824383280325/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"},
    {day:"Friday", title:'Bristol Freshers', avatarImg:"img/bristolLogo.png", coverImg:"events/1.png", location: "Univerity of Bristol Campus", venue:"Anson Rooms", date:"27th Sep - 4th Oct", coverURL:"https://www.facebook.com/events/971419459536809/", avatarURL:"http://www.bris.ac.uk/", id: 5},
    {day:"Saturday", title:'Sciences vs Arts Bar Crawl', avatarImg:"img/bristolLogo.png", coverImg:"events/2.jpg", location: "The South Buildings, Canons Road, BS15UH, Bristol", venue:"Pryzm Nightclub", date:"Tuesday 6 October at 20:00 - 04:00 ", coverURL:"https://www.facebook.com/events/1556319957955080/", avatarURL:"http://www.bris.ac.uk/", additionalEventOccurrence: "no"},
    {day:"Sunday", title:'Arcadia Bristol', avatarImg:"events/CCL.png", coverImg:"events/3.jpg", location: "Queen Square, BS1 4LH Bristol, United Kingdom", venue:"Queen Square, Bristol", date:"4th - 5th September", coverURL:"https://www.facebook.com/events/865692610181537/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"},
    {day:"Monday", title:'Bristol Harbour Festival', avatarImg:"events/CCL.png", coverImg:"events/4.png", location: "The Grove, BS1 4RB Bristol, United Kingdom", venue:"Thekla, Bristol", date:"18th - 19th July", coverURL:"https://www.facebook.com/events/468824383280325/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"}
  ];
      //Device selection for Maps integration.
      $scope.changeLinkMaps = function (location){
        var devicePlatform = device.platform;
        var mapRoot = location + ", UK";

        var confirmPopup = $ionicPopup.confirm({
              title: 'Open in browser',
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
              title: 'Open in browser',
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


