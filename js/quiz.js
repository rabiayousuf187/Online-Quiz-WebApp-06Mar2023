console.log("HTML PAGE");

let quiz_data = JSON.parse(localStorage.getItem("quiz_data"));
console.log("QUIZ DATA +++ ",quiz_data);
let username = quiz_data.username;
console.log("QUIZ DATA +++ ",username);


let banner_heading = document.getElementById("banner_heading");
banner_heading.style.fontSize = "40px";
banner_heading.innerHTML = "Welcome " + username + "!";