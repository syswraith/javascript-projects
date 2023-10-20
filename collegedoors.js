// remember to toggle the all or it wont work
let links = []
Array.from(document.querySelectorAll('#choose_report > tbody > tr > td > img')).forEach(x=>{links.push(x.src.replace("-q.", "-s."))})
let stringIdent = []
let answers = []
let testId = document.querySelector(`head > script:nth-child(1)`).innerText.match(/\d+/)[0]
Array.from(document.querySelectorAll(`#choose_report > tbody > tr > td:nth-child(6) > button`)).forEach(x=>{stringIdent.push(x.getAttribute("onclick").match(/\d+/)[0])})
for (let x = 0; x != stringIdent.length; x++){
const response = await fetch(`https://tests.collegedoors.com/handlers/cdtaqstnview.php?tsid=${testId}&qid=${stringIdent[x]}`);
const htmlContent = await response.text();
const parser = new DOMParser();
const doc = parser.parseFromString(htmlContent, 'text/html');
const inputElements = doc.querySelectorAll('td input[type="radio"]');
const options = [inputElements[1], inputElements[3], inputElements[5], inputElements[7]];
options.forEach((option, index) => {
    if (option.checked) {
        answers.push(`Question ${x+1}: Option ${index + 1}`);
    }
});
}

let htmlContent = []
for (let x = 0; x != answers.length; x++){
htmlContent.push(`<h2><b>${answers[x]}</b></h2><img src='${links[x]}'>`)
}

var newWindow = window.open();
newWindow.document.write(htmlContent.join('<br><br>'))
