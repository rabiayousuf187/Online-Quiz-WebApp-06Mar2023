
let quiz_data = JSON.parse(localStorage.getItem("quiz_data"));
console.log("QUIZ DATA +++ ",quiz_data);

setInterval( ()=>{
    username = localStorage.getItem("quiz_data"); 
    console.log(username);
    username !== null ? console.log("not null"): console.log("null");
    // username !== null ? start_Quiz(): Unauth(); 
    if (( username.username !== null ) && ( username.username !== "" )){
        Auth();
    }
    else{
        Unauth()
    }
} , 3000);  

function Auth(){
    console.log("Quiz PAGE");
    let username = quiz_data.username;
    console.log("QUIZ DATA +++ ",username);
    let banner_heading = document.getElementById("banner_heading");
    banner_heading.style.fontSize = "40px";
    banner_heading.innerHTML = "Welcome " + username + "!";
}
function Unauth(){
    document.getElementById("Top").style.display = "none";
    let current_url = window.location;
    console.log("current_url main === ",current_url);
    // let parse = current_url.href.lastIndexOf("/");
    current_url = current_url.href.substring( 0, current_url.href.indexOf("/pages") );
    console.log("current_url === ", current_url);
    window.location.replace(current_url + "/");
}
