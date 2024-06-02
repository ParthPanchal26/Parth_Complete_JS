// 2.Create the app stores user notes into localstorage.

let askUser = prompt("Please Enter something you want to Store into DataBase!");
if(confirm("Are you sure want to save it?")){
    localStorage.setItem("note", askUser);
}else{
    alert("Access Deny!");
}

// 3.Fetch localstorage data and show it to screen.
let notes = localStorage.getItem("note");
let list = document.getElementById('noteList');
list.innerText = notes;

// 4.Delete note according to user interest.
const deleteList = () => {
    window.location.reload();
    localStorage.removeItem("note");
    alert("note is deleted");
}

if(notes.length < 1){
    abc.style.visibility = none;
}