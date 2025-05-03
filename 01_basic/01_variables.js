const accountId = 1234567890;let accountEmail = "shobhnath@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2 // not allowed
accountEmail = "hc@gmail.com"
accountPassword = "123456789"
accountCity = "delhi"

console.log("accountId", accountId);
/*

Prefer not to use var
because of issue in block scope and function scope

*/

console.table([accountEmail, accountPassword, accountCity, accountState]);