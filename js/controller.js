var control = angular.module('starter.controllers', ['ngTagsInput']);

 var options = {

       content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
       animation: 'fade-in',
       showBackdrop: true,
       maxWidth: 200,
       showDelay: 0

 };


var appkeyResult = '';
var appList = '';
var twitterKey = '';
var buttonArray = '';
var buttonarray1 = '';
var elementArray = '';
var buttonId = '';
var elementId = '';
var contentData = '';
var appKey = '';
var appTitle = '';
var Titles = '';
var listGrid = '';
var elementTitle= '';
var buttonTitle='';
var elementDesc = '';
var element='';
var formEmail='';
var float='';
var float1='';
var floatid='';
var floatid1='';

function exitout(button) {
                    if (button == 1) {
                        navigator.app.exitApp();
                    }else{
					
                    }
                    
                }

var marker1,marker5,marker6,marker;
var mapAddress = '';

function initialize1(saving2) {
      
    var mapAddress1=saving2;
 
  
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
    zoom: 5,
    center: latlng
    }
    map = new google.maps.Map(document.getElementById('specificmap-canvas'), mapOptions);
    geocoder.geocode( { 'address': mapAddress1}, function(results, status) {
                     if (status == google.maps.GeocoderStatus.OK) {
                   
                     marker5 = new google.maps.Marker({
                                                      map: map,
                                                      position: results[0].geometry.location,
                                                      icon:'img/marker.png'
                                                      });
                     var infowindow5 = new google.maps.InfoWindow({content:mapAddress1,maxWidth:200});
                     
                     
                     infowindow5.open(map, marker5);
                     google.maps.event.addListener(marker5, 'click', function() {
                                                   infowindow.open(map,marker5);
                                                   });
                     } else {
           
					alert('Geocode was not successful for the following reason: ' + status);
					
                     }
                     });
    
    
}

function codeAddress1() {
  
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
                     if (status == google.maps.GeocoderStatus.OK) {
                     map.setCenter(results[0].geometry.location);
                     var marker = new google.maps.Marker({
                                                         map: map,
                                                         position: results[0].geometry.location
                                                         });
                     
                     
                     } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                     }
                     
                     
                     });
}
var saving='';
var sav='';
var saving1='';
var saving2=[];

control.controller('showmapCtrl',function($scope,$state,$ionicLoading,$ionicPlatform,$ionicPopup){
             
                   $scope.backprevmap=function(){
                   $state.go('chapterlist');
                   }
                   
                   $scope.editmap=function(){
                   $state.go('mapdisplay');
                   }
                   
				$ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
					
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/elements/addresses.json",
                          data:{'api_key':appKey,'id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          saving1 =response;
                    
                          for(var i=0;i<saving1.length;i++){                   
                          saving=saving1[i].address;
                        
                          saving2.push(saving[i].address);
                       
                           initialize1(saving);
                          }
                         
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'Map and Location',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                          }
                          });    
                   
                   $scope.float1=float1;
                   
                   });               

control.controller('showmap1Ctrl',function($scope,$state,$ionicLoading,$ionicPlatform,$ionicPopup){
                 
                   $scope.backprevmap=function(){
                   $state.go('chapterlist1');
                   }
                   
                    $scope.elementAppwallgoFun=function(){
					  $state.go('elementAppWall1');
				  } 
				  
                  $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				}); 
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/elements/addresses.json",
                          data:{'api_key':appKey,'id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          saving =response;
                          
                          for(var i=0;i<saving.length;i++){
                          saving=response[i].address;
                          saving2.push(saving[i].address);
                      
                          initialize1(saving);
                          }
                          
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'Map and Location',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                          }
                          });
                   
                   $scope.float1=float1;
                   
                   });
 
 control.controller('showmap2Ctrl',function($scope,$state,$ionicLoading,$ionicPlatform,$ionicPopup){
            
                   $scope.backprevmap=function(){
                   $state.go('chapterlist2');
                   }
                   
                   $scope.editmap=function(){
                   $state.go('mapdisplay2');
                   }
                   
				$ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
					
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/elements/addresses.json",
                          data:{'api_key':appKey,'id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          saving1 =response;
                    
                          for(var i=0;i<saving1.length;i++){                   
                          saving=saving1[i].address;
                         
                          saving2.push(saving[i].address);
                       
                           initialize1(saving);
                          }
                         
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'Map and Location',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                          }
                          });    
                   
                   $scope.float1=float1;
                   
                   });      
                                
control.controller('loginCtrl',function($scope,$state,$ionicLoading,$ionicPlatform,$ionicPopup,$location,$http){
	

  $scope.loginFtn = function(){

if($('#userId').val() && $('#password').val()){
	
     $ionicLoading.show({
			    content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
			    animation: 'fade-in',
			    showBackdrop: true,
			    maxWidth: 200,
			    showDelay: 0
			  });
    var userId = $('#userId').val();
    var password = $('#password').val();
    
    $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/login.json",
          data:{'login':userId,'password':password},
          success:function(response){ 
			 
			if(JSON.stringify(response).indexOf("incentive_programs") > -1){
			
					appList = response;
				
					localStorage.sender_id = appList.id;
					if(appList.username){
						localStorage.appwallLoginData = appList.username;
					}else{
						localStorage.appwallLoginData = appList.name;
					}
					
					 $ionicLoading.hide();
					$state.go('sample1');
					
			}
			else{ 
            appkeyResult = response;
          
            localStorage.sender_id = appkeyResult.id;
            if(appkeyResult.username){
                localStorage.appwallLoginData = appkeyResult.username;
            }else{
                localStorage.appwallLoginData = appkeyResult.name;
            }

            $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/users.json",
                  data:{'api_key':appkeyResult.api_key,'id':appkeyResult.id},
                  cache: false,
                  success:function(response){
				
                    $ionicLoading.hide();
                    appList = response;
                    localStorage["login"] = JSON.stringify(appkeyResult);
                    $state.go('sample');
          				},
                  error:function(error,status){
                    $ionicLoading.hide();
                   var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                  }
            });
          }  
          },
          error:function(error,status){
            $ionicLoading.hide();
            var error = JSON.parse(error.responseText);
            if(error.error == "Unauthorized"){
               var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: 'Please Check Your UserId or Password!'
							 });
							 alertPopup.then(function(res) {
							 });
            }else {
               var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: 'Login Error!'
							 });
							 alertPopup.then(function(res) {
							 });
            }
          }
    });
  }
else{
	 var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: 'Please Enter Your UserId or Password!'
							 });
							 alertPopup.then(function(res) {
							 });
	
}
}

  $scope.registerPageCallFtn =function(){
    $state.go('register');
  }
 
var authorizationResult = false;
    var authorizationResult1 = false;
    var authorizationResult2 = false;
    OAuth.initialize('tEIhoK6A486_3WlIUj8xUVncgfA', {cache:true});
    authorizationResult = OAuth.create('twitter');
    authorizationResult1 = OAuth.create('facebook');
    authorizationResult2 = OAuth.create('google');

    
    $scope.googleLogin = function(){

        OAuth.popup('google', {cache:false}, function(error, result) {
            if (!error) {
                console.log(result);
                authorizationResult1 = result;
                authorizationResult1.me().done(function(mydata) {
                    console.log(JSON.stringify(mydata));
                    $ionicLoading.show({
                            template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                        });

                        var formData = new FormData();
                        formData.append("uid",mydata.raw.id);
                        formData.append("provider",'google');

                        

                            $http.post('http://build.myappbuilder.com/api/login.json', formData,{
                                transformRequest: angular.identity,
                                headers: {'Content-Type': undefined}
                            })
                            .success(function(data,status,headers,config){

                                var AppKey = data.api_key;
                                localStorage.sender_id = data.id;
                                $.ajax({
                                  type: "GET",
                                  url: "http://build.myappbuilder.com/api/apps.json",
                                  data:{'api_key':AppKey},
                                  cache: false,
                                  success:function(response){

                                    var appName = '';
                                    for (var i = 0; i < response.length; i++) {
                                        if(response[i].title == "FrontEndBuilder"){
                                            apikey = response[i].api_key;
                                            localStorage.apikey = response[i].api_key;
                                            appName = 1;
                                        }else{
                                          
                                        }
                                    }

                                    if(appName == ''){
                                        
                                        var formValue = new FormData();
                                        formValue.append("api_key",AppKey);
                                        formValue.append("title",'FrontEndBuilder');

                                        $http.post('http://build.myappbuilder.com/api/apps.json', formValue,{
                                            transformRequest:angular.identity,
                                            headers:{'Content-Type' : undefined}
                                        })
                                        .success(function(data,status,headers,config){
                                            apikey = data.api_key;
                                            localStorage.apikey = data.api_key;
                                            $http({method: "GET",url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                            .success(function(data, status){
                                                
                                                childResults = data;
                                                for (var i = 0; i < childResults.length; i++) {
                                                    childResults[i].fullname = (childResults[i].fullname).trim();
                                                }
                                                $http({method: "GET",url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    buttonArray = response;
                                                    $ionicLoading.hide();
                                                    $state.go('sample');
                                                    $ionicSideMenuDelegate.toggleLeft();
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide()
                                                })
                                                
                                            })
                                            .error(function(data, status) {
                                                console.log("subscribers: "+JSON.stringify(data));
                                                $ionicLoading.hide();
                                            });
                            
                                        })
                                        .error(function(data,status,headers,config){
                                            $ionicLoading.hide();
                                            console.log(JSON.stringify(data));
                                        });

                                    }else{
                                            $http({method: "GET", url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                            .success(function(data, status) {
                                                console.log(JSON.stringify(data));
                                                childResults = data;
                                                for (var i = 0; i < childResults.length; i++) {
                                                    childResults[i].fullname = (childResults[i].fullname).trim();
                                                }
                                                $http({method: "GET", url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    buttonArray = data;
                                                    $ionicLoading.hide();
                                                    $state.go('sample');
                                                    $ionicSideMenuDelegate.toggleLeft();
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide()
                                                })
                                                
                                            })
                                            .error(function(data, status){
                                                console.log(JSON.stringify(data));
                                                $ionicLoading.hide();
                                            });
                                    }
                                  },
                                  error:function(error,status){
                                    $ionicLoading.hide();
                                  }
                                });
                            
                            })
                            .error(function(data,status,headers,config){
                                $http({method: "POST", url: 'http://build.myappbuilder.com/api/users.json', cache:false, params:{"name":mydata.raw.displayName,"username":mydata.raw.displayName,'email':mydata.email,'identity[uid]':mydata.raw.id,'identity[provider]':'google'}})
                                .success(function(data,status,headers,config){
                                    
                                    var AppKey = data.api_key;
                                    localStorage.sender_id = data.id;
                                    $.ajax({
                                      type: "GET",
                                      url: "http://build.myappbuilder.com/api/apps.json",
                                      data:{'api_key':AppKey},
                                      cache: false,
                                      success:function(response){

                                        var appName = '';
                                        for (var i = 0; i < response.length; i++) {
                                            if(response[i].title == "FrontEndBuilder"){
                                                apikey = response[i].api_key;
                                                localStorage.apikey = response[i].api_key;
                                                appName = 1;
                                            }else{
                                              
                                            }
                                        }

                                        if(appName == ''){
                                            
                                            var formValue = new FormData();
                                            formValue.append("api_key",AppKey);
                                            formValue.append("title",'FrontEndbuilder');

                                            $http.post('http://build.myappbuilder.com/api/apps.json', formValue,{
                                                transformRequest:angular.identity,
                                                headers:{'Content-Type' : undefined}
                                            })
                                            .success(function(data,status,headers,config){
                                                apikey = data.api_key;
                                                localStorage.apikey = data.api_key;
                                                $http({method: "GET",url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    
                                                    childResults = data;
                                                    for (var i = 0; i < childResults.length; i++) {
                                                        childResults[i].fullname = (childResults[i].fullname).trim();
                                                    }
                                                    $http({method: "GET",url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                    .success(function(data, status){
                                                        buttonArray = response;
                                                        $ionicLoading.hide();
                                                        $state.go('sample');
                                                        $ionicSideMenuDelegate.toggleLeft();
                                                    })
                                                    .error(function(data, status){
                                                        console.log(JSON.stringify(data));
                                                        $ionicLoading.hide()
                                                    })
                                                    
                                                })
                                                .error(function(data, status) {
                                                    console.log("subscribers: "+JSON.stringify(data));
                                                    $ionicLoading.hide();
                                                });
                                
                                            })
                                            .error(function(data,status,headers,config){
                                                $ionicLoading.hide();
                                                console.log(JSON.stringify(data));
                                            });

                                        }else{
                                                $http({method: "GET", url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status) {
                                                 
                                                    childResults = data;
                                                    for (var i = 0; i < childResults.length; i++) {
                                                        childResults[i].fullname = (childResults[i].fullname).trim();
                                                    }
                                                    $http({method: "GET", url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                    .success(function(data, status){
                                                        buttonArray = data;
                                                        $ionicLoading.hide();
                                                        $state.go('sample');
                                                        $ionicSideMenuDelegate.toggleLeft();
                                                    })
                                                    .error(function(data, status){
                                                        console.log(JSON.stringify(data));
                                                        $ionicLoading.hide()
                                                    })
                                                    
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide();
                                                });
                                        }
                                    },
                                    error:function(error,status){
                                        $ionicLoading.hide();
                                    }
                                    });
                                })
                                .error(function(data,status,headers,config){
                                    $ionicLoading.hide();
                                    $ionicPopup.alert({title: "FrontEndBuilder", template: "Something is wrong!"});
                                });
                            });
                });
            }else{
                console.log(error);
            }
            
        });
    }


    $scope.fbLogin = function(){
        OAuth.popup('facebook', {cache:false}, function(error, result) {
            if (!error) {
                console.log(result);

                authorizationResult1 = result;
                authorizationResult1.me().done(function(mydata) {
                    console.log(JSON.stringify(mydata));
                    $ionicLoading.show({
                            template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                        });

                        var formData = new FormData();
                        formData.append("uid",mydata.id);
                        formData.append("provider",'facebook');

                        

                            $http.post('http://build.myappbuilder.com/api/login.json', formData,{
                                transformRequest: angular.identity,
                                headers: {'Content-Type': undefined}
                            })
                            .success(function(data,status,headers,config){

                                var AppKey = data.api_key;
                                localStorage.sender_id = data.id;
                                $.ajax({
                                  type: "GET",
                                  url: "http://build.myappbuilder.com/api/apps.json",
                                  data:{'api_key':AppKey},
                                  cache: false,
                                  success:function(response){

                                    var appName = '';
                                    for (var i = 0; i < response.length; i++) {
                                        if(response[i].title == "FrontEndBuilder"){
                                            apikey = response[i].api_key;
                                            localStorage.apikey = response[i].api_key;
                                            appName = 1;
                                        }else{
                                          
                                        }
                                    }

                                    if(appName == ''){
                                        
                                        var formValue = new FormData();
                                        formValue.append("api_key",AppKey);
                                        formValue.append("title",'FrontEndBuilder');

                                        $http.post('http://build.myappbuilder.com/api/apps.json', formValue,{
                                            transformRequest:angular.identity,
                                            headers:{'Content-Type' : undefined}
                                        })
                                        .success(function(data,status,headers,config){
                                            apikey = data.api_key;
                                            localStorage.apikey = data.api_key;
                                            $http({method: "GET",url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                            .success(function(data, status){
                                                
                                                childResults = data;
                                                for (var i = 0; i < childResults.length; i++) {
                                                    childResults[i].fullname = (childResults[i].fullname).trim();
                                                }
                                                $http({method: "GET",url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    buttonArray = response;
                                                    $ionicLoading.hide();
                                                    $state.go('sample');
                                                    $ionicSideMenuDelegate.toggleLeft();
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide()
                                                })
                                                
                                            })
                                            .error(function(data, status) {
                                                console.log("subscribers: "+JSON.stringify(data));
                                                $ionicLoading.hide();
                                            });
                            
                                        })
                                        .error(function(data,status,headers,config){
                                            $ionicLoading.hide();
                                            console.log(JSON.stringify(data));
                                        });

                                    }else{
                                            $http({method: "GET", url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                            .success(function(data, status) {
                                         
                                                childResults = data;
                                                for (var i = 0; i < childResults.length; i++) {
                                                    childResults[i].fullname = (childResults[i].fullname).trim();
                                                }
                                                $http({method: "GET", url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    buttonArray = data;
                                                    $ionicLoading.hide();
                                                    $state.go('sample');
                                                    $ionicSideMenuDelegate.toggleLeft();
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide()
                                                })
                                                
                                            })
                                            .error(function(data, status){
                                                console.log(JSON.stringify(data));
                                                $ionicLoading.hide();
                                            });
                                    }
                                  },
                                  error:function(error,status){
                                    $ionicLoading.hide();
                                  }
                                });
                            
                            })
                            .error(function(data,status,headers,config){
                                $http({method: "POST", url: 'http://build.myappbuilder.com/api/users.json', cache:false, params:{"name":mydata.name,"username":mydata.name,'identity[uid]':mydata.id,'identity[provider]':'facebook'}})
                                .success(function(data,status,headers,config){
                                    
                                    var AppKey = data.api_key;
                                    localStorage.sender_id = data.id;
                                    $.ajax({
                                      type: "GET",
                                      url: "http://build.myappbuilder.com/api/apps.json",
                                      data:{'api_key':AppKey},
                                      cache: false,
                                      success:function(response){

                                        var appName = '';
                                        for (var i = 0; i < response.length; i++) {
                                            if(response[i].title == "FrontEndBuilder"){
                                                apikey = response[i].api_key;
                                                localStorage.apikey = response[i].api_key;
                                                appName = 1;
                                            }else{
                                             
                                            }
                                        }

                                        if(appName == ''){
                                            
                                            var formValue = new FormData();
                                            formValue.append("api_key",AppKey);
                                            formValue.append("title",'FrontEndBuilder');

                                            $http.post('http://build.myappbuilder.com/api/apps.json', formValue,{
                                                transformRequest:angular.identity,
                                                headers:{'Content-Type' : undefined}
                                            })
                                            .success(function(data,status,headers,config){
                                                apikey = data.api_key;
                                                localStorage.apikey = data.api_key;
                                                $http({method: "GET",url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    
                                                    childResults = data;
                                                    for (var i = 0; i < childResults.length; i++) {
                                                        childResults[i].fullname = (childResults[i].fullname).trim();
                                                    }
                                                    $http({method: "GET",url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                    .success(function(data, status){
                                                        buttonArray = response;
                                                        $ionicLoading.hide();
                                                        $state.go('sample');
                                                        $ionicSideMenuDelegate.toggleLeft();
                                                    })
                                                    .error(function(data, status){
                                                        console.log(JSON.stringify(data));
                                                        $ionicLoading.hide()
                                                    })
                                                    
                                                })
                                                .error(function(data, status) {
                                                    console.log("subscribers: "+JSON.stringify(data));
                                                    $ionicLoading.hide();
                                                });
                                
                                            })
                                            .error(function(data,status,headers,config){
                                                $ionicLoading.hide();
                                                console.log(JSON.stringify(data));
                                            });

                                        }else{
                                                $http({method: "GET", url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status) {
                                                  
                                                    childResults = data;
                                                    for (var i = 0; i < childResults.length; i++) {
                                                        childResults[i].fullname = (childResults[i].fullname).trim();
                                                    }
                                                    $http({method: "GET", url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                    .success(function(data, status){
                                                        buttonArray = data;
                                                        $ionicLoading.hide();
                                                        $state.go('sample');
                                                        $ionicSideMenuDelegate.toggleLeft();
                                                    })
                                                    .error(function(data, status){
                                                        console.log(JSON.stringify(data));
                                                        $ionicLoading.hide()
                                                    })
                                                    
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide();
                                                });
                                        }
                                    },
                                    error:function(error,status){
                                        $ionicLoading.hide();
                                    }
                                    });
                                })
                                .error(function(data,status,headers,config){
                                    $ionicLoading.hide();
                                    $ionicPopup.alert({title: "FrontEndBuilder", template: "Something is wrong!"});
                                });
                            });
                })
            }else{
                console.log(error);  
            }
        })
    }

    $scope.twitterLogin = function(){
       
        OAuth.popup('twitter', {cache:false}, function(error, result) { //cache means to execute the callback if the tokens are already present
                if (!error) {
                   
                    authorizationResult = result;
                    authorizationResult.me().done(function(me) {
                        
                        $ionicLoading.show({
                            template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                        });

                        var formData = new FormData();
                        formData.append("uid",me.raw.id);
                        formData.append("provider",'twitter');

                        

                            $http.post('http://build.myappbuilder.com/api/login.json', formData,{
                                transformRequest: angular.identity,
                                headers: {'Content-Type': undefined}
                            })
                            .success(function(data,status,headers,config){

                                var AppKey = data.api_key;
                                localStorage.sender_id = data.id;
                                $.ajax({
                                  type: "GET",
                                  url: "http://build.myappbuilder.com/api/apps.json",
                                  data:{'api_key':AppKey},
                                  cache: false,
                                  success:function(response){

                                    var appName = '';
                                    for (var i = 0; i < response.length; i++) {
                                        if(response[i].title == "FrontEndBuilder"){
                                            apikey = response[i].api_key;
                                            localStorage.apikey = response[i].api_key;
                                            appName = 1;
                                        }else{
                                          
                                        }
                                    }

                                    if(appName == ''){
                                        
                                        var formValue = new FormData();
                                        formValue.append("api_key",AppKey);
                                        formValue.append("title",'FrontEndBuilder');

                                        $http.post('http://build.myappbuilder.com/api/apps.json', formValue,{
                                            transformRequest:angular.identity,
                                            headers:{'Content-Type' : undefined}
                                        })
                                        .success(function(data,status,headers,config){
                                            apikey = data.api_key;
                                            localStorage.apikey = data.api_key;
                                            $http({method: "GET",url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                            .success(function(data, status){
                                                
                                                childResults = data;
                                                for (var i = 0; i < childResults.length; i++) {
                                                    childResults[i].fullname = (childResults[i].fullname).trim();
                                                }
                                                $http({method: "GET",url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    buttonArray = response;
                                                    $ionicLoading.hide();
                                                    $state.go('sample');
                                                    $ionicSideMenuDelegate.toggleLeft();
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide()
                                                })
                                                
                                            })
                                            .error(function(data, status) {
                                                console.log("subscribers: "+JSON.stringify(data));
                                                $ionicLoading.hide();
                                            });
                            
                                        })
                                        .error(function(data,status,headers,config){
                                            $ionicLoading.hide();
                                            console.log(JSON.stringify(data));
                                        });

                                    }else{
                                            $http({method: "GET", url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                            .success(function(data, status) {
                                                console.log(JSON.stringify(data));
                                                childResults = data;
                                                for (var i = 0; i < childResults.length; i++) {
                                                    childResults[i].fullname = (childResults[i].fullname).trim();
                                                }
                                                $http({method: "GET", url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    buttonArray = data;
                                                    $ionicLoading.hide();
                                                    $state.go('sample');
                                                    $ionicSideMenuDelegate.toggleLeft();
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide()
                                                })
                                                
                                            })
                                            .error(function(data, status){
                                                console.log(JSON.stringify(data));
                                                $ionicLoading.hide();
                                            });
                                    }
                                  },
                                  error:function(error,status){
                                    $ionicLoading.hide();
                                  }
                                });
                            
                            })
                            .error(function(data,status,headers,config){
                                $http({method: "POST", url: 'http://build.myappbuilder.com/api/users.json', cache:false, params:{"name":me.raw.name,"username":me.raw.screen_name,'identity[uid]':me.raw.id,'identity[provider]':'twitter'}})
                                .success(function(data,status,headers,config){
                                    
                                    var AppKey = data.api_key;
                                    localStorage.sender_id = data.id;
                                    $.ajax({
                                      type: "GET",
                                      url: "http://build.myappbuilder.com/api/apps.json",
                                      data:{'api_key':AppKey},
                                      cache: false,
                                      success:function(response){

                                        var appName = '';
                                        for (var i = 0; i < response.length; i++) {
                                            if(response[i].title == "FrontEndBuilder"){
                                                apikey = response[i].api_key;
                                                localStorage.apikey = response[i].api_key;
                                                appName = 1;
                                            }else{
                                               
                                            }
                                        }

                                        if(appName == ''){
                                            
                                            var formValue = new FormData();
                                            formValue.append("api_key",AppKey);
                                            formValue.append("title",'FrontEndBuilder');

                                            $http.post('http://build.myappbuilder.com/api/apps.json', formValue,{
                                                transformRequest:angular.identity,
                                                headers:{'Content-Type' : undefined}
                                            })
                                            .success(function(data,status,headers,config){
                                                apikey = data.api_key;
                                                localStorage.apikey = data.api_key;
                                                $http({method: "GET",url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status){
                                                    
                                                    childResults = data;
                                                    for (var i = 0; i < childResults.length; i++) {
                                                        childResults[i].fullname = (childResults[i].fullname).trim();
                                                    }
                                                    $http({method: "GET",url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                    .success(function(data, status){
                                                        buttonArray = response;
                                                        $ionicLoading.hide();
                                                        $state.go('sample');
                                                        $ionicSideMenuDelegate.toggleLeft();
                                                    })
                                                    .error(function(data, status){
                                                        console.log(JSON.stringify(data));
                                                        $ionicLoading.hide()
                                                    })
                                                    
                                                })
                                                .error(function(data, status) {
                                                    console.log("subscribers: "+JSON.stringify(data));
                                                    $ionicLoading.hide();
                                                });
                                
                                            })
                                            .error(function(data,status,headers,config){
                                                $ionicLoading.hide();
                                                console.log(JSON.stringify(data));
                                            });

                                        }else{
                                                $http({method: "GET", url: 'http://build.myappbuilder.com/api/subscribers.json', cache:false, params:{'api_key':apikey}})
                                                .success(function(data, status) {
                                                  
                                                    childResults = data;
                                                    for (var i = 0; i < childResults.length; i++) {
                                                        childResults[i].fullname = (childResults[i].fullname).trim();
                                                    }
                                                    $http({method: "GET", url: 'http://build.myappbuilder.com/api/buttons.json', cache:false, params:{'api_key':apikey}})
                                                    .success(function(data, status){
                                                        buttonArray = data;
                                                        $ionicLoading.hide();
                                                        $state.go('sample');
                                                        $ionicSideMenuDelegate.toggleLeft();
                                                    })
                                                    .error(function(data, status){
                                                        console.log(JSON.stringify(data));
                                                        $ionicLoading.hide()
                                                    })
                                                    
                                                })
                                                .error(function(data, status){
                                                    console.log(JSON.stringify(data));
                                                    $ionicLoading.hide();
                                                });
                                        }
                                    },
                                    error:function(error,status){
                                        $ionicLoading.hide();
                                    }
                                    });
                                })
                                .error(function(data,status,headers,config){
                                    $ionicLoading.hide();
                                    $ionicPopup.alert({title: "FrontEndBuilder", template: "Something is wrong!"});
                                });
                            });
                        
                    })
                    
                } else {
                    
                    console.log(error +" : "+result);
                }
        });
    }
     
 });

control.controller('registerCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicModal,$ionicScrollDelegate){
  $scope.registerPageSubmitFtn = function(){
    $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
    var Name = $('#regName').val();
    var regUserId = $('#regUserId').val();
    var regEmail = $('#regEmail').val();
    var regPassword = $('#regPassword').val();
    var regConfirmPassword = $('#regConfirmPassword').val();

    $.ajax({
      type: "POST",
      url: "http://build.myappbuilder.com/api/users.json",
      data:{'name':Name,'username':regUserId,'email':regEmail,'password':regPassword,'password_confirmation':regConfirmPassword},
      cache:false,
      success:function(response){
     
          appkeyResult = response;
          localStorage.sender_id = appkeyResult.id;

         if(appkeyResult.username){
                      localStorage.appwallLoginData = appkeyResult.username;
          }else{
                      localStorage.appwallLoginData = appkeyResult.name;
          }

          $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/users.json",
                  data:{'api_key':appkeyResult.api_key,'id':appkeyResult.id},
                  cache: false,
                  success:function(response){
                    $ionicLoading.hide();
                   appList = response;
                   localStorage["login"] = JSON.stringify(appkeyResult);
                     if(listGrid == ''){
						$state.go('sample');
                     }else if(listGrid == 'list'){
						$state.go('sample');
                     }else{
						$state.go('sample');
                     }
                     
                  },
                  error:function(error,status){
                    $ionicLoading.hide();
                    var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                  }
          });
      },
      error:function(error,status){
          $ionicLoading.hide();
         var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
      }
    });
  }

  $scope.registerBack = function(){
    $state.go('login');
  }
 
 });


var AppTitle = '';
var AppDesc = '';
var Appwall = '';
var appDesc='';
var appimg='';
var appdom='';
var appsubdomain='';
var splash='';
var store='';
var appbar='';
var appbutton='';
var appbuttonbar='';
var floatarray='';

control.controller('sampleCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){
          
                                                    
     $scope.appKey = appList.apps;
     
  $ionicScrollDelegate.scrollTop();

 $scope.AppEditor =false;

  for(var i =0;i<(appList.apps).length;i++){
    if((appList.apps[i]).app_image == null){
         (appList.apps[i]).app_image = "img/no_image.png";

    }
  }
  
 $scope.listViewClickFtn = function(appId,appTit){
	 
  $scope.appKey = appList.apps;

    appKey = appId;
    appTitle = appTit;
    $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
              $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/buttons.json",
                  data:{'api_key':appId},
                  cache: false,
                  success:function(response){
                    
              
                    buttonArray = response;

                    $.ajax({url:'http://build.myappbuilder.com/api/app_wall_settings.json', type:"GET",data:{'api_key':appKey},
                      success:function(response){
                          Appwall = response;
                          $ionicLoading.hide();
                           $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/book_custom_fields.json",
                        data:{'api_key':appKey},
                        cache: false,
                        success:function(response){
							$ionicLoading.hide();
							console.log(JSON.stringify(response));
							
							
                         for(var i=0;i<response.length;i++){ 
						
						if(response[i].key == 'Floating Social Icons'){
						console.log(JSON.stringify(response[i].key));
                         float = response[i].value;
                         floatid=response[i].id;
						}
						else if(response[i].key == 'Url'){
							console.log(JSON.stringify(response[i].key));
                         float1=response[i].value;
                         floatid1=response[i].id;
						}
                         if(response[i].key == 'Url'){
							 console.log(JSON.stringify(response[i].key));
							 console.log(JSON.stringify(float));
                         if(float == 'true')
							{$state.go('app2');}       
							else
							{$state.go('app');} 
							}
				
						} 
					
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                        }
              });
                     
                
                      },
                      error:function(){
                          $ionicLoading.hide();
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: 'Failure'
							 });
							 alertPopup.then(function(res) {
							 });
                      }
                    });
                    
                  },
                  error:function(error,status){
                    $ionicLoading.hide();
                    var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                  }
    });
    
      $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/apps/general.json",      
                  data:{'api_key':appId},
                  cache: false,
                  success:function(response){
         
                            $ionicLoading.hide();
                            appKey = appId;						
							colour=response.bar_color;
							buttoncolour=response.bar_button_color;
							button=response.button_color;						
				
                          },
                          error:function(error,status){
                            $ionicLoading.hide();
                             var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                          }
                    });

  }	
 
 $scope.newapps = function(){
  $state.go('newapp');     
  }; 
  
   $scope.logout = function(){
	  OAuth.clearCache('twitter');
            OAuth.clearCache('facebook');
            OAuth.clearCache('google');
  $state.go('login');     
  }
  
   $scope.editapps = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
  
   $scope.editApp = function(appId){
	$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
   
        $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/apps/general.json",      
                  data:{'api_key':appId},
                  cache: false,
                  success:function(response){
             
                            $ionicLoading.hide();
                            appKey = appId;
                            var response = response;	
							appTitle = response.title;
							appDesc = response.description;
							appimg = response.app_image;
							appdom=response.domain;
							appsubdomain=response.subdomain;					
							splash=response.splash_image;
							store=response.app_store_image;
							
							colour=response.bar_color;
							buttoncolour=response.bar_button_color; 			
							button= response.button_color; 
							 twitter=response.twitter_username;
							  fb=response.facebook_link;
							  gplus=response.gplus_link;
							  youtube=response.youtube_link;
							  flickr=response.flickr_link;
							  pin=response.pinterest_link;
							  fbkey=response.facebook_key;
							  fbsecret=response.facebook_secret;
							  twitterkey=response.twitter_key;
							  twittersecret=response.twitter_secret;
							  gpluskey=response.gplus_key;
							  gplussecret=response.gplus_secret;
								
								floatarray=response.book_custom_values;
								
									console.log(JSON.stringify(floatarray));
									
								for(var i=0;i<response.book_custom_values.length;i++){ 
									if(response.book_custom_values[i].key == 'Floating Social Icons'){
										
										console.log(JSON.stringify(response.book_custom_values[i].key));
											
										editfloat = response.book_custom_values[i].value;
										editfloatid=response.book_custom_values[i].id;
										
										console.log(JSON.stringify(editfloat));
														
									}
									else if(response.book_custom_values[i].key == 'Url'){
							
										console.log(JSON.stringify(response.book_custom_values[i].key));
										
										editfloat1=response.book_custom_values[i].value;		
										editfloatid1=response.book_custom_values[i].id;
                           
										console.log(JSON.stringify(editfloat1));
									}
									
								} 
							$state.go('editApp');
				
                          },
                          error:function(error,status){
                            $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                          }
                    });
  }
  
    $scope.deleteApp = function(appId,item){
    var confirmPopup = $ionicPopup.confirm({
     title: 'App Delete!',
     template: 'Are you sure you want to delete this App?'
    });
    confirmPopup.then(function(res) {
     if(res) {
        $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
   
        $.ajax({
                  type: "DELETE",
                  url: "http://build.myappbuilder.com/api/apps.json",
                  data:{'api_key':appkeyResult.api_key,'book_api_key':appId},
                  cache: false,
                  success:function(response){
                     
                  
                     $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/users.json",
                          data:{'api_key':appkeyResult.api_key,'id':appkeyResult.id},
                          cache: false,
                          success:function(response){
						
                            $ionicLoading.hide();
                            appList = response;
                            $scope.appKey.splice($scope.appKey.indexOf(item), 1);
                            $state.reload();
                          },
                          error:function(error,status){
                            $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);
                           var alertPopup = $ionicPopup.alert({
							   title: 'FrontEndBuilder',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
                          }
                    });
                  },
                  error:function(error,status){
                    $ionicLoading.hide();
               
                  }
        });

      } else {
         console.log('You are not sure');
       }
     });
  }
});
  
var colour = '';
var buttoncolour = '';
var button='';
var testimg='';
var Data='';
var appdomain='';
var chapterEdit='';
var imageapp='';
var imagesplash='';
var imageappstore='';

 function readURL1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
					$('#splash').attr('src', e.target.result); 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
control.controller('newappCtrl',function($scope,$state,$ionicActionSheet,$ionicModal,$ionicPopup,$ionicLoading,$sce,$http,$ionicScrollDelegate){

imagesplash = '';
imageapp = '';
imageappstore = '';

    $ionicScrollDelegate.scrollTop();

  var imageField_name;
  
 $scope.home = function(){
   $state.go('sample');
  }
  
$scope.bar_color = 'bar-positive';
$scope.button_color = 'button-positive';
$scope.bar_button_color ='button-positive'; 

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor searchreplace",
            "wordcount visualblocks visualchars code fullscreen insertdatetime",
            "table contextmenu emoticons textcolor",

        ],
        toolbar1: "insertfile undo redo | styleselect | bold | italic  | bullist | numlist | outdent  indent | link image | forecolor  backcolor | alignleft aligncenter alignright alignjustify",
        
          file_browser_callback: function(field_name, url, type, win) {
            
            $('#width').attr("type","number");
            $('#height').attr("type","number");
            $('#imageSelect').click();
            imageField_name = field_name;
            $('#width').blur(function(){
              
              if($('#width').val() == ''){
                $('#width').val("300");
                $('#height').val('');
              }else if($('#width').val() <= 320){
              }else{

            

                $('#width').val("300");
                $('#height').val('');
              }
            });
            $('#height').blur(function(){
              if($('#height').val() <= 320){
                $('#height').val('300');
              }
            });
        },
        image_advtab: true,
        height: "200px",
        width: "100%",
        resize: true,
  };

            $("#imageSelect").change(function(event){

              $('#imageSelect').off('click');
              event.preventDefault();
            
            $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
            
              var formData = new FormData();
              if(elementId){
                formData.append('api_key', appKey);
                formData.append('id', elementId);
              }else{
                formData.append('api_key', 'd4b2e8f5473bd5023797436ce9556620');
                formData.append('id', '2188');
              }
              
              formData.append('image', this.files[0]);
              var _URL = window.URL || window.webkitURL;
              if ((this.files[0])) {
                  var img = new Image();
                  img.onload = function() {
                      console.log(this.width + " " + this.height);
                      
                      if(this.width <= 640){
                        $('#width').val(this.width);
                        $('#height').val(this.height);
                      }else{
                        $('#width').val("640");
                        $('#height').val('');
                      }

                      $http.post('http://build.myappbuilder.com/api/elements/images.json', formData, {
                          transformRequest: angular.identity,
                          headers: {'Content-Type': undefined}
                      })
                      .success(function(data,status, headers, config){
                          $ionicLoading.hide(); 
                          $('#'+imageField_name).val(data.url);
                      })
                      .error(function(data,status, headers, config){
                           $ionicLoading.hide(); 
                          navigator.notification.alert(JSON.stringify(data));
                      })
                  };
                  img.onerror = function() {
                      $ionicLoading.hide(); 
                  
                      navigator.notification.alert(
                          'Not a valid image file: ' + this.files[0].type,  
                          alertDismissed,      
                          'iBooks',            
                          'Done'                  
                      );

                      
                  };
                  img.src = _URL.createObjectURL(this.files[0]);
              }

              

            });
	
$scope.appcreate = {}
$scope.book = {}

 function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				  $('#app').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#appimage").change(function(){
      readURL(this);
  });
 


  $("#splashimage").change(function(){
      readURL1(this);
  });
  
    function readURL2(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			    $('#store').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#storeimage").change(function(){
      readURL2(this);
  }); 
  

    $scope.bar = function() {

                   $ionicActionSheet.show({

                                          titleText: 'Choose Bar Color',

                                          buttons: [

                                                    { text: '<p><img src="img/light.png" style="align:left;"/>&nbsp;Light&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/stable.png" style=""/>&nbsp;Stable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/positive.png" style=""/>&nbsp;Positive&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/calm.png" style=""/>&nbsp;Calm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/balanced.png" style=""/>&nbsp;Balanced&nbsp;</p>' },

                                                    { text: '<p><img src="img/energized.png" style=""/>&nbsp;Energized</p>' },

                                                    { text: '<p><img src="img/assertive.png" style=""/>&nbsp;Assertive&nbsp;</p>' },

                                                    { text: '<p><img src="img/royal.png" style=""/>&nbsp;Royal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/dark.png" style=""/>&nbsp;Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    ],

                                          

                                          cancelText: 'Cancel',

                                          cancel: function() {

                                       

                                          },

                                          buttonClicked: function(index) {

                                      

                                          if(index==0){

                                          barcolor = 'bar-light';

                                          $scope.book.bar_color = 'light';

                                          $scope.bar_color=barcolor;
                                          
										  $('#barimg').attr({'src':"img/light.png"});										 
											 
                                          $state.reload();
											
                                          }

                                          else if(index==1){

                                          barcolor = 'bar-stable';

                                          $scope.book.bar_color = 'stable';

                                          $scope.bar_color=barcolor;

										  $('#barimg').attr({'src':"img/stable.png"});
 
                                          $state.reload();

                                          }

                                          else if(index==2){

                                          barcolor = 'bar-positive';

                                          $scope.book.bar_color = 'positive';

                                          $scope.bar_color=barcolor;

										  $('#barimg').attr({'src':"img/positive.png"});
 
                                          $state.reload();

                                          }

                                          else if(index==3){

                                          barcolor = 'bar-calm';

                                          $scope.book.bar_color = 'calm';

                                          $scope.bar_color=barcolor;
                                          
										  $('#barimg').attr({'src':"img/calm.png"});
 
                                          $state.reload();

                                          }

                                          else if(index==4){

                                          barcolor = 'bar-balanced';

                                          $scope.book.bar_color = 'balanced';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#barimg').attr({'src':"img/balanced.png"});                                          

                                          $state.reload();

                                          }

                                          else if(index==5){

                                          barcolor = 'bar-energized';

                                          $scope.book.bar_color = 'energized';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#barimg').attr({'src':"img/energized.png"});                                          

                                          $state.reload();

                                          }

                                          else if(index==6){

                                          barcolor = 'bar-assertive';

                                          $scope.book.bar_color = 'assertive';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#barimg').attr({'src':"img/assertive.png"});

                                          $state.reload();

                                          }

                                          else if(index==7){

                                          barcolor = 'bar-royal';
$ionicPopup
                                          $scope.book.bar_color = 'royal';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#barimg').attr({'src':"img/royal.png"});

                                          $state.reload();

                                          }

                                          else if(index==8){

                                          barcolor = 'bar-dark';

                                          $scope.book.bar_color = 'dark';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#barimg').attr({'src':"img/dark.png"});

                                          $state.reload();

                                          }

                                          else{											  
										  
                                          $state.reload();

                                          }

                                          

                                          return true;

                                          },

                                          destructiveButtonClicked: function() {

                                          alert('DESTRUCT');

                                          return true;

                                          }

                                          });

                   };     
             
    
    $scope.barbutton = function() {    

                   $ionicActionSheet.show({

                                          titleText: 'Choose Button Color',

                                          buttons: [

                                                    { text: '<p><img src="img/light.png" style="align:left;"/>&nbsp;Light&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/stable.png" style=""/>&nbsp;Stable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/positive.png" style=""/>&nbsp;Positive&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/calm.png" style=""/>&nbsp;Calm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/balanced.png" style=""/>&nbsp;Balanced&nbsp;</p>' },

                                                    { text: '<p><img src="img/energized.png" style=""/>&nbsp;Energized</p>' },

                                                    { text: '<p><img src="img/assertive.png" style=""/>&nbsp;Assertive&nbsp;</p>' },

                                                    { text: '<p><img src="img/royal.png" style=""/>&nbsp;Royal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/dark.png" style=""/>&nbsp;Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    ],

                                          

                                          cancelText: 'Cancel',

                                          cancel: function() {

                                        

                                          },

                                          buttonClicked: function(index2) {               

                                          if(index2==0){

                                          bar_button_color = 'button-light';

                                          $scope.book.bar_button_color = 'light';
                                
                                          $scope.bar_button_color = bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/light.png"});

                                          $state.reload();

                                          }

                                          else if(index2==1){

                                          bar_button_color = 'button-stable';

                                          $scope.book.bar_button_color = 'stable';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/stable.png"});

                                          $state.reload();

                                          }

                                          else if(index2==2){

                                          bar_button_color = 'button-positive';

                                          $scope.book.bar_button_color = 'positive';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/positive.png"});

                                          $state.reload();

                                          }

                                          else if(index2==3){

                                          bar_button_color = 'button-calm';

                                          $scope.book.bar_button_color = 'calm';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/calm.png"});

                                          $state.reload();

                                          }

                                          else if(index2==4){

                                          bar_button_color = 'button-balanced';

                                          $scope.book.bar_button_color = 'balanced';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/balanced.png"});

                                          $state.reload();

                                          }

                                          else if(index2==5){

                                          bar_button_color = 'button-energized';

                                          $scope.book.bar_button_color = 'energized';

                                          $scope.bar_button_color = bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/energized.png"});

                                          $state.reload();

                                          }

                                          else if(index2==6){

                                          bar_button_color = 'button-assertive';

                                          $scope.book.bar_button_color = 'assertive';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/assertive.png"});

                                          $state.reload();

                                          }

                                          else if(index2==7){

                                          bar_button_color = 'button-royal';

                                          $scope.book.bar_button_color = 'royal';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/royal.png"});
		
                                          $state.reload();

                                          }

                                          else if(index2==8){

                                          bar_button_color = 'button-dark';

                                          $scope.book.bar_button_color = 'dark';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#barbuttonimg').attr({'src':"img/dark.png"});

                                          $state.reload();

                                          }

                                          else{

                                          $state.reload();

                                          }                                         

                                          return true;

                                          },

                                          destructiveButtonClicked: function() {

                                          alert('DESTRUCT');

                                          return true;

                                          }

                                          });

                   };  
 
   
   $scope.button = function() {    

                   $ionicActionSheet.show({

                                          titleText: 'Choose Button Color',

                                          buttons: [

                                                    { text: '<p><img src="img/light.png" style="align:left;"/>&nbsp;Light&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/stable.png" style=""/>&nbsp;Stable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/positive.png" style=""/>&nbsp;Positive&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/calm.png" style=""/>&nbsp;Calm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/balanced.png" style=""/>&nbsp;Balanced&nbsp;</p>' },

                                                    { text: '<p><img src="img/energized.png" style=""/>&nbsp;Energized</p>' },

                                                    { text: '<p><img src="img/assertive.png" style=""/>&nbsp;Assertive&nbsp;</p>' },

                                                    { text: '<p><img src="img/royal.png" style=""/>&nbsp;Royal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/dark.png" style=""/>&nbsp;Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    ],

                                          

                                          cancelText: 'Cancel',

                                          cancel: function() {

                                   

                                          },

                                          buttonClicked: function(index1) {


                                          if(index1==0){
												
                                          button_color = 'button-light';

                                          $scope.book.button_color = 'light';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/light.png"});                                        

                                          $state.reload();

                                          }

                                          else if(index1==1){

                                          button_color = 'button-stable';

                                          $scope.book.button_color = 'stable';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/stable.png"});

                                          $state.reload();

                                          }

                                          else if(index1==2){

                                          button_color = 'button-positive';

                                          $scope.book.button_color = 'positive';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/positive.png"});

                                          $state.reload();

                                          }

                                          else if(index1==3){

                                          button_color = 'button-calm';

                                          $scope.book.button_color = 'calm';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/calm.png"});

                                          $state.reload();

                                          }

                                          else if(index1==4){

                                          button_color = 'button-balanced';

                                          $scope.book.button_color = 'balanced';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/balanced.png"});

                                          $state.reload();

                                          }

                                          else if(index1==5){

                                          button_color = 'button-energized';

                                          $scope.book.button_color = 'energized';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/energized.png"});

                                          $state.reload();

                                          }

                                          else if(index1==6){

                                          button_color = 'button-assertive';

                                          $scope.book.button_color = 'assertive';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/assertive.png"});

                                          $state.reload();

                                          }

                                          else if(index1==7){

                                          button_color = 'button-royal';

                                          $scope.book.button_color = 'royal';

                                          $scope.button_color=button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/royal.png"});

                                          $state.reload();

                                          }

                                          else if(index1==8){

                                          button_color = 'button-dark';

                                          $scope.book.button_color = 'dark';

                                          $scope.button_color = button_color;
                                          
                                          $('#buttonimg').attr({'src':"img/dark.png"});

                                          $state.reload();

                                          }

                                          else{											 

                                          $state.reload();

                                          }

                                          return true;

                                          },

                                          destructiveButtonClicked: function() {

                                          alert('DESTRUCT');

                                          return true;

                                          }

                                          });

                   };  
                   

      
$scope.updatesettings = function(){                  
            
    if(($scope.appcreate.gridAppTitle)){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

      $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/apps.json",
          data:{'api_key':appkeyResult.api_key,'title':$scope.appcreate.gridAppTitle,'description':$scope.appcreate.mypost},
          success:function(response){
	
	  var response = response;	
            appKey = response.api_key;
            appTitle = response.title;
				
	 var formData = new FormData();  
	   
	    if($("#storeimage").get(0).files[0] != undefined){
			   formData.append('app_store_image',$("#storeimage").get(0).files[0]);
		   }
		 
		    if($("#splashimage").get(0).files[0] != undefined){
			   formData.append('splash_image',$("#splashimage").get(0).files[0]);
		   }
		 
		    if($("#appimage").get(0).files[0] != undefined){
			   formData.append('app_image',$("#appimage").get(0).files[0]);
		   }
		   
		 if($scope.book.domain != undefined){
			  formData.append('domain',$scope.book.domain);	
		   }
		    if($scope.book.subdomain != undefined){
			     formData.append('subdomain',$scope.book.subdomain);
			 }

		if($scope.book.bar_color != undefined){
			   formData.append('bar_color', $scope.book.bar_color);
		   }
		   
		   if($scope.book.bar_button_color != undefined){
			   formData.append('bar_button_color', $scope.book.bar_button_color);
		   }
		   
		   if($scope.book.button_color != undefined){
			   formData.append('button_color', $scope.book.button_color); 
		   }
		   
            formData.append('api_key',appKey);
            formData.append('title',$scope.appcreate.gridAppTitle);
            formData.append('description',$scope.appcreate.mypost);		

       
          
         $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/apps/settings/general.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
					
                var response1 = response;		
                	colour=response1.bar_color;
							buttoncolour=response1.bar_button_color; 			
							button= response1.button_color; 
					
           appList='';       
                   $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/users.json",
                  data:{'api_key':appkeyResult.api_key,'id':appkeyResult.id},
                  cache: false,
                  success:function(response){
				
                    $ionicLoading.hide();
                    appList = response;
                    localStorage["login"] = JSON.stringify(appkeyResult);
                   
          				},
                  error:function(error,status){
                    $ionicLoading.hide();
                    var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'New App',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                  }
            });
            $ionicLoading.hide();
                 $state.go('newapp1');
                 
                },error:function(error){
                  $ionicLoading.hide();
             var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'New App',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
   
		},
	});
		
         }, error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'New App',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });
    
      }else{
           
     var alertPopup = $ionicPopup.alert({
       title: 'New App',
       template: 'Enter App Title'
     });
     alertPopup.then(function(res) {
     });
    }
  }
  

});

