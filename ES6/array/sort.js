// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const students = [
    {name: "Eagle", grade: 13},
    {name: "Sam", grade: 14},
    {name: "Alex", grade: 15},
    {name: "Devlin", grade: 15},
];

// 1)
// students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);


// 2)

students.sort(function (firstItem, secondItem) {
    return firstItem.grade - secondItem.grade
});


console.log(students)


