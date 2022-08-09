let friend = [{
	name: 'Roman',
	surname: 'Artemivech',
	age: 15,
	phoneNumber: '3806840306',
	favoriteNumber: 4
	},
	{
			name: 'Artem',
			surname: 'Luzeckiy',
			age: 15,
			phoneNumber: '477357506',
			favoriteNumber: 7
	},
	{
		name: 'Oleks',
		surname: 'Klibanik',
		age: 14,
		phoneNumber: '58573664' ,
		favoriteNumber: 10
},
{
	name: 'Ira',
	surname: 'Kimonia',
	age: 14,
	phoneNumber: '77395925',
	favoriteNumber: 25
},
{
	name: 'Olesia',
	surname: 'Rumikol',
	age: 14,
	phoneNumber: '684534854',
	favoriteNumber: 12
}
];
console.log(friend);
console.log(friend[0].name);
console.log(friend[1].name);
console.log(friend[2].name);
console.log(friend[3].name);
console.log(friend[4].name);
console.log(friend[1].surname);
console.log(friend[2]['name'],`: ${friend[2]['phoneNumber']}`);
console.log(friend[3].phoneNumber.at(-1));
if (friend[0].favoriteNumber % 2 === 0) {
	console.log('Парне');
} else {
	console.log('Не парне');
}
friend[0].age = friend[0].age+1;
friend[1].age = friend[1].age+1;
friend[2].age = friend[2].age+1;
friend[3].age = friend[3].age+1;
friend[4].age = friend[4].age+1;
// Як визначити остайнє число
friend[0].male = 'yes'
friend[1].male = 'yes'
friend[2].male = 'yes'
friend[3].female = 'yes'
friend[4].female = 'yes'

