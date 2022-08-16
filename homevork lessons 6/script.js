let db = [{
	name: 'Victor',
	code: 1601416,
	age: 14,
	length: 160,
	weight: 42,
	money: 252
},
{
	name: 'Taras',
	code: 1423243,
	age: 19,
	length: 180,
	weight: 50,
	money: 1000
},
{
	name: 'Alex',
	code: 4533333,
	age: 10,
	length: 110,
	weight: 45,
	money: 10
},
{
	name: 'Nastya',
	code: 89878789,
	age: 20,
	length: 160,
	weight: 60,
	money: 776
},
{
	name: 'Oleg',
	code: 66787998,
	age: 30,
	length: 180,
	weight: 90,
	money: 12323
},
{
	name: 'Valera',
	code: 76787876,
	age: 17,
	length: 190,
	weight: 110,
	money: 12
},
{
	name: 'John',
	code: 34343422,
	age: 9,
	length: 90,
	weight: 30,
	money: 776
},
{
	name: 'Yura',
	code: 7888765,
	age: 14,
	length: 150,
	weight: 56,
	money: 8998
},
{
	name: 'Andrii',
	code: 8898788,
	age: 18,
	length: 170,
	weight: 77,
	money: 677
},
{
	name: 'Yulia',
	code: 1215456,
	age: 7,
	length: 80,
	weight: 34,
	money: 0
}
]
// get all names that end with the letter a
console.log(`get all names that end with the letter a`)

let newNameMassive = [];

for (let i = 0; i < db.length; i++) {
	if (db[i].name.at(-1) === `a`) {
	   let odgg = {
			name: db[i].name
		 }
		 newNameMassive.push(odgg);
	}
}

console.log(newNameMassive);

//  level 1 - Notion
let myName = `Yura `;
let mySurname = `Tovarnitskiy`;
alert(`hello ` + myName + mySurname);

//  level 2 - Notion
console.log(`level 2`)

let myNewName = prompt(`Введи імя`);
let myNewSurname = prompt(`Введи прізвище`);
let dateBirtdayYear = prompt (`Введи свій рік народження`);
let dateBirtday = prompt(`Введи свою дату народження`);

console.log(`Hello`,`${myNewName}`,`${myNewSurname}`);
if (1900 < dateBirtdayYear) {
	console.log(`${myNewName} :`,`${2022 - dateBirtdayYear}`);
} else{
	console.log(`${myNewName} :`,`${`Ти точно людина?`}`);
}
if (dateBirtdayYear % 4 === 0 && dateBirtdayYear % 100 !== 0 || dateBirtdayYear % 400 === 0){
	console.log(`${dateBirtdayYear}`, `-`, `високосний`);
} else{
	console.log(`${dateBirtdayYear}`, `-`, `не високосний`);
}

//  level 3 - Notion
console.log(`level 3`)

let numberMassive = [
	31,
	34,
	68,
	7,
	0,
	7,
	49,
	7,
	2,
	4
]
console.log(numberMassive);

if (numberMassive[0] % 2 == 0){
	console.log(`${numberMassive[0]} :`, `парне`)
}else {
	console.log(`${numberMassive[0]} :`, `не парне`)
}
if (numberMassive.at(-1) % 2 == 0){
	console.log(`${numberMassive.at(-1)} :`, `парне`)
}else {
	console.log(`${numberMassive.at(-1)} :`, `не парне`)
}

//  level 4 - Notion
console.log(`level 4 закоментований`)

// let a = parseInt(prompt(`Введи число a`));
// let b = parseInt(prompt(`Введи число b`));

// console.log(`${a}`, `+` , `${b}`, `=`, `${a+b}`)

// let c = parseInt(prompt(`Введи число c`));
// let d = parseInt(prompt(`Введи число d`));

// console.log(`${c}`, `-` , `${d}`, `=`, `${c-d}`)

// let e = parseInt(prompt(`Введи число e`));
// let f = parseInt(prompt(`Введи число f`));

// console.log(`${e}`, `/` , `${f}`, `=`, ` ${e/f}`)

// let g = parseInt(prompt(`Введи число g`));
// let h = parseInt(prompt(`Введи число h`));
// let m = parseInt(prompt(`Введи число m`));


// console.log(`${g}`, `*` , `${h}`, `*`, `${m}`, `=`, ` ${g*m*h}`)

// let n = parseInt(prompt(`Введи число n`));
// let k = parseInt(prompt(`Введи число k`));

// if (n > k) {
// 	console.log(`Більше число`, `${n}`)
// } else{
// 	console.log(`Більше число`, `${k}`)

// }

// let x = parseInt(prompt(`Введи число x`));
// let y = parseInt(prompt(`Введи число y`));
// let z = parseInt(prompt(`Введи число z`));


// if (x > y && z > y) {
// 	console.log(`Найменше число`, `${y}`)
// } else{
// 	if (y > x && z > x) {
// 		console.log(`Найменше число`, `${x}`)
// 	} else {
// 		if (y > z && x > z){
// 			console.log(`Найменше число`, `${z}`)
// 		}
// 	}
// }





//  level 5 - Notion
console.log(`level 5`)

let friendsMassive = [
	 {
		name: `Roman`,
		surName: `Artemovich`,
		age: 15,
		dateOfBirtday: `18/05`,
		numberPhone: 30400543,
		email: `ggroman@gmail.com`,
		favoritFilms : {
			name1: `Srek`,
			name2: `Harry poter`,
		},
		favoritbooks : {
			name1: `the richest man in Babylon`,
			name2: `rich dad and poor dad`,
		}
	},
	{
		name: `Olex`,
		surName: `Klibanik`,
		age: 14,
		dateOfBirtday: `22/01`,
		numberPhone: 3806834628,
		email: `olexkiklibanik@gmail.com`,
		favoritFilms : {
			name1: `Police academy`,
			name2: `Stupid and the most stupid`,
		},
		favoritbooks : {
			name1: `nothing`,
		}
	},
	{
		name: `Micha`,
		surName: `Klibanik`,
		age: 10,
		dateOfBirtday: `28/11`,
		numberPhone: 380682328,
		email: `mishaklibanik@gmail.com`,
		favoritFilms : {
			name1: `Shrek`,
			name2: `Film on Mincraft`,
		},
		favoritbooks : {
			name1: `nothing`,
		}
	},
	{
		name: `Ira`,
		surName: `Derikovna`,
		age: 14,
		dateOfBirtday: `12/05`,
		numberPhone: 38224628,
		email: `girigi@gmail.com`,
		favoritFilms : {
			name1: `Rapunsel`,
			name2: `Harry poter`,
		},
		favoritbooks : {
			name1: `nothing`,
		}
	},
	{
		name: `Olesia`,
		surName: `Moxa`,
		age: 14,
		dateOfBirtday: `4/16`,
		numberPhone: 380224628,
		email: `olesia@gmail.com`,
		favoritFilms : {
			name1: `Ice hear`,
			name2: `Kolimon`,
		},
		favoritbooks : {
			name1: `King kong`,
		}
	},
]
console.log(friendsMassive[0].name, friendsMassive[0].numberPhone);
console.log(friendsMassive[1].surName, friendsMassive[1].age);
console.log(friendsMassive[2].name, friendsMassive[2].surName, friendsMassive[2].email);
console.log(friendsMassive[3].name, friendsMassive[3].favoritFilms);
console.log(friendsMassive[4].name, friendsMassive[4].favoritbooks.name1);





