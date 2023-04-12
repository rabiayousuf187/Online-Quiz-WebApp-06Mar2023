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

html_ques =  JSON.parse(localStorage.getItem("quiz_data")) !== null? html_ques : null;
console.log("export page html_ques === ", html_ques);
export {html_ques}