control.controller('naviconCtrl',function($scope,$state,$ionicPopup, $ionicLoading,$ionicScrollDelegate){ 

  $ionicScrollDelegate.scrollTop();

$scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

      
   $scope.homenavbutton = function(){
	$state.go('newapp');
  } 
   $scope.addbutton = function(){
   $state.go('newbutton');
  } 
    $scope.backnavbutton= function(){
     $state.go('social');
   }
   
     $scope.levels = function(){
		
		  $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/buttons.json",
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){
                    
            
                    buttonArray = response;

                    $.ajax({url:'http://build.myappbuilder.com/api/app_wall_settings.json', type:"GET",data:{'api_key':appKey},
                      success:function(response){
                          Appwall = response;
                          $ionicLoading.hide();
                     $state.go('app');
                      },
                      error:function(){
                          $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: appTitle,
       template: 'Failure'
     });
     alertPopup.then(function(res) {
     });
                      }
                    });
                    
                  },
                  error:function(error,status){
                    $ionicLoading.hide();
                   var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: appTitle,
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                  }
    });
   $state.go('app');
  } 
});

function readURL3(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
	    		$('#buttonimg').attr('src', e.target.result); 
	    		 $('#buttonimg').css({'width':'50px','height':'50px'});
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
var image='';  

control.controller('newbuttonCtrl',function($scope,$state,$ionicActionSheet,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

  $ionicScrollDelegate.scrollTop();

 $scope.appTitle = appTitle;
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.buttoncreate = {}


  $("#buttonimage").change(function(){
	  localStorage.xxx = document.getElementById("buttonimage").value ;
      readURL3(this);
  });
  

$scope.create = function(){
	
    if(($scope.buttoncreate.title) && ($("#buttonimage").get(0).files[0]))
	{	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      	
     var formData = new FormData();
	
        formData.append('api_key',appKey);
        formData.append('title',$scope.buttoncreate.title);
        formData.append('image', $("#buttonimage").get(0).files[0]);

      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
		$.ajax({
                type: "POST",
                url: "http://build.myappbuilder.com/api/buttons.json",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(response){
					var response= response;
                    $ionicLoading.hide();
               
                    buttonId = response.id;
                    buttonTitle = response.title;
                   $state.go('elements');
                },
                error:function(error,status){
                    $ionicLoading.hide();
                  
                   var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Button',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                }
            });
			  
	}
   else{
			var formData = new FormData();
        var methodData = '';
        
          methodData = 'POST';
          urlData = "http://build.myappbuilder.com/api/buttons/via_url.json";
          formData.append('api_key',appKey);
          formData.append('title',$scope.buttoncreate.title);
          var letter = ($scope.buttoncreate.title).charAt(0).toUpperCase();
          
          formData.append('image', 'http://nuatransmedia.com/iBookImages/'+letter+'.png');
        
        
          $ionicLoading.show({
                content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
              });
        
            $.ajax({
                type: methodData,
                url: urlData,
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(response){
				
                    $ionicLoading.hide();
               
                    buttonId = response.id;
                    buttonTitle = response.title;
                    $state.go('elements');
                },
                error:function(error,status){
                    $ionicLoading.hide();
                
                    var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Button',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                }
            });          
		}
    
  }	
   $scope.navbutton = function(){
	$state.go('navicon');
  } 
   $scope.homebutton = function(){
   $state.go('newapp');
  } 
   $scope.backbutton= function(){
    $state.go('navicon');
   }
   
});

var chapterImage='';
var buttontype='';

control.controller('appCtrl',function($scope,$state,$ionicModal,$ionicLoading,$ionicPopup,$http){
    
 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.appwallgoFun = function(){
    $state.go('appWall');
  }
  
 var chapterArray = [];
  for (var i = 0; i < buttonArray.length; i++) {
        chapterArray.push(buttonArray[i]);
    
    
  }
  
	$scope.items = chapterArray;

 $scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  $scope.AppEditor = false;
  
    $scope.logbuttonlist = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }

 $scope.chapterClick = function(id,title){

    buttonId = id;
    buttonTitle = title;
   
    $state.go('chapterlist');
  }
 $scope.editButton = function(id,title,image){
	    
    buttonId = id;
    buttonTitle = title;
    chapterImage = image;

   $state.go('buttonlist');
  }
 $scope.newchapterGo = function(){
    chapterEdit = '';
    $state.go('newbutton');
  }
  
 $scope.backbuttonlist = function(){

    $state.go('sample');
  }

$scope.subs=function(){

    $state.go('sublist');

  }

$scope.float1=float1;

$scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
     $ionicLoading.show({
                content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
              });
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
    var ids = $scope.items.map(function(btn){return btn.id});

    $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: appKey, ids: ids})
    .success(function(data,status,headers,config){
        $ionicLoading.hide();
    })
    .error(function(data,status,headers,config){
        var total = JSON.parse(data);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Button',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
         $ionicLoading.hide();
    })
        
  };
  
   $scope.deleteButton = function(id){
    
    var confirmPopup = $ionicPopup.confirm({
       title: 'Button Delete!',
       template: 'Are you sure you want to delete this Button?'
    });
    
    confirmPopup.then(function(res,event) {
      
      if(res) {
        
         $ionicLoading.show({
                content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
              });
          $.ajax({
                      type: "DELETE",
                      url: "http://build.myappbuilder.com/api/buttons.json",
                      data: {"api_key":appKey,"id":id},
                      cache: false,
                      success:function(response){
                        $.ajax({
                            type: "GET",
                            url: "http://build.myappbuilder.com/api/buttons.json",
                            data:{'api_key':appKey},
                            cache: false,
                            success:function(response){
								 
                              buttonArray= response;
                              chapterArray = [];
                              for (var i = 0; i < buttonArray.length; i++) {
                                    chapterArray.push(buttonArray[i]);
                                 
                                
                              }
                              $scope.items = chapterArray;
                              $state.reload();
                              setTimeout(function(){  $ionicLoading.hide();}, 1000);

                            },
                            error:function(error,status){
                              $ionicLoading.hide();
                             var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Button',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                            }
                        });
                      },
                      error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Button',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                      }
          });
       } else {
         
       }
     });

}

 });

control.controller('elementsCtrl',function($scope,$state,$ionicLoading,$ionicPopup){ 

$scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


 $scope.createText = function(){
	$state.go('pic');
  } 
 $scope.createContact = function(){
	$state.go('form');
  }   
 $scope.createVideo = function(){
	$state.go('video');
  }  
   $scope.createAudio = function(){
	$state.go('audio');
  }  
 $scope.createMap = function(){
	$state.go('map');
  }  
   $scope.createWeb = function(){
	$state.go('web');
  }  
    $scope.createRss = function(){
	$state.go('rss');
  }  
    $scope.createtask = function(){

	$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	 $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/create_task_list.json",
          data:{'api_key':appKey,'button_id':buttonId},
          success:function(response){
			 
	
			  $ionicLoading.hide();
			taskelement=response.id;
           $state.go('taskedit');
           
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Task List',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });

  } 
 $scope.navelement = function(){
	$state.go('navicon');
  }      
 $scope.homeelement = function(){
	$state.go('newapp');
  }
  $scope.backelement= function(){
     $state.go('newbutton');
    }
  
});

var elementimg='';

control.controller('picCtrl',function($scope,$state,$ionicModal, $ionicScrollDelegate,$ionicPopup,$ionicLoading,$sce,$http,$ionicScrollDelegate){

  $ionicScrollDelegate.scrollTop();

$scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


 $scope.AppEditor = false;

  
$scope.para = {}
$scope.textCreate = {}

$scope.createtext = function(){	
    
  if($scope.para.title){

      $ionicLoading.show({
              template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              
      });

      var formData1 = new FormData();
           formData1.append('api_key',appKey);
           formData1.append('id',elementId);       

         $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/create_default.json",
          data:{'api_key':appKey,'button_id':buttonId,'title':$scope.para.title,'text':$scope.textCreate.textpic},
          success:function(response){
			 elementId = response.id;   
			 elementTitle = response.title;
			 elementDesc = response.text;
			  $ionicLoading.hide();  
               $state.go('picedit');  
               
          },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });
    }else{
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: 'Enter The Title'
     });
     alertPopup.then(function(res) {
     });
    }
  }
 
 $scope.navtext = function(){
	$state.go('newbutton');
  } 
 
 $scope.hometext = function(){
	$state.go('newapp');
  } 
  $scope.backtext= function(){
     $state.go('elements');
   }
    $scope.nexttext= function(){
     $state.go('picedit');
   }
 
  $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold | italic  | bullist | numlist | outdent  indent | link image | forecolor backcolor | alignleft aligncenter alignright alignjustify",
         file_browser_callback: function(field_name, url, type, win) {
            
            $('#width').attr("type","number");
            $('#height').attr("type","number");
            $('#imageSelect1').click();
            imageField_name = field_name;
            $('#width').blur(function(){
              
              if($('#width').val() == ''){
                $('#width').val("300");
                $('#height').val('');
              }else if($('#width').val() <= 320){
              }else{


                $('#width').val("300");
                $('#height').val('');
              }
            });
            $('#height').blur(function(){
              if($('#height').val() <= 320){
                $('#height').val('300');
              }
            });
        },
        image_advtab: true,
        height: "200px",
        width: "100%",
        resize: true,
  };

            $("#imageSelect1").change(function(event){

              $('#imageSelect1').off('click');
              event.preventDefault();
            
            $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
            
              var formData = new FormData();
              if(elementId){
                formData.append('api_key', appKey);
                formData.append('id', elementId);
              }else{
                formData.append('api_key', 'd4b2e8f5473bd5023797436ce9556620');
                formData.append('id', '2188');
              }
              
              formData.append('image', this.files[0]);
              var _URL = window.URL || window.webkitURL;
              if ((this.files[0])) {
                  var img = new Image();
                  img.onload = function() {
                      console.log(this.width + " " + this.height);
                      
                      if(this.width <= 640){
                        $('#width').val(this.width);
                        $('#height').val(this.height);
                      }else{
                        $('#width').val("640");
                        $('#height').val('');
                      }

                      $http.post('http://build.myappbuilder.com/api/elements/images.json', formData, {
                          transformRequest: angular.identity,
                          headers: {'Content-Type': undefined}
                      })
                      .success(function(data,status, headers, config){
                          $ionicLoading.hide(); 
                          $('#'+imageField_name).val(data.url);
                      })
                      .error(function(data,status, headers, config){
                           $ionicLoading.hide(); 
                          navigator.notification.alert(JSON.stringify(data));
                      })
                  };
                  img.onerror = function() {
                      $ionicLoading.hide(); 
                      navigator.notification.alert(
                          'Not a valid image file: ' + this.files[0].type, 
                          alertDismissed,        
                          'iBooks',            
                          'Done'                 
                      );

                      
                  };
                  img.src = _URL.createObjectURL(this.files[0]);
              }

              

            });
	
});

var contentTitle = '';
var contentText = '';
var contentadditional = '';
var contentimage = '';

control.controller('chapterlistCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 
  
 $scope.newContentGo = function(){
	$state.go('elements');
  }  
 $scope.homechapterlist = function(){
	$state.go('sample');
  }   
 $scope.backchapterlist = function(){
     $state.go('app');
  }  
  	
	
 for (var i = 0; i < buttonArray.length; i++) {
      if(buttonId == buttonArray[i].id){
        elementArray = buttonArray[i].elements;
      }
  }
  
   $scope.deleteContent = function(id){

    elementId = id;
    var confirmPopup = $ionicPopup.confirm({
     title: 'Element Delete!',
     template: 'Are you sure you want to delete this Element?'
    });
    confirmPopup.then(function(res) {
     if(res) {
          $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements.json",
            data: {"api_key":appKey,"id":elementId},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/buttons.json",
                        data:{'api_key':appKey},
                        cache: false,
                        success:function(response){
                          buttonArray = response;
                          $ionicLoading.hide();
                        
                          for (var i = 0; i < buttonArray.length; i++) {
							  if(buttonId == buttonArray[i].id){
								elementArray = buttonArray[i].elements;
							
							  }
						  }
						  $scope.elementArray = elementArray;
                          $state.reload();  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Chapter',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Chapter',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
            }
          });
     } else {
       console.log('You are not sure');
     }
   });
}

 
 $scope.elementArray = elementArray;
 
 $scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  $scope.buttonTitle = buttonTitle;
  $scope.AppEditor = false;

  $scope.logtextlist = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }

