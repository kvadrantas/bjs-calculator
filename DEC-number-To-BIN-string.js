// Decimal (number) conversion to Binary (string)
// 123654 -> 11110001100000110


let skaicius = 123654;
// let skaicius = 237
let skaitmenys = [];
 
let sk = skaicius;
let delta = 48;
if (sk === 0) {
 skaitmenys.push(0);
} else {
 while (sk > 0) {
 const skaitmuo = sk % 2;      
 skaitmenys.push(skaitmuo + delta);
 sk = (sk - skaitmuo) / 2;     
 }
}

skaitmenys.reverse();
// console.log(skaitmenys);

let tekstas = "";
for (const s of skaitmenys) {
 tekstas += String.fromCharCode(s);
}
console.log('DEC (number): ', skaicius);
console.log('BIN (string): ', tekstas);