/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
const x: number = 27

console.log(x);

function doStuff(a: string): void {
	console.log('Vi glömmer inte ' + a);
}



doStuff('1')
const whoops = doStuff('abc')
console.log(whoops + 'ac');

let mixed: (number | string)[]
mixed = [1, 'x', 2, 'y']

type Mix = number | string
let mixed2: Mix[] = [1, 'x', 2, 'y']


type UserId = string
let userIds: UserId[]
userIds = ['f3f3', 'e9e9']
