function save() {
    let value = document.getElementById('value').value;

    let getData = localStorage.getItem('todo');

    if (!getData) {
        getData = [];
    } else {
        getData = JSON.parse(getData);
    }

    getData.push(value);

    localStorage.setItem('todo', JSON.stringify(getData));

    document.getElementById("value").value = "";
}
function getdata() {
    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "";
    const getdata = localStorage.getItem("todo");
    const data = JSON.parse(getdata);

    const div = document.getElementById("output");
    div.innerHTML = "";

    data.forEach(value => {
        const newLine = document.createElement("div");
        newLine.textContent = value;
        div.appendChild(newLine);
    });
}
function hideData() {
    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "none";
}
function deleteLast() {
    let existingData = localStorage.getItem("todo");

    if (existingData) {
        const dataArray = JSON.parse(existingData);

        // Remove the last item from the array
        dataArray.pop();

        // Convert the updated array back to a string
        localStorage.setItem("todo", JSON.stringify(dataArray));

        // Refresh the displayed data
        getdata();
    } else {
        console.log("No data found.");
    }
}