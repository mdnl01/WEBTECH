let str1="Bitty bought some butter the butter was bitter so she bought some more butter to make the bitter butter better";
console.log(str1);

console.log(str1.replace("butter","milk"));
//Output - Bitty bought some milk the butter was bitter so she bought some more butter to make the bitter butter better
console.log(str1.replaceAll("butter","milk"));
//Output - Bitty bought some milk the milk was bitter so she bought some more milk to make the bitter milk better

console.log(str1.replace("Butter","milk"));
//Doesnt work due to case sensitivity


//Enclose the word to replace within //i to ignore case sensitivity
console.log(str1.replace(/Butter/i,"milk"));
//Output - Bitty bought some milk the butter was bitter so she bought some more butter to make the bitter butter better

//Enclose the word to replace within //g to to replaceALl
console.log(str1.replace(/butter/g,"milk"));
//Output - Bitty bought some milk the milk was bitter so she bought some more milk to make the bitter milk better

//Enclose the word to replace within //gi for both
console.log(str1.replace(/Butter/gi,"milk"));
//Output - Bitty bought some milk the milk was bitter so she bought some more milk to make the bitter milk better

//? .toUpperCase
str2="HelloWorld"
console.log(str2.toUpperCase());
// Output - HELLOWORLD

//? .subsitring()
str3 = "Chipi chipi chapa chapa"
console.log(str3.substring(7,20));
//Output - chipi chapa ch

//? .slice()
str3 = "Chipi chipi chapa chapa"
console.log(str3.slice(-4,-1));
//Output - hap

//? .padStart()
str4 = "Chipi chipi chapa chapa"
// console.log(typeof())


email = prompt("Enter your email");
ph=prompt("Enter your phone number");
pass="";
alert(pass = pass.concat(email.slice(0,4),ph.slice(-4)));