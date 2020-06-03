const a = 'Andrii';
const b = '1234777';

const person = new User(a, b);

console.log(person);
console.log(person.username);
console.log(person.validatePassword());

const firstStuden = new Student('Rick', '12345', 'Morty');
console.log(firstStuden);
console.log(firstStuden.validatePassword());
console.log(firstStuden.getNameVsNickName());