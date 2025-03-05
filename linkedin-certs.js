// load all the certs and paste this into the console

let certifications = []
document.querySelectorAll('div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)').forEach((x)=>{certifications.push(x.innerText.split('\n')[0] + ' by ' + x.innerText.split('\n')[3])})
console.log(certifications.join('\n'))
