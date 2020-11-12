//const { beBasic } = require("./myModule");
//const myModule = require("./myModule");
// myModule.add >>>> call the function on the module >> the key value pair of the object is key = function name, value = function

const{add, sub} = require("./myModule"); // still has access even though specified only these 2?

let name = 'jenny';
console.log('jenny')

console.log(beBasic());
console.log(add(1,2), sub(2,1));

