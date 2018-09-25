var app=angular.module('expressionExample', [])
app.controller('ExampleController', function($scope,$http,$location,$timeout,$interval) {
  var exprs = $scope.exprs = [];
  $scope.expr = '3*10|currency';
  $scope.addExp = function(expr) {
    exprs.push(expr);
  };

  $scope.removeExp = function(index) {
    exprs.splice(index, 1);
  };
  //$scope.jsonarray={TutorialID:12,tutorialName:"Angular"};
  
  $scope.sendJsonData=function(){
	  var companies=[];
	  companies.push({ 'name':'sushil', 'employees': '2500', 'headoffice':'Thane' },
			  { 'name':'Infosys Technologies',
		  'employees': 125000,
		  'headoffice': 'Bangalore'},
		  { 'name':'Cognizant Technologies',
			  'employees': 100000,
			  'headoffice': 'Bangalore'},
			  { 'name':'Wipro',
				  'employees': 115000,
				  'headoffice': 'Bangalore'},
				  { 'name':'Tata Consultancy Services (TCS)',
					  'employees': 150000,
					  'headoffice': 'Bangalore'});
	 return companies;
  };
  
  
  var data=$scope.sendJsonData();
  $scope.jsonarray=data;
  $scope.headerPath=$location.absUrl();
  $scope.weburl = $location.absUrl();
  $scope.urlhost = $location.host();
  $scope.urlport = $location.port();
  $scope.urlprotocol = $location.protocol();
  
  $timeout(function () {
	  $scope.urlprotocol = "Stopped 3 seconds";
	  }, 3000);
  
  $interval(function () {
	  $scope.urlport = new Date().toLocaleTimeString();
	  }, 1000);
  
  $scope.arrlist= [{
	  "userid": 1,
	  "name": "Sushil"
	  }, {
	  "userid": 2,
	  "name": "Navin"
	  }, {
	  "userid": 3,
	  "name": "Swapnil"
	  }];
  
$scope.sendData=function(){
	 var url = 'posturl', data =  JSON.stringify($scope.jsonarray),config='contenttype';
	  $http.post(url, data, config).then(function (response) {
	  // This function handles success
		  var success="successful";
	  }, function (response) {
		  var erroroccured='failed';
	  // this function handles error
	  });
}
  
$scope.getdetails = function (event,item) {
	$scope.result = "Your Clicked on "+item.name+" Coordinates X: " + event.clientX + " and Y: " + event.clientY;
	}
	var newArr=[];
 var choice=$scope.arrlist;
angular.forEach(choice, function (value, key) {
	
	newArr.push(choice[key].name);
	var aaaa=newArr;
	
	});

	$scope.checkselection=function(){
		if($scope.usersDd!="" && $scope.usersDd!=undefined){
			$scope.msg="Selected Value : "+$scope.usersDd;
		}
		else {
			$scope.msg="Please Select Dropdown.....";
		}
	}
	
	

});

app.directive('allowOnlyNumbers', function () {  
    return {  
        restrict: 'A',  
        link: function (scope, elm, attrs, ctrl) {  
            elm.on('keydown', function (event) {  
                if (event.which == 64 || event.which == 16) {  
                    // to allow numbers  
                    return false;  
                } else if (event.which >= 48 && event.which <= 57) {  
                    // to allow numbers  
                    return true;  
                } else if (event.which >= 96 && event.which <= 105) {  
                    // to allow numpad number  
                    return true;  
                } else if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {  
                    // to allow backspace, enter, escape, arrows  
                    return true;  
                } else {  
                    event.preventDefault();  
                    // to stop others  
                    return false;  
                }  
            });  
        }  
    }  
}); 