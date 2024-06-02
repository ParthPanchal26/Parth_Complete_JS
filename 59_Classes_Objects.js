// A class is an extensible program code tmplate for creating objects,Providing initial value
// for state and implementation of behavior.

class FormBharo {
    submit(){
        console.log(`${this.name} Form submitted!`);
    }
    cancel(){
        console.log(`${this.name} Form canceled!`);
    }
    fill(getName){
        this.name = getName;
    }
}

let Parth = new FormBharo();
Parth.fill("Parth");
Parth.submit();

let Pathu = new FormBharo();
Pathu.fill("Pathu");
Pathu.submit();

Parth.cancel();
Pathu.cancel();