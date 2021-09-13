// DEC string conversion to DEC number

let tekstas = "123645";
 
let sk2 = 0;
for(let i = 0; i < tekstas.length; i++) {
 sk2 *= 10;
 sk2 += tekstas.charCodeAt(i) - 48;
 // console.log(tekstas[i]);
 // console.log(tekstas.charCodeAt(i));
 // console.log(tekstas.charCodeAt(i) - 48);
}

console.log('DEC (string): ',tekstas);
console.log('DEC (number): ',sk2);