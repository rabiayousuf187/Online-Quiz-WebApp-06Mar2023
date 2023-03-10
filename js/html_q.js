console.log("HTML PAGE");
import { html_ques } from "./html_ques.js";
let score = 0;

console.log("HTML questiuons === ", html_ques[0]["opt"]);
console.log("HTML questiuons === ", html_ques[0]["opt"][1]);

let quiz_data = JSON.parse(localStorage.getItem("quiz_data"));
console.log("QUIZ DATA +++ ", quiz_data);
let username = quiz_data.username;
console.log("QUIZ DATA +++ ", username);

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
  // console.log("index ===== ", ele.opt[0]);
  // console.log("index ===== ", ele.opt[1]);
  // console.log("index ===== ", ele.opt[2]);
  // console.log("index ===== ", ele.opt[3]);

  let indexCapText = capitalize(convertNumberToEnglish(index));

  console.log("indexCapText", indexCapText);

  let ques_div = document.querySelector("#accordionExample");
  // ques_div.insertAdjacentHTML('beforeend', ques_ele);

  

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
  let form_check_div = create_div("div", ``, "form-check", "", "");
  form_div.appendChild(form_check_div);

  let form_check_input = create_div(
    "input",
    `radio-${ele.id}-0`,
    "form-check-input",
    "",
    ""
  );
  form_check_input.setAttribute("type", "radio");
  form_check_input.setAttribute("name", "opt");
  form_check_input.setAttribute("value", `${ele.opt[0]}`);
  form_check_div.appendChild(form_check_input);

  let form_check_label = create_div(
    "label",
    `label-${ele.id}-0`,
    "form-check-label",
    `${ele.opt[0]}`,
    ""
  );
  form_check_label.setAttribute("for", "opt");
  form_check_div.appendChild(form_check_label);

  // radio button for 2nd Option
  form_check_div = create_div("div", ``, "form-check", "", "");
  form_div.appendChild(form_check_div);

  form_check_input = create_div(
    "input",
    `radio-${ele.id}-1`,
    "form-check-input",
    "",
    ""
  );
  form_check_input.setAttribute("type", "radio");
  form_check_input.setAttribute("name", "opt");
  form_check_input.setAttribute("value", `${ele.opt[1]}`);
  form_check_div.appendChild(form_check_input);

  form_check_label = create_div(
    "label",
    `label-${ele.id}-1`,
    "form-check-label",
    `${ele.opt[1]}`,
    ""
  );
  form_check_label.setAttribute("for", "opt");
  form_check_div.appendChild(form_check_label);

  // radio button for 3rd Option
  form_check_div = create_div("div", ``, "form-check", "", "");
  form_div.appendChild(form_check_div);

  form_check_input = create_div(
    "input",
    `radio-${ele.id}-2`,
    "form-check-input",
    "",
    ""
  );
  form_check_input.setAttribute("type", "radio");
  form_check_input.setAttribute("name", "opt");
  form_check_input.setAttribute("value", `${ele.opt[2]}`);
  form_check_div.appendChild(form_check_input);

  form_check_label = create_div(
    "label",
    `label-${ele.id}-2`,
    "form-check-label",
    `${ele.opt[2]}`,
    ""
  );
  form_check_label.setAttribute("for", "opt");
  form_check_div.appendChild(form_check_label);

  // radio button for 4th Option
  form_check_div = create_div("div", ``, "form-check", "", "");
  form_div.appendChild(form_check_div);

  form_check_input = create_div(
    "input",
    `radio-${ele.id}-3`,
    "form-check-input",
    "",
    ""
  );
  form_check_input.setAttribute("type", "radio");
  form_check_input.setAttribute("name", "opt");
  form_check_input.setAttribute("value", `${ele.opt[3]}`);
  form_check_div.appendChild(form_check_input);

  form_check_label = create_div(
    "label",
    `label-${ele.id}-3`,
    "form-check-label",
    `${ele.opt[3]}`,
    ""
  );
  form_check_label.setAttribute("for", "opt");
  form_check_div.appendChild(form_check_label);

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
      ques_submit(ele.ans , ele.id)
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
function ques_submit(actual_ans, parent_ele) {
  console.log("actual_ans ====== ", actual_ans);
  let id = parent_ele;
  console.log("id ====== ", id);
  parent_ele = `#show_alert-${parent_ele}`;
  console.log("parent_ele ====== ", parent_ele);

  let sel_ans = document.querySelector('input[name = "opt" ]:checked');
  console.log("sel_ans", sel_ans);

  if (sel_ans !== null) {
    // if ( sel_ans === null )
    let sel_ans_id = sel_ans.getAttribute("id");
    sel_ans = sel_ans.getAttribute("value");
    console.log("sel_ans ----=  value", sel_ans);
    
    if (sel_ans == actual_ans) {
      score +=10;
      console.log('Correct Answer!', sel_ans);
      console.log('score ===== !', score);
      document.getElementById(`score-text-${id}`).innerHTML =  '10/10';
      console.log('radio disable', document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check'));
      document.getElementById(sel_ans_id).checked;
      console.log('radio check', document.getElementById(sel_ans_id).checked).getElementsByClassName('form-check'));
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[0].disabled = true;
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[1].disabled = true;
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[2].disabled = true;
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[3].disabled = true;
      document.getElementById(`accordion-body-${id}`).disabled = true;
      document.getElementById(`check-btn-${id}`).disabled = true;
      alert_show('Correct Answer!', 'success', parent_ele);
      
    } else {
      score +=0;
      console.log('Wrong Answer!', sel_ans);
      console.log('radio disable', document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check'));
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[0].disabled = true;
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[1].disabled = true;
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[2].disabled = true;
      document.getElementById(`accordion-body-${id}`).getElementsByClassName('form-check-input')[3].disabled = true;
      document.getElementById(`accordion-body-${id}`).disabled = true;
      document.getElementById(`check-btn-${id}`).disabled = true;
      alert_show('Wrong Answer!', 'danger', parent_ele);
    }
  } else if (sel_ans === null) {
    console.log("sel_ans", sel_ans);
    alert_show("Invalid Answer! Please Select atleast One Option","danger", parent_ele, );
  }
}

// ******************** live alert
function alert_show(message, type, parent_ele) {
  let alertPlaceholder = document.querySelector(parent_ele);

  // let alert_div = document.createElement("div");

  let alert_display = create_div('div', '', `alert alert-${type} alert-dismissible fade show`, '', '');
  alert_display.setAttribute('role','alert');
  alert_display.appendChild( create_div('strong', '', '', message, '') );
  let button = create_div('button', '', 'btn-close', '', '');
  button.setAttribute('type','button');
  button.setAttribute('data-bs-dismiss','alert');
  button.setAttribute('aria-label','Close');
  alert_display.appendChild( button);
  
  console.log(alert_display);

  alertPlaceholder.appendChild(alert_display);
}

function checked_prev_radio( id ){
  console.log("ID checked ==== ",id);
  document.getElementById(id).checked;
}