// use CSS.escape() to escape characters that need escaping
selector = "add selector here";
str = document.querySelector(selector).innerText;
google = "https://www.google.com/search?q=";
splitStr = str.split(' ');
splitFormattedStr = splitStr.map((currentValue) => {
    if (/\d/.test(currentValue)) { return `"${currentValue}"` }
    else { return currentValue }
});
let query = google + splitFormattedStr.join('+');
window.open(query);