$scope.float1=float1;

 $scope.subTitClickFtn = function(id,title,type,email,text,url,rssurl,audioimg,audiourl,videoimg,videourl,tags,frame){

    elementId = id;
    elementtype=type;
    elementemail = email;
	elementurl = url;
	elementtext= text;
	elementtitle= title;
	elementrssurl = rssurl;
	contentimg = audioimg;
	contentaudio = audiourl;
	contentvideo = videourl;
	contentvideothumb = videoimg;
	contentvideoframe=frame;
	tagging=tags;

    for (var i = 0; i < elementArray.length; i++) {
      if(elementtype == "audio"){
		$state.go('previewaudio');
      }
      
    if(elementtype == "rss_feed"){
		$state.go('home');
      }

    if(elementtype == "default"){
		
		$.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
							previewpic =response;
						 $state.go('previewpic');   
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              
		
      }
      
     if(elementtype == "tasks_list"){
		$state.go('previewtask');
      }
      
      if(elementtype == "web_page"){
            var ref = window.open(elementurl, '_blank', 'location=yes');
            ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		
      }
      
      if(elementtype == "contact_form"){
		$state.go('previewform');
      }
      
       if(elementtype == "map"){
		 $state.go('showmap');
      }
      
       if(elementtype == "video"){
		$state.go('previewvideo');
      }
   }
    }

 $scope.buttonAppwallgoFun = function(){
    $state.go('buttonAppWall');
  }
  
  if(Appwall.button_wall == '0'){
    $scope.buttonAppWall = false;
  }else if(Appwall.button_wall == '1'){
    $scope.buttonAppWall = true;
  }
  
});

var newarray = [];
var customid = '';
var customtitle = '';

control.controller('newapp1Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

 $ionicScrollDelegate.scrollTop();
 
 $scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.appcre = {}
  
  $scope.AppEditor = false;
  
  $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/apps/general.json",      
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){
					
                            $ionicLoading.hide();
                           appdom1=response.domain;
							appsubdomain1=response.subdomain;							
					
						if((appsubdomain1) && (appdom1)){
							$scope.appcre.floaturl = 'http://'+appsubdomain1+'.'+appdom1;
			
							}
							else
							{
							$scope.appcre.floaturl='';
							}
                          },
                          error:function(error,status){
                            $ionicLoading.hide();
                             var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: appTitle,
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                          }
 });
 
   $scope.appcre.customvalue = 'false';

$scope.createnewapp1 = function(){
	 
	 if($scope.appcre.floaturl){
		 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/book_custom_fields.json",
			data:{'api_key':appKey,'title':'Floating Social Icons','value':$scope.appcre.customvalue},
            success:function(response){
				 $ionicLoading.hide();  
			   $state.go('social');	       
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: appTitle,
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });

    $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/book_custom_fields.json",
          data:{'api_key':appKey,'title':'Url','value':$scope.appcre.floaturl},
          success:function(response){
		

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/book_custom_fields.json",
                        data:{'api_key':appKey},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();  
						   $state.go('social');	
                        },
                        error:function(error,status){
                          var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: appTitle,
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });         
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: appTitle,
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });   
  }

}


$scope.nextpage = function(){	
	$state.go('social');	
}
$scope.homeapp1 = function(){	
	$state.go('sample');	
}

$scope.backnewapp1 = function(){
	$state.go('newapp');
}

});

var twitter='';
var fb='';
var gplus='';
var youtube='';
var flickr='';
var pin='';
var fbkey='';
var fbsecret='';
var twitterkey='';
var twittersecret='';
var gpluskey='';
var gplussecret='';
                  
control.controller('socialCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

 $ionicScrollDelegate.scrollTop();
 
 $scope.appTitle = appTitle;	
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


 $scope.navsocial = function(){
   $state.go('navicon');
 } 
     
 $scope.homesocial = function(){
   $state.go('newapp');
 }
  $scope.backsocial= function(){
     $state.go('newapp1');
 }

      
$scope.book = {}

$scope.updateSocialSettings = function(){              
  
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
           var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('twitter_link',$scope.book.twitter_username);
            formData.append('twitter_key',$scope.book.twitter_key);
            formData.append('twitter_secret',$scope.book.twitter_secret);
            formData.append('facebook_link',$scope.book.facebook_link);
            formData.append('facebook_key',$scope.book.facebook_key);
            formData.append('facebook_secret',$scope.book.facebook_secret);
            formData.append('gplus_link',$scope.book.gplus_link);	
            formData.append('gplus_key', $scope.book.gplus_key);
            formData.append('gplus_secret', $scope.book.gplus_secret);
            formData.append('youtube_link', $scope.book.youtube_link);
            formData.append('flickr_link', $scope.book.flickr_link);
            formData.append('pinterest_link', $scope.book.pinterest_link);

           $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/apps/settings/social.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();         
                 $state.go('navicon');
                 
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Social',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                }
            });

  }
  
});

var customeditid = '';
var piccustom = '';
var imagepic='';
var amenities='';   
    
control.controller('piceditCtrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$ionicActionSheet,$ionicPopup,$ionicModal){ 

 $ionicScrollDelegate.scrollTop();
  
$scope.textCreateedit = {}
$scope.editpic={}
$scope.contentCreate={}

$scope.textCreateedit.edittitle=elementTitle;
$scope.textCreateedit.edittext=elementDesc;

$scope.appTitle = appTitle;	
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


 $scope.AppEditor = false;

  $scope.logedittext = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
   $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
$scope.updatetext = function(){            
	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);       
           formData.append('title',$scope.textCreateedit.edittitle);
            formData.append('text',$scope.textCreateedit.edittext);

  if((($scope.textCreateedit.edittitle)!=elementTitle) || (($scope.textCreateedit.edittext)!=elementDesc)){  

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_default.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){

                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                }
            });
		}
		else
		{
		   $ionicLoading.hide();
		}	
    
 }
 
  function readURL4(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
					 $('#editpictext').attr({'src':e.target.result});
				$('#editpictext').css({'width':'50px','height':'50px'});
			   $('#text').attr('src', e.target.result); 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
      
  $("#textimages").change(function(){
      readURL4(this);
  });
             
$scope.upload = function(){     
	         
  $('#editpictext').attr({'src':"img/no_image.png"});	        

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
  
   
      var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);
          formData.append('image',$("#textimages").get(0).files[0]);


            $.ajax({
                  type: "POST",
                  url: "http://build.myappbuilder.com/api/elements/images.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){                
						$("#textimages").val('');
							
						 $.ajax({
								type: "GET",
								url: "http://build.myappbuilder.com/api/elements/images.json",
								data:{'api_key':appKey,'id':elementId},
								cache: false,
								success:function(response){
									var response = response;
								  $ionicLoading.hide();

									 $scope.editpicpage = response;
								   $state.reload();   
								  
								  
								},
								error:function(error,status){
								   $ionicLoading.hide();
								  var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
								}
					     });              
         
                 
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                }
            }); 
 }
 
   
$scope.removepicCustom = function(id){
 
  piccustom = id;

   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/images.json",
            data: {"api_key":appKey,"id":piccustom,'element_id':elementId},
            cache: false,
            success:function(response){
             $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
							var response = response;
                          $ionicLoading.hide();

						     $scope.editpicpage = response;
						
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });             
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
            }
          });
 
}

$scope.ok = function(){                 

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

  var datatag=$scope.contentCreate.elementTag;
 if(datatag == ''){
			  console.log(datatag);
			 amenities='';
		 }
		 else{
			  console.log(datatag);
for(var i=0;i<datatag.length;i++){

               

                   if(i==0){

                   amenities = datatag[i].text;

                   }

                   else{

                   amenities = amenities+','+datatag[i].text;

                   }

                   }
			   }
          
            	   $.ajax({
                        type: "POST",
                        url: "http://build.myappbuilder.com/api/elements/tags.json",
                        data:{'api_key':appKey,'id':elementId,'tags':amenities},
                        cache: false,
                        success:function(response){    
					
							tagid=response.id;      
                          $ionicLoading.hide();                         
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);
           
							 var alertPopup = $ionicPopup.alert({
							   title: 'Picture and Text',
							   template: total.error
							 });
							 alertPopup.then(function(res) {
							 });
												}
									  });     
              
                       
        $.ajax({
                        type: "DELETE",
                        url: "http://build.myappbuilder.com/api/elements/tags.json",
                        data:{'api_key':appKey,'id':tagid},
                        cache: false,
                        success:function(response){    
						
                          $ionicLoading.hide();                         
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });  
 }
 
  $scope.AppEditor = false;

$scope.createpicedit = function(){
	
    if($scope.editpic.customeditTitle){
      if($scope.editpic.customeditvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.editpic.customeditTitle,'value':$scope.editpic.customeditvalue},
          success:function(response){
			 customeditid = response.id;
			
              
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
							var response = response;
                          $ionicLoading.hide();
						    $scope.edittxtpage = response;
						 
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });   
              $scope.editpic.customeditTitle='';
              $scope.editpic.customeditvalue='';          
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });
    }
      }else{
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: 'Enter Title And Value'
     });
     alertPopup.then(function(res) {
     });
    }
   
  }


$scope.removetxtCustomValue = function(id){

    customeditid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customeditid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();

						    $scope.edittxtpage = response;
						
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Picture and Text',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
            }
          });
}

$scope.navedittext = function(){
   $state.go('navicon');
 } 
 $scope.homeedittext = function(){
   $state.go('newapp');
 } 
  $scope.backedittext = function(){
   $state.go('pic');
 } 
 
 
});

var formelementid='';

control.controller('formCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.navform = function(){
   $state.go('navicon');
 } 
$scope.homeform = function(){
   $state.go('newapp');
 } 
$scope.backform= function(){
     $state.go('elements');
   }
 
$scope.form={}

$scope.createform = function(){

if($scope.form.email){
	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/create_contact_form.json",
          data:{'api_key':appKey,'button_id':buttonId,'email':$scope.form.email},
          success:function(response){
		
			formEmail = response.email;
			formelementid = response.id;
			 $ionicLoading.hide();	
          $state.go('formedit');
            	
          },
          error:function(error){
            $ionicLoading.hide();
             var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });
    }else{
           
     var alertPopup = $ionicPopup.alert({
         title: 'Contact Form',
       template: 'Enter The Email'
     });
     alertPopup.then(function(res) {
     });
    }

}
	
});

var customeditformid = '';
var newaddressid='';

control.controller('formeditCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.formedit={}
$scope.editform={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.formedit.editemail = formEmail;

$scope.updateform = function(){

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',formelementid);       
            formData.append('email_to_send_to',$scope.formedit.editemail);       

  if(($scope.formedit.editemail)!=formEmail){  

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_contact_form.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                }
            });
		}
		else
		{
			$ionicLoading.hide();
		}
}

$scope.createformcustom = function(){

    if($scope.editform.customformTitle){
      if($scope.editform.customformvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':formelementid,'title':$scope.editform.customformTitle,'value':$scope.editform.customformvalue},
          success:function(response){
		
			 customeditformid = response.id;
    

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':formelementid},
                        cache: false,
                        success:function(response){
							
						
                          $ionicLoading.hide();
						    $scope.editformpage = response;

						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });  
              $scope.editform.customformTitle='';
               $scope.editform.customformvalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
          }
      });
    }
      }else{
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: 'Enter Title And Value'
     });
     alertPopup.then(function(res) {
     });
    }
   
  }

$scope.removeformCustomValue = function(id){

    customeditformid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customeditformid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':formelementid},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						
						    $scope.editformpage = response;
						
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);
           
     var alertPopup = $ionicPopup.alert({
       title: 'Contact Form',
       template: total.error
     });
     alertPopup.then(function(res) {
     });
            }
          });
}


$scope.naveditform = function(){
   $state.go('navicon');
 } 
$scope.homeeditform = function(){
   $state.go('newapp');
 } 
 $scope.backeditform = function(){
     $state.go('form');
 } 

 
});
var videoimg='';
var videotitle='';
var videodesc='';
var videoelement='';
var imagevideo='';


 var videoId = 'videoframe';
var scaleFactor = 1.25;
var snapshots = [];

function capture(video, scaleFactor) {
    if(scaleFactor == null){
        scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
   
        canvas.width  = w;
        canvas.height = h;
    var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
    return canvas;
} 

function shoot(){
    var video  = document.getElementById(videoId);
    var output = document.getElementById('output');
    var canvas = capture(video, scaleFactor);
        canvas.onclick = function(){
            window.open(this.toDataURL());
        };
    snapshots.unshift(canvas);
    output.innerHTML = '';
    for(var i=0; i<1; i++){
 dataURL = snapshots[i].toDataURL("image/png");
 
   
       output.appendChild(snapshots[i]);

    }
    
}

var dataURL='';
var videoframebase='';
var videoframe='';

control.controller('videoCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate,$ionicActionSheet,$stateParams,$http,$location,$ionicPopup,$rootScope,$ionicModal){ 

$ionicScrollDelegate.scrollTop();

function readURL5(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#videoimg').attr({'src':"img/btn_video.png"});
             $('#videoimg').css({'width':'50px','height':'50px'}); 			 
           $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  } 
    
   $scope.AppEditor = true;
  
    $scope.logbuttonlist = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
                                              
  $("#video").change(function(){ 

	$state.reload();
	var objectURL = window.URL.createObjectURL(this.files[0]);
		
	$('#videoframe').attr({'src':objectURL});
      readURL5(this);

  });
 

  function readURL14(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
					 $('#videothumbimg').attr({'src':e.target.result});
				$('#videothumbimg').css({'width':'50px','height':'50px'});
			   $('#videothumbimg').attr('src', e.target.result); 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
      
  $("#videothumb").change(function(){
      readURL14(this);
  });
    
$scope.videocreate={}

$scope.appTitle = appTitle;   
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 
      
$scope.createvideo = function(){
		
	 videoframebase = dataURL.replace("data:image/png;base64,","");
	
if((((($("#video").get(0).files[0].size) / 1024 / 1024) <= 10)) && (videoframebase)){
    
       $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
      var formData = new FormData();
      formData.append('api_key', appKey);
      formData.append('button_id', buttonId);
      formData.append('title', $scope.videocreate.title);
      formData.append('description',$scope.videocreate.desc);
      formData.append('video',$("#video").get(0).files[0]);
      formData.append('video_frame_base64',videoframebase);
      formData.append('video_frame_title','image.png');
      
  if($('#videothumb').get(0).files[0]){
            formData.append('video_thumbnail',$('#videothumb').get(0).files[0]);   
       }else{
            formData.append('video_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
       }
                            
	  $http.post('http://build.myappbuilder.com/api/elements/create_video.json', formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
					
						   videoimg=data.video.url;
						   videotitle=data.title;
						   videodesc=data.text;
						   videoelement = data.id;
						   videothumb = data.video.thumbnail;
						   videoframe=data.video.video_frame;
					
						  $ionicLoading.hide();
						  $state.go('videoedit');
					  })
					  .error(function(data,status, headers, config){
					     var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        $ionicLoading.hide();
                     
                      });
}  
 else{
          var alertPopup = $ionicPopup.alert({
             title: 'MAB',
             template: 'Please choose Video File below 10MB or Video Frame'
           });
           alertPopup.then(function(res) {
            
           });
    }
   
}

$scope.navvideo = function(){
   $state.go('navicon');
 } 
$scope.homevideo = function(){
   $state.go('newapp');
 } 
 $scope.backvideo= function(){
     $state.go('elements');
  }
    
});

var mapid='';
var custommapid='';
var addressid='';
var addressname='';

control.controller('mapCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.createmapaddr={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.createmap = function(){
	
if($scope.createmapaddr.maptitle){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

	  $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/create_map.json",
          data:{'api_key':appKey,'button_id':buttonId,'text':$scope.createmapaddr.maptitle},
          success:function(response){
			  var response = response;
			
			    mapid=response.id;  
			    
             $.ajax({
                        type: "POST",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':mapid,'address':$scope.createmapaddr.maptitle},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						addressid=response.id;
						addressname=response.address;
                         $state.go('mapedit');	 
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
										}
              });            
            
          },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:'Enter The Address'
					 });
					 alertPopup.then(function(res) {
					 });
    }

}

$scope.navmap = function(){
   $state.go('navicon');
 } 
$scope.homemap = function(){
   $state.go('newapp');
 } 
 
 $scope.backmap= function(){
    $state.go('elements');
 } 
 
});

control.controller('mapeditCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.editmap={}
$scope.createeditmap={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.mapeditcustom = function(){

	$('#mapcustitle').val('');
	$('#mapcusvalue').val('');
	

    if($scope.editmap.custommaptitle){
      if($scope.editmap.custommapvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

      $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':mapid,'title':$scope.editmap.custommaptitle,'value':$scope.editmap.custommapvalue},
          success:function(response){
			 custommapid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':mapid},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
                        
						    $scope.editmappage = response;
               
						   $state.reload();   					  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removemapCustomValue = function(id){

    custommapid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":custommapid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':mapid},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();

						    $scope.editmappage = response;
					
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

$scope.naveditmap = function(){
   $state.go('navicon');
 } 
$scope.homeeditmap = function(){
   $state.go('newapp');
 }
 $scope.backeditmap = function(){
     $state.go('map');
}
  

$scope.addAddress = function(){

    if($scope.createeditmap.title){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/addresses.json",
          data:{'api_key':appKey,'id':mapid,'address':$scope.createeditmap.title},
          success:function(response){
			newaddressid=response.id;
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':mapid},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
                        
						    $scope.addresses = response;
               
                   $scope.createeditmap.title='';   
						   $state.reload();                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
                       
              });              
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
          
      });
    }
      else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: 'Enter The Address'
					 });
					 alertPopup.then(function(res) {
					 });
          }
    }
   
  

$scope.updateAddress = function(id,updateaddress){
	
	
	  
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

          var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('element_id',mapid);       
            formData.append('id',id);  
             formData.append('address',updateaddress); 
            
       $.ajax({
          type: "PUT",
          url: "http://build.myappbuilder.com/api/elements/addresses.json",
          data:formData,
           cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){

                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
    }
 $scope.deleteAddress = function(id){
	 
 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
  
  
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/addresses/"+id+".json",
            data: {'api_key':appKey,'id':mapid},
            cache: false,
            success:function(response){
		
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':mapid},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						$scope.addresses = response;
            
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
 
}   
	
});

var audioelement='';
var audiotitle='';
var audiotext='';
var audioimg='';
var check=false;

control.controller('audioCtrl',function($scope,$state,$ionicLoading,$ionicScrollDelegate,$stateParams,$http,$location,$ionicPopup,$rootScope){ 

$ionicScrollDelegate.scrollTop();

$scope.navaudio = function(){
   $state.go('navicon');
 } 
$scope.homeaudio = function(){
   $state.go('newapp');
 }
 $scope.backaudio= function(){
    $state.go('elements');
   }
 
 function readURL10(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			 $('#audiourlimg').attr({'src':"img/btn_audio.png"});
             $('#audiourlimg').css({'width':'50px','height':'50px'}); 			 
           $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#audio").change(function(){

    readURL10(this);  
  });
  
   function readURL11(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			 $('#audioimg').attr('src', e.target.result);	
			 	$('#audioimg').css({'width':'50px','height':'50px'}); 	
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#audiothumb").change(function(){

     readURL11(this); 
  });

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 
 	
$scope.audiocreate={}

$scope.createaudio = function(){	

if((($("#audio").get(0).files[0].size) / 1024 / 1024) <= 10){
	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
    
      
	 var formData = new FormData();
	  formData.append('api_key', appKey);
      formData.append('button_id', buttonId);
      formData.append('title', $scope.audiocreate.title);
      formData.append('description',$scope.audiocreate.desc);
      formData.append('audio', $("#audio").get(0).files[0]);    
     
      if($('#audiothumb').get(0).files[0]){
            formData.append('audio_thumbnail',$('#audiothumb').get(0).files[0]);   
       }else{
            formData.append('audio_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
       }
                            
	  $http.post('http://build.myappbuilder.com/api/elements/create_audio.json', formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){

						  $ionicLoading.hide();
						  $state.go('audioedit');
						  audioelement=data.id;
						  audiotitle=data.title;
						  audiotext=data.text;
						  audioimg=data.audio.thumbnail;
						  audio=data.audio.url;
					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                        var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      });
}else{
          var alertPopup = $ionicPopup.alert({
             title: 'MAB',
             template: 'Please choose Audio File below 10MB!'
           });
           alertPopup.then(function(res) {
           });
    }

}
 
});

var customeditaudioid='';

control.controller('audioeditCtrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$stateParams,$http,$location,$ionicPopup,$rootScope){ 
 
 $ionicScrollDelegate.scrollTop();
  
function readURL12(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			$('#audioediturlimg').attr({'src':"img/btn_audio.png"});
             $('#audioediturlimg').css({'width':'50px','height':'50px'}); 					
          $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#editaudio").change(function(){

   check=true;
    readURL12(this);   
  });
	  
  
   function readURL13(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			 $('#audioeditimg').attr('src', e.target.result);	
			 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#editaudiothumb").change(function(){
	  	  
     check=true;
    readURL13(this);   
  });
  
$scope.naveditaudio = function(){
   $state.go('navicon');
 } 
$scope.homeeditaudio = function(){
   $state.go('newapp');
 }
 $scope.backeditaudio = function(){
    $state.go('audio');
  }

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 	
$scope.createeditaudio={}

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.createeditaudio.editaudiotitle=audiotitle;
$scope.createeditaudio.editaudiotext=audiotext;
if(audioimg){
    $('#audioeditimg').attr({'src':audioimg});
    	$('#audioeditimg').css({'width':'50px','height':'50px'}); 		
  }
 if(audio){
    $('#editaudio').attr({'url':audio});   
    $('#audioediturlimg').attr({'src':audioimg});
    $('#audioediturlimg').css({'width':'50px','height':'50px'}); 		
	
  }

$scope.updateaudio = function(){            
	
		
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
  
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',audioelement);       
           formData.append('title',$scope.createeditaudio.editaudiotitle);
           formData.append('text',$scope.createeditaudio.editaudiotext);
            if(check==true){  
				if((($("#editaudio").get(0).files[0].size) / 1024 / 1024) <= 10){
					formData.append('audio', $("#editaudio").get(0).files[0]);
				}
				else{
					  var alertPopup = $ionicPopup.alert({
						 title: 'MAB',
						 template: 'Please choose Audio File below 10MB!'
					   });
					   alertPopup.then(function(res) {
					   });
				}
				
            if($('#editaudiothumb').get(0).files[0]){
					formData.append('audio_thumbnail', $('#editaudiothumb').get(0).files[0]);
			}else{
					formData.append('audio_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
			}
          
	  }else{
		  
		       $('#editaudio').attr({'url':audio}); 
		       $('#audioediturlimg').attr({'src':audioimg});
               $('#audioediturlimg').css({'width':'50px','height':'50px'}); 		
		       $('#audioeditimg').attr({'src':audioimg});
    	       $('#audioeditimg').css({'width':'50px','height':'50px'}); 	
	   }        
         $http.put('http://build.myappbuilder.com/api/elements/update_audio.json', formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
			
						  $ionicLoading.hide();

					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                         var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      });


}


 $scope.cuseditaudio={}
 
$scope.createaudioedit = function(){
	
    if($scope.cuseditaudio.customeditaudioTitle){
      if($scope.cuseditaudio.customeditaudiovalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':audioelement,'title':$scope.cuseditaudio.customeditaudioTitle,'value':$scope.cuseditaudio.customeditaudiovalue},
          success:function(response){
			 customeditaudioid = response.id;
     
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':audioelement},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						    $scope.editaudiopage = response;
						
						   $state.reload();   
                      
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.cuseditaudio.customeditaudioTitle='';
              $scope.cuseditaudio.customeditaudiovalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: 'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }


$scope.removeaudioCustomValue = function(id){

    customeditaudioid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customeditaudioid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':audioelement},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						  
						    $scope.editaudiopage = response;
					
						   $state.reload();    						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

 
var webelement='';
var webname='';
var weburl='';
var webdesc='';

control.controller('webCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.navlive = function(){
   $state.go('navicon');
 } 
$scope.homelive = function(){
   $state.go('newapp');
 }
$scope.backlive= function(){
      $state.go('elements');
 }
 
$scope.createweb={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.createwebpage = function(){

if($scope.createweb.livewebname){

if($scope.createweb.liveweburl){
		
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/create_web_page.json",
          data:{'api_key':appKey,'button_id':buttonId,'title':$scope.createweb.livewebname,'url':$scope.createweb.liveweburl,'description':$scope.createweb.livewebdesc},
          success:function(response){
	
			 $ionicLoading.hide();
			    webelement=response.id;
			    webname=response.title;
			    webdesc=response.text;
			    weburl= response.live_url;
            $state.go('webedit');	
          },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
  }
    }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: 'Enter The Name and Valid Url'
					 });
					 alertPopup.then(function(res) {
					 });
    }

}
 
});

var customwebid='';

control.controller('webeditCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 
	
	$ionicScrollDelegate.scrollTop();
	
	$scope.naveditweb = function(){
   $state.go('navicon');
 } 
$scope.homeeditweb = function(){
   $state.go('newapp');
 }
$scope.backeditweb = function(){
  $state.go('web');
}
  
	$scope.editcusweb={}
	$scope.createwebedit={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.createwebedit.editwebname = webname;
$scope.createwebedit.editweburl= weburl;
$scope.createwebedit.editwebdesc=webdesc

$scope.updateweb = function(){

 if(($scope.createwebedit.editweburl)!=weburl){  
	 
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
			var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',webelement);  
            formData.append('title',$scope.createwebedit.editwebname);  
             formData.append('text',$scope.createwebedit.editwebdesc);    
            formData.append('live_url',$scope.createwebedit.editweburl); 
                  
    

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_web_page.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();
                
                },error:function(error){
                  $ionicLoading.hide();
                   var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		}
		
		else
		{	
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: 'Update the live url'
					 });
					 alertPopup.then(function(res) {
					 });
		}
}

$scope.createcusweb = function(){	

    if($scope.editcusweb.cuseditwebtitle){
      if($scope.editcusweb.cuseditwebvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':webelement,'title':$scope.editcusweb.cuseditwebtitle,'value':$scope.editcusweb.cuseditwebvalue},
          success:function(response){
			 customwebid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':webelement},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
                      
						    $scope.editwebpage = response;
          
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });  
              $scope.editcusweb.cuseditwebtitle='';
              $scope.editcusweb.cuseditwebvalue='';            
            },
          error:function(error){
            $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: 'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

	 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

$scope.removewebCustomValue = function(id){

    customwebid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customwebid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':webelement},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();

						    $scope.editwebpage = response;
                
						   $state.reload();   			  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	

});

var rsselement='';
var rssname='';
var rssdesc='';
var rssurl='';
var customrssid='';


control.controller('rssCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

	$scope.navrss = function(){
   $state.go('navicon');
 } 
$scope.homerss = function(){
   $state.go('newapp');
 } 
  $scope.backrss= function(){
         $state.go('elements');
   }
  
	$scope.createrss={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.createrssform = function(){

if($scope.createrss.rssname){
	
	if($scope.createrss.rssurl){
		
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/create_rss.json",
          data:{'api_key':appKey,'button_id':buttonId,'title':$scope.createrss.rssname,'url':$scope.createrss.rssurl,'description':$scope.createrss.rssdesc},
          success:function(response){
		
			    rsselement=response.id;
			    rssname=response.title;
			    rssdesc=response.text;
			    rssurl= response.rss_url;
			      $ionicLoading.hide();
            $state.go('rssedit');	
          },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
  }
    }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Web',
					   template: 'Enter The Name and Valid Url'
					 });
					 alertPopup.then(function(res) {
					 });
    }

}

});

