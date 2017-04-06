
//require mongo in app.js
var mongo = require("mongodb").MongoClient;
//require prompt
var prompt = require("prompt-sync")();
//port mongo listens on
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
	//saves collection from db as var
  var collection = db.collection('restaurants');
  // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  

  // if(allChoice == "all"){
  //   collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   });
  // } else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }

  //FIND SINGLE RESTAURANT
  // find specific restaurant with prompt
  // var searchRestaurant = prompt("Search Restaurants guy:");

  // collection.find({name: searchRestaurant}).forEach(function(doc) {
  // 		// console.log(searchRestaurant);
  // 		console.log(doc);
  // });

  //ADD RESTAURANTS
  // var addName = prompt("Add a new Restaurant name:");
  // var addStreet = prompt("Add a new Restaurant address:");
  // var addZip = prompt("Add zipcode:");
  // var addYelp = prompt("Add a new Yelp url:");

  // collection.insert(
  // {
  //   name: addName,
  //   address: {
  //     street : addStreet,
  //     zipcode : addZip
  //   },
  //   yelp: addYelp
  // }
  // );

  //EDIT USERS

 // var searchRestaurant = prompt("Search Restaurants guy:");
 // var updateName = prompt("Type new name:");
 // var updateStreet = prompt("Type new Street:");
 // var updateZip = prompt("Type new Zip:");
 // var updateYelp = prompt("Type new Yelp:");

 //  collection.update(
  	
	//     {name: searchRestaurant},
	// 	  {
	// 	    name: updateName,
	// 	    address: {
	// 	      street : updateStreet,
	// 	      zipcode : updateZip
	// 	    },
	// 	    yelp: updateYelp
	// 	  });

	
  // console.log("updated restaurant");

  //DELETE USER

  var searchRestaurant = prompt("Search Restaurants guy:");
  collection.remove(
  	
  	{name: searchRestaurant}

  	);
  console.log("removed restaurant");

});
 