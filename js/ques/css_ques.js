let css_ques = [
    {
        id: "1",
        ques: "Which property is used to add a background color to an element in CSS3?",
        opt: [
            `background-image`,
            `background-color`,
            `background-repeat`,
            `background-size`,
        ],
        ans: `background-color`,
    },
    {
        id: "2",
        ques: "Which CSS3 property is used to create rounded corners on elements?",
        opt: [`border-radius`, `border-color`, `border-width  `, `border-style`],
        ans: `border-radius`,
    },
    {
        id: "3",
        ques: "Which CSS3 property is used to create a shadow effect?",
        opt: [`text-shadow`, `box-shadow`, `border-shadow`, `element-shadow`],
        ans: `box-shadow`,
    },
    {
        id: "4",
        ques: "Which property is used to add an underline to text in CSS3?",
        opt: [`text-decoration`, `text-transform`, `text-shadow`, `text-color`],
        ans: `text-decoration`,
    },
    {
        id: "5",
        ques: "Which CSS3 property is used to change the size of a font?",
        opt: [`font-weight`, `font-style`, `font-size`, `font-family`],
        ans: `font-size`,
    },
    {
        id: "6",
        ques: "Which property is used to make text bold in CSS3?",
        opt: [`font-weight`, `font-style`, `font-size`, `font-family`],
        ans: `font-weight`,
    },
    {
        id: "7",
        ques: "Which CSS3 property is used to add a transition effect to an element?",
        opt: [`transition`, `animation`, `transform`, `transition-effect`],
        ans: `transition`,
    },
    {
        id: "8",
        ques: "Which property is used to change the color of text in CSS3?",
        opt: [`text-color`, `color`, `font-color`, `background-color`],
        ans: `color`,
    },
    {
        id: "9",
        ques: "Which CSS3 property is used to align an element vertically?",
        opt: [`vertical-align`, `align-items`, `justify-content`, `align-content`],
        ans: `vertical-align`,
    },
    {
        id: "10",
        ques: "Which property is used to create columns in CSS3?",
        opt: [`column-count``column-gap`, `column-width`, `all of the above`],
        ans: `all of the above`,
    },
    {
        id: "11",
        ques: "Which CSS3 property is used to add a gradient effect to an element?",
        opt: [
            `gradient`,
            `background-gradient`,
            `linear-gradient`,
            `radial-gradient`,
        ],
        ans: `linear-gradient`,
    },
    {
        id: "12",
        ques: "Which property is used to make an element transparent in CSS3?",
        opt: [`opacity`, `visibility`, `display`, `position`],
        ans: `opacity`,
    },
    {
        id: "13",
        ques: "Which CSS3 property is used to add a border to an element?",
        opt: [`border-color`, `border-width`, `border-style`, `all of the above`],
        ans: `all of the above`,
    },
    {
        id: "14",
        ques: "Which property is used to make text uppercase in CSS3?",
        opt: [`text-transform`, `text-decoration`, `text-shadow`, `text-color`],
        ans: `text-transform`,
    },
    {
        id: "15",
        ques: "What is the default value of the flex-direction property in CSS Flexbox?",
        opt: [`row`, `row-reverse`, `column`, `column-reverse`],
        ans: `row`,
    },
    {
        id: "16",
        ques: "Which CSS Flexbox property is used to set the flex-grow value of a flex item?",
        opt: [`flex`, `flex-grow`, `flex-shrink`, `flex-basis`],
        ans: `flex-grow`,
    },
    {
        id: "17",
        ques: "Which CSS Flexbox property is used to set the order of a flex item?",
        opt: [`order`, `flex-grow`, `flex-shrink`, `flex-basis`],
        ans: `order`,
    },
    {
        id: "18",
        ques: "Which property is used to set the width of a flex container in CSS Flexbox?",
        opt: [`width`, `height`, `flex-wrap`, `flex-direction`],
        ans: `width`,
    },
    {
        id: "19",
        ques: "Which CSS Flexbox property is used to set the flex-basis value of a flex item?",
        opt: [`order`, `flex-grow`, `flex-shrink`, `flex-basis`],
        ans: `flex-basis`,
    },
    {
        id: "20",
        ques: "Which property is used to align a single flex item along the cross-axis in CSS Flexbox?",
        opt: [
            `align-items`,
            `justify-content`,
            `align-content`,
            `none of the above`,
        ],
        ans: `none of the above`,
    },
];

css_ques =
    JSON.parse(localStorage.getItem("quiz_data")) !== null ? css_ques : null;
console.log("export page css_ques === ", css_ques);
export { css_ques };
