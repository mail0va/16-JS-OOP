

// TASK 1

function Btn1() {

    var total=1;
    
    var c =document.getElementById('reply2');

    // for (let i = 10; i < 15 || i > 10; i++) {
    //     total *= i;
    // }
    for (let i = 10; i < 15; i++) {
        total *= i;
    }
    
     c.innerHTML=total;
}



// TASK 2

function Btn2() {

    var input1 = document.getElementById('input1').value;
    var input2 =document.getElementById('input2').value;

    alert(`Cavab: ${(input1*input2).toFixed(2)}`);
    
}



// INHERITANCE

var person = {
    firstname: "Sema",
    lastname: "Mailova",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
}

var human = {
    firstname: "Medine",
    lastname: "Aghazade"
}
human.__proto__ = person
console.log(person.getFullName());
console.log(human.getFullName());

// ENCAPSULATION

var teacher = {
    name: "Sema"
}
console.log(teacher.name);
teacher.name = "Huseyn"
console.log(teacher.name);
teacher.name = "Vusal"
console.log(teacher.name);