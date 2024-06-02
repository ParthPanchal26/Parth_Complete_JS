// let statements = async () => {
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe1").innerHTML = "PORT: Connected";
//         }, 3000);
//     });
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe2").innerHTML = "IP: 127.0.0.1 ";
//         }, 6000);
//     });
//     let p3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe3").innerHTML = "Device varified!";
//         }, 9000);
//     });
//     let p4 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe4").innerHTML = "Security Percent 0.0.1 %";
//         }, 13000);
//     });
//     let p5 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe5").innerHTML = "Air_crack -ng brack -air extends implement decryption code : Access deny";
//         }, 16000);
//     });
//     let p6 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe6").innerHTML = "Access Granted";
//         }, 18000);
//     });
//     let p7 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe7").innerHTML = "Model type : Smartphone";
//         }, 20000);
//     });
//     let p8 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe8").innerHTML = "Model name : Samsung M14 5G";
//         }, 23000);
//     });
//     let p9 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe9").innerHTML = "You were Pranked !!!";
//         }, 26000);
//     });
//     let p10 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("exe10").innerHTML = "🤣😂🤣😂🤣😂";
//         }, 26100);
//     });
// }

// statements()


const typeWriterEffect = async (element, text) => {
    for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        element.innerHTML += text.charAt(i);
    }
};

const executeTypewriterEffect = async () => {
    const messages = [
        { id: "exe1", message: "Accessing Device's mainframe..." },
        { id: "exe2", message: "Bypassing security protocols..." },
        { id: "exe3", message: "Knox API 3.9v L36 decrypted..." },
        { id: "exe4", message: "Cracking encryption codes..." },
        { id: "exe5", message: "Device Type Found : Smartphone..." },
        { id: "exe6", message: "Device name : Samsung F23 5G..." },
        { id: "exe7", message: "Software : OneUI -Androd~13`..." },
        { id: "exe8", message: "Accessing Google Pay..." },
        { id: "exe9", message: "Gaining root access..." },
        { id: "exe10", message: "Bank details Found..." },
        { id: "exe11", message: "Retrieving Money..." },
        { id: "exe12", message: "Amound Transferred..." },
        { id: "exe13", message: "I'M Sorry, That was Javascript async/await Practice..." },
        { id: "exe14", message: "You were Pranked !!! ..." },
        { id: "exe15", message: "Beware of hacker__ __Parth_Panchal__! 😈" },
    ];    

    for (const { id, message } of messages) {
        const element = document.getElementById(id);
        await typeWriterEffect(element, message); // Add a line break after each message
        await new Promise((resolve) => setTimeout(resolve, 900));
    }
};
setTimeout(()=>{
    executeTypewriterEffect();

}, 3000);
