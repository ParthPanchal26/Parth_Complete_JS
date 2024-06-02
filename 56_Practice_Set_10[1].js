// 1.Use Free Fetch API from internet to access data.


let URL = "https://kontests.net/api/v1/all";

let res = fetch(URL);
res.then((val1) => {
    return val1.json();
}).then((val2) => {
    console.log(val2);
    let ihtml = "";

    for (item in val2) {
        console.table(val2[item]);
        let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktvWknnV3K-UmOy9Y7AYAF07IKK2SuL-7Sw&usqp=CAU";
        ihtml += `
        <div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${val2[item].name}</h5>
                    <p class="card-text">Status is : ${val2[item].status}</p>
                    <p class="card-text">in_24_hours : ${val2[item].in_24_hours}</p>
                    <p class="card-text">site : ${val2[item].site}</p>
                    <p class="card-text">Start at : ${val2[item].start_time}</p>
                    <p class="card-text">Ends at : ${val2[item].end_time}</p>
                    <a href="${val2[item].url}" target="_0" class="btn btn-primary">Go to Contest</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml;
});
