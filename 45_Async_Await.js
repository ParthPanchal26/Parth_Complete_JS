async function weather() {
    let weather1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`28 cel`);
        }, 1000);
    });

    let weather2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`30 cel`);
        }, 4000);
    });

    console.log(`Fetching Tarapur's weather ...`);
    let w1 = await weather1; // The await will stop execution until it does not resolved.
    console.log(`Tarapur weather : ${w1}`);
    console.log(`Fetching vadodara's weather ...`);
    let w2 = await weather2;
    console.log(`Vadodara's weather : ${w2}`);
    return [w1, w2];
}

const timePass = async () => {
    console.log("I am doing time pass ... ");
}
//The timePass function will execute anythings between the weather function.
// so let's put all these code in to async function and await both methods to execute one by one.
const main = async () => {
    await weather();
    await timePass();
    // let w = await weather();
    // let timeP = await timePass();
    // w.then((val) => {
    //     console.log(val);
    // });
    // timeP.then((val)=>{
    //     console.log(val);
    // })
}

main();