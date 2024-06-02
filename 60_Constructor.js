// // A constructor allways called with new.
// class FormBharo {
//     constructor(getName){
//         this.name = getName;
//         console.log(`Constructor called ... : ${getName}`);
//     }
//     submit(){
//         console.log(`${this.name} Form submitted!`);
//     }
//     cancel(){
//         console.log(`${this.name} Form canceled!`);
//     }
// }

// let Parth = new FormBharo("Parth");
// // Parth.fill("Parth");
// Parth.submit();

// let Pathu = new FormBharo("Pathu");
// // Pathu.fill("Pathu");
// Pathu.submit();

// Parth.cancel();
// Pathu.cancel();

class TrainForm {
    constructor(name, trainNo, add) {
        this.name = name;
        this.no = trainNo;
        this.add = add;
    }

    preview() {
        console.log(`${this.name} Your Train no is : ${this.no}, and address is ${this.add}`);
    }

    submit() {
        console.log(`${this.name} Your Form is Submited!`);
    }

    cancel() {
        console.log(`${this.name} Your Form is canceled!`);
        this.no = "Rejected";
    }
}

let ParthForm = new TrainForm("Parth", 21321, "north south, east west, 2332");
ParthForm.preview();
ParthForm.submit();
ParthForm.cancel();
ParthForm.preview();