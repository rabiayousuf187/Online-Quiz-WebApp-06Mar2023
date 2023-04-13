console.log("Quiz PAGE");

let quiz_data = JSON.parse(localStorage.getItem("quiz_data"));
console.log("QUIZ DATA +++ ",quiz_data);

if (( quiz_data !== null ) ){

    let username = quiz_data.username;
    console.log("QUIZ DATA +++ ",username);
    let banner_heading = document.getElementById("banner_heading");
    banner_heading.style.fontSize = "40px";
    banner_heading.innerHTML = "Welcome " + username + "!";

}
else{
    document.getElementById("Top").style.display = "none";
    let current_url = window.location;
    console.log("current_url main === ",current_url);
    // let parse = current_url.href.lastIndexOf("/");
    current_url = current_url.href.substring( 0, current_url.href.indexOf("/pages") );
    console.log("current_url === ", current_url);
    window.location.replace(current_url + "/");
}