control.controller('rsseditCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 
	
	$ionicScrollDelegate.scrollTop();
	
	$scope.naveditrss = function(){
   $state.go('navicon');
 } 
$scope.homeeditrss = function(){
   $state.go('newapp');
 }
$scope.backeditrss = function(){
    $state.go('rss');
}
  
  
	$scope.editcusrss={}
	$scope.createrssedit={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.createrssedit.editrssname = rssname;
$scope.createrssedit.editrssurl= rssurl;
$scope.createrssedit.editrssdesc=rssdesc

$scope.updaterss = function(){

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
     if((($scope.createrssedit.editrssname)!=rssname) && (($scope.createrssedit.editrssdesc)!=rssdesc) && (($scope.createrssedit.editrssurl)!=rssurl)){
  
		
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',rsselement);    
            formData.append('rss_url',$scope.createrssedit.editrssurl);
           formData.append('text',$scope.createrssedit.editrssdesc);   
           formData.append('title',$scope.createrssedit.editrssname);      

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_rss.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){

                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		}
                  
                   else
                   {
                   $ionicLoading.hide();
                   }
			
			
}

$scope.createcusrss = function(){
	

    if($scope.editcusrss.cuseditrsstitle){
      if($scope.editcusrss.cuseditrssvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':rsselement,'title':$scope.editcusrss.cuseditrsstitle,'value':$scope.editcusrss.cuseditrssvalue},
          success:function(response){
			 customrssid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':rsselement},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						    $scope.editrsspage = response;
           
						   $state.reload();   
 
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.editcusrss.cuseditrsstitle='';
              $scope.editcusrss.cuseditrssvalue='';
                           
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: 'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

	 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

$scope.removerssCustomValue = function(id){

    customrssid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customrssid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':rsselement},
                        cache: false,
                        success:function(response){
							 
                          $ionicLoading.hide();
						    $scope.editrsspage = response;
                 
						   $state.reload();   		  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	

});

var customtaskid='';
var taskelement='';
var tasklistid='';


control.controller('taskeditCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.navedittask = function(){
   $state.go('navicon');
 } 
$scope.homeedittask = function(){
   $state.go('newapp');
 }
 $scope.backedittask = function(){
     $state.go('task');
 }
  
  
	$scope.editcustask={}
	$scope.createedittask={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.addeditTask = function(task,desc){

	if($scope.createedittask.taskTitle)
	{
	
	$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
       $.ajax({
                        type: "POST",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':taskelement,'title':$scope.createedittask.taskTitle,'description':$scope.createedittask.taskDescription},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
                    	
                          tasklistid=response.id;			  
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':taskelement},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide();
                        
						    $scope.tasks = response;
              
                           $scope.createedittask.taskTitle='';  
                           $scope.createedittask.taskDescription='';    
						   $state.reload();   

                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
	
		  }else
		  {
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: 'Enter The Title'
					 });
					 alertPopup.then(function(res) {
					 });
		  }           
	
}

$scope.deleteTask = function(id){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/tasks/"+id+".json",
            data: {"api_key":appKey,'id':taskelement},
            cache: false,
            success:function(response){
		
               $ionicLoading.hide();
               $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':taskelement},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
                    
						    $scope.tasks = response;
                  
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	

$scope.updateTask = function(updateid,title,desc){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
            
        var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('element_id',taskelement);    
            formData.append('id',updateid);
            formData.append('title',title);   
            formData.append('description',desc);     
           
           
          $.ajax({
            type: "PUT",
            url: "http://build.myappbuilder.com/api/elements/tasks.json",
            data: formData,
             cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){

                  $ionicLoading.hide();
                
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	


$scope.createtaskcustom = function(){

    if($scope.editcustask.customtasktitle){
      if($scope.editcustask.customtaskvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':taskelement,'title':$scope.editcustask.customtasktitle,'value':$scope.editcustask.customtaskvalue},
          success:function(response){
			 customtaskid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':taskelement},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
                        
						    $scope.taskpage = response;
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.editcustask.customtasktitle='';
              $scope.editcustask.customtaskvalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template: total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removetaskCustomValue = function(id){

    customtaskid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customtaskid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':taskelement},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
	   
						     $scope.taskpage = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	


});

var imageeditsplash='';
var imageeditstore='';
var imageeditapp='';

control.controller('editAppCtrl',function($scope,$state,$ionicScrollDelegate,$ionicActionSheet,$ionicModal,$ionicPopup,$ionicLoading,$sce,$http,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.homeappedit = function(){
	
	$state.go('sample');
} 
 
  if(appimg){
    $('#editapp').attr({'src':appimg});
    $('#editapp').css({'width':'50px','height':'50px'});
  }
  if(splash){
    $('#editsplash').attr({'src':splash});
    $('#editsplash').css({'width':'50px','height':'50px'});
  }
  if(store){
    $('#editstore').attr({'src':store});
    $('#editstore').css({'width':'50px','height':'50px'});
  }
  
  $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

function readURL300(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
					$('#editsplash').attr('src', e.target.result); 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
  function readURL301(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				  $('#editapp').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#editappimage").change(function(){
      readURL301(this);
  });
 


  $("#editsplashimage").change(function(){
      readURL300(this);
  });
  
    function readURL302(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			    $('#editstore').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#editstoreimage").change(function(){
      readURL302(this);
  }); 
  
  
	$scope.editbook={}
	$scope.editappcreate={}
      
$scope.editappcreate.editgridAppTitle=appTitle;
$scope.editappcreate.editmypost=appDesc;
$scope.editbook.editdomain=appdom;
$scope.editbook.subdomain=appsubdomain;

$scope.editbook.bar_color=colour;
$scope.editbook.bar_button_color=buttoncolour;
$scope.editbook.button_color=button;

if(colour == 'undefined'){	
$('#editbarimg').attr({'src':"img/positive.png"});
$scope.bar_color = 'bar-positive';
}
else
{
$('#editbarimg').attr({'src':"img/"+colour+".png"});
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$('#editbarbuttonimg').attr({'src':"img/positive.png"});
$scope.bar_button_color ='button-positive'; 
}
else
{
$('#editbarbuttonimg').attr({'src':"img/"+buttoncolour+".png"});
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$('#editbuttonimg').attr({'src':"img/positive.png"});
$scope.button_color = 'button-positive';
}
else
{
$('#editbuttonimg').attr({'src':"img/"+button+".png"});
$scope.button_color='button-'+button;
}

      
     $scope.editbar = function() {

                   $ionicActionSheet.show({

                                          titleText: 'Choose Bar Color',

                                          buttons: [

                                                    { text: '<p><img src="img/light.png" style="align:left;"/>&nbsp;Light&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/stable.png" style=""/>&nbsp;Stable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/positive.png" style=""/>&nbsp;Positive&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/calm.png" style=""/>&nbsp;Calm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/balanced.png" style=""/>&nbsp;Balanced&nbsp;</p>' },

                                                    { text: '<p><img src="img/energized.png" style=""/>&nbsp;Energized</p>' },

                                                    { text: '<p><img src="img/assertive.png" style=""/>&nbsp;Assertive&nbsp;</p>' },

                                                    { text: '<p><img src="img/royal.png" style=""/>&nbsp;Royal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/dark.png" style=""/>&nbsp;Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    ],

                                          

                                          cancelText: 'Cancel',

                                          cancel: function() {


                                          },

                                          buttonClicked: function(index) {


                                          if(index==0){

                                          barcolor = 'bar-light';

                                          $scope.editbook.bar_color = 'light';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/light.png"});

                                          $state.reload();

                                          }

                                          else if(index==1){

                                          barcolor = 'bar-stable';

                                          $scope.editbook.bar_color = 'stable';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/stable.png"});

                                          $state.reload();

                                          }

                                          else if(index==2){

                                          barcolor = 'bar-positive';

                                          $scope.editbook.bar_color = 'positive';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/positive.png"});

                                          $state.reload();

                                          }

                                          else if(index==3){

                                          barcolor = 'bar-calm';

                                          $scope.editbook.bar_color = 'calm';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/calm.png"});

                                          $state.reload();

                                          }

                                          else if(index==4){

                                          barcolor = 'bar-balanced';

                                          $scope.editbook.bar_color = 'balanced';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/balanced.png"});

                                          $state.reload();

                                          }

                                          else if(index==5){

                                          barcolor = 'bar-energized';

                                          $scope.editbook.bar_color = 'energized';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/energized.png"});

                                          $state.reload();

                                          }

                                          else if(index==6){

                                          barcolor = 'bar-assertive';

                                          $scope.editbook.bar_color = 'assertive';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/assertive.png"});

                                          $state.reload();

                                          }

                                          else if(index==7){

                                          barcolor = 'bar-royal';

                                          $scope.editbook.bar_color = 'royal';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/royal.png"});

                                          $state.reload();

                                          }

                                          else if(index==8){

                                          barcolor = 'bar-dark';

                                          $scope.editbook.bar_color = 'dark';

                                          $scope.bar_color=barcolor;
                                          
                                          $('#editbarimg').attr({'src':"img/dark.png"});

                                          $state.reload();

                                          }

                                          else{

                                          $state.reload();

                                          }

                                          

                                          return true;

                                          },

                                          destructiveButtonClicked: function() {

                                          alert('DESTRUCT');

                                          return true;

                                          }

                                          });

                   };     
             
    
    $scope.editbarbutton = function() {    

                   $ionicActionSheet.show({

                                          titleText: 'Choose Button Color',

                                          buttons: [

                                                    { text: '<p><img src="img/light.png" style="align:left;"/>&nbsp;Light&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/stable.png" style=""/>&nbsp;Stable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/positive.png" style=""/>&nbsp;Positive&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/calm.png" style=""/>&nbsp;Calm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/balanced.png" style=""/>&nbsp;Balanced&nbsp;</p>' },

                                                    { text: '<p><img src="img/energized.png" style=""/>&nbsp;Energized</p>' },

                                                    { text: '<p><img src="img/assertive.png" style=""/>&nbsp;Assertive&nbsp;</p>' },

                                                    { text: '<p><img src="img/royal.png" style=""/>&nbsp;Royal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/dark.png" style=""/>&nbsp;Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    ],

                                          

                                          cancelText: 'Cancel',

                                          cancel: function() {


                                          },

                                          buttonClicked: function(index2) {               

                                          if(index2==0){

                                          bar_button_color = 'button-light';

                                          $scope.editbook.bar_button_color = 'light';
                                
                                          $scope.bar_button_color = bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/light.png"});

                                          $state.reload();

                                          }

                                          else if(index2==1){

                                          bar_button_color = 'button-stable';

                                          $scope.editbook.bar_button_color = 'stable';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/stable.png"});

                                          $state.reload();

                                          }

                                          else if(index2==2){

                                          bar_button_color = 'button-positive';

                                          $scope.editbook.bar_button_color = 'positive';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/positive.png"});

                                          $state.reload();

                                          }

                                          else if(index2==3){

                                          bar_button_color = 'button-calm';

                                          $scope.editbook.bar_button_color = 'calm';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/calm.png"});

                                          $state.reload();

                                          }

                                          else if(index2==4){

                                          bar_button_color = 'button-balanced';

                                          $scope.editbook.bar_button_color = 'balanced';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/balanced.png"});

                                          $state.reload();

                                          }

                                          else if(index2==5){

                                          bar_button_color = 'button-energized';

                                          $scope.editbook.bar_button_color = 'energized';

                                          $scope.bar_button_color = bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/energized.png"});

                                          $state.reload();

                                          }

                                          else if(index2==6){

                                          bar_button_color = 'button-assertive';

                                          $scope.editbook.bar_button_color = 'assertive';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/assertive.png"});

                                          $state.reload();

                                          }

                                          else if(index2==7){

                                          bar_button_color = 'button-royal';

                                          $scope.editbook.bar_button_color = 'royal';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/royal.png"});
		
                                          $state.reload();

                                          }

                                          else if(index2==8){

                                          bar_button_color = 'button-dark';

                                          $scope.editbook.bar_button_color = 'dark';

                                          $scope.bar_button_color=bar_button_color;
                                          
                                          $('#editbarbuttonimg').attr({'src':"img/dark.png"});

                                          $state.reload();

                                          }

                                          else{

                                          $state.reload();

                                          }                                         

                                          return true;

                                          },

                                          destructiveButtonClicked: function() {

                                          alert('DESTRUCT');

                                          return true;

                                          }

                                          });

                   };  
 
   
   $scope.editbutton = function() {    

                   $ionicActionSheet.show({

                                          titleText: 'Choose Button Color',

                                          buttons: [

                                                    { text: '<p><img src="img/light.png" style="align:left;"/>&nbsp;Light&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/stable.png" style=""/>&nbsp;Stable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/positive.png" style=""/>&nbsp;Positive&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/calm.png" style=""/>&nbsp;Calm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/balanced.png" style=""/>&nbsp;Balanced&nbsp;</p>' },

                                                    { text: '<p><img src="img/energized.png" style=""/>&nbsp;Energized</p>' },

                                                    { text: '<p><img src="img/assertive.png" style=""/>&nbsp;Assertive&nbsp;</p>' },

                                                    { text: '<p><img src="img/royal.png" style=""/>&nbsp;Royal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    { text: '<p><img src="img/dark.png" style=""/>&nbsp;Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' },

                                                    ],

                                          

                                          cancelText: 'Cancel',

                                          cancel: function() {


                                          },

                                          buttonClicked: function(index1) {


                                          if(index1==0){
												
                                          button_color = 'button-light';

                                          $scope.editbook.button_color = 'light';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/light.png"});

                                          $state.reload();

                                          }

                                          else if(index1==1){

                                          button_color = 'button-stable';

                                          $scope.editbook.button_color = 'stable';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/stable.png"});

                                          $state.reload();

                                          }

                                          else if(index1==2){

                                          button_color = 'button-positive';

                                          $scope.editbook.button_color = 'positive';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/positive.png"});

                                          $state.reload();

                                          }

                                          else if(index1==3){

                                          button_color = 'button-calm';

                                          $scope.editbook.button_color = 'calm';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/calm.png"});

                                          $state.reload();

                                          }

                                          else if(index1==4){

                                          button_color = 'button-balanced';

                                          $scope.editbook.button_color = 'balanced';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/balanced.png"});

                                          $state.reload();

                                          }

                                          else if(index1==5){

                                          button_color = 'button-energized';

                                          $scope.editbook.button_color = 'energized';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/energized.png"});

                                          $state.reload();

                                          }

                                          else if(index1==6){

                                          button_color = 'button-assertive';

                                          $scope.editbook.button_color = 'assertive';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/assertive.png"});

                                          $state.reload();

                                          }

                                          else if(index1==7){

                                          button_color = 'button-royal';

                                          $scope.editbook.button_color = 'royal';

                                          $scope.button_color=button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/royal.png"});

                                          $state.reload();

                                          }

                                          else if(index1==8){

                                          button_color = 'button-dark';

                                          $scope.editbook.button_color = 'dark';

                                          $scope.button_color = button_color;
                                          
                                          $('#editbuttonimg').attr({'src':"img/dark.png"});

                                          $state.reload();

                                          }

                                          else{

                                          $state.reload();

                                          }

                                          return true;

                                          },

                                          destructiveButtonClicked: function() {

                                          alert('DESTRUCT');

                                          return true;

                                          }

                                          });

                   };   
  
$scope.editupdatesettings = function(){                  
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
	  
	 var formData = new FormData(); 
	  
	   if($("#editstoreimage").get(0).files[0] != undefined){
			   formData.append('app_store_image',$("#editstoreimage").get(0).files[0]);
		   }
		 
		    if($("#editsplashimage").get(0).files[0] != undefined){
			   formData.append('splash_image',$("#editsplashimage").get(0).files[0]);
		   }
		 
		    if($("#editappimage").get(0).files[0] != undefined){
			   formData.append('app_image',$("#editappimage").get(0).files[0]);
		   }
		   

		if($scope.editbook.bar_color != undefined){
			   formData.append('bar_color', $scope.editbook.bar_color);
		   }
		   
		   if($scope.editbook.bar_button_color != undefined){
			   formData.append('bar_button_color', $scope.editbook.bar_button_color);
		   }
		   
		   if($scope.editbook.button_color != undefined){
			   formData.append('button_color', $scope.editbook.button_color); 
		   }
		   
        	
		 if($scope.editbook.editdomain != undefined){
			  formData.append('domain',$scope.editbook.editdomain);	
		   }
		    if($scope.editbook.subdomain != undefined){
			     formData.append('subdomain',$scope.editbook.subdomain);
			 }

            formData.append('api_key',appKey);
            formData.append('title',$scope.editappcreate.editgridAppTitle);
            formData.append('description',$scope.editappcreate.editmypost);		


           $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/apps/settings/general.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                	colour=response.bar_color;
							buttoncolour=response.bar_button_color; 			
							button= response.button_color; 
					appTitle = response.title;
           appList='';       
                   $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/users.json",
                  data:{'api_key':appkeyResult.api_key,'id':appkeyResult.id},
                  cache: false,
                  success:function(response){
				
                    $ionicLoading.hide();
                    appList = response;
                    localStorage["login"] = JSON.stringify(appkeyResult);
                   
          				},
                  error:function(error,status){
                    $ionicLoading.hide();
                   var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: appTitle,
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                  }
            });
            $ionicLoading.hide();
           
           console.log(JSON.stringify(floatarray));

                    for(var i=0;i<floatarray.length;i++){

                    if(floatarray[i].key == 'Url'){

                    console.log(JSON.stringify(floatarray[i].key));

                    $state.go('editnewapp1');          

                    }}  
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: appTitle,
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		
  }
				 
});


var appTitle1='';

control.controller('editsocialCtrl',function($scope,$state,$ionicScrollDelegate,$ionicModal,$ionicPopup,$ionicLoading,$sce,$http,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

$scope.homeeditsocial = function(){
	$state.go('sample');
}

$scope.backeditsocial = function(){
	$state.go('editApp');
}

$scope.editbook1={}
			

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 
                console.log(JSON.stringify(twitter));

                   if((twitter == 'undefined') || (twitter == 'null')){

                   $scope.editbook1.twitter_editusername = '';   

                   }

                   else{

                   $scope.editbook1.twitter_editusername=twitter;

                   }
                   

                   if((twitterkey == 'undefined') || (twitterkey == 'null')){

                   $scope.editbook1.edittwitter_key = '';

                   }

                   else{

                   $scope.editbook1.edittwitter_key=twitterkey;

                   }                   

                   if((twittersecret == 'undefined') || (twittersecret == 'null')){

                   $scope.editbook1.edittwitter_secret = '';

                   }

                   else{

                   $scope.editbook1.edittwitter_secret=twittersecret;

                   }

                   if((fb == 'undefined') || (fb == 'null')){

                   $scope.editbook1.editfacebook_link = '';
                   
                   }

                   else{

                   $scope.editbook1.editfacebook_link= fb;

                   }

                   if((fbkey == 'undefined') || (fbkey == 'null')){

                   $scope.editbook1.editfacebook_key = '';

                   }

                   else{

                   $scope.editbook1.editfacebook_key=fbkey;

                   }

                   if((fbsecret == 'undefined') || (fbsecret == 'null')){

                   $scope.editbook1.editfacebook_secret = '';

                   }

                   else{

                   $scope.editbook1.editfacebook_secret=fbsecret;

                   }


                   if((gplus == 'undefined') || (gplus == 'null')){

                   $scope.editbook1.editgplus_link = '';

                   }

                   else{

                   $scope.editbook1.editgplus_link=gplus;;

                   }

                   if((gpluskey == 'undefined') || (gpluskey == 'null')){

                   $scope.editbook1.editgplus_key = '';

                   }

                   else{

                   $scope.editbook1.editgplus_key=gpluskey;

                   }

                   if((gplussecret == 'undefined') || (gplussecret == 'null')){

                   $scope.editbook1.editgplus_secret = '';

                   }

                   else{

                   $scope.editbook1.editgplus_secret=gplussecret;

                   }

                   if((youtube == 'undefined') || (youtube == 'null')){

                   $scope.editbook1.edityoutube_link = '';

                   }

                   else{

                   $scope.editbook1.edityoutube_link=youtube;

                   }

                   if((flickr == 'undefined') || (flickr == 'null')){

                   $scope.editbook1.editflickr_link= '';

                   }

                   else{

                  $scope.editbook1.editflickr_link=flickr;

                   }

                   if((pin == 'undefined') || (pin == 'null')){

                   $scope.editbook1.editpinterest_link = '';

                   }

                   else{

                   $scope.editbook1.editpinterest_link=pin;

                   }


               
                
             
$scope.updateeditSocialSettings = function(){              
  
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
           var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('twitter_link',$scope.editbook1.twitter_editusername);
            formData.append('twitter_key',$scope.editbook1.edittwitter_key);
            formData.append('twitter_secret',$scope.editbook1.edittwitter_secret);
            formData.append('facebook_link',$scope.editbook1.editfacebook_link);
            formData.append('facebook_key',$scope.editbook1.editfacebook_key);
            formData.append('facebook_secret',$scope.editbook1.editfacebook_secret);
            formData.append('gplus_link',$scope.editbook1.editgplus_link);	
            formData.append('gplus_key', $scope.editbook1.editgplus_key);
            formData.append('gplus_secret',$scope.editbook1.editgplus_secret);
            formData.append('youtube_link',$scope.editbook1.edityoutube_link);
            formData.append('flickr_link',$scope.editbook1.editflickr_link);
            formData.append('pinterest_link',$scope.editbook1.editpinterest_link);
            
           $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/apps/settings/social.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
	
			      $state.go('sample');
                  $ionicLoading.hide();
                 
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Social',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });

  }

});

function readURL31(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
	    		$('#editbuttonsrc').attr('src', e.target.result); 
	    		 $('#editbuttonsrc').css({'width':'50px','height':'50px'});
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
  
  
var imageeditbutton='';

control.controller('buttonlistCtrl',function($scope,$state,$ionicScrollDelegate,$ionicPopup,$ionicLoading,$ionicActionSheet){ 

$ionicScrollDelegate.scrollTop();

$scope.backbuttonlist = function(){
	$state.go('app');
}
$scope.homebuttonlist = function(){
	$state.go('sample');
}

$scope.editbuttoncreate={}
$('#editbuttonsrc').attr('src', localStorage.xxx); 

 
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$("#editbuttonimage").change(function(){
      readURL31(this);
  });
  

$scope.editbuttoncreate.editbuttontitle = buttonTitle;

 if(chapterImage){
    $('#editbuttonsrc').attr({'src':chapterImage});
     $('#editbuttonsrc').css({'width':'50px','height':'50px'});
    
  }
 
  $scope.updatebutton =function(){
  
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
      if($("#editbuttonimage").get(0).files[0]){
		  
	 var formData = new FormData();
	
        formData.append('api_key',appKey);
        formData.append('id',buttonId);
        formData.append('title',$scope.editbuttoncreate.editbuttontitle);
        formData.append('image', $("#editbuttonimage").get(0).files[0]);
      	
		$.ajax({
                type: "PUT",
                url: "http://build.myappbuilder.com/api/buttons.json",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(response){
			
 
                    buttonId = response.id;
                    buttonTitle = response.title;
                
                    $ionicLoading.hide();
                },
                error:function(error,status){
                    $ionicLoading.hide();
                 
                   var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
  }
  else
  {
	   var formData = new FormData();
	
        formData.append('api_key',appKey);
        formData.append('id',buttonId);
        formData.append('title',$scope.editbuttoncreate.editbuttontitle);
       
      	
		$.ajax({
                type: "PUT",
                url: "http://build.myappbuilder.com/api/buttons.json",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(response){
				
 
                    buttonId = response.id;
                    buttonTitle = response.title;
               
                    $ionicLoading.hide();
                },
                error:function(error,status){
                    $ionicLoading.hide();
                 
                     var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
  }
}
	  

});

var customdismapid='';

control.controller('mapdisplayCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
  $scope.backdismap=function(){
       $state.go('showmap');
  }
  $scope.homedismap=function(){
        $state.go('sample');
   }
	$scope.dismap={}
$scope.createdisplaymap={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){ 
							                 
                          $ionicLoading.hide();
                           $scope.addressess = response; 
						   $state.reload();               

                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });    
              
   $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
						    $scope.dismappage = response; 
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              

$scope.adddisAddress = function(){
	
    if($scope.createdisplaymap.title){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/addresses.json",
          data:{'api_key':appKey,'id':elementId,'address':$scope.createdisplaymap.title},
          success:function(response){
		
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();                       
						    $scope.addressess = response;                 
						    $scope.createdisplaymap.title='';
						   $state.reload();   
						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:'Enter The Address'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.updatedisplayAddress = function(id,updateaddresss){
	  
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

          var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('element_id',elementId);       
            formData.append('id',id);  
             formData.append('address',updateaddresss); 
            
       $.ajax({
          type: "PUT",
          url: "http://build.myappbuilder.com/api/elements/addresses.json",
          data:formData,
           cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			   
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
    }
 $scope.deletedisplayAddress = function(id){
	 
 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
  
  
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/addresses/"+id+".json",
            data: {'api_key':appKey,'id':elementId},
            cache: false,
            success:function(response){
				
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
				   
                          $ionicLoading.hide();
						$scope.addressess = response;  
						   $state.reload();   
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });	
	  
}   

$scope.mapdiscustom = function(){

    if($scope.dismap.discustommaptitle){
      if($scope.dismap.discustommapvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.dismap.discustommaptitle,'value':$scope.dismap.discustommapvalue},
          success:function(response){
			 customdismapid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();                        
					    $scope.dismappage = response;
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });    
              $scope.dismap.discustommaptitle='';
              $scope.dismap.discustommapvalue='';         
            },
          error:function(error){
            $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removedismapCustomValue = function(id){

    customdismapid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdismapid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						    $scope.dismappage = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

var customedisformid='';

control.controller('formdisplayCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
  $scope.backdisform=function(){
      $state.go('previewform');
   }
  $scope.homedisform=function(){
      $state.go('sample');
  }
  
$scope.formdis={}
$scope.displayform={}

$scope.formdis.disemail = elementemail;
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;   
              
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide();
						    $scope.disformtype = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });     
                
$scope.updatedisform = function(){

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);       
            formData.append('email_to_send_to',$scope.formdis.disemail);       

  if(($scope.formdis.disemail)!=elementemail){  

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_contact_form.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			 
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		}
		else
		{
			 $ionicLoading.hide();
		 }
			
}

$scope.createdisformcustom = function(){

    if($scope.displayform.customdisTitle){
      if($scope.displayform.customdisvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.displayform.customdisTitle,'value':$scope.displayform.customdisvalue},
          success:function(response){
			 customedisformid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();                      
						    $scope.disformtype = response;
						   $state.reload();   

                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.displayform.customdisTitle='';
              $scope.displayform.customdisvalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removeformdisCustomValue = function(id){

    customedisformid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customedisformid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide();
						    $scope.disformtype = response;						 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

var customdistaskid='';

control.controller('taskdisplayCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 
 
 $ionicScrollDelegate.scrollTop();
 
  if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
  $scope.backdistask=function(){
      $state.go('previewtask');
   }
  $scope.homedistask=function(){
       $state.go('sample');
  }
  
	$scope.discustask={}
	$scope.createdisplaytask={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();   
						     $scope.taskdisplaypage = response;
						   $state.reload();   	  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
              
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
              
$scope.adddisplayTask = function(task,desc){
	
	if($scope.createdisplaytask.taskTitle)
	{
		
	$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
       $.ajax({
                        type: "POST",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId,'title':$scope.createdisplaytask.taskTitle,'description':$scope.createdisplaytask.taskDescription},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();		
                          tasklistid=response.id;			  
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						$scope.createdisplaytask.taskTitle='';
						$scope.createdisplaytask.taskDescription='';    
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
		  }else
		  {
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:'Enter The Title'
					 });
					 alertPopup.then(function(res) {
					 });
		  }           
	
}

$scope.deletedisplayTask = function(id){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/tasks/"+id+".json",
            data: {"api_key":appKey,'id':elementId},
            cache: false,
            success:function(response){

               $ionicLoading.hide();
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	

$scope.updatedisplayTask = function(updatesid,titles,descp){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
            
        var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('element_id',elementId);    
            formData.append('id',updatesid);
            formData.append('title',titles);   
            formData.append('description',descp);     
          
          $.ajax({
            type: "PUT",
            url: "http://build.myappbuilder.com/api/elements/tasks.json",
            data: formData,
             cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();
                
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	


$scope.createtaskdiscustom = function(){

    if($scope.discustask.customtaskdistitle){
    if($scope.discustask.customtaskdisvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.discustask.customtaskdistitle,'value':$scope.discustask.customtaskdisvalue},
          success:function(response){
			 customdistaskid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide();
						    $scope.taskdisplaypage = response;
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });  
              $scope.discustask.customtaskdistitle='';
               $scope.discustask.customtaskdisvalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removetaskdisCustomValue = function(id){

    customdistaskid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdistaskid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();   
						     $scope.taskdisplaypage = response;
						   $state.reload();   	  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

var customdiswebid='';

control.controller('webdisplayCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
   $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
  $scope.backdisweb=function(){
      $state.go('previewweb');
  }
  $scope.homedisweb=function(){
      $state.go('sample');
  }
  	
	$scope.discusweb={}
	$scope.creatediswebedit={}

$scope.appTitle = appTitle;	

$scope.float1=float1;

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.creatediswebedit.diswebname = elementtitle;
$scope.creatediswebedit.disweburl= elementurl;
$scope.creatediswebedit.diswebdesc=elementtext;

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	$.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						   $scope.diswebpage = response;
						   $state.reload();   			                           
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         alert(error.responseText);
                        }
              });             

$scope.updatedisweb = function(){
	
if(($scope.creatediswebedit.disweburl)!=elementurl){
	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
	

	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);   
            formData.append('title',$scope.creatediswebedit.diswebname);   
             formData.append('text',$scope.creatediswebedit.diswebdesc);      
            formData.append('live_url',$scope.creatediswebedit.disweburl);   
                
          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_web_page.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();  
                },error:function(error){
                  $ionicLoading.hide();
                 alert(error.responseText);
                }
            });
		}
		else
		{
			alert('Update the live url');
		}
		
}

$scope.creatediscusweb = function(){

    if($scope.discusweb.cusdiswebtitle){
      if($scope.discusweb.cusdiswebvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.discusweb.cusdiswebtitle,'value':$scope.discusweb.cusdiswebvalue},
          success:function(response){
			 customdiswebid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide(); 
						    $scope.diswebpage = response;
						   $state.reload();                              
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          alert(error.responseText);
                        }
              });  
              $scope.discusweb.cusdiswebtitle='';
              $scope.discusweb.cusdiswebvalue='';            
            },
          error:function(error){
            $ionicLoading.hide();
            var error = error.responseText;
           alert(error.responseText);
          }
      });
    }
      }else{
     alert("Enter Title And Value");
    }  
  }

$scope.removediswebCustomValue = function(id){

    customdiswebid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdiswebid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						   $scope.diswebpage = response;
						   $state.reload();   			                           
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          alert(error.responseText);
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              alert(error.responseText)
            }
          });
}	

});

control.controller('rssdisplayCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
  $scope.backdisrss=function(){
       $state.go('entries');
   }
   $scope.homedisrss=function(){
        $state.go('sample');
}
  	
	$scope.discusrss={}
	$scope.createrssdis={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.createrssdis.disrssname = elementtitle;
$scope.createrssdis.disrssurl= elementrssurl;
$scope.createrssdis.disrssdesc=elementtext;

$scope.float1=float1;

$scope.updaterssdis = function(){

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
    
 if((($scope.createrssdis.disrssname)==elementtitle) && (($scope.createrssdis.disrssdesc)==elementtext) && (($scope.createrssdis.disrssurl)==elementrssurl)){  
   $ionicLoading.hide();
}
else{
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);    
            formData.append('rss_url',$scope.createrssdis.disrssurl);
           formData.append('text',$scope.createrssdis.disrssdesc);   
           formData.append('title',$scope.createrssdis.disrssname);            

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_rss.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		}
}

$scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();                        
						    $scope.disrsspage = response;
						   $state.reload();   
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
              
$scope.createcusdisrss = function(){
	
    if($scope.discusrss.cusdisrsstitle){
      if($scope.discusrss.cusdisrssvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.discusrss.cusdisrsstitle,'value':$scope.discusrss.cusdisrssvalue},
          success:function(response){
			 customdisrssid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();                      
						    $scope.disrsspage = response;                 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.discusrss.cusdisrsstitle='';
              $scope.discusrss.cusdisrssvalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }
  
$scope.removerssdisCustomValue = function(id){

    customdisrssid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisrssid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
							$scope.disrsspage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

var customdisaudioid='';

control.controller('audiodisplayCtrl',function($scope,$state,$ionicPopup,$ionicLoading,$http,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
function readURL14(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			$('#audiodisurlimg').attr({'src':"img/btn_audio.png"});
             $('#audiodisurlimg').css({'width':'50px','height':'50px'}); 					
          $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#audiodisplay").change(function(){
	    check=true;
	 
      readURL14(this);
  });
  
   function readURL15(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			 $('#audiodisplayimg').attr('src', e.target.result);	
			 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#audio_thumbdisplay").change(function(){
	  check=true;
	 
      readURL15(this);
  });
  
  
$scope.backdisplayaudio = function(){
   $state.go('previewaudio');
 } 
$scope.homedisplayaudio = function(){
   $state.go('sample');
 }
 
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 	
 	$scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });       
                           
$scope.createdisplayaudio={}
$scope.cusdisplayaudio={}

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.createdisplayaudio.displayaudiotitle = elementtitle;
$scope.createdisplayaudio.displayaudiotext = elementtext;

if(contentimg){
    $('#audiodisplayimg').attr({'src':contentimg});
    $('#audiodisplayimg').css({'width':'50px','height':'50px'}); 		
  }
 if(contentaudio){
    $('#audiodisplay').attr({'url':contentaudio}); 
     $('#audiodisurlimg').attr({'src':contentimg});
    $('#audiodisurlimg').css({'width':'50px','height':'50px'});   	
  }
$scope.updateaudiodisplay = function(){            
		  
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
     
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);                
           formData.append('title',$scope.createdisplayaudio.displayaudiotitle);
           formData.append('text',$scope.createdisplayaudio.displayaudiotext);
           if(check==true){ 
			     if((($("#audiodisplay").get(0).files[0].size) / 1024 / 1024) <= 10){
					 
					formData.append('audio',$('#audiodisplay').get(0).files[0]);  
				 }
				 else{
					  var alertPopup = $ionicPopup.alert({
						 title: 'MAB',
						 template: 'Please choose Audio File below 10MB!'
					   });
					   alertPopup.then(function(res) {
					   });
					} 
					 
             if($('#audio_thumbdisplay').get(0).files[0]){
					formData.append('audio_thumbnail', $('#audio_thumbdisplay').get(0).files[0]);
			}else{
					formData.append('audio_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
			}               
			}
			else
			{
				 $('#audiodisplay').attr({'url':contentaudio}); 
				 $('#audiodisurlimg').attr({'src':contentimg});
				$('#audiodisurlimg').css({'width':'50px','height':'50px'});   		 
				 $('#audiodisplayimg').attr({'src':contentimg});
				 $('#audiodisplayimg').css({'width':'50px','height':'50px'}); 
			 }
			 

          $http.put('http://build.myappbuilder.com/api/elements/update_audio.json', formData,{
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
			
						  $ionicLoading.hide();

					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                        var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      });

  
}
 
 $scope.createaudiodis = function(){
	
    if($scope.cusdisplayaudio.customdisaudioTitle){
      if($scope.cusdisplayaudio.customdisaudiovalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.cusdisplayaudio.customdisaudioTitle,'value':$scope.cusdisplayaudio.customdisaudiovalue},
          success:function(response){
			 customdisaudioid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                      
						    $scope.disaudiopage = response;                 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.cusdisplayaudio.customdisaudioTitle='';
              $scope.cusdisplayaudio.customdisaudiovalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }
  
$scope.removeaudiodisCustomValue = function(id){

    customdisaudioid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisaudioid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

var customdisid = '';
var picdiscustom = '';
var imagepicdis='';
var amenities3='';
  
control.controller('picdisplayCtrl',function($scope,$state,$ionicScrollDelegate,$ionicActionSheet,$ionicLoading,$ionicPopup,$ionicModal){ 

 $ionicScrollDelegate.scrollTop();
 
 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
  $scope.backdispic=function(){
	  
	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							previewpic =response;
						   $state.go('previewpic');    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              
      
  }
 $scope.homedispic=function(){
       $state.go('sample');
   }
 
 
$scope.textCreatedis = {}
$scope.dispic={}
$scope.contenteditCreate={}

$scope.textCreatedis.distitle=elementtitle;
$scope.textCreatedis.distext=elementtext;
$scope.contenteditCreate.elementeditTag = tagging;

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 $scope.AppEditor = false;

  $scope.logedittext = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
  
  $scope.float1=float1;
   $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
							
		
							
                          $ionicLoading.hide();
							$scope.dispicpage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });         

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.distxtpage = response;
						   $state.reload();   						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
                    
              
$scope.updatedistext = function(){            
	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);       
           formData.append('title',$scope.textCreatedis.distitle);
            formData.append('text',$scope.textCreatedis.distext);
            
  if((($scope.textCreatedis.distitle)!=elementtitle) || (($scope.textCreatedis.distext)!=elementtext)){  

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_default.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
                  $ionicLoading.hide();                
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });   
		}
		else
		{
			 $ionicLoading.hide();  
		}
 }


    function readURL44(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
					$('#dispictext').attr('src', e.target.result); 
	    		 $('#dispictext').css({'width':'50px','height':'50px'});
			   $('#textdis').attr('src', e.target.result); 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
      
  $("#textdis").change(function(){
      readURL44(this);
  });
  
$scope.uploaddisplay = function(){                 

 $('#dispictext').attr({'src':"img/no_image.png"});
 
$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
  
   
      var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);
          formData.append('image',$("#textdis").get(0).files[0]);
           $.ajax({
                  type: "POST",
                  url: "http://build.myappbuilder.com/api/elements/images.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){             
						$("#textdis").val('');
							
						 $.ajax({
								type: "GET",
								url: "http://build.myappbuilder.com/api/elements/images.json",
								data:{'api_key':appKey,'id':elementId},
								cache: false,
								success:function(response){
				
								  $ionicLoading.hide();

									 $scope.dispicpage = response;
								   $state.reload();   
								  
								  
								},
								error:function(error,status){
								   $ionicLoading.hide();
								 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
								}
					     });              
          
                 
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            }); 
 }

$scope.removepicdisCustom = function(id){
 
  picdiscustom = id;

   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/images.json",
            data: {"api_key":appKey,"id":picdiscustom,'element_id':elementId},
            cache: false,
            success:function(response){
             $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
							//var response1=JSON.parse(response);
                          $ionicLoading.hide();
						    $scope.dispicpage = response;						     
						   $state.reload();  						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
 
}


$scope.ok = function(){                

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
         
         var datatag=$scope.contenteditCreate.elementeditTag;
		 if(datatag == ''){
			  console.log(datatag);
			 amenities='';
		 }
		 else{
			  console.log(datatag);
		for(var i=0;i<datatag.length;i++){

                   if(i==0){

                   amenities = datatag[i].text;

                   }

                   else{

                   amenities = amenities+','+datatag[i].text;

                   }

                   }
			   }
                   
                   $.ajax({
                        type: "PUT",
                        url: "http://build.myappbuilder.com/api/elements/tags.json",
                        data:{'api_key':appKey,'element_id':elementId,'value':amenities},
                        cache: false,
                        success:function(response){   
                                 
                          $ionicLoading.hide();                        
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
      
 }


  $scope.AppEditor = false;
  
$scope.createpicdis = function(){
	
    if($scope.dispic.customdisTitle){
      if($scope.dispic.customedisvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.dispic.customdisTitle,'value':$scope.dispic.customedisvalue},
          success:function(response){
			 customdisid = response.id;
          
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
					
                          $ionicLoading.hide();
						    $scope.distxtpage = response;
					
						   $state.reload();                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
              $scope.dispic.customdisTitle='';
              $scope.dispic.customedisvalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }  
  }

$scope.removedistxtCustomValue = function(id){

    customdisid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();
						    $scope.distxtpage = response;
					
						   $state.reload();                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}
 
});

var messages = "";


control.controller("appWallCtrl",function($scope,$state, $ionicLoading,$http,$ionicPopup){
	
$scope.appTitle = appTitle;

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
  
  
  var button_wall = '';
  var element_wall = '';

  $scope.homeappwall = function(){
    $state.go('sample');
  }

  $scope.backappwall = function(){
    $state.go('app');
  }


  $scope.checkBox = [];
  if((Appwall.button_wall == "0")&&(Appwall.element_wall == "0")){
    $scope.checkBox.button = false;
    $scope.checkBox.element = false;
  }else if(Appwall.button_wall == "0"){
    $scope.checkBox.button = false;
    $scope.checkBox.element = true;
  }else if(Appwall.element_wall == "0"){
    $scope.checkBox.button = true;
    $scope.checkBox.element = false;
  }else{
    $scope.checkBox.button = true;
    $scope.checkBox.element = true;
  }

      $scope.appwallSettings = function(){
        var myPopup = $ionicPopup.show({
          template: '<div class="card"><div class="item item-checkbox"><label class="checkbox" ><input type="checkbox" ng-model="checkBox.button" value=""></label>Each Chapter Can Have a Unique Wall </div><div class="item item-checkbox"><label class="checkbox" ><input type="checkbox" ng-model="checkBox.element" value=""></label>Each Content Can Have a Unique Wall  </div></div><div style="width:100%;"><div style="width:50%;float:left;"><div style="width:50%;" class="button button-clear" ng-click="popupClose();"><img src="img/btn_cancel.png" style="width:100%;height:auto;"/></div></div><div style="width:50%;float:left;" ><div style="width:50%;float:right;" class="button button-clear " ng-click="popoupSave();"><img src="img/save.png" style="width:100%;height:auto;"/></div></div></div>',
          title: 'AppWall Setting',
          subTitle: $scope.appTitle,
          scope: $scope,
                         
      });

      $scope.popupClose=function() {
        myPopup.close();
      }

      $scope.popoupSave = function(){
        if(($scope.checkBox.button != false) && ($scope.checkBox.element != false)){
          button_wall = "1";
          element_wall = "1";
        }else if($scope.checkBox.button != false){
          button_wall = "1";
          element_wall = "0";
        }else if($scope.checkBox.element != false){
          button_wall = "0";
          element_wall = "1";
        }else{
          button_wall = "0";
          element_wall = "0";
        }

        $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
        $http.post('http://build.myappbuilder.com/api/app_wall_settings.json',{api_key: appKey,button_wall:button_wall,element_wall:element_wall})
              .success(function(data,status,headers,config){
          
                  $.ajax({url:'http://build.myappbuilder.com/api/app_wall_settings.json', type:"GET",data:{'api_key':appKey},
                      success:function(response){
                  
                          Appwall = response;
                          $ionicLoading.hide();
                           myPopup.close();
                      },
                      error:function(){
                          $ionicLoading.hide();
                           myPopup.close();
                      }
                    });
                 
              })
              .error(function(data,status,headers,config){
                  $ionicLoading.hide();
                   var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                  myPopup.close();
              })

      }
    
  }

  $scope.messages = "";
  $scope.messages.data="";
 $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
 
    $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){
					$ionicLoading.hide();
                   messages = response;
                   appWallPostFun();
                  },
                  error:function(error,status){
                
                    $ionicLoading.hide();
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
                    }else {
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
                    }
                  }
            });
            
 }); 
 

function appWallPostFun(){

    var bodyMgs = '';
    var mgs_id = []; 
    var body = [];
    var created_at = [];
    var parent_id = []; 
    var element_name = [];
    var button_name = [];
    var sender_name = [];
    var sender_id = [];
    var sender_avatar_url = [];
    var replyappend = '';
    var z = 0;
    var p = 0;

  
    if(messages.length > 0){
      $.each( messages, function( key, value ) {	
        $.each( value, function( k, v ) {			  
            if(k == "id"){
              mgs_id.push(v);
            }else if(k == "created_at"){
              created_at.push(v);
            }else if(k == "parent_id"){
              parent_id.push(v);
            }else if(k == "body"){
              body.push(v);
            }else if(k == "element_name"){
              element_name.push(v);
            }else if(k == "button_name"){
              button_name.push(v);
            }else if(k == "sender_name"){
              sender_name.push(v);
            }else if(k == "sender_id"){
              sender_id.push(v);
            }else if(k == 'sender_avatar_url'){
              if(v == null){
                v = 'img/face.png';
              }
              sender_avatar_url.push(v);
            }
        });
      });
    }else{
      bodyMgs = '<a><p align="justify" class="divback2"><font color="black" size="2">No Result Found</font></p></a>';
    }

    for(var i=0;i<body.length;i++){
      if(parent_id[i] == null){
        p=0;
        for(var j=0;j<body.length;j++){
           p = p+1;
          if(mgs_id[i] == parent_id[j]){
             z= -1;
             var k = parseInt(p)+z;
            
             if(localStorage.sender_id == sender_id[k]){
               if(element_name[k] != null && button_name[k] != null){
                replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;"><img src="img/delete.png" id="delete-'+k+'" class="deleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
               }else if(button_name[k] != null){
                replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;"><img src="img/delete.png" id="delete-'+k+'" class="deleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
               }else{
                replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><hr><div><p align="justify">'+body[k]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;"><img src="img/delete.png" id="delete-'+k+'" class="deleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
               }
              }else{
                 if(element_name[k] != null && button_name[k] != null){
                  replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p></div><div class="row"></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                 }else if(button_name[k] != null){
                  replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p></div><div class="row"></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                 }else{
                  replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><hr><div><p align="justify">'+body[k]+'</p></div><div class="row"></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                 }
              }
          }else{
           
          }
          
       }

      if(localStorage.sender_id == sender_id[i]){
          if(element_name[i] != null && button_name[i] != null){
            bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="replyMgs" style="width:100%;height:auto;"/></div><div style="width:50%;float:left;" ><img src="img/delete.png" id="delete-'+i+'" class="deleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="replyHide bar bar-header item-input-inset" id="replyHide'+i+'" ><label class="item-input-wrapper"><input id="replymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:replymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
          
          }else if(button_name[i] != null){
            bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="replyMgs" style="width:100%;height:auto;"/></div><div style="width:50%;float:left;" ><img src="img/delete.png" id="delete-'+i+'" class="deleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="replyHide bar bar-header item-input-inset" id="replyHide'+i+'" ><label class="item-input-wrapper"><input id="replymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:replymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
          
          }else{

            bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="replyMgs" style="width:100%;height:auto;"/></div><div style="width:50%;float:left;" ><img src="img/delete.png" id="delete-'+i+'" class="deleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="replyHide bar bar-header item-input-inset" id="replyHide'+i+'" ><label class="item-input-wrapper"><input id="replymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:replymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';

          }
        }else{
          if(element_name[i] != null && button_name[i] != null){
            bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%"><div style="width:50%;float:left;"><div style="width:100%"><div style="width:50%;float:left;"><img src="img/reply.png" id="reply-'+i+'" class="replyMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="replyHide bar bar-header item-input-inset" id="replyHide'+i+'" ><label class="item-input-wrapper"><input id="replymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:replymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
          
          }else if(button_name[i] != null){
            bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%"><div style="width:50%;float:left;"><div style="width:100%"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="replyMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="replyHide bar bar-header item-input-inset" id="replyHide'+i+'" ><label class="item-input-wrapper"><input id="replymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:replymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
          
          }else{
            bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%"><div style="width:50%;float:left;"><div style="width:100%"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="replyMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="replyHide bar bar-header item-input-inset" id="replyHide'+i+'" ><label class="item-input-wrapper"><input id="replymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:replymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
            
          }
        }  

        replyappend ='';

      }else{
	
      }
    }
    
    $('#appwallListview').append(bodyMgs).trigger('create');

    if($('.replyHide').is(':visible')){
      $('.replyHide').toggle();
    }else{
      
    }

    $(".replyMgs").click(function(){
          replyMgsNo1 = (this.id).split('-');
          replyMgsNo = mgs_id[replyMgsNo1[1]];
          var replyHide = "replyHide"+replyMgsNo1[1];
          $('#'+replyHide).toggle();
    });

    $(".deleteMgs").click(function(){
  
          var deleteMgsNo = (this.id).split('-');

          if(localStorage.appwallLoginData){
            $.ajax({url:'http://build.myappbuilder.com/api/messages.json?api_key='+appKey+'&message_id='+mgs_id[deleteMgsNo[1]], 
              type:"DELETE",
              success:function(response){
                
                $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){
			
                   messages = response;
                   $('#appwallListview').empty();
                   appWallPostFun();
                  },
                  error:function(error,status){
				
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
					
                    }else {
                     alert('Login Error!');
					
                    }
                  }
            });
              },
              error:function(msg){   alert(msg);}
            });
          }else{
            
          }
    });
    
 
}

function replymessageFun(){

  if(localStorage.appwallLoginData){
    var replyarray = "replymessage"+replyMgsNo1[1];
    var replymessage = $('#'+replyarray).val();
      if(replymessage == ''){
        alert('Please Enter Your Reply...');
				
      }else{

         $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{'message[body]':replymessage,'message[parent_id]':replyMgsNo,'message[sender_id]':localStorage.sender_id,'api_key':appKey},
          success:function(response){
            
            $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){

               
                    $('#'+replyarray).val('');
                   messages = response;
                   $('#appwallListview').empty();
                   appWallPostFun();
                  },
                  error:function(error,status){
             
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
                    }else {
                       alert('Login Error!');
                    }
                  }
            });
        },
        error:function(){    alert('Failure');
				}
      });
    }
  }else{
  
  }

}

function postmessageFun(){

  if(localStorage.appwallLoginData){

    var postmessage = $('#postmessage').val();
    if(postmessage == ''){
     alert('Please Enter Your Comments...');
				
    }else{
		  
      $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{'message[body]':postmessage,'message[sender_id]':localStorage.sender_id,'api_key':appKey},
        success:function(response){
          $('#appwallListview').empty();
          $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){	
            
                 $('#postmessage').val('');
           
                    messages = response;
                   
                    appWallPostFun();
                  },
                  error:function(error,status){
               
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
                    }else {
                       alert('Login Error!');
                    }
                  }
            });
        },
        error:function(){    alert('Failure');
				}
      });
    }
  }else{
   
  }

}


function relative_time(date_str) {
    if (!date_str) {return;}
    date_str = $.trim(date_str);
    date_str = date_str.replace(/\.\d\d\d+/,""); // remove the milliseconds
    date_str = date_str.replace(/-/,"/").replace(/-/,"/"); //substitute - with /
    date_str = date_str.replace(/T/," ").replace(/Z/," UTC"); //remove T and substitute Z with UTC
    date_str = date_str.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // +08:00 -> +0800
    var parsed_date = new Date(date_str);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date(); //defines relative to what ..default is now
    var delta = parseInt((relative_to.getTime()-parsed_date)/1000);
    delta=(delta<2)?2:delta;
    var r = '';
    if (delta < 60) {
    r = delta + ' secs ago';
    } else if(delta < 120) {
    r = 'a min ago';
    } else if(delta < (45*60)) {
    r = (parseInt(delta / 60, 10)).toString() + ' mins ago';
    } else if(delta < (2*60*60)) {
    r = 'an hr ago';
    } else if(delta < (24*60*60)) {
    r = '' + (parseInt(delta / 3600, 10)).toString() + ' hrs ago';
    } else if(delta < (48*60*60)) {
    r = 'a day ago';
    } else {
    r = (parseInt(delta / 86400, 10)).toString() + ' days ago';
    }
    return '' + r;
}


control.controller('buttonAppWallCtrl',function($scope,$state,$ionicPopup,$ionicLoading){

$scope.backbuttonAppwall = function(){
	$state.go('chapterlist');
}

$scope.homebuttonAppwall = function(){
	$state.go('sample');
}

 $scope.appTitle = appTitle;
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  messages = '';
    $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
     
    
    $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey,'button_id':buttonId},
                  cache: false,
                  success:function(response){
                    $ionicLoading.hide();
                    messages = response;
                    ButtonAppWallPostFun();
                  },
                  error:function(error,status){
                     $ionicLoading.hide();
                    var error = error.responseText;
                  
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
					
                    }else {
                        alert('Login Error!');
                    }
                  }
    });
  
  });


function ButtonAppWallPostFun(){
   
              var bodyMgs = '';
              var mgs_id = []; 
              var body = [];
              var created_at = [];
              var parent_id = []; 
              var element_name = [];
              var button_name =[];
              var sender_name = [];
              var sender_id = [];
              var sender_avatar_url = [];
              var replyappend ='';
              var z = 0;
              var p = 0;
            
              if(messages.length > 0){
                $.each( messages, function( key, value ) {
                  $.each( value, function( k, v ) {
                      if(k == "id"){
                        mgs_id.push(v);
                      }else if(k == "created_at"){
                        created_at.push(v);
                      }else if(k == "parent_id"){
                        parent_id.push(v);
                      }else if(k == "body"){
                        body.push(v);
                      }else if(k == "element_name"){
                        element_name.push(v);
                      }else if(k == "button_name"){
                        button_name.push(v);
                      }else if(k == "sender_name"){
                        sender_name.push(v);
                      }else if(k == "sender_id"){
                        sender_id.push(v);
                      }else if(k == 'sender_avatar_url'){
                        if(v == null){
                          v = 'img/face.png';
                        }
                        sender_avatar_url.push(v);
                      }
                  });
                });
              }else{
                bodyMgs = '<a><p align="justify" class="divback2" ><font color="black" size="2">No Result Found</font></p></a>';
              }
              
              for(var i=0;i<body.length;i++){

                if(parent_id[i] == null){
                  p=0;
                  for(var j=0;j<body.length;j++){
                     p = p+1;
                    if(mgs_id[i] == parent_id[j]){
                       z = -1;
                       var k = parseInt(p)+z;
                        if(localStorage.sender_id == sender_id[k]){
                          replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;"><img src="img/delete.png" id="delete-'+k+'" class="ButtondeleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                        }else{
                          replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p></div><div class="row"></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                        }
                    }else{
                     
                    }
                  }

                  if(localStorage.sender_id == sender_id[i]){
                    bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="ButtonreplyMgs" style="width:100%;height:auto;"/></div><div style="width:50%;float:left;" ><img src="img/delete.png" id="delete-'+i+'" class="ButtondeleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="ButtonreplyHide bar bar-header item-input-inset" id="ButtonreplyHide'+i+'" ><label class="item-input-wrapper"><input id="Buttonreplymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:ButtonreplymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
                  }else{
                    bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%"><div style="width:50%;float:left;"><div style="width:100%"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="ButtonreplyMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="ButtonreplyHide bar bar-header item-input-inset" id="ButtonreplyHide'+i+'" ><label class="item-input-wrapper"><input id="Buttonreplymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:ButtonreplymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
                  }
                  replyappend ='';

                }else{
                  
                }
              }
              
              $('#ButtonappwallListview').append(bodyMgs).trigger("create");

              if($('.ButtonreplyHide').is(':visible')){
                $('.ButtonreplyHide').toggle();
              }else{
                
              }

              $(".ButtonreplyMgs").click(function(){
                    replyMgsNo1 = (this.id).split('-');
                    replyMgsNo = mgs_id[replyMgsNo1[1]];
                    var replyHide = "ButtonreplyHide"+replyMgsNo1[1];
                    $('#'+replyHide).toggle();
              });

              $(".ButtondeleteMgs").click(function(){
                    var deleteMgsNo = (this.id).split('-');
              
                    if(localStorage.appwallLoginData){
                      $.ajax({url:'http://build.myappbuilder.com/api/messages.json?api_key='+appKey+'&message_id='+mgs_id[deleteMgsNo[1]], type:"DELETE",data:{},
                        success:function(response){
                          $('#ButtonappwallListview').empty();
                          $.ajax({
                            type: "GET",
                            url: "http://build.myappbuilder.com/api/messages.json",
                            data:{'api_key':appKey,'button_id':buttonId},
                            cache: false,
                            success:function(response){
						
                               messages = response;
                              ButtonAppWallPostFun();
                            },
                            error:function(error,status){
                     
                              
                              var error = error.responseText;
                              if(error.error == "Unauthorized"){
                               alert('Please Login');
                              }else {
                                 alert('Login Error!');
                              }
                            }
                      });
                        },
                        error:function(){  alert('Failure');
					}
                      });
                    }else{
                      
                    }
 });
}

function ButtonreplymessageFun(){
	
  if(localStorage.appwallLoginData){
    var replyarray = "Buttonreplymessage"+replyMgsNo1[1];
    var replymessage = $('#'+replyarray).val();
      if(replymessage == ''){
         alert('Please Enter Your Reply...');
      }else{
				
        $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":replymessage,"message[parent_id]":replyMgsNo,"message[sender_id]":localStorage.sender_id,"api_key":appKey,"button_id":buttonId},
          success:function(response){

            $('#ButtonappwallListview').empty();
            $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey,'button_id':buttonId},
                  cache: false,
                  success:function(response){

                    $('#'+replyarray).val('');
                    messages = response;
                    ButtonAppWallPostFun();
                  },
                  error:function(error,status){
               
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                       alert('Please Login');
                    }else {
                     alert('Login Error!');
                    }
                  }
            });
          },
          error:function(){ alert('Failure');}
        });
      }
  }else{
    
  }

}



