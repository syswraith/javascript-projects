function box(string) {
	// split and append new line esc char
	const maxChar = Math.floor(Math.random() * (120 - 40 + 1) + 40)
	let stringMod = string.trim().split(' ')
	let wordsPerLine =  Math.floor(Math.random() * ((maxChar / 10) - 4 + 1) + 4);
	for (let x = 0; x != stringMod.length; x++) {
		if (x % wordsPerLine == 0 && x != 0) { stringMod[x] += '\n' }
		else if (stringMod[x].length > 60) { stringMod[x] = stringMod[x].slice(0, 60) }
	}
	stringMod = stringMod.join(' ')

	// split and pad
	const content = stringMod.split('\n')
	const arr = []
	for (let x = 0; x != content.length; x++) {
		arr.push(content[x].padStart((maxChar + content[x].length) / 2).padEnd(maxChar))
	}
	arr.unshift(' '.repeat(maxChar))
	arr.push(' '.repeat(maxChar))

	// make box
	let [hline, vline, corner] = ['-', '|', '+']
	for (let x = 0; x != arr.length; x++) {
		arr[x] = vline + arr[x] + vline + '\n'
	}
	arr.unshift(' ' + corner + hline.repeat(maxChar) + corner + '\n')
	arr.push(corner + hline.repeat(maxChar) + corner + '\n')
	
	return arr.join(' ')

}
