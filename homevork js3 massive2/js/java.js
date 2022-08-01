let massive = [`Roman`,
    `Oleksiy`,
    `Ira`,
    `Taras`,
    `Maskim`,
    `Mikola`,
    `Sofia`,
    `Polina`,
    `Valera`,
    `Ivan`]
console.log(massive);
console.log(massive[0]);
console.log(massive.at(-1));
if (massive[0] != `Vitalik`) {
  massive.unshift(`VitaliK`);
} else {
  massive.push(`Vitalik`);
}
massive[6] = `Alex`;
console.log(massive);
console.log(massive[2], massive[9], massive[7])
if (massive.length % 2 === 0) {
  massive.push(`new Friend 1`, `new Friend 2`, `new Friend 3`);
} else {
  massive.unshift(`new Friend 1`, `new Friend 2`)
}
console.log(massive);
massive.pop(1);
massive.pop(2);
massive.shift(1);
massive.shift(2);
console.log(massive);
massive = [];
console.log(massive)
// massive.splice(0);

