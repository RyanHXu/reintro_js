a = [1,2,3];
b = [4,5,6];
c = a.concat(b);
console.log("c: " + c);



a = [1,2,3];
b = [4,5,6];
c = [...a, ...b]; //spread operator
console.log("c: " + c);



// practice in react
const person = { name: "Ryan"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);
