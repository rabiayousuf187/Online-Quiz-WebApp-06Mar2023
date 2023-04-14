let username;
let inp_username = document.getElementById("username");
let alert_danger = document.getElementById("alert_danger");
let current_url = window.location;
console.log("current_url main === ",current_url);
// let parse = current_url.href.lastIndexOf("/");
current_url = current_url.href.substring( 0, current_url.href.lastIndexOf("/") );
console.log("current_url === ", current_url);

console.log("Start === Quiz");
setInterval( ()=>{
    console.log("setInterval");
    inp_username.style.border = "none";
    alert_danger.style.display = "none";
    let quiz_data = localStorage.getItem("quiz_data"); 

    console.log("quiz_data ==== ", quiz_data);
    quiz_data = JSON.parse(quiz_data);
    console.log("quiz_data ==== ",quiz_data);

    username = quiz_data.username;
    console.log("username ==== ",username);
    
    // username !== null ? start_Quiz(): Unauth(); 
    if (( username === "" ) || ( username === null )){
        console.log("username empty or null ==== ",username);
        Unauth();
    }
    else{
        console.log("username ==== ",username);
        start_Quiz(username);
    }

} , 3000);  


function start_Quiz(username){
    console.log("auth User");
    console.log("start_Quiz usernam === ",username);

    start(username);
}

function Unauth(){
    console.log("Unauth User");
    setTimeout( ()=>{
        inp_username.style.border = "3px solid red";
        alert_danger.style.display = "block";
        alert_danger.innerHTML = "Please Enter Username to Start Quiz";
    }, 1500);
    // clearTimeout(styleDisplay);

    console.log("clearTimeout(styleDisplay) Unauth");

}

function start(username = inp_username.value){
    console.log("Start Quiz ====== ");
    username = username;
    console.log("Start username == ",username)
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