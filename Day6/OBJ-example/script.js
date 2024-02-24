const student={
    name: "Amit",
    age: 30,
    gen: "Male",
    subjects: ["Data Structure", "Pyhton", "JAVA"],

};

console.log(`Name is ${student.name} \nAge is ${student.age} \nGender is ${student.gen} \nAnd subjects are ${student.subjects}`);

student.subjects.push("JavaScript");

console.log(`Name is ${student.name} \nAge is ${student.age} \nGender is ${student.gen} \nAnd subjects are ${student.subjects}`);


const stud=[
    {id:1,name:'Alice',grade:90},
    {id:2,name:'Bob',grade:80},
    {id:3,name:'Charlie',grade:95},
    {id:4,name:'David',grade:75},
];

const updatedStud=stud.map(stud=>{
    return{
        result: stud.grade>=80 ?'Pass' : 'Fail',
    };
});
console.log(stud);
const passingStudents=stud.filter(stud=>stud.grade>=80);
console.log('Passing Students: ', passingStudents);

console.log('Original Students: ', stud);
console.log('Updated Students: ', updatedStud);