function ButtonpostmessageFun(){
  if(localStorage.appwallLoginData){
    var postmessage = $('#Buttonpostmessage').val();
    if(postmessage == ''){
      alert('Please Enter Your Comments...');
					
    }else{
		
				
      $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":postmessage,"message[sender_id]":localStorage.sender_id,"api_key":appKey,"button_id":buttonId},
        success:function(response){
		
          $('#ButtonappwallListview').empty();
          $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey,'button_id':buttonId},
                  cache: false,
                  success:function(response){
				
                    $('#Buttonpostmessage').val('');
                    messages = response;
                    ButtonAppWallPostFun();
                  },
                  error:function(error,status){
           
                    
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
                    }else {
                         alert( 'Login Error');
                    }
                  }
            });
        },
        error:function(){ alert('Network Failure');
				}
      });
    }
  }else{
    
  }
}



control.controller('elementAppWallCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicModal,$ionicScrollDelegate){

$scope.backelementAppwall = function(){
	$state.go('chapterlist');
}

$scope.homeelementAppwall = function(){
	$state.go('sample');
}

 $scope.appTitle = appTitle;
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  messages = '';
 $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
  $.ajax({url:'http://build.myappbuilder.com/api/messages.json',type:"GET",data:{"api_key":appKey,"element_id":elementId},
    success:function(response){
    $ionicLoading.hide();
      messages = response;
      ElementAppWallPostFun();
    },
    error:function(error,status){
    $ionicLoading.hide();
      var error = error.responseText;
      if(error.error == "Unauthorized"){
        var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
      }else {
           var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
      }
    }
  });
  
});

function ElementAppWallPostFun(){
   
              var bodyMgs = '';
              var mgs_id = []; 
              var body = [];
              var created_at = [];
              var parent_id = []; 
              var element_name = [];
              var button_name =[];
              var sender_name = [];
              var sender_id = [];
              var sender_avatar_url = [];
              var replyappend ='';
              var z = 0;
              var p = 0;
            
              if(messages.length > 0){
                $.each( messages, function( key, value ) {
                  $.each( value, function( k, v ) {
                      if(k == "id"){
                        mgs_id.push(v);
                      }else if(k == "created_at"){
                        created_at.push(v);
                      }else if(k == "parent_id"){
                        parent_id.push(v);
                      }else if(k == "body"){
                        body.push(v);
                      }else if(k == "element_name"){
                        element_name.push(v);
                      }else if(k == "button_name"){
                        button_name.push(v);
                      }else if(k == "sender_name"){
                        sender_name.push(v);
                      }else if(k == "sender_id"){
                        sender_id.push(v);
                      }else if(k == 'sender_avatar_url'){
                        if(v == null){
                          v = 'img/face.png';
                        }
                        sender_avatar_url.push(v);
                      }
                  });
                });
              }else{
                bodyMgs = '<a><p align="justify" class="divback2" ><font color="black" size="2">No Result Found</font></p></a>';
              }
              
              for(var i=0;i<body.length;i++){

                if(parent_id[i] == null){
                  p=0;
                  for(var j=0;j<body.length;j++){
                     p = p+1;
                    if(mgs_id[i] == parent_id[j]){
                       z = -1;
                       var k = parseInt(p)+z;
                        if(localStorage.sender_id == sender_id[k]){
                          replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;"><img src="img/delete.png" id="delete-'+k+'" class="ElementdeleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                        }else{
                          replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[k]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[k]+'&nbsp;</font></div><hr><div><p align="justify">'+body[k]+'</p></div><div class="row"></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:100%;height:auto;"/></div></div><br/>';
                        }
                    }else{
                     
                    }
                    
                 }
                  if(localStorage.sender_id == sender_id[i]){
                    bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="ElementreplyMgs" style="width:100%;height:auto;"/></div><div style="width:50%;float:left;" ><img src="img/delete.png" id="delete-'+i+'" class="ElementdeleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="ElementreplyHide bar bar-header item-input-inset" id="ElementreplyHide'+i+'" ><label class="item-input-wrapper"><input id="Elementreplymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:ElementreplymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
                  }else{
                    bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font>&nbsp;>&nbsp;<font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+element_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%"><div style="width:50%;float:left;"><div style="width:100%"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="ElementreplyMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="ElementreplyHide bar bar-header item-input-inset" id="ElementreplyHide'+i+'" ><label class="item-input-wrapper"><input id="Elementreplymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:ElementreplymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
                  }
                  replyappend ='';

                }else{
                  
                }
              }
              
              $('#ElementappwallListview').append(bodyMgs).trigger("create");

              if($('.ElementreplyHide').is(':visible')){
                $('.ElementreplyHide').toggle();
              }else{
                
              }

              $(".ElementreplyMgs").click(function(){
                    replyMgsNo1 = (this.id).split('-');
                    replyMgsNo = mgs_id[replyMgsNo1[1]];
                    var replyHide = "ElementreplyHide"+replyMgsNo1[1];
                    $('#'+replyHide).toggle();
              });

               $(".ElementdeleteMgs").click(function(){
                    var deleteMgsNo = (this.id).split('-');
                 
               
                    if(localStorage.appwallLoginData){
                      $.ajax({url:'http://build.myappbuilder.com/api/messages.json?api_key='+appKey+'&message_id='+mgs_id[deleteMgsNo[1]], type:"DELETE",data:{},
                        success:function(response){
                          $('#ElementappwallListview').empty();
                          $.ajax({
                            type: "GET",
                            url: "http://build.myappbuilder.com/api/messages.json",
                            data:{'api_key':appKey,'element_id':elementId},
                            cache: false,
                            success:function(response){
							
                              messages = response;
                              ElementAppWallPostFun();
                            },
                            error:function(error,status){
                       
                              
                              var error = error.responseText;
                              if(error.error == "Unauthorized"){
                               alert('Please Login');
                              }else {
                               alert('Login Error!');
                              }
                            }
                      });
                        },
                        error:function(){  alert('Failure');}
                      });
                    }else{
                      
                    }
              });
}

function ElementreplymessageFun(){

  if(localStorage.appwallLoginData){
    var replyarray = "Elementreplymessage"+replyMgsNo1[1];
    var replymessage = $('#'+replyarray).val();
      if(replymessage == ''){
         alert('Please Enter Your Reply...');
					 
      }else{
 
		 $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":replymessage,"message[parent_id]":replyMgsNo,"message[sender_id]":localStorage.sender_id,"api_key":appKey,"element_id":elementId},
          success:function(response){
            $('#ElementappwallListview').empty();
            $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey,'element_id':elementId},
                  cache: false,
                  success:function(response){
                
                    $('#'+replyarray).val('');
                    messages = response;
                    ElementAppWallPostFun();
                  },
                  error:function(error,status){
              
                    
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
                    }else {
                      alert('Login Error!');
                    }
                  }
            });
          },
          error:function(){  alert('Failure');}
        });
      }
  }else{
    
  }

}



function ElementpostmessageFun(){
	
  if(localStorage.appwallLoginData){
    var postmessage = $('#Elementpostmessage').val();
    if(postmessage == ''){
     alert('Please Enter Your Comments...');
					
    }else{

  $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":postmessage,"message[sender_id]":localStorage.sender_id,"api_key":appKey,"element_id":elementId},
        success:function(response){
          $('#ElementappwallListview').empty();
          $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey,'element_id':elementId},
                  cache: false,
                  success:function(response){
                 
                    $('#Elementpostmessage').val('');
                    messages = response;
                    ElementAppWallPostFun();
                  },
                  error:function(error,status){
                 
                    
                    var error =error.responseText;
                    if(error.error == "Unauthorized"){
                     alert('Please Login');
                    }else {
                     alert('Login Error!');
                    }
                  }
            });
        },
        error:function(){ alert('Failure');}
      });
    }
  }else{
    
  }
}


