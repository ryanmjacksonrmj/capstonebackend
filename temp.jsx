const mongoose = require("mongoose");

// Your string that you want to convert to ObjectId
const myString = "65947fc5ef7bdea3440748ce";

// Use the mongoose.Types.ObjectId constructor to convert the string to ObjectId
const objectId = mongoose.Types.ObjectId(myString);

console.log(objectId); // This will print the ObjectId
