// const { error } = require("console");
// const { response } = require("express");

const summaryListBGColors = [
    "hsla(0, 100%, 67%, 0.08)", "hsla(39, 100%, 56%, 0.08)",
    "hsla(166, 100%, 37%, 0.08)", "hsla(234, 85%, 45%, 0.08)"
];

const listContainer = document.querySelector("ul");

for (let i = 0; i < listContainer.children.length; i++) {
    listContainer.children[i].style.backgroundColor = summaryListBGColors[i];
}



// Fetch json file
let sumScore;
let sumCategoryName;
let sumIcon;
const resultNumerator = document.querySelector(".result__numerator");
const performanceTitle = document.querySelector(".result__h1");
const performancePara = document.querySelector(".result__p");

fetch("./data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        } 
        return response.json();
    })
    .then (data => {
        for (let i = 0; i < listContainer.children.length; i++) {
            sumIcon = listContainer.children[i].children[0].children[0];
            sumCategoryName = listContainer.children[i].children[0].children[1];
            sumScore = listContainer.children[i].children[1].innerText.valueOf();

            sumIcon.src = `${data[i].icon}`;
            sumCategoryName.innerText = `${data[i].category}`;
            sumScore = `${data[i].score} ${sumScore}`;
            listContainer.children[i].children[1].innerText = sumScore;
        }
        const scoreAverage = calculateAverage(data);
        resultNumerator.innerText = scoreAverage;
        const userGrade = gradeSystem(scoreAverage);
        performanceTitle.innerText = userGrade[0];
        performancePara.innerText = userGrade[1];
    })
    .catch(error => {
       console.error("Error fetching or parsing JSON", error);
    })

/*
    This function takes the data object,
    total any number of score propery values,
    then return average.
*/
function calculateAverage(dataObject) {
    let total = 0;
    let average;

    for(let i = 0; i < dataObject.length; i++) {
        total += dataObject[i].score;
    } 

    average = total / dataObject.length;
    return Math.floor(average);
}


const performanceDetail = {
    45: "Your score is below 45%. Keep practicing and you'll see improvement soon!",
    84: "Your performance exceed 65% of the people conducting the test here!",
    85: "Outstanding! You've outperformed 85% of participants taking this test!"
};

function gradeSystem(average) {
    if (average <= 45) {
        return ["Nice Try", performanceDetail[45]];
    } else if (average <= 84) {
        return ["Great", performanceDetail[84]];
    } else if (average > 84) {
        return ["Outstanding", performanceDetail[85]];
    } else {
        console.log("Something went wrong");
    }
}