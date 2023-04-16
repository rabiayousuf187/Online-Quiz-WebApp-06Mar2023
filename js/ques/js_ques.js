let js_ques = [
    {
        "id": "1",
        "ques": "Which of the following is not a primitive data type in JavaScript",
        "opt": [
            `Boolean`,
            `String`,
            `umber`,
            `Object`
        ],
        "ans": `Object`,
    },
    {
        "id": "2",
        "ques": `What is the output of the following code: console.log(3 + 4 + "5");`,
        "opt": [
            `125`,
            `"345"`,
            `"75"`,
            `12`
        ],
        "ans": "345"`,
        },
    {
       "id" : "3",
        "ques" : "Which of the following operators has the highest precedence in JavaScript?",
        "opt" : [
            "Assignment operator (=)",
        "Ternary operator (? :)",
        "Logical AND (&&)",
        "Addition operator (+)"
        ],
        "ans" : "Ternary operator (? :)",
        },
    {
       "id" : "4",
        "ques" : "What is the output of the following code: console.log(0.1 + 0.2 === 0.3);",
        "opt" : ["true",
        "false",
        "NaN",
        "undefined"
        ],
        "ans" : "false",
        },
    {
       "id" : "5",
        "ques" : "What is the output of the following code: console.log(Math.floor(Math.random() * 10));",
        opt: "A random number between 0 and 10 (inclusive)",
        "A random number between 0 and 9 (inclusive)",
        "A random number between 1 and 10 (inclusive)",
        "A random number between 1 and 9 (inclusive)"
        ],
        "ans" : "A random number between 0 and 9 (inclusive)",
        },
    {
       "id" : "6",
        "ques" : "Which of the following is not a looping statement in JavaScript?",
        "opt" : ["for",
        ""ques" : "while",
        "do-"ques" : "while",
        "repeat"
        ],
        "ans" : "repeat",
        },
    {
       "id" : "7",
        "ques" : "What is the output of the following code: console.log(typeof typeof undefined);",
        "opt" : [""undefined"",
        ""string"",
        ""object"",
        ""number""
        ],
        "ans" : ""string"",
        },
    {
       "id" : "8",
        "ques" : "Which of the following is not a valid type of function in JavaScript?",
        "opt" : ["Anonymous function",
        "Arrow function",
        "Named function",
        "Mixed function"
        ],
        "ans" : "Mixed function",
        },
    {
       "id" : "9",
        "ques" : "What is the output of the following code: console.log("hello".toUpperCase());",
        "opt" : [""hello"",
        ""HELLo"",
        ""HELLO"",
        ""H""
        ],
        "ans" : ""HELLO",
    },
    {
       "id" : "10",
        "ques" : "What is the output of the following code: console.log([1, 2, 3].indexOf(2));",
        "opt" : ["1",
        "2",
        "3",
        "-1"
        ],
        "ans" : "1",
        },
    {
       "id" : "11",
        "ques" : "Which of the following methods sorts the elements of an array in place and returns the sorted array?",
        "opt" : [
            "sort()",
"reverse()",
"splice()",
"shift()"
],
"ans" : "sort()",
},
    {
       "id" : "12",
        "ques" : "What is the output of the following code: console.log("hello".charAt(1));",
        "opt" : [""e"",
        ""h"",
        ""l"",
        ""o""
        ],
        "ans" : ""e"",
        },
    {
       "id" : "13",
        "ques" : "What is the output of the following code: console.log(typeof NaN);",
        "opt" : [""number"",
        ""string"",
        ""undefined"",
        ""object""
        ],
        "ans" : ""number",
    },
    {
       "id" : "14",
        "ques" : "What is the output of the following code: console.log("hello".replace("l", "L"));",
        "opt" : [""Hello"",
        ""helLo"",
        ""heLLo"",
        ""helo""
        ],
        "ans" : ""HeLlo"",
        },
    {
       "id" : "15",
        "ques" : "Which of the following methods returns a new array consisting of the elements of the original array joined together with a specified separator?",
        "opt" : ["map()",
        "reduce()",
        "join()",
        "slice()"
        ],
        "ans" : "join()",
        },
    {
       "id" : "16",
        "ques" : "What is the output of the following code: console.log("hello world".split(" "));",
        "opt" : ["["hello", "world"]",
        "["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]",
        "["hello", "world", ""]",
        "["hello", "world", undefined]"
        ],
        "ans" : "["hello", "world"]",
        },
    {
       "id" : "17",
        "ques" : "Which of the following methods returns a new array with the first element removed?",
        "opt" : ["unshift()",
        "shift()",
        "slice()",
        "splice()"
        ],
        "ans" : "shift()",
        },
    {
       "id" : "18",
        "ques" : "Which of the following is not a valid way to declare a variable in JavaScript?",
        "opt" : ["var",
        "const",
        "let",
        "int"
        ],
        "ans" : "int",
        },
    {
       "id" : "19",
        "ques" : "What is the output of the following code: console.log(Boolean("false"));",
        "opt" : ["false",
        "true",
        "NaN",
        "undefined"
        ],
        "ans" : "true",
        },
    {
       "id" : "20",
        "ques" : "What is the output of the following code: console.log(2 ** 3 ** 2);",
        "opt" : [
            "512",
"64",
"9",
"8"
],
"ans" : "512",
}
];

js_ques =
    JSON.parse(localStorage.getItem("quiz_data")) !== null ? js_ques : null;
console.log("export page js_ques === ", js_ques);
export { js_ques };