var dataURL1='';
var videoframebase1='';
var videoframe1='';
var customeditvideoid='';
var imageeditvideo='';

control.controller('videoeditCtrl',function($scope,$state,$ionicScrollDelegate,$ionicActionSheet,$ionicLoading,$stateParams,$http,$location,$ionicPopup,$rootScope){ 
  
    $ionicScrollDelegate.scrollTop();
 
 
  $scope.AppEditor = true;
  
    $scope.logbuttonlist1 = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
  
function readURL22(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#videoediturlimg').attr({'src':"img/btn_video.png"});
             $('#videoediturlimg').css({'width':'50px','height':'50px'}); 	
             $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');		
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#editvideo").change(function(){
	  var objectURL = window.URL.createObjectURL(this.files[0]);
	$('#videoframe').attr({'src':objectURL});
	  check=true;
      readURL22(this);
  });
  
  function readURL221(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#videoeditimg').attr('src', e.target.result); 
	    		 $('#videoeditimg').css({'width':'50px','height':'50px'});
             $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');		
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  
  $("#editvideothumb").change(function(){
	  check=true;
      readURL221(this);
  });
  
$scope.naveditvideo = function(){
   $state.go('navicon');
 } 
$scope.homeeditvideo = function(){
   $state.go('newapp');
 }
 $scope.backeditvideo = function(){
    $state.go('video');
  }
  
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 
 	
$scope.createeditvideo={}

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.createeditvideo.editvideotitle=videotitle;
$scope.createeditvideo.editvideotext= videodesc;
if(videothumb){
    $('#videoeditimg').attr({'src':videothumb});
    	$('#videoeditimg').css({'width':'50px','height':'50px'}); 		
  }
 if(videoimg){
    $('#editvideo').attr({'url':videoimg});   
    $('#videoediturlimg').attr({'src':videoframe});
   $('#videoediturlimg').css({'width':'50px','height':'50px'}); 			
  }

$scope.updatevideo = function(){            
	
		 videoframebase1 = dataURL.replace("data:image/png;base64,","");

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
	
   var formData = new FormData();
      formData.append('api_key', appKey);
      formData.append('id', videoelement);
      formData.append('title', $scope.createeditvideo.editvideotitle);
      formData.append('text',$scope.createeditvideo.editvideotext);
       if(videoframebase1){
      formData.append('video_frame_base64',videoframebase1);
      formData.append('video_frame_title','image.png');
	}
      
  if(check==true){  
	  	if((($("#editvideo").get(0).files[0].size) / 1024 / 1024) <= 10){
			
			formData.append('video', $("#editvideo").get(0).files[0]);
		}
		 else{
			  var alertPopup = $ionicPopup.alert({
				 title: 'MAB',
				 template: 'Please choose Video File below 10MB!'
			   });
			   alertPopup.then(function(res) {
			   });
			}   

            if($('#editvideothumb').get(0).files[0]){
				formData.append('video_thumbnail', $('#editvideothumb').get(0).files[0]);
			}else{
				formData.append('video_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
			}
          
	  }else{
		   $('#editvideo').attr({'url':videoimg});   
			$('#videoediturlimg').attr({'src':videoframe});
		   $('#videoediturlimg').css({'width':'50px','height':'50px'}); 		
		   $('#videoeditimg').attr({'src':videothumb});
    	   $('#videoeditimg').css({'width':'50px','height':'50px'}); 
	   }        
                            
	  $http.put('http://build.myappbuilder.com/api/elements/update_video.json', formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
						  $ionicLoading.hide();
					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                        var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      }); 
 
}
 $scope.cuseditvideo={}
 
$scope.createvideoedit = function(){
	
    if($scope.cuseditvideo.customeditvideoTitle){
      if($scope.cuseditvideo.customeditvideovalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':videoelement,'title':$scope.cuseditvideo.customeditvideoTitle,'value':$scope.cuseditvideo.customeditvideovalue},
          success:function(response){
			 customeditvideoid = response.id;
     
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':videoelement},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.editvideopage = response;
						   $state.reload();   
                      
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.cuseditvideo.customeditvideoTitle='';
              $scope.cuseditvideo.customeditvideovalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
               var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }


$scope.removevideoCustomValue = function(id){

    customeditvideoid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customeditvideoid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':videoelement},
                        cache: false,
                        success:function(response){
                           $ionicLoading.hide();
						    $scope.editvideopage = response;
						   $state.reload()						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});


var customdisvideoid='';
var imagedisvideo='';

control.controller('videodisplayCtrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$ionicPopup,$http,$ionicActionSheet){ 

  $ionicScrollDelegate.scrollTop();

$scope.AppEditor = true;
  
    $scope.logbuttonlist1 = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
  
 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall');
  }
function readURL26(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#videodisurlimg').attr({'src':"img/btn_video.png"});
				$('#videodisurlimg').css({'width':'50px','height':'50px'});
				$('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')'); 		
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#videodisplay").change(function(){
	  
	  var objectURL = window.URL.createObjectURL(this.files[0]);
	$('#videoframe').attr({'src':objectURL});
	
	    check=true;
	 
      readURL26(this);
  });
  
  
  function readURL261(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#videodisplayimg').attr('src', e.target.result); 
	    		 $('#videodisplayimg').css({'width':'50px','height':'50px'});
             $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');		
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#video_thumbdisplay").change(function(){
	  check=true;
      readURL261(this);
  });
  
$scope.backdisplayvideo = function(){
   $state.go('previewvideo');
 } 
$scope.homedisplayvideo = function(){
   $state.go('sample');
 }
 
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 
 $scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disvideopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });       
                           
$scope.createdisplayvideo={}
$scope.cusdisplayvideo={}

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.createdisplayvideo.displayvideotitle = elementtitle;
$scope.createdisplayvideo.displayvideotext = elementtext;

if(contentvideothumb){
    $('#videodisplayimg').attr({'src':contentvideothumb});
    $('#videodisplayimg').css({'width':'50px','height':'50px'}); 		
  }
 if(contentvideo){
    $('#videodisplay').attr({'url':contentvideo});
      $('#videodisurlimg').attr({'src':contentvideoframe});
    $('#videodisurlimg').css({'width':'50px','height':'50px'});  
  }
$scope.updatevideodisplay = function(){            
		
		 videoframebase1 = dataURL.replace("data:image/png;base64,","");
		 
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
	
   var formData = new FormData();
      formData.append('api_key', appKey);
      formData.append('id', elementId);
      formData.append('title', $scope.createdisplayvideo.displayvideotitle);
      formData.append('text',$scope.createdisplayvideo.displayvideotext);
      if(videoframebase1){
       formData.append('video_frame_base64',videoframebase1);
      formData.append('video_frame_title','image.png');
      }
  if(check==true){  
	  	  if((($("#videodisplay").get(0).files[0].size) / 1024 / 1024) <= 10){

			formData.append('video', $("#videodisplay").get(0).files[0]);
		 }
		   else{
				  var alertPopup = $ionicPopup.alert({
					 title: 'MAB',
					 template: 'Please choose Video File below 10MB!'
				   });
				   alertPopup.then(function(res) {
				   });
           } 
            if($('#video_thumbdisplay').get(0).files[0]){
				formData.append('video_thumbnail', $('#video_thumbdisplay').get(0).files[0]);
			}else{
				formData.append('video_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
			}
          
	  }else{
		     $('#videodisplay').attr({'url':contentvideo});
      $('#videodisurlimg').attr({'src':contentvideoframe});
    $('#videodisurlimg').css({'width':'50px','height':'50px'}); 		
		    $('#videodisplayimg').attr({'src':contentvideothumb});
    $('#videodisplayimg').css({'width':'50px','height':'50px'});  
	   }        
                            
	  $http.put('http://build.myappbuilder.com/api/elements/update_video.json', formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
						  $ionicLoading.hide();
					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                        var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      });
}  
  

 $scope.createvideodis = function(){
	
    if($scope.cusdisplayvideo.customdisvideoTitle){
      if($scope.cusdisplayvideo.customdisvideovalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.cusdisplayvideo.customdisvideoTitle,'value':$scope.cusdisplayvideo.customdisvideovalue},
          success:function(response){
			 customdisvideoid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                      
						    $scope.disvideopage = response;                 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
              $scope.cusdisplayvideo.customdisvideoTitle='';
              $scope.cusdisplayvideo.customdisvideovalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }
  
$scope.removevideodisCustomValue = function(id){

    customdisvideoid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisvideoid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disvideopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

var amenities1='';
var avatarimg='';

control.controller('previewpicCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$http,$ionicModal,$ionicActionSheet){
	 
$scope.data2={}
$scope.elementTitle = elementtitle;
$scope.description = elementtext;

$scope.logprevtext = function(){
	$state.go('picdisplay');
}
$scope.homeprevtext = function(){
	$state.go('sample');
}
$scope.backprevtext = function(){
	$state.go('chapterlist');
}

 $scope.appTitle = appTitle;	
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 $scope.AppEditor = false;

  $scope.logedittext = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }

$scope.float1=float1;

$scope.editpicpage =previewpic;
     
  
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.edittxtpage = response;
						   $state.reload();   						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });        
              
               $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tags.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){ 
			  						
							 var datatag1=response;
							  if(response.length == 0){
								 console.log(response.length);
								 	$scope.tags=response;
							 }
							 else{
							 for(var i=0;i<datatag1.length;i++){
							   if(i==0){
							   amenities1 = datatag1[i].name;
							
							   }
							   else{
							   amenities1 = amenities1+','+datatag1[i].name;
							   }
							   }                   
							$scope.tags = amenities1.split(",");          
                            $ionicLoading.hide();      
						}                   
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });            

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
	 $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-right'
          }).then(function(modal) {
            $scope.registerpop = modal;
          });
     
       $scope.addsubs = function() {
            $scope.registerpop.show();
          };       
  

});


control.controller('previewtaskCtrl',function($scope,$state,$ionicLoading,$ionicPopup){ 
  
  $scope.logprevtask=function(){
	  $state.go('taskdisplay');
  }
  $scope.backprevtask=function(){
      $state.go('chapterlist');
   }
  $scope.homeprevtask=function(){
       $state.go('sample');
  }

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
						
                          $ionicLoading.hide();   
						     $scope.taskdisplaypage = response;
						   $state.reload();   	  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
              
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						   
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });               


});

control.controller('previewformCtrl',function($scope,$state,$ionicLoading,$ionicPopup){ 
  
  $scope.logprevform=function(){
	  $state.go('formdisplay');
  }
  $scope.backprevform=function(){
      $state.go('chapterlist');
   }
  $scope.homeprevform=function(){
      $state.go('sample');
  }

$scope.elementemail = elementemail;

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
   
 $scope.float1=float1;
              
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
						    $scope.disformtype = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });     
                
});

control.controller('previewaudioCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicModal){ 
  
  $scope.logprevaudio=function(){
	  $state.go('audiodisplay');
  }

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 $scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });                                  

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.elementtitle = elementtitle;
$scope.elementtext = elementtext;

    $('#audioprevimg').attr({'src':contentimg});
    $('#audioprevimg').css({'width':'50px','height':'50px'}); 		

     $('#audioprevurlimg').attr({'src':'img/audio.png'});
    $('#audioprevurlimg').css({'width':'50px','height':'50px'});   	
  

$scope.backprevaudio=function(){
    $state.go('chapterlist');
 }
$scope.homeprevaudio=function(){
    $state.go('sample');
}

  $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-right'
          }).then(function(modal) {
            $scope.registerpop = modal;
          });

 if(audioprevurlimg){
	  $scope.audioclick=function(){
		  $scope.registerpop.show();
		   $('.playaudio').attr({'src':contentaudio});
	  }
  }
  
  $scope.audioclickclose=function(){
		$('.playaudio').attr({'src':''});
		$scope.registerpop.hide(); 
	}
});

control.controller('previewvideoCtrl',function($scope,$state,$ionicLoading,$ionicPopup,$http,$ionicModal){
  
$scope.logprevvideo=function(){
	  $state.go('videodisplay');
  }  
$scope.backprevvideo = function(){
   $state.go('chapterlist');
 } 
$scope.homeprevvideo = function(){
   $state.go('sample');
 }
 
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 	
 	$scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
							
                          $ionicLoading.hide();
							$scope.disvideopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });  
              

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
 
$scope.elementtitle = elementtitle;
$scope.elementtext = elementtext;
$scope.contentvideothumb=contentvideothumb;
$scope.contentvideoframe=contentvideoframe;

    $('#videoprevimg').attr({'src':contentvideothumb});
    $('#videoprevimg').css({'width':'50px','height':'50px'}); 		

      $('#videoprevurlimg').attr({'src':'img/video.png'});
    $('#videoprevurlimg').css({'width':'50px','height':'50px'});  

	$scope.videoclick=function(){
		$state.go('playvideo');
	}
	
});
var avatarimg='';
var avatarimg1='';
var subid='';
var subeditid='';
var subfullname='';
var subemail='';
var subphone='';
var subusername='';
var subpass='';
var subconfirmpass='';
				   
var subid1='';
var subeditid1='';
var subfullname1='';
var subemail1='';
var subphone1='';
var subusername1='';
var subpass1='';
var subconfirmpass1='';


control.controller('sublistCtrl',function($scope,$state,$ionicLoading,$http, $ionicPopup,$ionicModal, $ionicActionSheet){

                   

$scope.backsublist=function(){

     $state.go('app');

}

                   $scope.avatar123=function(val){  

                   if(val==null){

                   return 'img/btn_avatar.png';

                   }

                   else{

                   return val;

                   }
                   }

                   
      
				$scope.nextpage = function(id,avatar,fullname,email,phone,user) {
                   subeditid1=id;
                   subavatar1=avatar;
                   subfullname1=fullname;
                   subemail1=email;
                   subphone1=phone;
                   subusername1=user;
                   $state.go('viewdetails');
               }
               
$scope.appTitle = appTitle;

  

$.ajax({

      type: "GET",

      url: "http://build.myappbuilder.com/api/subscribers.json",

      data:{'api_key':appKey},

      cache: false,

      success:function(response){

       $scope.subscriber =response;
       $state.reload();
          $ionicLoading.hide();

      },

      error:function(error,status){

          $ionicLoading.hide();

         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

      }

});

     function readURL30(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
	    	
           $('.file-input-wrapper5 > .btn-file-input5').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
                

                   $ionicModal.fromTemplateUrl('my-modal.html', {

                                               scope: $scope,

                                               animation: 'slide-in-right'

                                               }).then(function(modal) {

                                                       $scope.registerpop = modal;

                                                       });

                   

                   $scope.addsubs = function() {
					   
					  $state.reload();
					  
				    $('.file-input-wrapper5 > .btn-file-input5').css('background-image', 'url(img/add_image.png)');				

                   $scope.data2.firstname='';

					$scope.data2.lastname='';

					$scope.data2.email='';

					$scope.data2.username='';

					$scope.data2.phone='';
					
					$scope.data2.password='';
					 
                    $scope.data2.confirmpassword='';

                   $scope.registerpop.show();
                   
					$("#tst").change(function(){
						  readURL30(this);
					  });
					  
					

                   };


                   $scope.removesubs=function(){
					  
                   $.ajax({

                          type: "GET",

                          url: "http://build.myappbuilder.com/api/subscribers.json",

                          data:{'api_key':appKey},

                          cache: false,

                          success:function(response){


                          $scope.subscriber = response;

                          $ionicLoading.hide();

                          },

                          error:function(error,status){

                          $ionicLoading.hide();

                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });
						
                    $scope.registerpop.hide();

                   }

                   

                   $scope.data2={}

                   

                  $scope.createsubs=function(){

                   

                   $ionicLoading.show({

                                      content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',

                                      animation: 'fade-in',

                                      showBackdrop: true,

                                      maxWidth: 200,

                                      showDelay: 0

                                      });

                   

                   var formData = new FormData();

                   formData.append('api_key',appKey);

                   formData.append('subscriber[firstname]',$scope.data2.firstname);

                   formData.append('subscriber[lastname]',$scope.data2.lastname);

                   formData.append('subscriber[username]',$scope.data2.username);

                   formData.append('subscriber[email]',$scope.data2.email);

                   formData.append('subscriber[phone]',$scope.data2.phone);
                   
                   formData.append('subscriber[password]',$scope.data2.password);
                   
                   formData.append('subscriber[password_confirmation]',$scope.data2.confirmpassword);
                   
                   
                    if($("#tst").get(0).files[0] != undefined){

				    formData.append('subscriber[avatar]',$("#tst").get(0).files[0]);
					
					}
                   

                   $.ajax({

                          type: "POST",

                          url: "http://build.myappbuilder.com/api/subscribers.json",

                          data: formData,

                          cache: false,

                          contentType: false,

                          processData: false,

                          success:function(response){

                          subid=response.id;

                          $.ajax({

									  type: "GET",

									  url: "http://build.myappbuilder.com/api/subscribers.json",

									  data:{'api_key':appKey},

									  cache: false,

									  success:function(response){

									   $scope.subscriber =response;
									
									   $state.reload();

										  $ionicLoading.hide();
										
									  },

									  error:function(error,status){

										  $ionicLoading.hide();

										   var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

									  }

								});
								
							 $scope.registerpop.hide();
							 
                          },error:function(error){

                          $ionicLoading.hide();

                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });


                   }


                   $ionicModal.fromTemplateUrl('my-modal1.html', {

                                               scope: $scope,

                                               animation: 'slide-in-right'

                                               }).then(function(modal) {

                                                       $scope.registerpop1 = modal;

                                                       });


                   $scope.editagent = function(id,avatar,fullname,email,phone,username,password,confirmpass) {
					

                   subeditid=id;

                   subavatar=avatar;

                   subfullname=fullname;

                   subemail=email;

                   subphone=phone;
                   
                   subusername=username;
                   
                    subpass=password;
                    
				   subconfirmpass=confirmpass;

                   $scope.registerpop1.show();
                   
                   $("#tst").change(function(){
						  readURL30(this);
					  });

                   $scope.data3.email=subemail;

                   $scope.data3.phone=subphone;
                   
                   $scope.data3.username=subusername;
                   
                    $scope.data3.password=subpass;
                    
                   $scope.data3.confirmpassword=subconfirmpass;

                   var name=subfullname.split("   ");

                   $scope.data3.firstname=name[0];

                   $scope.data3.lastname=name[1];

                   if(subavatar){
						
						$('.file-input-wrapper5 > .btn-file-input5').css('background-image', 'url('+subavatar+')');

                   }

                   else{

				     	$('.file-input-wrapper5 > .btn-file-input5').css('background-image', 'url(img/add_image.png)');				

                   }


                   };

                  

                   $scope.removesubs1=function(){

                   $.ajax({

                          type: "GET",

                          url: "http://build.myappbuilder.com/api/subscribers.json",

                          data:{'api_key':appKey},

                          cache: false,

                          success:function(response){

                          $scope.subscriber = response;

                          $ionicLoading.hide();

                          },

                          error:function(error,status){

                          $ionicLoading.hide();

                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });

                   $scope.registerpop1.hide();

                   }



 $scope.data3={}

      

                   $scope.updatesubs=function(){

                   

                   $ionicLoading.show({

                                      content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',

                                      animation: 'fade-in',

                                      showBackdrop: true,

                                      maxWidth: 200,

                                      showDelay: 0

                                      });

                   

                   var formData = new FormData();

                   formData.append('api_key',appKey);

                    formData.append('id',subeditid);

                   formData.append('firstname',$scope.data3.firstname);

                   formData.append('lastname',$scope.data3.lastname);

                   formData.append('username',$scope.data3.username);

                   formData.append('email',$scope.data3.email);

                   formData.append('phone',$scope.data3.phone);
                   
                   formData.append('password',$scope.data3.password);
                     
                   formData.append('password_confirm',$scope.data3.confirmpassword);
                   
                   if($("#tst").get(0).files[0] != undefined){
                   
                    formData.append('avatar',$("#tst").get(0).files[0]);
				}
                  

                   $.ajax({

                         type: "PUT",

                         url: "http://build.myappbuilder.com/api/subscribers.json",

                         data: formData,

                         cache: false,

                         contentType: false,

                         processData: false,

                         success:function(response){


                              subid1=response.id;
                         
								  
								 $.ajax({

									  type: "GET",

									  url: "http://build.myappbuilder.com/api/subscribers.json",

									  data:{'api_key':appKey},

									  cache: false,

									  success:function(response){
										  

									   $scope.subscriber =response;
									   
									   $state.reload();

										  $ionicLoading.hide();
										
									  },

									  error:function(error,status){

										  $ionicLoading.hide();

										  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

									  }

								});
                    
							 $scope.registerpop1.hide();
							 
                          },error:function(error){

                          $ionicLoading.hide();

                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });


                   }            

});

control.controller('homeCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork','$ionicLoading', '$location', function($ionicPlatform,$scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
            
                              
                         $ionicLoading.show({
                                            template: 'Loading...'
                                            });
                         
                         function initialize() {
                         var feed = new google.feeds.Feed($rootScope.RSS);
                         
                         feed.setNumEntries(50);
                         feed.load(function(result) {
                                   $ionicLoading.hide();
                                   if(!result.error) {
                                   $rootScope.entries = result.feed.entries;
                                   $location.path('/entries');
                                   } else {
           
									alert("ERROR :" +result.error.message);
					
                                   $location.path('chapterlist');
                                   }
                                   });
                         
                         }
                         
                         $ionicPlatform.ready(function() {
                                              
                                  
                                            
                                          google.load("feeds", "1",{callback:initialize});    
                                              });
                                
                                $rootScope.TITLE = "Raymond Camden's Blog";
                                $rootScope.RSS = elementrssurl;

                         
                         }])

control.controller('entriesCtrl', ['$scope','$rootScope', '$location', function($scope,$rootScope,$location) {
                          
                                   $scope.backprevfeed=function(){
                                      $location.path('chapterlist');
                                   }
                                   
                                   $scope.editrss=function(){
                                   $location.path('rssdisplay');
                                   }
                                
                                $scope.float1=float1;
                                   
                            if(!$rootScope.entries) $location.path('/');
                            
                            $rootScope.notHome = false;
                            
                            $scope.entries = $rootScope.entries;
                                   
                                   $scope.AppEditor = false;
                                   
                                   $scope.eyefeed = function(){
                                   if($scope.AppEditor == false){
                                   $scope.AppEditor = true;
                                   }else{
                                   $scope.AppEditor =false;
                                   }
                                   }
                                   
                                   $scope.elementrssurl = elementrssurl;
                                   $scope.elementtext = elementtext;
                                   
                            }])


control.controller('entryCtrl', ['$scope', '$rootScope', '$location', '$stateParams', function($scope, $rootScope,$location, $stateParams) {
                          
                                 $scope.backpreventry=function(){
                                 $location.path('entries');
                                 }
                          
                          $scope.float1=float1;
                          
                          if(!$rootScope.entries) $location.path('/');
                          
                          $rootScope.notHome = true;
                          
                          $scope.index = $stateParams.index;
                          $scope.entry = $rootScope.entries[$scope.index];
                          
                          $scope.readEntry = function(e) {
                          window.open(e.link, "_blank");
                          };
                          
                          }]);

control.controller('viewdetailsCtrl',function($scope,$state,$ionicLoading,$http, $ionicModal, $ionicPopup,$ionicActionSheet){
     
     $scope.subfullname1=subfullname1;
     $scope.subemail1=subemail1;
     $scope.subphone1=subphone1;
     $scope.subavatar1=subavatar1;              
     $scope.subusername1=subusername1;
       
                   $scope.backviewdetails=function(){
                   $state.go('sublist');
                   }
                   
                   $scope.appTitle = appTitle;

 if(subavatar1 == null){ 
		   $('#checkavatar21').attr({'src':'img/btn_avatar.png'});
     }
                           
 });

control.controller('sample1Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){
                                                        
     $scope.appKey = appList.apps;
     
  $ionicScrollDelegate.scrollTop();

 $scope.AppEditor =false;

  for(var i =0;i<(appList.apps).length;i++){
    if((appList.apps[i]).app_image == null){
         (appList.apps[i]).app_image = "img/no_image.png";

    }
  }
  
 $scope.listViewClickFtn = function(appId,appTit){
	 
  $scope.appKey = appList.apps;

    appKey = appId;
    appTitle = appTit;
    $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
              $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/buttons.json",
                  data:{'api_key':appId},
                  cache: false,
                  success:function(response){
                    
                    buttonArray = response;
					
					   $.ajax({
                                 type: "GET",
                                 url: "http://build.myappbuilder.com/api/apps/general.json",
                                 data:{'api_key':appId},
                                 cache: false,
                                 success:function(response1){
                                 console.log('**************123456*************'+response1.bar_color);
                                 console.log(JSON.stringify(response1));
                                 
                                 barcolor = response1.bar_color;
                                 buttoncolor= response1.button_color;
                                 barbuttoncolor= response1.bar_button_color;
									
									   $scope.bar_color=barcolor;
                                 $scope.button_color=buttoncolor;
                                 $scope.bar_button_color=barbuttoncolor;
                                 
                    $.ajax({url:'http://build.myappbuilder.com/api/app_wall_settings.json', type:"GET",data:{'api_key':appKey},
                      success:function(response){
                          Appwall = response;
                          $ionicLoading.hide();
                     $state.go('app1');
                    
                      },
                      error:function(){
                          $ionicLoading.hide();
                         var alertPopup = $ionicPopup.alert({
					   title: 'FrontEndBuilder',
					   template:'Failure'
					 });
					 alertPopup.then(function(res) {
					 });
                      }
                    });
                    
                  },
                           error:function(error,status){
                                 
                               var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'FrontEndBuilder',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                                 }
                                 });
                          
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'FrontEndBuilder',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });
     
                   }
                   
   $scope.logout1 = function(){
	  OAuth.clearCache('twitter');
            OAuth.clearCache('facebook');
            OAuth.clearCache('google');
  $state.go('login');     
  }
 });
 
control.controller('home1Ctrl', ['$ionicPlatform','$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform,$scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
                                
                                
                                $ionicLoading.show({
                                                   template: 'Loading...'
                                                   });
                                
                                function initialize() {
                                var feed = new google.feeds.Feed($rootScope.RSS);
                                
                                feed.setNumEntries(30);
                                feed.load(function(result) {
                                          $ionicLoading.hide();
                                          if(!result.error) {
                                          $rootScope.entries = result.feed.entries;
                                          $location.path('/entries1');
                                          } else {
                                          alert("ERROR :" +result.error.message);
                                   $location.path('chapterlist1');
                                          }
                                          });
                                
                                }
                                
                                 $ionicPlatform.ready(function() {
   
                                          google.load("feeds", "1",{callback:initialize});    
                                              });
                                
                                $rootScope.TITLE = "Raymond Camden's Blog";
                                $rootScope.RSS = elementrssurl;

                                
                                }])

control.controller('entries1Ctrl', ['$scope', '$rootScope','$location', function($scope,$rootScope,$location) {
                                   
                                   $scope.backprevfeed=function(){
                                   $location.path('chapterlist1');
                                   }
                                    
                                   
                                   if(!$rootScope.entries) $location.path('/');
                                   
                                   $rootScope.notHome = false;
                                   
                                   $scope.entries = $rootScope.entries;
                                   
                                   $scope.AppEditor = false;
                                   
                                   $scope.eyefeed = function(){
                                   if($scope.AppEditor == false){
                                   $scope.AppEditor = true;
                                   }else{
                                   $scope.AppEditor =false;
                                   }
                                   }
                                   
                                   $scope.elementrssurl = elementrssurl;
                                   $scope.elementtext = elementtext;
                                   
                                   $scope.float1=float1;
                                   
                                   }])


control.controller('entry1Ctrl', ['$scope', '$rootScope', '$location', '$stateParams', function($scope, $rootScope, $location, $stateParams) {
                                 
                                 $scope.backpreventry=function(){
                                 $location.path('entries1');
                                 }
                                 
                                 if(!$rootScope.entries) $location.path('/');
                                 
                                 $rootScope.notHome = true;
                                 
                                 $scope.index = $stateParams.index;
                                 $scope.entry = $rootScope.entries[$scope.index];
                                 
                                 $scope.readEntry = function(e) {
                                 window.open(e.link, "_blank");
                                 };
                                
                                $scope.float1=float1;
                                 
                                 }]);

control.controller('previewaudio1Ctrl',function($scope,$state,$ionicPopup,$ionicLoading, $ionicModal){ 
 

$scope.appTitle = appTitle;
                   
                    $scope.elementAppwallgoFun=function(){
					  $state.go('elementAppWall1');
				  } 
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });                                  

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
	
          $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-right'
          }).then(function(modal) {
            $scope.registerpop = modal;
          });
 
$scope.elementtitle = elementtitle;
$scope.elementtext = elementtext;
   $('#audioprevimg').attr({'src':contentimg});
    $('#audioprevimg').css({'width':'50px','height':'50px'}); 		

     $('#audioprevurlimg').attr({'src':'img/audio.png'});
    $('#audioprevurlimg').css({'width':'50px','height':'50px'});   	
  
  if(audioprevurlimg){
	  $scope.audioclick=function(){
		  $scope.registerpop.show();
		   $('.playaudio').attr({'src':contentaudio});
	  }
  }

 $scope.audioclickclose=function(){
	  console.log('s');
		$('.playaudio').attr({'src':''});
		$scope.registerpop.hide(); 
	}
	
$scope.backprevaudio=function(){
    $state.go('chapterlist1');
 }
$scope.homeprevaudio=function(){
    $state.go('sample1');
}

  
});

control.controller('sublist1Ctrl',function($scope,$state,$ionicLoading,$http, $ionicPopup,$ionicModal, $ionicActionSheet){
                   
                   $scope.backsublist=function(){
                   $state.go('app1');
                   }
                   $scope.avatar123=function(val){
                   if(val==null){
                   return 'img/btn_avatar.png';
                   }
                   else{
                   return val;
                   }
                   
                   }
                   
                   $scope.appTitle = appTitle;
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/subscribers.json",
                          data:{'api_key':appKey},
                          cache: false,
                          success:function(response){
                          $scope.subscriber = response;
                          $ionicLoading.hide();
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });
                   
                           
                                           
                   });
                   
control.controller("appWall1Ctrl",function($scope,$state, $ionicLoading,$http,$ionicPopup){
                   
                   $scope.appTitle = appTitle;
                   
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   
                   var button_wall = '';
                   var element_wall = '';
                   
                   $scope.homeappwall = function(){
                   $state.go('sample1');
                   }
                   
                   $scope.backappwall = function(){
                   $state.go('app1');
                   }

                   $scope.messages = "";
                   $scope.messages.data="";
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/messages.json",
                          data:{'api_key':appKey},
                          cache: false,
                          success:function(response){
                        $ionicLoading.hide();
                          messages = response;
                          appWallPostFun();
                          },
                          error:function(error,status){
                         
                          $ionicLoading.hide();
                          var error = JSON.parse(error.responseText);
                          if(error.error == "Unauthorized"){
                          var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
                          }else {
                         var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          }
                          });
                   
                   }); 

