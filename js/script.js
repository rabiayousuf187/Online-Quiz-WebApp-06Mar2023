let username = "";
let inp_username = document.getElementById("username");
let alert_danger = document.getElementById("alert_danger");
let current_url = window.location;
console.log("current_url main === ",current_url);
// let parse = current_url.href.lastIndexOf("/");
current_url = current_url.href.substring( 0, current_url.href.lastIndexOf("/") );
console.log("current_url === ", current_url);

let quiz_data = localStorage.getItem("");
console.log("Start === ",quiz_data);

username = localStorage.getItem("quiz_data");
console.log("username === ",quiz_data);
// localStorage.removeItem(quiz_data)

function start(){
    console.log("Start Quiz ====== ");
    username = inp_username.value;
    if( username !== ""){
        inp_username.style.border = "none";
        alert_danger.style.display = "none";
        quiz_data = {
            "username": username,
        }
        console.log("Username === ",quiz_data.username);
        quiz_data = JSON.stringify(quiz_data);
        console.log("quiz_data === ",quiz_data);
        localStorage.setItem("quiz_data",quiz_data)
        window.location.replace(current_url + "/pages/quiz.html")
    

    }
    else{
        inp_username.style.border = "3px solid red";
        alert_danger.style.display = "block";
        alert_danger.innerHTML = "Please Enter Username to Start Quiz";
    }
    
    // inp_username.style.border = "none";
    // alert_danger.style.display = "none";
    
}

// localStorage.removeItem("quiz_data")
// // localStorage.setItem("quiz_data", "")
// if( username == ""){

// }