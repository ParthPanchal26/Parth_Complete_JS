class Employee {
    constructor() {
        console.log(`Constructor occured!`)
    }
    login() {
        console.log(`Employee Logged in!`);
    }
    logout() {
        console.log(`Employee Logged out!`);
    }
    requestLeaves(leaves){
        console.log(`Employee requested ${leaves} leaves!- Approved!`)
    }
}

class programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(leaves); // To access method from parent class using super keyword.
        // console.log(`Employee requested ${leaves + 1} leaves!`)
    }
}

let e = new programmer();
e.login();
e.requestLeaves(3);