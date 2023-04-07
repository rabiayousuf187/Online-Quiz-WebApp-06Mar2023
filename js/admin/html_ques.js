let html_ques = [];
let opt_array = [], opt = [];
let ques,ans;
let get_data = localStorage.getItem("html_ques");
console.log("html ques === push ",get_data)
if(get_data !== null){
    get_data = JSON.parse(get_data);
    console.log("html ques === push ",get_data)
    html_ques.push(get_data);
    console.log("html ques === push ",html_ques)
}
else{
    console.log("NO html Quest in local storage");
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

    opt_array = document.getElementById('options').querySelectorAll('[name = opt]');
    
 
    // function val_fun(item){
    //     console.log('item.value ==== ',item.value);
    //     return item.value;
    // }
    // opt = opt_array.map(val_fun);

document.getElementById('save_ques_btn').onclick = ()=>{ save_ques()};
function save_ques(){
    ques = document.getElementById('html_ques').value;
    ans =  document.getElementById('ans').value;
    opt_array = document.getElementById('options').getElementsBy('form-control');
    opt_array = Object.values(opt_array)
    console.log('opt_array  ==== ',typeof(opt_array));
    console.log('opt_array  ==== ',opt_array);
    console.log('opt_array  ==== ',opt_array[0]);
    console.log('opt_array  ==== ',opt_array[0].value);
    console.log('opt_array  ==== ',typeof(opt_array[0]));
    console.log('opt_array  ==== ',typeof(opt_array[0].value));
 
    // function val_fun(item){
    //     console.log('item.value ==== ',item.value);
    //     return item.value;
    // }
    // opt = opt_array.map(val_fun);
    // console.log('save_ques ==== ',opt);

    console.log('save_ques ==== ', ques);
    console.log('save_ques ==== ',opt);
    console.log('save_ques ==== ',ans);
}

html_ques = [
    {
        "id" : "1",
        "ques" : "What do you understand by HTML?",
        "opt" : [
                "HTML describes the structure of a webpage",
                "HTML is the standard markup language mainly used to create web pages",
                "HTML consists of a set of elements that helps the browser how to view the content",
                "All of the above"
            ],
        "ans" : "All of the above",
    },
    {
        "id" : "2",
        "ques" : "What do you understand by HTML?",
        "opt" : [
            "HTML describes the structure of a webpage",
            "HTML is the standard markup language mainly used to create web pages",
                "HTML consists of a set of elements that helps the browser how to view the content",
                "All of the above"
            ],
            "ans" : "All of the above",
        },
        {
            "id" : "3",
            "ques" : "What do you understand by HTML?",
            "opt" : [
                "HTML describes the structure of a webpage",
                "HTML is the standard markup language mainly used to create web pages",
                "HTML consists of a set of elements that helps the browser how to view the content",
                "All of the above"
            ],
            "ans" : "All of the above",
        },
    {
        "id" : "4",
        "ques" : "What do you understand by HTML?",
        "opt" : [
                "HTML describes the structure of a webpage",
                "HTML is the standard markup language mainly used to create web pages",
                "HTML consists of a set of elements that helps the browser how to view the content",
                "All of the above"
            ],
        "ans" : "All of the above",
    }
];

export{ html_ques };