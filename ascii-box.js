const hline = '-'
const vline = '|'
const corner = '+'

function box(input, stringLength){
    input = input.trim()
    if (input.length > stringLength){
        input = input.substring(0, stringLength)
    }
    else if (input.length < stringLength){
        input = (input + ' '.repeat(stringLength)).slice(0, stringLength)
    }
    process.stdout.write(`
    ${corner + hline.repeat(input.length + 2) + corner}
    ${vline + input.padStart(input.length + 1, ' ').padEnd(input.length + 2, ' ') + vline}
    ${corner + hline.repeat(input.length + 2) + corner}
    \n`)
}

box('Hello friend', 30)

// pass arguements from command line and use double box characters
// let [vline, hline, tlcorner, trcorner, blcorner, brcorner] = ['║', '═', '╔', '╗', '╚', '╝']

// function box(input){
// 	input = input.padStart(input.length + 1, ' ').padEnd(input.length + 2, ' ')
// 	boxstr = tlcorner + hline.repeat(input.length) + trcorner + '\n' + vline + input + vline + '\n' + blcorner + hline.repeat(input.length) + brcorner
// 	console.log(boxstr)

// }

// box(process.argv[2])
