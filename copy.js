// use CSS.escape() to escape characters that need escaping
selector = "add selector here";
str = document.querySelector(selector).innerText;
google = "https://www.google.com/search?q="
splitStr = str.split(' ')
splitFormattedStr = splitStr.map((currentValue) => {
    if (/\d/.test(currentValue)) { return `"${currentValue}"` }
    else { return currentValue }
});
let query = google + splitFormattedStr.join('+')
window.open(query)
// bookmarklet - add the selector and copy paste it in the url section of a bookmark:
/* javascript:{selector="add selector here";str=document.querySelector(selector).innerText;google="https://www.google.com/search?q=";splitStr=str.split(%27 %27);splitFormattedStr=splitStr.map((currentValue)=>{if (/\d/.test(currentValue)){return %60"${currentValue}"%60}else{return currentValue}});let query=google + splitFormattedStr.join(%27+%27);window.open(query); console.log('find the original at %chttps://github.com/syswraith/javascript-projects/edit/main/copy.js','color:#00ff00;font-size:15px;');} */
