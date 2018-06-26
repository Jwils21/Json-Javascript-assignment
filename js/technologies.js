"option strict"
var technologies = [
];
var Id=0;
function addRando() {
    var randName = ["VBA","CSharp","Bootstrap","Angular","CSS","HTML","SQL","EF","MVC","Java"];
    var randDiff = Math.floor((Math.random() * 3) + 1);
    var name = randName[(Math.floor((Math.random() * (randName.length))))];
    var Diff = "";
    switch(randDiff) {
        case 1:
            Diff = "Easy";
            break;
        case 2:
            Diff = "Medium";
            break;
        case 3:
            Diff = "Hard";
            break;
    }
    document.getElementById("pName").value = name;
    document.getElementById("pDiff").value = Diff;
    add();
}

function change() {
    var newInput= document.createElement("input");
    var newTr = document.createElement("tr");
    var newTd = document.createElement("td");
    var tbody = document.getElementById("tbody2");
    //create text for box to change
    newTd.innerText = "Id to change:";
    newInput.id = "pId";
    newInput.type = "number";
    newInput.onkeyup = function(){updateBtn()};
    newTr.id="changeRow";
    newTd.appendChild(newInput);
    newTr.appendChild(newTd);
    tbody.appendChild(newTr);

    var tgBtn = document.getElementById("change");
    tgBtn.onclick = function(){changeItm()};

}

function changeItm() {
    //Edit the item
    var tgID = document.getElementById("pId").value;
    var pName = document.getElementById("pName").value;
    var pDiff = document.getElementById("pDiff").value;
    var technology = {id:tgID, name:pName, Difficulty:pDiff};
    technologies.splice((tgID-1),1,technology)
    //display the results
    display();

    var tgBtn = document.getElementById("change");
    var tbody = document.getElementById("tbody2");

    tgBtn.innerText = "Change";
    tgBtn.onclick = function(){change()};
    tbody.removeChild(tbody.childNodes[tbody.childNodes.length-1]);
}


function updateBtn() {
    var tgBtn = document.getElementById("change");
    var tgId = document.getElementById("pId").value
    tgBtn.innerText="Change ID:" + tgId;

    var pName = document.getElementById("pName");
    var pDiff = document.getElementById("pDiff");
    
    pName.value = technologies[tgId-1].name;
    pDiff.value = technologies[tgId-1].Difficulty;
}

function loaded() {

    display();
}

function add() {
    Id++
    var pName = document.getElementById("pName").value;
    var pDiff = document.getElementById("pDiff").value;
    //{ id:1, username:"sa", password:"sa", lastname:"admin", isAdmin:true, active: true },
    var technology = {id:Id, name:pName, Difficulty:pDiff};
    technologies.push(technology);
    display();
}

function display(){
    var tbody = document.getElementById("tbody");
    //clear out the info in the tbody tag
    tbody.innerHTML="";
    for(var technology of technologies) {
        var newTr = document.createElement("tr");
        for(key in technology) {
            var newTd = document.createElement("td");
            newTd.textContent = technology[key];
            newTr.appendChild(newTd);
        }
        tbody.appendChild(newTr)
    }

    //reset values in input boxes
    document.getElementById("pName").value = "";
    document.getElementById("pDiff").value = "";
}