const mongoose = require("mongoose");

// Your string that you want to convert to ObjectId
const myString = "5f5b1c414f0f4f1234567890";
const objectId = mongoose.Types.ObjectId.createFromHexString(myString);

console.log(objectId); // This will print the ObjectId
