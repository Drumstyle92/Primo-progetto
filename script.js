const Study_group = {};

function Student (name,surname,age,city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.city = city;
}

function meanAge () {
    
    let sumAges = 0;
    let studentsNumber = 0;
    for(let student in Study_group) {
        studentsNumber +=1;
        sumAges += Study_group[student]["age"];
        
        
    
    }
         
    return sumAges / studentsNumber;
    
}

let Giovanni = new Student ("Giovanni","Tirone",29,"Sondrio");
Study_group["Giovanni"]= Giovanni;
let Dino = new Student ("Dino","Petrucci",30, "Termoli");
Study_group["Dino"]= Dino;
console.log(meanAge());
