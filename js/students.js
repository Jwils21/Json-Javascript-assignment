"option strict"
var students = [
];

function addRando() {
    var randName=["John","Michael","Larry","Mitch","Dan","Anna","Jermaine","Marcus","Foster","David","James","Jacob","Greg","Bethany","Erin","Amanda", "Jorge","Martin","Maria","Estella"];
    var randGpa = Math.floor((Math.random() * 36) + 1);
    var randSat = Math.floor((Math.random() * 1200) + 400);
    var randYear = Math.floor((Math.random() * 4) + 1);

    var name = randName[(Math.floor((Math.random() * (randName.length))))];
    var Year = "";
    switch(randYear) {
        case 1:
            year = "FR";
            break;
        case 2:
            year = "SO";
            break;
        case 3:
            year = "JR";
            break;
        case 4:
            year = "SR";
            break;
    }

    document.getElementById("pId").value = (students.length +1);
    document.getElementById("pName").value = name;
    document.getElementById("pGpa").value = randGpa;
    document.getElementById("pSat").value = randSat;
    document.getElementById("pYear").value = year;
    add();
}

function loaded() {

    display();
}

function add() {
    var pId = document.getElementById("pId").value;
    var pName = document.getElementById("pName").value;
    var pGpa = document.getElementById("pGpa").value;
    var pSat = document.getElementById("pSat").value;
    var pYear = document.getElementById("pYear").value;
    //{ id:1, username:"sa", password:"sa", lastname:"admin", isAdmin:true, active: true },
    var student = {id:pId, name:pName, gpa:pGpa, sat:pSat, year:pYear};
    students.push(student);
    display();
}

function display(){
    var tbody = document.getElementById("tbody");
    //clear out the info in the tbody tag
    tbody.innerHTML="";
    for(var student of students) {
        var newTr = document.createElement("tr");
        for(key in student) {
            var newTd = document.createElement("td");
            newTd.textContent = student[key];
            newTr.appendChild(newTd);
        }
        tbody.appendChild(newTr)
    }
}
