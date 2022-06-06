const students = [
    {ID: 1, present: true},
    {ID: 2, present: true},
    {ID: 3, present: false},
];


// filter take four arguments:
/**
 * callbackFn (student,parm2,parm2,parm3) => student.present
 * element
 * indexOptional
 * arrayOptional
 */
const presentStudents = students.filter(student => student.present);
console.log(presentStudents);