control.controller('buttonAppWall1Ctrl',function($scope,$state,$ionicPopup,$ionicLoading){
                   
                   $scope.backbuttonAppwall = function(){
                   $state.go('chapterlist1');
                   }
                   
                   $scope.homebuttonAppwall = function(){
                   $state.go('sample1');
                   }
                   
                   $scope.appTitle = appTitle;
                   
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   messages = '';
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/messages.json",
                          data:{'api_key':appKey,'button_id':buttonId},
                          cache: false,
                          success:function(response){
                         $ionicLoading.hide();
                          messages = response;
                          ButtonAppWallPostFun();
                          },
                          error:function(error,status){
                        $ionicLoading.hide();
                          var error = JSON.parse(error.responseText);
                          if(error.error == "Unauthorized"){
                         var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
                          }else {
                         var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          }
                          });
                   
                   });

control.controller('elementAppWall1Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicModal,$ionicScrollDelegate){
                   
                   $scope.backelementAppwall = function(){
                   $state.go('chapterlist1');
                   }
                   
                   $scope.homeelementAppwall = function(){
                   $state.go('sample1');
                   }
                   
                   $scope.appTitle = appTitle;
                   
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   messages = '';
                  
                   $.ajax({url:'http://build.myappbuilder.com/api/messages.json',type:"GET",data:{"api_key":appKey,"element_id":elementId},
                          success:function(response){
                           $ionicLoading.hide();
                          messages = response;
                          ElementAppWallPostFun();
                          },
                          error:function(error,status){
                            $ionicLoading.hide();
                          var error = JSON.parse(error.responseText);
                          if(error.error == "Unauthorized"){
                           var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
                          }else {
                      var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          }
                          });
                   
                   });

var amenities1='';

control.controller('previewpic1Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$http){
                   
                   
                   $scope.elementTitle = elementtitle;
                   $scope.description = elementtext;
                   
        
                   $scope.homeprevtext = function(){
                   $state.go('sample1');
                   }
                   $scope.backprevtext = function(){
                   $state.go('chapterlist1');
                   }
                  
                  
                   $scope.elementAppwallgoFun=function(){
					  $state.go('elementAppWall1');
				  } 
                  $scope.appTitle = appTitle;
                   
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   $scope.AppEditor = false;
                   
                   $scope.logedittext = function(){
                   if($scope.AppEditor == false){
                   $scope.AppEditor = true;
                   }else{
                   $scope.AppEditor =false;
                   }
                   }
                  
                  $scope.editpicpage =previewpic; 
                   
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/custom_values.json",
                          data:{'api_key':appKey,'element_id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          $scope.edittxtpage = response;
                          $state.reload();
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/elements/tags.json",
                          data:{'api_key':appKey,'id':elementId},
                          cache: false,
                          success:function(response){
                          var datatag1=response;
                          console.log(response);
                            if(response.length == 0){
								 console.log(response.length);
								 	$scope.tags=response;
							 }
							 else{
                          for(var i=0;i<datatag1.length;i++){
                          
                          if(i==0){
                          
                          amenities1 = datatag1[i].name;
                          
                          }
                          
                          else{
                          
                          amenities1 = amenities1+','+datatag1[i].name;
                          
                          }
                          
                          }
                          
                          $scope.tags = amenities1.split(",");
                          $ionicLoading.hide();
					  }
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });
                   

                   
                   $scope.tinymceOptions = {
                   
                   
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   });


control.controller('previewtask1Ctrl',function($scope,$state,$ionicPopup,$ionicLoading){
           
                   $scope.backprevtask=function(){
                   $state.go('chapterlist1');
                   }
                   $scope.homeprevtask=function(){
                   $state.go('sample1');
                   }
                   
                   $scope.appTitle = appTitle;
                   
                    $scope.elementAppwallgoFun=function(){
					  $state.go('elementAppWall1');
				  } 
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/custom_values.json",
                          data:{'api_key':appKey,'element_id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          $scope.taskdisplaypage = response;
                          $state.reload();
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/elements/tasks.json",
                          data:{'api_key':appKey,'id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          $scope.taskdisplay = response;
                          $state.reload();
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });
                   
                   
                   });

control.controller('previewform1Ctrl',function($scope,$state,$ionicPopup,$ionicLoading){
                   
         
                   $scope.backprevform=function(){
                   $state.go('chapterlist1');
                   }
                   $scope.homeprevform=function(){
                   $state.go('sample1');
                   }
                   
                   $scope.elementemail = elementemail;
                   
                   $scope.appTitle = appTitle;
                    $scope.elementAppwallgoFun=function(){
					  $state.go('elementAppWall1');
				  } 
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/custom_values.json",
                          data:{'api_key':appKey,'element_id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          $scope.disformtype = response;
                          $state.reload();   	  
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                          }
                          });     
                   
                   });


control.controller('previewvideo1Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$http, $ionicModal){
                 
                   $scope.backprevvideo = function(){
                   $state.go('chapterlist1');
                   } 
                   $scope.homeprevvideo = function(){
                   $state.go('sample1');
                   }
                   
                   $scope.appTitle = appTitle;	
                    $scope.elementAppwallgoFun=function(){
					  $state.go('elementAppWall1');
				  } 
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/custom_values.json",
                          data:{'api_key':appKey,'element_id':elementId},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          $scope.disvideopage = response;
                          $state.reload();       
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
					 
                          }
                          });  
                   
                   
                   $scope.tinymceOptions = {
                   
                   
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   $scope.elementtitle = elementtitle;
                   $scope.elementtext = elementtext;
                   $scope.contentvideothumb=contentvideothumb;
					$scope.contentvideoframe=contentvideoframe;
                   
                   $('#videoprevimg').attr({'src':contentvideothumb});
                   $('#videoprevimg').css({'width':'50px','height':'50px'}); 		
                   
                   $('#videoprevurlimg').attr({'src':'img/video.png'});
                   $('#videoprevurlimg').css({'width':'50px','height':'50px'});  
                   
              
						$scope.videoclick1=function(){
							$state.go('playvideo1');
						}
						
                   });

control.controller('app1Ctrl',function($scope,$state,$ionicModal,$ionicLoading,$ionicPopup,$http){
    
 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.appwallgoFun = function(){
    $state.go('appWall1');
  }
  
 var chapterArray = [];
  for (var i = 0; i < buttonArray.length; i++) {
        chapterArray.push(buttonArray[i]);
  }
  
	$scope.items = chapterArray;

$scope.appTitle = appTitle;
                   
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }
                   
 $scope.chapterClick = function(id,title){

    buttonId = id;
    buttonTitle = title;
   
    $state.go('chapterlist1');
  }

 $scope.backbuttonlist = function(){

    $state.go('sample1');
  }
  
 });

control.controller('chapterlist1Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 
  
 $scope.homechapterlist = function(){
	$state.go('sample1');
  }   
 $scope.backchapterlist = function(){
     $state.go('app1');
  }  
  	
	
 for (var i = 0; i < buttonArray.length; i++) {
      if(buttonId == buttonArray[i].id){
        elementArray = buttonArray[i].elements;    
      }
  } 
 
 $scope.elementArray = elementArray;
 
$scope.appTitle = appTitle;
                   
                   
                   if(barcolor == 'undefined'){
                   $scope.bar_color = 'bar-positive';
                   }
                   else
                   {
                   $scope.bar_color = 'bar-'+barcolor;
                   }
                   
                   if(barbuttoncolor == 'undefined'){
                   $scope.bar_button_color ='button-positive';
                   }
                   else
                   {
                   $scope.bar_button_color ='button-'+barbuttoncolor;
                   }
                   
                   if(buttoncolor == 'undefined'){
                   $scope.button_color = 'button-positive';
                   }
                   else
                   {
                   $scope.button_color='button-'+buttoncolor;
                   }

  $scope.buttonTitle = buttonTitle;

 $scope.subTitClickFtn = function(id,title,type,email,text,url,rssurl,audioimg,audiourl,videoimg,videourl,tags,frame){

    elementId = id;
    elementtype=type;
    elementemail = email;
	elementurl = url;
	elementtext= text;
	elementtitle= title;
	elementrssurl = rssurl;
	contentimg = audioimg;
	contentaudio = audiourl;
	contentvideo = videourl;
	contentvideothumb = videoimg;
	contentvideoframe=frame;
	tagging=tags;

    for (var i = 0; i < elementArray.length; i++) {
      if(elementtype == "audio"){
		$state.go('previewaudio1');
      }
      
    if(elementtype == "rss_feed"){
		$state.go('home1');
      }

    if(elementtype == "default"){
		
		$.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							previewpic =response;
						  $state.go('previewpic1');     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              
		
      }
      
     if(elementtype == "tasks_list"){
		$state.go('previewtask1');
      }
      
      if(elementtype == "web_page"){
            var ref = window.open(elementurl, '_blank', 'location=yes');
            ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
      }
      
      if(elementtype == "contact_form"){
		$state.go('previewform1');
      }
      
       if(elementtype == "map"){
		 $state.go('showmap1');
      }
      
       if(elementtype == "video"){
		$state.go('previewvideo1');
      }
   }
    }

 $scope.buttonAppwallgoFun = function(){
    $state.go('buttonAppWall1');
  }
  
  if(Appwall.button_wall == '0'){
    $scope.buttonAppWall = false;
  }else if(Appwall.button_wall == '1'){
    $scope.buttonAppWall = true;
  }
  
});

var previewpic='';

control.controller('app2Ctrl',function($scope,$state,$ionicModal,$ionicLoading,$ionicPopup,$http){
    
 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.appwallgoFun = function(){
    $state.go('appWall2');
  }
  
 var chapterArray = [];
  for (var i = 0; i < buttonArray.length; i++) {
        chapterArray.push(buttonArray[i]);
    
  }
  
	$scope.items = chapterArray;

 $scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  $scope.AppEditor = false;
  
  $scope.float1=float1;
  
    $scope.logbuttonlist = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
 $scope.chapterClick = function(id,title){

    buttonId = id;
    buttonTitle = title;
          
    $state.go('chapterlist2');
  }
 $scope.editButton = function(id,title,image){
	    
    buttonId = id;
    buttonTitle = title;
    chapterImage = image;

   $state.go('buttonlist2');
  }
 $scope.newchapterGo = function(){
    chapterEdit = '';
    $state.go('newbutton');
  }
  
 $scope.backbuttonlist = function(){

    $state.go('sample');
  }

$scope.subs=function(){

    $state.go('sublist2');

  }

$scope.moveItem = function(item, fromIndex, toIndex) {
     $ionicLoading.show({
                content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
              });
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
    var ids = $scope.items.map(function(btn){return btn.id});

    $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: appKey, ids: ids})
    .success(function(data,status,headers,config){
        $ionicLoading.hide();
    })
    .error(function(data,status,headers,config){
         var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
					 
         $ionicLoading.hide();
    })
  };
  
   $scope.deleteButton = function(id){
    
    var confirmPopup = $ionicPopup.confirm({
       title: 'Button Delete!',
       template: 'Are you sure you want to delete this Button?'
    });
    
    confirmPopup.then(function(res,event) {
      
      if(res) {
        
         $ionicLoading.show({
                content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
              });
          $.ajax({
                      type: "DELETE",
                      url: "http://build.myappbuilder.com/api/buttons.json",
                      data: {"api_key":appKey,"id":id},
                      cache: false,
                      success:function(response){
                        $.ajax({
                            type: "GET",
                            url: "http://build.myappbuilder.com/api/buttons.json",
                            data:{'api_key':appKey},
                            cache: false,
                            success:function(response){
								 
                              buttonArray= response;
                              chapterArray = [];
                              for (var i = 0; i < buttonArray.length; i++) {
                                    chapterArray.push(buttonArray[i]);
                                 
                              }
                              $scope.items = chapterArray;
                              $state.reload();
                              setTimeout(function(){  $ionicLoading.hide();}, 1000);

                            },
                            error:function(error,status){
                              $ionicLoading.hide();
                               var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                            }
                        });
                      },
                      error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      }
          });
       } else {
         
       }
     });

}

 });

control.controller('previewpic2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$http,$ionicModal,$ionicActionSheet){
	 
$scope.data2={}
$scope.elementTitle = elementtitle;
$scope.description = elementtext;

$scope.logprevtext = function(){
	$state.go('picdisplay2');
}
$scope.homeprevtext = function(){
	$state.go('sample');
}
$scope.backprevtext = function(){
	$state.go('chapterlist2');
}

 $scope.appTitle = appTitle;	
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 $scope.AppEditor = false;

  $scope.logedittext = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }

$scope.float1=float1;	

$scope.editpicpage =previewpic;
		

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.edittxtpage = response;
						   $state.reload();   						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });        
              
                   $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tags.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){ 
			  						
							 var datatag1=response;
							   if(response.length == 0){
								 console.log(response.length);
								 	$scope.tags=response;
							 }
							 else{
							
							 for(var i=0;i<datatag1.length;i++){
							   if(i==0){
							   amenities1 = datatag1[i].name;
							 
							   }
							   else{
							   amenities1 = amenities1+','+datatag1[i].name;
							   
							   }
							   }                   
							$scope.tags = amenities1.split(",");    
							 
                            $ionicLoading.hide();   
						}                      
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });            
              
              
 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
	 $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-right'
          }).then(function(modal) {
            $scope.registerpop = modal;
          });
     
       $scope.addsubs = function() {
            $scope.registerpop.show();
          };       
  

});

control.controller('previewtask2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading){ 
  
  $scope.logprevtask=function(){
	  $state.go('taskdisplay2');
  }
  $scope.backprevtask=function(){
      $state.go('chapterlist2');
   }
  $scope.homeprevtask=function(){
       $state.go('sample');
  }

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();   
						     $scope.taskdisplaypage = response;
						   $state.reload();   	  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                       var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
              
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						   
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });               


});

control.controller('previewform2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading){ 
  
  $scope.logprevform=function(){
	  $state.go('formdisplay2');
  }
  $scope.backprevform=function(){
      $state.go('chapterlist2');
   }
  $scope.homeprevform=function(){
      $state.go('sample');
  }

$scope.elementemail = elementemail;

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
   
    $scope.float1=float1;          
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.disformtype = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });     
                
});

control.controller('previewaudio2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicModal){ 
  
  $scope.logprevaudio=function(){
	  $state.go('audiodisplay2');
  }

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 $scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });                                  

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.elementtitle = elementtitle;
$scope.elementtext = elementtext;

    $('#audioprevimg').attr({'src':contentimg});
    $('#audioprevimg').css({'width':'50px','height':'50px'}); 		

     $('#audioprevurlimg').attr({'src':'img/audio.png'});
    $('#audioprevurlimg').css({'width':'50px','height':'50px'});   	
  

$scope.backprevaudio=function(){
    $state.go('chapterlist2');
 }
$scope.homeprevaudio=function(){
    $state.go('sample');
}

          $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-right'
          }).then(function(modal) {
            $scope.registerpop = modal;
          });

 if(audioprevurlimg){
	  $scope.audioclick=function(){
		  $scope.registerpop.show();
		   $('.playaudio').attr({'src':contentaudio});
	  }
  }
 
  $scope.audioclickclose=function(){
	   console.log('s');
		$('.playaudio').attr({'src':''});
		$scope.registerpop.hide(); 
	}
	 
});

control.controller('previewvideo2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$http,$ionicModal){
  
$scope.logprevvideo=function(){
	  $state.go('videodisplay2');
  }  
$scope.backprevvideo = function(){
   $state.go('chapterlist2');
 } 
$scope.homeprevvideo = function(){
   $state.go('sample');
 }
 
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 	$scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disvideopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });  
              

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.elementtitle = elementtitle;
$scope.elementtext = elementtext;
$scope.contentvideothumb=contentvideothumb;
$scope.contentvideoframe=contentvideoframe;

    $('#videoprevimg').attr({'src':contentvideothumb});
    $('#videoprevimg').css({'width':'50px','height':'50px'}); 		

      $('#videoprevurlimg').attr({'src':'img/video.png'});
    $('#videoprevurlimg').css({'width':'50px','height':'50px'});  

	 $scope.videoclick2=function(){
		 $state.go('playvideo2');
	 }
});

control.controller('home2Ctrl', ['$ionicPlatform','$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope,$rootScope, $cordovaNetwork, $ionicLoading, $location) {
            
                              
                         $ionicLoading.show({
                                            template: 'Loading...'
                                            });
                         
                         function initialize() {
                         var feed = new google.feeds.Feed($rootScope.RSS);
                         
                         feed.setNumEntries(50);
                         feed.load(function(result) {
                                   $ionicLoading.hide();
                                   if(!result.error) {
                                   $rootScope.entries = result.feed.entries;
                                   $location.path('/entries2');
                                   } else {
                                   alert("ERROR :" +result.error.message);
                                   $location.path('chapterlist2');
                                   }
                                   });
                         
                         }
                         
                         $ionicPlatform.ready(function() {
                                            
                                          google.load("feeds", "1",{callback:initialize});    
                                              });
                                
                                $rootScope.TITLE = "Raymond Camden's Blog";
                                $rootScope.RSS = elementrssurl;

                         
                         }])

control.controller('entries2Ctrl', ['$scope', '$rootScope', '$location', function($scope,$rootScope,$location) {
                          
                                   $scope.backprevfeed=function(){
                                      $location.path('chapterlist2');
                                   }
                                   
                                   $scope.editrss=function(){
                                   $location.path('rssdisplay2');
                                   }
                                
                                $scope.float1=float1;
                                   
                            if(!$rootScope.entries) $location.path('/');
                            
                            $rootScope.notHome = false;
                            
                            $scope.entries = $rootScope.entries;
                                   
                                   $scope.AppEditor = false;
                                   
                                   $scope.eyefeed = function(){
                                   if($scope.AppEditor == false){
                                   $scope.AppEditor = true;
                                   }else{
                                   $scope.AppEditor =false;
                                   }
                                   }
                                   
                                   $scope.elementrssurl = elementrssurl;
                                   $scope.elementtext = elementtext;
                                   
                            }])


control.controller('entry2Ctrl', ['$scope', '$rootScope', '$location', '$stateParams', function($scope, $rootScope,$location, $stateParams) {
                          
                                 $scope.backpreventry=function(){
                                 $location.path('entries2');
                                 }
                          
                          if(!$rootScope.entries) $location.path('/');
                          
                          $rootScope.notHome = true;
                          
                          $scope.index = $stateParams.index;
                          $scope.entry = $rootScope.entries[$scope.index];
                          
                          $scope.readEntry = function(e) {
                          window.open(e.link, "_blank");
                          };
                          
                          $scope.float1=float1;
                          
                          }]);

control.controller('viewdetails2Ctrl',function($scope,$state,$ionicLoading,$http, $ionicModal, $ionicPopup,$ionicActionSheet){
     
     $scope.subfullname1=subfullname1;
     $scope.subemail1=subemail1;
     $scope.subphone1=subphone1;
     $scope.subavatar1=subavatar1;              
     $scope.subusername1=subusername1;
       
                   $scope.backviewdetails=function(){
                   $state.go('sublist2');
                   }
                   
                   $scope.appTitle = appTitle;

 if(subavatar1 == null){ 
		   $('#checkavatar21').attr({'src':'img/btn_avatar.png'});
     }
                           
 });

control.controller('mapdisplay2Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
  $scope.backdismap=function(){
       $state.go('showmap2');
  }
  $scope.homedismap=function(){
        $state.go('sample');
   }
	$scope.dismap={}
$scope.createdisplaymap={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){ 
							                 
                          $ionicLoading.hide();
                           $scope.addressess = response; 
						   $state.reload();               

                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });    
              
   $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.dismappage = response; 
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              

