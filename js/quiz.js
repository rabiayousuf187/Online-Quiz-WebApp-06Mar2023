document.getElementById("Top").style.display = "none";
let username;
let empty = false;
let quiz_data = JSON.parse(localStorage.getItem("quiz_data"));
console.log("QUIZ DATA +++ ",quiz_data);

if( quiz_data !== null ){
    empty = true;
}
  
setInterval( ()=>{
    quiz_data = localStorage.getItem("quiz_data");
    quiz_data !== null ? (empty = true,quiz_data = JSON.parse(quiz_data), username = quiz_data.username): (empty = false, username = null);

    console.log("quiz_data ==== ",quiz_data);
    console.log("QUIZ DATA is not empty ",empty);
    console.log("username ==== ",username);
    
    // username = quiz_data.username;

      if ( ( empty === false ) && ( username === "" ) || ( username === null ) ){
            console.log("QUIZ DATA is not empty ",empty);
            // console.log("username empty or null ==== ",username);
            Unauth();
      }
    // username !== null ? start_Quiz(): Unauth(); 
} , 3000);  

if ( ( empty === false ) || ( username === "" ) || ( username === null ) ){
    // console.log("username empty or null ==== ",username);
    Unauth();
}
else{
    username = quiz_data.username;
    console.log("username ==== ",username);
    Auth();
}
function Auth(){
    console.log("Quiz PAGE");
    // let username = quiz_data.username;
    console.log("QUIZ DATA +++ ",username);
    let banner_heading = document.getElementById("banner_heading");
    banner_heading.style.fontSize = "40px";
    banner_heading.innerHTML = "Welcome " + username + "!";
    setTimeout( ()=>{
        document.getElementById("Top").style.display = "block";
    } ,10 );
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
