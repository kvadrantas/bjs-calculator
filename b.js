let tekstas = "1E306";  //123645
let delta;

let sk2 = 0;
for(let i = 0; i < tekstas.length; i++) {
 sk2 *= 16;
 delta = tekstas.charCodeAt(i) === 'E' ? 55 : 48
 sk2 += tekstas.charCodeAt(i) - delta;
 // console.log(tekstas[i]);
 // console.log(tekstas.charCodeAt(i));
 // console.log(tekstas.charCodeAt(i) - 48);
}

console.log('HEX (string): ',tekstas);
console.log('HEX (number): ',sk2);
console.log(1E306);