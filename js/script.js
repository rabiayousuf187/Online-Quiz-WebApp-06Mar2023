let username;
let inp_username = document.getElementById("username");
let alert_danger = document.getElementById("alert_danger");
let current_url = window.location;
console.log("current_url main === ",current_url);
// let parse = current_url.href.lastIndexOf("/");
current_url = current_url.href.substring( 0, current_url.href.lastIndexOf("/") );
console.log("current_url === ", current_url);

// console.log("username === ", quiz_data);
console.log("Start === Quiz");
setInterval( ()=>{
    console.log("setInterval");
    inp_username.style.border = "none";
    alert_danger.style.display = "none";
    username = localStorage.getItem("quiz_data"); 
    console.log(username);
    username !== null ? start_Quiz(): Unauth() ; 

} , 500);  
//5000 to 100

function start_Quiz(){
    console.log("auth User");
    start();
    
}

function Unauth(){
    console.log("Unauth User");
    setTimeout( ()=>{
        inp_username.style.border = "3px solid red";
        alert_danger.style.display = "block";
        alert_danger.innerHTML = "Please Enter Username to Start Quiz";
    }, 2000);
    // clearTimeout(styleDisplay);

    console.log("clearTimeout(styleDisplay) Unauth");

}

function start(){
    console.log("Start Quiz ====== ");
    username = inp_username.value;
    // if( username !== ""){
        inp_username.style.border = "none";
        alert_danger.style.display = "none";
        quiz_data = {
            "username": username,
        }
        console.log("Username === ",quiz_data.username);
        quiz_data = JSON.stringify(quiz_data);
        console.log("quiz_data === ",quiz_data);
        localStorage.setItem("quiz_data",quiz_data)
        window.location.replace(current_url + "/pages/quiz.html");
    
}