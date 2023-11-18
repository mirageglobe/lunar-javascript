//test.js
const {Solar} = require('./lunar.js')
//const {Solar, Lunar, HolidayUtil} = require('./lunar.js')
 
let solar = Solar.fromYmdHms(1990,10,14,5,30,0);
console.log(solar.toFullString());
console.log(solar.getLunar().toFullString());
 
// node test.js
