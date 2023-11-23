const name1='Maksim';
const name2="Igor";
const name3=`Mike`;

console.log(name1, name2, name3);

//Конкатенация

const name='Maksim';
const profession='JavaScript-разработчик';

//const allinfo=name+' '+profession;
/* let allinfo=name+' ';
allinfo+=profession; */

const allinfo=`${name} ${profession}`;

console.log('allinfo', allinfo);

// length

const programmingLanguage='JavaScript 123';
console.log(programmingLanguage.length);

console.log(programmingLanguage[5]);
//console.log(programmingLanguage[100]);  //undefined

programmingLanguage[0]='j'; // not work
console.log('programmingLanguage', programmingLanguage);
