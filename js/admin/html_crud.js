import { html_ques } from "../ques/html_ques.js";
console.log("html ques ===  ",html_ques)

let opt_array = [], opt = [];
let ques,ans;
let ques_obj = {};
let ind = 0;


setInterval( insert_html , 2000 );

function insert_html(){
    let get_data = localStorage.getItem("html_ques");
    console.log("html ques === push ",get_data)
    if(get_data !== null ){
        get_data = JSON.parse(get_data);
        console.log("html ques === push ",get_data)
        // html_ques.push(new html_ques(get_data));
        // console.log("html ques === push ",html_ques);
        localStorage.removeItem('html_ques');
        console.log("Inserted html ques is remove from LS");
        flag_insert = true;
    }
    else{
        console.log("NO html Quest in local storage");
    }
}

// *******************************************
$(document).ready(function() {
    $('#example').DataTable({
        scrollY: "40vh",
        scrollCollapse: true,
        scroller: true,
        responsive: true
    });
  
    
} );

document.getElementById('save_ques_btn').onclick = ()=>{ save_ques()};
function save_ques(){
    ques = document.getElementById('html_ques').value;
    ans =  document.getElementById('ans').value;
    opt_array = document.getElementById('options').querySelectorAll('[name = opt]');
    
    console.log('opt_array  ==== ',typeof(opt_array));
    console.log('opt_array  ==== ',opt_array);
    console.log('opt_array  ==== ',opt_array[0]);
    console.log('opt_array  ==== ',opt_array[0].value);

    if( ( html_ques.length > 0 ) && ( ques !== null ) &&
     ( opt_array !== null ) && ( ans !== null )){

         for( ; ind < opt_array.length ; ind++){
             console.log('opt_array  ==== ',opt_array[ind].value);
             opt.push(opt_array[ind].value);
         }
         console.log('save_ques ==== ', ques);
         console.log('OPT final array ==== ',opt);
         console.log('OPT final array ==== ',typeof(opt));
         console.log('save_ques ==== ',ans);
         ques_obj = {
             "id" : length,
             "ques" : ques,
             "opt" : opt,
             "ans" : ans,
            };
        console.log('ques_obj  ==== ', ques_obj);
        ques_obj = JSON.stringify(ques_obj);
        console.log('ques_obj after stringify ==== ', ques_obj);
        localStorage.setItem( 'html_ques' , ques_obj);
        console.log('html_ques has been SAVE in local storage');
     }
         
}

