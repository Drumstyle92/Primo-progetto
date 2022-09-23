const Study_group = {};

function Student (name,surname,age,city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.city = city;
}

function meanAge () {
    let meanAgeValue = 0;
    let sumAges = 0;
    let studentsNumber = 0;
    for(let student in Study_group) {
        studentsNumber +=1;
        sumAges += Study_group[student][age];
        meanAgeValue = sumAges/studentsNumber; 
    }
    return meanAgeValue; 
}

let Giovanni = new Student ("Giovanni","Tirone",29,"Sondrio");

Study_group["Giovanni"] = Giovanni;