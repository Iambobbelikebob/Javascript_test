const accountId = 144553
let accountEmail = "das.subhasish220@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "subhasish.das220@gmail.com"
accountPassword = "21212121"
accountCity = "bengaluru"

console.log(accountId);

/*
prefer not to usevar
because of issue with block scope and funcutional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])