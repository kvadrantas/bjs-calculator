// Decimal (number) conversion to Hexadecimal (string)
// 123645 -> 1E306
// 234595482873 -> 369EFAFCF9

let skaicius = 123654;
// let skaicius = 1095732
let skaitmenys = [];
 
let sk = skaicius;
let delta = 0;
if (sk === 0) {
 skaitmenys.push(0);
} else {
 while (sk > 0) {
 const skaitmuo = sk % 16;      
 delta = skaitmuo > 9 ? 55 : 48;
 skaitmenys.push(skaitmuo + delta);
 sk = (sk - skaitmuo) / 16;     
 }
}

skaitmenys.reverse();
// console.log(skaitmenys);

let tekstas = "";
for (const s of skaitmenys) {
 tekstas += String.fromCharCode(s);
}
console.log('DEC (number): ', skaicius);
console.log('HEX (string): ', tekstas);