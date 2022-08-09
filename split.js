const song ="tumi bondhu kala pakhi. ami jeno ki. Boshonto kale tomay bolte pari ni.sada sada kala kala."

const parts = song.split(" ");
console.log (parts);

const sentences = song.split(".");
console.log(sentences);

const character = song.split("");
console.log(character);

// slice & substring

const part1 = song.slice(9,18);
console.log(part1);
const part2 = song.substring(9,18);
console.log (part2);


//concat add string
const name0 = "MD."
const name1 ="Rony";
const name2 = "Ahmed";

console.log(name0.concat(" ",name1,' ',name2));

