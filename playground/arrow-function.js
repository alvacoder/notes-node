/* let square = (x) => {
    let result = x * x;
    return result;
}

console.log(square(3)); 
    OR
*/
/* won't work
let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Viper',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi, i'm ${this.name}`);
    }
}

user.sayHi();
user.sayHi(1, 2, 3);

*/

let user2 = {
    name: 'Viper',
    sayHi() {
        console.log(arguments);
        console.log(`Hi, i'm ${this.name}`);
    }
}

user2.sayHi();
user2.sayHi(1, 2, 3);