$scope.adddisAddress = function(){
	
    if($scope.createdisplaymap.title){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/elements/addresses.json",
          data:{'api_key':appKey,'id':elementId,'address':$scope.createdisplaymap.title},
          success:function(response){
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                       
						    $scope.addressess = response;                 
						    $scope.createdisplaymap.title='';
						   $state.reload();   
						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
          error:function(error){
            $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:'Enter The Address'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.updatedisplayAddress = function(id,updateaddresss){
	  
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

          var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('element_id',elementId);       
            formData.append('id',id);  
             formData.append('address',updateaddresss); 
            
       $.ajax({
          type: "PUT",
          url: "http://build.myappbuilder.com/api/elements/addresses.json",
          data:formData,
           cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
    }
 $scope.deletedisplayAddress = function(id){
	 
 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
     
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/addresses/"+id+".json",
            data: {'api_key':appKey,'id':elementId},
            cache: false,
            success:function(response){
				
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/addresses.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						$scope.addressess = response;  
						   $state.reload();   
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });	
	 
}   

$scope.mapdiscustom = function(){

    if($scope.dismap.discustommaptitle){
      if($scope.dismap.discustommapvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.dismap.discustommaptitle,'value':$scope.dismap.discustommapvalue},
          success:function(response){
			 customdismapid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                        
					    $scope.dismappage = response;
						   $state.reload();   
						  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });    
              $scope.dismap.discustommaptitle='';
              $scope.dismap.discustommapvalue='';         
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
          
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removedismapCustomValue = function(id){

    customdismapid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdismapid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.dismappage = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
               var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Map and Location',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});


control.controller('formdisplay2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
  $scope.backdisform=function(){
      $state.go('previewform2');
   }
  $scope.homedisform=function(){
      $state.go('sample');
  }
  
$scope.formdis={}
$scope.displayform={}

$scope.formdis.disemail = elementemail;
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
   
    $scope.float1=float1;          
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.disformtype = response;
						   $state.reload();   	  
                          
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });     
                
$scope.updatedisform = function(){

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);       
            formData.append('email_to_send_to',$scope.formdis.disemail);       

  if(($scope.formdis.disemail)!=elementemail){  

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_contact_form.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
			
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		}
		else
		{
			 $ionicLoading.hide();
		 }
			
}

$scope.createdisformcustom = function(){

    if($scope.displayform.customdisTitle){
      if($scope.displayform.customdisvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.displayform.customdisTitle,'value':$scope.displayform.customdisvalue},
          success:function(response){
			 customedisformid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                      
						    $scope.disformtype = response;
						   $state.reload();   

                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.displayform.customdisTitle='';
              $scope.displayform.customdisvalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removeformdisCustomValue = function(id){

    customedisformid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customedisformid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.disformtype = response;						 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Contact Form',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

control.controller('taskdisplay2Ctrl',function($scope,$ionicPopup,$state,$ionicLoading,$ionicScrollDelegate){ 
 
 $ionicScrollDelegate.scrollTop();
 
  if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
  $scope.backdistask=function(){
      $state.go('previewtask2');
   }
  $scope.homedistask=function(){
       $state.go('sample');
  }
  
	$scope.discustask={}
	$scope.createdisplaytask={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.float1=float1;

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();   
						     $scope.taskdisplaypage = response;
						   $state.reload();   	  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                       var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
              
 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
              
$scope.adddisplayTask = function(task,desc){
	
	if($scope.createdisplaytask.taskTitle)
	{
		
	$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
       $.ajax({
                        type: "POST",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId,'title':$scope.createdisplaytask.taskTitle,'description':$scope.createdisplaytask.taskDescription},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();		
                          tasklistid=response.id;			  
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						$scope.createdisplaytask.taskTitle='';
						$scope.createdisplaytask.taskDescription='';    
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
		  }else
		  {
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:'Enter The Title'
					 });
					 alertPopup.then(function(res) {
					 });
		  }           
	
}

$scope.deletedisplayTask = function(id){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/tasks/"+id+".json",
            data: {"api_key":appKey,'id':elementId},
            cache: false,
            success:function(response){
               $ionicLoading.hide();
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/tasks.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplay = response;
						   $state.reload();    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	

$scope.updatedisplayTask = function(updatesid,titles,descp){

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
            
        var formData = new FormData();
            formData.append('api_key',appKey);
            formData.append('element_id',elementId);    
            formData.append('id',updatesid);
            formData.append('title',titles);   
            formData.append('description',descp);     
          
          $.ajax({
            type: "PUT",
            url: "http://build.myappbuilder.com/api/elements/tasks.json",
            data: formData,
             cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
                  $ionicLoading.hide();
                
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}	


$scope.createtaskdiscustom = function(){

    if($scope.discustask.customtaskdistitle){
    if($scope.discustask.customtaskdisvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.discustask.customtaskdistitle,'value':$scope.discustask.customtaskdisvalue},
          success:function(response){
			 customdistaskid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.taskdisplaypage = response;
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });  
              $scope.discustask.customtaskdistitle='';
               $scope.discustask.customtaskdisvalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }

$scope.removetaskdisCustomValue = function(id){

    customdistaskid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdistaskid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();   
						     $scope.taskdisplaypage = response;
						   $state.reload();   	  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Task List',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});


control.controller('rssdisplay2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
  $scope.backdisrss=function(){
       $state.go('entries2');
   }
   $scope.homedisrss=function(){
        $state.go('sample');
}
  	
	$scope.discusrss={}
	$scope.createrssdis={}

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$scope.createrssdis.disrssname = elementtitle;
$scope.createrssdis.disrssurl= elementrssurl;
$scope.createrssdis.disrssdesc=elementtext;

$scope.float1=float1;

$scope.updaterssdis = function(){

	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
    
 if((($scope.createrssdis.disrssname)==elementtitle) && (($scope.createrssdis.disrssdesc)==elementtext) && (($scope.createrssdis.disrssurl)==elementrssurl)){  
   $ionicLoading.hide();
}
else{
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);    
            formData.append('rss_url',$scope.createrssdis.disrssurl);
           formData.append('text',$scope.createrssdis.disrssdesc);   
           formData.append('title',$scope.createrssdis.disrssname);            

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_rss.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
                  $ionicLoading.hide();
                
                 
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
		}
}

$scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                        
						    $scope.disrsspage = response;
						   $state.reload();   
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
              
$scope.createcusdisrss = function(){
	
    if($scope.discusrss.cusdisrsstitle){
      if($scope.discusrss.cusdisrssvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.discusrss.cusdisrsstitle,'value':$scope.discusrss.cusdisrssvalue},
          success:function(response){
			 customdisrssid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                      
						    $scope.disrsspage = response;                 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.discusrss.cusdisrsstitle='';
              $scope.discusrss.cusdisrssvalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }
  
$scope.removerssdisCustomValue = function(id){

    customdisrssid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisrssid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disrsspage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Rss Feed',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});


control.controller('audiodisplay2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading,$http,$ionicScrollDelegate){ 

$ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
function readURL14(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			$('#audiodisurlimg').attr({'src':"img/btn_audio.png"});
             $('#audiodisurlimg').css({'width':'50px','height':'50px'}); 					
          $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#audiodisplay").change(function(){
	    check=true;
	 
      readURL14(this);
  });
  
   function readURL15(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
			 $('#audiodisplayimg').attr('src', e.target.result);	
			 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#audio_thumbdisplay").change(function(){
	  check=true;
	 
      readURL15(this);
  });
  
  
$scope.backdisplayaudio = function(){
   $state.go('previewaudio2');
 } 
$scope.homedisplayaudio = function(){
   $state.go('sample');
 }
 
$scope.appTitle = appTitle;	

$scope.float1=float1;

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });       
                           
$scope.createdisplayaudio={}
$scope.cusdisplayaudio={}

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.createdisplayaudio.displayaudiotitle = elementtitle;
$scope.createdisplayaudio.displayaudiotext = elementtext;

if(contentimg){
    $('#audiodisplayimg').attr({'src':contentimg});
    $('#audiodisplayimg').css({'width':'50px','height':'50px'}); 		
  }
 if(contentaudio){
    $('#audiodisplay').attr({'url':contentaudio}); 
     $('#audiodisurlimg').attr({'src':contentimg});
    $('#audiodisurlimg').css({'width':'50px','height':'50px'});   	
  }
$scope.updateaudiodisplay = function(){            
		  
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
     
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);                
           formData.append('title',$scope.createdisplayaudio.displayaudiotitle);
           formData.append('text',$scope.createdisplayaudio.displayaudiotext);
           if(check==true){ 
			     if((($("#audiodisplay").get(0).files[0].size) / 1024 / 1024) <= 10){
					 
					formData.append('audio',$('#audiodisplay').get(0).files[0]);  
				 }
				 else{
					  var alertPopup = $ionicPopup.alert({
						 title: 'MAB',
						 template: 'Please choose Audio File below 10MB!'
					   });
					   alertPopup.then(function(res) {
					   });
					} 
					 
             if($('#audio_thumbdisplay').get(0).files[0]){
					formData.append('audio_thumbnail', $('#audio_thumbdisplay').get(0).files[0]);
			}else{
					formData.append('audio_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
			}               
			}
			else
			{
				 $('#audiodisplay').attr({'url':contentaudio}); 
				 $('#audiodisurlimg').attr({'src':contentimg});
				$('#audiodisurlimg').css({'width':'50px','height':'50px'});   		 
				 $('#audiodisplayimg').attr({'src':contentimg});
				 $('#audiodisplayimg').css({'width':'50px','height':'50px'}); 
			 }
			 

          $http.put('http://build.myappbuilder.com/api/elements/update_audio.json', formData,{
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
			
						  $ionicLoading.hide();

					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                         var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      });

  
}
 
 $scope.createaudiodis = function(){
	
    if($scope.cusdisplayaudio.customdisaudioTitle){
      if($scope.cusdisplayaudio.customdisaudiovalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.cusdisplayaudio.customdisaudioTitle,'value':$scope.cusdisplayaudio.customdisaudiovalue},
          success:function(response){
			 customdisaudioid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                      
						    $scope.disaudiopage = response;                 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              $scope.cusdisplayaudio.customdisaudioTitle='';
              $scope.cusdisplayaudio.customdisaudiovalue='';             
            },
          error:function(error){
            $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }
  
$scope.removeaudiodisCustomValue = function(id){

    customdisaudioid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisaudioid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disaudiopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Audio',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});
  
control.controller('picdisplay2Ctrl',function($scope,$state,$ionicScrollDelegate,$ionicActionSheet,$ionicLoading,$ionicPopup,$ionicModal){ 

 $ionicScrollDelegate.scrollTop();
 
 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
  $scope.backdispic=function(){
	  
	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							previewpic =response;
						  $state.go('previewpic2');  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
              
       
  }
 $scope.homedispic=function(){
       $state.go('sample');
   }
 
 
$scope.textCreatedis = {}
$scope.dispic={}
$scope.contenteditCreate={}

$scope.textCreatedis.distitle=elementtitle;
$scope.textCreatedis.distext=elementtext;
$scope.contenteditCreate.elementeditTag = tagging;

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

 $scope.AppEditor = false;

$scope.float1=float1;

  $scope.logedittext = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
   $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
							
							
                          $ionicLoading.hide();
							$scope.dispicpage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                       var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });         

 $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.distxtpage = response;
						   $state.reload();   						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
                    
              
$scope.updatedistext = function(){            
	
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
	  var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);       
           formData.append('title',$scope.textCreatedis.distitle);
            formData.append('text',$scope.textCreatedis.distext);
            
  if((($scope.textCreatedis.distitle)!=elementtitle) || (($scope.textCreatedis.distext)!=elementtext)){  

          $.ajax({
                  type: "PUT",
                  url: "http://build.myappbuilder.com/api/elements/update_default.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){
                  $ionicLoading.hide();                
                },error:function(error){
                  $ionicLoading.hide();
                  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });   
		}
		else
		{
			 $ionicLoading.hide();  
		}
 }


    function readURL44(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
					$('#dispictext').attr('src', e.target.result); 
	    		 $('#dispictext').css({'width':'50px','height':'50px'});
			   $('#textdis').attr('src', e.target.result); 
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
  
      
  $("#textdis").change(function(){
      readURL44(this);
  });
  
$scope.uploaddisplay = function(){                 

 $('#dispictext').attr({'src':"img/no_image.png"});
 
$ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
  
   
      var formData = new FormData();
           formData.append('api_key',appKey);
           formData.append('id',elementId);
          formData.append('image',$("#textdis").get(0).files[0]);
           $.ajax({
                  type: "POST",
                  url: "http://build.myappbuilder.com/api/elements/images.json",
                  data: formData,
                  cache: false,
                  contentType: false,
                  processData: false,
                  success:function(response){             
						$("#textdis").val('');
							
						 $.ajax({
								type: "GET",
								url: "http://build.myappbuilder.com/api/elements/images.json",
								data:{'api_key':appKey,'id':elementId},
								cache: false,
								success:function(response){
				
								  $ionicLoading.hide();

									 $scope.dispicpage = response;
								   $state.reload();   
								  
								  
								},
								error:function(error,status){
								   $ionicLoading.hide();
								 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
								}
					     });              
                 
                },error:function(error){
                  $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            }); 
 }

$scope.removepicdisCustom = function(id){
 
  picdiscustom = id;

   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements/images.json",
            data: {"api_key":appKey,"id":picdiscustom,'element_id':elementId},
            cache: false,
            success:function(response){
             $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.dispicpage = response;						     
						   $state.reload();  						                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
            },
            error:function(error,status){
               $ionicLoading.hide();
              var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
 
}


$scope.ok = function(){                

 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
         
         var datatag=$scope.contenteditCreate.elementeditTag;
			 if(datatag == ''){
			  console.log(datatag);
			 amenities='';
		 }
		 else{
			  console.log(datatag);
		for(var i=0;i<datatag.length;i++){

                   if(i==0){

                   amenities = datatag[i].text;

                   }

                   else{

                   amenities = amenities+','+datatag[i].text;

                   }

                   }
                   
			   }
                   $.ajax({
                        type: "PUT",
                        url: "http://build.myappbuilder.com/api/elements/tags.json",
                        data:{'api_key':appKey,'element_id':elementId,'value':amenities},
                        cache: false,
                        success:function(response){   
                          $ionicLoading.hide();                        
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });             
      
 }


  $scope.AppEditor = false;
  
$scope.createpicdis = function(){
	
    if($scope.dispic.customdisTitle){
      if($scope.dispic.customedisvalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.dispic.customdisTitle,'value':$scope.dispic.customedisvalue},
          success:function(response){
			 customdisid = response.id;
          
            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.distxtpage = response;
						   $state.reload();                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
              $scope.dispic.customdisTitle='';
              $scope.dispic.customedisvalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }  
  }

$scope.removedistxtCustomValue = function(id){

    customdisid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
						    $scope.distxtpage = response;
						   $state.reload();                            
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}
 
});

var contentvideoframe ='';

control.controller('chapterlist2Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate){ 
  
 $scope.newContentGo = function(){
	$state.go('elements');
  }  
 $scope.homechapterlist = function(){
	$state.go('sample');
  }   
 $scope.backchapterlist = function(){
     $state.go('app2');
  }  
  	
	
 for (var i = 0; i < buttonArray.length; i++) {
      if(buttonId == buttonArray[i].id){
        elementArray = buttonArray[i].elements;
      }
  }
  
   $scope.deleteContent = function(id){

    elementId = id;
    var confirmPopup = $ionicPopup.confirm({
     title: 'Element Delete!',
     template: 'Are you sure you want to delete this Element?'
    });
    confirmPopup.then(function(res) {
     if(res) {
          $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/elements.json",
            data: {"api_key":appKey,"id":elementId},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/buttons.json",
                        data:{'api_key':appKey},
                        cache: false,
                        success:function(response){
                          buttonArray = response;
                          $ionicLoading.hide();
                          for (var i = 0; i < buttonArray.length; i++) {
							  if(buttonId == buttonArray[i].id){
								elementArray = buttonArray[i].elements;
							  }
						  }
						  $scope.elementArray = elementArray;
                          $state.reload();  
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Chapter',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
             var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Chapter',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
     } else {
       console.log('You are not sure');
     }
   });
}

 $scope.float1=float1;
 $scope.elementArray = elementArray;
 
 $scope.appTitle = appTitle;
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  $scope.buttonTitle = buttonTitle;
  $scope.AppEditor = false;

  $scope.logtextlist = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }

 $scope.subTitClickFtn = function(id,title,type,email,text,url,rssurl,audioimg,audiourl,videoimg,videourl,tags,frame){

    elementId = id;
    elementtype=type;
    elementemail = email;
	elementurl = url;
	elementtext= text;
	elementtitle= title;
	elementrssurl = rssurl;
	contentimg = audioimg;
	contentaudio = audiourl;
	contentvideo = videourl;
	contentvideothumb = videoimg;
	contentvideoframe=frame;
	tagging=tags;

    for (var i = 0; i < elementArray.length; i++) {
      if(elementtype == "audio"){
		$state.go('previewaudio2');
      }
      
    if(elementtype == "rss_feed"){
		$state.go('home2');
      }

    if(elementtype == "default"){
		$.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/elements/images.json",
                        data:{'api_key':appKey,'id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							previewpic =response;
						   $state.go('previewpic2');    
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Picture and Text',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              }); 
		
      }
      
     if(elementtype == "tasks_list"){
		$state.go('previewtask2');
      }
      
      if(elementtype == "web_page"){
            var ref = window.open(elementurl, '_blank', 'location=yes');
            ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
      }
      
      if(elementtype == "contact_form"){
		$state.go('previewform2');
      }
      
       if(elementtype == "map"){
		 $state.go('showmap2');
      }
      
       if(elementtype == "video"){
		$state.go('previewvideo2');
      }
   }
    }

 $scope.buttonAppwallgoFun = function(){
    $state.go('buttonAppWall2');
  }
  
  if(Appwall.button_wall == '0'){
    $scope.buttonAppWall = false;
  }else if(Appwall.button_wall == '1'){
    $scope.buttonAppWall = true;
  }
  
});

control.controller('elementAppWall2Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicModal,$ionicScrollDelegate){

$scope.backelementAppwall = function(){
	$state.go('chapterlist2');
}

$scope.homeelementAppwall = function(){
	$state.go('sample');
}

 $scope.appTitle = appTitle;
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  messages = '';
 $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
  $.ajax({url:'http://build.myappbuilder.com/api/messages.json',type:"GET",data:{"api_key":appKey,"element_id":elementId},
    success:function(response){
    $ionicLoading.hide();
      messages = response;
      ElementAppWallPostFun();
    },
    error:function(error,status){
    $ionicLoading.hide();
      var error = error.responseText;
      if(error.error == "Unauthorized"){
         var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
      }else {
           var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
					 
      }
    }
  });
  
});

control.controller('buttonAppWall2Ctrl',function($scope,$state,$ionicPopup,$ionicLoading){

$scope.backbuttonAppwall = function(){
	$state.go('chapterlist2');
}

$scope.homebuttonAppwall = function(){
	$state.go('sample');
}

 $scope.appTitle = appTitle;
 
if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

  messages = '';
    $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
     
    
    $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey,'button_id':buttonId},
                  cache: false,
                  success:function(response){
                    $ionicLoading.hide();
                    messages = response;
                    ButtonAppWallPostFun();
                  },
                  error:function(error,status){
                     $ionicLoading.hide();
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                     var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
                    }else {
                       var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
					 
                    }
                  }
    });
  
  });

control.controller("appWall2Ctrl",function($scope,$state, $ionicLoading,$http,$ionicPopup){
	
$scope.appTitle = appTitle;

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
  
  
  var button_wall = '';
  var element_wall = '';

  $scope.homeappwall = function(){
    $state.go('sample');
  }

  $scope.backappwall = function(){
    $state.go('app2');
  }


  $scope.checkBox = [];
  if((Appwall.button_wall == "0")&&(Appwall.element_wall == "0")){
    $scope.checkBox.button = false;
    $scope.checkBox.element = false;
  }else if(Appwall.button_wall == "0"){
    $scope.checkBox.button = false;
    $scope.checkBox.element = true;
  }else if(Appwall.element_wall == "0"){
    $scope.checkBox.button = true;
    $scope.checkBox.element = false;
  }else{
    $scope.checkBox.button = true;
    $scope.checkBox.element = true;
  }

      $scope.appwallSettings = function(){
        var myPopup = $ionicPopup.show({
          template: '<div class="card"><div class="item item-checkbox"><label class="checkbox" ><input type="checkbox" ng-model="checkBox.button" value=""></label>Each Chapter Can Have a Unique Wall </div><div class="item item-checkbox"><label class="checkbox" ><input type="checkbox" ng-model="checkBox.element" value=""></label>Each Content Can Have a Unique Wall  </div></div><div style="width:100%;"><div style="width:50%;float:left;"><div style="width:50%;" class="button button-clear" ng-click="popupClose();"><img src="img/btn_cancel.png" style="width:100%;height:auto;"/></div></div><div style="width:50%;float:left;" ><div style="width:50%;float:right;" class="button button-clear " ng-click="popoupSave();"><img src="img/save.png" style="width:100%;height:auto;"/></div></div></div>',
          title: 'AppWall Setting',
          subTitle: $scope.appTitle,
          scope: $scope,
                         
      });

      $scope.popupClose=function() {

        myPopup.close();
      }

      $scope.popoupSave = function(){
        if(($scope.checkBox.button != false) && ($scope.checkBox.element != false)){
          button_wall = "1";
          element_wall = "1";
        }else if($scope.checkBox.button != false){
          button_wall = "1";
          element_wall = "0";
        }else if($scope.checkBox.element != false){
          button_wall = "0";
          element_wall = "1";
        }else{
          button_wall = "0";
          element_wall = "0";
        }

        $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
        $http.post('http://build.myappbuilder.com/api/app_wall_settings.json',{api_key: appKey,button_wall:button_wall,element_wall:element_wall})
              .success(function(data,status,headers,config){
  
                  $.ajax({url:'http://build.myappbuilder.com/api/app_wall_settings.json', type:"GET",data:{'api_key':appKey},
                      success:function(response){
                          Appwall = response;
                          $ionicLoading.hide();
                           myPopup.close();
                      },
                      error:function(){
                          $ionicLoading.hide();
                           myPopup.close();
                      }
                    });
                 
              })
              .error(function(data,status,headers,config){
                  $ionicLoading.hide();
                  var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                  myPopup.close();
              })

      }
    
  }

  $scope.messages = "";
  $scope.messages.data="";
 $ionicLoading.show({
				   content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
				   animation: 'fade-in',
				   showBackdrop: true,
				   maxWidth: 200,
				   showDelay: 0
				});
 
    $.ajax({
                  type: "GET",
                  url: "http://build.myappbuilder.com/api/messages.json",
                  data:{'api_key':appKey},
                  cache: false,
                  success:function(response){
					$ionicLoading.hide();
                   messages = response;
                   appWallPostFun();
                  },
                  error:function(error,status){
                    $ionicLoading.hide();
                    var error = error.responseText;
                    if(error.error == "Unauthorized"){
                    var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Please Login'
					 });
					 alertPopup.then(function(res) {
					 });
                    }else {
                       var alertPopup = $ionicPopup.alert({
					   title: 'Messages',
					   template:'Login Error!'
					 });
					 alertPopup.then(function(res) {
					 });
					 
                    }
                  }
            });
            
 }); 
 
control.controller('buttonlist2Ctrl',function($scope,$state,$ionicScrollDelegate,$ionicPopup,$ionicLoading,$ionicActionSheet){ 

$ionicScrollDelegate.scrollTop();

$scope.backbuttonlist = function(){
	$state.go('app2');
}
$scope.homebuttonlist = function(){
	$state.go('sample');
}

$scope.editbuttoncreate={}
$('#editbuttonsrc').attr('src', localStorage.xxx); 

$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$("#editbuttonimage").change(function(){
      readURL31(this);
  });
  

$scope.editbuttoncreate.editbuttontitle = buttonTitle;

 if(chapterImage){
    $('#editbuttonsrc').attr({'src':chapterImage});
     $('#editbuttonsrc').css({'width':'50px','height':'50px'});
    
  }
 
  $scope.updatebutton =function(){
  
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
      if($("#editbuttonimage").get(0).files[0]){
		  
	 var formData = new FormData();
	
        formData.append('api_key',appKey);
        formData.append('id',buttonId);
        formData.append('title',$scope.editbuttoncreate.editbuttontitle);
        formData.append('image', $("#editbuttonimage").get(0).files[0]);
      	
		$.ajax({
                type: "PUT",
                url: "http://build.myappbuilder.com/api/buttons.json",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(response){
 
                    buttonId = response.id;
                    buttonTitle = response.title;
                    $ionicLoading.hide();
                },
                error:function(error,status){
                    $ionicLoading.hide();
                 var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
  }
  else
  {
	   var formData = new FormData();
	
        formData.append('api_key',appKey);
        formData.append('id',buttonId);
        formData.append('title',$scope.editbuttoncreate.editbuttontitle);
       
      	
		$.ajax({
                type: "PUT",
                url: "http://build.myappbuilder.com/api/buttons.json",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(response){
 
                    buttonId = response.id;
                    buttonTitle = response.title;
                    $ionicLoading.hide();
                },
                error:function(error,status){
                    $ionicLoading.hide();
                     var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Button',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                }
            });
  }
}	  

});


control.controller('sublist2Ctrl',function($scope,$state,$ionicLoading,$http,$ionicPopup, $ionicModal, $ionicActionSheet){
                  

$scope.backsublist=function(){

     $state.go('app2');

}
                   $scope.avatar123=function(val){  

                   if(val==null){

                   return 'img/btn_avatar.png';

                   }

                   else{

                   return val;

                   }
                   }
                  
      
				$scope.nextpage = function(id,avatar,fullname,email,phone,user) {
                   subeditid1=id;
                   subavatar1=avatar;
                   subfullname1=fullname;
                   subemail1=email;
                   subphone1=phone;
                   subusername1=user;
                   $state.go('viewdetails2');
               }
               
$scope.appTitle = appTitle;
 

$.ajax({

      type: "GET",

      url: "http://build.myappbuilder.com/api/subscribers.json",

      data:{'api_key':appKey},

      cache: false,

      success:function(response){

       $scope.subscriber =response;
       $state.reload();
        $ionicLoading.hide();

      },

      error:function(error,status){

          $ionicLoading.hide();

         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

      }

});

     function readURL30(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
	    	
           $('.file-input-wrapper7 > .btn-file-input7').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
  }
                

                   $ionicModal.fromTemplateUrl('my-modal.html', {

                                               scope: $scope,

                                               animation: 'slide-in-right'

                                               }).then(function(modal) {

                                                       $scope.registerpop = modal;

                                                       });

                   

                   $scope.addsubs = function() {
					
				    $('.file-input-wrapper7 > .btn-file-input7').css('background-image', 'url(img/add_image.png)');				

                   $scope.data2.firstname='';

					$scope.data2.lastname='';

					$scope.data2.email='';

					$scope.data2.username='';

					$scope.data2.phone='';
					
					$scope.data2.password='';
					 
                    $scope.data2.confirmpassword='';

                   $scope.registerpop.show();
                   
					$("#tst").change(function(){
						  readURL30(this);
					  });

                   };


                   $scope.removesubs=function(){
					  
                   $.ajax({

                          type: "GET",

                          url: "http://build.myappbuilder.com/api/subscribers.json",

                          data:{'api_key':appKey},

                          cache: false,

                          success:function(response){

                          $scope.subscriber = response;

                          $ionicLoading.hide();

                          },

                          error:function(error,status){

                          $ionicLoading.hide();

                       var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });
						
                    $scope.registerpop.hide();

                   }
                  

                   $scope.data2={}
                  

                  $scope.createsubs=function(){

                   

                   $ionicLoading.show({

                                      content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',

                                      animation: 'fade-in',

                                      showBackdrop: true,

                                      maxWidth: 200,

                                      showDelay: 0

                                      });
                 

                   var formData = new FormData();

                   formData.append('api_key',appKey);

                   formData.append('subscriber[firstname]',$scope.data2.firstname);

                   formData.append('subscriber[lastname]',$scope.data2.lastname);

                   formData.append('subscriber[username]',$scope.data2.username);

                   formData.append('subscriber[email]',$scope.data2.email);

                   formData.append('subscriber[phone]',$scope.data2.phone);
                   
                   formData.append('subscriber[password]',$scope.data2.password);
                   
                   formData.append('subscriber[password_confirmation]',$scope.data2.confirmpassword);
                   
                   
                    if($("#tst").get(0).files[0] != undefined){

				    formData.append('subscriber[avatar]',$("#tst").get(0).files[0]);
					
					}
                   

                   $.ajax({

                          type: "POST",

                          url: "http://build.myappbuilder.com/api/subscribers.json",

                          data: formData,

                          cache: false,

                          contentType: false,

                          processData: false,

                          success:function(response){

                          subid=response.id;

                          $.ajax({

									  type: "GET",

									  url: "http://build.myappbuilder.com/api/subscribers.json",

									  data:{'api_key':appKey},

									  cache: false,

									  success:function(response){

									   $scope.subscriber =response;
									
									   $state.reload();

										  $ionicLoading.hide();
										
									  },

									  error:function(error,status){

										  $ionicLoading.hide();

										  var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

									  }

								});
								
							 $scope.registerpop.hide();
							 
                          },error:function(error){

                          $ionicLoading.hide();

                        var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });

                   }

                   $ionicModal.fromTemplateUrl('my-modal1.html', {

                                               scope: $scope,

                                               animation: 'slide-in-right'

                                               }).then(function(modal) {

                                                       $scope.registerpop1 = modal;

                                                       });


                   $scope.editagent = function(id,avatar,fullname,email,phone,username,password,confirmpass) {				

                   subeditid=id;

                   subavatar=avatar;

                   subfullname=fullname;

                   subemail=email;

                   subphone=phone;
                   
                   subusername=username;
                   
                    subpass=password;
                    
				   subconfirmpass=confirmpass;

                   $scope.registerpop1.show();
                   
                   $("#tst").change(function(){
						  readURL30(this);
					  });

                   $scope.data3.email=subemail;

                   $scope.data3.phone=subphone;
                   
                   $scope.data3.username=subusername;
                   
                    $scope.data3.password=subpass;
                    
                   $scope.data3.confirmpassword=subconfirmpass;

                   var name=subfullname.split("   ");

                   $scope.data3.firstname=name[0];

                   $scope.data3.lastname=name[1];

                   if(subavatar){
						
						$('.file-input-wrapper7 > .btn-file-input7').css('background-image', 'url('+subavatar+')');

                   }

                   else{

				     	$('.file-input-wrapper7 > .btn-file-input7').css('background-image', 'url(img/add_image.png)');				

                   }


                   };
                 

                   $scope.removesubs1=function(){

                   $.ajax({

                          type: "GET",

                          url: "http://build.myappbuilder.com/api/subscribers.json",

                          data:{'api_key':appKey},

                          cache: false,

                          success:function(response){

                          $scope.subscriber = response;

                          $ionicLoading.hide();

                          },

                          error:function(error,status){

                          $ionicLoading.hide();

                       var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });

                   $scope.registerpop1.hide();

                   }

 $scope.data3={}

       $scope.updatesubs=function(){

                   $ionicLoading.show({

                                      content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',

                                      animation: 'fade-in',

                                      showBackdrop: true,

                                      maxWidth: 200,

                                      showDelay: 0

                                      });
                

                   var formData = new FormData();

                   formData.append('api_key',appKey);

                    formData.append('id',subeditid);

                   formData.append('firstname',$scope.data3.firstname);

                   formData.append('lastname',$scope.data3.lastname);

                   formData.append('username',$scope.data3.username);

                   formData.append('email',$scope.data3.email);

                   formData.append('phone',$scope.data3.phone);
                   
                   formData.append('password',$scope.data3.password);
                     
                   formData.append('password_confirm',$scope.data3.confirmpassword);
                   
                   if($("#tst").get(0).files[0] != undefined){
                   
                    formData.append('avatar',$("#tst").get(0).files[0]);
				}
                  

                   $.ajax({

                         type: "PUT",

                         url: "http://build.myappbuilder.com/api/subscribers.json",

                         data: formData,

                         cache: false,

                         contentType: false,

                         processData: false,

                         success:function(response){

                              subid1=response.id;
                         
								  
								 $.ajax({

									  type: "GET",

									  url: "http://build.myappbuilder.com/api/subscribers.json",

									  data:{'api_key':appKey},

									  cache: false,

									  success:function(response){
										  

									   $scope.subscriber =response;
									   
									   $state.reload();

										  $ionicLoading.hide();
										
									  },

									  error:function(error,status){

										  $ionicLoading.hide();

										var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

									  }

								});
                    
							 $scope.registerpop1.hide();
							 
                          },error:function(error){

                          $ionicLoading.hide();

                       var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Subscriber',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });

                          }

                          });


                   }            

});

control.controller('editnewapp1Ctrl',function($scope,$state,$ionicLoading,$ionicPopup,$ionicScrollDelegate,$ionicPopup){ 	
	     
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}


$scope.editappcre = {}

$scope.editappcre.editfloaturl = editfloat1;
 
if(editfloat == 'true')
	{
		$scope.editappcre.editcustomvalue = true;   
	}
	 else
	 {  
		  $scope.editappcre.editcustomvalue =false;    
	 }
 
  $scope.AppEditor = false;
      
$scope.createnewapp11 = function(){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "PUT",
          url: "http://build.myappbuilder.com/api/book_custom_fields.json",
          data:{'api_key':appKey,'id':editfloatid,'title':'Floating Social Icons','value':$scope.editappcre.editcustomvalue},
          success:function(response){			
              $ionicLoading.hide();   
              $state.go('editsocial');  
            },
          error:function(error){
            $ionicLoading.hide();
           var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: appTitle,
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
 
  $.ajax({
          type: "PUT",
          url: "http://build.myappbuilder.com/api/book_custom_fields.json",
          data:{'api_key':appKey,'id':editfloatid1,'title':'Url','value':$scope.editappcre.editfloaturl},
          success:function(response){
          
              $ionicLoading.hide();
              $state.go('editsocial');
                       
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: appTitle,
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });   
  }

$scope.homeapp1 = function(){	
	$state.go('sample');	
}

$scope.backnewapp1 = function(){
	$state.go('editApp');
}


});


control.controller('videodisplay2Ctrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$ionicPopup,$http,$ionicActionSheet){ 

  $ionicScrollDelegate.scrollTop();

 if(Appwall.element_wall == '0'){
    $scope.elementAppWall = false;
  }else if(Appwall.element_wall == '1'){
    $scope.elementAppWall = true;
  }
  
  
  $scope.AppEditor = true;
  
    $scope.logbuttonlist1 = function(){
    if($scope.AppEditor == false){
      $scope.AppEditor = true;
    }else{
      $scope.AppEditor =false;
    }
  }
  
  $scope.elementAppwallgoFun=function(){
	  $state.go('elementAppWall2');
  }
function readURL26(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#videodisurlimg').attr({'src':"img/btn_video.png"});
				$('#videodisurlimg').css({'width':'50px','height':'50px'});
				$('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')'); 		
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#videodisplay").change(function(){
	  
	  var objectURL = window.URL.createObjectURL(this.files[0]);
	$('#videoframe').attr({'src':objectURL});
	
	    check=true;
	 
      readURL26(this);
  });
  
  
  function readURL261(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#videodisplayimg').attr('src', e.target.result); 
	    		 $('#videodisplayimg').css({'width':'50px','height':'50px'});
             $('.file-input-wrapper > .btn-file-input').css('background-image', 'url('+e.target.result+')');		
            }

            reader.readAsDataURL(input.files[0]);
        }
  }

  $("#video_thumbdisplay").change(function(){
	  check=true;
      readURL261(this);
  });
  
$scope.backdisplayvideo = function(){
   $state.go('previewvideo2');
 } 
$scope.homedisplayvideo = function(){
   $state.go('sample');
 }
 
$scope.appTitle = appTitle;	

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
 
 $scope.float1=float1;
 	
 	  $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disvideopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                         var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });       
                           
$scope.createdisplayvideo={}
$scope.cusdisplayvideo={}

 $scope.tinymceOptions = {
        

        menubar: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime table contextmenu ",
            "emoticons textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
        
	};
	
 
$scope.createdisplayvideo.displayvideotitle = elementtitle;
$scope.createdisplayvideo.displayvideotext = elementtext;

if(contentvideothumb){
    $('#videodisplayimg').attr({'src':contentvideothumb});
    $('#videodisplayimg').css({'width':'50px','height':'50px'}); 		
  }
 if(contentvideo){
    $('#videodisplay').attr({'url':contentvideo});
      $('#videodisurlimg').attr({'src':contentvideoframe});
    $('#videodisurlimg').css({'width':'50px','height':'50px'});  
  }
$scope.updatevideodisplay = function(){            
		
		 videoframebase1 = dataURL.replace("data:image/png;base64,","");
		 
	 $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
	
   var formData = new FormData();
      formData.append('api_key', appKey);
      formData.append('id', elementId);
      formData.append('title', $scope.createdisplayvideo.displayvideotitle);
      formData.append('text',$scope.createdisplayvideo.displayvideotext);
       if(videoframebase1){
      formData.append('video_frame_base64',videoframebase1);
      formData.append('video_frame_title','image.png');
      }
  if(check==true){  
	  	  if((($("#videodisplay").get(0).files[0].size) / 1024 / 1024) <= 10){

			formData.append('video', $("#videodisplay").get(0).files[0]);
		 }
		   else{
				  var alertPopup = $ionicPopup.alert({
					 title: 'MAB',
					 template: 'Please choose Video File below 10MB!'
				   });
				   alertPopup.then(function(res) {
				   });
           } 
            if($('#video_thumbdisplay').get(0).files[0]){
				formData.append('video_thumbnail', $('#video_thumbdisplay').get(0).files[0]);
			}else{
				formData.append('video_thumbnail_url', 'http://www.nuatransmedia.com/iBookImages/btn_audio.png');
			}
          
	  }else{
		     $('#videodisplay').attr({'url':contentvideo});
      $('#videodisurlimg').attr({'src':contentvideoframe});
    $('#videodisurlimg').css({'width':'50px','height':'50px'}); 		
		    $('#videodisplayimg').attr({'src':contentvideothumb});
    $('#videodisplayimg').css({'width':'50px','height':'50px'});  
	   }        
                            
	  $http.put('http://build.myappbuilder.com/api/elements/update_video.json', formData, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                      })
                      
                      .success(function(data,status, headers, config){
						  $ionicLoading.hide();
					  })
					  .error(function(data,status, headers, config){
                        $ionicLoading.hide();
                        var total = JSON.parse(data);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                      });
}  
  

 $scope.createvideodis = function(){
	
    if($scope.cusdisplayvideo.customdisvideoTitle){
      if($scope.cusdisplayvideo.customdisvideovalue){
	 
      $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });

       $.ajax({
          type: "POST",
          url: "http://build.myappbuilder.com/api/custom_values.json",
          data:{'api_key':appKey,'element_id':elementId,'title':$scope.cusdisplayvideo.customdisvideoTitle,'value':$scope.cusdisplayvideo.customdisvideovalue},
          success:function(response){
			 customdisvideoid = response.id;

            $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();                      
						    $scope.disvideopage = response;                 
						   $state.reload();     
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                          var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });   
              $scope.cusdisplayvideo.customdisvideoTitle='';
              $scope.cusdisplayvideo.customdisvideovalue='';           
            },
          error:function(error){
            $ionicLoading.hide();
            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
          }
      });
    }
      }else{
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:'Enter Title And Value'
					 });
					 alertPopup.then(function(res) {
					 });
    }
   
  }
  
$scope.removevideodisCustomValue = function(id){

    customdisvideoid = id;
    
   $ionicLoading.show({
              content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
      });
      
          $.ajax({
            type: "DELETE",
            url: "http://build.myappbuilder.com/api/custom_values.json",
            data: {"api_key":appKey,"id":customdisvideoid},
            cache: false,
            success:function(response){
              $.ajax({
                        type: "GET",
                        url: "http://build.myappbuilder.com/api/custom_values.json",
                        data:{'api_key':appKey,'element_id':elementId},
                        cache: false,
                        success:function(response){
                          $ionicLoading.hide();
							$scope.disvideopage = response;
						   $state.reload();       
                        },
                        error:function(error,status){
                           $ionicLoading.hide();
                            var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
                        }
              });              
            },
            error:function(error,status){
               $ionicLoading.hide();
                var total = JSON.parse(error.responseText);        
           
					 var alertPopup = $ionicPopup.alert({
					   title: 'Video',
					   template:total.error
					 });
					 alertPopup.then(function(res) {
					 });
            }
          });
}

});

control.controller('playvideo2Ctrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$ionicPopup,$http,$ionicActionSheet){ 

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$('.playvideo').attr({'src':contentvideo});

$scope.videoclickclose=function(){
	$('.playvideo').attr({'src':''});
	$state.go('previewvideo2');
}

});

control.controller('playvideo1Ctrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$ionicPopup,$http,$ionicActionSheet){ 

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}

$('.playvideo').attr({'src':contentvideo});

$scope.videoclickclose=function(){
	$('.playvideo').attr({'src':''});
	$state.go('previewvideo1');
}

});

control.controller('playvideoCtrl',function($scope,$state,$ionicScrollDelegate,$ionicLoading,$ionicPopup,$http,$ionicActionSheet){ 

if(colour == 'undefined'){	
$scope.bar_color = 'bar-positive';
}
else
{
$scope.bar_color = 'bar-'+colour;
}

if(buttoncolour == 'undefined'){
$scope.bar_button_color ='button-positive'; 
}
else
{
$scope.bar_button_color ='button-'+buttoncolour;
}

if(button == 'undefined'){
$scope.button_color = 'button-positive';
}
else
{
$scope.button_color='button-'+button;
}
	
$('.playvideo').attr({'src':contentvideo});

$scope.videoclickclose=function(){
	$('.playvideo').attr({'src':''});
	$state.go('previewvideo');
}

});
