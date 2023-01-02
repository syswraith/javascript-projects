document.write('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Table Animation</title> <style>body{min-height: 90vh; display: flex; justify-content: center; align-items: center;}table{margin: auto; position: relative; width: fit-content;}table, td{background-color: black; border-radius: 5px; padding: 5px; border: 2px solid #ffffff;}td{border-radius: 50%;}#one-button{user-select: none; border: 2px solid #000000; box-shadow: 5px 5px #000000; transition: 0.2s;}#one-button:active{box-shadow: none;}</style></head><body> <div id="main-container"> <button id="one-button" onclick="setTimeout(theAnimation, 0)">Click me bro</button> </div><script src="table-animation.js"></script></body></html>');
const main = document.getElementById("main-container");
let times = 0;
let trOpen = '<tr>';
let trClose = '</tr>'
let tdOpen = '<td>';
let tdClose = '</td>';
let tblOpen = '<table>';
let tblClose = '</table>';

function frame(times){
    setTimeout(()=>{
        main.innerHTML = tblOpen + (trOpen + (tdOpen + tdClose).repeat(times) + trClose).repeat(times) + tblClose;
    }, times * 100)
}

function theAnimation(){
    while (times != 1000){
        frame(times);
        times += 1;
    }
}
