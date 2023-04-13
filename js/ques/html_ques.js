let html_ques = [
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
        "ques" : "What is the latest version of HTML?",
        "opt" : [
                "HTML 4",
                "HTML 5",
                "HTML 6",
                "HTML 7"
                ],
        "ans" : "HTML 5",
    },
    {
        "id" : "3",
        "ques" : "Which of the following is not a new feature in HTML5?",
        "opt" : [
                    "Canvas",
                    "Audio and video support",
                    "New semantic elements",
                    "XML syntax"
                ],
        "ans" : "XML syntax",
    },
    {
        "id" : "4",
        "ques" : "What is the purpose of the <canvas> element in HTML5?",
        "opt" : [
                    "To create interactive graphics and animations",
                    "To define a section of a web page",
                    "To play audio and video content",
                    "To create forms and input elements"
                ],
        "ans" : "To create interactive graphics and animations",
    },
    {
        "id" : "5",
        "ques" : "Which of the following is not a semantic element in HTML5?",
        "opt" : [
                    "<header>",
                    "<article>",
                    "<div>",
                    "<footer>",
                ],
        "ans" : "<div>",
    },
    {
        "id" : "6",
        "ques" : "Which of the following is an example of a self-closing tag in HTML5?",
        "opt" : [
                    "<div></div>",
                    `<img src="image.jpg">`,
                    "<p>Paragraph text</p>",
                    `<a href="https://www.example.com">Link</a>`,
                ],
        "ans" : `<img src="image.jpg">`,
    },
    {
        "id" : "7",
        "ques" : "What is the purpose of the <video> element in HTML5?",
        "opt" : [
                    "To display text content",
                    "To display images",
                    "To play audio content",
                    "To play video content"
                ],
        "ans" : "To play video content",
    },
    {
        "id" : "8",
        "ques" : "Which of the following is an example of a new form input type in HTML5?",
        "opt" : [
                    `<input type="text">`,
                    `<input type="password">`,
                    `<input type="email">`,
                    `<input type="radio">`
                ],
        "ans" : `<input type="email">`,
    },
    {
        "id" : "9",
        "ques" : "Which of the following is the correct syntax for an ordered list in HTML5?",
        "opt" : [
                    "<ol><li>Item 1</ol></li>",
                    "<ol><li>Item 1</li></ol>",
                    "<li><ol>Item 1</ol></li>",
                    "<li><ol>Item 1</li></ol>"
                ],
        "ans" : "<ol><li>Item 1</li></ol>",
    },
    {
        "id" : "10",
        "ques" : "Which of the following is an example of a new semantic element in HTML5?",
        "opt" : [
                    "<table>",
                    "<nav>",
                    "<form>",
                    "<span>",
                ],
        "ans" : "<nav>",
    },
    {
        "id" : "11",
        "ques" : "What is the purpose of the <datalist> element in HTML5?",
        "opt" : [
                    "To define a list of predefined options for a form input field",
                    "To display a table of data",
                    "To define a section of a web page",
                    "To play audio and video content"
                ],
        "ans" : "To define a list of predefined options for a form input field",
    },
    {
        "id" : "12",
        "ques" : "Which of the following is an example of a new form input type in HTML5 used for selecting a date and time?",
        "opt" : [
                    `<input type="text">`,
                    `<input type="password">`,
                    `<input type="date">`,
                    `<input type="radio">`
                ],
        "ans" : `<input type="date">`,
    },
    {
        "id" : "13",
        "ques" : "Which of the following is an example of a new form input type in HTML5 used for selecting a range of values?",
        "opt" : [
                    `<input type="text">`,
                    `<input type="password">`,
                    `<input type="range">`,
                    `<input type="radio">`
                ],
        "ans" : `<input type="range">`,
    },
    {
        "id" : "14",
        "ques" : "Which of the following is an example of a new attribute in HTML5 used for making a form input field required?",
        "opt" : [
                    `required="true"`,
                    `required="required",`
                    `mandatory="true"`,
                    `mandatory="required"`,
                ],
        "ans" : `required="required",`,
    },
    {
        "id" : "15",
        "ques" : "Which of the following is an example of a new attribute in HTML5 used for specifying the maximum value allowed in a form input field?",
        "opt" : [
                    `max="10"`,
                    `maximum="10"`,
                    `limit="10"`,
                    `upper="10"`
                ],
        "ans" : `max="10"`,
    },
    {
        "id" : "16",
        "ques" : "Which of the following is an example of a new attribute in HTML5 used for specifying a placeholder text in a form input field?",
        "opt" : [
                    `placeholder="Enter your text here"`,
                    `text="Enter your text here"`,
                    `input="Enter your text here"`,
                    `value="Enter your text here"`
                ],
        "ans" : `placeholder="Enter your text here"`,
    },
    {
        "id" : "17",
        "ques" : "Which of the following is an example of a new attribute in HTML5 used for making a link open in a new window or tab?",
        "opt" : [
                    `href="http://www.example.com" target="_new"`,
                    `href="http://www.example.com" target="_blank"`,
                    `href="http://www.example.com" target="_window"`,
                    `href="http://www.example.com" target="_tab"`
                ],
        "ans" : `href="http://www.example.com" target="_blank"`,
    },
    {
        "id" : "18",
        "ques" : "Which of the following is an example of a new attribute in HTML5 used for specifying the source of an external script file?",
        "opt" : [
                    `src="script.js"`,
                    `script="script.js"`,
                    `external="script.js"`,
                    `file="script.js"`
                ],
        "ans" : `src="script.js"`,
    },
    {
        "id" : "19",
        "ques" : "Which of the following is an example of a new attribute in HTML5 used for specifying the width and height of an image?",
        "opt" : [
                    `size="100x100"`,
                    `width="100" height="100"`,
                    `dimensions="100,100"`,
                    `style="width:100px;height:100px;"`
                ],
        "ans" : `width="100" height="100"`,
    },
    {
        "id" : "20",
        "ques" : "Which of the following is an example of a new element in HTML5 used for defining a figure with a caption?",
        "opt" : [
                    `<img>`,
                    `<figure>`,
                    `<caption>`,
                    ` <figcaption>`
                ],
        "ans" : `<figure>`,
    },
        
        
        
        
];

html_ques =  JSON.parse(localStorage.getItem("quiz_data")) !== null? html_ques : null;
console.log("export page html_ques === ", html_ques);
export {html_ques}