import puppeteer from 'puppeteer';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function userProfile(uname){

	const browser = await puppeteer.launch({ignoreHTTPSErrors: true});
	const page = await browser.newPage();
	await page.goto('https://etechschoolonline.com/');
	await page.setViewport({width: 1366, height: 768});
	await page.$eval('#j_logincode', el => el.value = 'khsbaner');
	await page.$eval('#j_username', (el, uname) => {el.value = uname + 'p'}, uname );
	await page.$eval('#j_password', (el, uname) => {el.value = uname + 'p'}, uname );
	await page.screenshot({path: 'png.png'})
	const [response] = await Promise.all([
		page.waitForNavigation(),
		await page.click('#j_idt49\\:btnLogin')
	]);
	await page.goto('https://etechschoolonline.com/student.htm')
	
	const photo = await page.$eval('#form\\:uploadedPhotoPr', el => el.src);
	const name = await page.$eval('#form\\:studentName', el => el.innerText.slice(2));
	const house = await page.$eval('#form\\:vStuHouse', el => el.innerText.slice(2));
	const rollno = await page.$eval('#form\\:studentRollNo', el => el.innerText.slice(2));
	const motherTongue = await page.$eval('#form\\:vMothertongue', el => el.innerText.slice(2));
	const aadhar = await page.$eval('#form\\:vAadharCard', el => el.innerText.slice(2));
	const dob = await page.$eval('#form\\:vDateOfBirth', el => el.innerText.slice(2));
	const birthPlace = await page.$eval('#form\\:vPlaceBirth', el => el.innerText.slice(2));
	const address = await page.$eval('#form\\:tempAddress', el => el.innerText.slice(2));
	const bg = await page.$eval('#form\\:vBloodGrp', el => el.innerText.slice(2));
	const father = await page.$eval('#form\\:vFatherFullName', el => el.innerText.slice(2));
	const mother = await page.$eval('#form\\:vMotherFullName', el => el.innerText.slice(2));
	const mob1 = await page.$eval('#form\\:vRegMobilePar1', el => el.innerText.slice(2));
	const mob2 = await page.$eval('#form\\:vRegMobilePar2', el => el.innerText.slice(2));
	const religion = await page.$eval('#form\\:vmReligion', el => el.innerText.slice(2));
	const caste = await page.$eval('#form\\:vmCaste', el => el.innerText.slice(2));
	const casteCategory = await page.$eval('#form\\:vmCasteCategory', el => el.innerText.slice(2));
	const profile = {photo, name, house, rollno, motherTongue, aadhar, dob, birthPlace, address, bg, father, mother, mob1, mob2, religion, caste, casteCategory }
	await browser.close()
	console.log(profile)
};

rl.question('Please enter username schema without (s) or (p): ', name => { userProfile(name)} );