var infoBoxOpened = false;
angular.module('starter.controllers',['ui.bootstrap'])

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




.controller('HomeCtrl', function($scope ) {

        $scope.cards = [
    {day:"Monday", title:'Bristol Freshers', avatarImg:"img/bristolLogo.png", coverImg:"events/1.png", location: "Univerity of Bristol Campus", venue:"Anson Rooms", date:"27th Sep - 4th Oct", coverURL:"https://www.facebook.com/events/971419459536809/", avatarURL:"http://www.bris.ac.uk/", id: 1},
    {day:"Tuesday", title:'Sciences vs Arts Bar Crawl', avatarImg:"img/bristolLogo.png", coverImg:"events/2.jpg", location: "The South Buildings, Canons Road, BS15UH, Bristol", venue:"Pryzm Nightclub", date:"Tuesday 6 October at 20:00 - 04:00 ", coverURL:"https://www.facebook.com/events/1556319957955080/", avatarURL:"http://www.bris.ac.uk/", additionalEventOccurrence: "yes"},
    {day:"Wednesday", title:'Arcadia Bristol', avatarImg:"events/CCL.png", coverImg:"events/3.jpg", location: "Queen Square, BS1 4LH Bristol, United Kingdom", venue:"Queen Square, Bristol", date:"4th - 5th September", coverURL:"https://www.facebook.com/events/865692610181537/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"},
    {day:"Thursday", title:'Bristol Harbour Festival', avatarImg:"events/CCL.png", coverImg:"events/4.png", location: "The Grove, BS1 4RB Bristol, United Kingdom", venue:"Thekla, Bristol", date:"18th - 19th July", coverURL:"https://www.facebook.com/events/468824383280325/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"},
    {day:"Monday", title:'Bristol Freshers', avatarImg:"img/bristolLogo.png", coverImg:"events/1.png", location: "Univerity of Bristol Campus", venue:"Anson Rooms", date:"27th Sep - 4th Oct", coverURL:"https://www.facebook.com/events/971419459536809/", avatarURL:"http://www.bris.ac.uk/", id: 5},
    {day:"Tuesday", title:'Sciences vs Arts Bar Crawl', avatarImg:"img/bristolLogo.png", coverImg:"events/2.jpg", location: "The South Buildings, Canons Road, BS15UH, Bristol", venue:"Pryzm Nightclub", date:"Tuesday 6 October at 20:00 - 04:00 ", coverURL:"https://www.facebook.com/events/1556319957955080/", avatarURL:"http://www.bris.ac.uk/", additionalEventOccurrence: "no"},
    {day:"Wednesday", title:'Arcadia Bristol', avatarImg:"events/CCL.png", coverImg:"events/3.jpg", location: "Queen Square, BS1 4LH Bristol, United Kingdom", venue:"Queen Square, Bristol", date:"4th - 5th September", coverURL:"https://www.facebook.com/events/865692610181537/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"},
    {day:"Thursday", title:'Bristol Harbour Festival', avatarImg:"events/CCL.png", coverImg:"events/4.png", location: "The Grove, BS1 4RB Bristol, United Kingdom", venue:"Thekla, Bristol", date:"18th - 19th July", coverURL:"https://www.facebook.com/events/468824383280325/", avatarURL:"https://www.facebook.com/groups/521020464709928/?fref=ts", additionalEventOccurrence: "no"}
  ];
      //Device selection for Maps integration.
      $scope.changeLinkMaps = function (location){
        var devicePlatform = device.platform;
        var mapRoot = location + ", UK";
        //console.log(devicePlatform);
        //if(devicePlatform == "iOS"){
        //  mapRoot = "maps:q=" + mapRoot;
        //  document.getElementById("maps").href = mapRoot
        //  document.getElementById("maps2").href = mapRoot
        //}
        //else if (devicePlatform == 'Android'){
        //  mapRoot = "geo:0,0?q=" + mapRoot
        //  document.getElementById("maps").href = mapRoot
        //  document.getElementById("maps2").href = mapRoot
        //}
        //else {
        //  mapRoot = window.open("https://www.google.co.uk/maps/search/" + mapRoot, '_system', $location = 'no');
        //}
          mapRoot = window.open("https://www.google.co.uk/maps/search/" + mapRoot, '_system', $location = 'no');


          return false;
      };

      //Add to config.xml for appAvailability plugin ->>> <gap:plugin name="com.ohh2ahh.plugins.appavailability" />
      $scope.changeLinkImages = function(URL, id){
          console.log("here");
        //var scheme  = 'fb://';
        //appAvailability.check(scheme,       // URI Scheme or Package Name
        //    function() {  // Success callback - application installed
        //      document.getElementById(id.toString()).href = "fb://" + URLNative;
        //    },
        //    function() {  // Error callback
        //      document.getElementById(id.toString()).href = URL;
        //    })

        window.open(URL, '_system', $location = 'no');
        return false;
      };

      $scope.isCollapsed = true;
})

.controller('phoneCtrl', function($scope, $ionicPopup) {

        $scope.showConfirm = function(phoneNumber, id) {
            console.log("hello");
            window.open("tel:0117 928 7848");
        }

            //var confirmPopup = $ionicPopup.confirm({
            //    title: 'Call - ' + id,
            //    template: phoneNumber,
            //    cancelText: 'Cancel',
            //    okText: 'Call'
            //});
            //confirmPopup.then(function (res) {
            //        if (res) {
            //            console.log('You are sure');
            //            window.open("tel:0117 928 7848")
            //        } else {
            //            console.log('You are not sure');
            //        }
            //    });
            //};

            //window.open("tel:0117 928 7848")


        //$scope.makeCall= function (){
        //    var number = 3333322456;
        //
        //    var onSuccess=function(number){
        //
        //        alert("calling");
        //    };
        //
        //    function onError(error) {
        //        alert('code: '    + error.code    + '\n' +
        //        'message: ' + error.message + '\n');
        //    }
        //
        //    window.plugins.CallNumber.callNumber(onSuccess, onError, number);
        //
        //}

});


