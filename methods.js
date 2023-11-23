// toUpperCase, toLowerCase

const animal='Lion';
console.log('upper',animal.toUpperCase());
console.log('lower',animal.toLowerCase());

console.log('animal',animal);

//Найти символы - indexOf, includes
/* const text='JavaScript is my favourite programming language';
console.log('indexOf', text.indexOf('a'));
console.log('includes', text.includes('555')); */

//Обрезка строки slice, substring
/* const programmingLanguage='JavaScript';
console.log('slice',programmingLanguage.slice(1,5));
console.log('substring',programmingLanguage.substring(1,5)); */

//Замена символов в строке - replace, replaceAll
const programmingLanguage='JavaScript';
console.log('replace',programmingLanguage.replace('a','A'));
console.log('replace',programmingLanguage.replaceAll('a','A'));

//trim
const nameOfUser=prompt('What is your name?');
console.log('nameOfUser',nameOfUser.trim());