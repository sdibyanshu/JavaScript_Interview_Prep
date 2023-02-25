class UserRide {
	constructor(userName, curentPoint, lastride_fromPoint, lastride_toPoint) {
		this.userName = userName;
		this.curentPoint = curentPoint;
		this.lastride_fromPoint = lastride_fromPoint;
		this.lastride_toPoint = lastride_toPoint;
	}

}


// Array having name userTravelDetails-------------

var  userTravelDetails = [

	new UserRide('Abhi', 600, 'Yelahanka', 'ECity'),
	new UserRide('Bhargava', 1600, 'ECity', 'Yelahanka'),
	new UserRide('Charlie', 500, 'RTNager', 'ECity'),
	new UserRide('David', 1500, 'ECity', 'RTNager'),
	new UserRide('Esha', 500, 'SilkBoard', 'ECity')
];


console.log(userTravelDetails);