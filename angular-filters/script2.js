// Code goes here
angular.module('myApp', [])
.filter('titlecase', function() {
    return function(name) {
        name = ( name === undefined || name === null ) ? '' : name;
        return name.toString().toLowerCase().replace( /\b([a-z])/g, function(change) {
            return change.toUpperCase();
        });
    };
})
.controller('myController', ['$scope',function myController($scope) {
	$scope.messages = [
    {Employee: 'Garry Leopard',
		hours: 25.11,
		totalPay:850.12,
		paydate: '2014-12-03'},

		{Employee: 'Magnus Cheezle',
		hours: 4.2,
		totalPay:150,
		paydate: '2014-12-10'},

		{Employee: 'Jane Doe',
		hours: 14.31,
		totalPay:350.01,
		paydate: '2014-12-25'}
	];
}]);
