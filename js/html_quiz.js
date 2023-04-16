let empty = false;
import { html_ques } from "./ques/html_ques.js";
document.getElementById("Top").style.display = "none";

let quiz_data = JSON.parse(localStorage.getItem("quiz_data"));
console.log("QUIZ DATA +++ ",quiz_data);
if( quiz_data !== null ){
  empty = true;
}


let username;
console.log("username ==== ",username);

setInterval( ()=>{
    quiz_data = localStorage.getItem("quiz_data"); 
    if( quiz_data !== null ){
      empty = true;
    }

    quiz_data = JSON.parse(quiz_data);
    console.log("quiz_data ==== ",quiz_data);
    
    username = quiz_data.username;
    console.log("username ==== ",username);

    if (( empty === false ) || ( username === "" ) || ( username === null )){
        console.log("username empty or null ==== ",username);
        Unauth();
    }
    // username !== null ? start_Quiz(): Unauth(); 
} , 3000);  

if (( empty === null ) || ( username === "" ) || ( username === null )){
    console.log("username empty or null ==== ",username);
    Unauth();
}
else{
    username = quiz_data.username;
    console.log("username ==== ",username);
    Auth();
}
// clearInterval();
function Auth(){
  document.getElementById("Top").style.display = "block";
  console.log("HTML PAGE");
  let score = 0;
  let incorrect_ans = 0;
  let percent_score = 0;
  let not_attempt = html_ques.length;

  console.log("Start now ****not_attempt === ", not_attempt);

  console.log("HTML questiuons === ", html_ques[0]["opt"]);
  console.log("HTML questiuons === ", html_ques[0]["opt"][1]);

  let banner_heading = document.getElementById("banner_heading");
  banner_heading.style.fontSize = "40px";
  banner_heading.innerHTML = "HTML Online Quiz";

  let img = document.getElementById("banner_img");
  img.src = "../img/html.png";

  function create_div(ele, id, cls, ele_name) {
    const element = document.createElement(ele);
    element.setAttribute("id", id);
    element.setAttribute("class", cls);
    // element.setAttribute('type' , typ);
    element.textContent = ele_name;
    // element.onclick = () => {
    //   funct();
    // };

    return element;
  }

  html_ques.map((ele, index) => {
    console.log("index ===== ", ele, index++);

    let indexCapText = capitalize(convertNumberToEnglish(index));

    console.log("indexCapText", indexCapText);

    let ques_div = document.querySelector("#accordionExample");
    
    let main_div = create_div("div", `accordion-item-${ele.id}`, "accordion-item", "", "");
    console.log("main_div ===== ", main_div);

    let heading = create_div(
      "h2",
      `heading${indexCapText}`,
      "accordion-header",
      "",
      "",
      ""
    );
    console.log("heading ===== ", heading, indexCapText);

    let qus_btn = create_div(
      "button",
      "",
      "accordion-button",
      `# ${index} ${ele.ques}`,
      ""
    );
    qus_btn.setAttribute("type", "button");
    qus_btn.setAttribute("data-bs-toggle", "collapse");
    qus_btn.setAttribute("data-bs-target", `#collapse${indexCapText}`);
    qus_btn.setAttribute("aria-expanded", true);
    qus_btn.setAttribute("aria-controls", `collapse${indexCapText}`);
    console.log("qus_btn ===== ", qus_btn);

    let score_text = create_div('span', `score-text-${ele.id}`, 'score-text', `${0}/10`);
    qus_btn.appendChild(score_text);

    heading.appendChild(qus_btn);
    main_div.appendChild(heading);
    ques_div.appendChild(main_div);
    console.log("ques_div ===== ", ques_div);

    let accordion_collapse_div = create_div(
      "div",
      `collapse${indexCapText}`,
      "accordion-collapse collapse show",
      "",
      ""
    );
    accordion_collapse_div.setAttribute(
      "aria-labelledby",
      `heading${indexCapText}`
    );
    accordion_collapse_div.setAttribute("data-bs-parent", "#accordionExample");
    main_div.appendChild(accordion_collapse_div);
    console.log("main_div ===== ", main_div);

    let accordion_body_div = create_div("div", `accordion-body-${ele.id}`, "accordion-body", "", "");
    accordion_collapse_div.appendChild(accordion_body_div);
    
    let form_div = create_div("div", `form${ele.id}`, "form_div", "", "");
    accordion_body_div.appendChild(form_div);

    // radio button for 1st Option
    console.log(`Option length === ${ele.opt.length}`);
    for( let i = 0 ; i < ele.opt.length ; i++){
      
      console.log(`Question === ${ele.id}, Option == ${i} === ${ele.opt[i]}`);
      let form_check_div = create_div("div", `form_check${ele.id}`, "form-check", "", "");
      form_div.appendChild(form_check_div);
    
      let form_check_input = create_div(
        "input",
        `radio-${ele.id}-0`,
        "form-check-input",
        "",
        ""
      );
      form_check_input.setAttribute("type", "radio");
      form_check_input.setAttribute("name", `ques${ele.id}_opt`);
      form_check_input.setAttribute("value", `${ele.opt[i]}`);
      form_check_div.appendChild(form_check_input);
      
      let form_check_label = create_div(
        "label",
        `label-${ele.id}-0`,
        "form-check-label",
        `${ele.opt[i]}`,
        ""
      );
      form_check_label.setAttribute("for", `ques${ele.id}_opt`);
      form_check_div.appendChild(form_check_label);

    }


    let alert_show = create_div(
      "div",
      `show_alert-${ele.id}`,
      '',
      ''  );
    accordion_body_div.appendChild(alert_show);
    
    qus_btn = create_div(
      "button",
      `check-btn-${ele.id}`,
      "btn btn-success ques-submit",
      "Submit"
    );
    qus_btn.onclick = () => {
        ques_submit(ele.ans , ele.id , `ques${ele.id}_opt`)
      }; 
      accordion_body_div.appendChild(qus_btn);
  });

  // convertNumberToEnglish
  function convertNumberToEnglish(number) {
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    const scales = ["", "thousand", "million", "billion", "trillion"];

    if (number === 0) {
      return "zero";
    }

    const sign = number < 0 ? "negative " : "";
    let englishNumber = "";
    let scaleIndex = 0;

    number = Math.abs(number);

    while (number > 0) {
      const hundreds = Math.floor((number % 1000) / 100);
      const onesAndTens = number % 100;

      if (hundreds !== 0) {
        englishNumber = ones[hundreds] + " hundred " + englishNumber;
      }

      if (onesAndTens < 20) {
        englishNumber = ones[onesAndTens] + " " + englishNumber;
      } else {
        englishNumber =
          tens[Math.floor(onesAndTens / 10)] +
          " " +
          ones[onesAndTens % 10] +
          " " +
          englishNumber;
      }

      number = Math.floor(number / 1000);
      scaleIndex++;
      if (number > 0) {
        englishNumber = scales[scaleIndex] + " " + englishNumber;
      }
    }

    return sign + englishNumber.trim();
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // **************** Submit answer
  function ques_submit(actual_ans, parent_ele, sel_ans ) {
    console.log("actual_ans ====== ", actual_ans);
    let id = parent_ele;
    console.log("id ====== ", id);
    parent_ele = `#show_alert-${parent_ele}`;
    console.log("parent_ele ====== ", parent_ele);

    console.log("sel_ans", sel_ans);
    sel_ans = document.querySelector(`input[name = ${sel_ans} ]:checked`);
    console.log("sel_ans", sel_ans);

    if (sel_ans !== null) {
      // if ( sel_ans === null )
      let sel_ans_id = sel_ans.getAttribute("id");
      sel_ans = sel_ans.getAttribute("value");
      console.log("sel_ans ----=  value", sel_ans);
      
      if (sel_ans == actual_ans) {
        not_attempt--;
        console.log("not_attempt ==== ", not_attempt);

        score +=10;
        console.log('Correct Answer!', sel_ans);
        console.log('score ===== !', score);
        document.getElementById(`score-text-${id}`).innerHTML =  '10/10';
        console.log('radio disable', document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check'));
        document.getElementById(sel_ans_id).checked;
        console.log('radio disable', document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check'));
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[0].disabled = true;
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[1].disabled = true;
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[2].disabled = true;
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[3].disabled = true;
        document.getElementById(`accordion-body-${id}`).disabled = true;
        document.getElementById(`check-btn-${id}`).disabled = true;
        console.log(document.getElementById(`danger${id}`));
        // if(document.getElementsByClassName('alert-danger')[0] !== undefined){
        if(document.getElementById(`non_sele_danger${id}`) !== null){
          document.getElementById(`non_sele_danger${id}`).remove();
        }
        alert_show('Correct Answer!', `success_${id}`,'success', parent_ele);
        
      } else {
        not_attempt--;
        console.log("not_attempt ==== ", not_attempt);

        score +=0;
        incorrect_ans +=10;
        console.log('Wrong Answer!', sel_ans);
        console.log('radio disable', document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check'));
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[0].disabled = true;
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[1].disabled = true;
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[2].disabled = true;
        document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[3].disabled = true;
        document.getElementById(`accordion-body-${id}`).disabled = true;
        document.getElementById(`check-btn-${id}`).disabled = true;
        if(document.getElementById(`non_sele_danger${id}`) !== null){
          document.getElementById(`non_sele_danger${id}`).remove();
        }
        alert_show('Wrong Answer!', `sele_danger${id}`, 'danger' ,  parent_ele);
      }
    }
    if ( sel_ans === null ) {
      if( document.getElementById(`non_sele_danger${id}`) === null ){
        alert_show("Invalid Answer! Please Select atleast One Option",`non_sele_danger${id}`,"danger", parent_ele ); 
      }
    
    }
  }

  // ******************** live alert
  function alert_show(message, id , type, parent_ele) {
    console.log("parent_ele ==== ",parent_ele);
    let alertPlaceholder = document.querySelector(parent_ele);

    // let alert_div = document.createElement("div");

    let alert_display = create_div('div', id, `alert alert-${type} alert-dismissible fade show`, '', '');
    alert_display.setAttribute('role','alert');
    
    alert_display.appendChild( create_div('strong', '', '', message, '') );
      
    console.log("alertPlaceholder ==== ",alertPlaceholder);
    console.log(alert_display);
    alertPlaceholder.appendChild(alert_display);
  }

  // ********************************* new loader
  function ShowProgress() {
    setTimeout(function() {
      var loading = $(".loading");
      loading.show();
      $('#overlay').css({
        'display': 'block',
        opacity: 0.7,
        'width': $(document).width(),
        'height': $(document).height()
      });
      $('body').css({
        'overflow': 'hidden'
      });
      $('#loading').css({
        'display': 'block'
      }).click(function() {
        $(this).css('display', 'none');
        $('#screen').css('display', 'none')
      });
    }, 200);
    $('#main').dialog({
      modal: true
    });
  }
  var finish_btn = create_div(
    "button",
    'finish_btn',
    "btn btn-warning ques-submit",
    "Finish"
  );
  finish_btn.onclick = () => {
    
    let img_loc;
    let time_delay = 1000;
    let img = create_div('img' , 'result_img', 'result_img', ``);
    let color = 'green';
      console.log("finish");
      localStorage.setItem("corrct answer",score);
      check_not_attempt();
      // not_attempt = 0;
      
      percent_score = ( score / (html_ques.length * 10) ) * 100;
      // percent_score = 50;

      if ( not_attempt === 0 ){
        console.log("not_attempt  ====== 0    Inserted");
        document.getElementById('finish_btn').disabled = true;
        document.getElementById('accordionExample').style.opacity = '0.2';
        document.getElementById('quiz_sect_content').insertAdjacentHTML("afterbegin" , `<div id='loading' class="loading" align="center">
        <div class="main">
            <div class="small1">
              <div class="small ball smallball1"></div>
              <div class="small ball smallball2"></div>
              <div class="small ball smallball3"></div>
              <div class="small ball smallball4"></div>
            </div>
    
            <div class="small2">
              <div class="small ball smallball5"></div>
              <div class="small ball smallball6"></div>
              <div class="small ball smallball7"></div>
              <div class="small ball smallball8"></div>
            </div>
    
            <div class="bigcon">
              <div class="big ball"></div>
            </div>
        </div>
    </div> `);
    ShowProgress();
        // console.log(document.getElementById('quiz_sect_content'));
        
        // let funct_result =  setTimeout( ()=>{
        setTimeout( ()=>{
          console.log("INterval ==== ",time_delay);

          document.getElementById('loading').remove();
          document.getElementById('accordionExample').style.opacity = '1';
          $('body').css({
            'overflow': 'auto'
          });
        if( percent_score >= 70){
          img_loc = "../img/gold-trophy.jpg"
          img.setAttribute('src' ,  img_loc);
          img.setAttribute('alt' ,  "gold-trophy");
          img.setAttribute('title' ,  "gold-trophy");
        }
        else if ( percent_score < 70 && percent_score >= 60 ){
          img_loc = "../img/medal.jpg"
          img.setAttribute('src' ,  img_loc);
          img.setAttribute('alt' ,  "medal");
          img.setAttribute('title' ,  "medal");
          img.style.width = "200px";
        }
        else{
          img_loc = "../img/danger.jpg";
          img.setAttribute('src' ,  img_loc);
          img.setAttribute('alt' ,  "danger");
          img.setAttribute('title' ,  "danger");
          img.style.padding = "20px 20px";
          img.style.width = "200px";
          color = 'red';
        }

        let result = document.getElementById("result");
        result.style.display = "block";
        result.appendChild(create_div('h2' , 'result_heading', 'result_heading', 'Result'));
        result.appendChild(create_div('div' , 'inner_text', 'inner_text', ''));
        document.querySelector('.inner_text').appendChild(create_div('i','','bi bi-card-list'));
        document.querySelector('.inner_text').appendChild((create_div('h6' , 'inner_text', 'inner_text', `Number of Questions#  ${html_ques.length}`)));
        result.appendChild(create_div('h2' , 'username_style', 'username_style', `${username}`));

        result.appendChild(create_div('div' , 'user_score', 'user_score', ''));
        document.getElementById("user_score").appendChild((create_div('h1' , 'percent_score', 'percent_score', `${percent_score}%`)));
        document.getElementById("user_score").appendChild(img);
        document.getElementById("percent_score").style.color = color;  
        
        let inner_ele = create_div('table' , 'result_tb', 'result_tb', ``);
        inner_ele.appendChild(create_div('thead' , 'tb_head', 'tb_head', ``)).appendChild(create_div('tr' , '', 'th_row', ``));
        result.appendChild(inner_ele);
        
        inner_ele = document.querySelector('.th_row')
        inner_ele.appendChild( create_div('td' , 'td', 'td', `Questions`) );
        inner_ele.appendChild( create_div('td' , 'td', 'td', `Correct`));
        inner_ele.appendChild( create_div('td' , 'td', 'td', `InCorrect`));

        document.getElementById('result_tb').appendChild(create_div('tbody' , 'tb_tbody', 'tb_body', ``)).appendChild(create_div('tr' , '', 'th_row2', ``));
        inner_ele = document.querySelector('.th_row2')
        inner_ele.appendChild( create_div('td' , 'td', 'td', `${html_ques.length}`));
        inner_ele.appendChild( create_div('td' , 'td', 'td', `${score}`));
        inner_ele.appendChild( create_div('td' , 'td', 'td', `${incorrect_ans}`));
        // console.log(document.querySelector('.th_row'));
        console.log(document.querySelector('#result'));
        // document.getElementById('Top').scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        } ,time_delay );
        
        // clearTimeout(funct_result);
      }
      else{
        console.log("Show Trigger ==== ",not_attempt);
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
      }

  };
    document.querySelector(".quiz_sect_content").appendChild(finish_btn);
  function check_not_attempt(){
    let un_answer;
    let ind = 0;
    // not_attempt = 0;
    let div_id;
    console.log("html_ques.length ====== ", html_ques.length);

      for( ind ;  ind < html_ques.length ; ind++){
        div_id = 1 + ind;
        document.getElementById(`form${div_id}`)
        console.log("Form no ===== ", `form${div_id}`);
        un_answer = document.querySelector(`input[name = ques${div_id}_opt ]:checked`);
        if(un_answer === null)
        {
          console.log("un_answer", un_answer);
          console.log(`danger${div_id}`);
          if(document.getElementById(`non_sele_danger${div_id}`) === null){
            alert_show("Invalid Answer! Please Select atleast One Option", `non_sele_danger${div_id}` , "danger", `#show_alert-${div_id}`) ;
            not_attempt;
            // return not_attempt;
          }
          else if(document.getElementById(`non_sele_danger${div_id}`) !== null){
            not_attempt;
          }
          else {
            not_attempt++;
          }
        }
        // not_attempt === 0 all are attempt
        else{
        not_attempt;
        }

        console.log("not_attempt ==== ", not_attempt);
    }; 
  }
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


