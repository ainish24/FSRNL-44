function DivisionNo(a,b){
    try{
        if(b==0){
            throw new Error("Denominator should not be zero, Please put a non-zero number!");
        }
        else{
            const div =a/b;
            return div;
        }
    }
    catch(error){
        return("Error occured: ", error.message)
    }
}
const res1=DivisionNo(20,0);
console.log("Division is: ", res1);
h1=document.getElementById('h')
h1.innerHTML+=res1;

const stud={
    name:'John Doe',
    age: 20,
};

function displayStudentDetails(){
    try{
        console.log("Student name: "+stud.name);
        console.log("Student grade: "+stud.grade);
        throw new Error("Not Found!")
    }
    catch(error){
        console.log(error.message)
        return "Error occured";
    }
}

displayStudentDetails();